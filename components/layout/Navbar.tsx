"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ArrowLeft, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    function onScroll() {
      setScrolled(window.scrollY > 50);

      const scrollY = window.scrollY + 120;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/80 border-[var(--border)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-code text-[#33ff66] text-sm sm:text-base font-medium hover:opacity-80 transition-opacity"
        >
          {"<"}Sadat{"/>"}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {isHome ? (
            <>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-2 text-sm rounded-lg transition-colors relative ${
                      isActive
                        ? "text-[#33ff66]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[#33ff66]/5"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-x-1 -bottom-[1px] h-[2px] bg-[#33ff66] rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </>
          ) : (
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-lg hover:bg-[#33ff66]/5"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          )}

          {/* CTA */}
          {isHome && (
            <Link
              href="/chat"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                         bg-[#33ff66]/10 border border-[#33ff66]/25 text-[#33ff66]
                         hover:bg-[#33ff66]/15 hover:border-[#33ff66]/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Ask My AI
            </Link>
          )}
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {isHome && (
            <Link
              href="/chat"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                         bg-[#33ff66]/10 border border-[#33ff66]/25 text-[#33ff66]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Ask AI
            </Link>
          )}
          {!isHome && (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                         text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Portfolio
            </Link>
          )}
          {isHome && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && isHome && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                      isActive
                        ? "text-[#33ff66] bg-[#33ff66]/5"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[#33ff66]/5"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
