export interface ProductItem {
  id: string;
  name: string;
  acquired: string;
  logo: string;
  image?: string;
  video?: string;
  bgColor: string;
  invertColor?: boolean;
  bulletPoints: {
    text: string;
    iconType?: 'check' | 'sparkle' | 'trending' | 'refresh' | 'clock';
  }[];
  href?: string;
  seeMoreLabel?: string;
  mobileLabel?: string;
  category?: 'Acquisition' | 'Studio' | 'Lab';
}

export interface TechnologyItem {
  id: string;
  name: string;
  description: string;
  tag: string;
  image?: string;
  metrics?: string;
  accentColor: string;
}

export interface InterviewItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  host: string;
  duration?: string;
}

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 'vimeo',
    name: 'Vimeo',
    acquired: 'November 2025',
    logo: '/images/bs/vimeo-logo.svg',
    image: '/images/bs/vimeo-card.webp',
    bgColor: '#72E5FF',
    invertColor: false,
    bulletPoints: [
      { text: 'Released 30+ product improvements' },
      { text: 'Launched AI language expansion for captions, dubbing, and bulk translation' },
    ],
    href: 'https://vimeo.com/product-updates',
    seeMoreLabel: 'See all improvements',
    mobileLabel: 'All improvements',
    category: 'Acquisition',
  },
  {
    id: 'evernote',
    name: 'Evernote',
    acquired: 'January 2023',
    logo: '/images/bs/evernote-logo.svg',
    video: 'https://bendingspoons.com/videos/product-cards/product-card-animation-Evernote.mp4',
    image: '/images/bs/eventbrite-card.webp',
    bgColor: '#D3EFAB',
    invertColor: false,
    bulletPoints: [
      { text: 'Released 200+ features and improvements' },
      { text: 'Increased sync speed by up to 3x across devices' },
    ],
    href: 'https://evernote.com/whats-new',
    seeMoreLabel: 'See all improvements',
    mobileLabel: 'All improvements',
    category: 'Acquisition',
  },
  {
    id: 'lenden',
    name: 'Lenden',
    acquired: 'Released 2024',
    logo: '/images/bs/vimeo-logo.svg',
    image: '/images/bs/vimeo-card.webp',
    bgColor: '#A7F3D0',
    invertColor: false,
    bulletPoints: [
      { text: 'Bank-grade PIN security with cryptographic peer handshake' },
      { text: 'Zero discrepancy P2P debt & credit tracking ledger with 5.0★ rating' },
    ],
    href: 'https://play.google.com/store/apps/details?id=com.algoel.lenden',
    seeMoreLabel: 'View on Play Store',
    mobileLabel: 'Play Store',
    category: 'Studio',
  },
  {
    id: 'remini',
    name: 'Remini',
    acquired: 'June 2021',
    logo: '/images/bs/remini-logo.svg',
    video: 'https://bendingspoons.com/videos/product-cards/product-card-animation-Remini.mp4',
    bgColor: '#FFE3E3',
    invertColor: false,
    bulletPoints: [
      { text: 'Grew monthly active users more than 5x' },
      { text: 'Tested, productized, and scaled 100+ AI models' },
    ],
    href: 'https://remini.ai/ai-photos',
    seeMoreLabel: 'See AI models',
    mobileLabel: 'AI models',
    category: 'Acquisition',
  },
  {
    id: 'wetransfer',
    name: 'WeTransfer',
    acquired: 'July 2024',
    logo: '/images/bs/wetransfer-logo.svg',
    image: '/images/bs/wetransfer-card.webp',
    bgColor: '#5867ED',
    invertColor: true,
    bulletPoints: [
      { text: 'Recovered 3+ million expired transfers with new feature' },
      { text: '100+ user-time years saved through reduced upload times' },
    ],
    href: 'https://wetransfer.com/blog/product-updates',
    seeMoreLabel: 'See all improvements',
    mobileLabel: 'All improvements',
    category: 'Acquisition',
  },
  {
    id: 'ghorlagbee',
    name: 'GhorLagbee',
    acquired: 'Released 2024',
    logo: '/images/bs/komoot-logo.svg',
    image: '/images/bs/aol-card.webp',
    bgColor: '#BAE6FD',
    invertColor: false,
    bulletPoints: [
      { text: 'Instant GPS rental radar eliminating 100% broker commissions' },
      { text: 'Direct landlord contact with Google Maps navigation & 4.6★ rating' },
    ],
    href: 'https://play.google.com/store/apps/details?id=com.algoel.ghorlagbe',
    seeMoreLabel: 'View on Play Store',
    mobileLabel: 'Play Store',
    category: 'Studio',
  },
  {
    id: 'eventbrite',
    name: 'Eventbrite',
    acquired: 'March 2026',
    logo: '/images/bs/eventbrite-logo.svg',
    image: '/images/bs/eventbrite-card.webp',
    bgColor: '#FFA575',
    invertColor: false,
    bulletPoints: [
      { text: 'Working on initial improvements' },
      { text: 'Redesigning event discovery & ticket checkout infrastructure' },
    ],
    href: 'https://eventbrite.com',
    seeMoreLabel: 'See updates',
    mobileLabel: 'Updates',
    category: 'Acquisition',
  },
  {
    id: 'meetup',
    name: 'Meetup',
    acquired: 'January 2024',
    logo: '/images/bs/meetup-logo.svg',
    video: 'https://bendingspoons.com/videos/product-cards/product-card-animation-Meetup.mp4',
    bgColor: '#EFE9FE',
    invertColor: false,
    bulletPoints: [
      { text: 'Refreshed brand, redesigned apps' },
      { text: 'Introduced free plan for organizers (first time since 2005)' },
    ],
    href: 'https://www.meetup.com/blog/category/new-at-meetup/product-updates/',
    seeMoreLabel: 'See all improvements',
    mobileLabel: 'All improvements',
    category: 'Acquisition',
  },
  {
    id: 'classmates',
    name: 'Classmates',
    acquired: 'Released 2024',
    logo: '/images/bs/streamyard-logo.svg',
    image: '/images/bs/streamyard-card.webp',
    bgColor: '#DDD6FE',
    invertColor: false,
    bulletPoints: [
      { text: 'Professor AI: 24/7 coursework assistant powered by Gemini API' },
      { text: 'Campus social network across 12 departments with real-time chat' },
    ],
    href: 'https://play.google.com/store/apps/details?id=com.algoel.uiu_students',
    seeMoreLabel: 'View on Play Store',
    mobileLabel: 'Play Store',
    category: 'Studio',
  },
  {
    id: 'komoot',
    name: 'Komoot',
    acquired: 'March 2025',
    logo: '/images/bs/komoot-logo.svg',
    video: 'https://bendingspoons.com/videos/product-cards/product-card-animation-Komoot.mp4',
    bgColor: '#E2E2A0',
    invertColor: false,
    bulletPoints: [
      { text: 'Released 80+ improvements and new features' },
      { text: 'Developed best-in-class Apple Watch app' },
    ],
    href: 'https://www.komoot.com/product-updates',
    seeMoreLabel: 'See all improvements',
    mobileLabel: 'All improvements',
    category: 'Acquisition',
  },
  {
    id: 'aol',
    name: 'AOL',
    acquired: 'January 2026',
    logo: '/images/bs/aol-logo.svg',
    image: '/images/bs/aol-card.webp',
    bgColor: '#FFCB00',
    invertColor: false,
    bulletPoints: [
      { text: 'Working on initial improvements' },
      { text: 'Next-generation mail platform & streamlined communication hub' },
    ],
    href: 'https://aol.com',
    seeMoreLabel: 'See updates',
    mobileLabel: 'Updates',
    category: 'Acquisition',
  },
  {
    id: 'streamyard',
    name: 'StreamYard',
    acquired: 'April 2024',
    logo: '/images/bs/streamyard-logo.svg',
    image: '/images/bs/streamyard-card.webp',
    bgColor: '#C1D6F9',
    invertColor: false,
    bulletPoints: [
      { text: 'Released 50+ improvements and new features' },
      { text: 'Introduced 4K local recordings and AI editing' },
    ],
    href: 'https://new.streamyard.com/',
    seeMoreLabel: 'See all improvements',
    mobileLabel: 'All improvements',
    category: 'Acquisition',
  },
  {
    id: 'brightcove',
    name: 'Brightcove',
    acquired: 'February 2025',
    logo: '/images/bs/brightcove-logo.svg',
    video: 'https://bendingspoons.com/videos/product-cards/product-card-animation-Brightcove.mp4',
    bgColor: '#FFC9EE',
    invertColor: false,
    bulletPoints: [
      { text: 'Delivered AI Suite, Live 4K, SSAI with DRM, vertical video' },
      { text: 'Reached all-time high customer satisfaction score: 4.91/5' },
    ],
    href: 'https://www.brightcove.com/blog?category=Product+Communications',
    seeMoreLabel: 'See all improvements',
    mobileLabel: 'All improvements',
    category: 'Acquisition',
  },
];

