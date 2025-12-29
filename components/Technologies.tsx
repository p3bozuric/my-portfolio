"use client";

import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";
import { technologies } from "@/data/content";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiPytorch,
  SiFastapi,
  SiRedis,
  SiSupabase,
  SiVercel,
  SiSpacy,
  SiN8N,
  SiLangchain,
  SiHuggingface,
} from "react-icons/si";
import { TbBrandOpenai, TbApi } from "react-icons/tb";
import { RiVoiceprintFill } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";
import { IconType } from "react-icons";

// Map technology names to their icons
const techIcons: { [key: string]: IconType } = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  Python: FaPython,
  SQL: FaDatabase,
  FastAPI: SiFastapi,
  spaCy: SiSpacy,
  PostgreSQL: SiPostgresql,
  Docker: FaDocker,
  PyTorch: SiPytorch,
  n8n: SiN8N,
  Figma: FaFigma,
  AWS: FaAws,
  Vercel: SiVercel,
  Redis: SiRedis,
  Supabase: SiSupabase,
  Git: FaGitAlt,
  GenAI: TbBrandOpenai,
  LangChain: SiLangchain,
  LangGraph: SiLangchain,
  Livekit: BsCameraVideo,
  ElevenLabs: RiVoiceprintFill,
  "Hugging Face": SiHuggingface,
  "REST API": TbApi,
};

export default function Technologies() {
  return (
    <SectionWrapper id="skills" title="Technologies & Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {technologies.map((tech, index) => {
          const Icon = techIcons[tech.name];
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className="backdrop-blur-sm bg-card-bg border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col items-center justify-center h-32">
                {Icon ? (
                  <Icon className="w-12 h-12 mb-3 text-primary group-hover:text-secondary transition-colors duration-300" />
                ) : (
                  <div className="w-12 h-12 mb-3 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                    {tech.name.charAt(0)}
                  </div>
                )}
                <p className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
