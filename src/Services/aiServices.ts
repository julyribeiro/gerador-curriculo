// src/services/aiService.ts
export async function improveText(prompt: string): Promise<string> {
  const resp = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!resp.ok) {
    const body = await resp.json().catch(() => ({}));
    throw new Error(body?.error ?? `HTTP ${resp.status}`);
  }

  const data = await resp.json();
  return data.text as string;
}
