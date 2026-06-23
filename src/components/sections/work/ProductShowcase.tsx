"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { useTilt } from "@/components/ui/useTilt";
import { projects, projectFilters, type Project } from "@/lib/projects";
import { ProjectModal } from "./ProjectModal";
import { siteConfig } from "@/lib/site";

export function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="work" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[40rem] rounded-full bg-electric/[0.07] blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">
                <Icon name="layers" className="w-3.5 h-3.5" />
                <span>Portfolio</span>
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Real products.{" "}
                <span className="text-gradient">Real business impact.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
                Explore production-ready solutions. Open live demos, browse case studies, and see
                the architecture behind each build.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Filters */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex gap-2 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5 sm:mx-0 sm:px-0">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`relative shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeFilter === f
                    ? "text-white"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {activeFilter === f && (
                  <motion.span
                    layoutId="filter-active"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-electric to-cyan-accent -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {activeFilter !== f && (
                  <span className="absolute inset-0 rounded-full glass-light -z-10" />
                )}
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 text-center py-16">
            <Icon name="search" className="w-10 h-10 text-white/30 mx-auto" />
            <p className="mt-4 text-white/50">No projects in this category yet.</p>
          </div>
        )}

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="mt-14 glass rounded-2xl p-8 sm:p-10 text-center gradient-border">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Want a build like this for your organization?
            </h3>
            <p className="mt-2 text-white/55 max-w-xl mx-auto">
              Let&apos;s scope your AI initiative and ship something measurable.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Icon name="whatsapp" className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <Icon name="mail" className="w-4 h-4" />
                <span>Send a Brief</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const tilt = useTilt(6);
  const accentRing =
    project.accent === "cyan" ? "from-cyan-accent/40 to-electric/30" : "from-electric/40 to-cyan-accent/30";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="perspective-1000"
    >
      <motion.div
        ref={tilt.ref}
        onMouseMove={tilt.onMove}
        onMouseLeave={tilt.onLeave}
        style={{
          rotateX: tilt.style.rotateX,
          rotateY: tilt.style.rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative gradient-border rounded-3xl overflow-hidden h-full hover:shadow-premium transition-shadow duration-500"
      >
        {/* Glare */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${tilt.style.glareX}% ${tilt.style.glareY}%, rgba(34,211,238,0.18), transparent 50%)`,
          }}
        />

        {/* Preview thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden bg-navy-800">
          <div className="absolute inset-0 bg-grid opacity-20" />
          {/* Browser chrome */}
          <div className="absolute top-0 inset-x-0 z-10 flex items-center gap-2 px-4 py-2.5 bg-navy-900/70 backdrop-blur-sm border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <div className="flex-1 mx-2">
              <div className="bg-navy-800/70 rounded px-2.5 py-0.5 max-w-[200px] truncate text-[10px] text-white/40">
                {project.url === "#" ? "enterprise project" : new URL(project.url).hostname}
              </div>
            </div>
            <span className="text-[9px] text-cyan-accent font-semibold uppercase tracking-wider bg-cyan-accent/10 px-1.5 py-0.5 rounded">
              {project.category}
            </span>
          </div>

          {/* Live screenshot thumbnail */}
          <ProjectThumb project={project} />

          {/* Hover overlay with actions */}
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-navy-900/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <button
              onClick={onOpen}
              style={{ transform: "translateZ(50px)" }}
              className="btn-primary scale-90 group-hover:scale-100 transition-transform duration-400"
            >
              <Icon name="external" className="w-4 h-4" />
              <span>Explore Project</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-gradient transition-all">
                {project.name}
              </h3>
              <p className="text-xs text-cyan-accent font-medium mt-0.5">{project.tagline}</p>
            </div>
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${accentRing} text-navy-900`}>
              <Icon name="cpu" className="w-4 h-4" />
            </div>
          </div>

          <p className="mt-3 text-sm text-white/55 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium text-white/70 bg-white/[0.04] border border-white/[0.08] rounded-md px-2 py-1"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="text-[11px] font-medium text-white/40 px-2 py-1">
                +{project.tech.length - 5}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-2">
            <button
              onClick={onOpen}
              className="flex items-center gap-1.5 text-sm font-medium text-cyan-accent hover:text-cyan-light transition-colors"
            >
              <span>Case Study</span>
              <Icon name="arrowRight" className="w-4 h-4" />
            </button>
            <span className="text-white/20">·</span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              <Icon name="external" className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

function ProjectThumb({ project }: { project: Project }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
    project.url
  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.device=desktop&waitUntil=networkidle0&colorScheme.dark=true`;

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 shimmer-bg bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900" />
      )}
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy-700 to-navy-900">
          <Icon name="globe" className="w-8 h-8 text-white/30" />
          <span className="text-[10px] text-white/40">Live preview</span>
        </div>
      ) : (
        <img
          src={screenshotUrl}
          alt={`${project.name} preview`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true);
            setLoaded(true);
          }}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </>
  );
}
