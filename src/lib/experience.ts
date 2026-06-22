export type ExperienceRole = {
  role: string;
  org: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export const experience: ExperienceRole[] = [
  {
    role: "Senior AI/ML Engineer",
    org: "Enterprise AI Practice",
    period: "2023 — Present",
    description:
      "Lead design and delivery of production AI systems—LLM applications, MLOps platforms, and predictive analytics—for large-scale enterprise clients.",
    highlights: [
      "Shipped production RAG & agent systems serving enterprise users",
      "Built MLOps pipelines reducing model deployment time by 60%+",
      "Advised leadership on AI strategy, risk, and ROI",
    ],
    tags: ["LLM", "RAG", "MLOps", "AI Agents"],
  },
  {
    role: "Machine Learning Engineer",
    org: "Data & AI Solutions",
    period: "2021 — 2023",
    description:
      "Engineered end-to-end ML pipelines for forecasting, computer vision, and NLP across regulated industries.",
    highlights: [
      "Delivered predictive models improving forecast accuracy by 20%+",
      "Productionized CV & NLP models on cloud infrastructure",
      "Owned model monitoring, drift detection & retraining",
    ],
    tags: ["ML", "Computer Vision", "NLP", "Cloud"],
  },
  {
    role: "IT Consultant",
    org: "Digital Transformation",
    period: "2020 — 2021",
    description:
      "Advised enterprises on cloud architecture, data strategy, and digital transformation across multiple industries.",
    highlights: [
      "Led cloud migration & modernization initiatives",
      "Designed scalable, secure data architectures",
      "Aligned technology investments to business outcomes",
    ],
    tags: ["Cloud", "Data Strategy", "Transformation"],
  },
  {
    role: "Full Stack Developer",
    org: "Product Engineering",
    period: "2019 — 2020",
    description:
      "Built modern, high-performance web applications with React, Next.js, and Node.js for startups and enterprises.",
    highlights: [
      "Shipped production web apps with 95+ Lighthouse scores",
      "Designed reusable design systems & component libraries",
      "Integrated AI-powered features into product surfaces",
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
  },
];
