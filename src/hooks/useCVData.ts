import { createContext, useContext, useState, createElement } from "react";
import type { ReactNode } from "react";

type CVData = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  resume: string;
  skills: Skill[];
  experiences: Experience[];
};

type Skill = {
  id: string;
  name: string;
  level: "Básico" | "Intermediário" | "Avançado";
};

type Experience = {
  endDate: ReactNode;
  startDate: ReactNode;
  id: string;
  company: string;
  role: string;
  period: string;
  description: string
  current: boolean;
}


type CVContextType = {
  cvData: CVData;
  updateField: (field: keyof CVData, value: CVData[keyof CVData]) => void;
};

const CVDataContext = createContext<CVContextType | undefined>(undefined);

export function CVDataProvider({ children }: { children: ReactNode }) {
  const [cvData, setCvData] = useState<CVData>({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: "",
    skills: [],
    experiences: [],
  });

    function updateField(field: keyof CVData, value: CVData[keyof CVData]) {
    setCvData((prev) => ({ ...prev, [field]: value }));
  }
  return createElement(
    CVDataContext.Provider,
    { value: { cvData, updateField } },
    children
  );
}

export function useCVData() {
  const context = useContext(CVDataContext);
  if (!context) {
    throw new Error("useCVData deve ser usado dentro de CVDataProvider");
  }
  return context;
}
