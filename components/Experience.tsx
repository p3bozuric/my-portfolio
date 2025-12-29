"use client";

import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import { workExperience } from "@/data/content";
import { HiLocationMarker, HiBriefcase } from "react-icons/hi";

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="max-w-4xl mx-auto space-y-6">
        {workExperience.map((job, index) => (
          <Card key={job.id} delay={index * 0.1}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-2">
                  <HiBriefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">
                    {job.role}
                  </h3>
                  {job.current && (
                    <span className="px-3 py-1 bg-secondary/20 border border-secondary text-secondary text-xs font-medium rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-lg font-semibold text-primary/80 mb-2">
                  {job.company}
                </p>
              </div>
              <div className="text-foreground/60 text-sm md:text-right mt-2 md:mt-0">
                <p className="font-medium">{job.period}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-foreground/60">
              <HiLocationMarker className="w-4 h-4" />
              <p className="text-sm">{job.location}</p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
