/* demoData */
const demoData = {
  seeds: [
    "這幾天有點忙，回家後很想把世界先關小一點，但還是想被溫柔地理解。",
    "最近在想是不是該換一個方向，心裡有點期待，也有點不確定自己站不站得穩。",
    "昨天陪家人吃晚餐時突然覺得，原來平常的小事也會讓人想被好好理解。",
    "最近有點想靠近誰，但也不想把一切推太快，好像還在找剛好的距離。",
  ],
  excludedText: "地點、真名、聯絡方式、具體家庭細節只停留在這個本地頁面，不會被拿去生成更多分支。",
  transparencyText: "摘要、提案理由、對話扶手都由前端固定規則和 demo 資料生成；這版沒有後端，也沒有 AI API。",
  presets: {
    default: {
      keywords: [],
      statusLine: "今天像把窗簾拉開一點，讓空氣慢慢進來。",
      questionCopy: "留下一小段近況，讓系統只抓你願意給出的輪廓。",
      summaryText: "你看起來比較想要一種不必表現、也不必立刻熱絡的靠近。這版原型先把節奏放慢，讓理解停在你願意給出的範圍內。",
      proposalTone: "慢節奏提案",
      proposalHeadline: "安岫想用一封慢慢的信靠近你",
      proposalOpening: "嗨，我是安岫。這不是一封要你立刻回覆的通知，只是一個輕輕靠近的提案。讀到你今天的狀態後，我想像你比較適合一種不追問、先留白的相遇方式。",
      proposalReasons: [
        "你的近況帶著觀察感，像是在替自己的界線留位置，這和安岫的節奏很接近。",
        "這次提案不要求熱絡，只想確認：如果靠近是慢的，你會不會比較願意留在這裡。",
      ],
      proposalProfile: "對方偏好慢慢交換真實，不急著把彼此推進熱絡裡，更像會先看顧節奏的人。",
      proposalPace: "如果今天不想打開，也可以先放著。這封信留在收件匣，不會追著你往下走。",
      proposalSignal: "你像是在找一種可以慢慢長出信任的互動，不急著把自己一次講完。",
      proposalPreview: "收件匣裡有一封慢節奏的提案，它在意的是你要被怎麼理解，而不是你要多快回應。",
      taskPrompt: "寫下一個最近反覆想到的小片段，以及你當時其實沒有說出口的一句話。",
      matchAnswer: "昨天回家時，我在便利商店門口站了很久。不是因為要買什麼，只是忽然覺得，如果有人能陪我一起沉默，也會是一種照顧。\n\n我沒說出口的是：其實我很怕自己一開口就顯得太需要。",
      chatIntro: "看到你剛剛停下來回那一句，我比較放鬆了。如果你願意，我們可以先從今天過得怎麼樣開始。",
      replies: {
        continue: "我最明顯的感覺其實是鬆一下，像終於不用把自己撐得那麼完整。",
        lighter: "今天有個小瞬間讓我舒服一點，就是喝到第一口熱茶的時候。",
        deeper: "如果再深一點，我大概最怕的是自己明明很需要，卻還是習慣先把需要藏起來。",
        task: "可以，我喜歡這種慢慢交換的方式。那我也寫一句最近想留住的畫面給你。",
        close: "好，停在這裡也很好。今晚這樣的份量對我來說剛剛好。",
      },
    },
    busy: {
      keywords: ["忙", "累", "加班", "壓力", "工作", "喘", "疲", "撐"],
      statusLine: "今天像把肩膀放下半寸，先讓自己有地方落下來。",
      questionCopy: "如果最近比較耗，就只寫下那個最想被輕輕接住的片刻。",
      summaryText: "你最近像在高強度節奏裡保留最後一點柔軟。你不是不想連結，而是需要一種不會再多拿走你力氣的靠近。",
      proposalTone: "低壓力提案",
      proposalHeadline: "安岫想用比較不打擾的方式靠近你",
      proposalOpening: "讀到你的近況，我先想到的不是怎麼把話題變多，而是怎麼讓這段開始不要變成另一件需要你用力完成的事。如果你願意，這封提案只想先陪你把節奏放慢。",
      proposalReasons: [
        "你現在比較像需要被接住，而不是被追問，這和安岫習慣的靠近方式很相近。",
        "這次開始刻意留白，讓你可以先用最低耗能的方式決定要不要往下走。",
      ],
      proposalProfile: "對方擅長把聲音放小，不急著給建議，會先確認你現在有沒有餘裕說下去。",
      proposalPace: "接受也好，稍後也好，都不影響這封信的溫度。這裡不把即時回覆當成誠意。",
      proposalSignal: "你需要的不是更熱鬧，而是有人知道什麼時候該把聲音放小一點。",
      proposalPreview: "這封提案注意到你最近比較像在硬撐節奏，所以它把步調放得很低，不要求你立刻投入。",
      taskPrompt: "寫一個最近讓你覺得「想先喘一下」的瞬間，和你希望別人怎麼靠近。",
      matchAnswer: "我上週有一天回家後，連燈都沒開就坐在地板上。那不是崩潰，比較像把自己暫停。\n\n如果有人在那種時候靠近我，我希望他先問：要不要我陪你安靜一下？",
      chatIntro: "你剛剛那個回應讓我覺得自己不用急著整理好才開口。要不要先從最近最想喘口氣的時刻開始？",
      replies: {
        continue: "那個瞬間我最想要的，其實只是有人不要立刻給建議，先陪我待在原地就好。",
        lighter: "今天比較輕的一刻，是下班路上吹到風的時候，我忽然覺得自己還在。",
        deeper: "更深一點的話，我可能怕的是自己一累就變得很難被靠近，連我自己都找不到入口。",
        task: "好，我們各自寫一句最近想放下的重量，感覺會比直接聊更容易。",
        close: "可以，今天先到這裡對我來說很剛好。謝謝你沒有把這段聊天推太快。",
      },
    },
    transition: {
      keywords: ["轉", "搬", "換", "離職", "開始", "新", "未來", "方向", "改變", "不確定"],
      statusLine: "今天站在變動和期待中間，腳下還在找新的重心。",
      questionCopy: "寫下那個快要開始、又還沒有站穩的感覺就好。",
      summaryText: "你像在搬動內心的家具，對新的方向有想像，也還在找腳感。你需要的也許不是答案，而是一個能陪你慢慢對焦的人。",
      proposalTone: "過渡期提案",
      proposalHeadline: "安岫想陪你站在變動的門口一下",
      proposalOpening: "你留下的語氣像是在一段過渡裡試著穩住自己，所以這封提案不想把你往前推，只想陪你先站穩一下。如果相遇可以是一種整理，而不是新的壓力，也許我們可以試試看。",
      proposalReasons: [
        "你現在的敘述裡同時有期待和猶豫，這很適合一種不急著定義彼此的開始。",
        "安岫習慣用提問和停頓陪人想清楚，而不是急著把故事講成結論。",
      ],
      proposalProfile: "對方比較像會陪你看清楚、一起整理感受的人，而不是把你推向快速決定的人。",
      proposalPace: "如果這幾天還在調整步伐，可以先把這封信放著。這裡允許變動中的人慢慢回來。",
      proposalSignal: "你現在比較需要的是有人陪你看清楚，而不是替你太快下判斷。",
      proposalPreview: "這封提案看見你正處在過渡裡，所以它不是催你做決定，而是先提供一個能一起想一想的空間。",
      taskPrompt: "寫下最近一個「快要開始什麼」的時刻，和你其實擔心的部分。",
      matchAnswer: "我最近在收拾舊筆記時，發現自己一直把不確定寫得很體面。其實真正的心情是：我很想往前，但也怕一走就回不去了。\n\n如果要有人陪我經過這段，我希望他不用替我決定，只要提醒我不用一個人扛。",
      chatIntro: "謝謝你剛剛沒有急著把事情講成答案。你如果願意，我想先聽你說，那個快要開始的感覺目前比較像期待，還是比較像不安？",
      replies: {
        continue: "目前比較明顯的是兩個感覺一起來，所以我也還在學著不要急著選邊站。",
        lighter: "如果換輕一點，最近有件小事讓我比較確定自己真的在往前，就是我開始願意把新的行程寫進日曆。",
        deeper: "更深一點的話，我可能最怕的是自己選了之後，會讓某個原來的自己消失。",
        task: "好，我們各自寫一句最近反覆對自己說的話，感覺會很貼合這段過渡。",
        close: "好，停在這裡也很好。謝謝你沒有把這段變成追問。",
      },
    },
    grounded: {
      keywords: ["家", "晚餐", "日常", "照顧", "陪", "父母", "安穩", "平常", "小事"],
      statusLine: "今天的溫度比較靠近日常，像一盞沒有太亮但很穩的燈。",
      questionCopy: "把一個平常的小片刻寫下來，讓它被安靜地看見。",
      summaryText: "你留意的是那些看起來平常、其實很重要的照顧細節。你可能比較信任慢慢累積出來的安心，而不是一下子很熱烈的靠近。",
      proposalTone: "日常感提案",
      proposalHeadline: "安岫想從日常裡慢慢認識你",
      proposalOpening: "讀到你的近況時，我想到的不是什麼精彩場面，而是那種一起把普通一天過得比較柔軟的能力。如果你也覺得日常本身值得被珍惜，也許這封提案可以先停在你手邊。",
      proposalReasons: [
        "你的語氣裡有很多穩穩的照顧感，這很適合從小事開始累積信任。",
        "安岫偏好在平常裡認識一個人，這讓這封提案更像一封信，而不是一個通知。",
      ],
      proposalProfile: "對方更在意能不能一起把普通的一天過得柔軟，而不是把彼此包裝得很亮眼。",
      proposalPace: "這裡不要求馬上熱絡。慢慢回，或只是先讀著，也都算是一種靠近。",
      proposalSignal: "你看重的是能不能一起把普通的一天過得比較柔軟，而不是把彼此包裝得很亮眼。",
      proposalPreview: "這封提案注意到你對日常感有敏感度，所以它不是要製造刺激，而是想確認平靜會不會也是一種吸引。",
      taskPrompt: "寫下最近一個讓你覺得被日常安放的片刻，和你想和別人分享的原因。",
      matchAnswer: "前幾天我煮完晚餐後，沒有立刻收拾，只是坐在餐桌邊看著那盞黃燈。那個時候我忽然覺得，原來平靜不是無聊，而是一種有人能一起待著的安全。\n\n如果要分享給誰，我希望他聽到的不是事件本身，而是那種安穩終於落下來的感覺。",
      chatIntro: "你剛剛的回應讓我想到，日常好像真的比精彩更能看出一個人。要不要先分享你最近最想留住的一個普通片刻？",
      replies: {
        continue: "我想留住的其實不是那件事本身，而是那個時候整個人慢下來的感覺。",
        lighter: "換輕一點的話，今天最舒服的小事是曬到一點點下午的太陽。",
        deeper: "更深一點，我大概是在怕如果沒有人懂這些小事，它們就會默默被生活吞掉。",
        task: "可以，我們各自交換一句最近想重複過的日常場景。",
        close: "好，先停在這裡很舒服。謝謝你願意把普通的小事講得這麼真。",
      },
    },
    longing: {
      keywords: ["想", "期待", "靠近", "喜歡", "心動", "聊天", "遇見", "連結", "陪伴"],
      statusLine: "今天心裡有一點想靠近，但還想保留自己的呼吸。",
      questionCopy: "不用把自己一次講完，只要留下一句最近想靠近的心情。",
      summaryText: "你沒有要熱鬧，你是在試探一種剛好的靠近：不冒進，但也不是把自己完全藏起來。這種語氣很適合從一點真實開始。",
      proposalTone: "試探式提案",
      proposalHeadline: "安岫想確認這份想靠近是不是也讓你舒服",
      proposalOpening: "讀到你的近況時，我感覺你不是想要一段很快很亮的開始，而是想知道：如果靠近也能保留呼吸，會不會比較像你要的樣子。這封提案想先試著站在那個距離上。",
      proposalReasons: [
        "你願意透露一點想靠近，但沒有把自己整個推出去，這份節制很珍貴。",
        "安岫偏好先交換真實，再慢慢長出親密，所以這份提案不會把你往熱鬧裡推。",
      ],
      proposalProfile: "對方偏好先確認彼此是不是舒服，再決定要不要把距離拉近，不靠熱鬧往前衝。",
      proposalPace: "你可以先收著，等比較有餘裕時再打開。這裡不把猶豫當作退縮。",
      proposalSignal: "你期待的是被理解之後的靠近，不是只靠熱情撐著往前跑。",
      proposalPreview: "這封提案看見你心裡那一點想靠近，所以它把開始寫得像一封信，而不是一個需要立刻證明的邀請。",
      taskPrompt: "寫下一個最近讓你想起「如果有人在這裡就好了」的片刻，以及你期待那個人做什麼。",
      matchAnswer: "前幾天回家路上看到一棟樓裡亮著幾盞暖黃的燈，我突然想到，如果有人能在我回到家時問一句「今天還好嗎」，可能就會讓整天柔軟很多。\n\n我期待的不是被拯救，只是有人願意真的在場。",
      chatIntro: "你剛剛那段回應讓我覺得，靠近這件事好像不用那麼大聲。如果你願意，我想先聽你說，那個「有人在就好了」的畫面長什麼樣子。",
      replies: {
        continue: "那個畫面裡最重要的其實不是做了什麼，而是對方真的在場，沒有心不在焉。",
        lighter: "如果換輕一點，今天有個瞬間讓我覺得被安慰，就是晚上的風比我想像中溫柔。",
        deeper: "更深一點的話，我可能最怕的是自己想靠近，卻剛好遇到一個只想熱鬧的人。",
        task: "好，我們各自交換一句最近最想被別人聽懂的話。",
        close: "可以，今天先停在這裡。我反而喜歡這樣不把感覺一次用完。",
      },
    },
  },
};

