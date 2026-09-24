'use client';

import React, { useState } from 'react';
import { AppItem, AppCategory } from '@/types';
import { AppModal } from './AppModal';
import {
  Sparkles,
  Camera,
  Activity,
  ShieldCheck,
  Headphones,
  Clock,
  Star,
  Download,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface AppShowcaseProps {
  apps: AppItem[];
}

const CATEGORIES: AppCategory[] = [
  'All',
  'Finance & Fintech',
  'House & Home',
  'Education & Campus',
  'Creative & Design',
  'Utilities & Tools',
];

export const AppShowcase: React.FC<AppShowcaseProps> = ({ apps }) => {
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('All');
  const [modalApp, setModalApp] = useState<AppItem | null>(null);

  const filteredApps =
    selectedCategory === 'All'
      ? apps
      : apps.filter((app) => app.category === selectedCategory);

  const renderIcon = (id: string, className = 'w-6 h-6') => {
    switch (id) {
      case 'lenden':
        return <ShieldCheck className={className} />;
      case 'ghorlagbee':
        return <Layers className={className} />;
      case 'classmates':
        return <Sparkles className={className} />;
      case 'frametastic':
        return <Camera className={className} />;
      case 'colorful-calculator':
        return <Clock className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="apps" className="relative py-24 bg-[#05070c] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mobile App Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Flagship Apps That Redefine{' '}
            <span className="text-gradient-cyan">Everyday Life.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
            Discover the proprietary applications built, optimized, and published by Algoel. 
            Over 52 million downloads, 340,000+ reviews, and multi-year App Store honors.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="relative rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.18)] transition-all duration-300 group hover:-translate-y-1.5"
            >
              {/* Top Card Gradient Glow */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-60 pointer-events-none"
                style={{
                  background: app.glowColor,
                }}
              />

              {/* Card Header & Content */}
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Top Row: App Icon & Downloads badge */}
                <div className="flex items-start justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl ${app.iconBg} group-hover:scale-105 transition-transform duration-300`}
                  >
                    {renderIcon(app.id, 'w-7 h-7')}
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-mono font-bold text-white bg-zinc-800/90 border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Download className="w-3 h-3 text-cyan-400" />
                      {app.downloads}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{app.rating}</span>
                      <span className="text-[10px] text-zinc-500 font-normal">
                        ({app.reviewsCount.split('+')[0]})
                      </span>
                    </div>
                  </div>
                </div>

                {/* App Name & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    {app.name}
                    {app.featured && (
                      <span className="text-[9px] uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono tracking-wider">
                        Featured
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">{app.tagline}</p>
                </div>

                {/* Award Badge Pill (if present) */}
                {app.awardBadge && (
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 font-medium flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 shrink-0 fill-amber-400 text-amber-400" />
                    <span className="truncate">{app.awardBadge}</span>
                  </div>
                )}

                {/* Summary */}
                <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                  {app.summary}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {app.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Platforms supported tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {app.platforms.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400 font-mono border border-white/5"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 border-t border-white/10 bg-zinc-950/50 flex items-center justify-between gap-3">
                <button
                  onClick={() => setModalApp(app)}
                  className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Product Specs</span>
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>

                <div className="flex items-center gap-1.5">
                  <a
                    href={app.appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-zinc-800/80 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
                    title="View on Apple App Store"
                    aria-label={`View ${app.name} on Apple App Store`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-400 transition-colors border border-cyan-500/20"
                    title="View on Google Play Store"
                    aria-label={`View ${app.name} on Google Play Store`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner for Indie Developers / Studios */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-zinc-900/90 via-slate-900/80 to-zinc-900/90 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Have a high-potential mobile app or prototype?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Algoel co-publishes standout apps with indie developers. We provide capital, native performance refactoring, ASO growth engines, and store editorial access.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs whitespace-nowrap shadow-lg hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all"
          >
            Submit App for Publishing →
          </a>
        </div>

      </div>

      {/* Interactive App Deep Dive Modal */}
      <AppModal app={modalApp} onClose={() => setModalApp(null)} />
    </section>
  );
};
