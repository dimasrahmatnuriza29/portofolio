export type WorkflowStep = {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
};

export const workflow: WorkflowStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep-dive into your business, goals, and constraints to find where AI creates real value.",
    details: ["Stakeholder workshops", "Opportunity mapping", "Success criteria"],
    icon: "search",
  },
  {
    number: "02",
    title: "Analysis",
    description: "Assess data, systems, and feasibility to define a clear, ROI-driven path forward.",
    details: ["Data audit", "Feasibility study", "ROI modeling"],
    icon: "chart",
  },
  {
    number: "03",
    title: "Architecture",
    description: "Design a scalable, secure system architecture tailored to your enterprise.",
    details: ["System design", "Security model", "Tech selection"],
    icon: "blueprint",
  },
  {
    number: "04",
    title: "Development",
    description: "Build production-grade AI and full-stack features with rigorous engineering standards.",
    details: ["Iterative builds", "Code review", "Documentation"],
    icon: "code",
  },
  {
    number: "05",
    title: "Testing",
    description: "Validate accuracy, performance, and reliability with comprehensive testing.",
    details: ["Model evaluation", "Performance tests", "Security audits"],
    icon: "shield",
  },
  {
    number: "06",
    title: "Deployment",
    description: "Ship to production with CI/CD, monitoring, and rollback safety.",
    details: ["CI/CD pipeline", "Monitoring", "Observability"],
    icon: "rocket",
  },
  {
    number: "07",
    title: "Optimization",
    description: "Continuously improve performance, accuracy, and cost over time.",
    details: ["A/B testing", "Retraining", "Cost optimization"],
    icon: "refresh",
  },
];
