/* demoData */
const demoData = {
  seeds: [
    "People often read me as more distant than I am. Most of the time, I’m just slower with trust and warmer once I feel safe.",
    "I open up more naturally when a conversation does not ask me to perform a version of myself that feels brighter than I really am.",
    "What usually helps me stay is simple honesty. I don't need intensity first. I need sincerity first.",
    "I'm careful at the beginning, but not because I don't care. Usually it means I care enough to want the pace to feel right.",
  ],
  excludedPrivate: "Raw writing stays private. Names, contact details, exact locations, and family specifics stay out of matching.",
  excludedFlexible: "Your raw writing may inform your local summary, but names, contact details, exact locations, and family specifics still stay out of matching.",
  transparencyBase: "Summaries, letters, and dialogue handrails are generated from fixed front-end rules and demo presets. This version does not use a backend or a live AI API.",
  presets: {
    default: {
      keywords: [],
      summaryText:
        "You seem more sincere than performative, and more interested in calm understanding than quick chemistry. You likely open up best when the pace stays gentle and emotionally safe.",
      proposalTone: "Slow introduction",
      proposalHeadline: "Anxiu wants to approach you with a slower kind of letter",
      proposalOpening:
        "Hi, I’m Anxiu. This is not a request for immediate energy. Reading your words, I had the sense that you may prefer a beginning that does not rush trust, does not push for brightness, and leaves room for breath.",
      proposalReasons: [
        "The way you describe yourself suggests you care about tone and timing, not just whether someone says the right thing.",
        "This introduction does not ask either of you to become instantly open. It only asks whether slowness might already feel more honest.",
      ],
      proposalProfile: "They tend to trust slower beginnings and value honesty over performance.",
      proposalPace: "If now is not the right time, you can keep this for later. Nothing here treats urgency as proof of sincerity.",
      proposalPreview: "There’s a quiet letter waiting here. It cares more about how you want to be understood than how quickly you reply.",
      taskPrompt: "Write about a recent moment when you held something back, and what you quietly wished someone would have understood.",
      matchAnswer:
        "A few nights ago I got home and sat in the dark for longer than usual. I wasn’t falling apart. I just didn’t want to become audible too quickly.\n\nWhat I didn’t say out loud was that I sometimes wish someone would notice the silence before asking for more from me.",
      chatIntro:
        "Reading what you wrote made me feel less pressured to sound polished. If you want, we can stay close to that same tone and just begin there.",
      replies: {
        continue: "What stays with me most is the relief of not having to explain myself too quickly.",
        lighter: "A lighter version of today would be this: the first warm sip of tea felt like enough for a moment.",
        deeper: "If I go a little deeper, what I fear most is being read too quickly and then having to live inside that wrong version.",
        task: "I like that. Let’s trade one recent scene we secretly wanted someone else to notice.",
        close: "Stopping here feels right for tonight. I'd rather keep the tone honest than stretch it past where it still feels real.",
      },
    },
    busy: {
      keywords: ["busy", "tired", "exhausted", "pressure", "work", "drained", "holding on", "overwhelmed"],
      summaryText:
        "You sound like someone trying to protect a little softness inside a full or demanding stretch. You may still want closeness, but only if it does not ask for more energy than you have.",
      proposalTone: "Low-pressure introduction",
      proposalHeadline: "Anxiu wants to approach without becoming another demand on your energy",
      proposalOpening:
        "What I noticed in your words was not a lack of openness, but a lack of room. This introduction is meant to feel lighter than that. Less pressure, fewer demands, more permission to stay small.",
      proposalReasons: [
        "You seem more in need of being met softly than being drawn out quickly.",
        "This beginning keeps the emotional cost low on purpose, so it doesn't become another thing you have to carry well.",
      ],
      proposalProfile: "They tend to lower the volume first, and check whether there is room before asking for more.",
      proposalPace: "You do not owe this letter a fast answer. A slower response still counts as care here.",
      proposalPreview: "There’s a quieter introduction waiting here, shaped for someone who may be carrying a little too much already.",
      taskPrompt: "Write about a recent moment when you wanted to exhale, and how you wish someone would have come closer in that moment.",
      matchAnswer:
        "Last week I got home and sat on the floor before I even turned the lights on. It wasn’t dramatic. It just felt like the only honest speed left.\n\nIf someone had come close in that moment, I would have wanted them to ask if silence would help before asking anything else.",
      chatIntro:
        "Your reply made me feel like I don't need to arrive here fully composed. If you want, we can start from the last moment that made you want to breathe out.",
      replies: {
        continue: "What I needed most in that moment was not advice. Just someone who knew not to make the room louder.",
        lighter: "A lighter thing from today: I felt a little more here when I noticed the evening air on the walk home.",
        deeper: "A deeper truth is that when I get tired, I become harder to reach, even to myself.",
        task: "Let’s trade one thing we’ve been carrying too neatly.",
        close: "This is enough for tonight. Thank you for not pushing the pace faster than it needed to go.",
      },
    },
    transition: {
      keywords: ["change", "new", "direction", "future", "starting", "between", "shift", "uncertain", "transition"],
      summaryText:
        "You sound like someone standing in a transition: not lost, but not fully settled either. You may need space to think out loud without being pushed into a conclusion too quickly.",
      proposalTone: "Transition-season introduction",
      proposalHeadline: "Anxiu wants to stand with you at the edge of something that’s still changing",
      proposalOpening:
        "Your words feel like they’re coming from a threshold. Not from confusion exactly, but from movement. This introduction is not meant to rush certainty. It’s meant to make room for the part of you still finding shape.",
      proposalReasons: [
        "You seem to be holding both expectation and uncertainty at the same time, which usually needs patience more than direction.",
        "They tend to stay with questions a little longer before trying to turn them into answers.",
      ],
      proposalProfile: "They often meet change with curiosity and steadiness rather than fast conclusions.",
      proposalPace: "If you’re still finding your footing, this letter can wait. Nothing here expects a settled version of you.",
      proposalPreview: "There’s a letter here that does not treat uncertainty like a flaw. It treats it like part of the room.",
      taskPrompt: "Write about something in your life that is beginning to shift, and the part of it you still don't know how to name.",
      matchAnswer:
        "Recently I realised I've been writing about uncertainty in a very tidy voice. The messier truth is that I want to move forward, and I'm also scared of losing some earlier version of myself by doing it.\n\nIf someone stayed close while I'm in this, I'd want them to remind me I don't have to know everything yet.",
      chatIntro:
        "Thank you for not turning your answer into a clean ending. If you want, we can stay with that unfinished edge for a minute longer.",
      replies: {
        continue: "The strongest feeling is that expectation and fear are arriving together, and I’m trying not to force one to win.",
        lighter: "A lighter sign of movement: I’ve started putting new plans in my calendar instead of only thinking about them.",
        deeper: "A deeper fear is that choosing one path might quietly erase a part of me I still care about.",
        task: "Let’s exchange one sentence we keep telling ourselves during this transition.",
        close: "Stopping here still feels complete enough. Thank you for not turning this into an interrogation.",
      },
    },
    grounded: {
      keywords: ["home", "dinner", "routine", "ordinary", "small", "family", "steady", "daily", "care"],
      summaryText:
        "You seem attentive to quiet forms of care and to the emotional weight of ordinary moments. You may trust consistency and calm more than intensity.",
      proposalTone: "Everyday-life introduction",
      proposalHeadline: "Anxiu wants to meet you through the quiet shape of ordinary life",
      proposalOpening:
        "Reading your words, I didn’t imagine a dramatic scene. I imagined a person who notices the emotional texture of ordinary things. This introduction is shaped for that kind of attention.",
      proposalReasons: [
        "The way you describe closeness sounds more like shared steadiness than spectacle.",
        "They seem drawn to the kind of intimacy that grows through repeated, ordinary sincerity.",
      ],
      proposalProfile: "They are more interested in whether a day feels softer together than whether it feels exciting on the surface.",
      proposalPace: "You don't have to rush warmth here. Even a quieter reply still counts as a real beginning.",
      proposalPreview: "There’s a letter here for someone who may trust calm more than spark.",
      taskPrompt: "Write about a recent ordinary moment that felt more meaningful than it looked from the outside.",
      matchAnswer:
        "A few nights ago I finished cooking and just stayed by the table a little longer. The light was warm, the apartment was quiet, and I realised peace is not the absence of feeling. It’s a form of safety.\n\nIf I were sharing that with someone, I’d want them to hear the quiet underneath it, not just the event itself.",
      chatIntro:
        "Your reply made me think ordinary life might say more about us than dramatic moments ever do. If you want, start with one scene you wish you could keep.",
      replies: {
        continue: "What I want to keep is not the event itself so much as the way my whole body slowed down inside it.",
        lighter: "A lighter thing from today: a little afternoon light felt unexpectedly kind.",
        deeper: "A deeper fear is that if no one notices these small moments with me, they’ll disappear too quietly.",
        task: "Let’s trade one ordinary scene we wish could happen again.",
        close: "Stopping here feels gentle in the right way. Thank you for treating ordinary things like they matter.",
      },
    },
    longing: {
      keywords: ["close", "stay", "connection", "companionship", "longing", "want", "someone", "together", "careful"],
      summaryText:
        "You sound open to closeness, but only the kind that still lets you keep your breath. You may not be looking for intensity first so much as a form of presence that feels emotionally true.",
      proposalTone: "Careful-approach introduction",
      proposalHeadline: "Anxiu wants to meet the part of you that hopes for closeness without forcing it",
      proposalOpening:
        "What I heard in your words was not a loud hunger for attention, but a careful hope for presence. This introduction stays with that pace. It doesn't try to turn hope into heat too quickly.",
      proposalReasons: [
        "You seem willing to move toward someone, but not at the cost of losing your own pace.",
        "They also seem to prefer honest presence over speed or performance, which makes this a quieter kind of fit.",
      ],
      proposalProfile: "They usually want to know whether a connection feels emotionally safe before trying to make it intense.",
      proposalPace: "You can keep this for later if you want. Hesitation is not treated like failure here.",
      proposalPreview: "There’s a letter here for someone who wants closeness, but not the version that arrives too loudly.",
      taskPrompt: "Write about a recent moment that made you think, “I wish someone were here with me,” and what you hoped that person would bring.",
      matchAnswer:
        "The other night I walked past a building full of warm window light and thought how different a long day can feel if someone meets you at the end of it with real presence.\n\nI wasn’t imagining rescue. Just someone who is actually there.",
      chatIntro:
        "Your answer made closeness feel quieter and more believable. If you want, tell me what that “someone being there” moment looks like in more detail.",
      replies: {
        continue: "What matters most in that image is not what they do. It’s that they’re genuinely present.",
        lighter: "A lighter version of today: the wind felt softer than I expected tonight, and that was enough for a second.",
        deeper: "A deeper fear is wanting closeness and then meeting someone who only knows how to be loud, not present.",
        task: "Let’s exchange one sentence we wish someone would understand about how we want to be close.",
        close: "Stopping here feels more honest than forcing one more layer tonight.",
      },
    },
  },
};

