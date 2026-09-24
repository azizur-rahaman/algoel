'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/company';
import { APPS_DATA } from '@/data/apps';
import { Sparkles, ArrowRight, Check, Heart, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-white/10 pt-16 pb-12 overflow-hidden text-zinc-400">
      {/* Background line accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Studio Radar */}
        <div className="pb-12 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Algoel Release Radar</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Get notified when we drop new apps & major releases.
            </h3>
            <p className="text-xs text-zinc-400 max-w-md">
              Zero spam. Only significant milestone launches, beta TestFlight invitations, and research breakthroughs.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400" />
                <span>You&apos;re subscribed to the Algoel Radar! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md ml-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-cyan-400 flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#070a12] rounded-[7px] flex items-center justify-center">
                  <span className="text-cyan-400 font-mono font-bold text-xs">▲</span>
                </div>
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                ALGOEL
              </span>
            </Link>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Algoel is a premier software company and digital publisher dedicated to building, optimizing, and releasing world-class mobile experiences across the Apple App Store and Google Play Store.
            </p>

            <div className="text-[11px] font-mono text-zinc-500 space-y-1">
              <div>Global Headquarters: San Francisco • London • Tokyo</div>
              <div>Entity: {COMPANY_INFO.legalName}</div>
            </div>
          </div>

          {/* Column 1: Apps */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Published Apps
            </div>
            <ul className="space-y-2 text-xs">
              {APPS_DATA.map((app) => (
                <li key={app.id}>
                  <a
                    href="#apps"
                    className="hover:text-cyan-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{app.name}</span>
                    <span className="text-[10px] text-zinc-600 group-hover:text-cyan-400 font-mono">
                      {app.rating}★
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Publishing & Engineering */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Studio & Engine
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#publishing" className="hover:text-cyan-400 transition-colors">
                  Publishing Engine
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-cyan-400 transition-colors">
                  Bare-Metal Architecture
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-cyan-400 transition-colors">
                  Wall of Love
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Studio Ethos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Submit App for Publishing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Standards */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Legal & Privacy
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Privacy Manifest & Security
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Terms of Service & EULA
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Apple App Store Compliance
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Google Play Policy Standards
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Responsible AI Principles
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Trademarks */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </div>

          <div className="text-center md:text-right max-w-xl text-[10px] leading-relaxed">
            Apple, the Apple logo, iPhone, iPad, Mac, and Apple Watch are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.
          </div>
        </div>

      </div>
    </footer>
  );
};
