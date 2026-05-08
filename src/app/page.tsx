"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/pdf-viewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen text-zinc-500">
      Loading...
    </div>
  ),
});

export default function Home() {
  return <PDFViewer />;
}
