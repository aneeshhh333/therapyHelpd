import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Sparkles, Heart } from "lucide-react";
import content from "@/data/content.json";
import Reveal from "@/components/Reveal";

export default function Services() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");

  const allDisorders = useMemo(
    () => content.disorders.flatMap((c) => c.items.map((i) => ({ ...i, _cat: c }))),
    []
  );

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    const baseCats = activeCat === "all"
      ? content.disorders
      : content.disorders.filter((c) => c.slug === activeCat);

    if (!q) return baseCats;
    return baseCats
      .map((c) => ({ ...c, items: c.items.filter((i) => i.title.toLowerCase().includes(q) || i.intro.toLowerCase().includes(q)) }))
      .filter((c) => c.items.length > 0);
  }, [query, activeCat]);

  return (
    <div data-testid="page-services">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[460px] h-[460px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12 lg:pt-28">
          <Reveal>
            <div className="text-[12px] tracking-widest uppercase font-semibold text-emerald-600">Services</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-6xl sm:text-7xl lg:text-[112px] leading-[0.88] tracking-tighter text-stone-900">
              What I help <span className="gradient-text">with.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-stone-600 text-lg">
              Therapy for individuals, couples, families and children — plus specialized
              support for a broad range of mental health concerns.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THERAPY TYPES BENTO */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-display text-4xl lg:text-5xl tracking-tighter text-stone-900">Therapy formats</h2>
              <div className="hidden md:flex items-center gap-2 text-stone-500 text-[13px]">
                <Sparkles size={14} className="text-orange-500" /> Choose the format that suits you
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.therapy.map((t, i) => {
              const bg = i % 2 === 0 ? "bg-emerald-50" : "bg-orange-50";
              return (
                <Reveal key={t.slug} delay={i * 80}>
                  <Link
                    to={`/services/therapy/${t.slug}`}
                    data-testid={`therapy-card-${t.slug}`}
                    className="group block bg-white rounded-[40px] p-6 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`relative aspect-square rounded-[32px] ${bg} overflow-hidden`}>
                      {t.image ? (
                        <img src={t.image} alt={t.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      ) : <div className="w-full h-full grid place-items-center"><Heart size={56} className="text-stone-300" /></div>}
                    </div>
                    <div className="pt-6 px-2 flex items-end justify-between">
                      <div>
                        <div className="text-[12px] tracking-widest uppercase font-semibold text-stone-500">Therapy</div>
                        <div className="mt-1 font-display text-3xl tracking-tighter text-stone-900">{t.label}</div>
                      </div>
                      <span className="grid place-items-center w-10 h-10 rounded-full bg-stone-900 text-white group-hover:bg-emerald-600 transition-colors">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DISORDERS LIBRARY */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <div className="text-[12px] tracking-widest uppercase font-semibold text-orange-600">Conditions I work with</div>
                <h2 className="mt-3 font-display text-4xl lg:text-6xl tracking-tighter text-stone-900 leading-[0.9]">
                  A library of <span className="gradient-text">support.</span>
                </h2>
              </div>
              <div className="relative w-full md:w-80">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search conditions"
                  data-testid="services-search"
                  className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-stone-200 text-[14px] focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </Reveal>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10" data-testid="services-category-filters">
            <button
              onClick={() => setActiveCat("all")}
              data-testid="cat-filter-all"
              className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-colors ${
                activeCat === "all"
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-700 border-stone-200 hover:border-stone-900"
              }`}
            >
              All ({allDisorders.length})
            </button>
            {content.disorders.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveCat(c.slug)}
                data-testid={`cat-filter-${c.slug}`}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-colors ${
                  activeCat === c.slug
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-stone-700 border-stone-200 hover:border-emerald-600 hover:text-emerald-600"
                }`}
              >
                {c.label} ({c.items.length})
              </button>
            ))}
          </div>

          <div className="space-y-16">
            {filteredCategories.map((c) => (
              <div key={c.slug} data-testid={`cat-section-${c.slug}`}>
                <div className="flex items-end justify-between mb-6">
                  <h3 className="font-display text-3xl lg:text-4xl tracking-tighter text-stone-900">{c.label}</h3>
                  <div className="text-stone-500 text-[13px]">{c.items.length} conditions</div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {c.items.map((item, i) => (
                    <Reveal key={item.slug} delay={(i % 6) * 60}>
                      <Link
                        to={`/services/${c.slug}/${item.slug}`}
                        data-testid={`disorder-card-${item.slug}`}
                        className="group block bg-white rounded-3xl overflow-hidden shadow-lg shadow-stone-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-stone-100"
                      >
                        <div className="aspect-[16/10] bg-stone-100 overflow-hidden">
                          {item.image ? (
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          ) : <div className="w-full h-full grid place-items-center text-stone-400">No image</div>}
                        </div>
                        <div className="p-6">
                          <div className="text-[11px] tracking-widest uppercase font-semibold text-emerald-600">{c.label}</div>
                          <div className="mt-2 font-display text-xl tracking-tight text-stone-900 leading-tight">{item.title}</div>
                          <div className="mt-3 text-[13px] text-stone-600 line-clamp-3">{item.intro}</div>
                          <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-stone-900 group-hover:text-emerald-600">
                            Learn more <ArrowRight size={14} />
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
            {filteredCategories.length === 0 && (
              <div className="text-center py-20 text-stone-500" data-testid="services-empty">
                No matching conditions found. Try a different search term.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
