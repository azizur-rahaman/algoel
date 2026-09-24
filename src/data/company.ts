import { CompanyStat } from '@/types';

export const COMPANY_INFO = {
  name: 'Algoel',
  legalName: 'Algoel Technologies',
  tagline: 'Engineering High-Utility Mobile Experiences.',
  description:
    'Algoel is a software development studio and digital publisher. We conceptualize, build, and publish high-performance mobile applications on the Google Play Store and iOS App Store spanning smart finance, home discovery, campus networks, and creative tools.',
  foundedYear: '2023',
  headquarters: 'Dhaka • Global Publishing',
  totalDownloads: '100K+',
  activeCountries: '85+',
  averageRating: '4.64 ★',
  storeFeatures: '12×',
  email: 'frazizur.rahaman@gmail.com',
  partnershipEmail: 'support@azizurrahaman.com',
  supportEmail: 'support@ghorlagbee.com',
  socials: {
    twitter: 'https://twitter.com/algoelapps',
    github: 'https://github.com/azizur-rahaman/algoel',
    linkedin: 'https://linkedin.com/company/algoel',
    appStore: 'https://apps.apple.com/developer/algoel',
    googlePlay: 'https://play.google.com/store/apps/dev?id=5083898539193320748',
  },
};

export const COMPANY_STATS: CompanyStat[] = [
  {
    value: '5',
    label: 'Published Apps',
    subtext: 'Active on official Google Play Store',
    icon: 'Smartphone',
  },
  {
    value: '4.64',
    label: 'Average Store Rating',
    subtext: '5.0★ on Lenden, 4.6★ on GhorLagbee',
    suffix: '★',
    icon: 'Star',
  },
  {
    value: '100%',
    label: 'Verified & Secure',
    subtext: 'P2P Handshake & Bank-Grade PIN Enclave',
    icon: 'Shield',
  },
  {
    value: '24/7',
    label: 'Real-Time Sync',
    subtext: 'Cloud Firestore & Gemini AI integrations',
    icon: 'Zap',
  },
];

export const CORE_VALUES = [
  {
    title: 'High-Utility Engineering',
    description:
      'We identify real-world daily friction points—from debt tracking between friends to rental home hunting and campus coordination—and build razor-sharp, zero-bloat solutions.',
    badge: 'Utility First',
  },
  {
    title: 'Peer-to-Peer Transparency',
    description:
      'Whether it is Lenden’s two-way verified transaction handshakes or GhorLagbee’s direct owner communication, we eliminate deceptive middlemen.',
    badge: 'Zero Middlemen',
  },
  {
    title: 'Modern Declarative Architecture',
    description:
      'Built with Flutter, Kotlin, Jetpack Compose, and Firebase, ensuring 60–120 FPS fluid navigation, offline persistence, and sub-100ms response times.',
    badge: 'Native Speed',
  },
  {
    title: 'Privacy & Data Ownership',
    description:
      'Zero shady ad tracking. Users maintain 100% control of their personal ledgers and listings, with one-tap account deletion and end-to-end data encryption.',
    badge: 'Privacy By Design',
  },
];
