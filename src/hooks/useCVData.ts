import { createContext, useContext, useState, createElement, ReactNode } from "react";
import type { CVData } from "../types/cv.types";


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
