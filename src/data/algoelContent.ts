export interface AlgoelProduct {
  id: string;
  name: string;
  tagline: string;
  category: string;
  released: string;
  bgColor: string;
  invertColor?: boolean;
  rating: string;
  downloads: string;
  playStoreUrl: string;
  iconSymbol: string;
  bulletPoints: string[];
  mockupData: {
    badge: string;
    headline: string;
    stat: string;
    statLabel: string;
    details: string[];
  };
}

export interface AlgoelTechnology {
  id: string;
  name: string;
  description: string;
  tag: string;
  metric: string;
  accentColor: string;
  previewGraphic: 'cipher' | 'neural' | 'radar' | 'cards' | 'sync' | 'canvas';
}

export interface AlgoelSpotlight {
  id: string;
  author: string;
  title: string;
  description: string;
  app: string;
  badge: string;
  rating: string;
  href: string;
}

export const ALGOEL_PRODUCTS: AlgoelProduct[] = [
  {
    id: 'lenden',
    name: 'Lenden',
    tagline: 'Secure Personal Financial Ledger & Credit Tracker',
    category: 'Fintech & Utility',
    released: '2024',
    bgColor: '#72E5FF',
    invertColor: false,
    rating: '5.0★ Perfect Store Rating',
    downloads: '100+ Downloads',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.algoel.lenden',
    iconSymbol: 'Wallet',
    bulletPoints: [
      'Released 2024 • Active on Google Play',
      'Two-way cryptographic peer handshake ensuring zero ledger discrepancies',
      'Bank-grade 4-digit PIN security enclave and AES-256 local encrypted storage',
      'Smart Savings Vault & real-time "Will Receive" vs "Will Give" cashflow insights',
      '5.0★ Perfect Store Rating on Google Play',
    ],
    mockupData: {
      badge: 'Bank-Grade PIN Enclave',
      headline: 'Net Financial Position',
      stat: '৳ 28,450',
      statLabel: 'Will Receive: ৳32,000 • Will Give: ৳3,550',
      details: [
        'Rafiq Ahmed: ৳5,000 (Handshake Confirmed)',
        'Office Lunch Split: ৳1,200 (Paid & Closed)',
        'Savings Goal "MacBook Pro": 74% Complete',
      ],
    },
  },
  {
    id: 'ghorlagbee',
    name: 'GhorLagbee',
    tagline: 'Verified To-Let & Smart Property Rental Discovery',
    category: 'House & Home',
    released: '2024',
    bgColor: '#D3EFAB',
    invertColor: false,
    rating: '4.6★ Store Rating',
    downloads: '10+ Downloads',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.algoel.ghorlagbe',
    iconSymbol: 'Home',
    bulletPoints: [
      'Released 2024 • Active on Google Play',
      'Instant GPS rental radar eliminating 100% deceptive broker commissions',
      'One-tap direct property owner calling and Google Maps building navigation',
      'Tailored filter engine: bachelor sublets, family flats, and furnished rooms',
      '4.6★ Store Rating with verified property listings in Dhaka',
    ],
    mockupData: {
      badge: 'Zero Broker Commission',
      headline: 'Nearby To-Let Properties',
      stat: '24 Available',
      statLabel: 'Within 2.5 km of your location',
      details: [
        'Gulshan 2: 3 Bed, 3 Bath Family Flat — ৳42,000/mo',
        'Dhanmondi 8/A: 2 Bed Furnished Apartment — ৳28,000/mo',
        'Direct Owner Call: Verified & Commission Free',
      ],
    },
  },
  {
    id: 'classmates',
    name: 'Classmates',
    tagline: 'All-in-One Campus Social Platform & AI Study Companion',
    category: 'Education & Campus',
    released: '2024',
    bgColor: '#EFE9FE',
    invertColor: false,
    rating: '4.2★ Campus Rating',
    downloads: '100+ Downloads',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.algoel.uiu_students',
    iconSymbol: 'GraduationCap',
    bulletPoints: [
      'Released 2024 • Active on Google Play',
      'Professor AI: 24/7 coursework assistant powered by Google Gemini AI',
      'Department-wide 1-on-1 student messenger and community discussion feed',
      'Official exam notices and past trimester question paper bank',
      'Integrated CGPA grade planning and credit tuition calculator',
    ],
    mockupData: {
      badge: 'Gemini AI Active',
      headline: 'Professor AI: Study Session',
      stat: '24/7 AI Tutor',
      statLabel: 'Instant step-by-step problem breakdown',
      details: [
        'Query: Dijkstra shortest path time complexity analysis',
        'AI Solution: O(V + E log V) with pseudocode generated',
        '3 Recommended past trimester exam questions attached',
      ],
    },
  },
  {
    id: 'news-app-flash',
    name: 'News App Flash',
    tagline: 'Tinder-Style Flashcard News Reader for Bangladesh',
    category: 'News & Media',
    released: '2026',
    bgColor: '#FFE3E3',
    invertColor: false,
    rating: '5.0★ Initial Rating',
    downloads: 'New Release',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.algoel.news_app_flash',
    iconSymbol: 'Newspaper',
    bulletPoints: [
      'Released 2026 • Built with Flutter & BLoC',
      'Tinder-style gesture flashcards: swipe left to skip, swipe right to bookmark',
      '100% Curated Bangladesh news parsed from verified national publishers',
      'Privacy-first architecture: zero login, zero tracking, zero personal data stored',
      'Sub-60 second daily news consumption with offline caching',
    ],
    mockupData: {
      badge: 'Swipe Cards • Zero Login',
      headline: 'খবর ফ্ল্যাশ — সংবাদ ডেক',
      stat: '৩৬টি তাজা খবর',
      statLabel: 'জাতীয় • রাজনীতি • অর্থনীতি • প্রযুক্তি',
      details: [
        'বাংলাদেশে প্রযুক্তির দ্রুত বিকাশ ও নতুন ডিজিটাল স্টার্টআপ',
        'সোয়াইপ করে খবর সেভ করুন, ট্যাপে সম্পূর্ণ রিপোর্ট পড়ুন',
        '১০০% বিজ্ঞাপন ও ট্র্যাকার মুক্ত হালকা রিডার',
      ],
    },
  },
  {
    id: 'safeqr',
    name: 'SafeQR',
    tagline: 'Fast & Secure QR and Barcode Scanner & Generator',
    category: 'Utilities & Tools',
    released: '2026',
    bgColor: '#BAE6FD',
    invertColor: false,
    rating: '5.0★ Perfect Store Rating',
    downloads: 'New Release',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.algoel.safeqr_qr_and_barcode_scanner',
    iconSymbol: 'QrCode',
    bulletPoints: [
      'Released 2026 • Built with Flutter & GetX',
      'Blazing-fast camera viewfinder scanning with tactile haptic confirmation',
      'Universal QR code generator for Wi-Fi, links, vCards, and custom text',
      '100% Offline & Privacy-First: zero trackers, zero cloud logs, on-device ledger',
      'Scan from gallery screenshots and export clean high-res codes effortlessly',
    ],
    mockupData: {
      badge: '100% Offline • Private',
      headline: 'SafeQR Scanner Lens',
      stat: '0.05s Scan',
      statLabel: 'Instant Camera & Gallery Recognition',
      details: [
        'Decoded: Wi-Fi "Algoel-Office-5G" (Auto Connect)',
        'Private History: 48 Scans Logged Locally',
        'Zero Data Upload: 100% Client-Side Processing',
      ],
    },
  },
  {
    id: 'frametastic',
    name: 'FrameTastic',
    tagline: 'Personalized Photo Frame Designer & Creative Studio',
    category: 'Creative & Design',
    released: '2023',
    bgColor: '#FFA575',
    invertColor: false,
    rating: '4.2★ Store Rating',
    downloads: '10+ Downloads',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=xyz.quantumsoftwares.frametastic',
    iconSymbol: 'Camera',
    bulletPoints: [
      'Released 2023 • Active on Google Play',
      '100+ Designer borders, vintage polaroids, and vibrant contemporary layouts',
      'Precision photo editing suite: brightness, saturation, and artistic filters',
      'Lossless Canvas2D processing pipeline preserving camera sensor clarity',
      'Direct social sharing to Instagram Stories, WhatsApp, and Facebook',
    ],
    mockupData: {
      badge: '100+ Designer Borders',
      headline: 'Creative Canvas Studio',
      stat: '1080 × 1080',
      statLabel: 'High-res lossless canvas render',
      details: [
        'Border Width: 18px • Corner Radius: 24px',
        'Filter Preset: Golden Hour Warmth (+25%)',
        'Lossless JPEG/PNG direct export ready',
      ],
    },
  },
  {
    id: 'colorful-calculator',
    name: 'ColorFul Calculator',
    tagline: 'Vibrant Themeable Calculator & Fast Math Utility',
    category: 'Utilities & Tools',
    released: '2023',
    bgColor: '#E2E2A0',
    invertColor: false,
    rating: '4.2★ Store Rating',
    downloads: '10+ Downloads',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.quantumsoft.colorfulcalculator',
    iconSymbol: 'Calculator',
    bulletPoints: [
      'Released 2023 • Active on Google Play',
      'Vibrant eye-friendly colorways with tactile haptic touch feedback',
      'Persistent calculation history ledger with zero background battery drain',
      'Ultra-compact binary (<10MB) operating with 100% offline privacy',
      'Zero distracting ad popups for lightning-fast daily math',
    ],
    mockupData: {
      badge: '100% Offline & Ad-Free',
      headline: 'Cyberpunk Neon Keypad',
      stat: '1,429.50',
      statLabel: 'Equation: (840 × 1.25) + 379.50',
      details: [
        'Previous: 4,500 ÷ 12 = 375.00',
        'Previous: 18,200 - 15% discount = 15,470.00',
        'Haptic micro-interactions on every keypress',
      ],
    },
  },
];

