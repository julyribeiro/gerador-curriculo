// src/components/Preview/ExperienceItemPreview.tsx
import { useState, useEffect } from 'react';
import type { Experience } from "../../types/cv.types";

type Props = {
  experience: Experience;
};

export default function ExperienceItemPreview({ experience }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`text-gray-700 mb-4 ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}>
      <p className="font-bold uppercase">{experience.role} | {experience.startDate} – {experience.current ? "Atual" : experience.endDate}</p>
      <p className="italic">
        {experience.company}
      </p>
      {experience.description && (
        <ul className="list-inside mt-1">
          {experience.description.split("\n").map((item, idx) => (
            <li key={idx} className="text-justify leading-5">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}