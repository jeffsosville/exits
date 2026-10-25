# Exits

One repo for the vertical exit marketplaces (CleaningExits, VendingExits, and the ones to come).

- `apps/<site>` — each site's own pages, SEO content and site config. One Vercel project per app, Root Directory set to the app folder.
- `packages/core` — shared plumbing every site uses: NDA → deal room, CRM inbound, inquiries, listings data access.

A fix in `packages/core` ships to every site. Every PR gets a preview deploy per site; check each one before merging.
