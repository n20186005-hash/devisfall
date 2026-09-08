# BUILD / VALIDATION STATUS

This project was prepared with exact package versions and source-level checks. The execution container used for this delivery cannot resolve `registry.npmjs.org`, so Corepack cannot download the pinned pnpm binary and a trustworthy pnpm lockfile cannot be generated here. No synthetic or hand-written lockfile has been fabricated.

## Attempted clean install

```sh
rm -rf node_modules dist
CI=1 corepack pnpm install --frozen-lockfile
```

Result in this container: **blocked before dependency installation** because Corepack failed DNS resolution for `registry.npmjs.org` while fetching pnpm 12.3.4 (`EAI_AGAIN`). Therefore `pnpm check`, `pnpm build`, dist grep, and generated sitemap inspection could not be truthfully executed in this container.

## Source-level checks completed

- No `pnpm-workspace.yaml` is present.
- Dependency versions in `package.json` are exact (no `latest`, `*`, caret, or tilde ranges).
- `packageManager`, `engines.node`, `engines.pnpm`, and `.node-version` are pinned.
- Site origin is configured only by `SITE` in `astro.config.ts`; it is empty by default.
- Sitemap integration is enabled only when `SITE` has a value.
- Source scan covers the forbidden placeholder/extension URL patterns and fabricated sitemap-modification-date markers from the delivery spec.
- GA4 is the requested `G-HXM22WWPKP` and loads only after cookie consent.
- No unknown third-party script is included.

## Required final verification on a network-enabled machine

Generate and commit the real lockfile once, then execute the user's required clean-room sequence:

```sh
corepack enable
pnpm install
# commit the generated pnpm-lock.yaml
rm -rf node_modules dist
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
# Run the forbidden-token grep required by the delivery specification against dist.
```

When a real domain is assigned, put it only in `SITE` in `astro.config.ts`, rebuild, and verify the generated sitemap contains only that origin and no fabricated modification-date field.
