"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { workflow } from "@/lib/workflow";

export function Workflow() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-cyan-accent/[0.05] blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="eyebrow">
              <Icon name="refresh" className="w-3.5 h-3.5" />
              <span>Workflow Process</span>
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              From discovery to{" "}
              <span className="text-gradient">continuous optimization</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
              A proven, transparent process that turns ambiguous business problems into production
              AI systems — and keeps improving them.
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {workflow.map((step, i) => {
            const isOpen = active === i;
            return (
              <motion.button
                key={step.number}
                variants={staggerItem}
                onClick={() => setActive(isOpen ? null : i)}
                className={`group relative text-left glass rounded-2xl p-6 overflow-hidden transition-all duration-300 ${
                  isOpen ? "ring-1 ring-cyan-accent/40" : "hover:border-white/15"
                }`}
              >
                {/* Glow on hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyan-accent/0 group-hover:bg-cyan-accent/10 blur-2xl transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-black text-white/10 group-hover:text-cyan-accent/30 transition-colors">
                      {step.number}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-electric/15 to-cyan-accent/15 border border-white/10 text-cyan-accent group-hover:scale-110 transition-transform">
                      <Icon name={step.icon} className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{step.description}</p>

                  {/* Expandable details */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 space-y-1.5 overflow-hidden"
                      >
                        {step.details.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2 text-xs text-white/65"
                          >
                            <Icon name="check" className="w-3 h-3 text-cyan-accent shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Connector arrow (desktop) */}
                {i < workflow.length - 1 && (
                  <div className="hidden xl:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-10 items-center justify-center">
                    <div className="h-5 w-5 rounded-full bg-navy-800 border border-cyan-accent/30 flex items-center justify-center">
                      <Icon name="arrowRight" className="w-2.5 h-2.5 text-cyan-accent" />
                    </div>
                  </div>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-xs text-white/40">
            Click any step to see the activities involved.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
