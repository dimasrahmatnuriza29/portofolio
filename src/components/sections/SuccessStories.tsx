"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { successStories } from "@/lib/successStories";

const clientLogos: Record<string, string> = {
  Pertamina: "/clients/pertamina.png",
  Bukalapak: "/clients/bukalapak.png",
  Nojorono: "/clients/nojorono.png",
  "Amman Mineral": "/clients/amman-mineral.png",
  "Asian Agri": "/clients/asian-agri.png",
};

export function SuccessStories() {
  return (
    <section id="stories" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full bg-electric/[0.06] blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">
              <Icon name="star" className="w-3.5 h-3.5" />
              <span>Client Success Stories</span>
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Enterprise outcomes,{" "}
              <span className="text-gradient">measurably delivered</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
              Real engagements with leading organizations — the challenges, the solutions, and the
              impact.
            </p>
          </Reveal>
        </div>

        {/* Stories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {successStories.map((story) => (
            <motion.article
              key={story.client}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group glass gradient-border rounded-2xl p-7 overflow-hidden"
            >
              {/* Client header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 overflow-hidden p-1.5">
                    {clientLogos[story.client] ? (
                      <Image
                        src={clientLogos[story.client]}
                        alt={story.client}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    ) : (
                      <span className="font-display text-lg font-bold text-white">
                        {story.client.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{story.client}</h3>
                    <p className="text-xs text-white/50">{story.sector}</p>
                  </div>
                </div>
                <Icon name="quote" className="w-7 h-7 text-white/10 group-hover:text-cyan-accent/30 transition-colors" />
              </div>

              {/* Problem / Solution */}
              <div className="mt-5 space-y-3">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-red-300/80 mb-1">
                    <Icon name="target" className="w-3 h-3" />
                    Problem
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{story.problem}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-accent mb-1">
                    <Icon name="zap" className="w-3 h-3" />
                    Solution
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{story.solution}</p>
                </div>
              </div>

              {/* Tech */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {story.technology.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-medium text-white/65 bg-white/[0.04] border border-white/[0.08] rounded px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-3 gap-2">
                {story.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="font-display text-xl sm:text-2xl font-bold text-gradient">
                      <Counter value={m.value} suffix={m.suffix} />
                    </div>
                    <div className="mt-0.5 text-[9px] sm:text-[10px] text-white/45 font-medium uppercase tracking-wide leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
