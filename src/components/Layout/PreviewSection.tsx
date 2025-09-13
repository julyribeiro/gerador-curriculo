import CVPreview from "../Preview/CVPreview";
import { ExportButton } from '../Preview/ExportButton';


export default function PreviewSection() {
  return (
    <section>
      {/* Adicione o botão de exportação aqui */}
      <div className="p-4 bg-gray-50 mt-4 border-t">
        <ExportButton />
      </div>
      <div id="cv-preview-section" className="flex-1 p-10 bg-white max-w-4xl mx-auto shadow-md rounded-md">
        <CVPreview />
      </div>
    </section>
  );
}