/* state */
const stepOrder = {
  entry: 0,
  consent: 1,
  freeTalk: 2,
  assist: 3,
  reflection: 4,
  summaryReview: 5,
  inlineEdit: 6,
  gapFill: 7,
  complete: 8,
};

const gapFillPrompts = {
  pace: "What kind of pace helps you open up naturally?",
  safety: "What usually helps you feel safe enough to be honest with someone?",
  conversation: "What kind of conversation makes you want to stay?",
};

const state = {
  entryStarted: false,
  currentView: "home",
  howVisible: false,
  step: "entry",
  rawInput: "",
  buildSummary: true,
  useSummaryForMatching: true,
  keepRawPrivate: true,
  reflectionText: "",
  draftSummary: "",
  editedSummary: "",
  reviewedSummary: "",
  introductionSafeSummary: "",
  needsGapFill: false,
  gapFillQuestion: "",
  gapFillAnswer: "",
  entryHint: "80–180 words is enough.",
  consentSupport: "We’ll keep this first pass light, editable, and under your control.",
  summaryEditHint: "Shape this draft until it feels closer.",
  gapFillHint: "A sentence or two is enough.",
  completeCopy: "",
  journalDraft: "",
  journalEntry: "",
  proposalStatus: "pending",
  taskStatus: "locked",
  taskAnswer: "",
  matchAnswer: "",
  selectedLine: "",
  resonanceReply: "",
  messages: [],
  chatDraft: "",
  awaitingReply: false,
  themeId: "default",
  flowThemeId: "default",
  flowLocked: false,
  proposalCard: {
    tone: "",
    headline: "",
    opening: "",
    reasons: [],
    profile: "",
    pace: "",
    preview: "",
    basis: "",
  },
  taskPrompt: "",
  guideMode: "continue",
  boundaryOpen: false,
  homeHintOverride: "",
  pendingFocus: "",
};

