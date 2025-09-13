import { useState } from "react";
import { useCVData } from "../../hooks/useCVData";
import { enhanceText } from "../../services/aiServices";


export default function PersonalInfo() {
  const { cvData, updateField } = useCVData();
  const [loading, setLoading] = useState(false);

  const resumeCount = cvData.resume ? cvData.resume.length : 0;

  async function handleEnhance() {
    if (!cvData.resume) return; // evita chamada com texto vazio
    try {
      setLoading(true);
      const improved = await enhanceText(cvData.resume);
      updateField("resume", improved);
    } catch (error) {
      console.error("Erro ao melhorar o texto:", error);
      alert("Não foi possível melhorar o texto agora.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-14">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Informações Pessoais</h3>

      <div className="form-group">

        <div className="grid grid-cols-2 gap-4">
          <span className="form-group">
            <label className="block text-sm font-medium text-gray-600 mb-1">Nome completo</label>
            <input
              type="text"
              placeholder="Digite o seu nome completo"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={cvData.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </span>
          <span>
            <label className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
            <input
              type="email"
              placeholder="Digite o seu e-mail"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={cvData.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </span>
        </div>


        <div className="grid grid-cols-2 gap-4">
          <span>
            <label className="block text-sm font-medium text-gray-600 mb-1">Telefone</label>
            <input
              type="text"
              placeholder="(xx) x xxxx-xxxx"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={cvData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </span>
          <span>
            <label className="block text-sm font-medium text-gray-600 mb-1">LinkedIn</label>
            <input
              type="text"
              placeholder="Digite o seu LinkedIn"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={cvData.linkedin}
              onChange={(e) => updateField("linkedin", e.target.value)}
            />
          </span>
        </div>

        <div className="form-group mt-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Resumo Profissional</label>
          <textarea
            rows={4}
            maxLength={300}
            placeholder="Descreva brevemente sua experiência e objetivos."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            value={cvData.resume}
            onChange={(e) => updateField("resume", e.target.value)}
          />
          <p className="text-xs text-gray-500 text-right">
            {resumeCount}/300
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={handleEnhance}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Melhorando..." : "Melhorar Texto"}
          </button>
        </div>
      </div>
    </section>
  );
}