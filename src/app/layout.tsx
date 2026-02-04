import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Estúdio Caroá | Arquitetura e Design de Interiores | Anderson, Edyene e Eduarda",
  description: "Escritório de arquitetura especializado em projetos residenciais, comerciais e de design de interiores. Transformamos espaços em experiências únicas.",
  keywords: "arquitetura, design de interiores, projetos residenciais, projetos comerciais, decoração, São Paulo",
  authors: [{ name: "Estúdio Caroá" }],
  openGraph: {
    title: "Estúdio Caroá | Arquitetura e Design de Interiores | Anderson, Edyene e Eduarda",
    description: "Arquitetura que floresce do nosso chão. Interiores com alma, afeto e propósito.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
