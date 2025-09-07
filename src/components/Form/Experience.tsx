import { useState } from "react";
import { useCVData } from "../../hooks/useCVData";

export default function ExperiencesSection() {
  const { cvData, updateField } = useCVData();

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  function addExperience() {
    if (!company.trim() || !role.trim()) return;

    const newExperience = {
      id: crypto.randomUUID(),
      company,
      role,
      startDate,
      endDate,
      description,
    };

    updateField("experiences", [...cvData.experiences, newExperience]);

    // resetar inputs
    setCompany("");
    setRole("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  }

  function removeExperience(id: string) {
    updateField(
      "experiences",
      cvData.experiences.filter((exp) => exp.id !== id)
    );
  }

  return (
    <section className="grid gap-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Experiências Profissionais</h3>

      <div className="form-group space-y-2">
        <div className="grid gap-2">
          <label className="form-label">Empresa</label>
          <input
            type="text"
            className="form-input"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Google"
          />
        </div>

        <div className="grid gap-2">
          <label className="form-label">Cargo</label>
          <input
            type="text"
            className="form-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Desenvolvedor Front-end"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <label className="form-label">Data de início</label>
            <input
              type="text"
              className="form-input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="01/2020"
            />
          </div>
          <div className="grid gap-2">
            <label className="form-label">Data de Fim</label>
            <input
              type="text"
              className="form-input"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="02/2021"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="form-label">Descrição de suas atividades</label>
          <textarea
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Desenvolvimento de aplicações web com React e Tailwind CSS."
          />
        </div>

        <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 transition duration-200" onClick={addExperience}>
          Adicionar
        </button>
      </div>

      <ul className="space-y-2 mt-4">
        {cvData.experiences.map((exp) => (
          <li
            key={exp.id}
            className="flex justify-between items-start bg-white p-2 rounded shadow"
          >
            <div>
              <strong>{exp.role}</strong> em {exp.company} <br />
              <em>{exp.period}</em>
              <p>{exp.description}</p>
            </div>
            <button
              className="btn-danger ml-2"
              onClick={() => removeExperience(exp.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}