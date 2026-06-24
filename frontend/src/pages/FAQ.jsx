import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import content from "@/data/content.json";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div data-testid="page-faq">
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[420px] h-[420px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-12 lg:pt-28">
          <Reveal>
            <div className="text-[12px] tracking-widest uppercase font-semibold text-orange-600">FAQ</div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-display text-6xl sm:text-7xl lg:text-[112px] leading-[0.88] tracking-tighter text-stone-900">
              Good questions, <br/><span className="gradient-text">answered honestly.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="space-y-3" data-testid="faq-list">
            {content.faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  data-testid={`faq-item-${i}`}
                  className={`bg-white border rounded-3xl transition-all duration-300 ${isOpen ? "border-emerald-600 shadow-xl shadow-stone-200/40" : "border-stone-200"}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    data-testid={`faq-toggle-${i}`}
                    className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="font-display text-xl sm:text-2xl tracking-tight text-stone-900 leading-tight">
                      {item.question}
                    </span>
                    <span className={`grid place-items-center w-10 h-10 rounded-full ${isOpen ? "bg-emerald-600 text-white" : "bg-stone-100 text-stone-700"} transition-all duration-300`}>
                      <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-stone-700 text-[16px] leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-[32px] p-8 lg:p-12 bg-stone-900 grain text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-[12px] tracking-widest uppercase font-semibold text-emerald-400">Still curious?</div>
              <div className="mt-2 font-display text-3xl lg:text-4xl tracking-tighter leading-[0.95]">
                Send me your question directly.
              </div>
            </div>
            <Link
              to="/contact"
              data-testid="faq-cta-contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-6 py-4 rounded-2xl font-semibold btn-press hover:bg-emerald-500 hover:text-white"
            >
              Contact me <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
