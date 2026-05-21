(function() {
'use strict';

// === TRANSLATIONS ===
var I18N = {
  en: {
    siteTitle: 'Arcana Whispers',
    siteSubtitle: 'Draw the cards and discover what the universe has to tell you',
    singleTitle: 'Single Card',
    singleDesc: 'Quick insight and guidance',
    singleCount: '1 card',
    threeTitle: 'Three Card Spread',
    threeDesc: 'Past, present, and future',
    threeCount: '3 cards',
    crossTitle: 'Celtic Cross',
    crossDesc: 'Deep comprehensive reading',
    crossCount: '10 cards',
    tapShuffle: 'Tap the deck to shuffle',
    shuffling: 'Shuffling...',
    tapDraw: 'Tap the deck to draw ({n} card{s})',
    tapRemaining: 'Tap to draw ({n} remaining)',
    allDrawn: 'All cards drawn. Revealing your reading...',
    drawAgain: 'Draw Again',
    newSpread: 'New Spread',
    summary: 'Reading Summary',
    posPresent: 'Present',
    posPast: 'Past',
    posFuture: 'Future',
    posYourCard: 'Your Card',
    posChallenge: 'Challenge',
    posFoundation: 'Foundation',
    posRecentPast: 'Recent Past',
    posCrown: 'Crown',
    posNearFuture: 'Near Future',
    posSelf: 'Self',
    posEnvironment: 'Environment',
    posHopesFears: 'Hopes & Fears',
    posOutcome: 'Outcome',
    reversed: 'Reversed',
    upright: 'Upright'
  },
  zh: {
    siteTitle: 'Arcana Whispers',
    siteSubtitle: '抽取卡牌，聆听宇宙的启示',
    singleTitle: '单张牌',
    singleDesc: '快速洞察与指引',
    singleCount: '1张牌',
    threeTitle: '三张牌阵',
    threeDesc: '过去、现在与未来',
    threeCount: '3张牌',
    crossTitle: '凯尔特十字',
    crossDesc: '深度全面解读',
    crossCount: '10张牌',
    tapShuffle: '点击牌组洗牌',
    shuffling: '洗牌中...',
    tapDraw: '点击抽牌（共{n}张）',
    tapRemaining: '点击抽牌（剩余{n}张）',
    allDrawn: '所有牌已抽出，正在揭示你的解读...',
    drawAgain: '再抽一次',
    newSpread: '新牌阵',
    summary: '解读总结',
    posPresent: '现在',
    posPast: '过去',
    posFuture: '未来',
    posYourCard: '你的牌',
    posChallenge: '挑战',
    posFoundation: '基础',
    posRecentPast: '近期过去',
    posCrown: '最高理想',
    posNearFuture: '近期未来',
    posSelf: '自我',
    posEnvironment: '环境',
    posHopesFears: '希望与恐惧',
    posOutcome: '结果',
    reversed: '逆位',
    upright: '正位'
  },
  ja: {
    siteTitle: 'Arcana Whispers',
    siteSubtitle: 'カードを引いて、宇宙のメッセージを受け取りましょう',
    singleTitle: '1枚引き',
    singleDesc: '素早い洞察とガイダンス',
    singleCount: '1枚',
    threeTitle: 'スリーカード',
    threeDesc: '過去・現在・未来',
    threeCount: '3枚',
    crossTitle: 'ケルト十字',
    crossDesc: '深い総合的リーディング',
    crossCount: '10枚',
    tapShuffle: 'デッキをタップしてシャッフル',
    shuffling: 'シャッフル中...',
    tapDraw: 'タップして引く（{n}枚）',
    tapRemaining: 'タップして引く（残り{n}枚）',
    allDrawn: '全てのカードが引かれました。リーディングを公開中...',
    drawAgain: 'もう一度引く',
    newSpread: '新しいスプレッド',
    summary: 'リーディングまとめ',
    posPresent: '現在',
    posPast: '過去',
    posFuture: '未来',
    posYourCard: 'あなたのカード',
    posChallenge: '課題',
    posFoundation: '基盤',
    posRecentPast: '近い過去',
    posCrown: '理想',
    posNearFuture: '近い未来',
    posSelf: '自己',
    posEnvironment: '環境',
    posHopesFears: '希望と恐れ',
    posOutcome: '結果',
    reversed: '逆位置',
    upright: '正位置'
  },
  ko: {
    siteTitle: 'Arcana Whispers',
    siteSubtitle: '카드를 뽑아 우주의 메시지를 들어보세요',
    singleTitle: '원카드',
    singleDesc: '빠른 통찰과 안내',
    singleCount: '1장',
    threeTitle: '쓰리카드',
    threeDesc: '과거, 현재, 미래',
    threeCount: '3장',
    crossTitle: '켈틱 크로스',
    crossDesc: '깊고 종합적인 리딩',
    crossCount: '10장',
    tapShuffle: '덱을 탭하여 섞기',
    shuffling: '섞는 중...',
    tapDraw: '탭하여 뽑기 ({n}장)',
    tapRemaining: '탭하여 뽑기 (나머지 {n}장)',
    allDrawn: '모든 카드를 뽑았습니다. 리딩을 공개합니다...',
    drawAgain: '다시 뽑기',
    newSpread: '새 스프레드',
    summary: '리딩 요약',
    posPresent: '현재',
    posPast: '과거',
    posFuture: '미래',
    posYourCard: '당신의 카드',
    posChallenge: '도전',
    posFoundation: '기반',
    posRecentPast: '최근 과거',
    posCrown: '이상',
    posNearFuture: '가까운 미래',
    posSelf: '자아',
    posEnvironment: '환경',
    posHopesFears: '희망과 두려움',
    posOutcome: '결과',
    reversed: '역방향',
    upright: '정방향'
  }
};

var currentLang = localStorage.getItem('tarot-lang') || 'en';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// === DECK IMAGE URLS ===
// All decks use the same reliable GitHub source. Visual variety via CSS filters.
var IMG_BASE = 'https://raw.githubusercontent.com/searge/tarot/master/assets/img/big/';

var currentDeck = localStorage.getItem('tarot-deck') || 'rws';

function getCardImageUrl(card) {
  if (card.arcana === 'major') {
    return IMG_BASE + 'maj' + String(card.number).padStart(2, '0') + '.jpg';
  }
  var suitFile = card.suit === 'pentacles' ? 'pents' : card.suit;
  return IMG_BASE + suitFile + String(card.number).padStart(2, '0') + '.jpg';
}

// === DATA: Major Arcana ===
var majorArcana = [
  { id: "major-0", number: 0, name: "The Fool", arcana: "major", keywords: ["beginnings", "innocence", "spontaneity", "free spirit"], meaning: { upright: "A new chapter begins. Step forward with trust and openness, embracing the unknown with childlike wonder. The universe supports your leap of faith.", reversed: "Recklessness or fear holds you back. You may be taking unnecessary risks without thinking, or conversely, refusing to move forward due to anxiety about the unknown." }, symbol: "fool" },
  { id: "major-1", number: 1, name: "The Magician", arcana: "major", keywords: ["willpower", "creation", "manifestation", "resourcefulness"], meaning: { upright: "You have all the tools you need. Channel your willpower and focus to manifest your desires. This is a time of action and creative power.", reversed: "Manipulation, poor planning, or untapped potential. You may be using your talents for deception, or failing to act on the resources available to you." }, symbol: "magician" },
  { id: "major-2", number: 2, name: "The High Priestess", arcana: "major", keywords: ["intuition", "mystery", "subconscious", "inner voice"], meaning: { upright: "Trust your intuition. Hidden knowledge reveals itself to those who look within. Be still and listen to the whispers of your subconscious mind.", reversed: "Secrets, disconnection from intuition, or information being withheld. You may be ignoring your inner voice or someone around you is not being truthful." }, symbol: "priestess" },
  { id: "major-3", number: 3, name: "The Empress", arcana: "major", keywords: ["abundance", "nurturing", "fertility", "nature"], meaning: { upright: "Abundance flows to you. Nurture your creative projects and relationships. Connect with nature and the sensual pleasures of life.", reversed: "Creative block, dependence on others, or neglecting self-care. You may be smothering others with attention or feeling disconnected from your creative power." }, symbol: "empress" },
  { id: "major-4", number: 4, name: "The Emperor", arcana: "major", keywords: ["authority", "structure", "stability", "leadership"], meaning: { upright: "Establish order and take command of your situation. Structure and discipline will serve you now. Lead with confidence and create lasting foundations.", reversed: "Tyranny, rigidity, or lack of discipline. You may be too controlling or, conversely, lacking the structure needed to achieve your goals." }, symbol: "emperor" },
  { id: "major-5", number: 5, name: "The Hierophant", arcana: "major", keywords: ["tradition", "wisdom", "guidance", "conformity"], meaning: { upright: "Seek wisdom from established traditions and mentors. This is a time for learning, spiritual guidance, and honoring conventional paths.", reversed: "Rebellion against tradition, unconventional approaches, or feeling restricted by dogma. Question whether established rules truly serve your highest good." }, symbol: "hierophant" },
  { id: "major-6", number: 6, name: "The Lovers", arcana: "major", keywords: ["love", "harmony", "choices", "alignment"], meaning: { upright: "A meaningful connection or important choice. Align your actions with your values. Love, harmony, and partnership are highlighted.", reversed: "Disharmony, imbalance, or misalignment of values. A relationship may be tested, or you face a difficult choice between desire and responsibility." }, symbol: "lovers" },
  { id: "major-7", number: 7, name: "The Chariot", arcana: "major", keywords: ["determination", "willpower", "victory", "control"], meaning: { upright: "Charge forward with determination. Victory comes through willpower and focused action. Harness opposing forces and steer them toward your goal.", reversed: "Lack of direction, aggression, or feeling out of control. You may be forcing your will on situations or losing grip on the reins of your life." }, symbol: "chariot" },
  { id: "major-8", number: 8, name: "Strength", arcana: "major", keywords: ["courage", "patience", "compassion", "inner strength"], meaning: { upright: "True strength comes from within. Approach challenges with patience and compassion rather than force. Tame your inner beasts with gentle determination.", reversed: "Self-doubt, weakness, or raw emotion overwhelming reason. You may be lacking confidence or allowing fear to dictate your actions." }, symbol: "strength" },
  { id: "major-9", number: 9, name: "The Hermit", arcana: "major", keywords: ["solitude", "soul-searching", "introspection", "guidance"], meaning: { upright: "Withdraw from the noise to find your inner light. Solitude and contemplation reveal answers that the busy world obscures. Be your own guide.", reversed: "Isolation, loneliness, or withdrawal from necessary connection. You may be hiding from the world or refusing the wisdom gained from introspection." }, symbol: "hermit" },
  { id: "major-10", number: 10, name: "Wheel of Fortune", arcana: "major", keywords: ["cycles", "fate", "turning point", "luck"], meaning: { upright: "The wheel turns in your favor. Destiny, luck, and karmic cycles bring change. Embrace the natural rhythm of ups and downs knowing this too shall shift.", reversed: "Bad luck, resistance to change, or breaking cycles. External forces seem to work against you, but remember that you still have power over your response." }, symbol: "wheel" },
  { id: "major-11", number: 11, name: "Justice", arcana: "major", keywords: ["fairness", "truth", "accountability", "law"], meaning: { upright: "Truth and fairness prevail. Take responsibility for your actions and seek balance. Legal matters or important decisions require objectivity and honesty.", reversed: "Injustice, dishonesty, or avoiding accountability. The scales are tipped unfairly, or you may need to examine where you are being dishonest with yourself." }, symbol: "justice" },
  { id: "major-12", number: 12, name: "The Hanged Man", arcana: "major", keywords: ["surrender", "new perspective", "pause", "sacrifice"], meaning: { upright: "Surrender to gain wisdom. Sometimes you must pause, let go, and see the world from a different angle. This voluntary sacrifice opens new understanding.", reversed: "Stalling, resistance to necessary sacrifice, or martyrdom. You may be delaying an inevitable decision or making sacrifices that serve no real purpose." }, symbol: "hanged" },
  { id: "major-13", number: 13, name: "Death", arcana: "major", keywords: ["transformation", "endings", "transition", "release"], meaning: { upright: "An era ends so a new one can begin. Release what no longer serves you. This is not physical death but profound transformation and necessary closure.", reversed: "Resistance to inevitable change, stagnation, or fear of endings. You cling to what must be released, prolonging suffering rather than allowing natural transition." }, symbol: "death" },
  { id: "major-14", number: 14, name: "Temperance", arcana: "major", keywords: ["balance", "moderation", "patience", "harmony"], meaning: { upright: "Find your middle path. Blend opposing forces into harmony through patience and moderation. Healing comes through balanced, measured action.", reversed: "Imbalance, excess, or lack of long-term vision. You may be going to extremes or rushing processes that require patience and careful blending." }, symbol: "temperance" },
  { id: "major-15", number: 15, name: "The Devil", arcana: "major", keywords: ["bondage", "materialism", "shadow self", "attachment"], meaning: { upright: "Examine your chains — they may be of your own making. Addiction, materialism, or unhealthy attachments hold you. Awareness is the first step to freedom.", reversed: "Breaking free, releasing attachments, or confronting your shadow. You are ready to detach from what binds you and reclaim your personal power." }, symbol: "devil" },
  { id: "major-16", number: 16, name: "The Tower", arcana: "major", keywords: ["upheaval", "revelation", "awakening", "sudden change"], meaning: { upright: "Sudden upheaval shatters false structures. Though shocking, this destruction clears the way for truth. What is built on lies cannot stand.", reversed: "Fear of change, averting disaster, or personal transformation happening internally. The tower may crumble quietly rather than dramatically." }, symbol: "tower" },
  { id: "major-17", number: 17, name: "The Star", arcana: "major", keywords: ["hope", "inspiration", "serenity", "renewal"], meaning: { upright: "Hope shines after darkness. You are entering a period of healing, inspiration, and renewed faith. Pour your gifts freely — the universe replenishes you.", reversed: "Despair, disconnection, or lack of faith. You have lost sight of your guiding star. Reconnect with what inspires you and remember that hope returns." }, symbol: "star" },
  { id: "major-18", number: 18, name: "The Moon", arcana: "major", keywords: ["illusion", "fear", "subconscious", "intuition"], meaning: { upright: "Not all is as it seems. Navigate through uncertainty and illusion using your intuition. Fear and anxiety may cloud judgment — trust your deeper knowing.", reversed: "Release of fear, clarity emerging, or repressed emotions surfacing. The fog lifts and you begin to see through previous illusions and deceptions." }, symbol: "moon" },
  { id: "major-19", number: 19, name: "The Sun", arcana: "major", keywords: ["joy", "success", "vitality", "confidence"], meaning: { upright: "Radiant joy and success illuminate your path. Vitality, confidence, and achievement are yours. This is a time of clarity, warmth, and celebration.", reversed: "Temporary sadness, dimmed enthusiasm, or unrealistic optimism. The sun still shines but clouds partially obscure its warmth. Find gratitude in small joys." }, symbol: "sun" },
  { id: "major-20", number: 20, name: "Judgement", arcana: "major", keywords: ["rebirth", "calling", "absolution", "reflection"], meaning: { upright: "A profound awakening and calling to rise. Reflect on your journey, forgive yourself and others, and answer the higher call that summons you forward.", reversed: "Self-doubt, refusal of a calling, or harsh self-judgment. You avoid necessary self-reflection or punish yourself excessively for past mistakes." }, symbol: "judgement" },
  { id: "major-21", number: 21, name: "The World", arcana: "major", keywords: ["completion", "integration", "accomplishment", "wholeness"], meaning: { upright: "A cycle reaches its fulfillment. You have integrated the lessons and achieved wholeness. Celebrate your accomplishments before the next great cycle begins.", reversed: "Incomplete journey, shortcuts, or lack of closure. You may be rushing to finish without truly integrating the lessons, or feeling something remains undone." }, symbol: "world" }
];

// === DATA: Minor Arcana ===
function buildMinor(cards, suit) {
  return cards.map(function(c) {
    return { id: suit + '-' + String(c.n).padStart(2,'0'), number: c.n, name: c.name, arcana: 'minor', suit: suit, keywords: c.kw, meaning: c.m };
  });
}

var minorArcana = [].concat(
  buildMinor([
    {n:1,name:"Ace of Wands",kw:["inspiration","new venture","creation","potential"],m:{upright:"A spark of inspiration ignites. New creative ventures and passionate beginnings call to you.",reversed:"Delays, lack of motivation, or creative blocks. Rethink your approach before forcing progress."}},
    {n:2,name:"Two of Wands",kw:["planning","decisions","discovery","progress"],m:{upright:"The world is in your hands. Plan your next move with vision and ambition.",reversed:"Fear of the unknown, poor planning, or lack of ambition."}},
    {n:3,name:"Three of Wands",kw:["expansion","foresight","momentum","exploration"],m:{upright:"Expansion and growth reward your earlier vision. Opportunities approach from unexpected directions.",reversed:"Obstacles to growth, delays in plans, or frustration with pace."}},
    {n:4,name:"Four of Wands",kw:["celebration","harmony","homecoming","community"],m:{upright:"Celebrate your achievements and the warmth of community. A milestone has been reached.",reversed:"Lack of harmony, cancelled celebrations, or feeling unwelcome."}},
    {n:5,name:"Five of Wands",kw:["conflict","competition","tension","disagreement"],m:{upright:"Conflict and competition challenge you. Channel this tension constructively.",reversed:"Avoidance of conflict, resolution, or internal struggle."}},
    {n:6,name:"Six of Wands",kw:["victory","recognition","triumph","confidence"],m:{upright:"Victory and public recognition crown your efforts. Ride this wave of confidence.",reversed:"Ego, fall from grace, or lack of recognition."}},
    {n:7,name:"Seven of Wands",kw:["defiance","perseverance","standing ground","challenge"],m:{upright:"Hold your position against opposition. Defend what you believe in with conviction.",reversed:"Overwhelm, giving up, or feeling besieged."}},
    {n:8,name:"Eight of Wands",kw:["speed","movement","swift action","momentum"],m:{upright:"Events accelerate rapidly. Align yourself with this momentum.",reversed:"Delays, frustration, or scattered energy."}},
    {n:9,name:"Nine of Wands",kw:["resilience","persistence","last stand","boundaries"],m:{upright:"You are battle-worn but not defeated. The finish line is near.",reversed:"Exhaustion, stubbornness, or dropping your guard."}},
    {n:10,name:"Ten of Wands",kw:["burden","responsibility","hard work","overwhelm"],m:{upright:"You carry too much. Delegate, release, or reorganize.",reversed:"Release of burdens, delegation, or learning to say no."}},
    {n:11,name:"Page of Wands",kw:["enthusiasm","exploration","discovery","free spirit"],m:{upright:"A message of inspiration arrives. Explore freely with curiosity.",reversed:"Hasty decisions, lack of direction, or creative frustration."}},
    {n:12,name:"Knight of Wands",kw:["action","adventure","passion","impulsiveness"],m:{upright:"Charge boldly toward your passion with courage.",reversed:"Recklessness, impatience, or scattered energy."}},
    {n:13,name:"Queen of Wands",kw:["confidence","determination","warmth","vibrancy"],m:{upright:"Radiate confidence and warmth. Your vibrant energy inspires others.",reversed:"Insecurity, jealousy, or demanding behavior."}},
    {n:14,name:"King of Wands",kw:["leadership","vision","entrepreneur","honor"],m:{upright:"Lead with vision and integrity. Set bold goals and command respect.",reversed:"Tyranny, impulsiveness, or ruthless ambition."}}
  ], "wands"),
  buildMinor([
    {n:1,name:"Ace of Cups",kw:["love","new feelings","compassion","emotional awakening"],m:{upright:"Love overflows. A new emotional beginning pours into your life.",reversed:"Emotional loss, blocked feelings, or emptiness."}},
    {n:2,name:"Two of Cups",kw:["partnership","connection","mutual attraction","unity"],m:{upright:"A beautiful connection forms. Partnership and balanced love create harmony.",reversed:"Imbalance in relationship, breakup, or miscommunication."}},
    {n:3,name:"Three of Cups",kw:["celebration","friendship","community","joy"],m:{upright:"Celebrate with those who lift you. Friendship and shared joy thrive.",reversed:"Overindulgence, gossip, or isolation from community."}},
    {n:4,name:"Four of Cups",kw:["apathy","contemplation","disconnection","reevaluation"],m:{upright:"Discontent and emotional withdrawal. Look up — a gift awaits.",reversed:"Renewed motivation, acceptance, or awareness of opportunity."}},
    {n:5,name:"Five of Cups",kw:["loss","grief","regret","disappointment"],m:{upright:"Grief over what has spilled. Turn to see what is still whole.",reversed:"Acceptance, moving forward, or finding peace after loss."}},
    {n:6,name:"Six of Cups",kw:["nostalgia","innocence","reunion","childhood"],m:{upright:"Sweet memories and innocent joy return. Give and receive with generosity.",reversed:"Living in the past or inability to move forward."}},
    {n:7,name:"Seven of Cups",kw:["illusion","fantasy","choices","wishful thinking"],m:{upright:"Many options shimmer before you, but not all are real.",reversed:"Clarity of purpose or reality check. Choose wisely."}},
    {n:8,name:"Eight of Cups",kw:["departure","withdrawal","seeking truth","letting go"],m:{upright:"Walk away from what no longer fulfills your soul.",reversed:"Fear of leaving, aimless drifting, or avoidance."}},
    {n:9,name:"Nine of Cups",kw:["contentment","satisfaction","wishes fulfilled","gratitude"],m:{upright:"Your wish is granted. Emotional satisfaction fills you completely.",reversed:"Dissatisfaction despite having much, or smugness."}},
    {n:10,name:"Ten of Cups",kw:["happiness","family","harmony","emotional fulfillment"],m:{upright:"Complete emotional fulfillment and family harmony.",reversed:"Broken home or unrealistic expectations of happiness."}},
    {n:11,name:"Page of Cups",kw:["creative message","intuition","sensitivity","dreamer"],m:{upright:"A gentle message of the heart arrives. Stay open to surprises.",reversed:"Emotional immaturity or creative blocks."}},
    {n:12,name:"Knight of Cups",kw:["romance","charm","imagination","idealism"],m:{upright:"A romantic offer approaches. Follow your heart with grace.",reversed:"Moodiness, unrealistic expectations, or manipulation."}},
    {n:13,name:"Queen of Cups",kw:["compassion","emotional depth","intuition","nurturing"],m:{upright:"Deep emotional wisdom and compassionate intuition guide you.",reversed:"Emotional insecurity, codependence, or martyrdom."}},
    {n:14,name:"King of Cups",kw:["emotional balance","diplomacy","wisdom","calm"],m:{upright:"Master your emotions. Lead with emotional intelligence.",reversed:"Emotional manipulation, moodiness, or volatility."}}
  ], "cups"),
  buildMinor([
    {n:1,name:"Ace of Swords",kw:["clarity","breakthrough","truth","new idea"],m:{upright:"A breakthrough of clarity cuts through confusion. Truth is revealed.",reversed:"Confusion, miscommunication, or harsh truths poorly delivered."}},
    {n:2,name:"Two of Swords",kw:["indecision","stalemate","avoidance","difficult choice"],m:{upright:"A difficult choice paralyzes you. Eventually you must choose.",reversed:"Information overload or lies revealed. The truth frees."}},
    {n:3,name:"Three of Swords",kw:["heartbreak","grief","sorrow","painful truth"],m:{upright:"Heartbreak pierces you. Let the pain move through you.",reversed:"Recovery from heartbreak, releasing pain, or forgiveness."}},
    {n:4,name:"Four of Swords",kw:["rest","recovery","contemplation","solitude"],m:{upright:"Rest is necessary recovery. Withdraw from battle to heal.",reversed:"Restlessness, burnout, or forced back into action."}},
    {n:5,name:"Five of Swords",kw:["conflict","defeat","betrayal","hostility"],m:{upright:"A hollow victory or bitter defeat. Consider walking away.",reversed:"Reconciliation, making amends, or moving past conflict."}},
    {n:6,name:"Six of Swords",kw:["transition","moving on","leaving behind","healing journey"],m:{upright:"You cross troubled waters toward calmer shores.",reversed:"Stuck in turbulent situations or unresolved baggage."}},
    {n:7,name:"Seven of Swords",kw:["deception","strategy","stealth","cunning"],m:{upright:"Strategy and cunning may be needed. Examine your methods.",reversed:"Coming clean, getting caught, or imposter syndrome."}},
    {n:8,name:"Eight of Swords",kw:["restriction","imprisonment","helplessness","self-limiting"],m:{upright:"You feel trapped but the bindings are looser than you think.",reversed:"Release from limiting beliefs or new perspective."}},
    {n:9,name:"Nine of Swords",kw:["anxiety","nightmares","worry","despair"],m:{upright:"Anxiety and dark thoughts haunt you. Reach out for help.",reversed:"Hope emerging, releasing anxiety, or finding support."}},
    {n:10,name:"Ten of Swords",kw:["rock bottom","ending","crisis","betrayal"],m:{upright:"The final blow has landed. Only renewal remains.",reversed:"Recovery begins. The worst is over."}},
    {n:11,name:"Page of Swords",kw:["curiosity","mental agility","new ideas","vigilance"],m:{upright:"A sharp mind eager to learn. Question everything.",reversed:"Gossip, hasty communication, or all talk no action."}},
    {n:12,name:"Knight of Swords",kw:["ambition","fast action","determination","assertiveness"],m:{upright:"Charge at your goal with fierce determination.",reversed:"Reckless haste, arguments, or scattered focus."}},
    {n:13,name:"Queen of Swords",kw:["independence","clear boundaries","direct communication","perception"],m:{upright:"See clearly and speak directly. Set clear boundaries.",reversed:"Cold-heartedness, cruelty, or bitterness."}},
    {n:14,name:"King of Swords",kw:["intellect","authority","truth","clear thinking"],m:{upright:"Lead with intellectual integrity and moral authority.",reversed:"Abuse of power, manipulation, or tyranny."}}
  ], "swords"),
  buildMinor([
    {n:1,name:"Ace of Pentacles",kw:["opportunity","prosperity","new venture","manifestation"],m:{upright:"A golden opportunity materializes. Plant this seed wisely.",reversed:"Missed opportunity, poor planning, or financial setback."}},
    {n:2,name:"Two of Pentacles",kw:["balance","adaptability","juggling","time management"],m:{upright:"Juggle your responsibilities with grace and flexibility.",reversed:"Overwhelm, overcommitment, or financial imbalance."}},
    {n:3,name:"Three of Pentacles",kw:["teamwork","collaboration","skill","craftsmanship"],m:{upright:"Skilled collaboration produces excellence.",reversed:"Lack of teamwork or disregard for expertise."}},
    {n:4,name:"Four of Pentacles",kw:["security","control","conservatism","possession"],m:{upright:"You hold tightly to what you have. Save wisely.",reversed:"Generosity, releasing control, or financial insecurity."}},
    {n:5,name:"Five of Pentacles",kw:["hardship","poverty","isolation","adversity"],m:{upright:"Material hardship. Help is available — look for the light.",reversed:"Recovery from hardship or finding help."}},
    {n:6,name:"Six of Pentacles",kw:["generosity","charity","giving and receiving","fairness"],m:{upright:"The balance of giving and receiving. Share your abundance.",reversed:"Strings attached or one-sided generosity."}},
    {n:7,name:"Seven of Pentacles",kw:["patience","investment","assessment","long-term view"],m:{upright:"Step back and assess your progress. Harvest requires patience.",reversed:"Impatience, poor returns, or wasted effort."}},
    {n:8,name:"Eight of Pentacles",kw:["diligence","mastery","skill development","dedication"],m:{upright:"Dedicate yourself to mastering your craft.",reversed:"Perfectionism or lack of motivation."}},
    {n:9,name:"Nine of Pentacles",kw:["abundance","luxury","self-sufficiency","refinement"],m:{upright:"Enjoy the fruits of your labor. You have earned this.",reversed:"Financial dependence or superficial values."}},
    {n:10,name:"Ten of Pentacles",kw:["wealth","legacy","inheritance","family prosperity"],m:{upright:"Lasting wealth and family legacy. You build something enduring.",reversed:"Financial failure or family disputes over money."}},
    {n:11,name:"Page of Pentacles",kw:["ambition","desire to learn","opportunity","diligence"],m:{upright:"A studious beginning. Approach with diligence.",reversed:"Lack of progress or procrastination."}},
    {n:12,name:"Knight of Pentacles",kw:["hard work","reliability","routine","persistence"],m:{upright:"Steady, reliable progress through hard work.",reversed:"Stagnation, laziness, or excessive caution."}},
    {n:13,name:"Queen of Pentacles",kw:["nurturing","practical","abundance","security"],m:{upright:"Create a warm, abundant home through practical wisdom.",reversed:"Work-life imbalance or neglecting self."}},
    {n:14,name:"King of Pentacles",kw:["wealth","business","leadership","discipline"],m:{upright:"Material mastery and business acumen. Build lasting enterprises.",reversed:"Greed, materialism, or financial mismanagement."}}
  ], "pentacles")
);

// === SPREADS ===
var SPREADS = {
  single: { id:'single', cardCount:1, nameKey:'singleTitle', descKey:'singleDesc', positions:[{id:0,labelKey:'posYourCard'}] },
  threeCard: { id:'threeCard', cardCount:3, nameKey:'threeTitle', descKey:'threeDesc', positions:[{id:0,labelKey:'posPast'},{id:1,labelKey:'posPresent'},{id:2,labelKey:'posFuture'}] },
  celticCross: { id:'celticCross', cardCount:10, nameKey:'crossTitle', descKey:'crossDesc', positions:[{id:0,labelKey:'posPresent'},{id:1,labelKey:'posChallenge'},{id:2,labelKey:'posFoundation'},{id:3,labelKey:'posRecentPast'},{id:4,labelKey:'posCrown'},{id:5,labelKey:'posNearFuture'},{id:6,labelKey:'posSelf'},{id:7,labelKey:'posEnvironment'},{id:8,labelKey:'posHopesFears'},{id:9,labelKey:'posOutcome'}] }
};

// === DECK ===
function shuffle(array) {
  var arr = array.slice();
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr;
}

function createDeck() { return majorArcana.concat(minorArcana); }

function drawCards(deck, count) {
  var shuffled = shuffle(deck);
  return shuffled.slice(0, count).map(function(card) {
    return Object.assign({}, card, { isReversed: Math.random() < 0.3 });
  });
}

// === RENDERER ===
var DECK_FILTERS = { rws:'', vintage:'deck-vintage', noir:'deck-noir', mystic:'deck-mystic', faded:'deck-faded' };

function createCardElement(card) {
  var container = document.createElement('div');
  container.className = 'card-container';
  var filterClass = DECK_FILTERS[currentDeck] || '';
  if (filterClass) container.classList.add(filterClass);
  container.dataset.cardId = card.id;

  var imgUrl = getCardImageUrl(card);

  container.innerHTML =
    '<div class="card-inner">' +
      '<div class="card-back card-face">' +
        '<div class="card-back-pattern">' +
          '<svg class="card-back-mandala" viewBox="0 0 100 100">' +
            '<circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent-gold)" stroke-width="1" opacity="0.4"/>' +
            '<circle cx="50" cy="50" r="28" fill="none" stroke="var(--accent-gold)" stroke-width="0.8" opacity="0.3"/>' +
            '<circle cx="50" cy="50" r="16" fill="none" stroke="var(--accent-gold)" stroke-width="0.6" opacity="0.3"/>' +
            '<polygon points="50,10 61,35 90,35 67,52 73,78 50,62 27,78 33,52 10,35 39,35" fill="none" stroke="var(--accent-gold)" stroke-width="0.8" opacity="0.3"/>' +
          '</svg>' +
        '</div>' +
      '</div>' +
      '<div class="card-front card-face">' +
        '<img src="' + imgUrl + '" alt="" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
        '<div class="card-fallback" style="display:none">' + card.name + '</div>' +
      '</div>' +
    '</div>';

  return container;
}

function createDeckStack() {
  var stack = document.createElement('div');
  stack.className = 'deck-stack';
  stack.setAttribute('role', 'button');
  stack.setAttribute('aria-label', 'Draw a card');
  stack.tabIndex = 0;
  for (var i = 0; i < 5; i++) {
    var card = document.createElement('div');
    card.className = 'deck-card';
    stack.appendChild(card);
  }
  return stack;
}

function renderInterpretation(interpretations, summaryText) {
  var panel = document.createElement('div');
  panel.className = 'interpretation visible slide-up';

  var cardsHTML = interpretations.map(function(item, i) {
    var orientLabel = item.orientation === 'reversed' ? ('↓ ' + t('reversed')) : ('↑ ' + t('upright'));
    return '<div class="interpretation-card fade-in stagger-' + (i + 1) + '">' +
      '<div class="interpretation-card-header">' +
        '<span class="interpretation-position">' + t(item.position.labelKey) + '</span>' +
        '<span class="interpretation-card-name">' + item.card.name + '</span>' +
        '<span class="interpretation-orientation">' + orientLabel + '</span>' +
      '</div>' +
      '<div class="interpretation-keywords">' +
        item.keywords.map(function(k) { return '<span class="interpretation-keyword">' + k + '</span>'; }).join('') +
      '</div>' +
      '<p class="interpretation-text">' + item.meaning + '</p>' +
    '</div>';
  }).join('');

  panel.innerHTML = cardsHTML +
    '<div class="reading-summary fade-in stagger-' + Math.min(interpretations.length + 1, 10) + '">' +
      '<h3>' + t('summary') + '</h3>' +
      '<p>' + summaryText + '</p>' +
    '</div>';

  return panel;
}

// === INTERPRETER ===
function interpretReading(drawnCards, spread) {
  return drawnCards.map(function(card, index) {
    var position = spread.positions[index];
    var orientation = card.isReversed ? 'reversed' : 'upright';
    return { card: card, position: position, orientation: orientation, meaning: card.meaning[orientation], keywords: card.keywords };
  });
}

function generateSummary(interpretations, spread) {
  var themes = [];
  var allKeywords = [];
  interpretations.forEach(function(i) { allKeywords = allKeywords.concat(i.keywords); });
  var keywordCount = {};
  allKeywords.forEach(function(k) { keywordCount[k] = (keywordCount[k] || 0) + 1; });
  var dominant = Object.entries(keywordCount).filter(function(e){return e[1]>1;}).sort(function(a,b){return b[1]-a[1];}).slice(0,3).map(function(e){return e[0];});
  if (dominant.length > 0) themes.push('Recurring themes of ' + dominant.join(', ') + ' weave through your reading.');
  var rev = interpretations.filter(function(i){return i.orientation==='reversed';}).length;
  var tot = interpretations.length;
  if (rev === 0) themes.push('All cards appear upright, suggesting clear energy flowing in your favor.');
  else if (rev > tot/2) themes.push('Many reversed cards suggest inner work and releasing old patterns.');
  var maj = interpretations.filter(function(i){return i.card.arcana==='major';}).length;
  if (maj >= Math.ceil(tot/2)) themes.push('Strong Major Arcana presence indicates powerful karmic forces at play.');
  return themes.length > 0 ? themes.join(' ') : 'Your reading presents a unique blend of energies. Take time to sit with each card.';
}

// === ANIMATOR ===
function playShuffle(deckElement) {
  return new Promise(function(resolve) {
    var cards = deckElement.querySelectorAll('.deck-card');
    cards.forEach(function(card) {
      card.style.setProperty('--sx', ((Math.random()-0.5)*120)+'px');
      card.style.setProperty('--sy', ((Math.random()-0.5)*80)+'px');
      card.style.setProperty('--sr', ((Math.random()-0.5)*30)+'deg');
      card.style.setProperty('--gx', ((Math.random()-0.5)*60)+'px');
      card.style.setProperty('--gy', ((Math.random()-0.5)*40)+'px');
      card.style.setProperty('--gr', ((Math.random()-0.5)*15)+'deg');
      card.classList.add('shuffling');
    });
    setTimeout(function() {
      cards.forEach(function(card) { card.classList.remove('shuffling'); });
      resolve();
    }, 1500);
  });
}

function flipCard(el, isReversed) {
  var inner = el.querySelector('.card-inner');
  if (!inner) return;
  void inner.offsetHeight;
  if (isReversed) {
    inner.classList.add('reversed');
  }
  inner.classList.add('flipped');
}

function revealSpread(cardEls, drawnCards) {
  return new Promise(function(resolve) {
    var count = Math.min(cardEls.length, drawnCards.length);
    if (count === 0) { resolve(); return; }
    for (var i = 0; i < count; i++) {
      (function(idx) {
        var d = 100 + idx * 400;
        setTimeout(function() {
          flipCard(cardEls[idx], drawnCards[idx].isReversed);
          if (idx === count - 1) setTimeout(resolve, 800);
        }, d);
      })(i);
    }
  });
}

function dealCard(cardElement) {
  return new Promise(function(resolve) {
    cardElement.classList.add('dealing');
    setTimeout(function() {
      cardElement.classList.remove('dealing');
      resolve();
    }, 500);
  });
}

// === UI CONTROLLER ===
var STATE = { HOME:'home', SHUFFLING:'shuffling', DRAWING:'drawing', REVEALING:'revealing', READING:'reading' };
var currentState = STATE.HOME;
var selectedSpread = null;
var drawnCards_arr = [];
var cardElements_arr = [];
var deck_arr = createDeck();
var drawIndex = 0;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});
  document.getElementById(id).classList.add('active');
}

