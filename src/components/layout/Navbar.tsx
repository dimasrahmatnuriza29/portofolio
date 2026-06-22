"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Clients", href: "#stories" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 backdrop-blur-xl bg-navy-900/70 border-b border-white/[0.06]"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-2.5" aria-label="Home">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-cyan-accent text-navy-900 font-black text-lg shadow-glow">
              D
              <span className="absolute inset-0 rounded-xl bg-cyan-accent/30 blur-md -z-10 group-hover:bg-cyan-accent/50 transition-colors" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-bold text-white tracking-tight">Dimas Rahmat Nuriza</span>
              <span className="text-[10px] text-white/50 font-medium tracking-widest uppercase">AI · ML · IT</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1 glass-light rounded-full px-2 py-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-colors ${
                    active === link.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-sm"
            >
              <span>Let&apos;s Talk</span>
              <Icon name="arrowRight" className="w-4 h-4" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden flex items-center justify-center h-10 w-10 rounded-xl glass-light text-white"
              aria-label="Open menu"
            >
              <Icon name="menu" className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-900/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm glass-strong border-l border-white/10 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-white font-bold">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center h-10 w-10 rounded-xl glass-light text-white"
                  aria-label="Close menu"
                >
                  <Icon name="close" className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3.5 px-4 rounded-xl text-lg font-medium text-white/80 hover:text-white hover:bg-white/[0.05] transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-auto"
              >
                <Icon name="whatsapp" className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
