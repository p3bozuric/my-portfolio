import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrik Božurić | AI Deployment & Consultation",
  description: "I deploy AI solutions for clients and own the relationship that gets them into production - voice agents, LLM integration, and AI adoption. Self-taught into a professional AI role, with a maritime background.",
  keywords: ["AI Deployment", "AI Consultant", "voice agents", "LLM integration", "RAG", "ElevenLabs", "LangChain", "LiveKit", "Python", "FastAPI", "AI adoption", "Patrik Božurić"],
  authors: [{ name: "Patrik Božurić" }],
  creator: "Patrik Božurić",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bozuric.com",
    title: "Patrik Božurić | AI Deployment & Consultation",
    description: "I deploy AI solutions for clients and own the relationship that gets them into production - voice agents, LLM integration, and AI adoption. Self-taught into a professional AI role, with a maritime background.",
    siteName: "Patrik Božurić Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrik Božurić | AI Deployment & Consultation",
    description: "I deploy AI solutions for clients and own the relationship that gets them into production - voice agents, LLM integration, and AI adoption. Self-taught into a professional AI role, with a maritime background.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
