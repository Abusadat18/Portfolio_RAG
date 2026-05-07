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

  // ── Chatbot-only deep-dive content (not rendered in the UI) ──────────────
  chatbotExtras: {
    skillDeepDives: {
      typescript: `I write almost all my projects in TypeScript because catching type errors at compile time saves hours of debugging in production. I understand advanced patterns like discriminated unions, conditional types, mapped types, and generics with constraints. I use TypeScript's type system not just for safety but as living documentation — when a new developer reads my interfaces, they understand the data flow without extra comments. I've also dealt with the rougher edges: configuring strict tsconfig for monorepos, handling type narrowing in complex conditionals, and writing type-safe API route handlers in Next.js.`,

      react_nextjs: `React is my primary UI library and I understand it beyond the surface level. I know how the virtual DOM diffing and reconciliation algorithm works, why keys matter in lists (not just "to avoid warnings" but for preserving component state), and when to use useRef vs useState (refs for values that shouldn't trigger re-renders). I understand the rules of hooks, closure stale-state pitfalls, and how to structure custom hooks for reusability.

For Next.js specifically, I chose it over alternatives like Remix or plain Vite+React because of its integrated API routes (great for full-stack projects), built-in image optimization, and the App Router's server component model which reduces client-side JS. I understand the trade-offs: Next.js has a steeper learning curve, vendor coupling with Vercel, and the App Router's caching behavior can be unintuitive. I've built projects with both the Pages Router and App Router and understand when server components vs client components are appropriate. I understand ISR, SSG, SSR, and when to pick each.`,

      nodejs_backend: `On the backend I'm comfortable with both Express (lightweight, flexible) and NestJS (opinionated, enterprise-grade with dependency injection). At SystemStar I used NestJS daily and appreciate its module system, decorators for route metadata, and built-in support for guards, interceptors, and pipes. I understand event-driven architecture in Node.js, the event loop, how libuv handles I/O, and why you should never block the main thread with CPU-heavy work — which is exactly why I used Redis-backed job queues for the video generation pipeline instead of processing inline.`,

      python: `I use Python primarily for AI/ML work, scripting, and data processing. I'm comfortable with FastAPI for building APIs, and I've used libraries like Hugging Face Transformers, scikit-learn, and standard NLP tooling. For my capstone project I worked with BM25 and cross-encoder models for semantic similarity. I understand Python's GIL limitations and when to reach for multiprocessing vs threading vs async.`,

      databases: `I pick databases based on the access pattern. PostgreSQL is my default for relational data — I understand indexing strategies, query planning with EXPLAIN ANALYZE, normalization vs denormalization trade-offs, and transactions. MongoDB when the data is document-shaped and schema flexibility matters (like the Edemy course content). Redis for caching, rate limiting, and job queues — at SystemStar I used Redis with BullMQ to queue video generation jobs so the API could return immediately while workers processed in the background. Pinecone and vector databases for semantic search — I understand how approximate nearest neighbor (ANN) search works and the trade-off between recall and latency.`,

      ai_integration: `I don't just call AI APIs — I understand the architecture around them. For RAG systems, I know the full pipeline: chunking strategies (semantic vs fixed-size vs overlap), embedding model selection, vector similarity search (cosine vs dot product vs euclidean), and prompt engineering for grounded responses. This portfolio site is a working example — I chunk my portfolio data semantically, embed with Gemini, retrieve top-k chunks by cosine similarity, and stream the response. I also understand the Model Context Protocol (MCP) and have experience hosting models on GPU infrastructure (Wan 2.1 on Runpod). I think about AI integration practically: cost per token, latency budgets, when to use smaller models vs larger ones, and how to design fallbacks when the AI service is down.`,

      devops_tooling: `I use Docker for consistent dev/prod environments and understand multi-stage builds to keep images small. GitHub Actions for CI/CD — I've set up pipelines that run tests, lint, build, and deploy. Vercel for frontend deployments with preview URLs on every PR. I also have experience with CDN integration (BunnyCDN for video delivery at SystemStar) and image optimization services (ImageKit for AVIF/WebP conversion). I understand the value of infrastructure-as-code even if I'm not a DevOps specialist.`,
    },

    projectDeepDives: {
      portfolioRAG: `For the Portfolio RAG project, the core architectural decision was building a RAG pipeline from scratch rather than using LangChain or similar frameworks. I wanted full control over the chunking strategy, embedding process, and retrieval logic — and honestly, for a focused single-document RAG system, a framework would have been overkill. The chunking is semantic: each section of my portfolio becomes a meaningful chunk rather than arbitrary 500-token windows. This means retrieval is more precise because each chunk is self-contained.

I chose Gemini 2.5 Flash for the chat model because it offers a good balance of quality and speed for a portfolio chatbot — low latency matters for UX. The embedding model is Gemini's embedding-001. I stream responses to the client so the user sees tokens appear in real-time rather than waiting for the full response.

The frontend uses a retro-terminal aesthetic with glassmorphism cards, Framer Motion animations, and a custom cursor with spring physics. I designed the RichMessage parser so the AI can emit structured blocks (project cards, contact cards) that render as interactive UI elements rather than plain text. This makes the chatbot feel like a real product, not a demo.

Challenges: Getting the chunking granularity right was iterative — too coarse and irrelevant info pollutes the context, too fine and you lose coherence. I also had to handle the cold-start case where embeddings haven't been generated yet.`,

      edemy: `Edemy was my largest full-stack project. The architecture has a React frontend, Express + MongoDB backend, Clerk for authentication (handling both educator and student roles), and Stripe for payments with webhook integration.

Key technical decisions: I used Clerk instead of building auth from scratch because it handles edge cases (email verification, OAuth, session management) that are easy to get wrong. For payments, Stripe webhooks are the source of truth for enrollment status — the frontend optimistically shows access but the backend only grants it after webhook confirmation. This prevents race conditions where a user pays but the enrollment isn't recorded.

The educator dashboard lets instructors create courses with structured content. I had to think about data modeling carefully: courses contain sections, sections contain lectures, lectures can have video/text content. MongoDB's document model worked well here because a course is naturally a nested document, and you rarely query across courses.

What I'd improve: I'd add a proper caching layer (Redis) for course catalog queries, implement rate limiting on the API, and add better error boundaries on the frontend.`,
    },

    experienceDeepDives: {
      systemstar: `At SystemStar, I worked on their product HeatFleet (an online heating oil marketplace) and several AI-powered internal tools. Here's the thinking behind key decisions:

**Video Generation Pipeline**: The challenge was generating AI videos without blocking the API. I designed a queue-based architecture: the API accepts a request, pushes it to a Redis (BullMQ) queue, and returns a job ID immediately. Background workers pick up jobs, run the Wan 2.1 model, encode with FFmpeg, upload to BunnyCDN, and update the job status. This decouples the request lifecycle from the processing time (which could be minutes). I also had to handle failure cases — retries with exponential backoff, dead-letter queues for permanently failed jobs, and cleanup of partial uploads.

**Voice AI Workflow**: Building the multi-assistant voice AI with VAPI required careful context management. Each assistant had a specific role, and I had to design the routing logic so conversations could hand off between assistants without losing context. The tricky part was maintaining conversation state across transfers — I used a shared context store that each assistant could read from and write to.

**Image-to-Audio Pipeline**: This was a multi-step pipeline: OCR/image analysis to extract text, text processing and cleaning, then TTS via Hugging Face models. I hosted the TTS models ourselves rather than using a paid API to keep costs predictable. The challenge was handling varied image quality and ensuring the extracted text was clean enough for natural-sounding speech.

**Performance Optimization**: I improved frontend performance by auditing the loading waterfall. Key changes included setting proper image priority hints (LCP images get priority, below-fold images get lazy loading), switching to next/image for automatic format negotiation, and integrating ImageKit for on-the-fly AVIF/WebP conversion. This reduced initial page load significantly.

**What I Learned**: Working at a startup taught me to ship fast but think about maintainability. I learned to write automation scripts for repetitive tasks (data correction, bulk operations) which freed up engineering time. I also got comfortable with GPU infrastructure management on Runpod — monitoring VRAM usage, optimizing batch sizes, and handling cold starts.`,
    },

    problemSolvingPhilosophy: `When I encounter a bug, my first instinct is to reproduce it reliably before touching any code. I narrow down the problem with binary search — if it's a UI bug, I check if the data is correct (backend vs frontend issue). If it's a backend bug, I check the request, the handler, then the database query. I use console logs strategically during debugging but remove them before committing. I read error messages carefully — they usually tell you exactly what's wrong if you don't panic.

For system design, I start by identifying the read/write patterns and the scalability requirements. I ask: what's the most common operation? What's the data access pattern? Do I need strong consistency or is eventual consistency acceptable? I prefer starting simple (monolith, single database) and extracting services only when there's a clear need — premature optimization and premature microservices are both traps.

I believe in writing code that's easy to delete, not easy to extend. Instead of building elaborate abstraction layers for hypothetical future requirements, I write straightforward code that solves today's problem. If requirements change, it's cheaper to rewrite simple code than to refactor complex abstractions.

When evaluating technologies, I consider: community size and momentum, documentation quality, how it handles the 80% case vs edge cases, and whether it introduces vendor lock-in. I don't chase trends — I adopt tools when I understand why they're better for my specific use case.`,

    learningAndGrowth: `I stay current by following a mix of sources: technical blogs (Vercel blog, OpenAI research, Hacker News), YouTube channels for deep dives, and Twitter/X for the developer community pulse. I learn best by building — when I want to understand a technology, I build a project with it rather than just reading documentation.

I'm currently deepening my knowledge in: distributed systems concepts (consistency models, consensus algorithms), advanced RAG techniques (HyDE, re-ranking, query decomposition), and system design patterns for AI-native applications.

I read engineering blogs from companies like Stripe, Vercel, and Cloudflare to understand how production systems are built at scale. I find that understanding the "why" behind architectural decisions is more valuable than memorizing specific implementations.

I also contribute to open source when I can, and I write to solidify my understanding — explaining a concept forces you to confront gaps in your knowledge.`,

    careerMotivation: `I'm drawn to the intersection of full-stack development and AI because I believe the most impactful products combine great user experience with intelligent backends. I don't want to just build CRUD apps, and I don't want to just train models — I want to build products where AI genuinely improves the user experience.

What excites me most right now is the RAG and AI agents space — building systems that can reason over domain-specific knowledge and take actions. I think we're in the early innings of AI-native applications, and I want to be building in this space.

I thrive in small to mid-size teams where I can own features end-to-end — from the database schema to the UI animation. I prefer environments with high trust and autonomy, where engineers are expected to make decisions rather than just execute tickets. I care about shipping fast and iterating based on real user feedback rather than designing in isolation.

I'm open to full-time roles as a Full Stack Developer, AI Engineer, or Software Engineer. I'm especially interested in companies working on developer tools, AI products, or platforms where engineering quality directly impacts the user experience. I'm based in Kolkata, India and open to remote work or relocation for the right opportunity.`,

    softSkills: `I communicate technical concepts clearly — I adjust my language based on the audience. With engineers, I'm precise about trade-offs and implementation details. With non-technical stakeholders, I focus on outcomes and timelines. I've practiced this through writing technical articles and explaining system designs to the team at SystemStar.

At SystemStar, I worked across the stack and coordinated with the team on features that touched both frontend and backend. When building the video generation pipeline, I had to align with the product side on acceptable processing times and error handling UX, while working with the infrastructure side on GPU resource allocation.

I'm comfortable with async communication (Slack, PRs, documentation) and time zone differences — my internship at SystemStar was remote with the company based in Delaware, US. I learned to write clear PR descriptions, document my decisions, and unblock myself rather than waiting for synchronous meetings.

I take ownership of my work. If something I built breaks at 11 PM, I want to know about it and fix it — not because someone told me to, but because I care about the reliability of the systems I build.`,
  },
};

export type Portfolio = typeof portfolio;
