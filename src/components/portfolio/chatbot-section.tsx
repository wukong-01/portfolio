"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SectionTitle } from "@/components/portfolio/section-title";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const starterQuestions = [
  "Tell me about your latest experience.",
  "What tech stack do you use most?",
  "What is your educational background?",
];

const loadingHints = ["Reviewing profile context...", "Composing response...", "Almost done..."];

export function ChatbotSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingHintIndex, setLoadingHintIndex] = useState(0);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const hasMessages = useMemo(() => messages.length > 0, [messages.length]);

  useEffect(() => {
    if (!isLoading) {
      setLoadingHintIndex(0);
      return;
    }
    const interval = window.setInterval(() => {
      setLoadingHintIndex((prev) => (prev + 1) % loadingHints.length);
    }, 1300);
    return () => window.clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const loadingHint = loadingHints[loadingHintIndex];

  async function sendMessage(rawText: string) {
    const text = rawText.trim();
    if (!text || isLoading) return;

    setError(null);
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      role: "user",
      content: text,
    };
    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      role: "assistant",
      content: "",
    };

    const messagesForHistory = [...messages, userMessage]
      .filter((item) => item.content.trim().length > 0)
      .slice(-8)
      .map((item) => ({ role: item.role, content: item.content }));

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
    setIsLoading(true);

    const requestController = new AbortController();
    const requestTimeout = window.setTimeout(() => requestController.abort(), 60000);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: requestController.signal,
        body: JSON.stringify({ message: text, history: messagesForHistory }),
      });

      if (!res.ok) {
        const payload = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(payload.error || "Could not get a response.");
      }

      if (!res.body) throw new Error("No streaming response received.");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let receivedText = "";

      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          receivedText += chunk;
          setMessages((prev) =>
            prev.map((item) => (item.id === assistantMessage.id ? { ...item, content: receivedText } : item)),
          );
        }
      } finally {
        reader.releaseLock();
      }

      if (receivedText.trim().length === 0) throw new Error("No answer returned from model.");
    } catch (err) {
      setMessages((prev) => prev.filter((item) => item.id !== assistantMessage.id));
      if (err instanceof DOMException && err.name === "AbortError") {
        setError("Request timed out. Please try again.");
      } else {
        setError(err instanceof Error ? err.message : "Something went wrong.");
      }
    } finally {
      window.clearTimeout(requestTimeout);
      setIsLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await sendMessage(input);
  }

  return (
    <section id="chatbot" className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title="Ask Me Anything" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.06 }}
        className="glass-card rounded-2xl p-5 md:p-6"
      >
        <p className="mb-4 text-sm text-slate-500">
          Ask anything about Cao Thanh Binh&apos;s background, skills, and experience.
        </p>

        <div
          ref={messagesContainerRef}
          className="max-h-[360px] space-y-3 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-3"
        >
          {!hasMessages ? (
            <div className="space-y-2 text-sm text-slate-500">
              <p>Try one of these:</p>
              <div className="flex flex-wrap gap-2">
                {starterQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => void sendMessage(question)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                message.role === "user"
                  ? "ml-auto bg-slate-900 text-white"
                  : "mr-auto border border-slate-200 bg-white text-slate-800 shadow-sm"
              }`}
            >
              {message.role === "assistant" ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => <p className="whitespace-pre-wrap">{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
                    ul: ({ children }) => <ul className="ml-4 list-disc space-y-1">{children}</ul>,
                    ol: ({ children }) => <ol className="ml-4 list-decimal space-y-1">{children}</ol>,
                    a: ({ children, href }) => (
                      <a href={href} target="_blank" rel="noreferrer" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">
                        {children}
                      </a>
                    ),
                  }}
                >
                  {message.content || (isLoading && index === messages.length - 1 ? loadingHint : "")}
                </ReactMarkdown>
              ) : (
                message.content
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask a question about Binh..."
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 sm:py-2.5"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || input.trim().length === 0}
            className="rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 sm:py-2.5"
          >
            Send
          </button>
        </form>

        {error ? <p className="mt-3 text-sm text-red-500">{error}</p> : null}
      </motion.div>
    </section>
  );
}
