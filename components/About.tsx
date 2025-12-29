"use client";

import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import { aboutMe } from "@/data/content";
import { FaCheckCircle, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
        <Card>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            {aboutMe.intro}
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {aboutMe.description}
          </p>
        </Card>

        <Card delay={0.2}>
          <h3 className="text-2xl font-semibold mb-6 text-primary gap-8">
            What I Do
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {aboutMe.specialties.map((specialty, index) => (
              <div
                key={index}
                className="flex items-start space-x-3"
              >
                <FaCheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-foreground/80">{specialty}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