function selectSpread(spreadId) {
  selectedSpread = SPREADS[spreadId];
  if (!selectedSpread) return;
  showScreen('screen-reading');
  setupReadingScreen();
  currentState = STATE.SHUFFLING;
}

function setupReadingScreen() {
  document.getElementById('reading-title').textContent = t(selectedSpread.nameKey);
  document.getElementById('reading-desc').textContent = t(selectedSpread.descKey);
  var spreadArea = document.getElementById('spread-area');
  spreadArea.innerHTML = '';
  spreadArea.className = '';
  var deckArea = document.getElementById('deck-area');
  deckArea.innerHTML = '';
  document.getElementById('interpretation-panel').innerHTML = '';

  var deckStack = createDeckStack();
  deckArea.appendChild(deckStack);

  var instruction = document.createElement('p');
  instruction.className = 'instruction';
  instruction.textContent = t('tapShuffle');
  deckArea.appendChild(instruction);

  var actionsBar = document.createElement('div');
  actionsBar.className = 'actions-bar';
  actionsBar.id = 'actions-bar';
  actionsBar.style.display = 'none';
  deckArea.appendChild(actionsBar);

  deckStack.addEventListener('click', handleDeckClick);
  deckStack.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleDeckClick(); }
  });
}

function handleDeckClick() {
  if (currentState === STATE.SHUFFLING) performShuffle();
  else if (currentState === STATE.DRAWING) performDraw();
}

