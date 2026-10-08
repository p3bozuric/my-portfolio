export const personalInfo = {
  name: "Patrik Božurić",
  title: "AI Adoption & Deployment",
  tagline: "I take AI from use case to production, including voice agents in a live contact-centre platform, and help teams adopt it.",
  footerTagline: "Here for AI consultancy and adoption - from the first use case to a team that uses AI every day.",
  email: "pbozuric@outlook.com",
  github: "https://github.com/p3bozuric",
  linkedin: "https://www.linkedin.com/in/pbozuric/",
  profileImage: "/profile.jpg",
};

export const aboutMe = {
  intro: "I get AI adopted. I work with clients and internal teams to find the use cases worth doing, define them, roll them out and support people until AI is part of their daily work. I sit between business stakeholders and engineering, translating business needs into technical requirements and technical concepts for non-technical decision-makers.",
  description: "Much of my work is voice AI for customer contact: I integrated voice agents into a production contact-centre platform and now deliver them for clients from scenario definition to production. I can also build what I propose, so clients see a working proof of concept before they commit. My maritime background - a Master's in Nautical Studies - helps me bridge traditional industries and AI.",
  specialties: [
    "AI use case discovery and definition",
    "Rollout, enablement and team support for AI tools",
    "Delivering voice AI agents to production",
    "Presales, proofs of concept and live demos",
    "Integrating LLMs and RAG into products and workflows",
    "Process automation and internal AI tooling (MCP)",
  ],
  personal: "I love my wife, cat & horse.",
};

// Shown as a separate group in the Skills section.
export const adoptionSkills = [
  "Use case discovery",
  "Business value assessment",
  "Rollout & change management",
  "Team training & support",
  "Functional specs",
  "Presales & PoCs",
  "Vendor management",
  "GDPR in AI solutions",
];

// The first entries are shown while the Skills section is collapsed.
export const technologies = [
  { name: "MCP", category: "AI/ML" },
  { name: "LangGraph", category: "AI/ML" },
  { name: "RAG", category: "AI/ML" },
  { name: "LiveKit", category: "Real-time" },
  { name: "Pipecat", category: "Real-time" },
  { name: "ElevenLabs", category: "AI/ML" },
  { name: "n8n", category: "Automation" },
  { name: "Claude Code", category: "AI/ML" },
  { name: "Codex", category: "AI/ML" },
  { name: "Python", category: "Programming" },
  { name: "LangChain", category: "AI/ML" },
  { name: "FastAPI", category: "Framework" },
  { name: "GenAI", category: "AI/ML" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "Hugging Face", category: "AI/ML" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Redis", category: "Database" },
  { name: "Supabase", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "Git", category: "DevOps" },
  { name: "Figma", category: "Design" },
];

export const languages = [
  { name: "Croatian", level: "Native" },
  { name: "English", level: "C1" },
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
    description: "MCP-as-a-service. One crawl of a business website publishes a hosted MCP endpoint and a WebMCP page, so AI agents in ChatGPT, Claude, or the browser can use the site's real actions. Every tool is tested against the live site before it ships.",
    technologies: ["MCP", "MCP Apps", "WebMCP", "TypeScript"],
    github: null,
    demo: "https://clawharbor.io",
    inProgress: true,
    status: "In Progress",
  },
];

export const workExperience = [
  {
    id: 1,
    role: "AI Consultant",
    company: "ASEE Solutions",
    period: "January 2026 - Present",
    location: "Remote",
    current: true,
    description: [
      "Identify and define AI use cases with clients; translate business needs into technical requirements for the dev team.",
      "Advise on bringing AI tools into employees' daily work and support teams through adoption.",
      "Deliver voice AI agents for clients, from scenario definition and functional spec to production.",
      "Coordinate and track AI features on the ASEE Live platform: AI agent assist, AI agent integration, knowledge base, call transcription, post-call analytics.",
      "Built internal AI tools (MCP servers) connecting AI assistants to internal business systems; rolled them out to colleagues and supported them.",
      "Work with AI vendors on technical evaluation, commercial models and GDPR compliance.",
      "Evaluate alternatives: open-source voice agent frameworks (Pipecat, LiveKit Agents), speech recognition (Faster Whisper), Croatian TTS (fine-tuning XTTS v2).",
      "Presales: technical consulting, proposals, presentations and proof-of-concept demos; live demos and talks at conferences.",
    ],
  },
  {
    id: 2,
    role: "AI Developer",
    company: "ASEE Solutions",
    period: "March 2025 - December 2025",
    location: "Remote",
    current: false,
    description: [
      "Integrated ElevenLabs conversational AI and voice agents into the ASEE Live platform.",
      "Built LLM and RAG-based solutions.",
      "Automated internal processes, e.g. automatic classification and routing of incoming email.",
      "Built a product documentation system on Zensical with a semi-automated content maintenance process.",
      "Prepared and ran product demos for prospects; presented AI capabilities to non-technical audiences.",
    ],
  },
  {
    id: 3,
    role: "Founder",
    company: "KodAI",
    period: "November 2024 - Present",
    location: "Remote",
    current: true,
    description: [
      "Independent AI consulting and implementation for small and medium businesses.",
      "Run AI integration and automation projects end to end: needs analysis, build, client communication, delivery.",
      "Advise on applying LLMs and RAG in business.",
      "Business process automation (n8n, Python, REST API integrations).",
    ],
  },
  {
    id: 4,
    role: "Intern",
    company: "AI Center Lipik",
    period: "April 2024 - September 2024",
    location: "Lipik, Croatia",
    current: false,
    description: [
      "Computer vision models (object detection and classification in images and video), dataset preparation and labelling.",
      "LLM/RAG prototypes; Python with PyTorch, Hugging Face and OpenCV.",
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
  {
    id: 4,
    degree: "Ongoing self-directed AI training",
    field: "LLM engineering, agents and MCP, production deployment",
    institution: "Self-directed",
    period: "Ongoing",
    achievements: [],
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];
