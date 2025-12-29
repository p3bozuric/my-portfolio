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
  title: "Patrik Božurić | AI Developer",
  description: "AI Developer with a unique maritime background, specializing in AI integration, machine learning, and innovative AI solutions. Master's degree in Nautical Studies.",
  keywords: ["AI Developer", "Machine Learning", "GenAI", "LangChain", "FastAPI", "Python", "Maritime AI", "Patrik Božurić"],
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
    title: "Patrik Božurić | AI Developer",
    description: "AI Developer with a unique maritime background, specializing in AI integration and machine learning.",
    siteName: "Patrik Božurić Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrik Božurić | AI Developer",
    description: "AI Developer specializing in AI integration and machine learning solutions.",
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
