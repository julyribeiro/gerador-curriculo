import FormSection from "./components/Layout/FormSection";
import PreviewSection from "./components/Layout/PreviewSection";

export default function App() {
  return (
    <div className="h-screen grid grid-cols-2">
      <FormSection />
      <PreviewSection />
    </div>
  );
}