/* state */
const state = {
  entryStarted: false,
  entryMode: "",
  currentView: "home",
  journalEntry: "",
  summaryText: "",
  proposalStatus: "pending",
  taskStatus: "locked",
  taskAnswer: "",
  matchAnswer: "",
  selectedLine: "",
  messages: [],
  themeId: "default",
  flowThemeId: "default",
  flowLocked: false,
  statusLine: "",
  questionCopy: "",
  sourceHint: "",
  sourceDetail: "",
  proposalCard: {
    tone: "",
    headline: "",
    opening: "",
    reasons: [],
    profile: "",
    pace: "",
    signal: "",
    preview: "",
    basis: "",
  },
  taskPrompt: "",
  resonanceReply: "",
  chatDraft: "",
  guideMode: "continue",
  branchNote: "你可以接受、先放回收件匣，或明確停在這裡。",
  seedIndex: 0,
  awaitingReply: false,
  pendingFocus: "",
};

/* viewSelectors */
const viewSelectors = {
  entryView: document.querySelector("#entry-view"),
  appMain: document.querySelector("#app-main"),
  homeButton: document.querySelector("#home-button"),
  views: [...document.querySelectorAll("[data-view]")],
  navButtons: [...document.querySelectorAll('[data-action="goto"]')],
  homeDate: document.querySelector("#home-date"),
  homeStatusLine: document.querySelector("#home-status-line"),
  homeQuestionCopy: document.querySelector("#home-question-copy"),
  journalEntry: document.querySelector("#journal-entry"),
  sourceHint: document.querySelector("#source-hint"),
  summaryText: document.querySelector("#summary-text"),
  sourceDetail: document.querySelector("#source-detail"),
  sourceExcluded: document.querySelector("#source-excluded"),
  sourceTransparency: document.querySelector("#source-transparency"),
  inboxTitle: document.querySelector("#inbox-title"),
  inboxPreview: document.querySelector("#inbox-preview"),
  proposalStatusChip: document.querySelector("#proposal-status-chip"),
  proposalSignal: document.querySelector("#proposal-signal"),
  proposalPaceHome: document.querySelector("#proposal-pace-home"),
  homeFlowButton: document.querySelector("#home-flow-button"),
  proposalHeadline: document.querySelector("#proposal-headline"),
  proposalToneChip: document.querySelector("#proposal-tone-chip"),
  proposalOpening: document.querySelector("#proposal-opening"),
  proposalReasons: document.querySelector("#proposal-reasons"),
  proposalProfile: document.querySelector("#proposal-profile"),
  proposalPace: document.querySelector("#proposal-pace"),
  proposalBasis: document.querySelector("#proposal-basis"),
  proposalAcceptButton: document.querySelector("#proposal-accept-button"),
  proposalLaterButton: document.querySelector("#proposal-later-button"),
  proposalRejectButton: document.querySelector("#proposal-reject-button"),
  proposalBranchNote: document.querySelector("#proposal-branch-note"),
  taskStatusChip: document.querySelector("#task-status-chip"),
  taskPrompt: document.querySelector("#task-prompt"),
  taskAnswer: document.querySelector("#task-answer"),
  taskHint: document.querySelector("#task-hint"),
  taskSubmitButton: document.querySelector("#task-submit-button"),
  taskRevealChip: document.querySelector("#task-reveal-chip"),
  taskRevealPlaceholder: document.querySelector("#task-reveal-placeholder"),
  taskRevealPanel: document.querySelector("#task-reveal-panel"),
  matchAnswerText: document.querySelector("#match-answer-text"),
  resonanceCard: document.querySelector("#resonance-card"),
  resonanceLines: document.querySelector("#resonance-lines"),
  resonanceReply: document.querySelector("#resonance-reply"),
  resonanceHint: document.querySelector("#resonance-hint"),
  resonanceSubmitButton: document.querySelector("#resonance-submit-button"),
  chatBookmarkTitle: document.querySelector("#chat-bookmark-title"),
  chatBookmarkCopy: document.querySelector("#chat-bookmark-copy"),
  guideModeChip: document.querySelector("#guide-mode-chip"),
  guideCopy: document.querySelector("#guide-copy"),
  guideButtons: [...document.querySelectorAll('[data-action="guide"]')],
  messageCountChip: document.querySelector("#message-count-chip"),
  messagesPanel: document.querySelector("#messages-panel"),
  chatForm: document.querySelector("#chat-form"),
  chatInput: document.querySelector("#chat-input"),
  chatHint: document.querySelector("#chat-hint"),
};

