import type { Skill } from "../../types/cv.types";

type Props = {
  skills: Skill[];
};

export default function SkillSection({ skills }: Props) {
  return (
    <section className="mb-4">
      <h2 className="text-xl text-gray-800 font-bold tracking-wide p-1">
        HABILIDADES
      </h2>
      {skills.length > 0 ? (
        <ul className="flex flex-wrap justify-start gap-3">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="px-3 py-1 text-sm text-gray-700"
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
  );
}
