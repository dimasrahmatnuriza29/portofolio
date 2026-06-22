"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-electric/[0.06] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="eyebrow">
              <Icon name="briefcase" className="w-3.5 h-3.5" />
              <span>Professional Experience</span>
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              A career built on{" "}
              <span className="text-gradient">shipping at scale</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
              Five years across AI engineering, ML, consulting, and full-stack development —
              delivering outcomes for enterprise clients.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-accent via-electric to-transparent" />

          <div className="space-y-10 sm:space-y-0">
            {experience.map((role, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={role.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-12 ${
                    isLeft ? "" : ""
                  }`}
                >
                  {/* Connector dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                    <span className="flex h-4 w-4 items-center justify-center">
                      <span className="absolute h-4 w-4 rounded-full bg-cyan-accent/30 animate-ping" />
                      <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-cyan-accent to-electric shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-12 sm:pl-0 ${
                      isLeft ? "sm:col-start-1 sm:text-right sm:pr-12" : "sm:col-start-2 sm:pl-12"
                    }`}
                  >
                    <div className="glass gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isLeft ? "sm:justify-end" : ""
                        }`}
                      >
                        <span className="text-xs font-semibold text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/20 px-2.5 py-1 rounded-full">
                          {role.period}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">{role.role}</h3>
                      <p className="text-sm text-white/60 mt-0.5">{role.org}</p>
                      <p className="mt-3 text-sm text-white/55 leading-relaxed">{role.description}</p>

                      <ul className={`mt-4 space-y-1.5 ${isLeft ? "sm:text-left" : ""}`}>
                        {role.highlights.map((h) => (
                          <li
                            key={h}
                            className={`flex items-start gap-2 text-xs text-white/65 ${
                              isLeft ? "sm:flex-row-reverse sm:text-right" : ""
                            }`}
                          >
                            <Icon name="check" className="w-3.5 h-3.5 text-cyan-accent shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? "sm:justify-end" : ""}`}>
                        {role.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-white/60 bg-white/[0.04] border border-white/[0.08] rounded px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
