// src/components/Preview/ExportButton.tsx

import React from 'react';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import { useToast } from '../../hooks/use-toast'; 
import { exportToPdf } from '../../services/pdfService';

export const ExportButton: React.FC = () => {
  const { successToast, errorToast } = useToast();

  const handleExport = async () => {
    try {
      // Exibe a mensagem de sucesso
      successToast('Seu currículo está sendo gerado em PDF.');
      
      await exportToPdf('cv-preview-section', 'curriculo.pdf');
    } catch (error) {
      console.error('Falha na exportação do PDF:', error);
      // Exibe a mensagem de erro
      errorToast('Não foi possível gerar o PDF. Tente novamente.');
    }
  };

  return (
    <Button onClick={handleExport} className="cursor-pointer">
      <Download className="mr-2 h-4 w-4" /> Exportar para PDF
    </Button>
  );
};

