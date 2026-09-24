'use client';

import React from 'react';
import { CORE_VALUES, COMPANY_INFO } from '@/data/company';
import { Sparkles, Compass, Shield, Zap, Globe, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#05070c] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Algoel Ethos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Algorithms In Harmony With{' '}
            <span className="text-gradient-cyan">Human Craft.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            We started Algoel with a clear conviction: the world doesn&apos;t need another bloated, ad-cluttered mobile utility. 
            Smartphones deserve software engineered with the same level of architectural elegance as the aerospace hardware in your pocket.
          </p>
        </div>

        {/* Studio Philosophy 2-Column Showcase */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Manifest & Principles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-md space-y-4">
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                Our Foundation
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Why we are called Algoel
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                <strong>Algoel</strong> is the synthesis of two fundamental forces: 
                <span className="text-cyan-300 font-mono"> Algo</span> (the uncompromising power of algorithms, mathematics, and edge computing) and 
                <span className="text-blue-300 font-mono"> El</span> (the elemental spark of human aesthetic craft and intuition).
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                We believe software is poetry written for silicon. By keeping our core engineering teams hyper-focused, small, and autonomous, we ship category-defining experiences at speeds traditional corporations cannot match.
              </p>
            </div>

            {/* Global Studio Hubs */}
            <div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase text-zinc-400">Global Hubs</div>
                <div className="text-sm font-bold text-white mt-0.5">San Francisco • London • Tokyo</div>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                <Globe className="w-4 h-4" />
                <span>Distributed Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right: Core Values Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-2">
                  {val.badge}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {val.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
