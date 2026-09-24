import { CompanyStat } from '@/types';

export const COMPANY_INFO = {
  name: 'Algoel',
  legalName: 'Algoel Technologies Inc.',
  tagline: 'Algorithmic Precision. World-Class Mobile Apps.',
  description:
    'Algoel is a premier mobile app studio and digital publisher. We architect, engineer, and publish category-defining iOS and Android applications enjoyed by over 50 million people worldwide.',
  foundedYear: '2021',
  headquarters: 'Global Studio — San Francisco • London • Tokyo',
  totalDownloads: '52M+',
  activeCountries: '175+',
  averageRating: '4.88 ★',
  storeFeatures: '38×',
  email: 'press@algoel.com',
  partnershipEmail: 'publish@algoel.com',
  supportEmail: 'support@algoel.com',
  socials: {
    twitter: 'https://twitter.com/algoelapps',
    github: 'https://github.com/algoel',
    linkedin: 'https://linkedin.com/company/algoel',
    appStore: 'https://apps.apple.com/developer/algoel',
    googlePlay: 'https://play.google.com/store/apps/dev?id=algoel',
  },
};

export const COMPANY_STATS: CompanyStat[] = [
  {
    value: '52M+',
    label: 'Global Downloads',
    subtext: 'Across App Store & Google Play',
    icon: 'Download',
  },
  {
    value: '4.88',
    label: 'Average Rating',
    subtext: 'Across 340,000+ verified reviews',
    suffix: '★',
    icon: 'Star',
  },
  {
    value: '175+',
    label: 'Countries Active',
    subtext: 'Localized in 24 major languages',
    icon: 'Globe',
  },
  {
    value: '38×',
    label: 'Store Honors',
    subtext: "Apple App of the Day & Google Best of",
    icon: 'Award',
  },
];

export const CORE_VALUES = [
  {
    title: 'Obsessive Craftsmanship',
    description:
      'We obsess over 120 FPS buttery interactions, sub-millisecond haptic responses, and human-centric interfaces that feel like natural extensions of the mind.',
    badge: 'UX / UI Excellence',
  },
  {
    title: 'Algorithmic Intelligence',
    description:
      'From on-device CoreML & PyTorch models to real-time predictive telemetry, our apps solve real human problems using bleeding-edge computational efficiency.',
    badge: 'Deep Tech',
  },
  {
    title: 'Global Organic Distribution',
    description:
      'Our proprietary App Store Optimization (ASO) algorithms and viral product loops turn high-utility mobile tools into global chart-toppers.',
    badge: 'Growth Engine',
  },
  {
    title: 'Zero Compromise on Privacy',
    description:
      'Our apps process biometric and personal workflows directly on-device with zero-knowledge encryption, strictly adhering to Apple & Google highest standards.',
    badge: 'Privacy By Design',
  },
];
