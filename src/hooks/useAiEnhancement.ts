export async function enhanceText(text: string): Promise<string> {
  const response = await fetch("http://localhost:3000/api/enhance-text", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) throw new Error("Erro da API");

  const data = await response.json();
  return data.improvedText;
}
