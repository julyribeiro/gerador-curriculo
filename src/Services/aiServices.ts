// src/services/aiService.ts

// Função auxiliar para retry automático
async function withRetry<T>(
  fn: () => Promise<T>,
  retries: number,
  delay: number
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      console.log(`Falha na requisição, tentando novamente em ${delay}ms...`);
      await new Promise((res) => setTimeout(res, delay));
      return withRetry(fn, retries - 1, delay);
    }
    throw error;
  }
}

export async function enhanceText(text: string): Promise<string> {
  // Passo 1: Validação dos dados
  if (!text || text.trim() === "") {
    throw new Error("O texto para melhoria não pode estar vazio.");
  }
  
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("API Key da OpenAI não encontrada. Verifique suas variáveis de ambiente.");
  }

  // Passo 2: Execução da requisição com retry automático
  const enhancedText = await withRetry(async () => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Você é um assistente que melhora descrições de currículos. Responda apenas em texto puro, sem Markdown ou formatação."
          },
          {
            role: "user",
            content: `Melhore o seguinte texto para currículo: ${text}`
          }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Erro da API: ${errText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }, 3, 1000);

  return enhancedText;
}