function performShuffle() {
  var deckStack = document.querySelector('.deck-stack');
  var instruction = document.querySelector('#deck-area .instruction');
  instruction.textContent = t('shuffling');
  playShuffle(deckStack).then(function() { return playShuffle(deckStack); }).then(function() {
    currentState = STATE.DRAWING;
    drawnCards_arr = drawCards(deck_arr, selectedSpread.cardCount);
    cardElements_arr = [];
    var txt = t('tapDraw').replace('{n}', selectedSpread.cardCount).replace('{s}', selectedSpread.cardCount > 1 ? 's' : '');
    instruction.textContent = txt;
    setupSpreadLayout();
  });
}

function setupSpreadLayout() {
  var area = document.getElementById('spread-area');
  if (selectedSpread.id === 'single') area.className = 'spread-area-single';
  else if (selectedSpread.id === 'threeCard') area.className = 'spread-area-three';
  else area.className = 'spread-area-celtic';
}

var isDrawing = false;

function performDraw() {
  if (drawIndex >= selectedSpread.cardCount || isDrawing) return;
  isDrawing = true;

  var currentIndex = drawIndex;
  drawIndex++;

  var spreadArea = document.getElementById('spread-area');
  var card = drawnCards_arr[currentIndex];
  var cardEl = createCardElement(card);
  cardElements_arr.push(cardEl);

  spreadArea.appendChild(cardEl);

  dealCard(cardEl).then(function() {
    isDrawing = false;
    var instruction = document.querySelector('#deck-area .instruction');
    var remaining = selectedSpread.cardCount - drawIndex;
    if (remaining > 0) {
      instruction.textContent = t('tapRemaining').replace('{n}', remaining);
    } else {
      instruction.textContent = t('allDrawn');
      currentState = STATE.REVEALING;
      setTimeout(performReveal, 500);
    }
  });
}

