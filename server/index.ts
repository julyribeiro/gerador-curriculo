// server/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const OPENAI_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_KEY) {
  console.error("🚨 Missing OPENAI_API_KEY in .env");
  process.exit(1);
}

const client = new OpenAI({ apiKey: OPENAI_KEY });

// health
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// endpoint principal: recebe prompt e devolve texto melhorado
app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Campo 'prompt' obrigatório." });
    }

    // usa Responses API (mais direto no SDK JS moderno)
    const response = await client.responses.create({
      model: "gpt-4o-mini", // pode trocar se quiser outro modelo
      input: prompt,
      // max_output_tokens pode ser ajustado conforme necessidade
      max_output_tokens: 512,
    });

    // tenta extrair texto de forma segura
    let text = (response as any).output_text ?? null;

    if (!text) {
      // fallback: varre response.output pra pegar output_text
      const out = (response as any).output;
      if (Array.isArray(out)) {
        const parts: string[] = [];
        for (const item of out) {
          if (item?.type === "message" && Array.isArray(item.content)) {
            for (const c of item.content) {
              if (c?.type === "output_text" && c?.text) parts.push(c.text);
            }
          }
        }
        text = parts.join("\n");
      }
    }

    if (!text) text = JSON.stringify(response);

    return res.json({ text });
  } catch (err: any) {
    console.error("OpenAI error:", err?.message ?? err);
    const status = err?.status ?? 500;
    return res.status(status).json({ error: err?.message ?? "Erro desconhecido" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:3001`);
});
