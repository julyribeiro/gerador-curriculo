import type { CVData } from "../../types/cv.types";

type Props = {
  cvData: CVData;
  resume: string;
};

export default function PersonalHeader({ cvData }: Props) {
  return (
    <>
      <div className="text-center mb-8">
        <h1
          className={`text-4xl font-bold uppercase tracking-wide ${
            cvData.name ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {cvData.name || "Seu Nome Completo"}
        </h1>
      </div>

      <div className="flex flex-col items-center space-y-1 text-gray-700 mb-6">
        <p
          className= {`${
            cvData.email ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {cvData.email || "seu.email@exemplo.com"}
        </p>
        <p
          className={`${
            cvData.phone ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {cvData.phone || "(xx) xxxxx-xxxx"}
        </p>
        {cvData.linkedin && (
          <a
            href={cvData.linkedin}
            className="text-sm text-white bg-gray-700 px-3 py-1 rounded-md hover:bg-gray-800 transition"
          >
            {cvData.linkedin}
          </a>
        )}
      </div>
      <section className="mb-8">
        <h2 className="bg-gray-200 text-gray-800 text-center font-semibold py-1 rounded">
          RESUMO PROFISSIONAL
        </h2>
        <p className={`italic mt-3 leading-relaxed text-center ${
            cvData.resume ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {cvData.resume ||
            "Um breve resumo sobre sua trajetória profissional, objetivos e principais conquistas."}
        </p>
      </section>
    </>
  );
}