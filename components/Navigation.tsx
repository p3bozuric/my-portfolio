"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "@/data/content";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-background/80 border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-3 items-center h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/logo.svg"
                alt="Bozuric Logo"
                width={200}
                height={200}
                className="h-12 md:h-14 w-auto"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center gap-6 lg:gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base whitespace-nowrap"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Get in Touch & Resume Buttons */}
            <div className="hidden md:flex items-center justify-end gap-3">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                className="border-2 border-primary text-primary px-5 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-16 right-0 bottom-0 w-64 bg-background-secondary/95 backdrop-blur-lg border-l border-border z-40 md:hidden shadow-2xl"
      >
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium text-center hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="border-2 border-primary text-primary px-6 py-3 rounded-full font-medium text-center hover:bg-primary hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