/* renderers */
function getTodayText() {
  return new Intl.DateTimeFormat("zh-TW", {
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date());
}

function getPreset(themeId) {
  return demoData.presets[themeId] || demoData.presets.default;
}

function getFlowPreset() {
  return getPreset(state.flowThemeId);
}

function detectTheme(text) {
  if (!text.trim()) {
    return "default";
  }

  let winner = "default";
  let highest = 0;

  Object.entries(demoData.presets).forEach(([themeId, preset]) => {
    const score = preset.keywords.reduce((total, keyword) => total + (text.includes(keyword) ? 1 : 0), 0);
    if (score > highest) {
      winner = themeId;
      highest = score;
    }
  });

  return winner;
}

function collectKeywords(text, themeId) {
  return getPreset(themeId).keywords.filter((keyword) => text.includes(keyword)).slice(0, 3);
}

function applyThemeToFlow(themeId) {
  const preset = getPreset(themeId);
  const keywords = collectKeywords(state.journalEntry, themeId);
  const basis = state.journalEntry.trim()
    ? `來自你剛剛寫下的近況${keywords.length ? `，固定規則暫時抓到的詞有：${keywords.join("、")}` : "，但沒有額外擴寫成更多推論"}。`
    : "目前沒有真實近況，先以最低限度的示意文案生成提案。";

  state.flowThemeId = themeId;
  state.proposalCard = {
    tone: preset.proposalTone,
    headline: preset.proposalHeadline,
    opening: preset.proposalOpening,
    reasons: [...preset.proposalReasons],
    profile: preset.proposalProfile,
    pace: preset.proposalPace,
    signal: preset.proposalSignal,
    preview: preset.proposalPreview,
    basis,
  };
  state.taskPrompt = preset.taskPrompt;
  state.matchAnswer = preset.matchAnswer;
}

function syncFromJournal() {
  const entry = state.journalEntry.trim();
  state.themeId = detectTheme(entry);
  const preset = getPreset(state.themeId);
  const keywords = collectKeywords(entry, state.themeId);

  if (!entry) {
    state.statusLine = "今天還沒留下近況，頁面先維持最輕的輪廓。";
    state.questionCopy = demoData.presets.default.questionCopy;
    state.summaryText = "你還沒留下近況前，系統只保留最低限度的示意，不會自動補完你的故事。";
    state.sourceHint = "尚未偵測到你想留下的重點。";
    state.sourceDetail = "目前還沒有真實近況，首頁只用預設文案示意。";
  } else {
    state.statusLine = preset.statusLine;
    state.questionCopy = preset.questionCopy;
    state.summaryText = preset.summaryText;
    state.sourceHint = keywords.length ? `讀到的線索：${keywords.join("、")}` : "讀到的是整段語氣，沒有額外擴寫成更多推論。";
    state.sourceDetail = keywords.length
      ? `來自你剛剛寫下的近況，固定規則暫時抓到的詞有：${keywords.join("、")}。`
      : "來自你剛剛寫下的整段近況；這版不做額外隱形推論。";
  }

  if (!state.flowLocked) {
    applyThemeToFlow(state.themeId);
  }
}

function isViewUnlocked(viewName) {
  if (viewName === "home" || viewName === "proposal") {
    return true;
  }
  if (viewName === "task") {
    return state.proposalStatus === "accepted" || state.taskStatus !== "locked";
  }
  if (viewName === "chat") {
    return state.taskStatus === "chatting";
  }
  return false;
}

function renderNav() {
  viewSelectors.navButtons.forEach((button) => {
    const target = button.dataset.target;
    const unlocked = isViewUnlocked(target);
    button.disabled = !unlocked;
    button.classList.toggle("is-active", state.currentView === target);
    button.classList.toggle("is-locked", !unlocked);
  });
}

function renderEntry() {
  const hasEntryShell = Boolean(viewSelectors.entryView && viewSelectors.appMain && viewSelectors.homeButton);
  if (!hasEntryShell) {
    state.entryStarted = true;
    return;
  }

  const started = state.entryStarted;
  viewSelectors.entryView.hidden = started;
  viewSelectors.appMain.hidden = !started;
  viewSelectors.homeButton.hidden = !started;
}

function renderViews() {
  viewSelectors.views.forEach((view) => {
    view.hidden = view.dataset.view !== state.currentView;
  });
}

function renderProposalReasons() {
  viewSelectors.proposalReasons.replaceChildren();
  state.proposalCard.reasons.forEach((reason, index) => {
    const panel = document.createElement("div");
    panel.className = "panel";

    const count = document.createElement("strong");
    count.textContent = String(index + 1);

    const copy = document.createElement("p");
    copy.className = "panel-body";
    copy.textContent = reason;

    panel.append(count, copy);
    viewSelectors.proposalReasons.append(panel);
  });
}

function buildInboxMeta() {
  if (state.taskStatus === "chatting") {
    return {
      title: "這封提案已走進對話，節奏仍然留在你手上",
      preview: "你們先交換了一段真實，再開啟聊天。現在仍可回到扶手或放慢，不需要把親近一次用完。",
      button: "回到對話",
      target: "chat",
      chip: "對話中",
    };
  }

  if (state.taskStatus === "answered") {
    return {
      title: "你們已交換回答，現在可以圈住一句有感的地方",
      preview: "對方的回答已揭露。這個原型把互動的第一步放在交換真實，不是直接掉進聊天裡。",
      button: "回到交換內容",
      target: "task",
      chip: "已揭露",
    };
  }

  if (state.proposalStatus === "accepted") {
    return {
      title: "你已接受提案，下一步是交換一段真實回答",
      preview: "這封信已經被你打開，接下來不是立刻聊天，而是先各自寫下一小段真實。",
      button: "進入任務交換",
      target: "task",
      chip: "已接受",
    };
  }

  if (state.proposalStatus === "later") {
    return {
      title: "這封提案已暫放回收件匣，節奏還在你手上",
      preview: "它不會因為你晚一點再讀就變冷掉。你可以在有餘裕的時候回來決定。",
      button: "重讀這封提案",
      target: "proposal",
      chip: "已暫放",
    };
  }

  if (state.proposalStatus === "rejected") {
    return {
      title: "你已婉拒這次靠近，這封信目前停在靜置區",
      preview: "這個原型允許明確地停下來。若只是想看文案流程，仍可重新打開這封提案。",
      button: "重新查看提案",
      target: "proposal",
      chip: "已婉拒",
    };
  }

  return {
    title: "有一封安靜的提案正在等你決定要不要打開",
    preview: state.proposalCard.preview,
    button: "閱讀這封提案",
    target: "proposal",
    chip: "待閱讀",
  };
}

function renderHome() {
  const inboxMeta = buildInboxMeta();
  viewSelectors.homeDate.textContent = getTodayText();
  viewSelectors.homeStatusLine.textContent = state.statusLine;
  viewSelectors.homeQuestionCopy.textContent = state.questionCopy;
  viewSelectors.journalEntry.value = state.journalEntry;
  viewSelectors.sourceHint.textContent = state.sourceHint;
  viewSelectors.summaryText.textContent = state.summaryText;
  viewSelectors.sourceDetail.textContent = state.sourceDetail;
  viewSelectors.sourceExcluded.textContent = demoData.excludedText;
  viewSelectors.sourceTransparency.textContent = demoData.transparencyText;
  viewSelectors.inboxTitle.textContent = inboxMeta.title;
  viewSelectors.inboxPreview.textContent = inboxMeta.preview;
  viewSelectors.proposalStatusChip.textContent = inboxMeta.chip;
  viewSelectors.proposalSignal.textContent = state.proposalCard.signal;
  viewSelectors.proposalPaceHome.textContent = state.proposalCard.pace;
  viewSelectors.homeFlowButton.textContent = inboxMeta.button;
  viewSelectors.homeFlowButton.dataset.target = inboxMeta.target;
}

function renderProposal() {
  viewSelectors.proposalHeadline.textContent = state.proposalCard.headline;
  viewSelectors.proposalToneChip.textContent = state.proposalCard.tone;
  viewSelectors.proposalOpening.textContent = state.proposalCard.opening;
  viewSelectors.proposalProfile.textContent = state.proposalCard.profile;
  viewSelectors.proposalPace.textContent = state.proposalCard.pace;
  viewSelectors.proposalBasis.textContent = state.proposalCard.basis;
  viewSelectors.proposalBranchNote.textContent = state.branchNote;
  renderProposalReasons();

  if (state.taskStatus === "chatting") {
    viewSelectors.proposalAcceptButton.textContent = "回到對話";
    viewSelectors.proposalLaterButton.hidden = true;
    viewSelectors.proposalRejectButton.hidden = true;
  } else if (state.proposalStatus === "accepted") {
    viewSelectors.proposalAcceptButton.textContent = "進入任務交換";
    viewSelectors.proposalLaterButton.hidden = true;
    viewSelectors.proposalRejectButton.hidden = true;
  } else {
    viewSelectors.proposalAcceptButton.textContent = "接受這封提案";
    viewSelectors.proposalLaterButton.hidden = false;
    viewSelectors.proposalRejectButton.hidden = false;
  }
}

function renderTaskLines() {
  viewSelectors.resonanceLines.replaceChildren();
  state.matchAnswer
    .replace(/\n+/g, " ")
    .split(/(?<=[。！？])/u)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 4)
    .forEach((line) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "button button-line";
      button.dataset.action = "select-line";
      button.dataset.line = line;
      button.textContent = `「${line}」`;
      button.classList.toggle("is-active", state.selectedLine === line);
      viewSelectors.resonanceLines.append(button);
    });
}

