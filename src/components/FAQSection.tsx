'use client';

import React, { useState } from 'react';
import { FAQS_DATA } from '@/data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Publishing & Partnerships', 'Apps & Support', 'Careers'];

  const filteredFaqs =
    selectedCategory === 'All'
      ? FAQS_DATA
      : FAQS_DATA.filter((item) => item.category === selectedCategory);

  const toggleQuestion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="relative py-24 bg-zinc-950/80 border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Frequently Asked{' '}
            <span className="text-gradient-cyan">Questions.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            Everything you need to know about our apps, publishing criteria, engineering standards, and career opportunities.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-white font-semibold shadow-sm'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-zinc-900/40 border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-zinc-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Help Strip */}
        <div className="mt-12 text-center text-xs text-zinc-400">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="#contact" className="text-cyan-400 font-semibold hover:underline">
            Reach out directly to our studio team →
          </a>
        </div>

      </div>
    </section>
  );
};
