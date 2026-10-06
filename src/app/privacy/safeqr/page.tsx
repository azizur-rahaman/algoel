import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  HardDrive,
  Globe,
  Camera,
  Smartphone,
  Mail,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  QrCode,
  Calendar,
  Building,
  Sparkles,
  FileText,
  Vibrate,
  Trash2,
  FolderOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — SafeQR | Algoel Technologies',
  description:
    'Official Privacy Policy for SafeQR (com.algoel.safeqr_qr_and_barcode_scanner) by Algoel Technologies. Zero personal data collection, on-device offline processing, and Google Play Store compliance.',
};

export default function SafeQRPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-cyan-500 selection:text-white">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-indigo-600/15 blur-[140px] pointer-events-none" />

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

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-black tracking-tight text-sm"
            >
              <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#070a12] rounded-[5px] flex items-center justify-center">
                  <span className="text-cyan-400 font-mono font-bold text-[10px]">▲</span>
                </div>
              </div>
              <span className="hidden sm:inline">ALGOEL</span>
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=com.algoel.safeqr_qr_and_barcode_scanner"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors shadow-sm"
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
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Google Play Store Compliance Document</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 flex items-center justify-center text-white shadow-xl shadow-blue-950/50">
                  <QrCode className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    Privacy Policy for SafeQR
                  </h1>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
                    Package ID: com.algoel.safeqr_qr_and_barcode_scanner
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs">
              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span>Effective Date</span>
                </div>
                <div className="text-white font-medium">October 6, 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span>Last Updated</span>
                </div>
                <div className="text-white font-medium">October 6, 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Building className="w-3 h-3 text-cyan-400" />
                  <span>Developer</span>
                </div>
                <div className="text-white font-medium">Algoel Technologies</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-cyan-400" />
                  <span>Contact</span>
                </div>
                <div className="text-cyan-400 font-medium truncate">
                  frazizur.rahaman@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <EyeOff className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Zero Personal Data Collected</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                No user accounts, no passwords, no email or phone requirements, and zero behavioral tracking.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <HardDrive className="w-5 h-5 text-blue-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">100% On-Device Processing</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All QR recognition, generation, and history logging happen locally on your smartphone hardware.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Zero Cloud Telemetry</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We operate no external tracking servers. Your camera frames and scan contents never leave your device.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Legal Sections */}
        <div className="space-y-8 bg-zinc-900/30 border border-white/10 rounded-3xl p-6 sm:p-10 text-zinc-300 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                1
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Introduction
              </h2>
            </div>
            <p>
              At <strong className="text-white">Algoel Technologies</strong> (&ldquo;Algoel&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we believe privacy is a fundamental human right. This Privacy Policy outlines our strict privacy practices regarding the mobile application <strong className="text-white">SafeQR — Fast &amp; Secure QR and Barcode Scanner</strong> (the &ldquo;App&rdquo;, package identifier: <code className="text-cyan-300 font-mono text-xs">com.algoel.safeqr_qr_and_barcode_scanner</code>).
            </p>
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-200 text-xs flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Privacy-First &amp; Offline Architecture:</strong> SafeQR is engineered as a standalone, offline-first mobile utility. We do not require registration, do not collect personal identifiers, and do not transmit camera video feeds or scanned contents to any remote cloud servers.
              </span>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                2
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Information We Do NOT Collect
              </h2>
            </div>
            <p>
              We adhere strictly to data minimization. SafeQR <strong className="text-white">does not collect, harvest, store, or sell</strong> any of the following:
            </p>
            <ul className="space-y-2 pl-2">
              {[
                'Personal Identifiable Information (PII) including your legal name, email address, physical address, phone number, or government IDs.',
                'Account credentials, usernames, biometric identifiers, or passwords.',
                'GPS or network-based geographic location coordinates.',
                'Camera video recordings, photo albums, or raw imagery (camera frames are processed purely in ephemeral device RAM for instant decoding and discarded immediately).',
                'Device contact lists, audio microphone feeds, SMS messages, or call logs.',
                'Advertising identifiers (GAID / IDFA), behavioral telemetry, or third-party tracking cookies.',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                3
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Android System Permissions &amp; How They Are Used
              </h2>
            </div>
            <p>
              To deliver core QR and barcode scanning and generation features, SafeQR requires access to specific operating system capabilities. Every permission is purpose-bound and strictly governed:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Camera */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-cyan-400" />
                  <code className="text-cyan-400 font-mono font-semibold">android.permission.CAMERA</code>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  <strong className="text-white">Purpose:</strong> Provides the live camera viewfinder needed to detect and decode optical QR codes and barcodes. Frames are analyzed 100% locally on your device using on-device ML/computer vision. No video frames, photographs, or recordings are saved, stored, or sent over any network.
                </p>
              </div>

              {/* Photos / Gallery Picker */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-blue-400" />
                  <code className="text-blue-400 font-mono font-semibold">READ_MEDIA_IMAGES / Gallery</code>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  <strong className="text-white">Purpose:</strong> Triggered only when you tap &ldquo;Scan from Image&rdquo; to pick a saved screenshot or picture from your photo gallery. SafeQR accesses only the specific file you pick to extract code text in memory.
                </p>
              </div>

              {/* Save to Gallery */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-emerald-400" />
                  <code className="text-emerald-400 font-mono font-semibold">Save to Photo Gallery</code>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  <strong className="text-white">Purpose:</strong> Used only when you tap &ldquo;Save to Gallery&rdquo; on a custom-generated QR code. The app saves the high-resolution QR image directly into your device pictures folder.
                </p>
              </div>

              {/* Vibration */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Vibrate className="w-4 h-4 text-amber-400" />
                  <code className="text-amber-400 font-mono font-semibold">android.permission.VIBRATE</code>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  <strong className="text-white">Purpose:</strong> Delivers tactile haptic micro-vibrations upon a successful scan or button press. You can disable haptic feedback at any time in the app&apos;s Settings menu.
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 pt-1">
              SafeQR does <strong className="text-white">not</strong> request microphone, background location, contact access, phone state, or audio recording permissions.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                4
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                On-Device Data Storage &amp; User Control
              </h2>
            </div>
            <p>
              SafeQR stores application data exclusively on your device&apos;s private sandbox storage using Android <code className="text-cyan-300 font-mono text-xs">SharedPreferences</code>:
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Scan &amp; Creation History</span>
                </h3>
                <p className="text-zinc-400">
                  When you scan or generate a QR code, the decoded text, code format, timestamp, and optional title are stored locally in your private history database. This information is accessible only to you and is never synchronized to an external cloud.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-blue-400" />
                  <span>JSON Export &amp; Import</span>
                </h3>
                <p className="text-zinc-400">
                  You maintain full data portability. You can export your entire history ledger to a portable JSON backup file at any time via Settings &gt; &ldquo;Export to JSON&rdquo;, or restore it via &ldquo;Import from JSON&rdquo;.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <Trash2 className="w-4 h-4 text-rose-400" />
                  <span>One-Tap History Erasure</span>
                </h3>
                <p className="text-zinc-400">
                  You can permanently delete individual entries or purge your entire scan and generation history instantly by tapping &ldquo;Clear History&rdquo; under Settings &gt; Data. Clearing data or uninstalling the app permanently wipes all stored records from your device.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                5
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Third-Party Libraries &amp; External Web Links
              </h2>
            </div>
            <p>
              SafeQR is built using trusted, open-source software development frameworks:
            </p>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  <span>Flutter &amp; Dart SDK (Google LLC)</span>
                </div>
                <p className="text-zinc-400">
                  The client application engine used to render the user interface across Android devices.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <QrCode className="w-4 h-4 text-blue-400" />
                  <span>Mobile Scanner &amp; QR Flutter Open Source Engines</span>
                </div>
                <p className="text-zinc-400">
                  Open-source barcode scanning and QR vector generation libraries. These libraries operate entirely on-device without remote telemetry or network callbacks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>External Web Links in Scanned Codes</span>
                </div>
                <p className="text-zinc-400">
                  If a scanned QR code contains a website URL, SafeQR displays the URL for your review before opening it. If you choose to tap &ldquo;Open URL&rdquo;, your default web browser (e.g., Chrome) will navigate to that website. That third-party website is governed by its own independent privacy policy.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                6
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Children&apos;s Privacy (COPPA &amp; GDPR-K Compliance)
              </h2>
            </div>
            <p>
              SafeQR is designed for general audiences and contains no age-restricted content or behavioral tracking. We do not knowingly solicit, collect, or store personal information from children under the age of 13 (or under 16 in the European Union).
            </p>
            <p className="text-zinc-400 text-xs">
              Because our application does not collect any user data at all, parents can be assured that children using SafeQR are protected from online data harvesting. If you have questions, please reach out via our contact channels.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                7
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Data Security
              </h2>
            </div>
            <p>
              Because SafeQR operates offline and does not maintain a central database or cloud repository of your QR scans, your risk of a server-side data breach or third-party credential compromise is zero. All data is protected by your smartphone operating system&apos;s sandbox security.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                8
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Changes to This Privacy Policy
              </h2>
            </div>
            <p>
              We may revise this Privacy Policy periodically to reflect updates in app functionality or regulatory compliance standards. Changes become effective immediately upon posting to this official URL with an updated &ldquo;Last Updated&rdquo; date.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                9
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Developer &amp; Contact Details
              </h2>
            </div>
            <p>
              If you have any questions, feedback, or concerns regarding this Privacy Policy or our privacy practices, please contact us directly:
            </p>
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-zinc-500 block">Publisher / Studio:</span>
                <span className="text-white font-medium text-sm">Algoel Technologies</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Developer:</span>
                <span className="text-white font-medium text-sm">Azizur Rahaman</span>
              </div>
              <div>
                <span className="text-zinc-500 block">Official Support Email:</span>
                <a
                  href="mailto:frazizur.rahaman@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
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
                  href="https://algoel.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm inline-flex items-center gap-1 transition-colors"
                >
                  <span>https://algoel.vercel.app</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Action Footer Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-zinc-900 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">Download SafeQR on Google Play</h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Blazing-fast, private, and offline QR scanning and code generation for Android.
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
              href="https://play.google.com/store/apps/details?id=com.algoel.safeqr_qr_and_barcode_scanner"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-cyan-950/50"
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
