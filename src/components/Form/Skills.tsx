import { useState } from "react";
import { useCVData } from "../../hooks/useCVData";
import SkillItem from "../UI/SkillItem"; //

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
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Digite uma habilidade"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={skillName}
          onChange={(e) => setSkillname(e.target.value)}
        />
        <label htmlFor="skillLevel" className="sr-only">Nível da habilidade</label>
        <select
          id="skillLevel"
          aria-label="Nível da habilidade"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value as "Básico" | "Intermediário" | "Avançado")}
        >
          <option>Básico</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow cursor-pointer hover:bg-blue-600 transition duration-200"
          onClick={addSkill}
        >
          Adicionar
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {cvData.skills.map((skill) => (
          <SkillItem
            key={skill.id}
            name={skill.name}
            level={skill.level}
            onClick={() => removeSkill(skill.id)}
          />
        ))}
      </div>
    </section>
  );
}