# Changelog

## v6.0 — 2026-07-23

- Step 1 mobile layout remains three columns.
- Removed the animated border from unselected option cards.
- Selected cards retain clear click/selection feedback.
- Step 2 analysis panel changed to an animated light-blue gradient.
- Analysis text animates progressively during the five-second loading period.
- Mobile result actions now match desktop: Share on the first row, Download and Retry on the second row.
- Downloaded result card now mirrors the result-page hierarchy and spacing.
- Restored the original TUN 大學網 logo wording, colors, and top-left placement on the downloaded card.
- Restored the centered sticker-style personality title treatment.
- Removed the URL/footer from the downloaded result card.
- Updated Service Worker cache to v6.0.

## v6.0.1 Deploy Fix
- 新增 `wrangler.toml`，明確指定 Cloudflare Pages 靜態輸出目錄為專案根目錄 (`.`)。
- 修正 GitHub 自動部署出現 `Output directory ' ' not found` 的問題。
