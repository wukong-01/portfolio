import { PROFILE_KNOWLEDGE } from "@/data/profile-knowledge";
import { Env } from "@/lib/env";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatRequestBody = {
  message?: string;
  history?: ChatMessage[];
};

function normalizeHistory(history: ChatMessage[] = []): ChatMessage[] {
  return history
    .filter(
      (item) =>
        item &&
        (item.role === "user" || item.role === "assistant") &&
        typeof item.content === "string",
    )
    .slice(-10)
    .map((item) => ({ role: item.role, content: item.content.trim() }))
    .filter((item) => item.content.length > 0);
}

function getDeltaText(payload: unknown): string {
  if (!payload || typeof payload !== "object") return "";
  const choices = (payload as { choices?: unknown[] }).choices;
  if (!Array.isArray(choices) || choices.length === 0) return "";

  const firstChoice = choices[0] as { delta?: { content?: unknown } };
  const content = firstChoice?.delta?.content;
  if (typeof content === "string") return content;

  if (Array.isArray(content)) {
    return content
      .map((item) => {
        if (!item || typeof item !== "object") return "";
        const text = (item as { text?: unknown }).text;
        return typeof text === "string" ? text : "";
      })
      .join("");
  }

  return "";
}

function hasFinishReason(payload: unknown): boolean {
  if (!payload || typeof payload !== "object") return false;
  const choices = (payload as { choices?: unknown[] }).choices;
  if (!Array.isArray(choices) || choices.length === 0) return false;

  const finishReason = (choices[0] as { finish_reason?: unknown })
    .finish_reason;
  return typeof finishReason === "string" && finishReason.length > 0;
}

export async function POST(request: Request) {
  try {
    const apiKey = Env.Private.OPENROUTER_API_KEY;
    const openRouterUrl = Env.Private.OPENROUTER_URL;
    const chatModel = Env.Private.OPENROUTER_MODEL;
    if (!apiKey) {
      return Response.json(
        {
          error:
            "Missing OPENROUTER_API_KEY. Add it to your environment variables.",
        },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ChatRequestBody;
    const message = body?.message?.trim();

    if (!message) {
      return Response.json({ error: "Message is required." }, { status: 400 });
    }

    const history = normalizeHistory(body.history);

    const systemPrompt = [
      "You are Cao Thanh Binh's portfolio assistant.",
      "Answer user questions about Cao Thanh Binh using only the provided profile knowledge.",
      "If details are missing, explicitly say you do not have that information.",
      "Do not invent facts.",
      "",
      "Profile knowledge:",
      PROFILE_KNOWLEDGE,
    ].join("\n");

    const upstreamController = new AbortController();
    const upstreamTimeout = setTimeout(() => {
      upstreamController.abort();
    }, 60000);

    const response = await fetch(openRouterUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Cao Thanh Binh Portfolio Chatbot",
      },
      body: JSON.stringify({
        model: chatModel,
        messages: [
          { role: "system", content: systemPrompt },
          ...history,
          { role: "user", content: message },
        ],
        temperature: 0.2,
        stream: true,
      }),
      signal: upstreamController.signal,
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      const reason = data?.error?.message ?? "OpenRouter request failed.";
      return Response.json({ error: reason }, { status: response.status });
    }

    if (!response.body) {
      return Response.json(
        { error: "No streaming response body returned." },
        { status: 502 },
      );
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    let buffer = "";

    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        let closed = false;

        const closeStream = async () => {
          if (closed) return;
          closed = true;
          clearTimeout(upstreamTimeout);
          try {
            await reader.cancel();
          } catch {
            // Ignore cancellation errors from upstream.
          }
          controller.close();
          reader.releaseLock();
        };

        void (async () => {
          try {
            while (true) {
              const { value, done } = await reader.read();
              if (done) {
                await closeStream();
                return;
              }

              buffer += decoder.decode(value, { stream: true });
              const lines = buffer.split(/\r?\n/);
              buffer = lines.pop() ?? "";

              for (const rawLine of lines) {
                const line = rawLine.trim();
                if (!line.startsWith("data:")) continue;

                const payload = line.slice(5).trim();
                if (!payload) continue;
                if (payload === "[DONE]") {
                  await closeStream();
                  return;
                }

                try {
                  const parsed = JSON.parse(payload);
                  const text = getDeltaText(parsed);
                  if (text) {
                    controller.enqueue(encoder.encode(text));
                  }

                  if (hasFinishReason(parsed)) {
                    await closeStream();
                    return;
                  }
                } catch {
                  // Ignore malformed chunk from upstream and continue.
                }
              }
            }
          } catch {
            await closeStream();
          }
        })();
      },
      cancel() {
        clearTimeout(upstreamTimeout);
        upstreamController.abort();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch {
    return Response.json(
      { error: "Unexpected server error while generating chat response." },
      { status: 500 },
    );
  }
}
