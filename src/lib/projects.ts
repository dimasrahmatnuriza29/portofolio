export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  github?: string;
  category: string;
  filters: string[];
  tech: string[];
  accent: "electric" | "cyan";
  featured: boolean;
  thumbnail?: string;
  caseStudy: {
    challenge: string;
    solution: string;
    architecture: string[];
    aiComponents: string[];
    techStack: string[];
    businessImpact: string[];
    metrics: { label: string; value: number; suffix: string }[];
  };
};

export const projects: Project[] = [
  {
    id: "ai-healthcare-agent",
    name: "AI Healthcare Agent Platform",
    tagline: "Intelligent patient interaction & medical assistance",
    description:
      "Healthcare AI Agent platform for intelligent patient interaction, symptom triage, and medical information assistance powered by retrieval-augmented generation.",
    url: "https://health-care-system-using-a-i-agent-cyan.vercel.app/",
    github: "https://github.com/dimasrahmatnuriza29",
    category: "AI Agent",
    filters: ["AI Agents", "Generative AI", "NLP", "Full Stack", "Enterprise Systems"],
    tech: ["OpenAI", "LangChain", "RAG", "Next.js", "TypeScript", "Vector DB"],
    accent: "cyan",
    featured: true,
    caseStudy: {
      challenge:
        "Healthcare providers needed a scalable way to triage patient queries 24/7, reducing load on clinical staff while delivering accurate, context-aware medical information without compromising safety or compliance.",
      solution:
        "Designed and shipped an agentic AI platform combining LLM reasoning with retrieval-augmented generation over curated medical knowledge. The agent conducts structured triage conversations, cites sources, and escalates urgent cases to human specialists.",
      architecture: [
        "Next.js App Router frontend with streaming UI",
        "Edge-deployed agent orchestration via LangChain",
        "Vector knowledge base with semantic retrieval",
        "Guardrail layer for safety, PII redaction & compliance",
        "Observability pipeline for traces, evals & cost tracking",
      ],
      aiComponents: [
        "Conversational AI Agent (tool-calling)",
        "Retrieval-Augmented Generation (RAG)",
        "Symptom triage & intent classification",
        "Source-grounded response synthesis",
        "Safety guardrails & hallucination filtering",
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "OpenAI GPT-4",
        "LangChain",
        "Embeddings + Vector Store",
        "TailwindCSS",
        "Vercel",
      ],
      businessImpact: [
        "Round-the-clock patient assistance without staffing overhead",
        "Reduced clinical staff time spent on routine queries",
        "Auditable, source-cited responses for compliance teams",
        "Scalable foundation for new clinical workflows",
      ],
      metrics: [
        { label: "Automation Rate", value: 78, suffix: "%" },
        { label: "Query Accuracy", value: 94, suffix: "%" },
        { label: "Response Time Cut", value: 60, suffix: "%" },
        { label: "Cost Reduction", value: 42, suffix: "%" },
      ],
    },
  },
  {
    id: "webb-apps-platform",
    name: "Webb Apps Platform",
    tagline: "Enterprise-grade web application platform",
    description:
      "Modern enterprise-grade web application platform with scalable architecture, modular design system, and premium user experience optimized for performance and conversion.",
    url: "https://webb-apps.vercel.app/",
    github: "https://github.com/dimasrahmatnuriza29",
    category: "Enterprise Web Platform",
    filters: ["Full Stack", "Enterprise Systems", "Data Engineering", "Consulting"],
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"],
    accent: "electric",
    featured: true,
    caseStudy: {
      challenge:
        "Enterprise teams struggled with fragmented web infrastructure, slow page loads, inconsistent UX, and high maintenance overhead across multiple product surfaces.",
      solution:
        "Architected a unified, modular web platform with server components, a shared design system, and a performance-first deployment pipeline—delivering sub-second loads and a cohesive brand experience.",
      architecture: [
        "Next.js App Router with React Server Components",
        "Reusable, themeable enterprise design system",
        "Edge caching & ISR for global performance",
        "CI/CD pipeline with preview deploys & Lighthouse gates",
        "Observability via tracing & real-user monitoring",
      ],
      aiComponents: [
        "Intelligent content personalization layer",
        "Predictive prefetching for navigation",
        "Automated accessibility & SEO auditing",
        "AI-assisted component generation workflow",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Vercel",
      ],
      businessImpact: [
        "Consolidated multiple products onto a single platform",
        "Dramatically faster release cycles",
        "Higher conversion from improved UX & page speed",
        "Lower total cost of ownership for web operations",
      ],
      metrics: [
        { label: "Performance Score", value: 98, suffix: "/100" },
        { label: "Faster Releases", value: 3, suffix: "x" },
        { label: "Efficiency Increase", value: 65, suffix: "%" },
        { label: "Cost Reduction", value: 38, suffix: "%" },
      ],
    },
  },
];

export const projectFilters = [
  "All",
  "AI Agents",
  "Machine Learning",
  "Computer Vision",
  "NLP",
  "Generative AI",
  "Full Stack",
  "Enterprise Systems",
  "Data Engineering",
  "Consulting",
];
