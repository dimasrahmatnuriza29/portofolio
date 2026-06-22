export type TechCategory = {
  category: string;
  icon: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    category: "AI & Machine Learning",
    icon: "brain",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "OpenAI", "LangChain"],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["Node.js", "FastAPI", "Django", "Laravel"],
  },
  {
    category: "Frontend",
    icon: "code",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    category: "Database",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "cloud",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Snowflake"],
  },
];
