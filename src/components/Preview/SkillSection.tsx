import type { Skill } from "../../types/cv.types";

type Props = {
  skills: Skill[];
};

export default function SkillSection({ skills }: Props) {
  return (
    <section>
      <h2 className="bg-gray-200 text-gray-800 text-center font-semibold py-1 rounded">
        HABILIDADES
      </h2>
      {skills.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-3 mt-4">
          {skills.map((skill) => (
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
  );
}
