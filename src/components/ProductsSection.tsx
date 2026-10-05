'use client';

import React, { useState } from 'react';
import { ALGOEL_PRODUCTS } from '@/data/algoelContent';

export const ProductsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Fintech' | 'Campus' | 'Tools'>('All');

  const filteredProducts = ALGOEL_PRODUCTS.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Fintech') return p.category.includes('Fintech') || p.category.includes('House');
    if (filter === 'Campus') return p.category.includes('Campus') || p.category.includes('News');
    if (filter === 'Tools') return p.category.includes('Creative') || p.category.includes('Utilities');
    return true;
  });

  return (
    <section
      id="products"
      data-nav-theme="light"
      className="w-full bg-white text-black py-20 sm:py-28 md:py-36 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-[67px] font-normal tracking-[-0.03em] text-black mb-6">
            Products
          </h2>

          {/* Filter Pills */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-black/5 p-1.5 border border-black/5 flex-wrap justify-center">
            <button
              onClick={() => setFilter('All')}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === 'All'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-black/70 hover:text-black'
              }`}
            >
              All Apps ({ALGOEL_PRODUCTS.length})
            </button>
            <button
              onClick={() => setFilter('Fintech')}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === 'Fintech'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-black/70 hover:text-black'
              }`}
            >
              Fintech & Rentals
            </button>
            <button
              onClick={() => setFilter('Campus')}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === 'Campus'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-black/70 hover:text-black'
              }`}
            >
              Campus & News
            </button>
            <button
              onClick={() => setFilter('Tools')}
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === 'Tools'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-black/70 hover:text-black'
              }`}
            >
              Creative & Tools
            </button>
          </div>
        </div>

        {/* 2-Column Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {filteredProducts.map((app) => {
            const isInverted = app.invertColor;

            return (
              <div
                key={app.id}
                className={`relative flex flex-col justify-between overflow-hidden rounded-[36px] md:rounded-[48px] p-7 sm:p-9 md:p-12 pb-0 md:pb-0 transition-transform duration-300 hover:scale-[1.01] shadow-[0_15px_40px_rgba(0,0,0,0.04)] ${
                  isInverted ? 'text-white' : 'text-black'
                }`}
                style={{ backgroundColor: app.bgColor }}
              >
                <div>
                  {/* Top Row: Brand & Action Link */}
                  <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black">
                        {app.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-black/60 mt-0.5">
                        {app.category}
                      </p>
                    </div>

                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1.5 rounded-full border border-black/10 bg-black/5 hover:border-black/60 hover:bg-black/10 px-3.5 py-2 text-xs md:text-sm font-semibold text-black transition-all duration-200"
                    >
                      <span>Google Play</span>
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  </div>

                  {/* Bullet Points with Vertical Line */}
                  <ul className="relative space-y-2.5 before:absolute before:top-4 before:left-2 before:h-[85%] before:w-[1.5px] before:bg-gradient-to-b before:from-black/15 before:to-transparent">
                    {app.bulletPoints.map((text, idx) => (
                      <li
                        key={idx}
                        className={`relative pl-7 text-sm md:text-15 leading-relaxed ${
                          idx === 0
                            ? 'font-semibold text-black flex items-center gap-2'
                            : 'font-medium text-black/70'
                        }`}
                      >
                        {idx === 0 ? (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0 -ml-7 mr-2"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        ) : (
                          <span className="absolute top-2 left-1.5 h-1.5 w-1.5 rounded-full border border-black bg-black/70" />
                        )}
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Embedded App Screen Preview Card */}
                <div className="relative mt-8 md:mt-12 w-full">
                  <div className="w-full rounded-t-[28px] bg-black p-5 sm:p-7 text-white shadow-2xl border-t border-x border-white/10">
                    {/* Screen Status Bar */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-xs font-mono font-medium text-[#72E5FF]">
                        {app.mockupData.badge}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {app.rating}
                      </span>
                    </div>

                    {/* Main UI Data */}
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-zinc-400 font-medium">
                          {app.mockupData.headline}
                        </p>
                        <p className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                          {app.mockupData.stat}
                        </p>
                        <p className="text-[11px] text-[#72E5FF] font-mono mt-0.5">
                          {app.mockupData.statLabel}
                        </p>
                      </div>

                      {/* Micro List items */}
                      <div className="pt-2 border-t border-white/10 space-y-1.5">
                        {app.mockupData.details.map((detail, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-center gap-2 text-xs text-zinc-300 font-light"
                          >
                            <span className="h-1 w-1 rounded-full bg-[#72E5FF]" />
                            <span className="truncate">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom "And many more" Divider */}
        <div className="mt-20 md:mt-32 flex items-center justify-center gap-6">
          <span className="h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent to-black/20" />
          <p className="text-xl md:text-2xl font-medium text-black/60 tracking-tight">
            And many more in development
          </p>
          <span className="h-0.5 w-16 rounded-full bg-gradient-to-l from-transparent to-black/20" />
        </div>
      </div>
    </section>
  );
};
