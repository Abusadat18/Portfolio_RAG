export const portfolio = {
  personal: {
    name: "Abu Sadat Ansari",
    tagline: "Full Stack Developer & AI Engineer",
    email: "itssadatansari@gmail.com",
    github: "https://github.com/Abusadat18",
    linkedin: "https://www.linkedin.com/in/abusadatansari/",
    location: "Kolkata, India",
    website: "https://your-portfolio.vercel.app",
  },

  about: `I'm Abu Sadat Ansari, a passionate Full Stack Developer and AI Engineer with a knack for building products that are both technically robust and visually compelling. I love working at the intersection of modern web technologies and artificial intelligence.

I specialize in building scalable web applications using Next.js, React, and Node.js on the frontend and backend, and I have deep experience integrating LLMs and RAG pipelines into production systems. I'm constantly exploring new tools and frameworks to sharpen my craft.

When I'm not coding, you'll find me contributing to open source, writing technical articles, or exploring the latest research in AI. I believe great software is a blend of clean code, thoughtful UX, and real-world impact.`,

  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    frameworks: ["Next.js", "React", "Node.js", "Express", "FastAPI", "TailwindCSS"],
    ai_ml: ["LangChain", "RAG Pipelines", "OpenAI API", "Gemini API", "Hugging Face", "Vector Databases"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Supabase"],
    tools: ["Git", "Docker", "GitHub Actions", "Vercel", "AWS", "Figma"],
  },

  experience: [
    {
      company: "Company Name Here",
      role: "Full Stack Developer",
      duration: "Jan 2024 – Present",
      location: "Remote",
      bullets: [
        "Built and maintained scalable web applications serving X,000+ users using Next.js and Node.js",
        "Integrated AI features including RAG-based chatbots and LLM-powered search into production products",
        "Led frontend architecture decisions, reducing page load time by X% through code splitting and caching",
        "Collaborated with cross-functional teams across design, product, and infrastructure",
      ],
    },
    {
      company: "Another Company",
      role: "Software Engineer Intern",
      duration: "Jun 2023 – Dec 2023",
      location: "City, Country",
      bullets: [
        "Developed RESTful APIs consumed by mobile and web clients",
        "Implemented automated testing pipelines reducing bug escape rate by X%",
        "Contributed to open-source tooling used by the engineering team",
      ],
    },
  ],

  projects: [
    {
      name: "Portfolio RAG",
      description:
        "This very portfolio — a retro-terminal-themed website with a RAG-powered AI chatbot that answers recruiter questions about me using my portfolio data as the knowledge base. Built with Next.js, Gemini API, and Framer Motion.",
      tech: ["Next.js", "TypeScript", "Gemini API", "Framer Motion", "TailwindCSS"],
      link: "https://github.com/Abusadat18/Portfolio_RAG",
    },
    {
      name: "Project Name Here",
      description:
        "A brief description of what this project does, the problem it solves, and the impact it had. Mention any notable metrics (users, performance improvements, etc.).",
      tech: ["React", "Node.js", "PostgreSQL", "Docker"],
      link: "https://github.com/Abusadat18/your-project",
    },
    {
      name: "Another Project",
      description:
        "Description of another impressive project. Focus on the technical challenge you solved and the value it delivered.",
      tech: ["Python", "FastAPI", "LangChain", "Pinecone"],
      link: "https://github.com/Abusadat18/another-project",
    },
  ],

  education: {
    degree: "Bachelor of Science in Computer Science",
    university: "Your University Name",
    year: "2020 – 2024",
    gpa: "3.8 / 4.0",
    highlights: [
      "Relevant coursework: Data Structures, Algorithms, Machine Learning, Distributed Systems",
      "Dean's List — multiple semesters",
      "Capstone project: [Brief description of your capstone]",
    ],
  },

  achievements: [
    "Won [Hackathon Name] hackathon — built [what] in 24 hours",
    "Open source contributor to [project name] with X+ stars on GitHub",
    "Published article on [topic] — X,000+ reads on Medium/Dev.to",
    "Speaker at [event/meetup] on [topic]",
    "Certified: [AWS / GCP / Azure / other certification]",
  ],

  openToWork: true,
  preferredRoles: ["Full Stack Developer", "AI Engineer", "Software Engineer"],
};

export type Portfolio = typeof portfolio;
