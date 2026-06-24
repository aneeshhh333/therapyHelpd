import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, ShieldCheck, Heart, Users, Activity, Sparkles, Quote } from "lucide-react";
import content from "@/data/content.json";
import HeroCardStack from "@/components/HeroCardStack";
import Reveal from "@/components/Reveal";

const BENEFITS = [
  {
    icon: Brain,
    color: "emerald",
    title: "Evidence-Based",
    body: "CBT, DBT, mindfulness, and trauma-informed care — proven approaches tailored to your story.",
  },
  {
    icon: ShieldCheck,
    color: "orange",
    title: "Confidential & Safe",
    body: "A non-judgmental space where what you share stays between us. No labels. No rush.",
  },
  {
    icon: Heart,
    color: "yellow",
    title: "Compassion-First",
    body: "Therapy is a partnership. We move at your pace, with warmth, honesty, and respect.",
  },
];

const COLOR_MAP = {
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },
  yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
};

export default function Home() {
  const featuredTherapies = content.therapy;
  const firstTestimonials = content.testimonials.slice(0, 3);

  return (
    <div data-testid="page-home">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-20 w-[520px] h-[520px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 text-[12px] font-semibold tracking-widest uppercase text-stone-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Accepting new clients
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-7 font-display text-[64px] sm:text-7xl lg:text-[112px] leading-[0.88] tracking-tighter text-stone-900">
                THERAPY THAT<br />
                <span className="gradient-text">MEETS YOU</span><br />
                WHERE YOU ARE.
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-7 text-stone-600 text-lg max-w-xl leading-relaxed">
                I'm <span className="font-semibold text-stone-900">{content.therapist.name}</span>,
                a {content.therapist.title}. Together we'll untangle what's heavy,
                build practical tools, and help you find a steadier, more honest version of you.
              </p>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-9 grid grid-cols-2 gap-3 max-w-md" data-testid="hero-cta-row">
                <Link
                  to="/contact"
                  data-testid="hero-cta-primary"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-4 rounded-2xl font-semibold btn-press hover:bg-emerald-700 shadow-lg shadow-emerald-600/20"
                >
                  Book a session <ArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  data-testid="hero-cta-secondary"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-stone-900 text-stone-900 px-6 py-4 rounded-2xl font-semibold btn-press hover:bg-stone-900 hover:text-white"
                >
                  Explore services
                </Link>
              </div>
            </Reveal>

            <Reveal delay={460}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] text-stone-500">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Doctorate · Clinical Psychology</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-500" /> In-person & secure virtual</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-stone-900" /> 50-minute sessions</div>
              </div>
            </Reveal>
          </div>

          <div className="hidden lg:block">
            <HeroCardStack />
          </div>
        </div>
      </section>

      {/* MARQUEE band */}
      <section className="bg-white border-y border-stone-200/60 overflow-hidden">
        <div className="py-5 flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-8 font-display text-2xl tracking-tighter text-stone-300">
              <span>ANXIETY</span><span className="text-emerald-500">·</span>
              <span>DEPRESSION</span><span className="text-orange-500">·</span>
              <span>TRAUMA</span><span className="text-emerald-500">·</span>
              <span>RELATIONSHIPS</span><span className="text-orange-500">·</span>
              <span>OCD</span><span className="text-emerald-500">·</span>
              <span>ADHD</span><span className="text-orange-500">·</span>
              <span>GRIEF</span><span className="text-emerald-500">·</span>
              <span>LIFE TRANSITIONS</span><span className="text-orange-500">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* DARK BENEFITS */}
      <section className="bg-stone-900 grain text-stone-100 py-24" data-testid="benefits-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 items-end gap-10 mb-14">
            <Reveal>
              <h2 className="font-display text-5xl lg:text-7xl tracking-tighter text-white leading-[0.9]">
                A practice<br /> built on <span className="gradient-text">trust.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-stone-400 max-w-md md:justify-self-end">
                Therapy is more than symptom management. It's the slow, brave work of becoming —
                supported by clinical rigor and human warmth.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => {
              const c = COLOR_MAP[b.color];
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 100}>
                  <div className="group bg-stone-800 border border-stone-700/60 rounded-3xl p-8 h-full transition-all duration-300 hover:border-stone-600">
                    <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} border grid place-items-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={c.text} size={26} strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-6 font-display text-3xl tracking-tighter text-white">{b.title}</h3>
                    <p className="mt-3 text-stone-400 leading-relaxed">{b.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* THERAPY BENTO */}
      <section className="py-24 lg:py-32" data-testid="therapy-bento-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <Reveal>
              <h2 className="font-display text-5xl lg:text-6xl tracking-tighter text-stone-900 leading-[0.9] max-w-2xl">
                Therapy for <span className="gradient-text">every season</span> of life.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/services" data-testid="therapy-bento-view-all" className="inline-flex items-center gap-2 font-semibold text-stone-900 hover:text-emerald-600 group">
                See all services
                <span className="grid place-items-center w-10 h-10 rounded-full border-2 border-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTherapies.slice(0, 4).map((t, i) => {
              const bg = i % 2 === 0 ? "bg-emerald-50" : "bg-orange-50";
              return (
                <Reveal key={t.slug} delay={i * 80}>
                  <Link
                    to={`/services/therapy/${t.slug}`}
                    data-testid={`bento-card-${t.slug}`}
                    className="group block bg-white rounded-[40px] p-6 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-stone-300/60 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`relative aspect-square rounded-[32px] ${bg} overflow-hidden grid place-items-center`}>
                      {t.image ? (
                        <img
                          src={t.image}
                          alt={t.label}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <Heart className="text-stone-400" size={64} />
                      )}
                      {i === 0 && (
                        <span className="absolute top-4 left-4 bg-stone-900 text-white text-[11px] tracking-wider uppercase font-bold px-3 py-1.5 rounded-full">
                          Most Booked
                        </span>
                      )}
                    </div>
                    <div className="px-2 pt-6 pb-2">
                      <div className="text-[12px] tracking-widest uppercase font-semibold text-stone-500">Therapy</div>
                      <div className="mt-1 font-display text-3xl tracking-tighter text-stone-900">{t.label}</div>
                      <p className="mt-2 text-stone-600 text-[14px] line-clamp-2">
                        {t.intro?.slice(0, 110)}{t.intro && t.intro.length > 110 ? "…" : ""}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}

            {/* Dark CTA card */}
            <Reveal delay={300}>
              <div className="bg-stone-900 grain rounded-[40px] p-8 lg:p-10 h-full flex flex-col justify-between text-white" data-testid="bento-cta-card">
                <div>
                  <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white/10">
                    <Sparkles size={22} />
                  </span>
                  <div className="mt-6 font-display text-4xl tracking-tighter leading-[0.9]">
                    Not sure where to start?
                  </div>
                  <p className="mt-4 text-stone-400">
                    Tell me a little about what you're carrying. We'll find the right
                    fit together — no pressure, no commitments.
                  </p>
                </div>
                <Link
                  to="/contact"
                  data-testid="bento-cta-button"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-6 py-4 rounded-2xl font-semibold btn-press hover:bg-emerald-500 hover:text-white"
                >
                  Build my plan <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS preview */}
      <section className="py-24 bg-white border-t border-stone-200/60" data-testid="home-testimonials-preview">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <Reveal>
              <div>
                <div className="text-[12px] tracking-widest uppercase font-semibold text-emerald-600">Real Stories</div>
                <h2 className="mt-3 font-display text-5xl lg:text-6xl tracking-tighter text-stone-900 leading-[0.9] max-w-2xl">
                  Quiet wins, <span className="gradient-text">loud impact.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/testimonials" className="inline-flex items-center gap-2 font-semibold text-stone-900 hover:text-emerald-600">
                All testimonials <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {firstTestimonials.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure className={`rounded-3xl p-8 h-full border ${i === 1 ? "bg-stone-900 text-white border-stone-900" : "bg-stone-50 border-stone-200"}`}>
                  <Quote className={`${i === 1 ? "text-orange-400" : "text-emerald-600"}`} size={28} />
                  <blockquote className="mt-5 text-[17px] leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className={`mt-6 text-[13px] font-semibold tracking-widest uppercase ${i === 1 ? "text-stone-300" : "text-stone-500"}`}>
                    — {t.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ORANGE NEWSLETTER / CONTACT INJECTION */}
      <section className="relative overflow-hidden bg-orange-600 text-white" data-testid="cta-injection">
        <div className="absolute -top-20 -right-10 w-[420px] h-[420px] rotate-45">
          <div className="w-full h-full rounded-[80px] bg-white/10" />
        </div>
        <div className="absolute -bottom-32 -left-20 w-[340px] h-[340px] rotate-12">
          <div className="w-full h-full rounded-[60px] bg-emerald-500/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-[12px] tracking-widest uppercase font-semibold text-orange-100">Take the first step</div>
            <h2 className="mt-4 font-display text-6xl lg:text-7xl leading-[0.88] tracking-tighter">
              FEEL HEARD.<br /> FEEL HUMAN.<br /> START TODAY.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="bg-white rounded-[32px] p-8 lg:p-10 text-stone-900 shadow-2xl">
              <div className="font-display text-3xl tracking-tighter">Send a confidential note</div>
              <p className="mt-2 text-stone-600 text-[15px]">
                Share your name, where you're based and the best email to reach you.
                I'll respond personally within one business day.
              </p>
              <Link
                to="/contact"
                data-testid="cta-injection-button"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-stone-900 text-white px-6 py-4 rounded-2xl font-semibold btn-press hover:bg-emerald-600"
              >
                Open contact form <ArrowRight size={18} />
              </Link>
              <div className="mt-4 text-[12px] text-stone-500">
                Your details are private and will not be shared. This is not a crisis line —
                if you're in crisis, please call your local emergency number.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick about teaser */}
      <section className="py-24" data-testid="home-about-teaser">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[48px] gradient-bar opacity-20 blur-xl" />
              <div className="relative rounded-[40px] overflow-hidden bg-stone-100 aspect-[4/5] grain">
                {content.about.image ? (
                  <img src={content.about.image} alt="Eric Rodrigues" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full grid place-items-center text-stone-400">
                    <Users size={64} />
                  </div>
                )}
                <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 flex items-center gap-3">
                  <Activity size={20} className="text-emerald-600" />
                  <div className="text-[13px]">
                    <div className="font-semibold text-stone-900">Currently accepting new clients</div>
                    <div className="text-stone-500">Most weeknights & weekends</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="text-[12px] tracking-widest uppercase font-semibold text-emerald-600">About Eric</div>
            <h2 className="mt-3 font-display text-5xl lg:text-6xl tracking-tighter text-stone-900 leading-[0.9]">
              A psychologist who actually <span className="gradient-text">listens.</span>
            </h2>
            <p className="mt-6 text-stone-600 text-lg leading-relaxed max-w-xl">
              {content.about.intro.split("\n").find(Boolean)}
            </p>
            <Link
              to="/about"
              data-testid="home-about-cta"
              className="mt-8 inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-4 rounded-2xl font-semibold btn-press hover:bg-emerald-600"
            >
              Read my story <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
