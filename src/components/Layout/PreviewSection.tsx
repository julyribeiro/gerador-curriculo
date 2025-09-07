import { useCVData } from "../../hooks/useCVData";

export default function PreviewSection() {
  const { cvData } = useCVData();

  return (
    <section className="flex-1 p-10 bg-white max-w-4xl mx-auto shadow-md rounded-md">
      {/* Nome */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-wide">
          {cvData.name || "Seu Nome Completo"}
        </h1>
      </div>

      {/* Informações de contato */}
      <div className="flex flex-col items-center space-y-1 text-gray-700 mb-6">
        <p>{cvData.email || "seu.email@exemplo.com"}</p>
        <p>{cvData.phone || "(xx) xxxxx-xxxx"}</p>

        {cvData.linkedin && (
          <a
            href={cvData.linkedin}
            className="text-sm text-white bg-gray-700 px-3 py-1 rounded-md hover:bg-gray-800 transition"
          >
            {cvData.linkedin}
          </a>
        )}
      </div>

      {/* Resumo Profissional */}
      <section className="mb-8">
        <h2 className="bg-gray-200 text-gray-800 text-center font-semibold py-1 rounded">
          RESUMO PROFISSIONAL
        </h2>
        <p className="text-gray-700 mt-3 leading-relaxed text-center">
          {cvData.resume ||
            "Um breve resumo sobre sua trajetória profissional, objetivos e principais conquistas."}
        </p>
      </section>

      {/* Experiência Profissional */}
      <section className="mb-8">
        <h2 className="bg-gray-200 text-gray-800 text-center font-semibold py-1 rounded">
          EXPERIÊNCIA PROFISSIONAL
        </h2>
        {cvData.experiences.length > 0 ? (
          <div className="mt-4 space-y-6">
            {cvData.experiences.map((exp) => (
              <div key={exp.id} className="text-gray-700">
                <p className="font-bold uppercase">{exp.role}</p>
                <p className="italic">
                  {exp.company} | {exp.period}{" "}
                  {exp.current && "(Atual)"}
                </p>
                {exp.description && (
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {exp.description
                      .split("\n")
                      .map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic mt-2 text-center">
            Nenhuma experiência adicionada ainda.
          </p>
        )}
      </section>

      {/* Competências Técnicas */}
      <section>
        <h2 className="bg-gray-200 text-gray-800 text-center font-semibold py-1 rounded">
          HABILIDADES
        </h2>
        {cvData.skills.length > 0 ? (
          <ul className="flex flex-wrap justify-center gap-3 mt-4">
            {cvData.skills.map((skill) => (
              <li
                key={skill.id}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border"
              >
                {skill.name} —{" "}
                <span className="italic text-gray-500">{skill.level}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic mt-2 text-center">
            Nenhuma habilidade adicionada ainda.
          </p>
        )}
      </section>
    </section>
  );
}
