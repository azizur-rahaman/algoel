import React from 'react';
import { APPS_DATA } from '@/data/apps';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsBanner } from '@/components/StatsBanner';
import { AppShowcase } from '@/components/AppShowcase';
import { PublishingEngine } from '@/components/PublishingEngine';
import { TechStackSection } from '@/components/TechStackSection';
import { ReviewsWall } from '@/components/ReviewsWall';
import { AboutSection } from '@/components/AboutSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05070c] text-white selection:bg-cyan-500 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Section with Interactive Smartphone Mockup */}
        <HeroSection apps={APPS_DATA} />

        {/* Global KPIs & Trust Badges */}
        <StatsBanner />

        {/* Mobile App Portfolio Showcase */}
        <AppShowcase apps={APPS_DATA} />

        {/* The Scientific 4-Stage Publishing Engine */}
        <PublishingEngine />

        {/* Bare-Metal Native Architecture & Tech Stack */}
        <TechStackSection />

        {/* App Store & Google Play Wall of Love */}
        <ReviewsWall />

        {/* Studio Ethos & Foundation */}
        <AboutSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Interactive Co-Publishing & Inquiries Form */}
        <ContactSection />
      </main>

      {/* Studio Footer */}
      <Footer />
    </div>
  );
}
