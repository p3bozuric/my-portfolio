"use client";

import { useState } from "react";
import SectionWrapper from "./ui/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { technologies, adoptionSkills } from "@/data/content";
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
  SiClaude,
} from "react-icons/si";
import {
  TbBrandOpenai,
  TbApi,
  TbPlugConnected,
  TbDatabaseSearch,
  TbMicrophone,
} from "react-icons/tb";
import { RiVoiceprintFill } from "react-icons/ri";
import { HiChevronDown, HiSparkles, HiUserGroup } from "react-icons/hi";
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
  GenAI: HiSparkles,
  LangChain: SiLangchain,
  LangGraph: SiLangchain,
  LiveKit: BsCameraVideo,
  Pipecat: TbMicrophone,
  MCP: TbPlugConnected,
  RAG: TbDatabaseSearch,
  ElevenLabs: RiVoiceprintFill,
  "Hugging Face": SiHuggingface,
  "REST API": TbApi,
  "Claude Code": SiClaude,
  Codex: TbBrandOpenai,
};

// Number of technologies visible while the section is collapsed
const COLLAPSED_COUNT = 12;

export default function Technologies() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded
    ? technologies
    : technologies.slice(0, COLLAPSED_COUNT);
  const hiddenCount = technologies.length - COLLAPSED_COUNT;

  return (
    <SectionWrapper id="skills" title="Technologies & Skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-10 backdrop-blur-sm bg-card-bg border border-border rounded-xl p-6 md:p-8"
      >
        <div className="flex items-center justify-center space-x-2 mb-5">
          <HiUserGroup className="w-6 h-6 text-primary" />
          <h3 className="text-xl md:text-2xl font-semibold text-primary">
            AI Adoption &amp; Enablement
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {adoptionSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-foreground/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        layout
        id="skills-grid"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence initial={false}>
          {visible.map((tech, index) => {
            const Icon = techIcons[tech.name];
            // Items revealed by expanding animate immediately; the initial
            // row animates when the section scrolls into view.
            const revealed = index >= COLLAPSED_COUNT;
            const delay = revealed
              ? (index - COLLAPSED_COUNT) * 0.03
              : index * 0.05;
            return (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                {...(revealed
                  ? { animate: { opacity: 1, scale: 1 } }
                  : { whileInView: { opacity: 1, scale: 1 } })}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay }}
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
        </AnimatePresence>
      </motion.div>

      {hiddenCount > 0 && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-controls="skills-grid"
            className="flex items-center space-x-2 px-6 py-3 border border-primary/50 text-primary rounded-full hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            <span className="text-sm font-medium">
              {expanded ? "Show less" : `Show all ${technologies.length}`}
            </span>
            <HiChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
