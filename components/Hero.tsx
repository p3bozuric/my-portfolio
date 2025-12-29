"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/content";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full"
      >
        {/* Left Content */}
        <div className="space-y-6">
          <motion.p
            variants={itemVariants}
            className="text-primary text-lg md:text-xl font-medium"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="text-foreground">Patrik </span>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Božurić
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-foreground/80"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 max-w-xl leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card-bg border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <HiMail className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card-bg border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card-bg border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection("#projects")}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-base"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="border-2 border-primary text-primary px-6 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 text-base"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Content - Profile Image */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full p-1">
                <div className="w-full h-full bg-background rounded-full p-2">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
