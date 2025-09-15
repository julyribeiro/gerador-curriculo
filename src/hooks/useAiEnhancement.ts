// src/hooks/useAIEnhancement.ts
import { useState } from "react";
import { improveText } from "../services/aiService";

export function useAIEnhancement() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function enhance(original: string) {
    setLoading(true);
    setError(null);
    try {
      const result = await improveText(original);
      return result;
    } catch (err: any) {
      setError(err?.message ?? "Erro desconhecido");
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { enhance, loading, error };
}
