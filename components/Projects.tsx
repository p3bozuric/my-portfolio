"use client";

import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import { projects } from "@/data/content";
import { FaGithub } from "react-icons/fa";
import { HiClock } from "react-icons/hi";

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card key={project.id} delay={index * 0.1}>
            <div className="flex flex-col h-full">
              {project.inProgress && (
                <div className="flex items-center space-x-2 text-accent mb-3">
                  <HiClock className="w-4 h-4" />
                  <span className="text-sm font-medium">In Development</span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {project.name}
              </h3>

              <p className="text-foreground/70 mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-1 bg-secondary/20 border border-secondary text-secondary rounded-full hover:bg-secondary hover:text-white transition-all duration-200"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