/* viewSelectors */
const viewSelectors = {
  appFrame: document.querySelector("#app-frame"),
  entryView: document.querySelector("#entry-view"),
  appMain: document.querySelector("#app-main"),
  landingActions: document.querySelector("#landing-actions"),
  homeButton: document.querySelector("#home-button"),
  howButton: document.querySelector("#how-button"),
  onboardingStack: document.querySelector("#onboarding-stack"),
  cardConsent: document.querySelector("#card-consent"),
  cardFreeTalk: document.querySelector("#card-free-talk"),
  cardReflection: document.querySelector("#card-reflection"),
  cardSummaryReview: document.querySelector("#card-summary-review"),
  cardGapFill: document.querySelector("#card-gap-fill"),
  cardComplete: document.querySelector("#card-complete"),
  entryAside: document.querySelector("#entry-aside"),
  entryFragment: document.querySelector("#entry-fragment"),
  consentSummary: document.querySelector("#consent-summary"),
  consentMatching: document.querySelector("#consent-matching"),
  consentRawPrivate: document.querySelector("#consent-raw-private"),
  consentSupport: document.querySelector("#consent-support"),
  rawInput: document.querySelector("#raw-input"),
  rawInputHint: document.querySelector("#raw-input-hint"),
  assistPanel: document.querySelector("#assist-panel"),
  reflectionText: document.querySelector("#reflection-text"),
  summarySupport: document.querySelector("#summary-support"),
  summaryPreview: document.querySelector("#summary-preview"),
  summaryEditPanel: document.querySelector("#summary-edit-panel"),
  summaryEdit: document.querySelector("#summary-edit"),
  summaryEditHint: document.querySelector("#summary-edit-hint"),
  summaryReviewActions: document.querySelector("#summary-review-actions"),
  gapFillQuestion: document.querySelector("#gap-fill-question"),
  gapFillAnswer: document.querySelector("#gap-fill-answer"),
  gapFillHint: document.querySelector("#gap-fill-hint"),
  completeCopy: document.querySelector("#complete-copy"),
  views: [...document.querySelectorAll("[data-view]")],
  navButtons: [...document.querySelectorAll('[data-action="goto"]')],
  homeDate: document.querySelector("#home-date"),
  homeStatusLine: document.querySelector("#home-status-line"),
  homeQuestionTitle: document.querySelector("#home-question-title"),
  homeQuestionCopy: document.querySelector("#home-question-copy"),
  journalEntry: document.querySelector("#journal-entry"),
  sourceHint: document.querySelector("#source-hint"),
  summaryText: document.querySelector("#summary-text"),
  boundaryToggle: document.querySelector("#boundary-toggle"),
  boundaryPanel: document.querySelector("#boundary-panel"),
  sourceDetail: document.querySelector("#source-detail"),
  sourceExcluded: document.querySelector("#source-excluded"),
  sourceTransparency: document.querySelector("#source-transparency"),
  inboxLine: document.querySelector("#inbox-line"),
  homeFlowButton: document.querySelector("#home-flow-button"),
  proposalSheet: document.querySelector("#proposal-sheet"),
  proposalToneChip: document.querySelector("#proposal-tone-chip"),
  proposalHeadline: document.querySelector("#proposal-headline"),
  proposalOpening: document.querySelector("#proposal-opening"),
  proposalReasons: document.querySelector("#proposal-reasons"),
  proposalProfile: document.querySelector("#proposal-profile"),
  proposalPace: document.querySelector("#proposal-pace"),
  proposalBasis: document.querySelector("#proposal-basis"),
  proposalAcceptButton: document.querySelector("#proposal-accept-button"),
  proposalLaterButton: document.querySelector("#proposal-later-button"),
  proposalRejectButton: document.querySelector("#proposal-reject-button"),
  proposalBranchNote: document.querySelector("#proposal-branch-note"),
  taskTitle: document.querySelector("#task-title"),
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

/* helpers */
function getStepIndex(stepName = state.step) {
  return stepOrder[stepName] ?? 0;
}

function getTodayText() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

function getPreset(themeId) {
  return demoData.presets[themeId] || demoData.presets.default;
}

function getFlowPreset() {
  return getPreset(state.flowThemeId);
}

function isPreviewOnly() {
  return !state.useSummaryForMatching;
}

function containsAny(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword));
}

function detectTheme(text) {
  if (!text.trim()) {
    return "default";
  }

  const lower = text.toLowerCase();
  let winner = "default";
  let highest = 0;

  Object.entries(demoData.presets).forEach(([themeId, preset]) => {
    const score = preset.keywords.reduce((total, keyword) => total + (lower.includes(keyword) ? 1 : 0), 0);
    if (score > highest) {
      winner = themeId;
      highest = score;
    }
  });

  return winner;
}

function getReflectionLead(themeId) {
  const leads = {
    default: "you care more about honesty and pacing than quick chemistry",
    busy: "you’ve been carrying more than you want to explain out loud",
    transition: "you’re in the middle of something that still feels unfinished",
    grounded: "ordinary forms of care matter more to you than loud gestures",
    longing: "you want closeness, but only the kind that still leaves you room to breathe",
  };

  return leads[themeId] || leads.default;
}

function getReflectionFollow(text) {
  const lower = text.toLowerCase();
  if (containsAny(lower, ["shallow", "surface", "small talk"])) {
    return "and that honesty matters more to you than speed.";
  }
  if (containsAny(lower, ["slow", "slowly", "pace", "time", "timing", "gentle", "gently", "trust", "rushed"])) {
    return "and that you open up more naturally when the pace stays gentle.";
  }
  if (containsAny(lower, ["safe", "safety", "guard", "secure", "understood"])) {
    return "and that feeling safe matters more to you than performing well.";
  }
  if (containsAny(lower, ["conversation", "listen", "talk", "stay"])) {
    return "and that the quality of conversation matters more to you than momentum.";
  }
  return "and that you'd rather be understood slowly than pushed to feel open too fast.";
}

function buildReflectionText(text, themeId) {
  return `I'm hearing that ${getReflectionLead(themeId)}, ${getReflectionFollow(text)} Does that feel close, or am I missing something important?`;
}

function deriveGapFillQuestion(text, force = false) {
  const lower = text.toLowerCase();
  const checks = [
    {
      keywords: ["slow", "slowly", "pace", "time", "timing", "gentle", "gently", "space", "steady", "rushed"],
      question: gapFillPrompts.pace,
    },
    {
      keywords: ["safe", "safety", "trust", "trusted", "secure", "guard", "honest", "honesty", "understood"],
      question: gapFillPrompts.safety,
    },
    {
      keywords: ["conversation", "talk", "talking", "dialogue", "listen", "listened", "questions", "small talk", "shallow", "stay"],
      question: gapFillPrompts.conversation,
    },
  ];

  const missing = checks.find((check) => !containsAny(lower, check.keywords));
  if (missing) {
    return missing.question;
  }

  if (force) {
    return gapFillPrompts.conversation;
  }

  return "";
}

