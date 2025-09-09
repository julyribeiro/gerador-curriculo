import { useState } from 'react';

export function useAiEnhancement() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  async function enhanceText(text: string) {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("http://localhost:3000/api/enhance-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Erro da API: ${errText}`);
      }

      const data = await response.json();
      setResult(data.improvedText);
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    result,
    enhanceText,
  };
}
