'use client';

import React, { useState } from 'react';
import { ALGOEL_SPOTLIGHTS } from '@/data/algoelContent';

export const InterviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? ALGOEL_SPOTLIGHTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === ALGOEL_SPOTLIGHTS.length - 1 ? 0 : prev + 1));
  };

  const current = ALGOEL_SPOTLIGHTS[activeIndex];

  return (
    <section
      id="interviews"
      data-nav-theme="dark"
      className="w-full bg-black py-20 sm:py-28 md:py-36 overflow-hidden text-white transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[#72E5FF] mb-3">
            VERIFIED USER IMPACT
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-[67px] font-normal tracking-[-0.03em] text-white">
            Spotlights & stories
          </h2>
        </div>

        {/* Spotlight Showcase Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Slide Card */}
          <div className="relative w-full aspect-video sm:aspect-[16/9] rounded-[24px] sm:rounded-[36px] md:rounded-[48px] overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] p-8 sm:p-12 md:p-16 flex flex-col justify-between">
            {/* Top Row: App & Rating Badge */}
            <div className="flex items-center justify-between z-10 flex-wrap gap-4">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono font-medium text-[#72E5FF]">
                {current.badge} • {current.app}
              </span>

              <span className="text-xs sm:text-sm font-mono text-zinc-400">
                {current.rating}
              </span>
            </div>

            {/* Center Quote / Story */}
            <div className="my-auto py-6 z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 tracking-tight">
                {current.title}
              </h3>
              <p className="text-base sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl">
                {current.description}
              </p>
            </div>

            {/* Bottom Row: Author & Action Link */}
            <div className="flex items-center justify-between border-t border-white/10 pt-6 z-10">
              <div>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {current.author}
                </p>
                <p className="text-xs text-zinc-400">
                  Verified User Experience
                </p>
              </div>

              <a
                href={current.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:border-white hover:bg-white hover:text-black px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-200"
              >
                <span>Read review</span>
                <span className="transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
            </div>
          </div>

          {/* Navigation Controls & Slide Thumbnails */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {ALGOEL_SPOTLIGHTS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-10 bg-[#72E5FF]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to spotlight ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev & Next Round Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 sm:h-14 sm:w-14 cursor-pointer items-center justify-center rounded-full border border-white/20 transition-all duration-200 hover:scale-95 hover:border-white hover:bg-white/5 active:scale-90"
                aria-label="Previous story"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="flex h-12 w-12 sm:h-14 sm:w-14 cursor-pointer items-center justify-center rounded-full border border-white/20 transition-all duration-200 hover:scale-95 hover:border-white hover:bg-white/5 active:scale-90"
                aria-label="Next story"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
