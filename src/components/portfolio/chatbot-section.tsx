"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HiOutlineChatBubbleOvalLeft, HiSparkles, HiXMark } from "react-icons/hi2";

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
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingHintIndex, setLoadingHintIndex] = useState(0);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const launcherRef = useRef<HTMLButtonElement | null>(null);

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

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (launcherRef.current?.contains(target)) return;
      setIsOpen(false);
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

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
    <>
      {/* Floating launcher */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_18px_45px_-12px_rgba(15,23,42,0.55)] transition hover:bg-slate-700"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <HiXMark className="text-2xl" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <HiOutlineChatBubbleOvalLeft className="text-2xl" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Popup chat panel */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={panelRef}
            id="chatbot"
            role="dialog"
            aria-label="Ask me anything chat"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-1.5rem)] origin-bottom-right overflow-hidden rounded-[1.5rem] border-[3px] border-white bg-[#f3f4fa] p-4 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.45)] sm:w-[400px] sm:p-5"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white">
                <HiSparkles className="text-base" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-500">AI Assistant</p>
                <h2 className="text-lg font-bold leading-tight text-slate-900">Ask me anything</h2>
              </div>
            </div>

            <div
              ref={messagesContainerRef}
              className="max-h-[280px] space-y-2 overflow-y-auto rounded-xl border border-slate-200 bg-white/70 p-3"
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

            <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question about Binh..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || input.trim().length === 0}
                className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send
              </button>
            </form>

            {error ? <p className="mt-3 text-sm text-red-500">{error}</p> : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
