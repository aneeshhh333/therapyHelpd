import React, { useRef, useState } from "react";
import { Leaf, Sparkles, HeartHandshake, Sun } from "lucide-react";

/* 3D mouse-tracking card stack — used in hero */
export default function HeroCardStack() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / 20;
    const dy = (e.clientY - cy) / 20;
    setTilt({ x: -dy, y: dx });
  };

  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-full h-[520px] lg:h-[600px] perspective-1000"
      data-testid="hero-3d-stack"
    >
      <div
        className="absolute inset-0 preserve-3d transition-transform duration-200 ease-out"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        {/* Card A (Emerald) — base */}
        <div
          className="absolute left-[8%] top-[12%] w-64 h-80 rounded-[40px] grain shadow-2xl shadow-emerald-600/30"
          style={{
            background: "linear-gradient(160deg, #10b981 0%, #059669 60%, #047857 100%)",
            transform: "translateZ(0px) rotateY(-15deg) rotateX(10deg)",
          }}
        >
          <div className="p-7 h-full flex flex-col justify-between text-white">
            <div className="flex items-center justify-between">
              <span className="grid place-items-center w-11 h-11 rounded-2xl bg-white/15 backdrop-blur">
                <Leaf size={20} />
              </span>
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold opacity-90">Calm</span>
            </div>
            <div>
              <div className="font-display text-4xl leading-[0.9] tracking-tighter">Rooted<br/>Resilience</div>
              <div className="mt-3 text-[13px] text-emerald-50/90 leading-relaxed">
                Evidence-based CBT, DBT & mindfulness practices.
              </div>
            </div>
          </div>
        </div>

        {/* Card B (Orange) — offset front */}
        <div
          className="absolute right-[6%] bottom-[8%] w-64 h-80 rounded-[40px] grain shadow-2xl shadow-orange-600/30"
          style={{
            background: "linear-gradient(160deg, #fb923c 0%, #ea580c 55%, #c2410c 100%)",
            transform: "translateZ(50px) rotateY(15deg) rotateX(-5deg)",
          }}
        >
          <div className="p-7 h-full flex flex-col justify-between text-white">
            <div className="flex items-center justify-between">
              <span className="grid place-items-center w-11 h-11 rounded-2xl bg-white/15 backdrop-blur">
                <Sparkles size={20} />
              </span>
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold opacity-90">Energy</span>
            </div>
            <div>
              <div className="font-display text-4xl leading-[0.9] tracking-tighter">Real<br/>Change</div>
              <div className="mt-3 text-[13px] text-orange-50/90 leading-relaxed">
                Personalized plans for anxiety, mood & relationships.
              </div>
            </div>
          </div>
        </div>

        {/* Floating icons */}
        <div
          className="absolute top-[4%] right-[20%] w-14 h-14 grid place-items-center rounded-2xl bg-white shadow-xl shadow-stone-300/50 animate-hero-float"
          style={{ transform: "translateZ(80px)" }}
        >
          <HeartHandshake size={22} className="text-emerald-600" />
        </div>
        <div
          className="absolute bottom-[14%] left-[2%] w-14 h-14 grid place-items-center rounded-2xl bg-white shadow-xl shadow-stone-300/50 animate-hero-float-slow"
          style={{ transform: "translateZ(80px)" }}
        >
          <Sun size={22} className="text-orange-600" />
        </div>

        {/* Social proof badge */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass border border-stone-200/60 rounded-full pl-2 pr-5 py-2 flex items-center gap-3 shadow-xl shadow-stone-200/50"
          style={{ transform: "translateZ(60px)" }}
          data-testid="hero-social-proof"
        >
          <div className="flex -space-x-2">
            {[
              "from-emerald-500 to-emerald-700",
              "from-orange-400 to-orange-600",
              "from-stone-700 to-stone-900",
              "from-amber-400 to-amber-600",
            ].map((g, i) => (
              <span
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br ${g}`}
              />
            ))}
          </div>
          <div>
            <div className="text-[14px] font-bold text-stone-900 leading-tight">2,500+ sessions</div>
            <div className="text-[11px] text-stone-500">Trusted by individuals & families</div>
          </div>
        </div>
      </div>
    </div>
  );
}
