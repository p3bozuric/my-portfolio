"use client";

import { useState } from "react";
import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import { personalInfo } from "@/data/content";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const socialLinks = [
    {
      name: "Email",
      icon: HiMail,
      href: `mailto:${personalInfo.email}`,
      label: personalInfo.email,
      color: "hover:text-red-500",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: personalInfo.linkedin,
      label: "Connect on LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: personalInfo.github,
      label: "View my projects",
      color: "hover:text-purple-500",
    },
  ];

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-4xl mx-auto">
        <Card>
          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              I'm always interested in hearing about new projects,
              opportunities and ideas. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`backdrop-blur-sm bg-background-secondary border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${link.color}`}
                >
                  <link.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{link.name}</h3>
                  <p className="text-sm text-foreground/60">{link.label}</p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-8 space-y-4 max-w-lg mx-auto"
            >
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border focus:border-primary focus:outline-none transition-colors duration-300 text-foreground placeholder:text-foreground/50"
              />
              <textarea
                placeholder="Your message..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background-secondary border border-border focus:border-primary focus:outline-none transition-colors duration-300 text-foreground placeholder:text-foreground/50 resize-none"
              />
              <button
                onClick={handleEmailClick}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-medium text-base hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                Open in your email client
              </button>
            </motion.div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
