import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] grid place-items-center px-6" data-testid="page-not-found">
      <div className="text-center">
        <div className="font-display text-[160px] leading-none tracking-tighter gradient-text">404</div>
        <h1 className="mt-2 font-display text-4xl tracking-tighter text-stone-900">Page not found</h1>
        <p className="mt-3 text-stone-600">The page you're looking for doesn't exist or has moved.</p>
        <Link
          to="/"
          data-testid="notfound-home-link"
          className="mt-6 inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-3 rounded-full font-semibold btn-press hover:bg-emerald-600"
        >
          Back to home <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
