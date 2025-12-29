"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({ children, className = "", delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`backdrop-blur-sm bg-card-bg border border-border rounded-xl p-8 md:p-10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
