import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Quote } from "lucide-react";
import content from "@/data/content.json";
import Reveal from "@/components/Reveal";

function findService(categorySlug, itemSlug) {
  if (categorySlug === "therapy") {
    const t = content.therapy.find((x) => x.slug === itemSlug);
    if (t) return { type: "therapy", item: t, category: { slug: "therapy", label: "Therapy" } };
  }
  const cat = content.disorders.find((c) => c.slug === categorySlug);
  if (cat) {
    const it = cat.items.find((x) => x.slug === itemSlug);
    if (it) return { type: "disorder", item: it, category: cat };
  }
  return null;
}

export default function ServiceDetail() {
  const { categorySlug, itemSlug } = useParams();
  const found = useMemo(() => findService(categorySlug, itemSlug), [categorySlug, itemSlug]);

  if (!found) {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32 text-center" data-testid="service-not-found">
        <h1 className="font-display text-5xl tracking-tighter">Service not found</h1>
        <p className="mt-4 text-stone-600">The page you're looking for doesn't exist.</p>
        <Link to="/services" className="mt-6 inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-3 rounded-full">
          Back to services <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  const { item, category, type } = found;

  // Related items
  const related =
    type === "therapy"
      ? content.therapy.filter((t) => t.slug !== item.slug).slice(0, 3)
      : category.items.filter((i) => i.slug !== item.slug).slice(0, 3);

  return (
    <div data-testid="page-service-detail">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[420px] h-[420px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-20 pb-12">
          <Link to="/services" data-testid="service-back-link" className="inline-flex items-center gap-2 text-stone-600 hover:text-emerald-600 text-[14px]">
            <ArrowLeft size={14} /> All services
          </Link>
          <Reveal>
            <div className="mt-6 text-[12px] tracking-widest uppercase font-semibold text-emerald-600">
              {type === "therapy" ? "Therapy" : category.label}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl lg:text-[88px] leading-[0.9] tracking-tighter text-stone-900">
              {item.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-10">
            {item.intro && (
              <Reveal>
                <p className="text-stone-700 text-lg leading-relaxed whitespace-pre-line">{item.intro}</p>
              </Reveal>
            )}
            {item.sections.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div>
                  <h2 className="font-display text-3xl lg:text-4xl tracking-tighter text-stone-900 leading-tight">{s.heading}</h2>
                  <div className="mt-4 text-stone-700 text-[16px] leading-relaxed whitespace-pre-line">{s.body}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <aside className="lg:col-span-2 space-y-6">
            {item.image && (
              <Reveal>
                <div className="rounded-[32px] overflow-hidden aspect-[4/5] shadow-xl shadow-stone-200/50">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </Reveal>
            )}

            <Reveal delay={100}>
              <div className="bg-stone-900 grain text-white rounded-[32px] p-7" data-testid="service-cta-card">
                <Quote className="text-orange-400" size={22} />
                <div className="mt-3 font-display text-2xl tracking-tighter leading-tight">
                  Ready to talk it through?
                </div>
                <p className="mt-2 text-stone-400 text-[14px]">
                  Confidential, judgment-free. We'll find the right next step together.
                </p>
                <Link to="/contact" data-testid="service-cta-button" className="mt-5 inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-5 py-3 rounded-2xl font-semibold w-full btn-press hover:bg-emerald-500 hover:text-white">
                  Book a session <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 border-t border-stone-200/60 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex items-end justify-between mb-8">
              <h3 className="font-display text-3xl lg:text-4xl tracking-tighter text-stone-900">
                {type === "therapy" ? "Other therapy formats" : `More in ${category.label}`}
              </h3>
              <Link to="/services" className="text-[13px] font-semibold text-stone-900 hover:text-emerald-600 inline-flex items-center gap-1">
                See all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/services/${type === "therapy" ? "therapy" : category.slug}/${r.slug}`}
                  data-testid={`related-${r.slug}`}
                  className="group block bg-stone-50 rounded-3xl overflow-hidden border border-stone-200 hover:border-emerald-600 transition-colors"
                >
                  <div className="aspect-[16/10] bg-stone-100 overflow-hidden">
                    {r.image ? <img src={r.image} alt={r.title || r.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> : null}
                  </div>
                  <div className="p-5">
                    <div className="font-display text-xl tracking-tight text-stone-900">{r.title || r.label}</div>
                    <div className="mt-1 text-[13px] text-stone-600 line-clamp-2">{r.intro}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
