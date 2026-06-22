"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Counter } from "@/components/ui/Counter";
import { ParticleField } from "@/components/ui/ParticleField";
import { siteConfig } from "@/lib/site";

const metrics = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "", label: "Enterprise Clients" },
  { value: 30, suffix: "+", label: "AI Solutions Delivered" },
  { value: 14, suffix: "+", label: "Expertise Domains" },
];

const floatingShapes = [
  { icon: "cpu", className: "top-[18%] left-[8%]", delay: 0, size: "w-14 h-14" },
  { icon: "network", className: "top-[28%] right-[10%]", delay: 1.2, size: "w-16 h-16" },
  { icon: "brain", className: "bottom-[24%] left-[12%]", delay: 2.1, size: "w-12 h-12" },
  { icon: "sparkles", className: "bottom-[18%] right-[8%]", delay: 0.6, size: "w-14 h-14" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      {/* Aurora */}
      <div className="aurora opacity-70" />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] opacity-60" />
      {/* Particles */}
      <ParticleField />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900" />

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex items-center justify-center ${shape.className} ${shape.size} pointer-events-none`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.15, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
            className="glass rounded-2xl flex items-center justify-center w-full h-full text-cyan-accent/70 shadow-glow"
          >
            <Icon name={shape.icon} className="w-1/2 h-1/2" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-7"
          >
            <span className="glow-dot" />
            <span>Available for Enterprise Engagements</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] font-bold leading-[1.05] tracking-tight text-balance max-w-5xl"
          >
            Building{" "}
            <span className="text-gradient-shimmer">AI-Powered</span>
            <br className="hidden sm:block" /> Digital Solutions{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient">That Scale</span>
              <svg
                viewBox="0 0 300 12"
                className="absolute -bottom-1 left-0 w-full h-2.5 text-cyan-accent/70"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 8 Q 75 2 150 6 T 298 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.9 }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-base sm:text-lg lg:text-xl text-white/65 max-w-3xl leading-relaxed text-balance"
          >
            Senior AI/ML Engineer, IT Consultant, and Full Stack Developer helping
            enterprises transform data into{" "}
            <span className="text-white font-medium">intelligent business solutions</span>{" "}
            — from strategy to production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <MagneticButton
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              <span>Schedule Consultation</span>
              <Icon name="arrowRight" className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton href="#work" className="btn-secondary w-full sm:w-auto">
              <Icon name="layers" className="w-5 h-5" />
              <span>View Projects</span>
            </MagneticButton>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40"
          >
            <span className="flex items-center gap-1.5">
              <Icon name="check" className="w-3.5 h-3.5 text-cyan-accent" />
              Trusted by Pertamina, Bukalapak &amp; more
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Icon name="star" className="w-3.5 h-3.5 text-cyan-accent" />
              5+ years enterprise experience
            </span>
          </motion.div>

          {/* Animated Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 w-full grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="glass gradient-border rounded-2xl p-5 sm:p-6 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
                  <Counter value={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-2 text-[11px] sm:text-xs text-white/55 font-medium uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-cyan-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