function renderTask() {
  viewSelectors.taskStatusChip.textContent = state.taskStatus === "answered" || state.taskStatus === "chatting" ? "已送出" : "待完成";
  viewSelectors.taskPrompt.textContent = state.taskPrompt;
  viewSelectors.taskAnswer.value = state.taskAnswer;
  viewSelectors.taskAnswer.readOnly = state.taskStatus !== "ready";
  viewSelectors.taskHint.textContent = state.taskStatus === "ready"
    ? "送出前，你只需要對自己誠實一點點。"
    : "對方的回答已揭露。先讀完，再圈一句讓你停住的話。";
  viewSelectors.taskSubmitButton.disabled = state.taskStatus !== "ready";
  viewSelectors.taskRevealChip.textContent = state.taskStatus === "ready" ? "尚未開啟" : "已揭露";
  viewSelectors.taskRevealPlaceholder.hidden = state.taskStatus !== "ready";
  viewSelectors.taskRevealPanel.hidden = state.taskStatus === "ready";
  viewSelectors.matchAnswerText.textContent = state.matchAnswer;
  viewSelectors.resonanceCard.hidden = state.taskStatus === "ready";
  viewSelectors.resonanceReply.value = state.resonanceReply;
  viewSelectors.resonanceHint.textContent = state.selectedLine
    ? `你圈住了：${state.selectedLine}`
    : "先選一句，再送出你的短回應。";
  viewSelectors.resonanceSubmitButton.disabled = state.taskStatus === "chatting";

  if (state.taskStatus !== "ready") {
    renderTaskLines();
  }
}

