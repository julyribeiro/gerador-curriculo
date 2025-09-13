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
    <div key={experience.id} className={`text-gray-700 mb-8 ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}>
      <p className="font-bold uppercase">{experience.role}</p>
      <p className="italic">
        {experience.company} | {experience.startDate} – {experience.current ? "Atual" : experience.endDate}
      </p>
      {experience.description && (
        <ul className="list-disc list-inside mt-2 space-y-1">
          {experience.description.split("\n").map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}