"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: siteConfig.github, icon: "github" },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: "linkedin" },
  { label: "WhatsApp", href: siteConfig.whatsapp, icon: "whatsapp" },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" },
];

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-white/[0.06] bg-navy-900/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-64 rounded-full bg-electric/[0.05] blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#hero" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-cyan-accent text-navy-900 font-black text-lg">
                D
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-white">Dimas Rahmat Nuriza</span>
                <span className="text-[10px] text-white/50 font-medium tracking-widest uppercase mt-1">
                  Senior AI/ML Engineer
                </span>
              </div>
            </a>
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-sm">
              Helping enterprises transform data into intelligent business solutions — from AI
              strategy to production deployment.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-white/45">
              <span className="glow-dot" />
              <span>Available for enterprise engagements</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 hover:text-cyan-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/65 hover:text-cyan-accent transition-colors"
                >
                  <Icon name="mail" className="w-4 h-4" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/65 hover:text-cyan-accent transition-colors"
                >
                  <Icon name="phone" className="w-4 h-4" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/65 hover:text-cyan-accent transition-colors"
                >
                  <Icon name="whatsapp" className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass-light text-white/60 hover:text-cyan-accent hover:border-cyan-accent/30 transition-colors"
                >
                  <Icon name={s.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} Dimas Rahmat Nuriza. Crafted with precision for
            enterprise-grade AI.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <Icon name="globe" className="w-3.5 h-3.5" />
              <span>Remote · Worldwide</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="cpu" className="w-3.5 h-3.5" />
              <span>Built with Next.js</span>
            </span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cyan-accent text-navy-900 shadow-glow hover:scale-110 transition-transform"
          >
            <Icon name="arrowUp" className="w-5 h-5" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