function renderMessages() {
  viewSelectors.messagesPanel.replaceChildren();
  const output = [...state.messages];
  if (state.awaitingReply) {
    output.push({ role: "system", text: "對方正在慢慢寫下一句。" });
  }

  output.forEach((message) => {
    const bubble = document.createElement("div");
    bubble.className = `message message-${message.role}`;
    bubble.textContent = message.text;
    viewSelectors.messagesPanel.append(bubble);
  });

  requestAnimationFrame(() => {
    viewSelectors.messagesPanel.scrollTop = viewSelectors.messagesPanel.scrollHeight;
  });
}

function renderChat() {
  const guide = guidePromptMaps[state.guideMode];
  const messageCount = state.messages.filter((message) => message.role !== "system").length;
  viewSelectors.chatBookmarkTitle.textContent = state.selectedLine ? "從你圈住的那一句開始" : "從剛才交換到的真實開始";
  viewSelectors.chatBookmarkCopy.textContent = state.selectedLine
    ? `你停在這句：「${state.selectedLine}」`
    : "你們先交換了回答，再開始聊天。";
  viewSelectors.guideModeChip.textContent = guide.label;
  viewSelectors.guideCopy.textContent = guide.copy;
  viewSelectors.messageCountChip.textContent = `${messageCount} 則往來`;
  viewSelectors.chatInput.value = state.chatDraft;
  viewSelectors.chatHint.textContent = state.chatDraft
    ? "草稿已帶入，可直接修改後送出。"
    : "可自由輸入，或先點一個扶手帶出草稿。";
  viewSelectors.guideButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.guide === state.guideMode);
  });
  renderMessages();
}

