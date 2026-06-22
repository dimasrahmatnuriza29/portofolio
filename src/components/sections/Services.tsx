"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-electric/[0.07] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">
              <Icon name="briefcase" className="w-3.5 h-3.5" />
              <span>Capabilities</span>
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              What I Know.{" "}
              <span className="text-gradient">What I Can Build.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
              A hands-on skill set built across AI, machine learning, full-stack engineering, and enterprise consulting — refined through years of production delivery.
            </p>
          </Reveal>
        </div>

        {/* Services grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:border-white/15 transition-colors"
            >
              {/* Animated gradient backdrop on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-electric/20 blur-3xl animate-glow-pulse" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-cyan-accent/15 blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
              </div>

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric to-cyan-accent blur-md opacity-30 group-hover:opacity-60 transition-opacity" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/15 to-cyan-accent/15 border border-white/10 text-cyan-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon name={service.icon} className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="text-white/20 group-hover:text-cyan-accent/50 transition-colors">
                    <Icon name="arrowRight" className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm text-white/55 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-white/60">
                      <Icon name="check" className="w-3.5 h-3.5 text-cyan-accent shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
