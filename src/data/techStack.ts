import { TechStackItem } from '@/types';

export const TECH_STACK: TechStackItem[] = [
  {
    name: 'Swift 6 & SwiftUI',
    category: 'Native Mobile',
    description: 'Zero-overhead concurrency, modern reactive state management, and strict memory safety across Apple platforms.',
    icon: 'Layers',
    tag: 'iOS & macOS',
  },
  {
    name: 'Kotlin & Jetpack Compose',
    category: 'Native Mobile',
    description: 'Modern declarative Android UI architecture built for multi-screen foldables, tablets, and phones.',
    icon: 'Smartphone',
    tag: 'Android',
  },
  {
    name: 'Apple Metal 3 & Vulkan',
    category: 'Architecture',
    description: 'Direct GPU hardware compute pipelines enabling real-time 120 FPS camera shaders and neural tensor acceleration.',
    icon: 'Cpu',
    tag: 'Graphics & Compute',
  },
  {
    name: 'CoreML & ONNX Runtime',
    category: 'AI & ML',
    description: 'Sub-50ms quantization and local neural network execution directly on the Apple Neural Engine and Snapdragon NPU.',
    icon: 'Sparkles',
    tag: 'Edge AI',
  },
  {
    name: 'Hardware Secure Enclaves',
    category: 'Architecture',
    description: 'Air-gapped cryptographic hardware security modules (Apple Secure Enclave, Android Titan M2 / Knox Vault).',
    icon: 'Shield',
    tag: 'Zero Trust',
  },
  {
    name: 'Real-time AudioDSP & Spatial',
    category: 'Architecture',
    description: '32-bit floating point CoreAudio pipelines and binaural head-tracking spatial room acoustics.',
    icon: 'Headphones',
    tag: 'Acoustics',
  },
  {
    name: 'Cloudflare Edge & Workers',
    category: 'Analytics & Cloud',
    description: 'Global sub-10ms CDN distribution, zero-cold-start edge workers, and localized dynamic paywall routing.',
    icon: 'Globe',
    tag: 'Infrastructure',
  },
  {
    name: 'StoreKit 2 & Play Billing v7',
    category: 'Analytics & Cloud',
    description: 'Resilient in-app purchase verification, cryptographic receipt validation, and cross-platform entitlements.',
    icon: 'CheckCircle',
    tag: 'Monetization',
  },
];
