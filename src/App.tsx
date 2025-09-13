import FormSection from "./components/Layout/FormSection";
import PreviewSection from "./components/Layout/PreviewSection";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="h-screen flex">
      {/* Formulário - lado esquerdo */}
      <div className="w-1/2 h-full overflow-y-auto">
        <FormSection />
      </div>

      {/* Preview - lado direito */}
      <div className="w-1/2 h-full overflow-y-auto">
        <Toaster />
        <PreviewSection />
      </div>
    </div>
  );
}