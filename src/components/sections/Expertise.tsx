"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { expertise } from "@/lib/expertise";

export function Expertise() {
  return (
    <section id="expertise" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-cyan-accent/[0.06] blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">
              <Icon name="layers" className="w-3.5 h-3.5" />
              <span>Expertise</span>
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              A full-stack{" "}
              <span className="text-gradient">AI capability set</span>, end to end
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
              From research-grade ML to production-grade platforms. Every capability below has been
              shipped for real enterprise clients.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {expertise.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative gradient-border rounded-2xl p-6 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-electric/10 via-transparent to-cyan-accent/10 pointer-events-none" />
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyan-accent/0 group-hover:bg-cyan-accent/15 blur-2xl transition-all duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="relative inline-flex">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric to-cyan-accent blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-cyan-accent/20 border border-white/10 text-cyan-accent group-hover:scale-110 transition-transform duration-300">
                    <Icon name={item.icon} className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-1.5 text-xs text-cyan-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <span>Capability</span>
                  <Icon name="arrowRight" className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
