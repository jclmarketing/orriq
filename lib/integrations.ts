export type Integration = {
  name: string;
  role: string;
};

export const integrations: Integration[] = [
  { name: "Supabase", role: "Database & auth" },
  { name: "Next.js", role: "Application framework" },
  { name: "Vercel", role: "Edge deployment" },
  { name: "n8n", role: "Workflow automation" },
  { name: "Claude", role: "LLM reasoning" },
  { name: "OpenAI", role: "LLM reasoning" },
  { name: "Gemini", role: "Multimodal AI" },
  { name: "Vapi", role: "AI phone agents" },
  { name: "8x8", role: "Telephony logs" },
  { name: "Sage", role: "Accounting" },
  { name: "Stripe", role: "Payments" },
  { name: "Cloudflare", role: "Network & DNS" },
  { name: "Docker", role: "Self-hosted infra" },
  { name: "GitHub", role: "Source of truth" },
];
