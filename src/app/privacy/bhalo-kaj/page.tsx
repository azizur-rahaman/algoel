import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  HardDrive,
  Heart,
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
  Smartphone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — Bhalo Kaj (ভালো কাজ) | Algoel Technologies',
  description:
    'Official Privacy Policy for Bhalo Kaj (com.algoel.bhalokaj) by Algoel Technologies. 100% offline-first good deeds tracking, on-device Drift SQLite database, zero personal data collection, and Google Play Store compliance.',
};

export default function BhaloKajPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-emerald-500 selection:text-white">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-amber-500/15 blur-[140px] pointer-events-none" />

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
              href="https://play.google.com/store/apps/details?id=com.algoel.bhalokaj"
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-700 to-amber-600 flex items-center justify-center text-white shadow-xl shadow-emerald-950/50">
                  <Heart className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    Privacy Policy for Bhalo Kaj (ভালো কাজ)
                  </h1>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
                    Package ID: com.algoel.bhalokaj
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
                <div className="text-white font-medium">October 16, 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span>Last Updated</span>
                </div>
                <div className="text-white font-medium">October 16, 2026</div>
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
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Ad-Free Status</span>
                </div>
                <div className="text-emerald-400 font-medium">100% Free & No Ads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary Cards */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Executive Privacy Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <EyeOff className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">Zero Account & No PII</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                No sign-up, phone number, email address, password, or login required. You can record good deeds with complete anonymity and tranquility.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <HardDrive className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">100% On-Device Drift SQLite</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All deed entries, custom descriptions, and timestamps are stored exclusively in your local on-device SQLite database. Nothing ever leaves your phone.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">100% Ad-Free & Offline</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Zero third-party advertisement SDKs, zero behavioral trackers, and zero telemetry analytics. Works entirely without an active internet connection.
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
              Introduction & Core Philosophy
            </h2>
            <p>
              This Privacy Policy explains how <strong>Algoel Technologies</strong> (&quot;Algoel&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles your data in connection with the mobile application <strong>Bhalo Kaj (ভালো কাজ)</strong> (Package ID: <code className="text-emerald-300 font-mono bg-zinc-950 px-1.5 py-0.5 rounded border border-white/10">com.algoel.bhalokaj</code>).
            </p>
            <p>
              We believe daily acts of benevolence, moral mindfulness, and kindness are intimate personal journeys. Our founding design principle is <strong>absolute privacy by architecture</strong>. Bhalo Kaj is intentionally built as an offline-first utility that operates independently of cloud servers. We do not collect, monetize, sell, or profile your daily deeds.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">02.</span>
              Data We Do NOT Collect
            </h2>
            <p>
              To ensure complete user sovereignty, the Bhalo Kaj application is engineered with strict technical boundaries:
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Personally Identifiable Information (PII):</strong> We never collect, transmit, or ask for your name, phone number, physical address, national ID, or email address.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Account Registration:</strong> The app does not require account creation, password setup, or third-party authentication (Google, Apple, Facebook).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Cloud Deed Synchronization:</strong> Your recorded good deeds are never transmitted to any external server, cloud bucket, or remote API endpoint.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Location Tracking:</strong> The app does not request or access GPS coordinates, Wi-Fi BSSIDs, or coarse cell-tower triangulations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Biometric or Sensor Logging:</strong> We do not monitor accelerometer, gyroscope, microphone, or camera inputs.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">03.</span>
              Local On-Device Data Storage (Drift SQLite)
            </h2>
            <p>
              All application data is managed locally using a secure SQLite database powered by Drift (formerly Moor):
            </p>
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-2 text-xs">
              <div className="font-mono text-emerald-400 font-semibold">Local Deeds Ledger (DeedsTable v2):</div>
              <ul className="list-disc list-inside space-y-1 text-zinc-400">
                <li><code className="text-zinc-200">id</code>: Unique auto-incrementing integer key.</li>
                <li><code className="text-zinc-200">date</code>: Date string formatted as YYYY-MM-DD for calendar heatmap indexing.</li>
                <li><code className="text-zinc-200">description</code>: Optional custom text description of the good deed (or selected quick suggestion).</li>
                <li><code className="text-zinc-200">timestamp</code>: Exact local timestamp when the deed was logged.</li>
              </ul>
            </div>
            <p>
              This data resides strictly inside the app&apos;s private sandboxed storage allocated by the operating system (Android / iOS / macOS). Other installed applications on your device cannot access this database.
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">04.</span>
              Device Permissions &amp; File Generation
            </h2>
            <p>
              Bhalo Kaj requires minimal operating system capabilities to function, each strictly tied to explicit user-initiated actions:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>PDF Report Export &amp; Downloads Directory Access</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  When you tap the <strong>&quot;ডাউনলোড&quot; (Download)</strong> button in the Monthly Report sheet, the app synthesizes a multi-page PDF document locally on your CPU using Google Noto Sans Bengali vector fonts. The resulting <code className="text-emerald-300 font-mono">.pdf</code> file is written directly to your device&apos;s standard Downloads folder. This storage interaction is scoped purely to writing your requested document.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <Share2 className="w-4 h-4 text-teal-400" />
                  <span>System Share Sheet Invocation</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  When you tap <strong>&quot;সরাসরি শেয়ার&quot; (Direct Share)</strong> or <strong>&quot;ইমেজ শেয়ার করুন&quot; (Share Image)</strong>, the app temporarily saves a rendered image or PDF to the system temporary cache directory and invokes your native operating system share dialogue. You maintain full discretion over which external application (WhatsApp, Telegram, Drive, Email) receives the file.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">05.</span>
              Zero Advertising &amp; Zero Third-Party SDKs
            </h2>
            <p>
              Many mobile apps monetize through aggressive tracking scripts and ad networks that profile your behavior. Bhalo Kaj strictly rejects this model:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Ad Networks:</strong> No Google AdMob, Unity Ads, AppLovin, or Meta Audience Network libraries exist in our build.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Analytics Trackers:</strong> No Google Analytics for Firebase, Mixpanel, Adjust, or AppsFlyer SDKs are bundled.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Commercial Sale of Data:</strong> We will never sell, rent, license, or broker your personal records to data brokers or marketing conglomerates.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">06.</span>
              User Rights, Data Retention &amp; Permanent Deletion
            </h2>
            <p>
              Because your deeds data is stored entirely on your device, you possess unilateral and complete control over its retention:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><strong>Itemized Deed Deletion:</strong> Tap on any day cell in the monthly heatmap to open the day deeds list, where you can individually delete any deed entry with one tap.</span>
              </li>
              <li className="flex items-start gap-2">
                <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><strong>Full App Reset:</strong> You can purge all application history instantaneously by clearing application data via your phone settings (<em>Settings &gt; Apps &gt; Bhalo Kaj &gt; Clear Storage</em>).</span>
              </li>
              <li className="flex items-start gap-2">
                <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><strong>Uninstall Removal:</strong> Uninstalling Bhalo Kaj removes 100% of the local SQLite database and associated preferences immediately. No ghost traces remain.</span>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">07.</span>
              Children&apos;s Privacy (COPPA &amp; Families Policy)
            </h2>
            <p>
              Bhalo Kaj is designed to cultivate empathy, kindness, and moral awareness in individuals of all age groups, including families and young children.
            </p>
            <p>
              In accordance with the <strong>Children&apos;s Online Privacy Protection Act (COPPA)</strong> and the <strong>Google Play Developer Families Policy</strong>:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>We do not knowingly collect personal information from children under the age of 13 (or under the applicable age of consent in your jurisdiction).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>No targeted advertising, age-gated paywalls, or behavioral profiling mechanisms are present in the software.</span>
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">08.</span>
              Policy Updates &amp; Amendments
            </h2>
            <p>
              We may revise this Privacy Policy periodically to reflect architectural enhancements or evolving legal standards. Any revisions will be published directly on this web page with an updated &quot;Last Updated&quot; timestamp. Since we do not collect email addresses, we encourage users to review this page periodically.
            </p>
          </section>

          {/* Section 9: Contact */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-zinc-900/50 to-zinc-950 border border-emerald-500/20 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">09.</span>
              Official Privacy Contact
            </h2>
            <p>
              If you have any questions, regulatory compliance inquiries, or suggestions regarding this Privacy Policy or our offline-first architecture, please contact our data protection team:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <div className="text-zinc-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Privacy Inquiries Email:</span>
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
                  <span>Publisher:</span>
                </div>
                <div className="text-white font-medium">
                  Algoel Technologies (Lead Dev: Azizur Rahaman)
                </div>
                <div className="text-zinc-500 text-[11px]">Dhaka, Bangladesh</div>
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
            <span>All Algoel Privacy Policies Directory</span>
          </Link>

          <div>
            © {new Date().getFullYear()} Algoel Technologies. All rights reserved.
          </div>
        </div>
      </main>
    </div>
  );
}
