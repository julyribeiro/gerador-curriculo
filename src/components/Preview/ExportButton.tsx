// src/components/Preview/ExportButton.tsx

import React, { useState } from 'react';
import { Button } from '../UI/button';
import { Download, Loader2 } from 'lucide-react';
import { useToast } from '../../hooks/use-toast'; 
import { exportToPdf } from '../../services/pdfService';

export const ExportButton: React.FC = () => {
  const { successToast, errorToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = async () => {
    try {
      setIsLoading(true);
      successToast('Seu currículo está sendo gerado em PDF.');
      
      await exportToPdf('cv-preview-section', 'curriculo.pdf');
      
      // Mensagem de sucesso ao final do processo
      successToast('PDF gerado com sucesso!');
    } catch (error) {
      console.error('Falha na exportação do PDF:', error);
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido.';
      errorToast(`Não foi possível gerar o PDF: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handleExport} disabled={isLoading} className="cursor-pointer">
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Exportando...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" /> Exportar para PDF
        </>
      )}
    </Button>
  );
};