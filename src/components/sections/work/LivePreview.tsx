"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/Icon";

type Device = "desktop" | "tablet" | "mobile";

const deviceConfig: Record<
  Device,
  { label: string; icon: string; aspect: string; maxW: string }
> = {
  desktop: { label: "Desktop", icon: "desktop", aspect: "16/10", maxW: "100%" },
  tablet: { label: "Tablet", icon: "tablet", aspect: "4/3", maxW: "78%" },
  mobile: { label: "Mobile", icon: "mobile", aspect: "9/19", maxW: "32%" },
};

/**
 * Renders a live screenshot of a website via a screenshot proxy.
 * Uses the public microlink screenshot API for live preview thumbnails.
 * Falls back gracefully to a styled placeholder on error.
 */
export function LivePreview({
  url,
  accent = "electric",
}: {
  url: string;
  accent?: "electric" | "cyan";
}) {
  const [device, setDevice] = useState<Device>("desktop");
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const cfg = deviceConfig[device];
  const accentText = accent === "cyan" ? "text-cyan-accent" : "text-electric-light";
  const isExternal = url !== "#";

  return (
    <div className="w-full">
      {/* Device toggle */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1 glass-light rounded-lg p-1">
          {(Object.keys(deviceConfig) as Device[]).map((d) => (
            <button
              key={d}
              onClick={() => setDevice(d)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                device === d
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
              aria-pressed={device === d}
            >
              <Icon name={deviceConfig[d].icon} className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{deviceConfig[d].label}</span>
            </button>
          ))}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-white/50 hover:text-cyan-accent transition-colors"
        >
          <span className="hidden sm:inline truncate max-w-[180px]">{new URL(url).hostname}</span>
          <Icon name="external" className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Browser frame */}
      <div className="relative gradient-border rounded-xl overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-navy-800/80 border-b border-white/5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span className="h-3 w-3 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 mx-3">
            <div className="flex items-center gap-1.5 bg-navy-900/60 border border-white/5 rounded-md px-3 py-1 max-w-xs">
              <Icon name="shield" className={`w-3 h-3 ${accentText}`} />
              <span className="text-[11px] text-white/50 truncate">{new URL(url).hostname}</span>
            </div>
          </div>
          <div className={`h-2 w-2 rounded-full ${loaded ? "bg-green-400" : "bg-yellow-400/70 animate-pulse"}`} />
        </div>

        {/* Viewport */}
        <div
          className="relative bg-navy-900 flex items-start justify-center p-4 sm:p-6 transition-all duration-500"
          style={{ minHeight: "260px" }}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
            className="relative w-full overflow-hidden rounded-lg border border-white/5 shadow-premium"
            style={{ aspectRatio: cfg.aspect, maxWidth: cfg.maxW }}
          >
            {/* Skeleton */}
            <AnimatePresence>
              {!loaded && !error && (
                <motion.div
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 flex flex-col items-center justify-center gap-3"
                >
                  <div className="absolute inset-0 shimmer-bg" />
                  <div className="relative flex flex-col items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/10 ${accentText} animate-spin-slow`}>
                      <Icon name="refresh" className="w-5 h-5" />
                    </div>
                    <p className="text-xs text-white/50">Capturing live preview…</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error / fallback */}
            {error ? (
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${accentText}`}>
                  <Icon name="globe" className="w-6 h-6" />
                </div>
                <p className="text-xs text-white/60">Live preview unavailable</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-accent hover:underline flex items-center gap-1"
                >
                  Open site <Icon name="external" className="w-3 h-3" />
                </a>
              </div>
            ) : isExternal ? (
              <img
                src={`https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.device=desktop&waitUntil=networkidle0&colorScheme.dark=true`}
                alt={`Live preview of ${url}`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={() => { setError(true); setLoaded(true); }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 p-6 text-center">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${accentText}`}>
                  <Icon name="building" className="w-6 h-6" />
                </div>
                <p className="text-xs text-white/60 leading-relaxed">Enterprise project — live demo not available</p>
              </div>
            )}

            {/* Glare overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
