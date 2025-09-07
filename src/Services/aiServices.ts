export async function enhanceText(text: string): Promise<string> {
  try {
    // Pega a API Key da variável de ambiente
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`, // usa a variável de ambiente
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

  } catch (error) {
    console.error("Erro no aiService:", error);
    throw error;
  }
}
