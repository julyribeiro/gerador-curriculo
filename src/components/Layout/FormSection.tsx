import PersonalInfo from "../Form/PersonalInfo";
import SkillsSection from "../Form/Skills";
import ExperiencesSection from "../Form/Experience";

export default function FormSection() {
  return (
    <section className="flex-1 p-8 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-y-auto">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b border-gray-300 pb-4">
        Informações do Currículo
      </h2>

      <div className="space-y-12">
        <PersonalInfo />
        <SkillsSection />
        <ExperiencesSection />
      </div>
    </section>
  );
}