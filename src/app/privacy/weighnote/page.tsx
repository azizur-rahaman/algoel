import React from 'react';
import type { Metadata } from 'next';
import WeighNotePrivacyClient from './WeighNotePrivacyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy — WeighNote (ডিজিটাল ওজন খাতা) | Algoel Technologies',
  description:
    'Official Privacy Policy for WeighNote (com.algoel.weight_note) by Algoel Technologies. 100% offline-first digital weight ledger, on-device SQLite database, zero personal data collection, and Google Play Store compliance.',
};

export default function WeighNotePrivacyPage() {
  return <WeighNotePrivacyClient />;
}
