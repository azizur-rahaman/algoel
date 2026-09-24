'use client';

import React, { useState } from 'react';
import { PUBLISHING_PILLARS, PUBLISHING_CAPABILITIES } from '@/data/publishing';
import {
  Sparkles,
  Cpu,
  TrendingUp,
  Shield,
  Layers,
  Languages,
  CheckCircle2,
  ArrowRight,
  Zap,
} from 'lucide-react';

export const PublishingEngine: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activePillar = PUBLISHING_PILLARS[activeStepIndex];

  return (
    <section id="publishing" className="relative py-24 bg-zinc-950/70 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Our Core Discipline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            The Algoel Publishing{' '}
            <span className="text-gradient-cyan">Engine.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            Making apps and publishing them on the App Store and Google Play is our lifeblood. 
            Here is the scientific four-stage flywheel we use to build, scale, and dominate mobile categories.
          </p>
        </div>

        {/* 4 Steps Interactive Tabs */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PUBLISHING_PILLARS.map((pillar, idx) => (
            <button
              key={pillar.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 relative border ${
                activeStepIndex === idx
                  ? 'bg-zinc-900/90 border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.2)] -translate-y-1'
                  : 'bg-zinc-900/30 border-white/5 hover:border-white/20 hover:bg-zinc-900/50 text-zinc-400'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-2xl font-black font-mono tracking-tight ${
                    activeStepIndex === idx ? 'text-cyan-400' : 'text-zinc-600'
                  }`}
                >
                  {pillar.step}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">
                  {pillar.tag}
                </span>
              </div>

              <h4
                className={`text-sm font-bold leading-snug line-clamp-2 ${
                  activeStepIndex === idx ? 'text-white' : 'text-zinc-300'
                }`}
              >
                {pillar.title}
              </h4>

              <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-normal">
                {pillar.summary}
              </p>

              {activeStepIndex === idx && (
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="mt-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-black border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Stage Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono text-xs font-bold">
                  Stage {activePillar.step}
                </span>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  {activePillar.tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {activePillar.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {activePillar.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activePillar.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Stage Metric Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-8 rounded-2xl bg-zinc-950/80 border border-cyan-500/30 text-center space-y-3 relative shadow-inner">
                <div className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider">
                  Key Performance Standard
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
                  {activePillar.metric}
                </div>
                <div className="text-xs text-zinc-300 font-medium">
                  {activePillar.metricLabel}
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] text-zinc-500">
                  Benchmarked across 52M+ App Store & Play Store user sessions
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Studio Capabilities Grid */}
        <div className="mt-14 pt-12 border-t border-white/5">
          <div className="text-center mb-8">
            <h4 className="text-lg font-bold text-white tracking-tight">
              Publishing & Distribution Capabilities
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              End-to-end infrastructure built for high-velocity global releases
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PUBLISHING_CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.title}
                className="p-5 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/15 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
                  {idx === 0 && <Sparkles className="w-5 h-5" />}
                  {idx === 1 && <Shield className="w-5 h-5 text-indigo-400" />}
                  {idx === 2 && <Languages className="w-5 h-5 text-emerald-400" />}
                  {idx === 3 && <Cpu className="w-5 h-5 text-amber-400" />}
                </div>
                <h5 className="text-sm font-bold text-white mb-1.5">{cap.title}</h5>
                <p className="text-xs text-zinc-400 leading-normal">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
