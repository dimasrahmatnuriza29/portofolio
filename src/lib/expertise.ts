export type Expertise = {
  title: string;
  description: string;
  icon: string;
};

export const expertise: Expertise[] = [
  { title: "AI Engineering", description: "End-to-end design & deployment of production AI systems.", icon: "brain" },
  { title: "Machine Learning", description: "Supervised, unsupervised & reinforcement learning pipelines.", icon: "chart" },
  { title: "Deep Learning", description: "Neural networks for vision, language & sequence modeling.", icon: "network" },
  { title: "MLOps", description: "CI/CD, monitoring & lifecycle management for ML at scale.", icon: "infinity" },
  { title: "Data Engineering", description: "Pipelines, warehousing & analytics-ready data platforms.", icon: "database" },
  { title: "Generative AI", description: "LLM apps, fine-tuning & prompt engineering for enterprise.", icon: "sparkles" },
  { title: "LLM Solutions", description: "Custom LLM integration, evaluation & deployment.", icon: "chat" },
  { title: "RAG Systems", description: "Retrieval-augmented generation over private knowledge.", icon: "search" },
  { title: "AI Agents", description: "Autonomous, tool-calling agents for complex workflows.", icon: "robot" },
  { title: "Computer Vision", description: "Object detection, segmentation & visual intelligence.", icon: "eye" },
  { title: "Predictive Analytics", description: "Forecasting & decision intelligence from data.", icon: "trend" },
  { title: "Full Stack Development", description: "Modern web apps with Next.js, React & TypeScript.", icon: "code" },
  { title: "Cloud Architecture", description: "AWS, Azure & GCP solutions engineered to scale.", icon: "cloud" },
  { title: "IT Consulting", description: "Digital transformation strategy & enterprise advisory.", icon: "compass" },
];
