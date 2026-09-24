import { PublishingPillar } from '@/types';

export const PUBLISHING_PILLARS: PublishingPillar[] = [
  {
    step: '01',
    title: 'Hypothesis & On-Device Prototyping',
    tag: 'Algorithmic R&D',
    summary:
      'We validate high-utility mobile concepts against proprietary search query datasets and user sentiment trends.',
    description:
      'Rather than relying on guesswork, our studio leverages predictive analytics of App Store and Google Play search volumes, keyword churn, and category gaps. We build micro-prototypes within 14 days, benchmarking on-device neural latency, GPU frame rates, and early retention cohorts before committing to full-scale release.',
    benefits: [
      'Data-backed market demand validation',
      'Rapid Swift & Kotlin native functional prototypes',
      'Sub-100ms interaction architecture & physics',
      'Early access TestFlight / Google Play Beta testing cycles',
    ],
    metric: '14 Days',
    metricLabel: 'From Concept to Functional Beta',
  },
  {
    step: '02',
    title: 'Pixel-Obsessed Native Craftsmanship',
    tag: 'Engineering & Design',
    summary:
      'We do not cut corners with clunky cross-platform web wrappers. We write bare-metal code designed to win store awards.',
    description:
      'Every app published by Algoel is designed with meticulous attention to detail. We utilize SwiftUI, Jetpack Compose, Apple Metal shaders, CoreML, and Android NPU primitives. The result is fluid 120Hz scrolling, instant cold starts, zero battery drain, and tactile haptic feedback that makes users fall in love.',
    benefits: [
      '100% Native iOS and Android architecture',
      'Award-winning interface design and micro-animations',
      'Dynamic Island, Widgets, and Watch complications',
      'Strict zero-bloat binary size constraints (<35MB)',
    ],
    metric: '120 FPS',
    metricLabel: 'Zero-Jank Motion Standards',
  },
  {
    step: '03',
    title: 'Algorithmic ASO & Organic Acquisition',
    tag: 'Distribution Engine',
    summary:
      'Proprietary multi-lingual keyword graph algorithms driving millions of organic store downloads without burning cash.',
    description:
      'App Store Optimization is in our DNA. We continuously simulate App Store and Google Play ranking algorithms across 175+ territories and 24 languages. From dynamic screenshot A/B testing with localized cultural nuance to custom product pages (CPPs) for maximum conversion, our apps consistently rank in the top search positions.',
    benefits: [
      'Deep localization in 24 major global languages',
      'Automated store asset A/B testing pipelines',
      'Direct relationships with Apple & Google editorial teams',
      'Custom Product Pages (CPPs) targeted by search intent',
    ],
    metric: '68%',
    metricLabel: 'Average Organic Acquisition Share',
  },
  {
    step: '04',
    title: 'Smart Monetization & Retention Science',
    tag: 'Scale & LTV',
    summary:
      'Fair, high-converting subscription architectures and dynamic paywalls calibrated for long-term customer lifetime value.',
    description:
      'We treat monetization as a core product feature. Our dynamic paywall engines deliver personalized trial offers, regional purchasing power parity (PPP) pricing, and non-intrusive value demonstrations. We maintain industry-leading cohort retention rates and sub-1.5% subscription churn.',
    benefits: [
      'Predictive lifetime value (pLTV) cohort models',
      'Dynamic paywall routing via edge servers',
      'Purchasing power parity for emerging economies',
      'Flawless StoreKit 2 and Google Play Billing v7 implementation',
    ],
    metric: '3.8×',
    metricLabel: 'Higher LTV Compared to Industry Benchmark',
  },
];

export const PUBLISHING_CAPABILITIES = [
  {
    title: 'App Store Feature Track Record',
    description: 'Over 38 App of the Day, Editor’s Choice, and Best New App accolades across US, Europe, and Asia.',
    icon: 'Sparkles',
  },
  {
    title: 'Zero-Friction In-House Publishing',
    description: 'We handle developer accounts, enterprise certificates, legal compliance, and tax withholding across all continents.',
    icon: 'Shield',
  },
  {
    title: 'Global Fast-Track Localization',
    description: 'Full linguistic, cultural, and visual adaptation for Japan, South Korea, DACH, France, Latin America, and MENA.',
    icon: 'Languages',
  },
  {
    title: 'Edge Telemetry & Anomaly Alerts',
    description: 'Real-time crash diagnostics, memory leak alerts, and ANR monitoring maintaining a 99.98% crash-free rate.',
    icon: 'Cpu',
  },
];
