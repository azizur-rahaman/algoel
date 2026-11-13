import React from 'react';
import type { Metadata } from 'next';
import WeightnotePrivacyClient from './WeightnotePrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy — weightnote (ডিজিটাল ওজন খাতা) | Algoel Technologies',
  description:
    'Official Privacy Policy for weightnote (com.algoel.weightnote) by Algoel Technologies. 100% offline-first digital weight ledger, on-device SQLite database, zero personal data collection, and Google Play Store compliance.',
};

export default function WeightnotePrivacyPage() {
  return <WeightnotePrivacyClient />;
}
