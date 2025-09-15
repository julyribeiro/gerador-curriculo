// src/components/ui/ExperienceItem.tsx
import { useState, useEffect } from 'react';
import type { Experience } from '../../types/cv.types';

type Props = {
  experience: Experience;
  onEdit: (exp: Experience) => void;
  onRemove: (id: string) => void;
};

export default function ExperienceItem({ experience, onEdit, onRemove }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <li
      className={`flex justify-between items-start bg-white p-2 rounded shadow ${
        isVisible ? 'animate-scaleIn' : 'opacity-0'
      }`}
    >
      <div>
        <strong>{experience.role}</strong> em {experience.company} <br />
        <em>
          {experience.startDate} - {experience.current ? "Atual" : experience.endDate}
        </em>
        <p>{experience.description}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="px-2 py-1 bg-yellow-400 text-gray-600 rounded hover:bg-yellow-500 cursor-pointer"
          onClick={() => onEdit(experience)}
        >
          Editar
        </button>
        <button
          className="px-2 py-1 bg-red-400 text-white rounded hover:bg-red-600 cursor-pointer"
          onClick={() => onRemove(experience.id)}
        >
          Remover
        </button>
      </div>
    </li>
  );
}