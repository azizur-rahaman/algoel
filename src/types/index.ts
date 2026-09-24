export type AppCategory = 
  | 'All'
  | 'Finance & Fintech'
  | 'House & Home'
  | 'Education & Campus'
  | 'Creative & Design'
  | 'Utilities & Tools';

export type Platform = 'iOS' | 'Android' | 'iPadOS' | 'watchOS' | 'macOS';

export interface AppScreenshot {
  title: string;
  subtitle: string;
  screenType: 'dashboard' | 'camera' | 'analytics' | 'player' | 'security' | 'feed';
  accentGradient: string;
  mockupData: {
    heading: string;
    statNumber?: string;
    statLabel?: string;
    tags?: string[];
    previewBullets?: string[];
  };
}

export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  category: AppCategory;
  accentGradient: string;
  glowColor: string;
  iconBg: string;
  iconSymbol: string;
  platforms: Platform[];
  rating: number;
  reviewsCount: string;
  downloads: string;
  appStoreUrl: string;
  playStoreUrl: string;
  featured: boolean;
  awardBadge?: string;
  features: string[];
  techSpecs: string[];
  releaseYear: string;
  version: string;
  screenshots: AppScreenshot[];
}

export interface CompanyStat {
  value: string;
  label: string;
  subtext: string;
  prefix?: string;
  suffix?: string;
  icon: string;
}

export interface TestimonialReview {
  id: string;
  author: string;
  country: string;
  flag: string;
  avatarText: string;
  rating: number;
  title: string;
  review: string;
  appName: string;
  platform: 'Apple App Store' | 'Google Play Store';
  date: string;
}

export interface PublishingPillar {
  step: string;
  title: string;
  tag: string;
  summary: string;
  description: string;
  benefits: string[];
  metric: string;
  metricLabel: string;
}

export interface TechStackItem {
  name: string;
  category: 'Native Mobile' | 'AI & ML' | 'Architecture' | 'Analytics & Cloud';
  description: string;
  icon: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Publishing & Partnerships' | 'Apps & Support' | 'Careers';
}
