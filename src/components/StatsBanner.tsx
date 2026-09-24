import React from 'react';
import { COMPANY_STATS } from '@/data/company';
import { Download, Star, Globe, Award, CheckCircle, Shield, Zap } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  return (
    <section id="stats" className="relative py-16 bg-zinc-950/60 border-y border-white/[0.07] overflow-hidden">
      {/* Background ambient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="relative p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Download className="w-5 h-5" />}
                  {idx === 1 && <Star className="w-5 h-5 text-amber-400" />}
                  {idx === 2 && <Globe className="w-5 h-5 text-emerald-400" />}
                  {idx === 3 && <Award className="w-5 h-5 text-purple-400" />}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 group-hover:text-cyan-400 transition-colors">
                  Metric 0{idx + 1}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-1">
                {stat.value}
                {stat.suffix && <span className="text-amber-400 text-2xl">{stat.suffix}</span>}
              </div>

              <div className="text-sm font-semibold text-zinc-200 mt-1">{stat.label}</div>
              <p className="text-xs text-zinc-400 mt-0.5 leading-normal">{stat.subtext}</p>

              {/* Card Corner Subtle Accent */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Studio Credibility Strip */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-between gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-300 font-medium">99.98% Crash-Free Rate</span>
            <span className="text-zinc-500">across 50M+ active sessions</span>
          </div>

          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-zinc-300 font-medium">Zero Shady Telemetry</span>
            <span className="text-zinc-500">Strict on-device processing</span>
          </div>

          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-zinc-300 font-medium">Instant Cold Starts</span>
            <span className="text-zinc-500">&lt;180ms startup latency</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-zinc-300 font-medium">Apple & Google Verified</span>
            <span className="text-zinc-500">Tier 1 Studio Partner</span>
          </div>
        </div>

      </div>
    </section>
  );
};
