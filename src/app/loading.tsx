export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-900">
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated logo */}
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric to-cyan-accent blur-xl opacity-60 animate-glow-pulse" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-cyan-accent">
            <span className="font-display text-2xl font-black text-navy-900">D</span>
          </div>
        </div>
        {/* Loader bar */}
        <div className="w-48 h-1 rounded-full bg-white/5 overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-electric to-cyan-accent animate-marquee" />
        </div>
        <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
          Loading experience
        </p>
      </div>
    </div>
  );
}
