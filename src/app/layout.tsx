import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moiwak Presentation",
  description: "Moiwak presentation deck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-100">{children}</body>
    </html>
  );
}
