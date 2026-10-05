'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, RotateCcw } from 'lucide-react';

interface ContactFormProps {
  recipientEmail: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ recipientEmail }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      category: 'General Inquiry',
      subject: '',
      message: '',
    });
  };

  if (submitted) {
    return (
      <div className="py-10 text-center space-y-4 rounded-2xl bg-zinc-950/60 border border-white/5 animate-in fade-in duration-300">
        <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">
          Message Successfully Transmitted
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed px-4">
          Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry under{' '}
          <span className="text-cyan-400 font-medium">{formData.category}</span> has been logged. Our developer team at Algoel will get back to you at{' '}
          <strong className="text-white">{formData.email}</strong> within 24 to 48 hours.
        </p>
        <div className="pt-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Send Another Message</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Azizur Rahaman"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
            Your Email *
          </label>
          <input
            type="email"
            required
            placeholder="you@domain.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
            Inquiry Category
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition-colors"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Google Play & App Support">Google Play &amp; App Support</option>
            <option value="News & Magazine App Declaration">News &amp; Magazine App Declaration</option>
            <option value="Publisher & Co-Publishing">Publisher &amp; Co-Publishing</option>
            <option value="Privacy & Legal Compliance">Privacy &amp; Legal Compliance</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
            Subject
          </label>
          <input
            type="text"
            placeholder="Brief summary of inquiry"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
          Message *
        </label>
        <textarea
          rows={4}
          required
          placeholder="Please write your inquiry or verification details here..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition-colors resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
        <p className="text-[11px] text-zinc-500 text-center sm:text-left">
          Direct email: <a href={`mailto:${recipientEmail}`} className="text-cyan-400 underline">{recipientEmail}</a>
        </p>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
        >
          <span>Send Message</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
};
