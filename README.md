# पाताले छाँगो / Devi’s Fall Pokhara

单页景点站：Astro + Tailwind CSS + TypeScript，面向 Cloudflare Workers Static Assets 部署。无数据库、无登录、无 CMS。

## 固定版本

- Node.js: 24.20.0（`.node-version` + `engines`）
- pnpm: 12.3.4（`packageManager` + `engines`）
- Astro: 7.3.1
- @astrojs/check: 0.9.10
- @astrojs/sitemap: 3.7.4
- TypeScript: 6.0.3
- Tailwind CSS / @tailwindcss/vite: 4.3.3
- Wrangler: 4.129.0

TypeScript 固定在 @astrojs/check 0.9.10 支持的 6.x 范围内，不使用 TypeScript 7。

## 域名只配置一次

编辑 `astro.config.ts`：

```ts
const SITE = '';
```

确定域名后，仅把完整站点 URL 填入这里；不要在其他文件重复写域名。

- `SITE` 为空：项目仍可构建；canonical 和站点绝对 URL 标签会省略/降级；sitemap integration 不启用。
- `SITE` 有值：canonical、Open Graph、JSON-LD 的本站 URL 从 `Astro.site` 派生，同时启用 `@astrojs/sitemap`。

## 本地开发 / 验收

当前交付容器无法解析 npm registry，因此没有伪造 `pnpm-lock.yaml`。详细状态见 `BUILD_STATUS.md`。在可联网环境首次生成真实锁文件后，再执行 frozen-lockfile 验收。

```bash
corepack enable
pnpm install
# 提交生成的 pnpm-lock.yaml 后：
rm -rf node_modules dist
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```


## Cloudflare Worker 部署

`wrangler.jsonc` 使用 Workers Static Assets 指向 `./dist`。

```bash
pnpm deploy
```

## GA4 / Cookie

GA4 Measurement ID: `G-HXM22WWPKP`。Google Analytics 脚本只有在访客明确接受分析 Cookie 后才会动态加载；拒绝时网站功能不受影响。

## 图片

页面使用 Wikimedia Commons 上的真实 Devi’s Fall / Gupteshwor Cave 实景照片，并在页脚“तस्बिर श्रेय”中按 CC BY-SA 要求署名。Logo、favicon、Apple Touch Icon、OG 图均为项目本地资源。

## Google 地图

使用需求中给出的地图 iframe，并将地图语言/地区参数改为尼泊尔语 + 尼泊尔地区（`ne` / `np`）。