function renderApp() {
  renderEntry();
  if (!state.entryStarted) {
    return;
  }

  renderNav();
  renderViews();
  renderHome();
  renderProposal();
  renderTask();
  if (state.currentView === "chat") {
    renderChat();
  }

  if (state.pendingFocus) {
    const focusTarget = state.pendingFocus;
    state.pendingFocus = "";
    requestAnimationFrame(() => {
      if (focusTarget === "journal") {
        viewSelectors.journalEntry.focus();
        viewSelectors.journalEntry.setSelectionRange(viewSelectors.journalEntry.value.length, viewSelectors.journalEntry.value.length);
      } else if (focusTarget === "proposal") {
        viewSelectors.homeFlowButton.focus();
      }
    });
  }
}

/* eventHandlers */
function handleActionClick(event) {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) {
    return;
  }

  const action = actionTarget.dataset.action;

  if (action === "go-home") {
    setView("home");
    return;
  }
  if (action === "start-entry") {
    startEntry(actionTarget.dataset.entryMode || "browse");
    return;
  }
  if (action === "goto") {
    setView(actionTarget.dataset.target);
    return;
  }
  if (action === "seed-journal") {
    seedJournalEntry();
    return;
  }
  if (action === "open-main-flow") {
    setView(actionTarget.dataset.target || "proposal");
    return;
  }
  if (action === "accept-proposal") {
    acceptProposal();
    return;
  }
  if (action === "later-proposal") {
    parkProposal();
    return;
  }
  if (action === "reject-proposal") {
    rejectProposal();
    return;
  }
  if (action === "submit-task") {
    revealTaskExchange();
    return;
  }
  if (action === "select-line") {
    state.selectedLine = actionTarget.dataset.line || "";
    renderTask();
    return;
  }
  if (action === "submit-resonance") {
    openChatFromResonance();
    return;
  }
  if (action === "guide") {
    applyGuide(actionTarget.dataset.guide);
  }
}