export const TECHNOLOGIES_LIST: TechnologyItem[] = [
  {
    id: 'minerva',
    name: 'Minerva',
    description: 'User lifetime value predictions',
    tag: 'Algorithmic LTV',
    image: '/images/bs/minerva.webp',
    metrics: '99.4% predictive accuracy',
    accentColor: '#72E5FF',
  },
  {
    id: 'juno',
    name: 'Juno',
    description: 'Multi-channel payment management',
    tag: 'Global Billing',
    image: '/images/bs/juno.webp',
    metrics: '180+ global payment methods',
    accentColor: '#D3EFAB',
  },
  {
    id: 'xina',
    name: 'Xina',
    description: 'High-accuracy marketing attribution',
    tag: 'Attribution Engine',
    image: '/images/bs/xina.webp',
    metrics: 'Sub-second attribution tracking',
    accentColor: '#FFA575',
  },
  {
    id: 'galf',
    name: 'Galf',
    description: 'Multi-asset secure access control',
    tag: 'Security Enclave',
    image: '/images/bs/galf.webp',
    metrics: 'Zero-trust cryptographic isolation',
    accentColor: '#FFE3E3',
  },
  {
    id: 'matrix',
    name: 'Matrix',
    description: 'Propagation of validated UX patterns',
    tag: 'Design Systems',
    image: '/images/bs/matrix.webp',
    metrics: 'Unified cross-platform components',
    accentColor: '#E2E2A0',
  },
  {
    id: 'pico',
    name: 'Pico',
    description: 'High-throughput data ingestion',
    tag: 'Data Pipeline',
    image: '/images/bs/pico.webp',
    metrics: 'Millions of events/sec processed',
    accentColor: '#C1D6F9',
  },
];

