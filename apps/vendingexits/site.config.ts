import type { SiteConfig } from '@exits/core/types';

// Everything VendingExits-specific that shared code needs. See packages/core/types.ts.
export const site: SiteConfig = {
  vertical: 'vending',
  firm: 'VendingExits',
  displayName: 'Vending Exits',
  domain: 'vendingexits.com',
  url: 'https://vendingexits.com',
  contactEmail: 'sales@vendingexits.com',
  phone: '888-430-5535',
  notifyFrom: 'VendingExits <notifications@vendingexits.com>',
  notifyTo: ['john@atmbrokerage.com', 'sales@vendingexits.com'],
  from: 'VendingExits <sales@vendingexits.com>',
  replyTo: 'sales@vendingexits.com',
  accent: '#d97706',
  theme: 'amber',
  noun: 'vending business',
  nounPlural: 'vending routes and businesses',
  sellerCta: { label: 'What is your vending route worth?', href: '/sell' },
  ndaCookie: 'vex_nda_access',
  ndaNotesPlaceholder: 'Timeline, experience with vending, financing, anything else worth knowing.',
};
