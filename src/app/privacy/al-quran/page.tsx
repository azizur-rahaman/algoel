import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  HardDrive,
  Globe,
  Headphones,
  Smartphone,
  Mail,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  BookOpen,
  Calendar,
  Building,
  Sparkles,
  Volume2,
  Trash2,
  Bookmark,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Privacy Policy — Al-Qur'an Bangla | Algoel Technologies",
  description:
    "Official Privacy Policy for Al-Qur'an Bangla (com.algoel.alquran) by Algoel Technologies. Zero personal data collection, on-device bookmarks, multi-Qari audio streaming, and Google Play Store compliance.",
};

export default function AlQuranPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-amber-500 selection:text-white">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-amber-500/15 via-emerald-500/10 to-teal-500/15 blur-[140px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Algoel Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-black tracking-tight text-sm"
            >
              <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-amber-500 to-emerald-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#070a12] rounded-[5px] flex items-center justify-center">
                  <span className="text-amber-400 font-mono font-bold text-[10px]">▲</span>
                </div>
              </div>
              <span className="hidden sm:inline">ALGOEL</span>
            </Link>

            <a
              href="https://play.google.com/store/apps/details?id=com.algoel.alquran"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors shadow-sm"
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
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-[11px] font-mono uppercase tracking-wider text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Google Play Store Compliance Document</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-emerald-800 flex items-center justify-center text-white shadow-xl shadow-amber-950/50">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    Privacy Policy for Al-Qur&apos;an Bangla
                  </h1>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
                    Package ID: com.algoel.alquran
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs">
              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>Effective Date</span>
                </div>
                <div className="text-white font-medium">October 14, 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>Last Updated</span>
                </div>
                <div className="text-white font-medium">October 14, 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <Building className="w-3 h-3 text-amber-400" />
                  <span>Developer</span>
                </div>
                <div className="text-white font-medium">Algoel Technologies</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="text-zinc-500 text-[11px] font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-amber-400" />
                  <span>Ad-Free Status</span>
                </div>
                <div className="text-amber-400 font-medium">100% Free & No Ads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary Cards */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Executive Privacy Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <EyeOff className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">Zero Account & No PII</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                No sign-up, email, phone number, login, or name required. You can read and listen to the Holy Qur&apos;an with complete anonymity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <HardDrive className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">100% On-Device Storage</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Your bookmarks, favorite ayahs, reciter preferences, and reading history are stored exclusively inside your phone&apos;s private sandbox.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Volume2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm">Sacred & Ad-Free</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Zero advertisements, zero behavioral trackers, and zero monetization popups. Pure spiritual focus and reverent study.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <div className="space-y-8 text-zinc-300 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-amber-400 font-mono text-xs">01.</span>
              Introduction & Sacred Trust
            </h2>
            <p>
              This Privacy Policy explains how <strong>Algoel Technologies</strong> (&quot;Algoel&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles your data in connection with the mobile application <strong>Al-Qur&apos;an Bangla</strong> (Package ID: <code className="text-amber-300 font-mono bg-zinc-950 px-1.5 py-0.5 rounded border border-white/10">com.algoel.alquran</code>).
            </p>
            <p>
              We view publishing Islamic digital resources as a solemn spiritual responsibility and a sacred trust. Our guiding architectural principle is <strong>complete user privacy and reverence</strong>. Al-Qur&apos;an Bangla does not collect, monetize, sell, or profile any personal data.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-amber-400 font-mono text-xs">02.</span>
              Data We Do NOT Collect
            </h2>
            <p>
              To ensure absolute peace of mind, our application is engineered with the following data boundaries:
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Personal Identifiable Information (PII):</strong> We do not ask for or collect your name, email address, phone number, address, or national identity.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Account Authentication:</strong> The app does not require Google Sign-In, social logins, or custom credentials. You can access every feature immediately upon install.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Location Tracking:</strong> We do not request or access GPS, coarse location, or cell-tower triangulations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Device Fingerprinting:</strong> We do not read hardware serial numbers, IMEI, MAC addresses, or contact books.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Advertising Trackers:</strong> We do not integrate ad networks (AdMob, Meta Audience Network, Unity Ads, etc.) and do not display third-party advertisements.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-amber-400 font-mono text-xs">03.</span>
              Device Permissions & Technical Justifications
            </h2>
            <p>
              Under Google Play Developer Guidelines, we disclose every runtime and manifest permission requested by <code className="text-amber-300 font-mono bg-zinc-950 px-1 py-0.5 rounded">com.algoel.alquran</code> along with its strict functional purpose:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">android.permission.INTERNET</span>
                  <span className="text-zinc-500">Core Network</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Required solely to fetch Surah translation data and stream high-quality Arabic recitation audio from public Islamic content delivery networks (CDNs).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">android.permission.ACCESS_NETWORK_STATE</span>
                  <span className="text-zinc-500">Connectivity</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Used by our network listener to determine whether active Wi-Fi or cellular connectivity is present before attempting to buffer audio recitations, avoiding unexpected playback failures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">android.permission.FOREGROUND_SERVICE</span>
                  <span className="text-zinc-500">Media Playback</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Required on modern Android versions to allow continuous recitation playback when the user switches apps or turns off the screen.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK</span>
                  <span className="text-zinc-500">Android 14+ Audio</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Complies with Android 14 requirements to declare media playback specifically for Quran audio recitation sessions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">android.permission.WAKE_LOCK</span>
                  <span className="text-zinc-500">Power Management</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Ensures the audio decoding thread remains uninterrupted while playing verses with the screen locked.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">android.permission.POST_NOTIFICATIONS</span>
                  <span className="text-zinc-500">System Notification (Android 13+)</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Strictly utilized to display the standard Android media playback notification tile with Play, Pause, Next Ayah, and Previous Ayah controls. We never send promotional, marketing, or spam push notifications.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-amber-400 font-mono text-xs">04.</span>
              Local On-Device Data Storage
            </h2>
            <p>
              Any state created while using Al-Qur&apos;an Bangla resides strictly on your physical device using Android&apos;s encrypted <code className="text-amber-300 font-mono bg-zinc-950 px-1 py-0.5 rounded">SharedPreferences</code> enclave:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bookmarks & Favorite Verses</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Saved Surah numbers and Ayah indices you mark for personal reflection or memorization.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Last-Read Position</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Automatically stores your current reading location so you can resume recitation seamlessly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <Headphones className="w-3.5 h-3.5 text-amber-400" />
                  <span>Reciter Preference & Audio Speed</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Your chosen Qari (e.g. Mishary Rashid Alafasy) and preferred playback speed (e.g. 1.0x).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-semibold text-xs">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Zero Cloud Sync or Telemetry</span>
                </div>
                <p className="text-xs text-zinc-400">
                  None of this data is ever transmitted to Algoel servers or any third-party analytics provider.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-amber-400 font-mono text-xs">05.</span>
              Audio Streaming & Public CDNs
            </h2>
            <p>
              Audio recitations are streamed on-demand from reputable public Islamic repositories (such as EveryAyah, Quran Central, and official recitation archives). When you play an Ayah:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-zinc-300">
              <li>Your device initiates a direct, secure HTTPS request to stream the standard MP3 audio segment for the chosen verse.</li>
              <li>No user account, phone identifier, or demographic telemetry is attached to these audio fetch requests.</li>
              <li>Cached audio files may be temporarily stored in your app&apos;s internal cache directory to avoid repeated bandwidth consumption on subsequent replays.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-amber-400 font-mono text-xs">06.</span>
              Google Play Families Policy & Children&apos;s Privacy (COPPA)
            </h2>
            <p>
              Al-Qur&apos;an Bangla is an educational and spiritual application suitable for users of all ages, including children under 13. We strictly adhere to the <strong>Children&apos;s Online Privacy Protection Act (COPPA)</strong> and the <strong>Google Play Families Policy</strong>:
            </p>
            <ul className="space-y-2 text-xs text-zinc-300 pl-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>We do not knowingly collect personal information from children or adults.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>There are zero interactive chatrooms, user messaging systems, or unmoderated community features.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>There are zero third-party behavioral ads, microtransactions, or in-app purchases.</span>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-amber-400 font-mono text-xs">07.</span>
              Data Retention & User Deletion Rights
            </h2>
            <p>
              Because all data is stored locally on your device, you have complete and immediate control over its retention:
            </p>
            <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <Trash2 className="w-4 h-4" />
                <span>How to Erase All App Data</span>
              </div>
              <p className="text-zinc-400">
                You can delete all saved bookmarks, reading history, and audio cache at any time by going to:
                <br />
                <code className="text-zinc-200 font-mono">Android Settings → Apps → Al-Qur&apos;an Bangla → Storage → Clear Storage / Clear Cache</code>.
                <br />
                Uninstalling the application automatically and permanently destroys all local data sandbox files from your device.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-amber-400 font-mono text-xs">08.</span>
              Security Safeguards
            </h2>
            <p>
              Even though we do not host personal data on external servers, we maintain high engineering security standards:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-zinc-300">
              <li><strong>Encrypted Transport (HTTPS/TLS):</strong> All network calls to fetch Surah texts and audio recitations use TLS 1.3 encryption.</li>
              <li><strong>App Sandbox Isolation:</strong> SharedPreferences and cached audio files are stored in Android&apos;s isolated private application sandbox, preventing unauthorized access from other apps.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-amber-400 font-mono text-xs">09.</span>
              Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect enhancements to our application or changes in regulatory standards. Any modifications will be posted directly to this URL with an updated revision date.
            </p>
          </section>

          {/* Section 10 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-white/10 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2.5">
              <span className="text-amber-400 font-mono text-xs">10.</span>
              Contact Information & Developer Entity
            </h2>
            <p>
              If you have any questions, feedback, or concerns regarding this Privacy Policy or the data practices of Al-Qur&apos;an Bangla, please contact our engineering and privacy team:
            </p>
            <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5 space-y-2 text-xs">
              <p className="text-white font-semibold">Algoel Technologies</p>
              <p className="text-zinc-400">Developer: Azizur Rahaman</p>
              <p className="text-zinc-400">Dhaka, Bangladesh</p>
              <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-white/5">
                <a
                  href="mailto:frazizur.rahaman@gmail.com"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-mono"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>frazizur.rahaman@gmail.com</span>
                </a>
                <span className="hidden sm:inline text-zinc-600">•</span>
                <a
                  href="mailto:support@azizurrahaman.com"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-mono"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>support@azizurrahaman.com</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-zinc-900/60 to-emerald-950/40 border border-white/10 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Experience Al-Qur&apos;an Bangla on Google Play</h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Read all 114 Surahs with Bengali translation, word-by-word meanings, and multi-Qari audio recitation in a reverent, completely ad-free mobile environment.
          </p>
          <div className="pt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.algoel.alquran"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-amber-950/50"
            >
              <span>View on Google Play Store</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
