# Exits

One repo for the vertical exit marketplaces (CleaningExits, VendingExits, and the ones to come).

- `apps/<site>` — each site's own pages, SEO content and site config. One Vercel project per app, Root Directory set to the app folder.
- `packages/core` — shared plumbing every site uses: NDA → deal room, CRM inbound, inquiries, listings data access.

A fix in `packages/core` ships to every site. Every PR gets a preview deploy per site; check each one before merging.

## Local setup

```
npm install          # once, at the repo root
npm run build:cleaning
npm run build:vending
```

Dependency versions are pinned by the root `package-lock.json`. Don't add a lockfile inside an app.

## What lives in packages/core

| Module | What it does |
| --- | --- |
| `nda/route.ts`, `nda/createToken.ts`, `nda/terms.ts`, `nda/NdaPage.tsx` | NDA form → `deal_tokens` + `deal_buyer_access` → Deal Hub link, buyer and broker emails |
| `inquiry/route.ts`, `crm/inbound.ts` | Seller/contact forms → CRM `inbound_items` + notification emails |
| `listings/inhouse.ts` | In-house listings from the CRM `inhouse_listings` table |
| `newsletter/*` | Subscribe, confirm, unsubscribe, weekly digest |
| `crm/supabase.ts` | Service-role client for the CRM project |

Apps re-export these, e.g. `apps/<site>/app/api/listing-nda/route.ts` is three lines.

## Adding a new Exits site

1. Copy an existing app folder to `apps/<newsite>` and change its `package.json` name.
2. Edit `apps/<newsite>/site.config.ts`: vertical slug, names, domain, emails, colours, NDA cookie name (new and unique).
3. Make sure the vertical exists in the CRM `verticals` table and listings are in `inhouse_listings` with `crm_deal_id` set.
4. Rewrite the site's own pages (home, SEO pages, about). Shared flows need no changes.
5. New Vercel project → this repo, Root Directory `apps/<newsite>`, copy env vars.

Never change `ndaCookie` on a live site: buyers who already signed would lose access.
