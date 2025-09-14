// src/components/Preview/ExperienceSection.tsx
import type { Experience } from "../../types/cv.types";
import ExperienceItemPreview from "./ExperienceItemPreview";

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
          <div className="mt-4 ml-2 text-justify space-y-8">
            {experiences.map((exp) => (
              <ExperienceItemPreview key={exp.id} experience={exp} />
            ))}
          </div>
        ) : (
          <p className=" m-2 text-gray-500 italic mt-2 text-center">
            Nenhuma experiência adicionada ainda.
          </p>
        )}
      </section>
    </>
  );
}