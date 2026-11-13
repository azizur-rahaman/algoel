'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  HardDrive,
  Scale,
  Calendar,
  Building,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Share2,
  FileText,
  Trash2,
  Mail,
  Receipt,
  Database,
  Globe,
} from 'lucide-react';

export default function WeightnotePrivacyClient() {
  const [lang, setLang] = useState<'en' | 'bn'>('en');

  const isBn = lang === 'bn';

  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-emerald-500 selection:text-white">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-green-500/15 blur-[140px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
            <span>{isBn ? 'Algoel হোম-এ ফিরুন' : 'Back to Algoel Home'}</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-zinc-900 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
                  !isBn
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
                  isBn
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                বাংলা
              </button>
            </div>

            <Link
              href="/"
              className="flex items-center gap-2 text-white font-black tracking-tight text-sm"
            >
              <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-emerald-500 to-teal-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#070a12] rounded-[5px] flex items-center justify-center">
                  <span className="text-emerald-400 font-mono font-bold text-[10px]">▲</span>
                </div>
              </div>
              <span className="hidden sm:inline">ALGOEL</span>
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=com.algoel.weightnote"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <span>Google Play</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10 space-y-12">
        {/* Title & Metadata Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono uppercase tracking-wider text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {isBn
                    ? 'গুগল প্লে স্টোর কমপ্লায়েন্স ডকুমেন্ট'
                    : 'Google Play Store Compliance Document'}
                </span>
              </div>

              {/* Language Pill Indicator */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isBn ? 'ভাষা: বাংলা' : 'Language: English'}</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800 flex items-center justify-center text-white shadow-xl shadow-emerald-950/50">
                  <Scale className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    {isBn
                      ? 'weightnote (ডিজিটাল ওজন খাতা) — প্রাইভেসি পলিসি'
                      : 'Privacy Policy for weightnote (ডিজিটাল ওজন খাতা)'}
                  </h1>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
                    Package ID: com.algoel.weightnote
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs">
              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span>{isBn ? 'কার্যকর তারিখ' : 'Effective Date'}</span>
                </div>
                <div className="text-white font-medium">
                  {isBn ? '১৩ নভেম্বর, ২০২৬' : 'November 13, 2026'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span>{isBn ? 'সর্বশেষ আপডেট' : 'Last Updated'}</span>
                </div>
                <div className="text-white font-medium">
                  {isBn ? '১৩ নভেম্বর, ২০২৬' : 'November 13, 2026'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Building className="w-3 h-3 text-emerald-400" />
                  <span>{isBn ? 'ডেভেলপার / প্রকাশক' : 'Developer / Publisher'}</span>
                </div>
                <div className="text-white font-medium">Algoel Technologies</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>{isBn ? 'বিজ্ঞাপন স্ট্যাটাস' : 'Ad Status'}</span>
                </div>
                <div className="text-emerald-400 font-medium">
                  {isBn ? '১০০% বিজ্ঞাপনমুক্ত ও ফ্রি' : '100% Free & No Ads'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary Cards */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              {isBn ? 'সংক্ষিপ্ত গোপনীয়তা সারসংক্ষেপ' : 'Executive Privacy Highlights'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <EyeOff className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">
                {isBn ? 'অ্যাকাউন্ট বা সাইন-আপের প্রয়োজন নেই' : 'Zero Account & No Sign-Up'}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {isBn
                  ? 'কোনো সাইন-আপ, ইমেইল, পাসওয়ার্ড বা লগইনের প্রয়োজন নেই। আপনি সম্পূর্ণ ব্যক্তিগতভাবে আপনার ওজনের খাতা ও বাণিজ্য রেকর্ড পরিচালনা করতে পারবেন।'
                  : 'No sign-up, login, password, or third-party authentication required. You manage your trade records and weighing ledgers with absolute autonomy.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <HardDrive className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">
                {isBn ? '১০০% ডিভাইসের নিজস্ব SQLite স্টোরেজ' : '100% On-Device SQLite'}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {isBn
                  ? 'সমস্ত ব্যাচ ওজনের রেকর্ড, সিরিয়াল, মণের হিসাব ও দর শুধুমাত্র আপনার ডিভাইসের লোকাল ডাটাবেজে (weightnote.db) সংরক্ষিত থাকে। কোনো রিমোট সার্ভারে আপলোড করা হয় না।'
                  : 'All batch weight logs, serials, unit prices, and trade notes are saved strictly in your local device database (weightnote.db). Nothing is ever uploaded to a remote server.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">
                {isBn ? 'বিজ্ঞাপনমুক্ত ও ১০০% অফলাইন' : '100% Ad-Free & Offline'}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {isBn
                  ? 'কোনো থার্ড-পার্টি বিজ্ঞাপন নেটওয়ার্ক নেই, কোনো ট্র্যাকার বা ব্যাকগ্রাউন্ড নজরদারি নেই। ইন্টারনেট সংযোগ ছাড়াই অ্যাপটি সম্পূর্ণ কার্যকর।'
                  : 'Zero third-party advertisement SDKs, zero behavioral trackers, and zero telemetry analytics. weightnote functions seamlessly without an active internet connection.'}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">01.</span>
              {isBn
                ? 'ভূমিকা ও মূল দর্শন: শুরু থেকেই গোপনীয়তা (Privacy by Design)'
                : 'Introduction & Core Philosophy'}
            </h2>
            {isBn ? (
              <>
                <p>
                  এই গোপনীয়তা নীতিতে (Privacy Policy) ব্যাখ্যা করা হয়েছে কীভাবে <strong>Algoel Technologies</strong> (&quot;Algoel&quot;, &quot;আমরা&quot;) মোবাইল অ্যাপ্লিকেশন <strong>weightnote (ডিজিটাল ওজন খাতা)</strong> (প্যাকেজ আইডি: <code className="text-emerald-300 font-mono bg-zinc-950 px-1.5 py-0.5 rounded border border-white/10">com.algoel.weightnote</code>)-এর তথ্যাবলি পরিচালনা করে।
                </p>
                <p>
                  weightnote মূলত গবাদিপশু, পোল্ট্রি খামার, ধান-চাল-শস্যের আড়ত, মৎস্য ব্যবসা, ফলমূল, শাকসবজি এবং পাইকারি ওজনের পাল্লার বাণিজ্যিক হিসাব রাখার জন্য তৈরি। বাণিজ্যিক বা কৃষিজ বাণিজ্যে ওজন, দর-দাম ও লেনদেনের গোপনীয়তা অত্যন্ত সংবেদনশীল। আমাদের স্থাপত্যের মূল ভিত্তি হলো <strong>শুরু থেকেই পূর্ণাঙ্গ গোপনীয়তা (Privacy by Design)</strong>: weightnote একটি অফলাইন-ফার্স্ট ইউটিলিটি যা সম্পূর্ণভাবে আপনার নিজস্ব ডিভাইসে কাজ করে। আমরা আপনার কোনো বাণিজ্যিক রেকর্ড বা তথ্য সংগ্রহ, বিক্রয়, মনিটাইজ বা কোনো তৃতীয় পক্ষের কাছে হস্তান্তর করি না।
                </p>
              </>
            ) : (
              <>
                <p>
                  This Privacy Policy explains how <strong>Algoel Technologies</strong> (&quot;Algoel&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles data in connection with the mobile application <strong>weightnote (ডিজিটাল ওজন খাতা)</strong> (Package ID: <code className="text-emerald-300 font-mono bg-zinc-950 px-1.5 py-0.5 rounded border border-white/10">com.algoel.weightnote</code>).
                </p>
                <p>
                  weightnote is specifically engineered for wholesale commodities, livestock, poultry markets, grain trading, fisheries, agriculture, and batch scale measurements. In commercial and agricultural trade, business confidentiality—such as commodity weights, pricing agreements, customer records, and supplier transactions—is critically sensitive. Our foundational architectural principle is <strong>absolute privacy by design</strong>: weightnote is an offline-first utility that operates strictly on your device. We do not collect, monetize, analyze, or broker your trade records.
                </p>
              </>
            )}
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">02.</span>
              {isBn ? 'যেসব তথ্য আমরা কখনোই সংগ্রহ করি না' : 'Data We Do NOT Collect'}
            </h2>
            <p>
              {isBn
                ? 'আপনার বাণিজ্যিক গোপনীয়তা সুরক্ষার স্বার্থে weightnote কঠোর প্রযুক্তিগত সীমাবদ্ধতা মেনে চলে:'
                : 'To ensure full sovereignty and confidentiality over your commercial trade, weightnote operates with strict technical boundaries:'}
            </p>
            {isBn ? (
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>ব্যক্তিগত অ্যাকাউন্টের ঝামেলা নেই:</strong> কোনো সাইন-আপ, ইমেইল, মোবাইল নম্বর, পাসওয়ার্ড বা ক্লাউড লগইনের প্রয়োজন নেই।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>ক্লাউডে ওজনের হিসাব আপলোড হয় না:</strong> ওজনের ব্যাচ, দর বা মোট টাকার হিসাব কখনোই কোনো দূরবর্তী সার্ভার বা ক্লাউড ডাটাবেজে পাঠানো হয় না।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>লোকেশন ট্র্যাকিং নেই:</strong> আপনার কোনো জিপিএস (GPS) বা নেটওয়ার্ক লোকেশন তথ্য সংগ্রহ বা ট্র্যাক করা হয় না।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>কোনো সেন্সর বা হার্ডওয়্যার পারমিশন নেই:</strong> অ্যাপটি কোনোভাবেই আপনার ক্যামেরা, মাইক্রোফোন, লোকেশন বা ফোনের কন্টাক্ট তালিকার কোনো পারমিশন চায় না বা অ্যাক্সেস করে না।</span>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2.5 pl-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>No Personally Identifiable Information (PII):</strong> We never collect or transmit your national ID, banking credentials, passwords, or personal identity documents.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>No Mandatory Account Creation:</strong> The application does not require user registration, cloud profiles, or authentication through external social networks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>No Cloud Weighing Logs:</strong> Your batch weight logs, session dates, unit prices, and invoice totals are never uploaded or synced to external servers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>No Location Tracking:</strong> The application does not request, track, or store your GPS coordinates or network locations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>No Camera, Microphone, Location, or Contacts Access:</strong> The app requests zero hardware, sensor, media, or personal-data permissions and does not access your camera, microphone, or contact address book at any time.</span>
                </li>
              </ul>
            )}
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">03.</span>
              {isBn
                ? 'ডিভাইসের নিজস্ব SQLite লোকাল স্টোরেজ'
                : 'Local On-Device Data Storage (SQLite)'}
            </h2>
            <p>
              {isBn
                ? 'সমস্ত সেশনের তথ্য, ব্যাচ সিরিয়াল, বস্তার সংখ্যা, প্রতি কেজির দর (৳) এবং মণের হিসাব শুধুমাত্র আপনার ডিভাইসের নিজস্ব SQLite ডাটাবেজে (weightnote.db) সংরক্ষিত থাকে:'
                : 'All application data is maintained locally using a high-performance SQLite relational database (weightnote.db):'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-2">
                <div className="font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>{isBn ? 'সেশন টেবিল (Sessions Table):' : 'Sessions Table:'}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li><code className="text-zinc-200">id</code>: Unique UUID v4 primary key.</li>
                  <li><code className="text-zinc-200">name</code>: {isBn ? 'সেশনের নাম (যেমন: মুরগি বিক্রয়, আমন ধান)।' : 'Batch or session name.'}</li>
                  <li><code className="text-zinc-200">date</code>: {isBn ? 'সেশনের তারিখ ও সময়।' : 'Session timestamp.'}</li>
                  <li><code className="text-zinc-200">notes</code>: {isBn ? 'সেশনের ঐচ্ছিক নোট বা মন্তব্য।' : 'Optional session notes.'}</li>
                  <li><code className="text-zinc-200">unit</code>: {isBn ? 'ওজন একক (কেজি, মণ, পাউন্ড, টন)।' : 'Measurement unit (kg, mon, lbs, ton).'}</li>
                  <li><code className="text-zinc-200">unit_price</code>: {isBn ? 'প্রতি এককের নির্ধারিত দর (৳)।' : 'Negotiated unit price rate (৳).'}</li>
                  <li><code className="text-zinc-200">total_weight, total_pieces, total_entries</code>: {isBn ? 'স্বয়ংক্রিয়ভাবে হিসাবকৃত মোট ওজন, পিস ও এন্ট্রি সংখ্যা।' : 'Aggregated session weight, pieces, and entry counts.'}</li>
                  <li><code className="text-zinc-200">is_completed, created_at, updated_at</code>: {isBn ? 'সম্পন্ন স্ট্যাটাস ও তৈরির/আপডেটের সময়।' : 'Completion status and audit timestamps.'}</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-2">
                <div className="font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Receipt className="w-3.5 h-3.5" />
                  <span>{isBn ? 'ওজন এন্ট্রি টেবিল (Entries Table):' : 'Entries Table:'}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li><code className="text-zinc-200">id</code>: Unique entry UUID v4.</li>
                  <li><code className="text-zinc-200">session_id</code>: Foreign key linked to session.</li>
                  <li><code className="text-zinc-200">serial_number</code>: {isBn ? 'ক্রমিক নম্বর (#০১, #০২...)।' : 'Sequential batch record count.'}</li>
                  <li><code className="text-zinc-200">weight</code>: {isBn ? 'রেকর্ড করা ওজন।' : 'Recorded weight measurement.'}</li>
                  <li><code className="text-zinc-200">pieces</code>: {isBn ? 'বস্তা বা পিসের সংখ্যা।' : 'Item count (bags, crates, birds).'}</li>
                  <li><code className="text-zinc-200">notes</code>: {isBn ? 'এন্ট্রির ঐচ্ছিক নোট।' : 'Optional entry notes.'}</li>
                  <li><code className="text-zinc-200">created_at</code>: {isBn ? 'এন্ট্রি তৈরির সঠিক সময়।' : 'Exact entry timestamp.'}</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-zinc-400">
              {isBn
                ? 'আপনার নাম, ঐচ্ছিক খামার/ব্যবসার নাম এবং ঐচ্ছিক মোবাইল নম্বর (যা অ্যাপের অভ্যর্থনা ও পিডিএফ রিপোর্টের হেডারে প্রদর্শনের জন্য ব্যবহৃত হয়) এবং অ্যাপের পছন্দসমূহ (ভাষা, ডিফল্ট ওজন ইউনিট, হ্যাপটিক/টাচ ফিডব্যাক ও সর্বশেষ সক্রিয় সেশন) শুধুমাত্র আপনার ডিভাইসের নিজস্ব সুরক্ষিত লোকাল স্টোরেজে (SharedPreferences) সংরক্ষিত থাকে এবং কখনোই কোনো সার্ভারে পাঠানো হয় না।'
                : 'Your local profile details (your name, optional business/farm trade name, and optional contact phone used solely for greetings and PDF report headers) along with local app preferences (language, default unit, haptic toggle, and last active session ID) are saved exclusively in your device\'s sandboxed local storage (SharedPreferences) and are never transmitted off your device.'}
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">04.</span>
              {isBn
                ? 'ডিভাইস পারমিশন ও পিডিএফ রিপোর্ট তৈরি'
                : 'Device Permissions & PDF Report Generation'}
            </h2>
            <p>
              {isBn
                ? 'weightnote ডিভাইসের ন্যূনতম সিস্টেম সুবিধা ব্যবহার করে, যা শুধুমাত্র ব্যবহারকারীর সক্রিয় নির্দেশে কাজ করে:'
                : 'weightnote requires minimal operating system interactions, each strictly initiated by explicit user command:'}
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>
                    {isBn
                      ? 'অফলাইনে পিডিএফ রসিদ ও খাতা তৈরি'
                      : 'PDF Ledger Invoice Generation & Storage'}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {isBn
                    ? 'আপনি যখন পিডিএফ রিপোর্ট বাটনে ট্যাপ করেন, তখন আপনার ডিভাইসের নিজস্ব সিপিইউ (CPU) ও অ্যাপে সংযুক্ত ফন্ট ব্যবহার করে সম্পূর্ণ অফলাইনে অস্থায়ী ক্যাশে একটি প্রিন্ট-উপযোগী ভেক্টর পিডিএফ তৈরি হয়। প্রিভিউ স্ক্রিন থেকে আপনি নিজের ইচ্ছামতো প্রিন্ট, সেভ বা শেয়ার ডায়ালগের মাধ্যমে সংরক্ষণ ও পাঠাতে পারেন (কোনো ব্যাকগ্রাউন্ড নেটওয়ার্ক রিকোয়েস্ট ছাড়াই)।'
                    : 'When you tap the PDF Report action in any weighing session, the app synthesizes a high-resolution, print-ready vector PDF report entirely on your local CPU using bundled fonts into temporary app cache. From the preview screen, you can choose to print, save, or export the PDF via your device\'s native OS Print/Save dialog or Share Sheet.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <Share2 className="w-4 h-4 text-teal-400" />
                  <span>
                    {isBn
                      ? 'অপারেটিং সিস্টেমের নিজস্ব শেয়ার ডায়ালগ'
                      : 'Native System Share Sheet Invocation'}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {isBn
                    ? 'আপনি যখন কোনো হিসাব বা চালান শেয়ার করতে চান, কেবল তখনই আপনার ফোনের নিজস্ব শেয়ার উইন্ডো ওপেন হয়। আপনি নিজেই নির্ধারণ করেন কোন অ্যাপে (যেমন: WhatsApp, মেসেঞ্জার, ইমেইল বা প্রিন্টার) তা পাঠাবেন।'
                    : 'When you choose to share a PDF invoice or weighing summary, weightnote invokes your operating system\'s native share sheet. You retain full control over which external application (WhatsApp, Messenger, Email, or Bluetooth Printer) receives the generated report.'}
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">05.</span>
              {isBn
                ? 'কোনো প্রকার বিজ্ঞাপন বা ট্র্যাকার নেই'
                : 'Zero Advertising & Zero Third-Party SDKs'}
            </h2>
            <p>
              {isBn
                ? 'ব্যবসায়িক খাতা ও লেনদেনের হিসাবে কোনো ধরনের অনাহূত বিজ্ঞাপন থাকা অনুচিত। weightnote সম্পূর্ণ বিজ্ঞাপনমুক্ত নীতির ওপর প্রতিষ্ঠিত:'
                : 'Commercial ledger software must never compromise trade secrets or burden users with intrusive advertisements. weightnote strictly adheres to a zero-surveillance standard:'}
            </p>
            {isBn ? (
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>বিজ্ঞাপনমুক্ত:</strong> কোনো প্রকার অ্যাড নেটওয়ার্ক (যেমন: AdMob, Unity, Meta) নেই।</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>অ্যানালিটিক্স ট্র্যাকার নেই:</strong> কোনো Firebase Analytics বা Mixpanel ট্র্যাকার যুক্ত নেই।</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>তথ্য বিক্রি বা ব্রোকারেজ নিষিদ্ধ:</strong> আপনার বাণিজ্যিক ডেটা কখনোই বিক্রি, ভাড়া বা কারো সাথে শেয়ার করা হয় না।</span>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>No In-App Advertising:</strong> We bundle zero ad networks—no Google AdMob, Unity Ads, AppLovin, or Meta Audience Network SDKs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>No Analytics or Crash Telemetry:</strong> No Google Firebase Analytics, Mixpanel, Adjust, or AppsFlyer SDKs are integrated into our code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>No Data Monetization or Brokerage:</strong> We do not sell, rent, license, or barter your trade data, weighing records, or business transactions to any third party.</span>
                </li>
              </ul>
            )}
          </section>

          {/* Section 6 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">06.</span>
              {isBn
                ? 'ডাটা সংরক্ষণ, নিয়ন্ত্রণ ও স্থায়ীভাবে মুছে ফেলা'
                : 'Data Retention, Control & Permanent Deletion'}
            </h2>
            <p>
              {isBn
                ? 'যেহেতু সমস্ত তথ্য আপনার ডিভাইসে থাকে, তাই আপনার রেকর্ডের সম্পূর্ণ নিয়ন্ত্রণ একমাত্র আপনার নিজের হাতে:'
                : 'Because your weighing logs are stored locally on your device, you hold unilateral and total control over their lifecycle:'}
            </p>
            {isBn ? (
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>একক এন্ট্রি মুছে ফেলা:</strong> যেকোনো সময় একটি ট্যাপেই একক ওজনের এন্ট্রি ডিলিট করা যায়।</span>
                </li>
                <li className="flex items-start gap-2">
                  <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>পুরো সেশন মুছে ফেলা:</strong> সেশন ডিলিট করলে তার অধীনে থাকা সকল এন্ট্রি একসাথে মুছে যায়।</span>
                </li>
                <li className="flex items-start gap-2">
                  <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>ফুল ডাটা রিসেট:</strong> সেটিংসের &quot;সব ডাটা রিসেট&quot; অপশনে ট্যাপ করে সমস্ত রেকর্ড মুছে ফেলতে পারবেন।</span>
                </li>
                <li className="flex items-start gap-2">
                  <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>অ্যাপ আনইনস্টল:</strong> অ্যাপটি আনইনস্টল করলে ডিভাইসে থাকা সম্পূর্ণ ডাটাবেজ এবং সেটিংস চিরতরে মুছে যায়।</span>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>Individual Entry Deletion:</strong> You can delete any weight entry in an active session by tapping its delete icon.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>Complete Session Deletion:</strong> Deleting a session purges the entire session record along with all associated weight entries via foreign-key cascade.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>App Storage Purge:</strong> You can wipe all stored data at any time via your device settings or via the in-app &quot;Reset All Data&quot; button in Settings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>Complete Removal on Uninstall:</strong> Uninstalling weightnote instantly removes 100% of the local SQLite database and preferences from your device.</span>
                </li>
              </ul>
            )}
          </section>

          {/* Section 7 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">07.</span>
              {isBn
                ? 'শিশুদের গোপনীয়তা সুরক্ষা (COPPA Compliance)'
                : 'Children\'s Privacy (COPPA Compliance)'}
            </h2>
            <p>
              {isBn
                ? 'weightnote একটি বাণিজ্যিক হিসাবের অ্যাপ যা ব্যবসায়ী ও খামারীদের জন্য তৈরি। COPPA আইন ও গুগল প্লে নীতিমালা অনুযায়ী:'
                : 'weightnote is a general-purpose commercial utility tool designed for traders, farmers, and business operators. In accordance with the Children\'s Online Privacy Protection Act (COPPA) and the Google Play Developer Families Policy:'}
            </p>
            {isBn ? (
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>আমরা ১৩ বছরের কম বয়সী শিশুদের কোনো ব্যক্তিগত তথ্য সংগ্রহ বা সংরক্ষণ করি না।</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>অ্যাপে কোনো আচরণগত ট্র্যাকিং বা অনুপযুক্ত বিজ্ঞাপন নেই।</span>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2 pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>We do not knowingly collect, solicit, or maintain personal information from children under 13 years of age.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>The app contains no behavioral tracking, age gates, or personalized advertisements.</span>
                </li>
              </ul>
            )}
          </section>

          {/* Section 8 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">08.</span>
              {isBn ? 'পলিসি সংশোধন ও আপডেট' : 'Policy Updates & Amendments'}
            </h2>
            <p>
              {isBn
                ? 'প্রযুক্তিগত পরিবর্তন বা আইনগত কমপ্লায়েন্স নিশ্চিত করতে আমরা সময় সময় এই প্রাইভেসি পলিসি আপডেট করতে পারি। যেকোনো সংশোধিত সংস্করণ এই ইউআরএলে (URL) আপডেটের তারিখসহ প্রকাশ করা হবে।'
                : 'We may update this Privacy Policy periodically to reflect technological improvements or legal compliance standards. Any revisions will be published directly on this URL with an updated "Last Updated" date. We encourage users to inspect this document periodically.'}
            </p>
          </section>

          {/* Section 9: Contact */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-zinc-900/50 to-zinc-950 border border-emerald-500/20 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">09.</span>
              {isBn
                ? 'অফিসিয়াল প্রাইভেসি ও যোগাযোগ তথ্য'
                : 'Official Privacy & Data Protection Contact'}
            </h2>
            <p>
              {isBn
                ? 'এই গোপনীয়তা নীতি বা weightnote-এর অফলাইন ব্যবস্থা সম্পর্কিত যেকোনো প্রশ্ন বা তথ্যের জন্য যোগাযোগ করতে পারেন:'
                : 'If you have any questions, compliance inquiries, or technical feedback regarding this Privacy Policy or weightnote\'s offline architecture, please reach out directly:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <div className="text-zinc-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isBn ? 'প্রাইভেসি যোগাযোগ ইমেইল:' : 'Privacy Inquiries Email:'}</span>
                </div>
                <a
                  href="mailto:algoelofficial@gmail.com"
                  className="text-emerald-400 hover:text-emerald-300 font-mono font-semibold block transition-colors"
                >
                  algoelofficial@gmail.com
                </a>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <div className="text-zinc-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isBn ? 'প্রকাশক ও ঠিকানা:' : 'Publisher:'}</span>
                </div>
                <div className="text-white font-medium">
                  Algoel Technologies (Lead Dev: Azizur Rahaman)
                </div>
                <div className="text-zinc-500 text-[11px]">
                  {isBn ? 'ঢাকা, বাংলাদেশ' : 'Dhaka, Bangladesh'}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <Link
            href="/privacy"
            className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>
              {isBn
                ? 'সকল Algoel প্রাইভেসি পলিসি ডিরেক্টরি'
                : 'All Algoel Privacy Policies Directory'}
            </span>
          </Link>

          <div>
            © {new Date().getFullYear()} Algoel Technologies. All rights reserved.
          </div>
        </div>
      </main>
    </div>
  );
}