export const ALGOEL_TECHNOLOGIES: AlgoelTechnology[] = [
  {
    id: 'handshake-enclave',
    name: 'Handshake Enclave',
    description: 'Two-way cryptographic peer transaction verification',
    tag: 'Fintech Security',
    metric: '100% discrepancy-free audit',
    accentColor: '#72E5FF',
    previewGraphic: 'cipher',
  },
  {
    id: 'professor-ai',
    name: 'Professor AI Engine',
    description: 'Multimodal academic problem breakdown via Gemini',
    tag: 'Generative AI',
    metric: 'Sub-2s response latency',
    accentColor: '#EFE9FE',
    previewGraphic: 'neural',
  },
  {
    id: 'map-radar',
    name: 'MapRadar SDK',
    description: 'High-precision spatial rental radius indexing',
    tag: 'Spatial Geolocation',
    metric: '2.5 km real-time radius queries',
    accentColor: '#D3EFAB',
    previewGraphic: 'radar',
  },
  {
    id: 'flashcard-engine',
    name: 'FlashCard Engine',
    description: 'Zero-latency gesture news swiping with offline cache',
    tag: 'Reactive UI Engine',
    metric: '120 FPS gesture tracking',
    accentColor: '#FFE3E3',
    previewGraphic: 'cards',
  },
  {
    id: 'swiftsync',
    name: 'SwiftSync Architecture',
    description: 'Real-time multi-device cloud Firestore synchronization',
    tag: 'Cloud Infrastructure',
    metric: 'Sub-100ms offline persistence',
    accentColor: '#FFA575',
    previewGraphic: 'sync',
  },
  {
    id: 'canvas2d',
    name: 'Canvas2D Pipeline',
    description: 'Hardware-accelerated lossless image filter processing',
    tag: 'Graphics Acceleration',
    metric: 'Lossless sensor resolution',
    accentColor: '#E2E2A0',
    previewGraphic: 'canvas',
  },
];

