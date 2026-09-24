'use client';

import React, { useState } from 'react';
import { AppItem } from '@/types';
import {
  Sparkles,
  Camera,
  Activity,
  Battery,
  Wifi,
  Signal,
  CheckCircle2,
  ChevronRight,
  Shield,
  Layers,
  Flame,
  Clock,
  Play,
  Share2,
  PhoneCall,
  MapPin,
  Wallet,
  GraduationCap,
  Calculator,
} from 'lucide-react';

interface PhoneMockupProps {
  apps: AppItem[];
  initialAppId?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ apps, initialAppId = 'lenden' }) => {
  const [selectedAppId, setSelectedAppId] = useState<string>(initialAppId);
  const [interactiveState, setInteractiveState] = useState<number>(0);

  const activeApp = apps.find((a) => a.id === selectedAppId) || apps[0];

  const renderIcon = (id: string) => {
    switch (id) {
      case 'lenden':
        return <Wallet className="w-5 h-5 text-emerald-400" />;
      case 'ghorlagbee':
        return <MapPin className="w-5 h-5 text-blue-400" />;
      case 'classmates':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case 'frametastic':
        return <Camera className="w-5 h-5 text-rose-400" />;
      case 'colorful-calculator':
        return <Calculator className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="relative mx-auto flex flex-col items-center">
      {/* Background radial glow effect */}
      <div
        className="absolute -inset-4 blur-3xl rounded-[40px] opacity-35 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${activeApp.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* App Switcher Pills (Top of phone) */}
      <div className="mb-4 flex flex-wrap justify-center items-center gap-1.5 p-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md z-10 shadow-lg max-w-sm">
        {apps.slice(0, 3).map((app) => (
          <button
            key={app.id}
            onClick={() => {
              setSelectedAppId(app.id);
              setInteractiveState(0);
            }}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
              selectedAppId === app.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {app.name}
          </button>
        ))}
      </div>

      {/* Titanium Smartphone Chassis */}
      <div className="relative w-[310px] sm:w-[340px] h-[640px] sm:h-[680px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-black p-3.5 rounded-[52px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.15),inset_0_0_0_2px_rgba(0,0,0,0.8)] border border-zinc-700/50">
        {/* Subtle Outer Hardware Buttons */}
        <div className="absolute -left-[5px] top-[105px] w-[3px] h-[26px] bg-zinc-600 rounded-l-sm" />
        <div className="absolute -left-[5px] top-[148px] w-[3px] h-[46px] bg-zinc-600 rounded-l-sm" />
        <div className="absolute -left-[5px] top-[206px] w-[3px] h-[46px] bg-zinc-600 rounded-l-sm" />
        <div className="absolute -right-[5px] top-[165px] w-[3px] h-[68px] bg-zinc-600 rounded-r-sm" />

        {/* Screen Bezel & Display */}
        <div className="relative w-full h-full bg-[#07090e] rounded-[42px] overflow-hidden flex flex-col border border-white/5 shadow-inner">
          {/* Glass Reflection Highlight */}
          <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none z-30 rounded-tr-[42px]" />

          {/* Status Bar */}
          <div className="relative z-20 flex justify-between items-center px-6 pt-3 pb-1 text-white text-[11px] font-medium tracking-tight">
            <span className="font-semibold text-xs tracking-normal">9:41</span>
            
            {/* Dynamic Island */}
            <div className="group relative mx-auto -mt-0.5 px-3 py-1 bg-black rounded-full flex items-center gap-2 border border-white/10 shadow-md cursor-pointer hover:px-4 transition-all duration-300">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono text-zinc-300 font-semibold tracking-wide">
                {activeApp.name}
              </span>
              <div className="w-2 h-2 rounded-full bg-zinc-800 border border-zinc-700" />
            </div>

            <div className="flex items-center gap-1.5 text-zinc-300">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Screen Content - App View */}
          <div className="relative z-10 flex-1 flex flex-col p-4 overflow-y-auto overflow-x-hidden text-left scrollbar-none">
            {/* App Header Inside Mockup */}
            <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md ${activeApp.iconBg}`}
                >
                  {renderIcon(activeApp.id)}
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold leading-tight flex items-center gap-1">
                    {activeApp.name}
                    <span className="text-[9px] px-1 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                      v{activeApp.version}
                    </span>
                  </h4>
                  <p className="text-[10px] text-zinc-400 line-clamp-1">{activeApp.tagline}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-bold text-amber-400 flex items-center justify-end gap-0.5">
                  ★ {activeApp.rating}
                </div>
                <div className="text-[9px] text-zinc-500">{activeApp.category}</div>
              </div>
            </div>

            {/* Dynamic Interactive Card Content according to activeApp */}
            {activeApp.id === 'lenden' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950/50 via-teal-950/40 to-slate-900 border border-emerald-500/20">
                  <div className="flex items-center justify-between text-[10px] text-emerald-400 font-medium mb-1">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3" /> P2P Handshake Verified
                    </span>
                    <span className="text-emerald-300 font-mono font-bold">5.0 ★ Rating</span>
                  </div>
                  <div className="text-lg font-black text-white tracking-tight my-1">
                    +৳ 28,450 <span className="text-[10px] font-normal text-zinc-400 font-mono">Net Ledger</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] my-2 pt-2 border-t border-white/10">
                    <div className="p-2 rounded-lg bg-black/40 border border-emerald-500/20">
                      <div className="text-zinc-400 text-[9px]">Will Receive</div>
                      <div className="text-emerald-400 font-bold text-xs">৳ 32,000</div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-rose-500/20">
                      <div className="text-zinc-400 text-[9px]">Will Give</div>
                      <div className="text-rose-400 font-bold text-xs">৳ 3,550</div>
                    </div>
                  </div>
                  <div className="space-y-1.5 text-[11px] text-zinc-300">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                      <span className="line-clamp-1">Rafiq Ahmed: ৳5,000</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                      <span className="line-clamp-1">Savings Goal: 74% Complete</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    </div>
                  </div>
                  <button
                    onClick={() => setInteractiveState((prev) => (prev + 1) % 3)}
                    className="mt-2.5 w-full py-1.5 text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all text-center"
                  >
                    {interactiveState === 0
                      ? 'Simulate New P2P Handshake →'
                      : interactiveState === 1
                      ? 'Handshake Verified by Peer ✓'
                      : 'Reset Ledger View'}
                  </button>
                </div>
              </div>
            )}

            {activeApp.id === 'ghorlagbee' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-950/50 via-indigo-950/40 to-slate-900 border border-blue-500/20">
                  <div className="flex justify-between items-center text-[10px] text-blue-400 font-medium mb-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> GPS Nearby Radar
                    </span>
                    <span className="font-mono text-cyan-300">24 Listings</span>
                  </div>
                  <div className="text-xs font-bold text-white mt-1">
                    Family Flat: 3 Bed, 3 Bath
                  </div>
                  <div className="text-[11px] text-zinc-300 font-mono">
                    Dhanmondi, Dhaka • <strong className="text-cyan-400">৳28,000/mo</strong>
                  </div>
                  <div className="my-2 p-2 rounded-xl bg-black/40 border border-white/5 text-[10px] text-zinc-300 space-y-1">
                    <div className="flex items-center justify-between">
                      <span>Verified Property Owner</span>
                      <span className="text-emerald-400 font-semibold">Zero Broker Fee</span>
                    </div>
                    <div className="text-zinc-400 text-[9px]">
                      Google Maps Navigation calibrated • 140 views today
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setInteractiveState((prev) => (prev + 1) % 2)}
                      className="flex-1 py-1.5 text-[10px] font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-1"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>{interactiveState === 1 ? 'Calling Owner...' : 'Call Owner Direct'}</span>
                    </button>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-zinc-900/60 border border-white/5 text-[10px] text-zinc-400">
                  <span>Bachelor Sublets: </span>
                  <span className="text-white font-semibold">12 Available from ৳6,500</span>
                </div>
              </div>
            )}

            {activeApp.id === 'classmates' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-950/50 via-indigo-950/40 to-slate-900 border border-purple-500/20">
                  <div className="flex justify-between items-center text-[10px] text-purple-400 font-medium mb-1">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Professor AI Tutor
                    </span>
                    <span className="font-mono text-cyan-300">Gemini Powered</span>
                  </div>
                  <div className="text-xs font-bold text-white mt-1">
                    Campus Discussion Feed & Coursework
                  </div>
                  <p className="text-[11px] text-zinc-300 mt-1">
                    {interactiveState === 0
                      ? '“Explain Dijkstra algorithm time complexity with min-heap”'
                      : 'Professor AI: O((V + E) log V). Step-by-step breakdown ready!'}
                  </p>
                  <div className="mt-2.5 p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[10px]">
                    <span className="text-zinc-400">Referral Leaderboard Rank</span>
                    <span className="text-amber-400 font-bold">#4 (৳3,500 Prize Zone)</span>
                  </div>
                  <button
                    onClick={() => setInteractiveState((prev) => (prev + 1) % 2)}
                    className="mt-2.5 w-full py-1.5 text-[10px] font-semibold text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg transition-all text-center"
                  >
                    {interactiveState === 0 ? 'Ask Professor AI →' : 'Reset AI Prompt'}
                  </button>
                </div>
              </div>
            )}

            {/* Quick App Store & Play Store Action Strip */}
            <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between gap-2">
              <a
                href={activeApp.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-[11px] font-bold text-center border border-cyan-400/30 transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>View on Google Play Store</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Home Indicator Bar */}
          <div className="relative z-20 pb-2 pt-1 flex justify-center">
            <div className="w-28 h-1 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Interactive Hint Under Mockup */}
      <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-400">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>Live Interactive Preview — Tap buttons to test real app flows</span>
      </div>
    </div>
  );
};
