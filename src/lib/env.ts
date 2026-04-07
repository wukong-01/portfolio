type PortfolioEnv = {
  Private: {
    OPENROUTER_API_KEY: string;
    OPENROUTER_URL: string;
    OPENROUTER_MODEL: string;
  };
};

const DEFAULT_OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_OPENROUTER_MODEL = "openai/gpt-oss-120b:free";

export const Env: PortfolioEnv = {
  Private: {
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY?.trim() || "",
    OPENROUTER_URL: process.env.OPENROUTER_URL?.trim() || DEFAULT_OPENROUTER_URL,
    OPENROUTER_MODEL: process.env.OPENROUTER_MODEL?.trim() || DEFAULT_OPENROUTER_MODEL,
  },
};
