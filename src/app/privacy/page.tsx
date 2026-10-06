import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  ArrowLeft,
  QrCode,
  Newspaper,
  Wallet,
  MapPin,
  Lock,
  EyeOff,
  HardDrive,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy & Data Protection Directory | Algoel Technologies',
  description:
    'Official privacy policies and data protection declarations for all mobile applications published by Algoel Technologies.',
};

export default function PrivacyDirectoryPage() {
  const policies = [
    {
      id: 'safeqr',
      name: 'SafeQR — QR & Barcode Scanner',
      packageId: 'com.algoel.safeqr_qr_and_barcode_scanner',
      icon: <QrCode className="w-6 h-6 text-cyan-400" />,
      iconBg: 'bg-cyan-500/10 border-cyan-500/20',
      description:
        'Fast, offline-first QR & barcode scanner. Zero PII collection, strictly local on-device processing, and camera access exclusively for real-time optical decoding.',
      href: '/privacy/safeqr',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.algoel.safeqr_qr_and_barcode_scanner',
      badge: '100% Offline & Private',
    },
    {
      id: 'news-app-flash',
      name: 'News App Flash',
      packageId: 'com.algoel.news_app_flash',
      icon: <Newspaper className="w-6 h-6 text-emerald-400" />,
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      description:
        'Tinder-style gesture flashcard news reader for Bangladesh. Zero login required, client-only caching, and zero behavioral tracking.',
      href: '/privacy/news-app-flash',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.algoel.news_app_flash',
      badge: 'Zero Login & Tracking',
    },
    {
      id: 'lenden',
      name: 'Lenden — Personal Ledger',
      packageId: 'com.algoel.lenden',
      icon: <Wallet className="w-6 h-6 text-teal-400" />,
      iconBg: 'bg-teal-500/10 border-teal-500/20',
      description:
        'Personal financial debt & credit tracking ledger. Bank-grade 4-digit PIN enclave, AES-256 local storage, and cryptographic peer verification.',
      href: '/contact',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.algoel.lenden',
      badge: 'Bank-Grade Security',
    },
    {
      id: 'ghorlagbee',
      name: 'GhorLagbee — To-Let Radar',
      packageId: 'com.algoel.ghorlagbe',
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      iconBg: 'bg-blue-500/10 border-blue-500/20',
      description:
        'Rental property discovery without brokers. Approximate location for radius calculations only, direct owner contacts, and zero advertiser selling.',
      href: '/contact',
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.algoel.ghorlagbe',
      badge: 'Zero Brokerage Platform',
    },
  ];

  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-cyan-500 selection:text-white">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-[140px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Algoel Home</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-white font-black tracking-tight text-sm"
          >
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-[#070a12] rounded-[5px] flex items-center justify-center">
                <span className="text-cyan-400 font-mono font-bold text-[10px]">▲</span>
              </div>
            </div>
            <span>ALGOEL</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10 space-y-12">
        {/* Title Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-md relative overflow-hidden shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Privacy &amp; Compliance Center</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Privacy Policies &amp; Data Transparency
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            At Algoel Technologies, privacy is not an afterthought—it is the foundational constraint of our system architecture. We build zero-bloat, offline-first mobile apps that grant you total sovereignty over your personal data.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs">
            <div className="flex items-center gap-2 text-zinc-400">
              <EyeOff className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Zero third-party ad networks</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <HardDrive className="w-4 h-4 text-blue-400 shrink-0" />
              <span>On-device processing by default</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>End-to-end user data sovereignty</span>
            </div>
          </div>
        </div>

        {/* Policies Directory Grid */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span>Official Application Privacy Policies</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-zinc-400 font-mono">
              Google Play Compliant
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {policies.map((p) => (
              <div
                key={p.id}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${p.iconBg}`}>
                      {p.icon}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                      {p.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {p.name}
                    </h3>
                    <code className="text-[11px] font-mono text-zinc-500 block mt-0.5">
                      {p.packageId}
                    </code>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Read Full Privacy Policy</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <a
                    href={p.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    title="Google Play Listing"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            <strong className="text-white block text-sm">Need dedicated privacy assistance?</strong>
            <span>Our data protection team answers all user rights and compliance inquiries within 24 hours.</span>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-colors shrink-0"
          >
            Contact Privacy Desk
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-zinc-500 pt-4">
          © {new Date().getFullYear()} Algoel Technologies. All rights reserved.
        </div>
      </main>
    </div>
  );
}
