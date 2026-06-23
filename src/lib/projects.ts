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
    id: "hsse-migas-command-center",
    name: "HSSE MIGAS Command Center",
    tagline: "Real-time monitoring dashboard for Health, Safety, Security & Environment",
    description:
      "A web-based command center for monitoring Health, Safety, Security, and Environment (HSSE) metrics across oil & gas operations. Provides real-time visualization of safety incidents, environmental compliance, and operational risk indicators in a centralized dashboard.",
    url: "https://hsse-migas.vercel.app/",
    category: "Full Stack",
    filters: ["HSSE"],
    tech: ["HTML5", "CSS3", "JavaScript", "Data Visualization", "Dashboard"],
    accent: "electric",
    featured: true,
    caseStudy: {
      challenge:
        "Oil & gas operations needed a centralized, real-time view of HSSE (Health, Safety, Security, Environment) metrics across multiple sites. Existing reporting was manual, fragmented, and lacked real-time visibility into safety incidents and compliance status.",
      solution:
        "Built a web-based HSSE Command Center dashboard that aggregates safety, security, and environmental data into a single interactive interface — enabling real-time monitoring, incident tracking, and compliance reporting.",
      architecture: [
        "Responsive web frontend with HTML5, CSS3, and JavaScript",
        "Interactive data visualization for safety & environmental metrics",
        "Real-time incident tracking and alert display",
        "Centralized dashboard for multi-site HSSE monitoring",
        "Compliance reporting and KPI visualization",
      ],
      aiComponents: [
        "Real-time data aggregation pipeline",
        "Interactive safety metric visualization",
        "Incident tracking and alert system",
        "Compliance KPI dashboard",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Data Visualization", "Dashboard"],
      businessImpact: [
        "Centralized HSSE monitoring across multiple operational sites",
        "Real-time visibility into safety incidents and environmental compliance",
        "Reduced manual reporting effort through automated dashboard updates",
        "Improved decision-making with consolidated KPI tracking",
      ],
      metrics: [
        { label: "Real-time Monitoring", value: 100, suffix: "%" },
        { label: "Reporting Speed", value: 60, suffix: "% faster" },
        { label: "Manual Effort Saved", value: 70, suffix: "%" },
        { label: "Sites Connected", value: 5, suffix: "+" },
      ],
    },
  },
  {
    id: "ai-healthcare-agent",
    name: "AI Healthcare Agent Platform",
    tagline: "Intelligent patient interaction & medical assistance",
    description:
      "Healthcare AI Agent platform for intelligent patient interaction, symptom triage, and medical information assistance powered by retrieval-augmented generation.",
    url: "https://health-care-system-using-a-i-agent-cyan.vercel.app/",
    github: "https://github.com/dimasrahmatnuriza29",
    category: "AI Agent",
    filters: ["Healthcare"],
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
    filters: ["Logistic"],
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
  {
    id: "edumanage-pro",
    name: "EduManage Pro",
    tagline: "School management platform for multi-branch education networks",
    description:
      "A centralized school management command center for multi-branch education institutions. Provides real-time dashboards for student enrollment, attendance tracking, teacher management, billing, and parent engagement across all branches.",
    url: "https://school-management-lac-tau.vercel.app/",
    github: "https://github.com/dimasrahmatnuriza29",
    category: "Full Stack",
    filters: ["Education"],
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Data Visualization", "Dashboard"],
    accent: "cyan",
    featured: true,
    caseStudy: {
      challenge:
        "Multi-branch school networks lacked a centralized view of student enrollment, attendance, teacher performance, and billing. Administrators relied on fragmented spreadsheets and manual reports, resulting in delayed decision-making and poor visibility across branches.",
      solution:
        "Built a unified School Management Command Center that aggregates data from all branches into a single interactive dashboard — enabling real-time monitoring of student enrollment trends, attendance rates, teacher performance, billing status, and parent engagement.",
      architecture: [
        "Next.js App Router frontend with responsive dashboard layout",
        "Real-time student enrollment and attendance visualization",
        "Multi-branch performance ranking and comparison",
        "Activity feed for live updates across all branches",
        "Billing and parent engagement tracking modules",
      ],
      aiComponents: [
        "Automated attendance tracking and anomaly detection",
        "Student enrollment trend analytics",
        "Branch performance ranking engine",
        "Real-time activity aggregation pipeline",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Data Visualization",
        "Vercel",
      ],
      businessImpact: [
        "Centralized management across 5 branches and 1,247 students",
        "Real-time attendance tracking at 94.2% across all branches",
        "Streamlined billing with 92% on-time payment rate",
        "Improved parent engagement through centralized scheduling",
      ],
      metrics: [
        { label: "Attendance Rate", value: 94, suffix: "%" },
        { label: "Students Managed", value: 1247, suffix: "+" },
        { label: "Branches Connected", value: 5, suffix: "" },
        { label: "Parent Engagement", value: 88, suffix: "%" },
      ],
    },
  },
];

export const projectFilters = [
  "All",
  "HSSE",
  "Healthcare",
  "Logistic",
  "Education",
];
