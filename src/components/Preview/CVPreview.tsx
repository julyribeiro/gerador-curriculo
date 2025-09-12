// src/components/Preview/CVPreview.tsx
import PersonalHeader from "./PersonalHeader";
import ExperienceSection from "./ExperienceSection";
import SkillSection from "./SkillsSection";
import { useCVData } from "../../hooks/useCVData";

export default function CVPreview() {
  const { cvData } = useCVData();

  return (
    <section>
      <PersonalHeader cvData={cvData} 
      resume={cvData.resume}
      />
      <SkillSection skills={cvData.skills} />
      <ExperienceSection
        experiences={cvData.experiences}
      />

    </section>
  );
}
