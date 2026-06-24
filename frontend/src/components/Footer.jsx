import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Instagram, Linkedin, Facebook, Twitter, Mail } from "lucide-react";
import content from "@/data/content.json";

export default function Footer() {
  const socials = [
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: Linkedin, label: "LinkedIn", href: "#" },
    { Icon: Facebook, label: "Facebook", href: "#" },
    { Icon: Twitter, label: "Twitter", href: "#" },
  ];

  const therapyLinks = content.therapy.slice(0, 5).map((t) => ({
    label: `${t.label} Therapy`,
    to: `/services`,
  }));

  return (
    <footer className="bg-white border-t border-stone-200" data-testid="site-footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-600 text-white">
                <Leaf size={20} strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl tracking-tighter text-stone-900">therapyhelp</span>
            </Link>
            <p className="text-stone-600 text-[15px] leading-relaxed max-w-sm">
              Compassionate, evidence-based therapy with {content.therapist.name},
              {" "}{content.therapist.title}. A safe space for individuals, couples,
              families, and children to grow.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className="grid place-items-center w-10 h-10 rounded-full border border-stone-200 text-stone-600 transition-colors duration-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display text-sm uppercase tracking-widest text-stone-500 mb-4">Services</div>
            <ul className="space-y-3">
              {therapyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-stone-700 hover:text-emerald-600 text-[14px]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-sm uppercase tracking-widest text-stone-500 mb-4">Resources</div>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-stone-700 hover:text-emerald-600 text-[14px]">About</Link></li>
              <li><Link to="/testimonials" className="text-stone-700 hover:text-emerald-600 text-[14px]">Testimonials</Link></li>
              <li><Link to="/faq" className="text-stone-700 hover:text-emerald-600 text-[14px]">FAQ</Link></li>
              <li><Link to="/services" className="text-stone-700 hover:text-emerald-600 text-[14px]">Full Services List</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-display text-sm uppercase tracking-widest text-stone-500 mb-4">Get in Touch</div>
            <p className="text-stone-600 text-[15px] mb-3">
              Sessions are available both in-person and via secure video. Reach out — the first step is the hardest, and we're here for it.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 font-display text-xl text-stone-900 hover:text-emerald-600 transition-colors">
              <Mail size={18} /> Send a confidential note
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="text-[13px] text-stone-500">
            © {new Date().getFullYear()} Therapyhelp · Eric Rodrigues, Licensed Clinical Psychologist. All rights reserved.
          </div>
          <div className="text-[13px] text-stone-500">
            Confidential · HIPAA-aware · Non-judgmental
          </div>
        </div>
      </div>
    </footer>
  );
}
