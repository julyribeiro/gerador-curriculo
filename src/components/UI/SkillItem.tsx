// src/components/ui/SkillItem.tsx
import { useState, useEffect } from 'react';

type Props = {
  name: string;
  level: string;
  onClick: () => void;
};

export default function SkillItem({ name, level, onClick }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <button
      onClick={onClick}
      title="Clique para remover"
      className={`px-3 py-1 mt-1 bg-blue-100 text-blue-700 font-medium rounded-full shadow-sm hover:bg-red-100 hover:text-red-600 transition duration-200 ${
        isVisible ? 'animate-scaleIn' : 'opacity-0'
      }`}
    >
      {name} <em className="text-xs">({level})</em> <span className="text-red-500">✕</span>
    </button>
  );
}