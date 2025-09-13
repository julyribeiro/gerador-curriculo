import { useState, useEffect } from "react";
import { useCVData } from "../../hooks/useCVData";
import { Skeleton } from "../ui/Skeleton";

interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean; // Propriedade 'current' adicionada
}

export default function ExperiencesSection() {
  const { cvData, updateField } = useCVData();
  const [isLoading, setIsLoading] = useState(true);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [current, setCurrent] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
    setCurrent(false);
    setEditingId(null);
  }

  return (
    <section className="grid gap-4">
      <h3 className="text-xl font-semibold text-gray-700">
        Experiências Profissionais
      </h3>

      <div className="form-group space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <span className="grid gap-2">
            <label className="form-label">Empresa</label>
            <input
              type="text"
              className="form-input"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Google"
            />
          </span>
          <span className="grid gap-2">
            <label className="form-label">Cargo</label>
            <input
              type="text"
              className="form-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Desenvolvedor Front-end"
            />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <span className="grid gap-2">
            <label className="form-label">Data de início</label>
            <input
              type="text"
              className="form-input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="01/2020"
            />
          </span>
          <span className="grid gap-2">
            <label className="form-label">Data de saída</label>
            <input
              type="text"
              className="form-input"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="02/2021"
              disabled={current}
            />
          </span>
        </div>

        <div className="grid gap-2">
          <label className="form-label mt-2">Descrição de suas atividades</label>
          <textarea
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Desenvolvimento de aplicações web com React e Tailwind CSS."
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="current-job"
            checked={current}
            onChange={(e) => setCurrent(e.target.checked)}
          />
          <label htmlFor="current-job" className="form-label">
            Trabalho atual
          </label>
        </div>

        {editingId ? (
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600 transition duration-200"
              onClick={saveEdit}
            >
              Salvar
            </button>
            <button
              className="px-4 py-2 bg-gray-400 text-white font-medium rounded-md shadow hover:bg-gray-500 transition duration-200"
              onClick={resetInputs}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 transition duration-200"
            onClick={addExperience}
          >
            Adicionar
          </button>
        )}
      </div>

      <ul className="space-y-2 mt-4">
        {isLoading ? (
          <>
            <li className="flex justify-between items-start bg-white p-2 rounded shadow">
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <Skeleton className="h-3 w-full" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-8 w-16" />
              </div>
            </li>
            <li className="flex justify-between items-start bg-white p-2 rounded shadow">
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <Skeleton className="h-3 w-full" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-8 w-16" />
              </div>
            </li>
          </>
        ) : (
          cvData.experiences.map((exp) => (
            <li
              key={exp.id}
              className="flex justify-between items-start bg-white p-2 rounded shadow"
            >
              <div>
                <strong>{exp.role}</strong> em {exp.company} <br />
                <em>
                  {exp.startDate} - {exp.current ? "Presente" : exp.endDate}
                </em>
                <p>{exp.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                  onClick={() => startEdit(exp)}
                >
                  Editar
                </button>
                <button
                  className="px-2 py-1 bg-red-400 text-white rounded hover:bg-red-600"
                  onClick={() => removeExperience(exp.id)}
                >
                  Remover
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}