function buildIntroductionSafeSummary(reviewedSummary, gapFillAnswer) {
  const summary = reviewedSummary.replace(/\s+/g, " ").trim();
  const gap = gapFillAnswer.replace(/\s+/g, " ").trim();

  if (!summary) {
    return "";
  }

  if (!gap) {
    return summary;
  }

  return `${summary} ${gap}`.trim();
}

function buildPreparedUnderstanding(text) {
  const entry = text.trim();
  const themeId = detectTheme(entry);
  const preset = getPreset(themeId);

  return {
    themeId,
    reflectionText: buildReflectionText(entry, themeId),
    draftSummary: preset.summaryText,
    gapFillQuestion: deriveGapFillQuestion(entry, false),
    proposalCard: {
      tone: preset.proposalTone,
      headline: preset.proposalHeadline,
      opening: preset.proposalOpening,
      reasons: [...preset.proposalReasons],
      profile: preset.proposalProfile,
      pace: preset.proposalPace,
      preview: preset.proposalPreview,
      basis: "",
    },
    taskPrompt: preset.taskPrompt,
    matchAnswer: preset.matchAnswer,
  };
}

function applyPreparedToFlow(prepared) {
  state.themeId = prepared.themeId;
  state.flowThemeId = prepared.themeId;
  state.proposalCard = prepared.proposalCard;
  state.taskPrompt = prepared.taskPrompt;
  state.matchAnswer = prepared.matchAnswer;
  state.reflectionText = prepared.reflectionText;
  state.draftSummary = prepared.draftSummary;
  state.editedSummary = prepared.draftSummary;
  state.gapFillQuestion = prepared.gapFillQuestion;
  state.needsGapFill = Boolean(prepared.gapFillQuestion);
}

function getCurrentSummaryText() {
  return (state.editedSummary || state.draftSummary).trim();
}

function commitReviewedSummary(summary) {
  state.reviewedSummary = summary.trim();
  state.introductionSafeSummary = buildIntroductionSafeSummary(state.reviewedSummary, state.gapFillAnswer);
}

function getConsentSupportText() {
  if (!state.buildSummary) {
    return "We need a first understanding before anything can begin. You can still keep your original words private.";
  }

  if (!state.useSummaryForMatching) {
    return "We can still build a first understanding. Introductions will stay in preview mode until you turn matching on.";
  }

  return "We’ll keep this first pass light, editable, and under your control.";
}

function getCompleteCopy() {
  if (isPreviewOnly()) {
    return "We have enough to begin gently. For now, introductions will stay in preview.";
  }

  return "We have enough to begin gently. Introductions will start from the understanding you reviewed.";
}

function getOriginalWordsLine() {
  if (state.keepRawPrivate) {
    return "Your original words stay closest to you.";
  }

  return "Your original words can inform this first pass more directly, but they still are not the layer used for introductions.";
}

function getReviewedUnderstandingLine() {
  return "Your reviewed understanding is the version you’ve confirmed.";
}

function getIntroductionLayerLine() {
  if (isPreviewOnly()) {
    return "What can be used for introductions is currently turned off, so this stays a careful preview.";
  }

  return "What can be used for introductions stays lighter and safer than your raw writing.";
}

function getHomeDraftHint() {
  if (state.homeHintOverride) {
    return state.homeHintOverride;
  }

  const draft = state.journalDraft.trim();
  const committed = state.journalEntry.trim();

  if (!draft && !committed) {
    return "You don't need much here. A little is enough.";
  }

  if (draft !== committed) {
    return "This note hasn’t been left here yet. Your reviewed understanding is still the version above.";
  }

    return "You can leave a little more here. It won't replace your reviewed understanding.";
}

function getProposalBasisText() {
  if (isPreviewOnly()) {
    return "This letter is only being shown as a careful preview. Your reviewed understanding is not currently being used for introductions.";
  }

  if (state.gapFillAnswer.trim()) {
    return "This introduction is based on your reviewed understanding, plus one extra detail you chose to add before it began.";
  }

  return "This introduction is based on your reviewed understanding, not on your raw writing.";
}

function getProposalHeadlineText() {
  if (isPreviewOnly()) {
    return "A quieter introduction has been set aside for you";
  }

  return state.proposalCard.headline;
}

function getProposalOpeningText() {
  if (isPreviewOnly()) {
    return "This is not an active introduction. It's a preview of how March might begin, based on the understanding you reviewed. You can read it without starting anything yet.";
  }

  return state.proposalCard.opening;
}

function getProposalPaceText() {
  if (isPreviewOnly()) {
    return "Because introductions are turned off for now, this stays a careful preview rather than an active approach.";
  }

  return state.proposalCard.pace;
}

function getProposalBranchNote() {
  if (isPreviewOnly()) {
    if (state.taskStatus === "chatting") {
      return "You’re continuing through a preview of how dialogue might begin after a slower introduction.";
    }
    if (state.proposalStatus === "accepted") {
      return "You’re moving through the preview flow. It shows the pacing, not a live mutual introduction.";
    }
    if (state.proposalStatus === "later") {
      return "This preview can wait here until you want to look at it again.";
    }
    if (state.proposalStatus === "rejected") {
      return "You passed on the preview for now. Nothing moves forward from here.";
    }
    return "This is a careful preview of how March would introduce someone, not a live matching outcome.";
  }

  if (state.taskStatus === "chatting") {
    return "This introduction has already grown into dialogue.";
  }
  if (state.proposalStatus === "accepted") {
    return "You accepted this introduction. The next step is echo, not immediate conversation.";
  }
  if (state.proposalStatus === "later") {
    return "You kept this letter for later. It can wait without losing its tone.";
  }
  if (state.proposalStatus === "rejected") {
    return "You passed on this for now. The letter stops here without trying to pull you further.";
  }

  return "You can accept this introduction, keep it for later, or stop here without being pulled any further.";
}

