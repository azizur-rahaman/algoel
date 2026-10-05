'use client';

import React from 'react';
import Link from 'next/link';

export const AccoladesSection: React.FC = () => {
  return (
    <section
      id="workplaces"
      data-nav-theme="green"
      className="w-full bg-[#72E5FF] py-20 sm:py-28 md:py-36 text-black transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col items-center justify-center px-6 lg:px-16 max-w-7xl">
        {/* 3 Badges Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl">
          {/* Card 1: Official Google Play Publisher */}
          <div className="flex flex-col items-center justify-center rounded-[36px] md:rounded-[40px] py-8 md:p-10 text-center">
            <div className="h-24 sm:h-28 flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-black">
                6
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-black/60 mt-1">
                Published Apps
              </span>
            </div>
            <p className="pt-6 text-center text-xl sm:text-22 font-semibold tracking-tight text-black">
              Official Google Play Publisher
            </p>
            <p className="text-xs text-black/70 mt-1">
              Active production Android releases
            </p>
          </div>

          {/* Card 2: 4.64★ Store Rating (Center White Card with bottom mask fade) */}
          <div className="flex flex-col items-center justify-center rounded-[32px] md:rounded-[48px] bg-white p-8 md:p-12 shadow-2xl overflow-hidden relative border border-black/5 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-black/50 mb-2">
              AUDITED STORE SCORE
            </span>

            <div className="text-5xl sm:text-6xl font-black text-black tracking-tight mb-2">
              4.64 <span className="text-amber-500">★</span>
            </div>

            <p className="text-sm font-semibold text-black mb-6">
              Average Mobile Store Rating
            </p>

            <div className="w-full space-y-2 text-left pt-4 border-t border-black/5 mask-b-fade">
              <div className="p-3 rounded-xl bg-black/5 text-xs text-black/80">
                <span className="font-bold">Lenden:</span> “5.0★ Perfect rating for P2P handshake & ledger accuracy.”
              </div>
              <div className="p-3 rounded-xl bg-black/5 text-xs text-black/80">
                <span className="font-bold">GhorLagbee:</span> “4.6★ Rated for direct owner calling without brokers.”
              </div>
            </div>
          </div>

          {/* Card 3: Privacy & Security */}
          <div className="flex flex-col items-center justify-center rounded-[36px] md:rounded-[40px] py-8 md:p-10 text-center">
            <div className="h-24 sm:h-28 flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-black">
                100%
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-black/60 mt-1">
                Verified & Private
              </span>
            </div>
            <p className="pt-6 text-center text-xl sm:text-22 font-semibold tracking-tight text-black">
              Privacy by Design
            </p>
            <p className="text-xs text-black/70 mt-1">
              Zero ad tracking • End-to-end data ownership
            </p>
          </div>
        </div>

        {/* Big Bold Pill CTA Button */}
        <div className="mt-16 md:mt-24 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-black bg-black px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-semibold text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black shadow-lg hover:shadow-xl active:scale-95"
          >
            Get in touch with Algoel
          </Link>
        </div>
      </div>
    </section>
  );
};
