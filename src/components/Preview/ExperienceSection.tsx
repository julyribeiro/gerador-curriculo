// src/components/Preview/ExperienceSection.tsx

import type { Experience } from "../../types/cv.types";

type Props = {
  experiences: Experience[];
};

export default function ExperienceSection({ experiences }: Props) {
  return (
    <>
      <section className="mb-8">
        <h2 className="bg-gray-200 text-gray-800 text-center font-semibold p-1 rounded">
          EXPERIÊNCIA PROFISSIONAL
        </h2>
        {experiences.length > 0 ? (
          <div className="mt-4 space-y-6"> 
            {experiences.map((exp) => (
              <div key={exp.id} className="text-gray-700">
                <p className="font-bold uppercase">
					{exp.role} - {exp.startDate} a {exp.endDate}
				</p>
                <p>
                  {exp.company}
                </p>
                {exp.description && (
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {exp.description.split("\n").map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
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
    </>
  );
}