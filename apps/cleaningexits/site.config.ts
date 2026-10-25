import type { SiteConfig } from '@exits/core/types';

// Everything CleaningExits-specific that shared code needs. See packages/core/types.ts.
export const site: SiteConfig = {
  vertical: 'cleaning',
  firm: 'CleaningExits',
  displayName: 'Cleaning Exits',
  domain: 'cleaningexits.com',
  url: 'https://cleaningexits.com',
  contactEmail: 'hello@cleaningexits.com',
  phone: '888-430-5535',
  notifyFrom: 'CleaningExits <notifications@cleaningexits.com>',
  notifyTo: ['john@atmbrokerage.com', 'hello@cleaningexits.com'],
  from: 'CleaningExits <hello@cleaningexits.com>',
  replyTo: 'hello@cleaningexits.com',
  accent: '#059669',
  theme: 'emerald',
  noun: 'cleaning business',
  nounPlural: 'cleaning businesses',
  sellerCta: { label: 'What is your cleaning business worth?', href: '/valuation' },
  ndaCookie: 'cex_nda_access',
  ndaNotesPlaceholder: 'Timeline, experience in commercial cleaning, financing, anything else worth knowing.',
};
