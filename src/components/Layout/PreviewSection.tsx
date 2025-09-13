import CVPreview from "../Preview/CVPreview";
import { ExportButton } from '../Preview/ExportButton';


export default function PreviewSection() {
  return (
    <section>
      {/* Botão de exportação em PDF */}
      <div className="py-3 px-193 bg-gray-50">
        <div className="w-50 rounded-md bg-blue-500 py-1 px-3 text-white hover:bg-blue-600"><ExportButton /></div>
      </div>
      <div id="cv-preview-section" className="flex-1 p-10 bg-white max-w-4xl mx-auto shadow-md rounded-md">
        <CVPreview />
      </div>
    </section>
  );
}
