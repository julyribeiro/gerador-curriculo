// src/components/Experience/ExperiencesSection.tsx
import { useState } from "react";
import { useCVData } from "../../hooks/useCVData";
import ExperienceItem from "../UI/ExperienceItem";
import type { Experience } from "../../types/cv.types";

export default function ExperiencesSection() {
  const { cvData, updateField } = useCVData();

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [current, setCurrent] = useState(false);

  // Estado para edição
  const [editingId, setEditingId] = useState<string | null>(null);

  function addExperience() {
    if (!company.trim() || !role.trim()) return;

    const newExperience = {
      id: crypto.randomUUID(),
      company,
      role,
      startDate,
      endDate,
      description,
      current,
    };

    updateField("experiences", [...cvData.experiences, newExperience]);
    resetInputs();
  }

  function removeExperience(id: string) {
    updateField(
      "experiences",
      cvData.experiences.filter((exp) => exp.id !== id)
    );
    if (editingId === id) resetInputs();
  }

  function startEdit(exp: Experience) {
    setEditingId(exp.id);
    setCompany(exp.company);
    setRole(exp.role);
    setStartDate(exp.startDate);
    setEndDate(exp.endDate);
    setDescription(exp.description);
    setCurrent(exp.current);
  }

  function saveEdit() {
    if (!company.trim() || !role.trim() || !editingId) return;

    updateField(
      "experiences",
      cvData.experiences.map((exp) =>
        exp.id === editingId
          ? { ...exp, company, role, startDate, endDate, description, current }
          : exp
      )
    );
    resetInputs();
  }

  function resetInputs() {
    setCompany("");
    setRole("");
    setStartDate("");
    setEndDate("");
    setDescription("");
    setEditingId(null);
    setCurrent(false);
  }

  return (
    <section className="grid gap-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Experiências Profissionais</h3>

      <div className="form-group space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <span className="grid gap-2">
            <label className="form-label">Empresa</label>
            <input
              type="text"
              className="form-input"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Informe o nome da empresa"
            />
          </span>
          <span className="grid gap-2">
            <label className="form-label">Cargo</label>
            <input
              type="text"
              className="form-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Informe seu cargo"
            />
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <label className="form-label">Data de início</label>
            <input
              type="text"
              className="form-input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="mm/aaaa"
            />
          </div>
          <div className="grid gap-2">
            <label className="form-label">Data de saída</label>
            <input
              type="text"
              className="form-input"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="mm/aaaa"
              disabled={current}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="form-label">Descrição de suas atividades</label>
          <textarea
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descreva suas principais responsabilidades e conquistas."
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={current}
            onChange={(e) => setCurrent(e.target.checked)}
            id="current-job"
          />
          <label htmlFor="current-job">Trabalho atual</label>
        </div>

        {editingId ? (
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-green-500 text-white font-medium rounded-md shadow cursor-pointer hover:bg-green-600 transition duration-200"
              onClick={saveEdit}
            >
              Salvar
            </button>
            <button
              className="px-4 py-2 bg-gray-400 text-white font-medium rounded-md shadow cursor-pointer hover:bg-gray-500 transition duration-200"
              onClick={resetInputs}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow cursor-pointer hover:bg-blue-600 transition duration-200"
            onClick={addExperience}
          >
            Adicionar
          </button>
        )}
      </div>

      <ul className="space-y-2 mt-4">
        {cvData.experiences.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} onEdit={startEdit} onRemove={removeExperience} />
        ))}
      </ul>
    </section>
  );
}