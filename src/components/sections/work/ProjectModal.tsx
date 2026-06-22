"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Counter } from "@/components/ui/Counter";
import { LivePreview } from "./LivePreview";
import { siteConfig } from "@/lib/site";
import type { Project } from "@/lib/projects";

type Tab = "preview" | "caseStudy";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<Tab>("preview");

  useEffect(() => {
    if (project) {
      setTab("preview");
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy-900/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative glass-strong rounded-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden shadow-premium border border-white/10"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-white/5">
              <div className="flex items-start gap-3 min-w-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-cyan-accent/20 border border-white/10 text-cyan-accent">
                  <Icon name="cpu" className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white truncate">
                      {project.name}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/20 px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/55 mt-1">{project.tagline}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg glass-light text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <Icon name="close" className="w-4 h-4" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 px-5 sm:px-6 pt-4">
              {([
                { id: "preview", label: "Live Preview", icon: "desktop" },
                { id: "caseStudy", label: "Case Study", icon: "layers" },
              ] as { id: Tab; label: string; icon: string }[]).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    tab === t.id ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  <Icon name={t.icon} className="w-4 h-4" />
                  <span>{t.label}</span>
                  {tab === t.id && (
                    <motion.span
                      layoutId="modal-tab"
                      className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/10 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-5 sm:p-6 flex-1">
              {tab === "preview" ? (
                <div className="space-y-6">
                  <LivePreview url={project.url} accent={project.accent} />

                  {/* Embedded live view */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Icon name="external" className="w-4 h-4 text-cyan-accent" />
                        Scrollable Live View
                      </h4>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-accent hover:underline flex items-center gap-1"
                      >
                        Open in new tab <Icon name="arrowRight" className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="relative gradient-border rounded-xl overflow-hidden h-[360px] sm:h-[460px] bg-navy-900">
                      <iframe
                        src={project.url}
                        title={`${project.name} live preview`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <CaseStudyContent project={project} />
              )}
            </div>

            {/* Footer actions */}
            <div className="flex flex-wrap items-center gap-3 p-5 sm:p-6 border-t border-white/5 bg-navy-900/40">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2.5 !px-4 text-sm flex-1 sm:flex-none justify-center"
              >
                <Icon name="external" className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2.5 !px-4 text-sm flex items-center gap-2"
                >
                  <Icon name="github" className="w-4 h-4" />
                  <span>Source</span>
                </a>
              )}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-2.5 !px-4 text-sm flex items-center gap-2 ml-auto"
              >
                <Icon name="whatsapp" className="w-4 h-4" />
                <span className="hidden sm:inline">Discuss this project</span>
                <span className="sm:hidden">Discuss</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseStudyContent({ project }: { project: Project }) {
  const cs = project.caseStudy;
  return (
    <div className="space-y-8">
      {/* Metrics */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          <Icon name="gauge" className="w-4 h-4 text-cyan-accent" />
          Business Impact &amp; Results
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {cs.metrics.map((m) => (
            <div
              key={m.label}
              className="glass-light rounded-xl p-4 text-center gradient-border"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-1 text-[11px] text-white/55 font-medium uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge + Solution */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="glass rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-400/10 text-red-300">
              <Icon name="target" className="w-4 h-4" />
            </div>
            <h5 className="text-sm font-semibold text-white">Business Challenge</h5>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">{cs.challenge}</p>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-accent/10 text-cyan-accent">
              <Icon name="zap" className="w-4 h-4" />
            </div>
            <h5 className="text-sm font-semibold text-white">Solution</h5>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">{cs.solution}</p>
        </div>
      </div>

      {/* Architecture */}
      <CaseStudyBlock title="Architecture" icon="blueprint" items={cs.architecture} />
      <CaseStudyBlock title="AI Components" icon="brain" items={cs.aiComponents} />

      {/* Tech Stack */}
      <div>
        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
          <Icon name="layers" className="w-4 h-4 text-cyan-accent" />
          Technology Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {cs.techStack.map((t) => (
            <span
              key={t}
              className="text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Business impact */}
      <CaseStudyBlock title="Business Impact" icon="dollar" items={cs.businessImpact} />
    </div>
  );
}

function CaseStudyBlock({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
        <Icon name={icon} className="w-4 h-4 text-cyan-accent" />
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-start gap-2.5 text-sm text-white/65 leading-relaxed"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-cyan-accent/10 text-cyan-accent mt-0.5">
              <Icon name="check" className="w-3 h-3" />
            </span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
