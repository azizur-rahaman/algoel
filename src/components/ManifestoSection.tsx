'use client';

import React from 'react';

const ALGOEL_MANIFESTO = [
  'Since 2023, we’ve been engineering high-utility digital products. Not to chase temporary hype, but to solve real daily friction and operate for the long term.',
  'The transformations we make are deep—from zero-middleman rental discovery and cryptographic P2P debt handshakes to Gemini-powered AI coursework tutors.',
  'Here, hierarchy is minimal, craft is non-negotiable, and every release runs with sub-100ms native speed, 60–120 FPS fluid motion, and zero user-tracking bloat.',
];

export const ManifestoSection: React.FC = () => {
  return (
    <section
      data-nav-theme="dark"
      className="w-full bg-black py-24 sm:py-32 md:py-48 transition-colors duration-500"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="flex flex-col gap-16 md:gap-28">
          {ALGOEL_MANIFESTO.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] text-white font-light tracking-[-0.02em] leading-[1.18] selection:bg-[#72E5FF] selection:text-black"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