export const INTERVIEWS_LIST: InterviewItem[] = [
  {
    id: 'invest-like-the-best',
    title: 'Invest Like The Best',
    description: 'The Playbook on Buying and Running Companies Forever',
    image: '/images/bs/interview-1.webp',
    href: 'https://www.youtube.com/watch?v=uLSXhmRHpFU&t=30s',
    host: 'Patrick O’Shaughnessy',
    duration: '1 hr 12 min',
  },
  {
    id: 'marcello-ascani',
    title: 'Marcello Ascani',
    description: 'Inside Bending Spoons',
    image: '/images/bs/interview-2.webp',
    href: 'https://www.youtube.com/watch?v=__2rdQqZDgY',
    host: 'Marcello Ascani',
    duration: '42 min',
  },
  {
    id: 'inside-bs',
    title: 'Inside Bending Spoons',
    description: 'Growth, acquisitions, culture, and controversial principles.',
    image: '/images/bs/interview-3.webp',
    href: 'https://www.youtube.com/watch?v=I_ZLJ3NMsxg',
    host: 'Bending Spoons Media',
    duration: '28 min',
  },
  {
    id: '20vc',
    title: '20VC',
    description: 'Scaling to 500M Downloads',
    image: '/images/bs/interview-4.webp',
    href: 'https://www.youtube.com/watch?v=rJyHmyjG204',
    host: 'Harry Stebbings',
    duration: '56 min',
  },
  {
    id: 'made-it',
    title: 'Made IT',
    description: 'From failed startup to €11BN tech giant',
    image: '/images/bs/interview-5.webp',
    href: 'https://www.youtube.com/watch?v=3JMqoQ_qX2E',
    host: 'Camilla Scassellati',
    duration: '48 min',
  },
  {
    id: 'pragmatic-engineer',
    title: 'The Pragmatic Engineer',
    description: 'Twisting the rules of building software',
    image: '/images/bs/interview-6.webp',
    href: 'https://www.youtube.com/watch?v=6WM_q193Kls',
    host: 'Gergely Orosz',
    duration: '1 hr 04 min',
  },
];