export const ALGOEL_SPOTLIGHTS: AlgoelSpotlight[] = [
  {
    id: 'tanvir-lenden',
    author: 'Tanvir Hossain',
    title: 'P2P Handshake in Action',
    description: '“Lenden’s P2P handshake solved our group debt confusion. Whenever I record lending money to a friend, they verify it on their side. 5 stars all day!”',
    app: 'Lenden',
    badge: 'Fintech Case Study',
    rating: '5.0★ Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.algoel.lenden',
  },
  {
    id: 'sadia-ghorlagbee',
    author: 'Sadia Rahman',
    title: 'Zero-Broker Rental Discovery',
    description: '“GhorLagbee saved me so much hassle. I turned on GPS nearby search in Dhanmondi, saw 8 available flats on Google Maps, called the owner directly, and moved in.”',
    app: 'GhorLagbee',
    badge: 'Rental Discovery',
    rating: '4.6★ Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.algoel.ghorlagbe',
  },
  {
    id: 'farhan-classmates',
    author: 'Kazi Farhan',
    title: 'Acing Algorithms with Professor AI',
    description: '“Whenever I am stuck debugging C++ graphs or dynamic programming at 2 AM, Professor AI breaks it down step by step. Plus the past exam bank is super handy.”',
    app: 'Classmates',
    badge: 'Campus Spotlight',
    rating: '4.2★ Student Review',
    href: 'https://play.google.com/store/apps/details?id=com.algoel.uiu_students',
  },
  {
    id: 'mehedi-lenden',
    author: 'Mehedi Hasan',
    title: 'Cashflow Reality Check',
    description: '“The Smart Savings Vault and the Will Receive vs Will Give dashboard gives me an instant reality check of my cash flow before the month ends. Best ledger app on Play Store.”',
    app: 'Lenden',
    badge: 'Verified User',
    rating: '5.0★ Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.algoel.lenden',
  },
  {
    id: 'founder-algoel',
    author: 'Azizur Rahaman',
    title: 'The High-Utility Mobile Craft',
    description: '“We identify real-world daily friction—from peer debts to apartment hunting—and build razor-sharp, zero-bloat mobile apps engineered to last for the long term.”',
    app: 'Algoel Studio',
    badge: 'Studio Ethos',
    rating: 'Founder & Engineer',
    href: 'https://github.com/azizur-rahaman/algoel',
  },
  {
    id: 'news-flash-spotlight',
    author: 'Rahim Ullah',
    title: '60-Second Breaking News Digest',
    description: '“News App Flash is so refreshing. No messy advertisements, no login required. Just quick, authentic Bangladesh news cards that I can swipe through in under a minute.”',
    app: 'News App Flash',
    badge: 'New Release',
    rating: '5.0★ Play Store',
    href: 'https://play.google.com/store/apps/details?id=com.algoel.news_app_flash',
  },
  {
    id: 'safeqr-spotlight',
    author: 'Faridur Islam',
    title: 'Blazing Fast Offline Scanner',
    description: '“Finally a QR scanner that doesn’t hit me with 30-second video ads or ask for my location! Scans immediately, works completely offline, and saves a clean history ledger.”',
    app: 'SafeQR',
    badge: 'Privacy Utility',
    rating: '5.0★ Play Store',
    href: 'https://play.google.com/store/apps/details?id=com.algoel.safeqr_qr_and_barcode_scanner',
  },
];
