import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/data/company';
import {
  Mail,
  MapPin,
  Building2,
  ExternalLink,
  ArrowLeft,
  MessageSquare,
  Globe,
  Clock,
  ShieldCheck,
  Newspaper,
} from 'lucide-react';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Information & Entity Details | Algoel Technologies',
  description:
    'Official contact information, developer entity details, and support channels for Algoel Technologies (algoel). Direct email and address for Google Play and publisher inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-cyan-500 selection:text-white">
      {/* Background radial ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-indigo-500/15 blur-[150px] pointer-events-none" />

      {/* Top Header Navigation */}
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
              href={COMPANY_INFO.socials.googlePlay}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs transition-colors border border-white/10"
            >
              <span>Google Play Dev</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10 space-y-12">
        {/* Title Header Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Developer Entity & Official Contact Information</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Contact <span className="text-gradient-cyan">Algoel Technologies</span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
              Official contact point for <strong className="text-white">Algoel Technologies</strong> (developer account: <code className="text-cyan-300 font-mono text-xs bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30">algoel</code>). We maintain accessible, transparent contact channels for users, app store reviewers, publishers, and partners worldwide.
            </p>
          </div>
        </div>

        {/* Google Play News & Magazine Declaration Compliance Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-teal-950/20 to-zinc-900 border border-emerald-500/30 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  Google Play Policy Compliance
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  News &amp; Magazine Apps Declaration
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Entity Verification &amp; Developer Declaration
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                This page serves as the verified contact URL for our Google Play developer account (<strong className="text-white">algoel</strong>) and our flagship news reader application <strong className="text-white">News App Flash</strong> (<code className="text-emerald-300 font-mono text-xs">com.algoel.news_app_flash</code>). All inquiries regarding content, editorial standards, grievance redressal, and publisher verification are handled through the direct contact channels below.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/privacy/news-app-flash"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-emerald-200 font-semibold underline underline-offset-4"
                >
                  <Newspaper className="w-3.5 h-3.5" />
                  <span>View News App Flash Privacy Policy</span>
                </Link>
                <a
                  href="https://play.google.com/store/apps/details?id=com.algoel.news_app_flash"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-200 font-semibold underline underline-offset-4"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View News App Flash on Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Channel */}
          <div className="p-6 sm:p-7 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Direct Email Inquiries</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Primary contact for general inquiries, publisher verification, and store compliance.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-white/5">
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5">
                <div className="text-[11px] font-mono text-zinc-500 uppercase">Primary Contact</div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors block mt-0.5 break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5">
                <div className="text-[11px] font-mono text-zinc-500 uppercase">Technical &amp; Developer Support</div>
                <a
                  href={`mailto:${COMPANY_INFO.partnershipEmail}`}
                  className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors block mt-0.5 break-all"
                >
                  {COMPANY_INFO.partnershipEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Support & Response Desk */}
          <div className="p-6 sm:p-7 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Publisher &amp; Editorial Desk</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Dedicated desk for content feedback, press verification, and editorial grievance redressal.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-white/5">
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-medium text-white">
                  Email Response SLA
                </span>
                <span className="font-mono text-emerald-400 font-semibold">24–48 Hours</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5 text-xs text-zinc-400">
                <span>Verified Entity: </span>
                <span className="text-white font-medium">Algoel Technologies</span>
                <span className="text-zinc-500 block text-[11px] mt-0.5">Compliant with Google Play News App guidelines</span>
              </div>
            </div>
          </div>

          {/* Physical Location / Entity Details */}
          <div className="p-6 sm:p-7 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Registered Entity &amp; Headquarters</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Legal entity registration and engineering lab location.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-white/5 text-xs">
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5">
                <div className="text-[11px] font-mono text-zinc-500 uppercase">Legal Entity Name</div>
                <div className="text-sm font-semibold text-white mt-0.5">{COMPANY_INFO.legalName}</div>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">Account ID: algoel</div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5">
                <div className="text-[11px] font-mono text-zinc-500 uppercase">Lead Developer</div>
                <div className="text-sm font-semibold text-white mt-0.5">{COMPANY_INFO.developerName}</div>
                <div className="text-xs text-zinc-400 mt-0.5">Location: {COMPANY_INFO.headquarters}</div>
              </div>
            </div>
          </div>

          {/* Official Online Portals */}
          <div className="p-6 sm:p-7 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Official Online Presence</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Verified domains and official Google Play Store developer console.
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-white/5 text-xs">
              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">Website</div>
                  <div className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">https://algoel.vercel.app</div>
                </div>
                <a
                  href="https://algoel.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/70 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">Google Play Developer Profile</div>
                  <div className="text-xs font-semibold text-zinc-300 font-mono mt-0.5 truncate max-w-[220px]">
                    Algoel on Google Play
                  </div>
                </div>
                <a
                  href={COMPANY_INFO.socials.googlePlay}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Inquiries & Message Form */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>Send Direct Inquiry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Get in Touch with our Studio
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Fill out this message form to contact our developer and publishing directors directly. We typically respond within 24 to 48 hours.
            </p>
          </div>

          <ContactForm recipientEmail={COMPANY_INFO.email} />
        </div>

        {/* Published Apps Support Quick Links */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-white/5 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Dedicated App Support Directory
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <div className="font-semibold text-white">News App Flash</div>
              <div className="text-[11px] font-mono text-zinc-500">com.algoel.news_app_flash</div>
              <div className="pt-1">
                <Link
                  href="/privacy/news-app-flash"
                  className="text-emerald-400 hover:underline text-[11px]"
                >
                  Privacy Policy &rarr;
                </Link>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <div className="font-semibold text-white">Lenden</div>
              <div className="text-[11px] font-mono text-zinc-500">com.algoel.lenden</div>
              <div className="text-zinc-400 text-[11px]">Personal Financial Ledger</div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-white/5 space-y-1">
              <div className="font-semibold text-white">GhorLagbee</div>
              <div className="text-[11px] font-mono text-zinc-500">com.algoel.ghorlagbe</div>
              <div className="text-zinc-400 text-[11px]">Rental Property Discovery</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/privacy/news-app-flash" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hover:text-cyan-400 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
