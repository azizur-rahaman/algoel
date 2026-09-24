'use client';

import React, { useState } from 'react';
import { REVIEWS_DATA } from '@/data/reviews';
import { Star, MessageSquareQuote, CheckCircle, Apple, Shield } from 'lucide-react';

export const ReviewsWall: React.FC = () => {
  const [selectedAppFilter, setSelectedAppFilter] = useState<string>('All');

  const appNames = ['All', 'OmniFlow AI', 'PrismLens Pro', 'AuraPulse', 'VaultKey Zero', 'SonicWave Studio', 'Chronos Flow'];

  const filteredReviews =
    selectedAppFilter === 'All'
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.appName === selectedAppFilter);

  return (
    <section id="reviews" className="relative py-24 bg-zinc-950/80 border-t border-white/5 overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
            <MessageSquareQuote className="w-3.5 h-3.5 text-cyan-400" />
            <span>Store Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Loved by Over{' '}
            <span className="text-gradient-cyan">50 Million</span> Minds.
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            Real feedback from neurosurgeons, cinema directors, athletes, and daily users who depend on Algoel apps every single day.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {appNames.map((name) => (
            <button
              key={name}
              onClick={() => setSelectedAppFilter(name)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedAppFilter === name
                  ? 'bg-cyan-500 text-white font-semibold shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Header: Rating & Platform */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded-full bg-white/5 flex items-center gap-1 border border-white/5">
                    {review.platform.includes('Apple') ? ' App Store' : '▶ Google Play'}
                  </span>
                </div>

                {/* Review Title */}
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  &ldquo;{review.title}&rdquo;
                </h4>

                {/* Review Quote */}
                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  {review.review}
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-[11px] font-bold text-white">
                    {review.avatarText}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-1">
                      {review.author}
                      <span title={review.country}>{review.flag}</span>
                    </div>
                    <div className="text-[10px] text-zinc-400">{review.country}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] font-mono font-medium text-cyan-300">
                    {review.appName}
                  </div>
                  <div className="text-[9px] text-zinc-500">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Reach Highlight */}
        <div className="mt-14 text-center">
          <p className="text-xs text-zinc-400">
            Ratings continuously aggregated across all localized store fronts. Total verified reviews exceeding{' '}
            <strong className="text-white font-mono">340,000+</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};