function buildInboxMeta() {
  if (isPreviewOnly() && state.proposalStatus === "pending" && state.taskStatus === "locked") {
    return {
      line: "Matching is off for now. You can still read a careful preview of how an introduction would sound.",
      button: "Read the preview",
      target: "proposal",
    };
  }

  if (state.taskStatus === "chatting") {
    return {
      line: isPreviewOnly()
        ? "You’re inside a preview of how dialogue might begin."
        : "This letter has already grown into dialogue.",
      button: isPreviewOnly() ? "Back to preview dialogue" : "Back to dialogue",
      target: "chat",
    };
  }

  if (state.taskStatus === "answered") {
    return {
      line: "You've both exchanged answers. Now you can circle one line that stayed with you.",
      button: "Back to echo",
      target: "task",
    };
  }

  if (state.proposalStatus === "accepted") {
    return {
      line: isPreviewOnly()
        ? "You’re moving through the preview flow. The next step is echo."
        : "This introduction has already been opened. The next step is echo, not immediate conversation.",
      button: isPreviewOnly() ? "Go to echo preview" : "Go to echo",
      target: "task",
    };
  }

  if (state.proposalStatus === "later") {
    return {
      line: isPreviewOnly()
        ? "This preview is still waiting in your inbox."
        : "This letter is still waiting in your inbox. It can stay there until the pace feels right.",
      button: isPreviewOnly() ? "Back to preview" : "Back to letter",
      target: "proposal",
    };
  }

  if (state.proposalStatus === "rejected") {
    return {
      line: isPreviewOnly()
        ? "You passed on the preview for now."
        : "You passed on this approach for now. If you only want to reread it, the letter is still here.",
      button: isPreviewOnly() ? "Reread the preview" : "Reread the letter",
      target: "proposal",
    };
  }

  return {
    line: "There’s a letter waiting in your inbox.",
    button: "Go to letter",
    target: "proposal",
  };
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

function setCardState(element, { visible, current, receded }) {
  element.hidden = !visible;
  if (!visible) {
    element.classList.remove("is-current", "is-receded");
    return;
  }
  element.classList.toggle("is-current", current);
  element.classList.toggle("is-receded", receded && !current);
}

/* renderers */
function renderEntry() {
  viewSelectors.appFrame.classList.toggle("is-in-flow", state.entryStarted);
  viewSelectors.entryView.hidden = state.entryStarted;
  viewSelectors.appMain.hidden = !state.entryStarted;
  viewSelectors.homeButton.hidden = !state.entryStarted;
  viewSelectors.landingActions.hidden = state.entryStarted;

  if (state.entryStarted) {
    return;
  }

  const currentIndex = getStepIndex();
  const showStack = state.step !== "entry";

  viewSelectors.onboardingStack.hidden = !showStack;
  viewSelectors.entryAside.hidden = !state.howVisible;
  viewSelectors.entryFragment.hidden = !(showStack || state.howVisible);
  viewSelectors.howButton.setAttribute("aria-expanded", String(state.howVisible));

  setCardState(viewSelectors.cardConsent, {
    visible: showStack,
    current: currentIndex <= stepOrder.consent,
    receded: currentIndex > stepOrder.consent,
  });

  const freeTalkVisible = showStack && (state.buildSummary || currentIndex >= stepOrder.reflection || currentIndex === stepOrder.assist);
  setCardState(viewSelectors.cardFreeTalk, {
    visible: freeTalkVisible,
    current: state.step === "freeTalk" || state.step === "assist",
    receded: currentIndex > stepOrder.assist,
  });

  setCardState(viewSelectors.cardReflection, {
    visible: currentIndex >= stepOrder.reflection,
    current: state.step === "reflection",
    receded: currentIndex > stepOrder.reflection,
  });

  setCardState(viewSelectors.cardSummaryReview, {
    visible: currentIndex >= stepOrder.summaryReview,
    current: state.step === "summaryReview" || state.step === "inlineEdit",
    receded: currentIndex > stepOrder.inlineEdit,
  });

  setCardState(viewSelectors.cardGapFill, {
    visible: Boolean(state.gapFillQuestion) && currentIndex >= stepOrder.gapFill,
    current: state.step === "gapFill",
    receded: currentIndex > stepOrder.gapFill,
  });

  setCardState(viewSelectors.cardComplete, {
    visible: state.step === "complete",
    current: state.step === "complete",
    receded: false,
  });

  viewSelectors.consentSummary.checked = state.buildSummary;
  viewSelectors.consentMatching.checked = state.useSummaryForMatching;
  viewSelectors.consentRawPrivate.checked = state.keepRawPrivate;
  viewSelectors.consentSummary.disabled = currentIndex >= stepOrder.reflection;
  viewSelectors.consentSupport.textContent = getConsentSupportText();

  viewSelectors.rawInput.value = state.rawInput;
  viewSelectors.rawInput.readOnly = currentIndex >= stepOrder.reflection;
  viewSelectors.rawInputHint.textContent = state.entryHint;
  viewSelectors.assistPanel.hidden = state.step !== "assist";

  viewSelectors.reflectionText.textContent = state.reflectionText;

  const summaryText = getCurrentSummaryText();
  viewSelectors.summarySupport.textContent = state.step === "inlineEdit"
    ? "Shape this draft until it feels closer. You won’t lose the version you started from."
    : "This is only a draft. You can shape it.";
  viewSelectors.summaryPreview.textContent = summaryText;
  viewSelectors.summaryPreview.hidden = state.step === "inlineEdit";
  viewSelectors.summaryReviewActions.hidden = state.step !== "summaryReview";
  viewSelectors.summaryEditPanel.hidden = state.step !== "inlineEdit";
  viewSelectors.summaryEdit.value = summaryText;
  viewSelectors.summaryEditHint.textContent = state.summaryEditHint;

  viewSelectors.gapFillQuestion.textContent = state.gapFillQuestion;
  viewSelectors.gapFillAnswer.value = state.gapFillAnswer;
  viewSelectors.gapFillHint.textContent = state.gapFillHint;

  state.completeCopy = getCompleteCopy();
  viewSelectors.completeCopy.textContent = state.completeCopy;
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

function renderViews() {
  viewSelectors.views.forEach((view) => {
    view.hidden = view.dataset.view !== state.currentView;
  });
}

function renderProposalReasons() {
  viewSelectors.proposalReasons.replaceChildren();

  state.proposalCard.reasons.forEach((reason, index) => {
    const block = document.createElement("div");
    block.className = "letter-reason";

    const title = document.createElement("p");
    title.className = "letter-reason-title";
    title.textContent = `Reason ${index + 1}`;

    const copy = document.createElement("p");
    copy.className = "panel-body";
    copy.textContent = reason;

    block.append(title, copy);
    viewSelectors.proposalReasons.append(block);
  });
}

function renderHome() {
  const inboxMeta = buildInboxMeta();

  viewSelectors.homeDate.textContent = getTodayText();
  viewSelectors.homeStatusLine.textContent = "Today can stay unfinished. Leave only what feels true right now.";
  viewSelectors.homeQuestionTitle.textContent = "What would you like to leave here today?";
  viewSelectors.homeQuestionCopy.textContent = "This can sound like today. It doesn't need to restate your first reviewed understanding.";
  viewSelectors.journalEntry.value = state.journalDraft;
  viewSelectors.sourceHint.textContent = getHomeDraftHint();
  viewSelectors.summaryText.textContent = state.reviewedSummary || "We haven't confirmed a reviewed understanding yet.";
  viewSelectors.sourceDetail.textContent = getOriginalWordsLine();
  viewSelectors.sourceExcluded.textContent = getReviewedUnderstandingLine();
  viewSelectors.sourceTransparency.textContent = getIntroductionLayerLine();
  viewSelectors.boundaryToggle.setAttribute("aria-expanded", String(state.boundaryOpen));
  viewSelectors.boundaryPanel.hidden = !state.boundaryOpen;
  viewSelectors.inboxLine.textContent = inboxMeta.line;
  viewSelectors.homeFlowButton.textContent = inboxMeta.button;
  viewSelectors.homeFlowButton.dataset.target = inboxMeta.target;
}

function renderProposal() {
  viewSelectors.proposalSheet.classList.toggle("is-preview", isPreviewOnly());
  viewSelectors.proposalToneChip.textContent = isPreviewOnly() ? "Introduction preview" : state.proposalCard.tone;
  viewSelectors.proposalHeadline.textContent = getProposalHeadlineText();
  viewSelectors.proposalOpening.textContent = getProposalOpeningText();
  viewSelectors.proposalProfile.textContent = state.proposalCard.profile;
  viewSelectors.proposalPace.textContent = getProposalPaceText();
  viewSelectors.proposalBasis.textContent = getProposalBasisText();
  viewSelectors.proposalBranchNote.textContent = getProposalBranchNote();
  renderProposalReasons();

  if (state.taskStatus === "chatting") {
    viewSelectors.proposalAcceptButton.textContent = isPreviewOnly() ? "Back to preview dialogue" : "Back to dialogue";
    viewSelectors.proposalLaterButton.hidden = true;
    viewSelectors.proposalRejectButton.hidden = true;
  } else if (state.proposalStatus === "accepted") {
    viewSelectors.proposalAcceptButton.textContent = isPreviewOnly() ? "Go to echo preview" : "Go to echo";
    viewSelectors.proposalLaterButton.hidden = true;
    viewSelectors.proposalRejectButton.hidden = true;
  } else {
    viewSelectors.proposalAcceptButton.textContent = isPreviewOnly() ? "Continue with preview" : "Accept this introduction";
    viewSelectors.proposalLaterButton.textContent = isPreviewOnly() ? "Keep preview for later" : "Keep it for later";
    viewSelectors.proposalRejectButton.textContent = isPreviewOnly() ? "Pass on this preview" : "Pass on this for now";
    viewSelectors.proposalLaterButton.hidden = false;
    viewSelectors.proposalRejectButton.hidden = false;
  }

  viewSelectors.proposalAcceptButton.classList.toggle("is-preview-action", isPreviewOnly());
}

function renderTaskLines() {
  viewSelectors.resonanceLines.replaceChildren();

  state.matchAnswer
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?])/u)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 4)
    .forEach((line) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "button button-line";
      button.dataset.action = "select-line";
      button.dataset.line = line;
      button.textContent = `“${line}”`;
      button.classList.toggle("is-active", state.selectedLine === line);
      viewSelectors.resonanceLines.append(button);
    });
}

