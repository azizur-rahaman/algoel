import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  HardDrive,
  Globe,
  Smartphone,
  Mail,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Newspaper,
  Calendar,
  Building,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — News App Flash | Algoel Technologies',
  description:
    'Official Privacy Policy for News App Flash (com.algoel.news_app_flash) by Algoel Technologies. Zero personal data tracking, client-only on-device storage, and Google Play Store compliance.',
};

export default function NewsAppFlashPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-emerald-500 selection:text-white">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-cyan-500/15 blur-[140px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Algoel Home</span>
          </Link>

          <div className="flex items-center gap-3">
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
              href="https://play.google.com/store/apps/details?id=com.algoel.news_app_flash"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono uppercase tracking-wider text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Google Play Store Compliance Document</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-700 to-green-900 flex items-center justify-center text-white shadow-xl shadow-emerald-950/50">
                  <Newspaper className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    Privacy Policy for News App Flash
                  </h1>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
                    Package ID: com.algoel.news_app_flash
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs">
              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span>Effective Date</span>
                </div>
                <div className="text-white font-medium">October 5, 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span>Last Updated</span>
                </div>
                <div className="text-white font-medium">October 5, 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Building className="w-3 h-3 text-emerald-400" />
                  <span>Developer</span>
                </div>
                <div className="text-white font-medium">Algoel Technologies</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-emerald-400" />
                  <span>Contact</span>
                </div>
                <div className="text-emerald-400 font-medium truncate">
                  frazizur.rahaman@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <EyeOff className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Zero PII Collected</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                No sign up, no email, no phone, no behavioral tracking, and no user profiling.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
              <HardDrive className="w-5 h-5 text-teal-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">100% On-Device Storage</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Bookmarks and theme preferences are stored strictly on your local device.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Minimal Permissions</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Only standard internet network permissions. Zero location or contacts access.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Legal Sections */}
        <div className="space-y-8 bg-zinc-900/30 border border-white/10 rounded-3xl p-6 sm:p-10 text-zinc-300 text-sm leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                1
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Introduction
              </h2>
            </div>
            <p>
              At <strong className="text-white">Algoel Technologies</strong>, we respect your privacy and are committed to protecting it. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information when you use our mobile application <strong className="text-white">News App Flash</strong> (the &ldquo;App&rdquo;).
            </p>
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-xs flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Privacy-First Commitment:</strong> News App Flash is designed as a privacy-first, client-only application. We do not require account registration, login credentials, or personal identification.
              </span>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                2
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Information We Do NOT Collect
              </h2>
            </div>
            <p>
              We believe in minimal data exposure and maximum user control. News App Flash <strong className="text-white">does not</strong>:
            </p>
            <ul className="space-y-2 pl-2">
              {[
                'Collect Personal Identifiable Information (PII) such as your name, email address, physical address, or phone number.',
                'Require user registration, accounts, passwords, or authentication credentials.',
                'Track, log, or store your GPS, fine, or coarse geographic location.',
                'Access your contacts, microphone, camera, photos, or personal media files.',
                'Build user profiles, behavioral tracking data, or targeted advertising analytics.',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                3
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Information Handled Locally on Your Device
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <h3 className="font-semibold text-white">Bookmarks & Saved Articles</h3>
                <p className="text-zinc-400">
                  When you save or bookmark an article, this information is stored locally on your device using on-device secure storage (SQLite / SharedPreferences). This data never leaves your device and is not synchronized to any external server or cloud service.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <h3 className="font-semibold text-white">App Preferences</h3>
                <p className="text-zinc-400">
                  Settings such as theme preference (Dark Mode / Light Mode) are stored strictly on your local device.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <h3 className="font-semibold text-white">Uninstalling / Clearing Data</h3>
                <p className="text-zinc-400">
                  You can delete all locally saved bookmarks and preferences at any time by clearing the App&apos;s data in Android Settings or uninstalling the App.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                4
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Network Requests & Third-Party Services
              </h2>
            </div>
            <p>
              To provide news headlines and updates, the App communicates with the following external services:
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>Google News RSS Feeds</span>
                </div>
                <p className="text-zinc-400">
                  The App fetches publicly available RSS feeds from Google News to deliver live news headlines from Bangladeshi publishers. No personal identifiers are transmitted during these requests.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-teal-400" />
                  <span>Original Publisher Websites</span>
                </div>
                <p className="text-zinc-400">
                  When you tap on a flashcard to view the full article, the article is displayed via an in-app web browser directly from the publisher&apos;s website. The publisher&apos;s own privacy policy and cookie practices apply while viewing their webpage.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  <span>Google Play In-App Update API</span>
                </div>
                <p className="text-zinc-400">
                  The App checks Google Play Store services to determine whether a newer version of the App is available and to prompt mandatory updates.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                5
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Permissions Requested
              </h2>
            </div>
            <p>
              News App Flash requests only minimal, necessary system permissions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <code className="text-emerald-400 font-mono text-xs font-semibold">
                  android.permission.INTERNET
                </code>
                <p className="text-zinc-400">
                  Required to fetch news feeds and display news articles from publishers.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <code className="text-emerald-400 font-mono text-xs font-semibold">
                  android.permission.ACCESS_NETWORK_STATE
                </code>
                <p className="text-zinc-400">
                  Required to monitor network connectivity so the App can display offline notices and retry when internet is restored.
                </p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 pt-1">
              The App does <strong className="text-white">not</strong> request background location, storage access, microphone, camera, or telephony permissions.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                6
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Children&apos;s Privacy (COPPA Compliance)
              </h2>
            </div>
            <p>
              News App Flash is suitable for general audiences and does not knowingly collect any personal information from children under the age of 13 (or under 16 in certain jurisdictions).
            </p>
            <p className="text-zinc-400 text-xs">
              If you believe a child has provided us with personal information, please contact us immediately, and we will take appropriate measures.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                7
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Data Security
              </h2>
            </div>
            <p>
              Because we do not operate a backend server to store your personal data, your risk of server-side data breach is virtually non-existent. All network communications for news feeds are performed over encrypted HTTPS connections.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                8
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Changes to This Privacy Policy
              </h2>
            </div>
            <p>
              We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. We encourage you to review this page periodically.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center justify-center font-bold">
                9
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Contact Us
              </h2>
            </div>
            <p>
              If you have any questions, feedback, or concerns regarding this Privacy Policy, please contact us:
            </p>
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-zinc-500 block">Company:</span>
                <span className="text-white font-medium text-sm">Algoel Technologies</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Developer:</span>
                <span className="text-white font-medium text-sm">Azizur Rahaman</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Contact Email:</span>
                <a
                  href="mailto:frazizur.rahaman@gmail.com"
                  className="text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors"
                >
                  frazizur.rahaman@gmail.com
                </a>
                <span className="text-zinc-500 text-[11px] block mt-0.5">
                  Alternate: support@azizurrahaman.com
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block">Official Website:</span>
                <a
                  href="https://algoel.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium text-sm inline-flex items-center gap-1 transition-colors"
                >
                  <span>https://algoel.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* Action Footer Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-zinc-900 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">Experience News App Flash</h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Fast, swipe-based, clutter-free news flashcards for Bangladesh on Google Play.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs text-center transition-colors"
            >
              Back to Home
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=com.algoel.news_app_flash"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/50"
            >
              <span>Get on Google Play</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-zinc-500 pt-4">
          © {new Date().getFullYear()} Algoel Technologies. All rights reserved.
        </div>
      </main>
    </div>
  );
}
