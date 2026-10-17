# Ching-Heng Cheng — Personal Homepage

個人學術首頁，使用純 HTML、CSS、JavaScript，由 GitHub Pages 發佈。

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

個人資料與論文資料依提供的履歷整理。保留履歷所列學位狀態，未推測畢業或工作異動。
公開頁面未包含私人電話、推薦人的聯絡資訊或原始履歷 PDF。
版型參考 https://nandometzger.github.io/ 的簡潔學術首頁，程式與版面重新製作，未複製其圖片或研究內容。
字型使用 Google Fonts DM Sans，離線時會退回 Arial / sans-serif。
