export const personalInfo = {
  name: "Patrik Božurić",
  title: "AI Deployment & Consultation",
  tagline: "Voice agents and other AI solutions - reach out.",
  email: "pbozuric@outlook.com",
  github: "https://github.com/p3bozuric",
  linkedin: "https://www.linkedin.com/in/pbozuric/",
  profileImage: "/profile.jpg",
};

export const aboutMe = {
  intro: "I deploy AI solutions for clients and own the relationship that gets them into production. I sit between business stakeholders and engineering teams - scoping the real problem, shaping the use case, and translating complex technical concepts for non-technical decision-makers.",
  description: "I deliver voice and chat agents, automate operational workflows, and drive adoption. I can also build what I propose, prototyping and demoing on production AI stacks myself, so what I bring to clients is working software, not slideware. My maritime background - a Master's in Nautical Studies - lets me bridge traditional industries and cutting-edge AI.",
  specialties: [
    "Deploying AI solutions for clients",
    "Consulting on AI adoption and internal AI tooling",
    "Building and delivering voice agents",
    "Integrating LLMs and AI into existing products and workflows",
    "Process automation",
    "Prototyping and demoing on production AI stacks",
  ],
  personal: "I love my wife, cat & horse.",
};

export const technologies = [
  { name: "Python", category: "Programming" },
  { name: "FastAPI", category: "Framework" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "n8n", category: "Automation" },
  { name: "Figma", category: "Design" },
  { name: "GenAI", category: "AI/ML" },
  { name: "LangChain", category: "AI/ML" },
  { name: "Livekit", category: "Real-time" },
  { name: "ElevenLabs", category: "AI/ML" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Hugging Face", category: "AI/ML" },
  { name: "Redis", category: "Database" },
  { name: "Supabase", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "Git", category: "DevOps" },
];

export const projects = [
  {
    id: 1,
    name: "AIDRIATIC",
    description: "Maritime intelligence platform spanning three streams: Office, Bridge, and Analysis.",
    technologies: ["AI", "Maritime Intelligence"],
    github: null,
    demo: "https://aidriatic.com",
    inProgress: true,
    status: "In Progress",
  },
  {
    id: 2,
    name: "COLREG Assistant",
    description: "Maritime navigation chatbot specializing in COLREGs with interactive visual aids and voice input. Features vessel light animations, day shapes visualization, and sound signal playback with real-time streaming responses.",
    technologies: ["Next.js", "FastAPI", "LangGraph", "Supabase", "OpenAI", "RAG"],
    github: "https://github.com/p3bozuric/colreg-assistant",
    demo: "https://colregs.bozuric.com/",
  },
  {
    id: 3,
    name: "ClawHarbor",
    description: "Personal AI Assistant deployment service for OpenClaw.",
    technologies: ["AI", "Deployment", "OpenClaw"],
    github: null,
    demo: "https://clawharbor.io",
    inProgress: true,
    status: "Paused project",
  },
];

export const workExperience = [
  {
    id: 1,
    role: "AI Consultant",
    company: "ASEE",
    period: "January 2026 - Present",
    location: "Remote",
    current: true,
    description: [
      "Advise clients on applying AI to operational and customer-facing workflows.",
      "Own delivery from prototype to production.",
      "Consult on internal AI tooling implementations and AI adoption.",
      "Deliver voice agent solutions for clients.",
    ],
  },
  {
    id: 2,
    role: "AI Developer",
    company: "ASEE",
    period: "March 2025 - December 2025",
    location: "Remote",
    current: false,
    description: [
      "Integrated ElevenLabs solutions within our products.",
      "Prepared and ran product demos for prospective clients, presenting AI capabilities to non-technical audiences.",
      "Built a product documentation deployment on Zensical, with a pipeline to maintain the docs semi-automatically.",
      "Automated internal business processes (e.g. incoming email classification).",
    ],
  },
  {
    id: 3,
    role: "Founder",
    company: "KodAI",
    period: "October 2024 - Present",
    location: "Remote",
    current: true,
    description: [
      "AI Consultancy",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Master's degree",
    field: "Nautical Studies and Maritime Transport Technology",
    institution: "University of Rijeka - Faculty of Maritime Studies",
    period: "October 2020 - September 2022",
    achievements: ["Dean's Award for Academic Excellence"],
  },
  {
    id: 2,
    degree: "Bachelor's degree",
    field: "Nautical Studies and Maritime Transport Technology",
    institution: "University of Rijeka - Faculty of Maritime Studies",
    period: "October 2017 - June 2020",
    achievements: [],
  },
  {
    id: 3,
    degree: "Adding Knowledge to LLMs",
    field: "Professional Certificate",
    institution: "NVIDIA",
    period: "Issued October 2025",
    achievements: [],
    credential: "https://learn.nvidia.com/certificates?id=_T_MZJRQQja79EMSgYTnqA#",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];
