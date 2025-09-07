import { useState } from "react";
import { useCVData } from "../../hooks/useCVData";

export default function SkillsSection() {
  const { cvData, updateField } = useCVData();
  const [skillName, setSkillname] = useState("");
  const [skillLevel, setSkillLevel] = useState<
    "Básico" | "Intermediário" | "Avançado"
  >("Básico");

  function addSkill() {
    if (!skillName.trim()) return;

    const newSkill = {
      id: crypto.randomUUID(),
      name: skillName,
      level: skillLevel,
    };

    updateField("skills", [...cvData.skills, newSkill]);
    setSkillname("");
    setSkillLevel("Básico");
  }

  function removeSkill(id: string) {
    updateField(
      "skills",
      cvData.skills.filter((s) => s.id !== id)
    );
  }

  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Habilidades</h3>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Digite uma habilidade"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={skillName}
          onChange={(e) => setSkillname(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value as any)}
        >
          <option>Básico</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 transition duration-200"
          onClick={addSkill}
        >
          Adicionar
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {cvData.skills.map((skill) => (
          <button
            key={skill.id}
            className="px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-full shadow-sm hover:bg-red-100 hover:text-red-600 transition duration-200"
            onClick={() => removeSkill(skill.id)}
            title="Clique para remover"
          >
            {skill.name} <em className="text-xs">({skill.level})</em> <span className="text-red-500">✕</span>
          </button>
        ))}
      </div>
    </section>
  );
}