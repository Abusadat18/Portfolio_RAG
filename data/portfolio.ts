export const portfolio = {
  personal: {
    name: "Abu Sadat Ansari",
    tagline: "Full Stack Developer & AI Engineer",
    email: "itssadatansari@gmail.com",
    github: "https://github.com/Abusadat18",
    linkedin: "https://www.linkedin.com/in/abusadatansari/",
    location: "Kolkata, India",
    website: "https://www.abusadat.dev/",
  },

  about: `I'm Abu Sadat Ansari, a passionate Full Stack Developer and AI Engineer with a knack for building products that are both technically robust and visually compelling. I love working at the intersection of modern web technologies and artificial intelligence.

I specialize in building scalable web applications using Next.js, React, and Node.js on the frontend and backend, and I have deep experience integrating LLMs and RAG pipelines into production systems. I'm constantly exploring new tools and frameworks to sharpen my craft.

When I'm not coding, you'll find me contributing to open source, writing technical articles, or exploring the latest research in AI. I believe great software is a blend of clean code, thoughtful UX, and real-world impact.`,

  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "Java", "C++", "HTML", "CSS"],
    frameworks: ["Next.js", "React", "Node.js", "Express", "Nest.js", "TailwindCSS"],
    ai_ml: ["AI Integration", "RAG Pipelines", "Hugging Face", "Vector Databases", "Model Context Protocol", "Hosting AI Models"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Supabase"],
    tools: ["Git", "Docker", "GitHub Actions", "Vercel", "Photoshop", "Figma", 
      "Postman"
    ],
  },

  experience: [
    {
      company: "SystemStar",
      role: "Software Engineer Intern",
      duration: "Dec 2025 – April 2026",
      location: "Delaware, US (Remote)",
      bullets: [
        "Developed scalable backend modules and APIs using NestJS and also contributed on their own product HeatFleet, an online heating oil marketplace.",
        "Built a multi-assistant voice AI workflow using VAPI with context management and assistant routing.",
        "Created an AI video generation pipeline using Redis queues, workers, FFmpeg, and BunnyCDN.",
        "Built an image-to-transcript-to-audio pipeline that extracted text from images and generated speech output using Hugging Face TTS models to automate audio generation workflows.",
        "Hosted the Wan 2.1 video model on Runpod GPU infrastructure and optimized resource usage.",
        "Improved frontend performance through image prioritization, eager loading, and faster rendering.",
        "Wrote automation scripts for bulk data correction and repetitive operational tasks.",
        "Integrated ImageKit to serve optimized AVIF/WebP images and reduce bandwidth usage."
      ],
    },
    /* {
      company: "Another Company",
      role: "Software Engineer Intern",
      duration: "Jun 2023 – Dec 2023",
      location: "City, Country",
      bullets: [
        "Developed RESTful APIs consumed by mobile and web clients",
        "Implemented automated testing pipelines reducing bug escape rate by X%",
        "Contributed to open-source tooling used by the engineering team",
      ],
    }, */
  ],

  projects: [
    {
      name: "Portfolio RAG",
      description:
        "This very portfolio website with a RAG-powered AI chatbot that answers recruiter questions about me using my portfolio data as the knowledge base. Built with Next.js, Gemini API, and Framer Motion.",
      tech: ["Next.js", "TypeScript", "Gemini API", "Framer Motion", "TailwindCSS", "RAG", "Vector DB"],
      link: "https://www.abusadat.dev/chat",
    },
    {
      name: "Edemy | LMS Platform",
      description:
        "A Learning Management System (LMS) like Udemy built with a React frontend and an Express & MongoDB backend with Clerk Authentication and Stripe Payment integration. Separate Educator account and Student Account Educator dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Clerk", "Webhooks"],
      link: "https://lms-app-client.vercel.app/",
    },
    /* {
      name: "Another Project",
      description:
        "Description of another impressive project. Focus on the technical challenge you solved and the value it delivered.",
      tech: ["Python", "FastAPI", "LangChain", "Pinecone"],
      link: "https://github.com/Abusadat18/another-project",
    }, */
  ],

  education: {
    degree: "Bachelor of technology in Computer Science",
    university: "University of Engineering & Management, Kolkata",
    year: "2022 – 2026",
    gpa: "7.9/10",
    highlights: [
      "Relevant coursework: Data Structures, Algorithms, Distributed Systems, Operating Systems, Database Management, Computer Networks, Artificial Intelligence",
      "Capstone project: Siksharthi: A Hybrid Framework for Automated Answer Grading Using BM25 and Semantic Cross-Encoders",
    ],
  },

  achievements: [
    "Established and managed an creative agency offering a range of services, serving over 20 clients around the world",
    "Certification: Python for Data Science, AI & Development IBM,  Adobe Photoshop for Designers",
  ],

  openToWork: true,
  preferredRoles: ["Full Stack Developer", "AI Engineer", "Software Engineer"],
};

export type Portfolio = typeof portfolio;