function renderTask() {
  viewSelectors.taskTitle.textContent = "Start with one small question";
  viewSelectors.taskStatusChip.textContent = state.taskStatus === "answered" || state.taskStatus === "chatting" ? "Sent" : "Waiting";
  viewSelectors.taskPrompt.textContent = state.taskPrompt;
  viewSelectors.taskAnswer.value = state.taskAnswer;
  viewSelectors.taskAnswer.readOnly = state.taskStatus !== "ready";
  viewSelectors.taskHint.textContent = state.taskStatus === "ready"
    ? "Before you send it, one honest piece is enough."
    : "Their answer is open now. Read it once, then choose the line you want to stay with.";
  viewSelectors.taskSubmitButton.disabled = state.taskStatus !== "ready";
  viewSelectors.taskRevealChip.textContent = state.taskStatus === "ready" ? "Not open yet" : "Open now";
  viewSelectors.taskRevealPlaceholder.hidden = state.taskStatus !== "ready";
  viewSelectors.taskRevealPanel.hidden = state.taskStatus === "ready";
  viewSelectors.matchAnswerText.textContent = state.matchAnswer;
  viewSelectors.resonanceCard.hidden = state.taskStatus === "ready";
  viewSelectors.resonanceReply.value = state.resonanceReply;
  viewSelectors.resonanceHint.textContent = state.selectedLine
    ? "Stay with this line, then answer in your own words."
    : "Choose the line you want to stay with, then answer from there.";
  viewSelectors.resonanceSubmitButton.disabled = state.taskStatus === "chatting";

  if (state.taskStatus !== "ready") {
    renderTaskLines();
  }
}

function renderMessages() {
  viewSelectors.messagesPanel.replaceChildren();
  const output = [...state.messages];

  if (state.awaitingReply) {
    output.push({ role: "system", text: "They're taking a quiet moment before they answer." });
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

  viewSelectors.chatBookmarkTitle.textContent = state.selectedLine
    ? "Start from the line you paused on"
    : "Start from the part that already felt true";
  viewSelectors.chatBookmarkCopy.textContent = state.selectedLine
    ? `You stopped on this line: “${state.selectedLine}”`
      : "You began with one exchanged answer before dialogue opened.";
  viewSelectors.guideModeChip.textContent = guide.label;
  viewSelectors.guideCopy.textContent = guide.copy;
  viewSelectors.messageCountChip.textContent = `${messageCount} messages`;
  viewSelectors.chatInput.value = state.chatDraft;
  viewSelectors.chatHint.textContent = state.chatDraft
    ? "Your draft is already here. You can shape it before you send."
      : "Write one honest sentence, or lean on a handrail first.";

  viewSelectors.guideButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.guide === state.guideMode);
  });

  renderMessages();
}

