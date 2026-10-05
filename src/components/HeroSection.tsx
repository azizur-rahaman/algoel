'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ALGOEL_PRODUCTS } from '@/data/algoelContent';
import { COMPANY_INFO, COMPANY_STATS } from '@/data/company';

export const HeroSection: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [radius, setRadius] = useState(380);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(210);
      } else if (window.innerWidth < 1024) {
        setRadius(300);
      } else {
        setRadius(420);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  useEffect(() => {
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isHovered) {
        setRotation((prev) => (prev + delta * 0.015) % 360);
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isHovered]);

  const cardCount = ALGOEL_PRODUCTS.length;

  return (
    <section
      data-nav-theme="dark"
      className="relative min-h-screen flex flex-col justify-between items-center bg-black pt-28 md:pt-36 pb-16 overflow-hidden select-none"
      suppressHydrationWarning
    >
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#72E5FF]/10 to-transparent blur-[150px] pointer-events-none rounded-full" />

      {/* Hero Display Headline */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#72E5FF] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#72E5FF] animate-ping" />
          <span>ALGOEL MOBILE STUDIO & DIGITAL PUBLISHING LAB</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] xl:text-[104px] font-normal leading-[1.04] tracking-[-0.03em] text-white">
          We <em className="font-serif italic text-[#72E5FF] tracking-tight font-normal">engineer</em>{' '}
          <br className="md:hidden" />
          and <em className="font-serif italic text-[#72E5FF] tracking-tight font-normal">scale</em>{' '}
          <br />
          iconic mobile products
        </h1>
      </div>

      {/* 3D Perspective Cylindrical Carousel */}
      <div
        className="relative z-10 w-full h-[320px] sm:h-[380px] md:h-[440px] flex items-center justify-center my-6 md:my-10 perspective-midrange transform-3d"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        suppressHydrationWarning
      >
        <div
          className="relative w-[180px] sm:w-[220px] md:w-[260px] h-[250px] sm:h-[300px] md:h-[350px] transform-3d transition-transform duration-75"
          style={{
            transform: `rotateX(-6deg) rotateY(${rotation}deg)`,
          }}
          suppressHydrationWarning
        >
          {ALGOEL_PRODUCTS.map((app, i) => {
            const angle = (360 / cardCount) * i;
            return (
              <div
                key={app.id}
                className="absolute inset-0 backface-hidden transform-3d rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-shadow duration-300 hover:border-white/50"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backgroundColor: app.bgColor,
                }}
              >
                <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-5 text-black">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-black">
                      {app.name}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-black/10">
                      {app.released}
                    </span>
                  </div>

                  {/* Card Central Visual */}
                  <div className="my-2 p-3 rounded-xl bg-black/10 backdrop-blur-xs flex flex-col justify-center">
                    <span className="text-[11px] font-semibold text-black/70 mb-1">
                      {app.mockupData.headline}
                    </span>
                    <span className="text-lg sm:text-xl font-black text-black tracking-tight">
                      {app.mockupData.stat}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-black/60 font-medium truncate">
                      {app.mockupData.statLabel}
                    </span>
                  </div>

                  {/* Bottom Bar */}
                  <div className="flex items-center justify-between text-[10px] sm:text-xs font-medium text-black/80 z-10 border-t border-black/10 pt-2">
                    <span className="truncate">{app.category}</span>
                    <span className="font-bold">★ {app.id === 'lenden' ? '5.0' : app.id === 'ghorlagbee' ? '4.6' : '4.2'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 border-t border-white/10 pt-8 text-center sm:text-left">
          <div className="flex flex-col sm:items-start items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
              6 <span className="font-normal">published apps</span>
            </span>
            <span className="text-sm font-light text-zinc-400 mt-1">
              active releases on Google Play Store
            </span>
          </div>

          <div className="flex flex-col sm:items-start items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
              4.64 <span className="font-normal">★ store rating</span>
            </span>
            <span className="text-sm font-light text-zinc-400 mt-1">
              5.0★ on Lenden • 4.6★ on GhorLagbee
            </span>
          </div>

          <div className="flex flex-col sm:items-start items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
              100% <span className="font-normal">verified & private</span>
            </span>
            <span className="text-sm font-light text-zinc-400 mt-1">
              P2P handshakes & bank-grade encryption
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
