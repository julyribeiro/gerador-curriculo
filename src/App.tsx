import FormSection from "./components/Layout/FormSection";
import PreviewSection from "./components/Layout/PreviewSection";

export default function App() {
  return (
    <div className="h-screen flex">
      {/* Formulário - lado esquerdo */}
      <div className="w-1/2 h-full overflow-y-auto">
        <FormSection />
      </div>

      {/* Preview - lado direito */}
      <div className="w-1/2 h-full overflow-y-auto">
        <PreviewSection />
      </div>
    </div>
  );
}