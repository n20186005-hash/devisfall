# Devi’s Fall / पाताले छाँगो — information guide

Independent, unofficial, nonprofit tourism and educational guide for the Chhorepatan waterfall in Pokhara. It does not sell tickets or represent site management. The eight existing Nepali/English routes remain; no weather feature is included.

Node 24.20.0, pnpm 12.3.4, Astro 7.3.1, Tailwind 4.3.3 and TypeScript 6.0.3 are pinned. Existing package and lockfile versions are preserved. The reviewed lifecycle allowlist contains only esbuild@0.28.1, esbuild@0.28.2 and workerd@1.20260903.1; all other dependency builds remain unreviewed under strict defaults.

```sh
pnpm install --frozen-lockfile
npm run check
npm run build
npx wrangler deploy --dry-run
```

`wrangler.jsonc` targets the existing `devisfall` project. A Worker runs before static assets for canonical HTTPS/apex and slash redirects, preserving paths and query parameters, and localized 404/empty HEAD responses. Source checks and a build do not prove deployment or production behavior.

Routes: `/`, `/pravesh-shulka/`, `/khulne-samaya/`, `/bato/`, `/en/`, `/en/entry-fee/`, `/en/opening-hours/`, `/en/how-to-reach/`. Privacy, terms, photo-credit and source dialogs retain the existing interfaces. Cookie settings controls optional GA, separately from the map and any hosting performance beacon.

The dated Maps temporary-closure listing is attributed as third-party information. No current management confirmation of its reason, reopening date, hours or fee is claimed. Historical articles and neighboring cave/tour availability do not establish current waterfall access. Consult SOURCES.md and the on-page dates.

Four original Commons photographs remain with their individual authors, source links, licences and historical dates; see PHOTO_SOURCES.md and Photo credits. The OG card is an informational illustration, not a destination photograph.
