import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DuQuantum 2026 — Duke's First Quantum Computing Hackathon",
  description:
    "Duke's inaugural quantum computing hackathon, Oct 24–25 2026. Hosted by the Duke Quantum Information Society and HackDuke. Open to all undergrad, masters, and PhD students.",
  openGraph: {
    title: "DuQuantum 2026",
    description: "Duke's first quantum computing hackathon — Oct 24–25, 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#2a1958] text-white">
        {children}
      </body>
    </html>
  );
}
