'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/data/company';
import { Send, CheckCircle2, Sparkles, Mail, MessageSquare, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'publish' | 'careers' | 'general'>('publish');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    appNameOrRole: '',
    storeLink: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      appNameOrRole: '',
      storeLink: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#05070c] border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect With Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Let&apos;s Build the Next{' '}
            <span className="text-gradient-cyan">Global #1 App.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            Whether you have a breakthrough mobile prototype seeking publishing, want to join our studio, 
            or have an inquiry, our executive team reads every note.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="p-1 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-md flex flex-wrap gap-1">
            <button
              onClick={() => {
                setActiveTab('publish');
                setSubmitted(false);
              }}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'publish'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Co-Publish Your App
            </button>
            <button
              onClick={() => {
                setActiveTab('careers');
                setSubmitted(false);
              }}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'careers'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Join Our Studio
            </button>
            <button
              onClick={() => {
                setActiveTab('general');
                setSubmitted(false);
              }}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'general'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Press & Inquiries
            </button>
          </div>
        </div>

        {/* Contact Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-xl shadow-2xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Message Received by Algoel
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our studio publishing directors review every submission within 24–48 hours.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                  />
                </div>
              </div>

              {activeTab === 'publish' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      App Name or Concept
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lumina Video Editor"
                      value={formData.appNameOrRole}
                      onChange={(e) => setFormData({ ...formData, appNameOrRole: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      TestFlight / App Store / Play Store Link
                    </label>
                    <input
                      type="url"
                      placeholder="https://testflight.apple.com/join/..."
                      value={formData.storeLink}
                      onChange={(e) => setFormData({ ...formData, storeLink: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'careers' && (
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Primary Discipline / Role of Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Senior iOS Engineer (Swift 6), Staff GPU Metal Shader Designer"
                    value={formData.appNameOrRole}
                    onChange={(e) => setFormData({ ...formData, appNameOrRole: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  {activeTab === 'publish'
                    ? 'Tell Us About Your App & Current Metrics'
                    : activeTab === 'careers'
                    ? 'Why Algoel? Tell Us About Your Craft'
                    : 'Your Message'}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={
                    activeTab === 'publish'
                      ? 'Briefly describe the product, current retention/downloads, and what support you are seeking (design, ASO, capital, global publishing)...'
                      : 'Share your background, links to apps you built, or any questions...'
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-zinc-400 text-center sm:text-left">
                  Direct contact:{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.partnershipEmail}`}
                    className="text-cyan-400 font-mono hover:underline"
                  >
                    {COMPANY_INFO.partnershipEmail}
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
