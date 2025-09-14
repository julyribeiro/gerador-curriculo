// src/components/Layout/PersonalHeader.tsx
import type { CVData } from "../../types/cv.types";

type Props = {
  cvData: CVData;
};

export default function PersonalHeader({ cvData }: Props) {
  return (
    <>
      <div className="text-center mb-5">
        <h1
          className={`text-4xl m-5 font-bold uppercase tracking-wide ${
            cvData.name ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {cvData.name || "Seu Nome Completo"}
        </h1>
      </div>

      <div className="flex flex-col space-y-1 text-gray-700 border-t-1 border-b-1 pt-2 pb-2">
        <span className="w-full flex justify-evenly">
          <p className={`${cvData.email ? "text-gray-900" : "text-gray-400"}`}>
            {cvData.email || "seu.email@exemplo.com"}
          </p>
          <p className={`${cvData.phone ? "text-gray-900" : "text-gray-400"}`}>
            {cvData.phone || "(xx) xxxxx-xxxx"}
          </p>
        </span>
        {cvData.linkedin && (
          <a target="_blank" rel="noopener noreferrer"
            href={cvData.linkedin}
            className="text-sm text-blue-400 text-center px-3 py-1 mt-1 rounded-md hover:text-purple-400 transition"
          >
            {cvData.linkedin}
          </a>
        )}
      </div>

      <section className="mb-4">
        <h2 className="text-xl text-gray-800 font-bold tracking-wide p-1">
          RESUMO PROFISSIONAL
        </h2>
        <p
          className={`mt-3 leading-5 ${
            cvData.resume ? "pl-3 text-gray-900 text-justify" : "text-gray-400"
          }`}
        >
          {cvData.resume ||
            "Um breve resumo sobre sua trajetória profissional, objetivos e principais conquistas."}
        </p>
      </section>
    </>
  );
}