import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ManifestoSection } from '@/components/ManifestoSection';
import { ProductsSection } from '@/components/ProductsSection';
import { TechnologiesSection } from '@/components/TechnologiesSection';
import { InterviewsSection } from '@/components/InterviewsSection';
import { AccoladesSection } from '@/components/AccoladesSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-black text-white selection:bg-[#72E5FF] selection:text-black"
      suppressHydrationWarning
    >
      {/* Dynamic Header with scroll theme observer */}
      <Navbar ctaText="Get in touch" ctaLink="/contact" />

      <main className="relative">
        {/* 1. Hero: Display Headline & 3D Rotating Card Cylinder Carousel */}
        <HeroSection />

        {/* 2. Manifesto: Large Typography Statements */}
        <ManifestoSection />

        {/* 3. Products: Exact Bending Spoons Card System with Pastel Palettes */}
        <ProductsSection />

        {/* 4. Proprietary Technologies: Handshake Enclave, Professor AI, MapRadar, etc. */}
        <TechnologiesSection />

        {/* 5. Spotlights: Verified User Reviews & Case Studies */}
        <InterviewsSection />

        {/* 6. Accolades: Electric Mint Accent Pre-Footer & Verified Ratings */}
        <AccoladesSection />
      </main>

      {/* 7. Footer: 4-Column Directory, Massive Logotype & Signature Closing */}
      <Footer />
    </div>
  );
}
