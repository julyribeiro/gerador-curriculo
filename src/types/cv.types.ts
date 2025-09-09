export type Skill = {
  id: string;
  name: string;
  level: "Básico" | "Intermediário" | "Avançado";
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string;     
  endDate: string;  
  description: string;
  current: boolean;
};

export type CVData = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  resume: string;
  skills: Skill[];
  experiences: Experience[];
};
