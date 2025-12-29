"use client";

import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import { education } from "@/data/content";
import { HiAcademicCap, HiStar, HiClock, HiExternalLink } from "react-icons/hi";

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education & Certifications">
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <Card key={edu.id} delay={index * 0.1}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-2 flex-wrap">
                  <HiAcademicCap className="w-6 h-6 text-primary flex-shrink-0" />
                  <h3 className="text-xl font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  {edu.inProgress && (
                    <span className="px-3 py-1 bg-accent/20 border border-accent text-accent text-xs font-medium rounded-full flex items-center space-x-1">
                      <HiClock className="w-3 h-3" />
                      <span>In Progress</span>
                    </span>
                  )}
                </div>
                <p className="text-lg font-semibold text-primary/80 mb-1">
                  {edu.field}
                </p>
                <p className="text-foreground/70 mb-2">{edu.institution}</p>
              </div>
              <div className="text-foreground/60 text-sm md:text-right mt-2 md:mt-0">
                <p className="font-medium">{edu.period}</p>
              </div>
            </div>

            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mt-4 space-y-2">
                {edu.achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-2 text-secondary"
                  >
                    <HiStar className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            )}

            {edu.credential && (
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href={edu.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-200 text-sm font-medium"
                >
                  <HiExternalLink className="w-4 h-4" />
                  <span>View Credential</span>
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
