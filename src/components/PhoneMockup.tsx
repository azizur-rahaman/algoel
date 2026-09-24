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
} from 'lucide-react';

interface PhoneMockupProps {
  apps: AppItem[];
  initialAppId?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ apps, initialAppId = 'omniflow-ai' }) => {
  const [selectedAppId, setSelectedAppId] = useState<string>(initialAppId);
  const [activeTab, setActiveTab] = useState<'app' | 'specs'>('app');
  const [interactiveState, setInteractiveState] = useState<number>(0);

  const activeApp = apps.find((a) => a.id === selectedAppId) || apps[0];

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
        {/* Action Button */}
        <div className="absolute -left-[5px] top-[105px] w-[3px] h-[26px] bg-zinc-600 rounded-l-sm" />
        {/* Volume Up */}
        <div className="absolute -left-[5px] top-[148px] w-[3px] h-[46px] bg-zinc-600 rounded-l-sm" />
        {/* Volume Down */}
        <div className="absolute -left-[5px] top-[206px] w-[3px] h-[46px] bg-zinc-600 rounded-l-sm" />
        {/* Power Button */}
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
                {activeApp.name.split(' ')[0]}
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
                  {activeApp.id === 'omniflow-ai' && <Sparkles className="w-5 h-5" />}
                  {activeApp.id === 'prismlens-pro' && <Camera className="w-5 h-5" />}
                  {activeApp.id === 'aurapulse' && <Activity className="w-5 h-5" />}
                  {activeApp.id === 'vaultkey-zero' && <Shield className="w-5 h-5" />}
                  {activeApp.id === 'sonicwave-studio' && <Layers className="w-5 h-5" />}
                  {activeApp.id === 'chronos-flow' && <Clock className="w-5 h-5" />}
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
                <div className="text-[9px] text-zinc-500">{activeApp.reviewsCount}</div>
              </div>
            </div>

            {/* Dynamic Interactive Card Content according to activeApp */}
            {activeApp.id === 'omniflow-ai' && (
              <div className="space-y-3">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/20">
                  <div className="flex items-center justify-between text-[10px] text-cyan-400 font-medium mb-1.5">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> On-Device Neural Engine
                    </span>
                    <span className="text-emerald-400 font-mono">0.02s Latency</span>
                  </div>
                  <p className="text-white text-xs font-semibold mb-2">
                    {interactiveState === 0
                      ? 'Morning Briefing: 3 High-Priority Actions'
                      : interactiveState === 1
                      ? 'Autonomous Pipeline: 4 Drafts Ready'
                      : 'Executive Telemetry: 100% On-Device'}
                  </p>
                  <div className="space-y-1.5 text-[11px] text-zinc-300">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                      <span className="line-clamp-1">Board Meeting Notes Summarized</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                      <span className="line-clamp-1">Contract PDF analyzed (0 errors)</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    </div>
                  </div>
                  <button
                    onClick={() => setInteractiveState((prev) => (prev + 1) % 3)}
                    className="mt-2.5 w-full py-1.5 text-[10px] font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-all text-center"
                  >
                    Tap to Run Next AI Step →
                  </button>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5">
                  <div className="flex justify-between items-center text-[10px] text-zinc-400 mb-1">
                    <span>Active Memory</span>
                    <span className="text-cyan-400 font-mono">1.2 GB / 6.0 GB</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[24%]" />
                  </div>
                </div>
              </div>
            )}

            {activeApp.id === 'prismlens-pro' && (
              <div className="space-y-3">
                <div className="relative h-36 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-tr from-amber-950 via-rose-950 to-slate-950 p-3 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] text-amber-300 font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-black/60 border border-white/10">
                      RAW 4K 60fps
                    </span>
                    <span className="text-rose-400 font-bold">● REC 00:04:12</span>
                  </div>
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-20">
                    <div className="border-r border-b border-white" />
                    <div className="border-r border-b border-white" />
                    <div className="border-b border-white" />
                    <div className="border-r border-b border-white" />
                    <div className="border-r border-b border-white" />
                    <div className="border-b border-white" />
                    <div className="border-r border-white" />
                    <div className="border-r border-white" />
                    <div />
                  </div>
                  <div className="relative z-10 flex justify-between items-end">
                    <div>
                      <div className="text-[10px] text-zinc-300 font-mono">Kodachrome 64</div>
                      <div className="text-[9px] text-zinc-400">Halation: +35% • Grain: Fine</div>
                    </div>
                    <button
                      onClick={() => setInteractiveState((prev) => (prev + 1) % 3)}
                      className="px-2 py-1 text-[9px] font-bold rounded bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20"
                    >
                      Cycle Film Stock
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[10px]">
                  <div className="p-2 rounded-xl bg-zinc-900/60 border border-white/5">
                    <div className="text-zinc-500 text-[8px]">SHUTTER</div>
                    <div className="text-white font-semibold">1/48s</div>
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-900/60 border border-white/5">
                    <div className="text-zinc-500 text-[8px]">ISO</div>
                    <div className="text-white font-semibold">200</div>
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-900/60 border border-white/5">
                    <div className="text-zinc-500 text-[8px]">APERTURE</div>
                    <div className="text-white font-semibold">f/1.78</div>
                  </div>
                </div>
              </div>
            )}

            {activeApp.id === 'aurapulse' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-teal-950/30 to-slate-900 border border-emerald-500/20">
                  <div className="flex justify-between items-center text-[10px] text-emerald-400 font-medium mb-1">
                    <span>Recovery Readiness</span>
                    <span className="font-mono font-bold text-emerald-300">94% — Optimal</span>
                  </div>
                  <div className="text-xl font-black text-white tracking-tight my-1">
                    86 <span className="text-xs font-normal text-zinc-400">ms rMSSD</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 mb-2">
                    Autonomic balance is stabilized. Prime circadian window for peak physical and cognitive output.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1 flex-1 bg-emerald-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 w-4/5" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-400">Deep Sleep: 2h 14m</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded-xl bg-zinc-900/60 border border-white/5">
                    <div className="text-zinc-400">Resting HR</div>
                    <div className="text-white font-bold text-xs">48 BPM</div>
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-900/60 border border-white/5">
                    <div className="text-zinc-400">Stress Balance</div>
                    <div className="text-emerald-400 font-bold text-xs">Low (0.14)</div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick App Store & Play Store Action Strip */}
            <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between gap-2">
              <a
                href={activeApp.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-1.5 px-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-[10px] font-semibold text-center border border-white/10 transition-colors flex items-center justify-center gap-1"
              >
                App Store
              </a>
              <a
                href={activeApp.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-1.5 px-2 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 text-[10px] font-semibold text-center border border-cyan-500/30 transition-colors flex items-center justify-center gap-1"
              >
                Google Play
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
        <span>Live Interactive Preview — Tap buttons to test interface states</span>
      </div>
    </div>
  );
};
