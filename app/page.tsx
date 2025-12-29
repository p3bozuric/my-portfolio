import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <div className="w-full">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