function renderApp() {
  renderEntry();

  if (!state.entryStarted) {
    if (state.pendingFocus) {
      const focusTarget = state.pendingFocus;
      state.pendingFocus = "";
      requestAnimationFrame(() => {
        if (focusTarget === "raw") {
          viewSelectors.rawInput.focus();
          viewSelectors.rawInput.setSelectionRange(viewSelectors.rawInput.value.length, viewSelectors.rawInput.value.length);
        } else if (focusTarget === "summaryEdit") {
          viewSelectors.summaryEdit.focus();
          viewSelectors.summaryEdit.setSelectionRange(viewSelectors.summaryEdit.value.length, viewSelectors.summaryEdit.value.length);
        } else if (focusTarget === "gapFill") {
          viewSelectors.gapFillAnswer.focus();
          viewSelectors.gapFillAnswer.setSelectionRange(viewSelectors.gapFillAnswer.value.length, viewSelectors.gapFillAnswer.value.length);
        }
      });
    }
    return;
  }

  renderNav();
  renderViews();
  renderHome();
  renderProposal();
  renderTask();
  renderChat();

  if (state.pendingFocus) {
    const focusTarget = state.pendingFocus;
    state.pendingFocus = "";
    requestAnimationFrame(() => {
      if (focusTarget === "journal") {
        viewSelectors.journalEntry.focus();
        viewSelectors.journalEntry.setSelectionRange(viewSelectors.journalEntry.value.length, viewSelectors.journalEntry.value.length);
      } else if (focusTarget === "chat") {
        viewSelectors.chatInput.focus();
        viewSelectors.chatInput.setSelectionRange(viewSelectors.chatInput.value.length, viewSelectors.chatInput.value.length);
      }
    });
  }
}

/* actions */
function beginOnboarding() {
  state.step = state.buildSummary ? "freeTalk" : "consent";
  state.entryHint = "80–180 words is enough.";
  state.summaryEditHint = "Shape this draft until it feels closer.";
  state.gapFillHint = "A sentence or two is enough.";
  state.pendingFocus = state.buildSummary ? "raw" : "";
  renderApp();
}