function bindEvents() {
  document.addEventListener("click", handleActionClick);

  viewSelectors.journalEntry.addEventListener("input", (event) => {
    state.journalEntry = event.target.value;
    syncFromJournal();
    renderApp();
  });

  viewSelectors.taskAnswer.addEventListener("input", (event) => {
    state.taskAnswer = event.target.value;
  });

  viewSelectors.resonanceReply.addEventListener("input", (event) => {
    state.resonanceReply = event.target.value;
  });

  viewSelectors.chatInput.addEventListener("input", (event) => {
    state.chatDraft = event.target.value;
  });

  viewSelectors.chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sendMessage();
  });
}

/* flowTransitions */
function setView(viewName) {
  if (!state.entryStarted) {
    return;
  }
  if (!isViewUnlocked(viewName)) {
    return;
  }
  state.currentView = viewName;
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startEntry(mode) {
  state.entryStarted = true;
  state.entryMode = mode;
  state.currentView = "home";

  if (mode === "demo") {
    state.journalEntry = demoData.seeds[0];
    state.seedIndex = 1;
    syncFromJournal();
    state.pendingFocus = "proposal";
  } else if (mode === "journal") {
    syncFromJournal();
    state.pendingFocus = "journal";
  } else {
    syncFromJournal();
  }

  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function seedJournalEntry() {
  state.journalEntry = demoData.seeds[state.seedIndex % demoData.seeds.length];
  state.seedIndex += 1;
  syncFromJournal();
  renderApp();
}

function acceptProposal() {
  if (state.taskStatus === "chatting") {
    setView("chat");
    return;
  }
  if (state.proposalStatus === "accepted") {
    setView("task");
    return;
  }

  state.flowLocked = true;
  applyThemeToFlow(state.themeId);
  state.proposalStatus = "accepted";
  state.taskStatus = "ready";
  state.branchNote = "你接受了這封提案。下一步會先交換一段回答，等你寫完才揭露對方內容。";
  setView("task");
}

function parkProposal() {
  state.proposalStatus = "later";
  state.branchNote = "這封信已放回收件匣。你不需要現在決定，稍後再讀也可以。";
  state.currentView = "home";
  renderApp();
}

function rejectProposal() {
  state.proposalStatus = "rejected";
  state.branchNote = "這次靠近已停在這裡。原型會保留這個明確的界線，不再往下推。";
  state.currentView = "home";
  renderApp();
}

function revealTaskExchange() {
  if (!state.taskAnswer.trim()) {
    viewSelectors.taskHint.textContent = "先寫下一小段回答，這裡才會揭露對方的內容。";
    return;
  }

  state.taskStatus = "answered";
  renderApp();
}

function openChatFromResonance() {
  if (!state.selectedLine) {
    viewSelectors.resonanceHint.textContent = "先圈住一句有感的地方，再送出回應。";
    return;
  }
  if (!state.resonanceReply.trim()) {
    viewSelectors.resonanceHint.textContent = "你已圈住一句了，再補一小段自己的回應。";
    return;
  }

  state.taskStatus = "chatting";
  state.messages = [
    { role: "system", text: "你們先交換了回答，再開始對話。" },
    { role: "self", text: `我停在你這句：「${state.selectedLine}」\n${state.resonanceReply.trim()}` },
    { role: "other", text: getFlowPreset().chatIntro },
  ];
  state.guideMode = "continue";
  state.chatDraft = guidePromptMaps.continue.draft(state);
  setView("chat");
}

function applyGuide(mode) {
  state.guideMode = mode;
  state.chatDraft = guidePromptMaps[mode].draft(state);
  renderApp();
  requestAnimationFrame(() => {
    viewSelectors.chatInput.focus();
    viewSelectors.chatInput.setSelectionRange(viewSelectors.chatInput.value.length, viewSelectors.chatInput.value.length);
  });
}

function sendMessage() {
  if (!state.chatDraft.trim()) {
    viewSelectors.chatHint.textContent = "先寫一句，再送出。";
    return;
  }

  const preset = getFlowPreset();
  state.messages.push({ role: "self", text: state.chatDraft.trim() });
  state.chatDraft = "";
  state.awaitingReply = true;
  renderApp();

  window.setTimeout(() => {
    state.awaitingReply = false;
    state.messages.push({ role: "other", text: preset.replies[state.guideMode] || preset.replies.continue });
    renderApp();
  }, 620);
}

/* guidePromptMaps */
const guidePromptMaps = {
  continue: {
    label: "延續剛才",
    copy: "接住對方剛剛留下的細節，讓它再往前半步，不急著換新話題。",
    draft: (currentState) =>
      `你剛剛提到「${currentState.selectedLine || "那個片刻"}」，我想再多知道一點，那時候你最明顯的感覺是什麼？`,
  },
  lighter: {
    label: "換輕一點",
    copy: "如果剛剛有點深，可以先回到今天，聊一個比較輕但還是真實的小片段。",
    draft: () => "如果換輕一點的問題，你今天有沒有一個讓自己稍微鬆一下的小瞬間？",
  },
  deeper: {
    label: "再深一點",
    copy: "如果兩邊都還有餘裕，可以往情緒底層再多問半步，但不要一下子逼到最深處。",
    draft: () => "如果可以再深一點，我想知道，那件事背後你最怕失去的是什麼？",
  },
  task: {
    label: "開一個小任務",
    copy: "卡住時，可以把對話重新變成一個小任務，讓真實有地方放下來。",
    draft: () => "要不要交換一個小任務：各自寫一句最近最想留住的畫面？",
  },
  close: {
    label: "今天先到這裡",
    copy: "把今晚停在一個有邊界但不冷掉的位置，讓下次還有空間接著說。",
    draft: () => "我想先停在這裡，今天和你這樣聊已經很剛好。下次如果你願意，我們可以接著這裡。",
  },
};

syncFromJournal();
bindEvents();
renderApp();
