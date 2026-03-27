# March / Match AI — 授權式相遇系統 MVP v0.2

> 不是滑卡配對，而是先理解，再介紹。

March 是品牌本體，Match AI 是產品描述。  
這是一個手機優先、單頁式的 dark-journal 互動原型，用來驗證一種更安靜的相遇方式：

1. 以「被理解」開始，是否比傳統交友流程更有感。  
2. 被系統理解的感覺，能不能做到溫柔而不侵入。  
3. 在真正進入 Today / Proposal 之前，是否能先建立一層被使用者確認過的理解。

## 目前版本重點

這一版的核心不是完整功能，而是：

- 保留單頁、深色、日記感的原型氣質
- 將 onboarding 升級為 **inline v0.2 flow**
- 讓使用者先在 `#entry-view` 中完成第一輪理解
- 再進入 `app-main` 的 Today / Proposal 主流程

## 核心原則

- 不做滑卡市場
- 不追求高頻刺激
- 先理解，再介紹
- 原始輸入不直接成為媒合層
- 使用者可校準系統對自己的理解
- 用於介紹的資訊比原始文字更輕、更安全

## 這版做什麼

- 原生 `HTML / CSS / JS` 單頁互動原型
- Brand-first landing hero（March 主品牌，Match AI 為 descriptor）
- Inline onboarding v0.2：
  - `entry`
  - `consent`
  - `freeTalk`
  - `assist`
  - `reflection`
  - `summaryReview`
  - `inlineEdit`
  - `gapFill`
  - `complete`
- Today / Proposal 英文化與語氣校準
- reviewed summary 驅動 Today，而不是直接使用 raw input
- hidden introduction-safe layer（僅作為內部衍生層，不直接顯示給使用者）

## 這版不做什麼

- 不接後端
- 不做登入
- 不做真實媒合
- 不接 AI API
- 不做照片交換、通知、外部聯絡方式
- 不把 onboarding 做成多頁 wizard
- 不暴露內部 state / layer terminology 給使用者

## Onboarding 流程

使用者在 `#entry-view` 中完成第一輪理解：

1. **Entry**  
   品牌首頁，先建立氣質，不先審問。

2. **Consent**  
   使用者決定哪些內容可被理解、可被用於介紹、哪些保持私密。

3. **Free Talk**  
   使用者用自由輸入開始，不像填表。

4. **Reflection**  
   系統先回應「我聽到的是什麼」。

5. **Summary Review**  
   使用者確認、修正、或否定 draft summary。

6. **Gap-fill（conditional）**  
   只在缺少關鍵維度時補一題。

7. **Complete**  
   用一張安靜的 inline card 收尾，再由使用者主動進入 Today。

## 資料理解層級

這一版刻意區分三層：

- **your original words**  
  使用者最原始的輸入

- **your reviewed understanding**  
  使用者確認過、修正過的理解摘要

- **what can be used for introductions**  
  比原始文字更輕、更安全、只用於介紹的衍生層

> 注意：原始輸入不直接作為媒合層。

## 目前主流程

### 1. Entry / Landing
- 品牌首屏
- `Begin` 後展開 onboarding
- `How this works` 為靜態說明，不併入 wizard

### 2. Today
- 讀取 reviewed summary
- 顯示使用者目前被理解後的入口狀態
- 輕量說明三層資料邏輯

### 3. Proposal
- 以介紹信語氣呈現來信提案
- 根據 consent 狀態決定是否為 preview-only
- 維持既有 demo proposal / echo / dialogue 解鎖節奏

## 如何打開原型

直接用瀏覽器開啟 [index.html](./index.html) 即可。

## 後續擴充方向

1. 更成熟的 reviewed summary 生成方式
2. 邊界設定獨立化
3. introduction-safe layer 的透明度設計
4. 任務交換與對話層更自然地接入 onboarding 後流程
5. 真實 AI / backend 串接（未來版本）