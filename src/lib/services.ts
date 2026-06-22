export type Service = {
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export const services: Service[] = [
  {
    title: "AI Strategy Consulting",
    description: "Board-level advisory on where AI creates real, measurable business value—roadmaps, ROI modeling, and risk.",
    icon: "strategy",
    features: ["Opportunity mapping", "ROI modeling", "Risk & compliance", "Build vs. buy"],
  },
  {
    title: "Machine Learning Solutions",
    description: "Custom ML models engineered for accuracy, interpretability, and production reliability.",
    icon: "chart",
    features: ["Model development", "Feature engineering", "Validation & tuning", "Deployment"],
  },
  {
    title: "Enterprise AI Systems",
    description: "Scalable, secure AI platforms integrated into core enterprise systems and workflows.",
    icon: "building",
    features: ["System design", "Integration", "Security", "Governance"],
  },
  {
    title: "Predictive Analytics",
    description: "Forecasting and decision intelligence that turns operational data into a competitive edge.",
    icon: "trend",
    features: ["Demand forecasting", "Churn prediction", "Risk scoring", "Dashboards"],
  },
  {
    title: "AI Agent Development",
    description: "Autonomous, tool-calling agents that handle complex multi-step business workflows.",
    icon: "robot",
    features: ["Agent design", "Tool integration", "Memory & planning", "Guardrails"],
  },
  {
    title: "Generative AI Solutions",
    description: "LLM-powered products with retrieval, fine-tuning, and human-in-the-loop controls.",
    icon: "sparkles",
    features: ["LLM apps", "RAG pipelines", "Fine-tuning", "Evaluation"],
  },
  {
    title: "Custom Web Applications",
    description: "Premium, high-performance web apps built on Next.js, React, and TypeScript.",
    icon: "code",
    features: ["Next.js apps", "Design systems", "APIs", "Performance"],
  },
  {
    title: "Digital Transformation",
    description: "End-to-end modernization of legacy systems, processes, and operating models.",
    icon: "refresh",
    features: ["Assessment", "Modernization", "Change enablement", "Adoption"],
  },
  {
    title: "MLOps Deployment",
    description: "Production-grade ML pipelines with CI/CD, monitoring, and automated retraining.",
    icon: "infinity",
    features: ["Pipelines", "Monitoring", "Retraining", "Cost control"],
  },
  {
    title: "Cloud Architecture",
    description: "Resilient, cost-efficient cloud architectures on AWS, Azure, and GCP.",
    icon: "cloud",
    features: ["Cloud strategy", "Migration", "Cost optimization", "Reliability"],
  },
];
