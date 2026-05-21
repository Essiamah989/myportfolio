import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Essia Mahmoudi | Digital Solutions Architect & Partner",
  description: "Ultra-premium portfolio of Essia Mahmoudi, full-stack developer, software architect, and strategic technical partner delivering robust systems, automations, and scalable SaaS solutions.",
  keywords: ["Essia Mahmoudi", "Solutions Architect", "Full Stack Developer", "Technical Partner", "Tunisia Developer", "SaaS Developer", "Next.js Architect", "Web Developer"],
  authors: [{ name: "Essia Mahmoudi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-background text-text-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
