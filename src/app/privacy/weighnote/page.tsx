import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
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
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — WeighNote (ডিজিটাল ওজন খাতা) | Algoel Technologies',
  description:
    'Official Privacy Policy for WeighNote (com.algoel.weight_note) by Algoel Technologies. 100% offline-first digital weight ledger, on-device SQLite database, zero personal data collection, and Google Play Store compliance.',
};

export default function WeighNotePrivacyPage() {
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
              href="https://play.google.com/store/apps/details?id=com.algoel.weight_note"
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800 flex items-center justify-center text-white shadow-xl shadow-emerald-950/50">
                  <Scale className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    Privacy Policy for WeighNote (ডিজিটাল ওজন খাতা)
                  </h1>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
                    Package ID: com.algoel.weight_note
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
                <div className="text-white font-medium">October 25, 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span>Last Updated</span>
                </div>
                <div className="text-white font-medium">October 25, 2026</div>
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
                <div className="text-emerald-400 font-medium">100% Free &amp; No Ads</div>
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
              <h3 className="font-bold text-white text-sm">Zero Account &amp; No Sign-Up</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                No sign-up, login, password, or third-party authentication required. You can manage your trade records and weighing ledgers with absolute autonomy.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <HardDrive className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">100% On-Device SQLite</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All batch weight logs, serials, unit prices, and trade notes are saved strictly in your local device database (<code className="text-emerald-300 font-mono">weigh_note.db</code>). Nothing is ever uploaded to a remote server.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">100% Ad-Free &amp; Offline</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Zero third-party advertisement SDKs, zero behavioral trackers, and zero telemetry analytics. WeighNote functions seamlessly without an active internet connection.
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
              Introduction &amp; Core Philosophy
            </h2>
            <p>
              This Privacy Policy explains how <strong>Algoel Technologies</strong> (&quot;Algoel&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles data in connection with the mobile and web application <strong>WeighNote (ডিজিটাল ওজন খাতা)</strong> (Package ID: <code className="text-emerald-300 font-mono bg-zinc-950 px-1.5 py-0.5 rounded border border-white/10">com.algoel.weight_note</code>).
            </p>
            <p>
              WeighNote is specifically engineered for wholesale commodities, livestock, poultry markets, grain trading, and industrial batch weighing. In commercial and agricultural trade, business confidentiality—such as commodity weights, pricing agreements, customer records, and supplier transactions—is critically sensitive. Our foundational architectural principle is <strong>absolute privacy by design</strong>: WeighNote is an offline-first utility that operates strictly on your device. We do not collect, monetize, analyze, or broker your trade records.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">02.</span>
              Data We Do NOT Collect
            </h2>
            <p>
              To ensure full sovereignty and confidentiality over your commercial trade, WeighNote operates with strict technical boundaries:
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Personally Identifiable Information (PII):</strong> We never collect or transmit your national ID, banking credentials, passwords, or personal identity documents.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Mandatory Account Creation:</strong> The application does not require user registration, cloud profiles, or authentication through external social networks (Google, Apple, Facebook).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Cloud Weighing Logs:</strong> Your batch weight logs, session dates, unit prices, and customer invoice notes are never uploaded or synced to external servers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Location Tracking:</strong> The application does not request, track, or store your GPS coordinates or coarse network locations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Background Surveillance:</strong> We do not access your microphone, camera, or contact address book in the background.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">03.</span>
              Local On-Device Data Storage (SQLite)
            </h2>
            <p>
              All application data is maintained locally using a high-performance SQLite relational database (<code className="text-emerald-300 font-mono">weigh_note.db</code>):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-2">
                <div className="font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>Sessions Table:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li><code className="text-zinc-200">id</code>: Unique UUID v4 primary key.</li>
                  <li><code className="text-zinc-200">name</code>: Batch or session name (e.g., &quot;Chittagong Broiler Market&quot;).</li>
                  <li><code className="text-zinc-200">date</code>: Session timestamp.</li>
                  <li><code className="text-zinc-200">unit</code>: Selected measurement unit (kg, mon, lbs, ton).</li>
                  <li><code className="text-zinc-200">unit_price</code>: Negotiated unit price rate (৳).</li>
                  <li><code className="text-zinc-200">is_completed</code>: Finalized session lock flag.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-2">
                <div className="font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Receipt className="w-3.5 h-3.5" />
                  <span>Entries Table:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li><code className="text-zinc-200">id</code>: Unique entry UUID v4.</li>
                  <li><code className="text-zinc-200">session_id</code>: Foreign key linked to session.</li>
                  <li><code className="text-zinc-200">serial_number</code>: Sequential batch record count (#01, #02...).</li>
                  <li><code className="text-zinc-200">weight</code>: Recorded scale reading.</li>
                  <li><code className="text-zinc-200">pieces</code>: Item count (bags, crates, birds).</li>
                  <li><code className="text-zinc-200">created_at</code>: Exact entry timestamp.</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-zinc-400">
              Optional profile information you enter (your business trade name or contact phone for PDF headers) is saved exclusively into your device&apos;s sandboxed local storage (<code className="text-zinc-300 font-mono">SharedPreferences</code>) and is never transmitted off your device.
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">04.</span>
              Device Permissions &amp; PDF Report Generation
            </h2>
            <p>
              WeighNote requires minimal operating system interactions, each strictly initiated by explicit user command:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>PDF Ledger Invoice Generation &amp; Storage</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  When you tap the <strong>PDF Report</strong> icon in any weighing session, the app synthesizes a high-resolution, print-ready vector PDF report entirely on your local CPU. The resulting document displays your optional business header, itemized batch logs, Maund breakdown, and pricing calculations. The file is saved directly to your device&apos;s standard Downloads directory.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <Share2 className="w-4 h-4 text-teal-400" />
                  <span>Native System Share Sheet Invocation</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  When you choose to share a PDF invoice or weighing summary, WeighNote invokes your operating system&apos;s native share sheet. You retain full control over which external application (WhatsApp, Messenger, Email, Google Drive, or Bluetooth Printer) receives the generated report.
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
              Commercial ledger software must never compromise trade secrets or burden users with intrusive advertisements. WeighNote strictly adheres to a zero-surveillance standard:
            </p>
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
          </section>

          {/* Section 6 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">06.</span>
              Data Retention, Control &amp; Permanent Deletion
            </h2>
            <p>
              Because your weighing logs are stored locally on your device, you hold unilateral and total control over their lifecycle:
            </p>
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
                <span><strong>App Storage Purge:</strong> You can wipe all stored data at any time via your device settings (<em>Settings &gt; Apps &gt; WeighNote &gt; Clear Storage</em>).</span>
              </li>
              <li className="flex items-start gap-2">
                <Trash2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span><strong>Complete Removal on Uninstall:</strong> Uninstalling WeighNote instantly removes 100% of the local SQLite database and preferences from your device.</span>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">07.</span>
              Children&apos;s Privacy (COPPA Compliance)
            </h2>
            <p>
              WeighNote is a general-purpose commercial utility tool designed for traders, farmers, and business operators. In accordance with the <strong>Children&apos;s Online Privacy Protection Act (COPPA)</strong> and the <strong>Google Play Developer Families Policy</strong>:
            </p>
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
          </section>

          {/* Section 8 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">08.</span>
              Policy Updates &amp; Amendments
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect technological improvements or legal compliance standards. Any revisions will be published directly on this URL with an updated &quot;Last Updated&quot; date. We encourage users to inspect this document periodically.
            </p>
          </section>

          {/* Section 9: Contact */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-zinc-900/50 to-zinc-950 border border-emerald-500/20 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-emerald-400 font-mono text-xs">09.</span>
              Official Privacy &amp; Data Protection Contact
            </h2>
            <p>
              If you have any questions, compliance inquiries, or technical feedback regarding this Privacy Policy or WeighNote&apos;s offline architecture, please reach out directly:
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
