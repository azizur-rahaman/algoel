'use client';

import React from 'react';
import { ALGOEL_TECHNOLOGIES } from '@/data/algoelContent';

export const TechnologiesSection: React.FC = () => {
  return (
    <section
      id="technologies"
      data-nav-theme="dark"
      className="w-full bg-[#0c0c0e] py-20 sm:py-28 md:py-36 text-white transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[#72E5FF] mb-3">
            ARCHITECTURAL LAB
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-[67px] font-normal tracking-[-0.03em] text-white">
            Proprietary technologies
          </h2>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ALGOEL_TECHNOLOGIES.map((tech) => (
            <div
              key={tech.id}
              className="group relative aspect-[1.03] w-full self-stretch overflow-hidden rounded-[36px] md:rounded-[40px] bg-black border border-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-white/30 hover:shadow-[0_40px_100px_-30px_rgba(114,229,255,0.15)] flex flex-col justify-between p-7 sm:p-9"
            >
              {/* Subtle Ambient Radial Backlight */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-15 pointer-events-none transition-opacity group-hover:opacity-30"
                style={{ backgroundColor: tech.accentColor }}
              />

              {/* Top Text Content */}
              <div className="relative z-10 flex flex-col items-start text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4">
                  {tech.tag}
                </span>

                <h3 className="mb-2.5 font-serif text-3xl sm:text-4xl md:text-[40px] font-normal text-white tracking-tight leading-tight">
                  {tech.name}
                </h3>

                <p className="text-sm font-light text-white/60 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              {/* Geometric Graphic Waveform / Radar */}
              <div className="relative z-10 w-full pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: tech.accentColor }}
                  />
                  <span className="text-xs font-mono text-zinc-400">
                    {tech.metric}
                  </span>
                </div>

                <span className="text-sm font-mono text-zinc-500 group-hover:text-white transition-colors">
                  0{ALGOEL_TECHNOLOGIES.indexOf(tech) + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 flex items-center justify-center gap-8 md:mt-30">
          <span className="h-0.5 w-14 rounded-full bg-gradient-to-r from-transparent to-white/20" />
          <p className="text-xl md:text-2xl font-medium text-white/60 tracking-tight">
            And many more in active R&D
          </p>
          <span className="h-0.5 w-14 rounded-full bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </section>
  );
};