function performReveal() {
  revealSpread(cardElements_arr, drawnCards_arr).then(function() {
    currentState = STATE.READING;
    showReading();
  });
}

function showReading() {
  var instruction = document.querySelector('#deck-area .instruction');
  instruction.textContent = '';
  var deckStack = document.querySelector('.deck-stack');
  if (deckStack) deckStack.style.display = 'none';

  var interpretations = interpretReading(drawnCards_arr, selectedSpread);
  var summary = generateSummary(interpretations, selectedSpread);
  var panel = renderInterpretation(interpretations, summary);
  var interpPanel = document.getElementById('interpretation-panel');
  interpPanel.innerHTML = '';
  interpPanel.appendChild(panel);

  var actionsBar = document.getElementById('actions-bar');
  actionsBar.style.display = 'flex';
  actionsBar.innerHTML =
    '<button class="btn btn-primary" id="btn-draw-again">' + t('drawAgain') + '</button>' +
    '<button class="btn btn-secondary" id="btn-new-spread">' + t('newSpread') + '</button>';
  document.getElementById('btn-draw-again').addEventListener('click', function() { resetReading(); selectSpread(selectedSpread.id); });
  document.getElementById('btn-new-spread').addEventListener('click', goHome);
}

function resetReading() {
  drawIndex = 0;
  isDrawing = false;
  drawnCards_arr = [];
  cardElements_arr = [];
  deck_arr = createDeck();
}

function goHome() {
  resetReading();
  currentState = STATE.HOME;
  showScreen('screen-home');
}

// === THEME ===
function initTheme() {
  var saved = localStorage.getItem('tarot-theme');
  if (saved === 'light') document.body.classList.add('light-theme');
  document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('tarot-theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  });
}

// === INIT ===
function init() {
  initTheme();
  applyLanguage();

  document.querySelectorAll('[data-spread]').forEach(function(btn) {
    btn.addEventListener('click', function() { selectSpread(btn.dataset.spread); });
  });

  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      currentLang = btn.dataset.lang;
      localStorage.setItem('tarot-lang', currentLang);
      applyLanguage();
      if (currentState === STATE.HOME) {} // home screen updates via data-i18n
    });
  });

  document.getElementById('deck-selector').value = currentDeck;
  document.getElementById('deck-selector').addEventListener('change', function(e) {
    currentDeck = e.target.value;
    localStorage.setItem('tarot-deck', currentDeck);
  });
}

document.addEventListener('DOMContentLoaded', init);

})();
