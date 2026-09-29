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

## 网址统一（www / http → https，必须在 Cloudflare 控制台配置）

Workers Static Assets 的 `_redirects` **不支持域名级规则**，因此下面两步只在 Cloudflare 控制台做，不在代码里伪造：

1. **Always Use HTTPS**：`SSL/TLS → Edge Certificates` 开启，把所有 `http://` 请求 301 到 `https://`。
2. **www → 主域名 301**：`Rules → Redirect Rules` 新建规则
   - 自定义表达式：`http.host eq "www.devisfall.com"`
   - 目标 URL：`https://devisfall.com/${1}`（表达式用 `concat("https://devisfall.com", http.request.uri.path)` 或 wildcard 转发），状态码 **301**。

站点侧已配合：

- `astro.config.ts` 的 `SITE = https://devisfall.com` → `canonical`、`og:url`、sitemap 全部只输出非 www 的 https 版本；
- `public/_headers` 下发 HSTS（`max-age=31536000; includeSubDomains; preload`）与安全头；
- `public/robots.txt` 指向 `https://devisfall.com/sitemap-index.xml`。

## SEO 结构约定

- 景点事实与站点名集中在 `src/data/site.ts`（`ATTRACTION` + `SITE_NAME` + `withSiteName()`），改票价/电话/评分/坐标只动这个文件。
- 站点名格式：**景点名称 + 城市 + 旅游指南**（`Devi’s Fall Pokhara — Travel Guide`），`og:site_name`、`WebSite` JSON-LD、`site.webmanifest` 共用同一常量。
- 首页 `title` 走"品牌 + 城市 + 国家 + 意图词"：`Devi’s Fall Pokhara Nepal: Timings, Ticket Price & How to Reach`。
- JSON-LD：`WebSite` + `TouristAttraction`/`LocalBusiness`（含 geo、address、openingHoursSpecification、aggregateRating、priceRange、alternateName 别名变体）+ `BreadcrumbList` + `FAQPage`。
- FAQ 同时提供英文（opening hours / entry fee / how to reach / best time）与尼泊尔文版本，命中两类查询。

## GA4 / Cookie

GA4 Measurement ID: `G-HXM22WWPKP`。Google Analytics 脚本只有在访客明确接受分析 Cookie 后才会动态加载；拒绝时网站功能不受影响。

## 图片

页面使用 Wikimedia Commons 上的真实 Devi’s Fall / Gupteshwor Cave 实景照片，并在页脚“तस्बिर श्रेय”中按 CC BY-SA 要求署名。Logo、favicon、Apple Touch Icon、OG 图均为项目本地资源。

## Google 地图

使用需求中给出的地图 iframe，并将地图语言/地区参数改为尼泊尔语 + 尼泊尔地区（`ne` / `np`）。

## 多语言与长尾子页

GSC 曝光查询几乎全是英文（`devi's falls pokhara nepal` 等），因此做双语 + 长尾拆分以扩大收录与命中面：

- **语言路由**（`src/i18n.ts`，唯一来源）：ne 为默认语（`/`），en 在 `/en/`；`x-default` 指向英文版（英文查询为主）。
- **首页内容**集中在 `src/content/ne.ts` 与 `src/content/en.ts`，由 `src/components/GuidePage.astro` 统一渲染；改文案只动这两个文件。
- **长尾子页**（门票 / 营业时间 / 交通）数据在 `src/data/guides.ts`，由 `src/components/GuideArticle.astro` 渲染：
  - ne：`/pravesh-shulka/`、`/khulne-samaya/`、`/bato/`
  - en：`/en/entry-fee/`、`/en/opening-hours/`、`/en/how-to-reach/`
- 每个页面输出 `hreflang`（ne-NP / en / x-default）、正确 `canonical` 与 `WebSite`/`BreadcrumbList`/`FAQPage` JSON-LD；`sitemap` 含全部 8 个 URL（均为非 www 的 https）。
- 站点名格式与 `og:site_name` 仍由 `src/data/site.ts` 的 `SITE_NAME` 统一。

## Google 商家档案（GBP）

- 把 GBP 官网字段设为规范地址 `https://devisfall.com/`（非 www、https），让 2.1 万条评价的本地流量导入官网。
- 建议 GBP 帖子/简介中补充英文入口，指向 `/en/` 及各长尾子页，匹配英文搜索意图。
