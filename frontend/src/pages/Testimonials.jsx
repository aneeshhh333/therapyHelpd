import React from "react";
import { Link } from "react-router-dom";
import { Quote, ArrowRight, Star } from "lucide-react";
import content from "@/data/content.json";
import Reveal from "@/components/Reveal";

const COLORS = [
  "bg-stone-50 border-stone-200 text-stone-900",
  "bg-stone-900 border-stone-900 text-white",
  "bg-emerald-50 border-emerald-100 text-stone-900",
  "bg-orange-50 border-orange-100 text-stone-900",
];

export default function Testimonials() {
  return (
    <div data-testid="page-testimonials">
      <section className="relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12 lg:pt-28">
          <Reveal>
            <div className="text-[12px] tracking-widest uppercase font-semibold text-emerald-600">Testimonials</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-display text-6xl sm:text-7xl lg:text-[112px] leading-[0.88] tracking-tighter text-stone-900">
              In their <span className="gradient-text">own words.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-stone-600 text-lg max-w-2xl">
              Hear from our patients
              
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.testimonials.map((t, i) => {
            const cls = COLORS[i % COLORS.length];
            const isDark = cls.includes("stone-900 border-stone-900");
            return (
              <Reveal key={i} delay={(i % 6) * 60}>
                <figure className={`rounded-3xl p-8 h-full border ${cls} flex flex-col`}>
                  <div className="flex items-center justify-between">
                    <Quote className={isDark ? "text-orange-400" : "text-emerald-600"} size={26} />
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} size={14} className={isDark ? "fill-orange-400 text-orange-400" : "fill-emerald-600 text-emerald-600"} />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-6 text-[16px] leading-relaxed flex-1">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className={`mt-6 pt-5 border-t ${isDark ? "border-stone-700 text-stone-300" : "border-stone-200 text-stone-500"} text-[12px] tracking-widest uppercase font-semibold`}>
                    — {t.author}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-[40px] bg-orange-600 text-white p-10 lg:p-16 grid lg:grid-cols-2 gap-8 items-center relative overflow-hidden">
            <div className="absolute -top-16 -right-10 w-72 h-72 bg-white/10 rounded-[48px] rotate-45" />
            <div className="relative">
              <h3 className="font-display text-5xl lg:text-6xl leading-[0.9] tracking-tighter">
                Your story could be the next one.
              </h3>
              <p className="mt-4 text-orange-50/90 max-w-md">
                Whether you're just curious or ready to begin, reaching out is the first step.
              </p>
            </div>
            <div className="relative justify-self-start lg:justify-self-end">
              <Link
                to="/contact"
                data-testid="testimonials-cta"
                className="inline-flex items-center gap-2 bg-stone-900 text-white px-7 py-4 rounded-2xl font-semibold btn-press hover:bg-emerald-600"
              >
                Start the conversation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
