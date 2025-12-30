"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  title,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      // Add 'flex flex-col items-center' here
      className={`py-16 md:py-20 w-full flex flex-col items-center ${className}`}
    >
      {/* The mx-auto here will now work correctly within the flex parent */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-20 text-center">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
