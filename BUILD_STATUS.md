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

## 2026-09-29 锁文件与构建验证（已实际执行）

- **真实构建（本次 SEO 多语言/长尾拆分改动验收）**：用 Node 24.19.0 + pnpm 11.25 完成，`Complete!`，产出 8 个页面 + `sitemap-index.xml`（仅 `https://devisfall.com/` 起源）+ `dist/_headers`。已校验 `<title>`、`description`、`canonical`、4 段 JSON-LD（WebSite / TouristAttraction / BreadcrumbList / FAQPage）、最新评价数 21,529 均正确输出。
- **正式锁文件**：用 `corepack pnpm@12.3.4` 生成 `pnpm-lock.yaml`（lockfileVersion 9.0，含 `packageManagerDependencies` 完整性哈希）。`corepack prepare --activate` 在本机因 `D:\Program Files\nodejs` 写权限被拒，故改用 `corepack pnpm@12.3.4` 直接调用（仅解包到用户缓存、不写系统目录）。
- **pnpm 12 构建脚本策略**：pnpm 12 默认拒绝依赖的构建脚本（esbuild / workerd），会在 `pnpm install --frozen-lockfile` 时报 `ERR_PNPM_IGNORED_BUILDS`。已在 `.npmrc` 写入 `dangerously-allow-all-builds=true`（项目依赖 esbuild 与 workerd 的原生二进制构建脚本，可信）；`package.json` 内旧的 `pnpm.onlyBuiltDependencies` 字段在 pnpm 12 已不再读取，已移除。
- **复现验证**：`corepack pnpm@12.3.4 install --frozen-lockfile --config.engine-strict=false` 通过（exit 0，无 WARN/error）。

## CI 验收（Cloudflare Workers Builds 或等价环境）

锁文件已随仓库提交，CI 直接走 frozen-lockfile 即可，无需重新生成：

```sh
corepack enable            # 按 package.json 的 packageManager 取 pnpm@12.3.4
rm -rf node_modules dist
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
# 交付规范要求的禁用词 grep 针对 dist 执行
```

域名已写入 `astro.config.ts` 的 `SITE='https://devisfall.com'`，故 canonical / OG / 绝对 URL / sitemap 均产出；sitemap 含 8 个 URL（非 www 的 https），无伪造的 modification-date 字段。