function toggleHow() {
  state.howVisible = !state.howVisible;
  renderEntry();

  if (state.howVisible) {
    requestAnimationFrame(() => {
      viewSelectors.entryAside.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
}

function continueOnboarding() {
  if (!state.buildSummary) {
    state.step = "consent";
    renderApp();
    return;
  }

  const draft = state.rawInput.trim();
  if (!draft) {
    state.entryHint = "Leave a few honest lines first. We only need a little.";
    state.step = "freeTalk";
    state.pendingFocus = "raw";
    renderApp();
    return;
  }

  const prepared = buildPreparedUnderstanding(draft);

  state.rawInput = draft;
  state.gapFillAnswer = "";
  state.needsGapFill = Boolean(prepared.gapFillQuestion);
  applyPreparedToFlow(prepared);
  state.step = "reflection";
  state.pendingFocus = "";
  renderApp();
}

function confirmReflection() {
  state.step = "summaryReview";
  renderApp();
}

function markReflectionMissing() {
  state.needsGapFill = true;
  if (!state.gapFillQuestion) {
    state.gapFillQuestion = deriveGapFillQuestion(state.rawInput, true);
  }
  state.step = "summaryReview";
  renderApp();
}

function adjustSummary() {
  state.editedSummary = getCurrentSummaryText();
  state.step = "inlineEdit";
  state.pendingFocus = "summaryEdit";
  renderApp();
}

function acceptSummary() {
  const summary = getCurrentSummaryText();
  if (!summary) {
    state.summaryEditHint = "Shape the draft a little before continuing.";
    state.step = "inlineEdit";
    state.pendingFocus = "summaryEdit";
    renderApp();
    return;
  }

  commitReviewedSummary(summary);
  state.editedSummary = summary;
  state.step = state.gapFillQuestion ? "gapFill" : "complete";
  state.pendingFocus = state.step === "gapFill" ? "gapFill" : "";
  renderApp();
}

function rejectSummary() {
  state.needsGapFill = true;
  if (!state.gapFillQuestion) {
    state.gapFillQuestion = deriveGapFillQuestion(state.rawInput, true);
  }
  state.editedSummary = getCurrentSummaryText();
  state.step = "inlineEdit";
  state.pendingFocus = "summaryEdit";
  renderApp();
}

function saveSummaryEdit() {
  const summary = state.editedSummary.trim();
  if (!summary) {
    state.summaryEditHint = "Leave at least a little of the summary here.";
    state.pendingFocus = "summaryEdit";
    renderApp();
    return;
  }

  commitReviewedSummary(summary);
  state.editedSummary = summary;
  state.step = state.needsGapFill && state.gapFillQuestion ? "gapFill" : "complete";
  state.pendingFocus = state.step === "gapFill" ? "gapFill" : "";
  renderApp();
}

function submitGapFill() {
  const answer = state.gapFillAnswer.trim();
  if (!answer) {
    state.gapFillHint = "A sentence or two is enough.";
    state.pendingFocus = "gapFill";
    renderApp();
    return;
  }

  state.gapFillAnswer = answer;
  state.introductionSafeSummary = buildIntroductionSafeSummary(state.reviewedSummary, answer);
  state.step = "complete";
  state.pendingFocus = "";
  renderApp();
}

function toggleAssist() {
  if (state.step === "assist") {
    state.step = "freeTalk";
  } else {
    state.step = "assist";
  }
  renderApp();
}

function useAssist(promptText) {
  const prompt = `${promptText}\n`;
  state.rawInput = state.rawInput.trim()
    ? `${state.rawInput.trim()}\n\n${prompt}`
    : prompt;
  state.entryHint = "Use the prompt if it helps, then answer in your own words.";
  state.step = "assist";
  state.pendingFocus = "raw";
  renderApp();
}

function setView(viewName) {
  if (!state.entryStarted || !isViewUnlocked(viewName)) {
    return;
  }

  state.currentView = viewName;
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleBoundary() {
  state.boundaryOpen = !state.boundaryOpen;
  renderHome();
}

function submitHomeEntry() {
  const draft = state.journalDraft.trim();

  if (!draft) {
      state.homeHintOverride = "Leave a little first. Today only needs one honest paragraph.";
    state.pendingFocus = "journal";
    renderApp();
    return;
  }

  if (draft === state.journalEntry.trim()) {
      state.homeHintOverride = "Today is already holding your latest note.";
    renderHome();
    return;
  }

  state.journalDraft = draft;
  state.journalEntry = draft;
  state.homeHintOverride = "Today is now holding what you just left here.";
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
  state.proposalStatus = "accepted";
  state.taskStatus = "ready";
  setView("task");
}

function parkProposal() {
  state.proposalStatus = "later";
  state.currentView = "home";
  renderApp();
}

function rejectProposal() {
  state.proposalStatus = "rejected";
  state.currentView = "home";
  renderApp();
}

function revealTaskExchange() {
  if (!state.taskAnswer.trim()) {
    viewSelectors.taskHint.textContent = "Leave your own answer first. Then their words can open on the other side.";
    return;
  }

  state.taskStatus = "answered";
  renderApp();
}

function openChatFromResonance() {
  if (!state.selectedLine) {
      viewSelectors.resonanceHint.textContent = "Choose the line you want to stay with, then answer from there.";
    return;
  }

  if (!state.resonanceReply.trim()) {
      viewSelectors.resonanceHint.textContent = "Stay with this line, then add a little of your own response.";
    return;
  }

  state.taskStatus = "chatting";
  state.messages = [
      { role: "system", text: "You began with one exchanged answer before dialogue opened." },
    { role: "self", text: `I paused on this line: “${state.selectedLine}”\n${state.resonanceReply.trim()}` },
    { role: "other", text: getFlowPreset().chatIntro },
  ];
  state.guideMode = "continue";
  state.chatDraft = guidePromptMaps.continue.draft(state);
  state.pendingFocus = "chat";
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
    viewSelectors.chatHint.textContent = "Write one honest sentence first, then send it.";
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

const guidePromptMaps = {
  continue: {
    label: "Stay with that line",
    copy: "Begin from what already felt true, and move only one sentence further.",
    draft: (currentState) =>
      `You mentioned “${currentState.selectedLine || "that moment"},” and I'd like to stay with it a little longer. What feeling was strongest there?`,
  },
  lighter: {
    label: "Ease the tone",
    copy: "If it feels full, step into something smaller without leaving honesty behind.",
    draft: () => "If we eased the tone for a moment, was there a smaller part of today that softened something in you?",
  },
  deeper: {
    label: "Go one layer deeper",
    copy: "If there's still room, go one layer deeper without breaking the tone.",
    draft: () => "If we went one layer deeper, what do you think that moment was really protecting?",
  },
  task: {
    label: "Trade a small prompt",
    copy: "If the conversation stalls, turn it back into one shared prompt for a moment.",
    draft: () => "If you'd like, we could trade one small prompt instead: one recent scene we wish someone else had noticed.",
  },
  close: {
    label: "Leave it here for today",
    copy: "Keep the boundary warm. Stop while the conversation still feels whole tonight.",
    draft: () => "I think I'll leave it here for today. This already feels like enough in a good way.",
  },
};

function completeOnboarding() {
  if (!state.reviewedSummary.trim()) {
    commitReviewedSummary(getCurrentSummaryText());
  }

  if (!state.introductionSafeSummary.trim()) {
    state.introductionSafeSummary = buildIntroductionSafeSummary(state.reviewedSummary, state.gapFillAnswer);
  }

  state.entryStarted = true;
  state.currentView = "home";
  state.journalEntry = state.rawInput.trim();
  state.journalDraft = state.rawInput.trim();
  state.homeHintOverride = "";
  state.pendingFocus = "journal";
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleActionClick(event) {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) {
    return;
  }

  const { action } = actionTarget.dataset;

  if (action === "begin-onboarding") {
    beginOnboarding();
    return;
  }
  if (action === "toggle-how") {
    toggleHow();
    return;
  }
  if (action === "continue-onboarding") {
    continueOnboarding();
    return;
  }
  if (action === "confirm-reflection") {
    confirmReflection();
    return;
  }
  if (action === "reflection-missing") {
    markReflectionMissing();
    return;
  }
  if (action === "toggle-assist") {
    toggleAssist();
    return;
  }
  if (action === "use-assist") {
    useAssist(actionTarget.dataset.assist || "");
    return;
  }
  if (action === "accept-summary") {
    acceptSummary();
    return;
  }
  if (action === "adjust-summary") {
    adjustSummary();
    return;
  }
  if (action === "reject-summary") {
    rejectSummary();
    return;
  }
  if (action === "save-summary-edit") {
    saveSummaryEdit();
    return;
  }
  if (action === "submit-gap-fill") {
    submitGapFill();
    return;
  }
  if (action === "complete-onboarding") {
    completeOnboarding();
    return;
  }
  if (action === "go-home") {
    setView("home");
    return;
  }
  if (action === "goto") {
    setView(actionTarget.dataset.target);
    return;
  }
  if (action === "open-main-flow") {
    setView(actionTarget.dataset.target || "proposal");
    return;
  }
  if (action === "toggle-boundary") {
    toggleBoundary();
    return;
  }
  if (action === "submit-home") {
    submitHomeEntry();
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

  viewSelectors.consentSummary.addEventListener("change", (event) => {
    state.buildSummary = event.target.checked;
    if (!state.buildSummary && getStepIndex() < stepOrder.reflection) {
      state.step = "consent";
    } else if (state.buildSummary && state.step === "consent") {
      state.step = "freeTalk";
      state.pendingFocus = "raw";
    }
    renderApp();
  });

  viewSelectors.consentMatching.addEventListener("change", (event) => {
    state.useSummaryForMatching = event.target.checked;
    renderApp();
  });

  viewSelectors.consentRawPrivate.addEventListener("change", (event) => {
    state.keepRawPrivate = event.target.checked;
    renderApp();
  });

  viewSelectors.rawInput.addEventListener("input", (event) => {
    state.rawInput = event.target.value;
    state.entryHint = "80–180 words is enough.";
    if (state.buildSummary && state.step === "consent") {
      state.step = "freeTalk";
    }
    viewSelectors.rawInputHint.textContent = state.entryHint;
  });

  viewSelectors.summaryEdit.addEventListener("input", (event) => {
    state.editedSummary = event.target.value;
    state.summaryEditHint = "Shape this draft until it feels closer.";
    viewSelectors.summaryEditHint.textContent = state.summaryEditHint;
  });

  viewSelectors.gapFillAnswer.addEventListener("input", (event) => {
    state.gapFillAnswer = event.target.value;
    state.gapFillHint = "A sentence or two is enough.";
    viewSelectors.gapFillHint.textContent = state.gapFillHint;
  });

  viewSelectors.journalEntry.addEventListener("input", (event) => {
    state.journalDraft = event.target.value;
    state.homeHintOverride = "";
    viewSelectors.sourceHint.textContent = getHomeDraftHint();
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

bindEvents();
renderApp();
