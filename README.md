# Algoel — Premium Mobile App Studio & Digital Publisher

A landing page built for **Algoel**, a software studio and mobile app publisher releasing category-defining applications on the **Apple App Store** and **Google Play Store**.

Built with **Next.js 16 (Turbopack, App Router)**, **TypeScript**, and **Tailwind CSS v4**, featuring an architecture with **zero backend dependencies** and modular, strongly typed data sources.

---

## 🚀 Key Highlights & Design System

- **Brand Aesthetic**: Deep Obsidian canvas (`#05070c`), frosted glassmorphic cards (`backdrop-blur-xl`), luminous cyan & indigo ambient lighting, and typography powered by Geist.
- **Interactive 3D Smartphone Frame**: Realistic titanium chassis featuring a functional Dynamic Island, status bar, and interactive app switcher allowing visitors to preview live app states.
- **Data-Driven Architecture**: All apps, stats, reviews, and publishing steps are cleanly separated in `src/data/`. Add or update an app simply by editing `src/data/apps.ts`.
- **Interactive App Modal**: Deep-dive product modal displaying interface flows, feature checklists, bare-metal tech stacks, and direct App Store / Google Play links.
- **The Algoel Publishing Engine**: 4-stage interactive flywheel detailing market hypothesis, native engineering, algorithmic ASO, and monetization science.
- **Wall of Love**: Filterable App Store & Google Play reviews from verified users across 175+ countries.
- **Interactive Co-Publishing Portal**: Submission form for indie developers seeking publishing partnerships, studio careers, and media inquiries.

---

## 🛠️ Project Structure

```text
algoel/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system variables, glow utilities & animations
│   │   ├── layout.tsx           # SEO metadata, OpenGraph tags, viewport config
│   │   └── page.tsx             # Main landing page composition
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky glassmorphic navigation with mobile menu
│   │   ├── HeroSection.tsx      # Hero headline, badges & interactive phone frame
│   │   ├── PhoneMockup.tsx      # Interactive smartphone chassis with live UI switch
│   │   ├── StatsBanner.tsx      # 52M+ downloads, 4.88★ rating, store credibility
│   │   ├── AppShowcase.tsx      # Filterable portfolio grid by category
│   │   ├── AppModal.tsx         # Detailed product specs & download modal
│   │   ├── PublishingEngine.tsx # 4-step mobile publishing methodology
│   │   ├── TechStackSection.tsx # Bare-metal native architecture (Swift, Kotlin, Metal)
│   │   ├── ReviewsWall.tsx      # Verified store reviews with country flags
│   │   ├── AboutSection.tsx     # Algoel ethos, principles & global studio hubs
│   │   ├── FAQSection.tsx       # Interactive category-filtered accordion FAQ
│   │   ├── ContactSection.tsx   # Interactive co-publishing and inquiry forms
│   │   └── Footer.tsx           # Links, compliance, legal disclaimer & newsletter
│   ├── data/
│   │   ├── apps.ts              # Portfolio of published apps (add your apps here!)
│   │   ├── company.ts           # Company metadata, contact emails, social links
│   │   ├── publishing.ts        # Publishing pillars and studio capabilities
│   │   ├── reviews.ts           # App Store & Play Store user reviews
│   │   ├── techStack.ts         # Engineering stack items
│   │   └── faqs.ts              # Frequently asked questions
│   └── types/
│       └── index.ts             # TypeScript definitions for apps, reviews, stats
```

---

## 📦 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run development server (Turbopack)
npm run dev

# 3. Open in browser
# http://localhost:3000

# 4. Create production build
npm run build
```

---

## 📱 How to Add / Edit Apps

To add a new app or update existing ones, open `src/data/apps.ts` and add an object matching the `AppItem` interface:

```typescript
{
  id: 'my-new-app',
  name: 'My New App',
  tagline: 'Tagline describing the app',
  category: 'AI & Productivity', // or Creative, Health, etc.
  downloads: '10M+',
  rating: 4.9,
  appStoreUrl: 'https://apps.apple.com/...',
  playStoreUrl: 'https://play.google.com/...',
  // ...
}
```
All components, filter buttons, metrics, and modals will automatically update with no code changes needed.
