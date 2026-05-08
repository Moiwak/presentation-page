"use client";

import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState(1000);

  useEffect(() => {
    const update = () => setPageWidth(Math.min(1000, window.innerWidth - 48));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <main className="flex flex-col items-center py-8 gap-6">
      <Document
        file="/Moiwak_260507.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className="flex flex-col items-center gap-6"
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i + 1}
            pageNumber={i + 1}
            width={pageWidth}
            className="shadow-lg"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
    </main>
  );
}
