export const personalInfo = {
  name: "Patrik Božurić",
  title: "AI Developer",
  tagline: "AI dev with a unique maritime background",
  email: "pbozuric@outlook.com",
  github: "https://github.com/p3bozuric",
  linkedin: "https://www.linkedin.com/in/pbozuric/",
  profileImage: "/profile.jpg",
};

export const aboutMe = {
  intro: "AI dev with a unique maritime background, leveraging my Master's in Nautical Studies to bring fresh perspectives to AI and machine learning projects.",
  description: "I combine rapid learning ability with cross-industry insights to deliver innovative solutions.",
  specialties: [
    "AI development and integration",
    "Integration of AI in existing processes",
    "Creation of AI workflows & processes",
    "Maintenance of web shops (Visualsoft and Shopify)",
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
    name: "No Code Headshot Generator",
    description: "My oldest project based on FLUX.1-dev. It's essentially a Jupyter notebook setup, with no coding necessary with purpose of fine-tuning FLUX.1-dev and generating personal professional images for LinkedIn.",
    technologies: ["FLUX.1-dev", "Jupyter", "AI", "Image Generation"],
    github: "https://github.com/p3bozuric/headshot_generator",
    demo: null,
  },
  {
    id: 2,
    name: "eCOLREG Assistant",
    description: "RAG powered GenAI for maritime industry. Powered by knowledge on COLREG rules and Gemini.",
    technologies: ["RAG", "Gemini", "GenAI", "Maritime"],
    github: "https://github.com/p3bozuric/colreg-assistant",
    demo: null,
  },
  {
    id: 3,
    name: "AIDRIATIC",
    description: "Project in development, still figuring out the exact project structure.",
    technologies: ["Real Estate", "AI", "Monitoring"],
    github: "https://github.com/p3bozuric/aidriatic-real-etate-monitor",
    demo: null,
    inProgress: true,
  },
];

export const workExperience = [
  {
    id: 1,
    role: "Junior AI Developer",
    company: "ASEE",
    period: "March 2025 - Present",
    location: "Remote",
    current: true,
  },
  {
    id: 2,
    role: "Founder",
    company: "KodAI",
    period: "October 2024 - Present",
    location: "Remote",
    current: true,
  },
  {
    id: 3,
    role: "Internship",
    company: "AI Power d.o.o.",
    period: "June 2024 - September 2024",
    location: "Lipik, Croatia",
    current: false,
  },
  {
    id: 4,
    role: "Internship",
    company: "AI Centre Lipik",
    period: "March 2024 - September 2024",
    location: "Lipik, Croatia",
    current: false,
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
    degree: "PSM1 (Professional Scrum Master I)",
    field: "Certification",
    institution: "In Progress",
    period: "Expected 2025",
    achievements: [],
    inProgress: true,
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];
