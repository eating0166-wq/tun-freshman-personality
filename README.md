# TUN 大一命定人格 v5.0 Production

正式網址：

```text
https://tun-freshman-personality.pages.dev/
```

## 已完成

- HTML、CSS、JavaScript 完全分離
- 移除重複 JavaScript 與錯置 script
- 12 種人格與原測驗邏輯完整保留
- 手機 Web Share API 與剪貼簿 fallback
- 分享網址自動帶入 `?result=人格代碼`
- 分享連結可直接顯示指定人格
- 1080×1350 PNG 人格結果卡下載
- `?debug=true` 人格快速切換模式
- GA4／Microsoft Clarity 事件接口
- SEO、Open Graph、Twitter Card、JSON-LD
- PWA、Service Worker、離線快取
- Cloudflare Pages `_headers` 與 `_redirects`
- iPhone 安全區域、小螢幕與橫向響應式

## Cloudflare Pages 重新部署

1. 將此資料夾內的所有內容上傳到 GitHub Repository 根目錄。
2. Cloudflare Pages 連接 GitHub Repository。
3. Framework preset 選擇 `None`。
4. Build command 留空。
5. Build output directory 填寫 `/` 或留空。
6. 部署後清除一次舊快取或使用無痕視窗檢查。

## GA4／Clarity

編輯：

```text
assets/config.js
```

填入：

```js
ga4MeasurementId: "G-XXXXXXXXXX",
clarityProjectId: "xxxxxxxxxx"
```

已設定事件：

- `quiz_start`
- `quiz_submit`
- `quiz_complete`
- `result_share`
- `result_download`
- `quiz_restart`
- `shared_result_view`
- `client_error`

## 測試人格

開啟：

```text
https://tun-freshman-personality.pages.dev/?debug=true
```

可直接切換 12 種人格，不需要重做測驗。

## 分享指定人格

範例：

```text
https://tun-freshman-personality.pages.dev/?result=course
```

人格代碼：

`course`、`campus`、`friends`、`dorm`、`food`、`report`、`sleep`、`saving`、`parttime`、`club`、`love`、`growth`
