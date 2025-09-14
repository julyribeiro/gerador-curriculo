// src/components/Preview/ExperienceSection.tsx
import type { Experience } from "../../types/cv.types";
import ExperienceItemPreview from "./ExperienceItemPreview";

type Props = {
  experiences: Experience[];
};

export default function ExperienceSection({ experiences }: Props) {
  return (
    <>
      <section>
        <h2 className="text-xl text-gray-800 font-bold tracking-wide p-1">
          EXPERIÊNCIA PROFISSIONAL
        </h2>
        {experiences.length > 0 ? (
          <div className="pl-3 mt-2 text-justify">
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