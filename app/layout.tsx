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
  title: "Patrik Božurić | AI Adoption & Deployment",
  description: "AI adoption and deployment: use case discovery, rollout and team enablement for voice agents and LLM solutions. Integrated ElevenLabs voice agents into a production contact-centre platform.",
  keywords: ["AI Adoption", "AI Enablement", "AI Deployment", "AI Consultant", "voice agents", "LLM integration", "RAG", "ElevenLabs", "LangChain", "LiveKit", "Pipecat", "MCP", "Python", "FastAPI", "AI adoption", "Patrik Božurić"],
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
    title: "Patrik Božurić | AI Adoption & Deployment",
    description: "AI adoption and deployment: use case discovery, rollout and team enablement for voice agents and LLM solutions. Integrated ElevenLabs voice agents into a production contact-centre platform.",
    siteName: "Patrik Božurić Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrik Božurić | AI Adoption & Deployment",
    description: "AI adoption and deployment: use case discovery, rollout and team enablement for voice agents and LLM solutions. Integrated ElevenLabs voice agents into a production contact-centre platform.",
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
