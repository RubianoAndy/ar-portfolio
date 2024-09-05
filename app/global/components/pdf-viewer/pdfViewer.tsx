import React from 'react';

interface PDFViewerProps {
  src: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ src }) => {
  return (
    <div className='flex py-4'>
        <object data={src} type="application/pdf" width="100%" height="800px">
        <p>
            Tu navegador no admite la visualización de PDF incorporados. Puedes{' '}
            <a href={src}>descargar el PDF</a> para verlo.
        </p>
        </object>
    </div>
  );
};

export default PDFViewer;