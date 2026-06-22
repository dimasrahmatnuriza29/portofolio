"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const focusAreas = [
  { label: "AI Engineering", icon: "brain" },
  { label: "Machine Learning", icon: "chart" },
  { label: "Data Science", icon: "database" },
  { label: "Full Stack Development", icon: "code" },
  { label: "IT Consulting", icon: "compass" },
  { label: "Enterprise Architecture", icon: "blueprint" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-electric/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Portrait */}
          <Reveal y={32}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden gradient-border p-[1px]">
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-navy-700 to-navy-900">
                  {/* Profile photo */}
                  <Image
                    src="/profile.jpg"
                    alt="Dimas Rahmat Nuriza"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Gradient overlay at bottom for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-900/90 to-transparent" />
                  {/* Name & title overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                    <div className="font-display text-xl font-bold text-white">Dimas Rahmat Nuriza</div>
                    <div className="mt-1 text-sm text-cyan-accent font-medium">Senior AI/ML Engineer</div>
                    <div className="mt-2 flex items-center justify-center gap-2 text-xs text-white/60">
                      <span className="glow-dot" />
                      <span>Available for new engagements</span>
                    </div>
                  </div>
                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-5 right-5 glass rounded-xl px-3 py-2 flex items-center gap-2"
                  >
                    <Icon name="award" className="w-4 h-4 text-cyan-accent" />
                    <span className="text-xs font-semibold text-white">5+ Years</span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-5 left-5 glass rounded-xl px-3 py-2 flex items-center gap-2"
                  >
                    <Icon name="building" className="w-4 h-4 text-electric" />
                    <span className="text-xs font-semibold text-white">Enterprise Focus</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Story */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <Icon name="user" className="w-3.5 h-3.5" />
                <span>About Me</span>
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Turning Enterprise Data Into{" "}
                <span className="text-gradient">Intelligent Outcomes</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-white/65 text-base sm:text-lg leading-relaxed">
                I&apos;m an AI/ML Engineer and IT Consultant with{" "}
                <span className="text-white font-medium">5+ years</span> of experience delivering
                enterprise-grade AI solutions, machine learning systems, full-stack applications,
                cloud architectures, and digital transformation initiatives for large-scale
                organizations.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-white/55 leading-relaxed">
                My work spans the full lifecycle — from strategy and architecture to production
                deployment and optimization — combining technical depth with a relentless focus on
                real business impact.
              </p>
            </Reveal>

            {/* Focus areas grid */}
            <Reveal delay={0.4}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {focusAreas.map((area) => (
                  <div
                    key={area.label}
                    className="group flex items-center gap-2.5 glass-light rounded-xl px-3.5 py-3 hover:border-cyan-accent/30 hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-accent/10 text-cyan-accent group-hover:bg-cyan-accent/20 transition-colors">
                      <Icon name={area.icon} className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-white/80">{area.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
