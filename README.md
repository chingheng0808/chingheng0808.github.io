# Ching-Heng Cheng — Personal Homepage

個人職涯與作品首頁，使用純 HTML、CSS、JavaScript，由 GitHub Pages 發佈。

- 正式網址：https://chingheng0808.github.io/
- 專案：`chingheng0808/chingheng0808.github.io`
- 無需 npm、編譯或套件安裝。

## 修改內容

- `index.html`：個人簡介、論文、學經歷、競賽與聯絡方式。
- `style.css`：字型、顏色、間距與響應式版型。
- `site-config.js`：填入 LinkedIn 個人網址，頁首與聯絡區的連結將自動顯示。
- `images/`：依照資料夾中的 README 放入個人照片與論文配圖。

## 本機預覽

在此專案目錄執行：

```sh
python3 -m http.server 8000
```

瀏覽 http://localhost:8000 。缺少預留圖片時的 404 為預期結果，頁面會顯示空白區塊。

## 更新網站

```sh
git add .
git commit -m "Update homepage"
git push origin main
```

GitHub Pages 使用 `main` 分支的根目錄，自動重新發佈。若首次設定，至 repository → Settings → Pages → Deploy from a branch → main / (root)。

## 內容來源與設計

個人資料與論文資料依提供的履歷與本人更新整理。現職為台達電子新竹辦公室（台達研究院）研發替代役，自 2026 年 9 月起。新增的 IET Taipei 碩士論文獎優等未指定年份，因此頁面不標示年份。
公開頁面未包含私人電話、推薦人的聯絡資訊或原始履歷 PDF。
版型參考 https://nandometzger.github.io/ 的簡潔學術首頁，程式與版面重新製作，未複製其圖片或研究內容。
字型使用 Google Fonts DM Sans，離線時會退回 Arial / sans-serif。

## Google 搜尋與收錄

- `index.html` 包含姓名、中文姓名、chingheng 別名、ProfilePage / Person / WebSite JSON-LD。
- `robots.txt` 指向 `sitemap.xml`；網站只有一個正式首頁，因此 sitemap 僅列出首頁。
- 修改首頁實質內容時，同步更新 sitemap 的 `lastmod` 為實際修改日期。
- Search Console 請新增網址前置字元資源 `https://chingheng0808.github.io/`，以 HTML 標記或 HTML 檔案驗證。
- 驗證成功後提交 `sitemap.xml`，並在網址審查對首頁要求建立索引。
- 不要將 Google 驗證碼替換為示範值；取得 Google 實際核發的驗證標記或檔案後才加入。
- Google 是否收錄、排名與搜尋摘要由 Google 決定，並非部署後立即生效。
