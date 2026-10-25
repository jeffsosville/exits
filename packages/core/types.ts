/**
 * Everything that differs between Exits sites. Each app exports one of these
 * from its own site.config.ts; packages/core reads it through the '@site' alias.
 * Adding a vertical = a new app folder + one of these. No core changes.
 */
export type SiteConfig = {
  /** CRM vertical slug; filters inhouse_listings and tags CRM rows. e.g. 'cleaning' */
  vertical: string;
  /** Brand as one word, e.g. 'CleaningExits' */
  firm: string;
  /** Brand as two words, used in page titles, e.g. 'Cleaning Exits' */
  displayName: string;
  /** Bare domain, e.g. 'cleaningexits.com' */
  domain: string;
  /** https URL with no trailing slash */
  url: string;
  /** Public contact address: reply-to on buyer emails, broker fallback, error messages */
  contactEmail: string;
  /** Display phone without country code, e.g. '888-430-5535' */
  phone: string;
  /** Sender for NDA and inquiry notifications */
  notifyFrom: string;
  /** Who gets NDA and inquiry notifications */
  notifyTo: string[];
  /** Sender and reply-to for the newsletter */
  from: string;
  replyTo: string;
  /** Newsletter accent colour (hex) */
  accent: string;
  /** Tailwind palette for site UI rendered by core components */
  theme: 'emerald' | 'amber';
  /** e.g. 'cleaning business' */
  noun: string;
  /** e.g. 'cleaning businesses' */
  nounPlural: string;
  sellerCta: { label: string; href: string };
  /** Cookie holding this site's NDA access map. Never change for a live site: buyers would lose access. */
  ndaCookie: string;
  /** Placeholder for the NDA form's 'why are you interested' box */
  ndaNotesPlaceholder: string;
};
