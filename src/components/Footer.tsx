'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';
import { ALGOEL_PRODUCTS } from '@/data/algoelContent';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      data-nav-theme="dark"
      className="w-full bg-black px-6 pt-16 pb-12 text-white md:px-12 border-t border-white/5 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl">
        {/* 4 Columns Top Grid */}
        <div className="grid grid-cols-2 gap-10 md:gap-14 border-b border-white/10 pb-16 lg:grid-cols-4">
          {/* Column 1: Applications */}
          <div className="col-span-1 flex flex-col gap-2.5">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider opacity-40">
              Applications
            </p>
            {ALGOEL_PRODUCTS.map((app) => (
              <a
                key={app.id}
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-300 hover:text-white underline-offset-2 hover:underline flex items-center gap-1.5"
              >
                <span>{app.name}</span>
                <span className="text-[10px] text-zinc-500 font-mono">↗</span>
              </a>
            ))}
          </div>

          {/* Column 2: Connect */}
          <div className="col-span-1 flex flex-col gap-2.5">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider opacity-40">
              Connect
            </p>
            <a
              href={COMPANY_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-300 hover:text-white underline-offset-2 hover:underline"
            >
              GitHub Studio
            </a>
            <a
              href={COMPANY_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-300 hover:text-white underline-offset-2 hover:underline"
            >
              X (Twitter)
            </a>
            <a
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-300 hover:text-white underline-offset-2 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={COMPANY_INFO.socials.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-300 hover:text-white underline-offset-2 hover:underline"
            >
              Google Play Developer
            </a>
            <Link
              href="/contact"
              className="text-sm text-zinc-300 hover:text-white underline-offset-2 hover:underline"
            >
              Contact Studio Form
            </Link>
          </div>

          {/* Column 3: Inquiries */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-2.5">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider opacity-40">
              General Inquiries
            </p>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-sm text-zinc-300 hover:text-white underline-offset-2 hover:underline mb-4"
            >
              {COMPANY_INFO.email}
            </a>

            <p className="mb-2 font-mono text-xs uppercase tracking-wider opacity-40">
              Support & Partnerships
            </p>
            <a
              href={`mailto:${COMPANY_INFO.partnershipEmail}`}
              className="text-sm text-zinc-300 hover:text-white underline-offset-2 hover:underline"
            >
              {COMPANY_INFO.partnershipEmail}
            </a>
            <a
              href={`mailto:${COMPANY_INFO.supportEmail}`}
              className="text-sm text-zinc-300 hover:text-white underline-offset-2 hover:underline mt-1"
            >
              {COMPANY_INFO.supportEmail}
            </a>
          </div>

          {/* Column 4: Studio & Legal */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-2">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider opacity-40">
              Studio & Hub
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {COMPANY_INFO.headquarters}
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Founder: {COMPANY_INFO.developerName} • Est. {COMPANY_INFO.foundedYear}
            </p>

            <p className="mt-4 text-[11px] text-zinc-500 leading-normal">
              © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. Zero shady ad tracking. 100% user data ownership.
            </p>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-zinc-400">
              <Link href="/privacy/safeqr" className="hover:underline hover:text-white text-cyan-400">
                SafeQR Privacy
              </Link>
              <Link href="/privacy/news-app-flash" className="hover:underline hover:text-white">
                News App Flash Privacy
              </Link>
              <Link href="/contact" className="hover:underline hover:text-white">
                Support Desk
              </Link>
            </div>
          </div>
        </div>

        {/* Massive Full-Bleed Typographic Logotype & Signature Tagline */}
        <div className="pt-12 md:pt-20 overflow-hidden">
          {/* Giant Typographic Brandmark */}
          <div className="w-full select-none opacity-90 transition-opacity hover:opacity-100 flex items-center justify-center">
            <span className="text-[14vw] font-black tracking-[-0.06em] leading-none uppercase text-white scale-y-95">
              ALGOEL
            </span>
          </div>

          {/* Signature Closing Tagline */}
          <div className="mt-6 flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/5">
            <p className="text-2xl sm:text-3xl md:text-5xl font-normal tracking-tight text-white">
              Engineering High-Utility Mobile Experiences.{' '}
              <em className="font-serif italic text-[#72E5FF] font-normal">Always.</em>
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              EST. {COMPANY_INFO.foundedYear} • GLOBAL PUBLISHING
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
