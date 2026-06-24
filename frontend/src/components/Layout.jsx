import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-body" data-testid="layout-root">
      <Header />
      <main data-testid="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
