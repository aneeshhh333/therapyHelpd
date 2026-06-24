import React from "react";
import { Link } from "react-router-dom";
import { Award, GraduationCap, HeartHandshake, Users, Brain, ArrowRight } from "lucide-react";
import content from "@/data/content.json";
import Reveal from "@/components/Reveal";

const APPROACH = [
  { Icon: Brain, label: "Cognitive Behavioral Therapy (CBT)" },
  { Icon: HeartHandshake, label: "Dialectical Behavior Therapy (DBT)" },
  { Icon: Award, label: "Mindfulness-Based Approaches" },
  { Icon: GraduationCap, label: "Trauma-Informed Care" },
];

export default function About() {
  const { about, therapist } = content;
  const intro = about.intro;

  return (
    <div data-testid="page-about">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <Reveal>
            <div className="text-[12px] tracking-widest uppercase font-semibold text-emerald-600">About</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-6xl sm:text-7xl lg:text-[120px] leading-[0.88] tracking-tighter text-stone-900">
              Hi, I'm <span className="gradient-text">{therapist.name}.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 text-stone-600 text-xl max-w-3xl leading-relaxed">
              {therapist.title}. Here to help you understand what you're feeling,
              why you're feeling it, and what to actually do about it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Photo + intro */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-12 items-start">
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[48px] gradient-bar opacity-20 blur-xl" />
              <div className="relative rounded-[40px] overflow-hidden bg-stone-100 aspect-[4/5] grain shadow-2xl shadow-stone-300/40">
                {about.image ? (
                  <img src={about.image} alt={therapist.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full grid place-items-center text-stone-400"><Users size={64} /></div>
                )}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3 space-y-6">
            <Reveal>
              <p className="text-stone-700 text-lg leading-relaxed first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-emerald-600">
                {intro}
              </p>
            </Reveal>
            {about.sections.slice(0, 2).map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div>
                  <h2 className="font-display text-3xl tracking-tighter text-stone-900 mt-4">{s.heading}</h2>
                  <div className="mt-3 text-stone-600 text-[16px] leading-relaxed whitespace-pre-line">{s.body}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-[12px] tracking-widest uppercase font-semibold text-orange-600">My Approach</div>
            <h2 className="mt-3 font-display text-5xl lg:text-6xl tracking-tighter text-stone-900 leading-[0.9] max-w-3xl">
              Evidence-based, but never <span className="gradient-text">clinical-feeling.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {APPROACH.map(({ Icon, label }, i) => (
              <Reveal key={label} delay={i * 80}>
                <div className="bg-white rounded-3xl p-6 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 grid place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Icon size={22} />
                  </div>
                  <div className="mt-5 font-display text-2xl tracking-tighter text-stone-900 leading-tight">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-[40px] p-10 lg:p-16 bg-stone-900 grain text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="text-[12px] tracking-widest uppercase font-semibold text-emerald-400">Let's begin</div>
              <h3 className="mt-3 font-display text-4xl lg:text-5xl tracking-tighter leading-[0.9] max-w-2xl">
                The hardest part is reaching out. I'll take it from there.
              </h3>
            </div>
            <Link
              to="/contact"
              data-testid="about-cta-contact"
              className="inline-flex items-center gap-2 bg-white text-stone-900 px-6 py-4 rounded-2xl font-semibold btn-press hover:bg-emerald-500 hover:text-white"
            >
              Contact me <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
