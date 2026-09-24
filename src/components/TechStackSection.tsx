'use client';

import React, { useState } from 'react';
import { TECH_STACK } from '@/data/techStack';
import {
  Layers,
  Smartphone,
  Cpu,
  Sparkles,
  Shield,
  Headphones,
  Globe,
  CheckCircle,
  Terminal,
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Native Mobile', 'AI & ML', 'Architecture', 'Analytics & Cloud'];

  const filteredItems =
    selectedFilter === 'All'
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.category === selectedFilter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-purple-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-rose-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-teal-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="stack" className="relative py-24 bg-[#05070c] border-t border-white/5 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineering Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Built for Bare Metal.{' '}
            <span className="text-gradient-cyan">Zero Compromises.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
            We avoid sluggish web-view wrappers. Our engineering pipeline uses native compilers, 
            GPU shader pipelines, and on-device neural acceleration for unmatched speed and battery efficiency.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedFilter === cat
                  ? 'bg-zinc-100 text-zinc-950 shadow-md font-bold'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-zinc-900/70 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/5">
                  {item.tag}
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                {item.name}
              </h4>
              <div className="text-[11px] font-mono text-zinc-500 mb-2">{item.category}</div>

              <p className="text-xs text-zinc-400 leading-normal">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Benchmark Callout Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-950 to-indigo-950/30 border border-cyan-500/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-black text-white font-mono">&lt; 180 ms</div>
            <div className="text-xs text-zinc-400 mt-0.5">Cold App Launch Time</div>
          </div>
          <div className="border-y sm:border-y-0 sm:border-x border-white/10 py-3 sm:py-0">
            <div className="text-2xl font-black text-cyan-400 font-mono">120 FPS</div>
            <div className="text-xs text-zinc-400 mt-0.5">ProMotion Scrolling Precision</div>
          </div>
          <div>
            <div className="text-2xl font-black text-emerald-400 font-mono">99.98%</div>
            <div className="text-xs text-zinc-400 mt-0.5">Crash-Free User Sessions</div>
          </div>
        </div>

      </div>
    </section>
  );
};
