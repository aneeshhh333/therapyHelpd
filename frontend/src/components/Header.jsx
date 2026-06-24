import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-stone-200/60" : "bg-white border-b border-stone-200/60"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" data-testid="header-logo" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 transition-transform duration-300 group-hover:scale-105">
            <Leaf size={20} strokeWidth={2.5} />
          </span>
          <span className="font-display text-2xl tracking-tighter text-stone-900">therapyhelp</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" data-testid="header-nav-desktop">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              data-testid={`nav-link-${item.label.toLowerCase()}`}
              className={({ isActive }) =>
                `text-[14px] font-medium transition-colors duration-300 ${
                  isActive ? "text-emerald-600" : "text-stone-600 hover:text-emerald-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="header-cta-book"
            className="hidden sm:inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full text-[14px] font-semibold btn-press hover:bg-emerald-600"
          >
            Book a Session
          </Link>
          <button
            onClick={() => setOpen(!open)}
            data-testid="header-menu-toggle"
            className="lg:hidden grid place-items-center w-10 h-10 rounded-xl border border-stone-200 text-stone-700"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-stone-200 bg-white" data-testid="header-nav-mobile">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                data-testid={`nav-link-mobile-${item.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-xl text-[15px] font-medium ${
                    isActive ? "bg-emerald-50 text-emerald-700" : "text-stone-700 hover:bg-stone-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              data-testid="header-cta-mobile"
              className="mt-2 inline-flex justify-center items-center bg-stone-900 text-white px-5 py-3 rounded-full text-[14px] font-semibold"
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
