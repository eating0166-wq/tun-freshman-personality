# v7.0.0 Code Refactor Report

## 重構原則

- 保留既有測驗流程、人格資料、分析結果視覺與下載卡視覺。
- 不以刪除程式碼行數為唯一目標；僅移除可確認重複或已無用途的程式碼。
- 將 HTML 行內事件與行內樣式移出，降低頁面結構與行為耦合。

## 已完成

### HTML
- 移除所有 `onclick` 行內事件。
- 移除選擇頁提示文字的行內樣式。
- 為互動按鈕補上穩定 ID，改由 JavaScript 集中綁定。
- 將 CSS 與 JavaScript 資源版本統一更新為 `7.0.0`。

### JavaScript
- 新增共用 DOM 查詢與文字設定工具。
- 新增共用人格主題取得函式。
- 將人格主題、代表標籤及能力值拆成獨立渲染函式。
- 將頁面事件集中至 `bindEvents()`，避免 HTML 與 JavaScript 雙重綁定。
- 初始化事件改為只執行一次。
- 下載人格結果卡仍維持獨立 Canvas 渲染，不會修改分析結果頁 DOM。
- 保留人格說明與開學小提醒依內容行數自動增高的下載卡邏輯。

### CSS
- 移除開發註解。
- 移除完全相同的重複宣告。
- 移除同一層級中內容完全相同的重複規則。
- 將原本 HTML 行內提示樣式移至 `.selection-hint`。
- 未使用激進的 selector purge，以避免誤刪 JavaScript 動態產生的狀態樣式。

### PWA
- Service Worker 快取版本更新為 `tun-freshman-v7.0.0`。

## 驗證

- `node --check app.js`
- `node --check analytics.js`
- `node --check config.js`
- `node --check register-sw.js`
- `node --check sw.js`
- HTML 不含 `onclick` 與行內 `style`。
- ZIP 完整性檢查。
