"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const clientLogos: Record<string, string> = {
  Pertamina: "/clients/pertamina.png",
  Bukalapak: "/clients/bukalapak.png",
  Nojorono: "/clients/nojorono.png",
  "Amman Mineral": "/clients/amman-mineral.png",
  "Asian Agri": "/clients/asian-agri.png",
};

type ClientProject = {
  client: string;
  sector: string;
  project: string;
  description: string;
  tech: string[];
  contributions: string[];
};

const clientProjects: ClientProject[] = [
  {
    client: "Pertamina",
    sector: "Energy & State-Owned Oil",
    project: "Object Detection for Unauthorized Occupants (PTH)",
    description:
      "Developed an object detection system to identify Penghuni Tanpa Hak (PTH) on Pertamina's land and assets. Integrated with internal satellites and drones to monitor oil fields, refineries, and storage facilities using DETR (Detection Transformer, PyTorch) for real-time accurate detection.",
    tech: ["PyTorch", "OpenCV", "DETR", "ArcGIS", "QGIS", "Satellite Imagery", "Drone Surveillance"],
    contributions: [
      "Enhanced security and asset protection by detecting unauthorized access",
      "Reduced potential losses and risks through early detection",
      "Deployed scalable pipeline for high-resolution satellite and drone imagery",
      "Collaborated with Pertamina's IT & Security teams for iterative performance improvements",
    ],
  },
  {
    client: "Bukalapak",
    sector: "E-commerce & Marketplace",
    project: "Healthcare Stock Management — AI Assistant & WhatsApp Alert",
    description:
      "Built a Healthcare Stock Management system integrated with an AI Assistant and automated WhatsApp alerts. Enables real-time tracking of medical supplies, AI-powered stock queries for pharmacy staff, and post-purchase dosage reminders sent directly to customers.",
    tech: ["Python", "Pandas", "SQL", "Streamlit", "WhatsApp API"],
    contributions: [
      "Built a centralized stock location tracker so staff can instantly find item positions",
      "Developed an AI Assistant chat interface for stock availability and storage queries",
      "Implemented automated WhatsApp alerts sending personalized medication reminders post-purchase",
      "Improved patient medication adherence through proactive direct-to-WhatsApp communication",
    ],
  },
  {
    client: "Nojorono",
    sector: "Manufacturing & FMCG",
    project: "ML Daily Order Suggestion — Demand Forecasting",
    description:
      "Developed a machine learning–based Daily Order Suggestion system to predict optimal SKU assortment and recommended order quantities for distributors, leveraging historical sales transactions, demand patterns, and ordering behavior.",
    tech: ["Python", "Pandas", "Scikit-learn", "SQL", "Streamlit"],
    contributions: [
      "Built a multi-label classification model to predict which SKUs to carry daily",
      "Developed regression/forecasting models to recommend quantities per SKU",
      "Improved inventory planning by reducing stockout and overstock risks",
      "Supported distributors and sales teams with data-driven order recommendations",
    ],
  },
  {
    client: "Amman Mineral",
    sector: "Mining & Resources",
    project: "Anomaly Detection for Crusher & Flotation Machines",
    description:
      "Implemented an anomaly detection system for Crusher and Flotation machines at PT Amman Mineral. Monitored operational data (temperature, lubricant flow, component position) in real time using time-series analysis to detect unusual patterns indicating potential failures.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Time-Series Analysis"],
    contributions: [
      "Identified anomalous patterns in machine operational data to anticipate issues early",
      "Generated alert notifications for maintenance teams when anomalies were detected",
      "Reduced downtime and maintenance costs by preventing major machine breakdowns",
      "Ensured machines operated at optimal performance through proactive monitoring",
    ],
  },
  {
    client: "Asian Agri",
    sector: "Agribusiness",
    project: "IT Consulting & Digital Transformation",
    description:
      "Provided IT consulting and digital transformation advisory for Asian Agri's agricultural operations, supporting cloud migration, data strategy, and operational technology modernization initiatives.",
    tech: ["Cloud Architecture", "Data Strategy", "Enterprise Consulting"],
    contributions: [
      "Assessed existing IT infrastructure and identified transformation opportunities",
      "Delivered cloud migration roadmap aligned with operational requirements",
      "Supported data strategy and reporting modernization initiatives",
    ],
  },
];

function ProjectModal({ project, onClose }: { project: ClientProject; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-md" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass rounded-2xl p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-accent/10 border border-cyan-accent/20">
                <span className="font-display font-bold text-sm text-cyan-accent">
                  {project.client.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-xs font-medium text-cyan-accent uppercase tracking-wider">{project.client}</div>
                <div className="text-xs text-white/40">{project.sector}</div>
              </div>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
              {project.project}
            </h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">{project.description}</p>
          </div>

          {/* Tech stack */}
          <div className="mb-6">
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Tools & Tech</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/20 px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Contributions */}
          <div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Goals & Contributions</div>
            <ul className="space-y-2">
              {project.contributions.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-white/65">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-accent shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function TrustedBy() {
  const [selected, setSelected] = useState<ClientProject | null>(null);
  const doubled = [...clientProjects, ...clientProjects];

  return (
    <section className="relative py-16 border-y border-white/[0.05] bg-navy-800/40">
      <Reveal className="text-center mb-10">
        <p className="text-xs sm:text-sm font-medium text-white/45 uppercase tracking-[0.2em]">
          Clients I&apos;ve delivered for across Indonesia &amp; beyond
        </p>
        <p className="mt-1 text-[11px] text-white/25 normal-case tracking-normal">Click any client to view project details</p>
      </Reveal>

      <div className="relative mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((cp, i) => (
            <button
              key={`${cp.client}-${i}`}
              data-cursor="hover"
              onClick={() => setSelected(cp)}
              className="group relative flex items-center gap-3 px-7 sm:px-10 py-4 shrink-0 cursor-pointer"
            >
              <div className="flex items-center gap-3 transition-all duration-500">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-accent/40 group-hover:bg-white/10 transition-all duration-500 overflow-hidden p-1">
                  {clientLogos[cp.client] ? (
                    <Image
                      src={clientLogos[cp.client]}
                      alt={cp.client}
                      width={28}
                      height={28}
                      className="object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  ) : (
                    <span className="font-display font-bold text-base text-white/40 group-hover:text-cyan-accent transition-colors duration-500">
                      {cp.client.charAt(0)}
                    </span>
                  )}
                </div>
                <span className="font-display text-lg sm:text-xl font-semibold text-white/40 group-hover:text-white tracking-tight transition-colors duration-500">
                  {cp.client}
                </span>
              </div>
              {/* Tooltip */}
              <div className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-11 transition-all duration-300 whitespace-nowrap">
                <span className="text-[10px] uppercase tracking-wider text-white/70 bg-navy-800/95 border border-white/10 px-2.5 py-1 rounded-md backdrop-blur">
                  {cp.sector}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
