'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

interface NavbarProps {
  ctaText?: string;
  ctaLink?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  ctaText = 'Get in touch',
  ctaLink = '/contact',
}) => {
  const [theme, setTheme] = useState<'dark' | 'light' | 'green'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme]');
      let activeTheme: 'dark' | 'light' | 'green' = 'dark';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          const t = section.getAttribute('data-nav-theme');
          if (t === 'dark' || t === 'light' || t === 'green') {
            activeTheme = t;
          }
        }
      });

      setTheme(activeTheme);
    };

    const throttled = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          handleScroll();
        });
      }
    };

    handleScroll();
    window.addEventListener('scroll', throttled, { passive: true });
    window.addEventListener('resize', throttled);

    return () => {
      window.removeEventListener('scroll', throttled);
      window.removeEventListener('resize', throttled);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full items-center transition-all duration-300 backdrop-blur-xl ${
        isDark
          ? 'border-b border-white/5 bg-black/40 text-white'
          : isLight
          ? 'border-b border-black/5 bg-white/70 text-black'
          : 'border-b border-black/10 bg-[#72E5FF]/20 text-black'
      }`}
      data-theme={theme}
      suppressHydrationWarning
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:h-20 md:px-12">
        {/* Brand Logotype */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex items-center tracking-tight">
            <span
              className={`text-xl md:text-2xl font-black tracking-[-0.04em] uppercase transition-colors ${
                isDark ? 'text-white' : 'text-black'
              }`}
            >
              ALGOEL
            </span>
            <span
              className={`ml-1.5 inline-block h-1.5 w-1.5 rounded-full transition-colors ${
                isDark ? 'bg-[#72E5FF]' : 'bg-black'
              }`}
            />
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#products"
            className={`transition-colors hover:opacity-100 ${
              isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
            }`}
          >
            Products
          </a>
          <a
            href="#technologies"
            className={`transition-colors hover:opacity-100 ${
              isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
            }`}
          >
            Technologies
          </a>
          <a
            href="#interviews"
            className={`transition-colors hover:opacity-100 ${
              isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
            }`}
          >
            Spotlights
          </a>
          <a
            href="#workplaces"
            className={`transition-colors hover:opacity-100 ${
              isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
            }`}
          >
            Accolades
          </a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href={ctaLink}
            className={`cta-link inline-block rounded-full border px-4 py-2 text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out md:px-5 md:py-2.5 ${
              isDark
                ? 'border-white bg-white text-black hover:bg-black hover:text-white'
                : 'border-black bg-black text-white hover:bg-white hover:text-black'
            }`}
          >
            {ctaText}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${
              isDark ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/10'
            }`}
            aria-label="Toggle navigation"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full px-6 py-6 border-b transition-all ${
            isDark
              ? 'bg-black/95 border-white/10 text-white'
              : 'bg-white/95 border-black/10 text-black'
          }`}
        >
          <div className="flex flex-col gap-4 text-base font-medium">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1"
            >
              Products
            </a>
            <a
              href="#technologies"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1"
            >
              Technologies
            </a>
            <a
              href="#interviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1"
            >
              Spotlights & Stories
            </a>
            <a
              href="#workplaces"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1"
            >
              Accolades & Ratings
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#72E5FF]"
            >
              Contact Studio Form
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
