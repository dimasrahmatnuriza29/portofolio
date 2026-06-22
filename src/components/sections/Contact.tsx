"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { siteConfig } from "@/lib/site";

function CopyButton({
  value,
  label,
  children,
}: {
  value: string;
  label: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <button
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-cyan-accent transition-colors"
    >
      {children}
      <span>{copied ? "Copied!" : "Copy"}</span>
      <Icon
        name={copied ? "check" : "copy"}
        className={`w-3.5 h-3.5 ${copied ? "text-cyan-accent" : ""}`}
      />
    </button>
  );
}

const channels = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: "Chat now",
    href: siteConfig.whatsapp,
    icon: "whatsapp",
    accent: "from-green-400/20 to-emerald-400/10",
    iconColor: "text-green-300",
    copy: null,
    primary: true,
  },
  {
    key: "email",
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: "mail",
    accent: "from-electric/20 to-cyan-accent/10",
    iconColor: "text-cyan-accent",
    copy: { value: siteConfig.email, label: "email" },
    primary: false,
  },
  {
    key: "phone",
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`,
    icon: "phone",
    accent: "from-electric/20 to-cyan-accent/10",
    iconColor: "text-electric-light",
    copy: { value: siteConfig.phone, label: "phone" },
    primary: false,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "Connect",
    href: siteConfig.linkedin,
    icon: "linkedin",
    accent: "from-blue-400/20 to-electric/10",
    iconColor: "text-blue-300",
    copy: null,
    primary: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-electric/[0.08] blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="glow-dot" />
              <span>Let&apos;s Connect</span>
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Let&apos;s Build Something{" "}
              <span className="text-gradient-shimmer">Extraordinary</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you need an AI strategy, a production ML system, or a full digital
              transformation — let&apos;s talk about your goals.
            </p>
          </Reveal>
        </div>

        {/* Primary CTA */}
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-base !py-4 !px-8"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              <span>Start a Conversation</span>
              <Icon name="arrowRight" className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton href={`mailto:${siteConfig.email}`} className="btn-secondary w-full sm:w-auto text-base !py-4 !px-8">
              <Icon name="mail" className="w-5 h-5" />
              <span>Send an Email</span>
            </MagneticButton>
          </div>
        </Reveal>

        {/* Contact channels */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((ch, i) => (
            <Reveal key={ch.key} delay={0.1 + i * 0.07}>
              <a
                href={ch.href}
                target={ch.key === "whatsapp" || ch.key === "linkedin" ? "_blank" : undefined}
                rel={ch.key === "whatsapp" || ch.key === "linkedin" ? "noopener noreferrer" : undefined}
                className="group relative block glass gradient-border rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${ch.accent} border border-white/10 ${ch.iconColor} group-hover:scale-110 transition-transform`}>
                      <Icon name={ch.icon} className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium uppercase tracking-wider text-white/45">
                        {ch.label}
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-white truncate">
                        {ch.value}
                      </div>
                    </div>
                  </div>
                  <Icon name="arrowRight" className="w-5 h-5 text-white/30 group-hover:text-cyan-accent group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Copy utilities */}
        <Reveal delay={0.4}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 glass-light rounded-xl py-3 px-5">
            <CopyButton value={siteConfig.email} label="email">
              <Icon name="mail" className="w-3.5 h-3.5" />
            </CopyButton>
            <span className="h-4 w-px bg-white/10" />
            <CopyButton value={siteConfig.phone} label="phone">
              <Icon name="phone" className="w-3.5 h-3.5" />
            </CopyButton>
          </div>
        </Reveal>

        {/* Response promise */}
        <Reveal delay={0.5}>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/50">
            <Icon name="clock" className="w-4 h-4 text-cyan-accent" />
            <span>Typically replies within 24 hours</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
