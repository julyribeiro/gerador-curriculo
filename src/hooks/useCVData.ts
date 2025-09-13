import { createContext, useContext, useState, useEffect, createElement, type ReactNode } from "react";
import type { CVData } from "../types/cv.types";

const LOCAL_STORAGE_KEY = "cv-data";

type CVContextType = {
  cvData: CVData;
  updateField: (field: keyof CVData, value: CVData[keyof CVData]) => void;
};

const CVDataContext = createContext<CVContextType | undefined>(undefined);

export function CVDataProvider({ children }: { children: ReactNode }) {
  const [cvData, setCvData] = useState<CVData>(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      resume: "",
      skills: [],
      experiences: [],
    };
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cvData));
  }, [cvData]);

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