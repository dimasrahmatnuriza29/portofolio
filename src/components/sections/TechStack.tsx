"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { techStack } from "@/lib/tech";

// Proficiency weights (illustrative; based on years of enterprise use)
const proficiency: Record<string, number> = {
  Python: 95,
  TensorFlow: 88,
  PyTorch: 86,
  "Scikit-Learn": 92,
  OpenAI: 94,
  LangChain: 90,
  "Node.js": 92,
  FastAPI: 88,
  Django: 80,
  Laravel: 78,
  React: 94,
  "Next.js": 96,
  TypeScript: 92,
  TailwindCSS: 95,
  PostgreSQL: 90,
  MySQL: 85,
  MongoDB: 84,
  AWS: 90,
  Azure: 84,
  GCP: 82,
  Docker: 90,
  Kubernetes: 82,
  Snowflake: 80,
};

export function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyan-accent/[0.06] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">
              <Icon name="cpu" className="w-3.5 h-3.5" />
              <span>Technology Stack</span>
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              The tools behind{" "}
              <span className="text-gradient">production AI</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
              A battle-tested stack spanning ML, backend, frontend, data, and cloud — chosen for
              scale, reliability, and developer velocity.
            </p>
          </Reveal>
        </div>

        {/* Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {techStack.map((cat) => (
            <motion.div
              key={cat.category}
              variants={staggerItem}
              className="glass rounded-2xl p-6 hover:border-white/15 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric/15 to-cyan-accent/15 border border-white/10 text-cyan-accent group-hover:scale-110 transition-transform">
                  <Icon name={cat.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{cat.category}</h3>
              </div>

              <ul className="space-y-3">
                {cat.items.map((item, i) => {
                  const level = proficiency[item] ?? 85;
                  return (
                    <li key={item}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="text-white/80 font-medium">{item}</span>
                        <span className="text-xs text-white/40 font-mono">{level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-electric to-cyan-accent shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
