'use client';

import React, { useEffect } from 'react';
import { AppItem } from '@/types';
import {
  X,
  Star,
  Download,
  ExternalLink,
  Shield,
  CheckCircle,
  Cpu,
  Layers,
  Sparkles,
  QrCode,
  Share2,
} from 'lucide-react';

interface AppModalProps {
  app: AppItem | null;
  onClose: () => void;
}

export const AppModal: React.FC<AppModalProps> = ({ app, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (app) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [app, onClose]);

  if (!app) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Dark backdrop with heavy blur */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header Ribbon */}
        <div className="relative px-6 py-5 border-b border-white/10 bg-zinc-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${app.iconBg}`}
            >
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight">{app.name}</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-medium border border-cyan-500/30">
                  v{app.version}
                </span>
                {app.awardBadge && (
                  <span className="hidden sm:inline-flex text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-medium border border-amber-500/30">
                    ★ {app.awardBadge}
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">{app.tagline}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Top Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-zinc-900/40 border border-white/5">
            <div>
              <div className="text-[11px] text-zinc-400 uppercase font-mono">Downloads</div>
              <div className="text-lg font-bold text-white mt-0.5">{app.downloads}</div>
            </div>
            <div>
              <div className="text-[11px] text-zinc-400 uppercase font-mono">Store Rating</div>
              <div className="text-lg font-bold text-amber-400 mt-0.5 flex items-center gap-1">
                ★ {app.rating}{' '}
                <span className="text-xs text-zinc-500 font-normal">({app.reviewsCount})</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] text-zinc-400 uppercase font-mono">Category</div>
              <div className="text-sm font-semibold text-cyan-400 mt-0.5">{app.category}</div>
            </div>
            <div>
              <div className="text-[11px] text-zinc-400 uppercase font-mono">Platforms</div>
              <div className="text-sm font-semibold text-zinc-300 mt-0.5">
                {app.platforms.join(' • ')}
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-2 font-semibold">
              Product Overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {app.description}
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-3 font-semibold">
              Core Capabilities & Innovations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {app.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 flex items-start gap-2.5 text-xs text-zinc-200"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshot / Screen Preview Showcase */}
          {app.screenshots.length > 0 && (
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-3 font-semibold">
                Interface Preview & Flow
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {app.screenshots.map((screen, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl bg-gradient-to-br ${screen.accentGradient} border border-white/10 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                        {screen.title}
                      </div>
                      <div className="text-sm font-bold text-white mt-1">
                        {screen.mockupData.heading}
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">{screen.subtitle}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
                      {screen.mockupData.previewBullets?.map((bullet, bIdx) => (
                        <div key={bIdx} className="text-[11px] text-zinc-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bare-Metal Tech Stack Badges */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-3 font-semibold">
              Engineering Primitives
            </h4>
            <div className="flex flex-wrap gap-2">
              {app.techSpecs.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Store Links */}
        <div className="px-6 py-4 border-t border-white/10 bg-zinc-900/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">
            Available on iOS 17+, iPadOS, and Android 13+. Free with Pro upgrades.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={app.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Download on App Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <span>Get on Google Play</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
