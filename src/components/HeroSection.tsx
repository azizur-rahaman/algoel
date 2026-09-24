'use client';

import React from 'react';
import { AppItem } from '@/types';
import { PhoneMockup } from './PhoneMockup';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  Layers,
  ChevronDown,
} from 'lucide-react';

interface HeroSectionProps {
  apps: AppItem[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ apps }) => {
  return (
    <section className="relative min-h-[95vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background Ambient Glows & Dot Grid */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute inset-0 mesh-grid opacity-30 pointer-events-none" />
      
      {/* Top Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Value Prop */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Live Studio Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="font-semibold tracking-wide">
                ALGOEL STUDIO & MOBILE PUBLISHING LAB
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              We Craft & Publish{' '}
              <span className="text-gradient-cyan">
                Category-Defining
              </span>{' '}
              Mobile Apps.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              At Algoel, we combine <span className="text-white font-medium">algorithmic precision</span> with{' '}
              <span className="text-white font-medium">obsessive native craft</span>. We design, build, and publish high-performance iOS and Android applications enjoyed by over <span className="text-cyan-300 font-semibold">52 million users worldwide</span>.
            </p>

            {/* CTAs & Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#apps"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Explore App Portfolio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#publishing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 hover:border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <span>How We Publish</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Official Store Badges / Highlights */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                {/* Apple Store Icon */}
                <svg className="w-4 h-4 text-white" viewBox="0 0 170 170" fill="currentColor">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-5.78-8.8-10.37-18.78-13.78-29.93-3.41-11.16-5.12-22.18-5.12-33.07 0-14.12 3.63-25.9 10.88-35.34 7.25-9.44 16.27-14.28 27.05-14.53 4.89 0 10.45 1.45 16.68 4.35 6.23 2.9 10.05 4.35 11.46 4.35 1.2 0 5.14-1.52 11.83-4.57 6.69-3.04 12.39-4.35 17.1-3.92 13.06.87 23.33 5.76 30.82 14.67-11.54 7.06-17.18 16.73-16.92 29.02.22 9.78 4 17.82 11.35 24.12 7.35 6.3 16.03 10.05 26.04 11.25-2.29 6.84-5.19 14.12-8.71 21.84zM119.22 33.15c0-6.95 2.5-13.58 7.5-19.89 5-6.3 11.25-10.43 18.75-12.39 1.09 7.06-.98 13.69-6.2 19.89-5.21 6.19-11.85 10.32-19.92 12.39-.08 0-.13 0-.13 0z"/>
                </svg>
                <span>Available on <strong className="text-white">App Store</strong></span>
              </div>

              <div className="flex items-center gap-2">
                {/* Google Play Icon */}
                <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.21 2.21 0 0 1-.61-.926V2.74c.15-.35.362-.67.61-.926zm11.246 11.248l2.298 2.298-11.777 6.78 9.479-9.078zm0-2.124L5.376 1.86l11.777 6.78-2.298 2.298zm1.06 1.06l4.248 2.45c1.118.646 1.118 1.704 0 2.35l-4.248 2.45-2.115-2.115 2.115-5.135z" />
                </svg>
                <span>Available on <strong className="text-white">Google Play</strong></span>
              </div>

              <div className="flex items-center gap-1.5 text-amber-400">
                <span className="font-bold">4.88 ★</span>
                <span className="text-zinc-400">Avg across 340k+ reviews</span>
              </div>
            </div>

            {/* Quick Feature Badges Grid */}
            <div className="pt-2 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold mb-0.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>120Hz Native</span>
                </div>
                <p className="text-[11px] text-zinc-400">Swift & Kotlin bare metal</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-semibold mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Edge Privacy</span>
                </div>
                <p className="text-[11px] text-zinc-400">On-device neural models</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold mb-0.5">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>175+ Countries</span>
                </div>
                <p className="text-[11px] text-zinc-400">Global localized scale</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <PhoneMockup apps={apps} initialAppId="omniflow-ai" />
            </div>
          </div>

        </div>
      </div>

      {/* Smooth scroll down indicator */}
      <div className="mt-12 flex justify-center">
        <a
          href="#stats"
          className="flex flex-col items-center gap-1.5 text-xs text-zinc-500 hover:text-cyan-400 transition-colors"
          aria-label="Scroll to stats"
        >
          <span className="font-mono text-[10px] uppercase tracking-wider">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
