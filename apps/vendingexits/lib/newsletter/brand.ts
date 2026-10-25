// The only newsletter file that differs between vertical sites.
// Everything else in lib/newsletter/ is identical across CleaningExits, VendingExits, PestExits…
export const BRAND = {
  vertical: 'vending',
  firm: 'VendingExits',
  site: 'https://vendingexits.com',
  from: 'VendingExits <sales@vendingexits.com>',
  replyTo: 'sales@vendingexits.com',
  accent: '#d97706',
  noun: 'vending business',
  nounPlural: 'vending routes and businesses',
  sellerCta: { label: 'What is your vending route worth?', href: '/sell' },
};

/** The pre-checked opt-in box on the NDA form. Stored with each signup as the consent text. */
export const NDA_OPT_IN_TEXT = `Email me new ${BRAND.nounPlural} for sale and market updates from ${BRAND.firm}. Unsubscribe anytime.`;
