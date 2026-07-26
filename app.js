const IMG=`./asset-01.webp`;
const dims=['study','social','time','survival','action'];
const labels={study:'讀書值',social:'社交值',time:'時間管理',survival:'續命值',action:'行動力'};
const resultImages={
  course:'./result-course.webp',
  campus:'./result-campus.webp',
  friends:'./result-friends.webp',
  dorm:'./result-dorm.webp',
  food:'./result-food.webp',
  report:'./result-report.webp',
  sleep:'./result-sleep.webp',
  saving:'./result-saving.webp',
  parttime:'./result-parttime.webp',
  club:'./result-club.webp',
  love:'./result-love.webp',
  growth:'./result-growth.webp'
};

const resultThemes={course:['👑','#397bd5','#eef6ff','#a9c9ee'],campus:['📍','#4d966f','#f1faf4','#afd8bd'],friends:['🥳','#e45862','#fff3f3','#f3b6ba'],dorm:['🏠','#477fc2','#f2f7ff','#afc9ea'],food:['🍴','#df7b20','#fff7ed','#f3c79f'],report:['📄','#7655aa','#f8f3ff','#cdbbe5'],sleep:['💤','#397cc4','#f2f8ff','#b7d3ef'],saving:['💰','#c28a17','#fff9e9','#ead495'],parttime:['💼','#247c8c','#effafb','#9fcfd4'],club:['🎉','#7358a8','#f7f3ff','#c9bbe2'],love:['🫥','#607d8b','#f3f7f8','#bdcdd3'],growth:['🌱','#54883f','#f3faef','#bed5ae']};

const traits=[
{id:1,text:'選課比搶演唱會門票還難',img:'./asset-02.webp',scores:{study:2,action:5,survival:2}},
{id:2,text:'今天也在學校迷路了',img:'./asset-03.webp',scores:{action:4,survival:2,social:1}},
{id:3,text:'努力交到第一群朋友',img:'./asset-04.webp',scores:{social:5,action:3}},
{id:4,text:'第一次離家住宿',img:'./asset-05.webp',scores:{survival:4,action:3,social:2}},
{id:5,text:'我知道學餐哪間比較好吃',img:'./asset-06.webp',scores:{survival:4,social:2}},
{id:6,text:'報告做不完',img:'./asset-07.webp',scores:{study:5,action:4,survival:2}},
{id:7,text:'每次都想翹早八',img:'./asset-08.webp',scores:{survival:5,study:1,action:-1}},
{id:8,text:'月底開始吃土',img:'./asset-09.webp',scores:{survival:5,time:2,action:2}},
{id:9,text:'打工賺生活費',img:'./asset-10.webp',scores:{time:5,action:4,survival:3}},
{id:10,text:'社團活動跑不停',img:'./asset-11.webp',scores:{social:5,action:4,time:1}},
{id:11,text:'大學回憶累積中',img:'./asset-12.webp',scores:{social:4,action:3,time:1}},
{id:12,text:'每天都比昨天更獨立',img:'./asset-13.webp',scores:{action:5,time:3,survival:3,study:2}}
];

const results=[
{key:'course',name:'選課王者',desc:'選課前一定先做功課，課表排好後，整學期都安心了一半。',skill:'先準備備選清單與課程代碼，選課當天會更穩。',hashtags:['#選課快狠準','#課表先排好','#事情先安排','#效率第一'],weights:{action:1.8,study:1.0,survival:0.7},preferred:[1]},
{key:'campus',name:'校園探險家',desc:'每天都在解鎖新教室、新店家和新捷徑，迷路也是探索的一部分。',skill:'把常用教室先收藏在地圖裡，探索會更有效率。',hashtags:['#校園趴趴走','#迷路日常','#每天都在探路','#哪裡都想去'],weights:{action:1.6,survival:1.0,social:0.5},preferred:[2]},
{key:'friends',name:'社交高手',desc:'迎新、分組、社團都是交朋友的機會，不知不覺認識了一大群人。',skill:'不用勉強自己認識所有人，真誠比人數更重要。',hashtags:['#朋友越來越多','#聊天零冷場','#到哪都聊得起來','#迎新最活躍'],weights:{social:1.9,action:1.0,survival:0.3},preferred:[3]},
{key:'dorm',name:'宿舍生活家',desc:'慢慢把宿舍住成第二個家，也越來越享受獨立生活。',skill:'和室友先談好生活習慣，很多小摩擦都能提早避免。',hashtags:['#宿舍日常','#室友日常','#第二個家','#住宿人生'],weights:{survival:1.7,action:1.1,social:0.7},preferred:[4]},
{key:'food',name:'美食探索家',desc:'哪裡好吃、哪裡有優惠，你總是比別人更早知道。',skill:'記得把價格、份量與尖峰時段一起記下來。',hashtags:['#今天吃哪','#學餐踩點','#美食雷達','#吃飯第一名'],weights:{survival:1.8,social:0.8,action:0.4},preferred:[5]},
{key:'report',name:'報告救火隊',desc:'Deadline 一到立刻進入戰鬥模式，最後總能順利交出去。',skill:'把最後期限往前挪一天，救火會變成穩定輸出。',hashtags:['#死線求生','#趕工模式','#熬夜趕報告','#最後一天完成'],weights:{study:1.7,action:1.5,survival:0.8},preferred:[6]},
{key:'sleep',name:'補眠大師',desc:'空堂先補眠，睡飽了才有精神面對早八和報告。',skill:'短暫補眠控制在二十分鐘左右，醒來比較不會更累。',hashtags:['#睡飽再說','#早八剋星','#補眠模式','#今天先睡'],weights:{survival:1.9,study:0.4,action:-0.2},preferred:[7]},
{key:'saving',name:'省錢小達人',desc:'折扣、優惠、集點通通不放過，每一塊錢都花在刀口上。',skill:'固定記錄三大支出，就能更快找到最容易超支的地方。',hashtags:['#月底吃土','#省錢日常','#優惠必收','#小資生活'],weights:{survival:1.8,time:0.9,action:0.7},preferred:[8]},
{key:'parttime',name:'打工生活派',desc:'下課趕打工雖然累，但看到薪水入帳就覺得很值得。',skill:'排班前先保留課業與休息時間，才能走得更久。',hashtags:['#打工人生','#自己賺自己花','#今天也有上班','#下班吃宵夜'],weights:{time:1.9,action:1.5,survival:0.8},preferred:[9]},
{key:'club',name:'社團活動仔',desc:'不是在辦活動，就是在跑活動，回憶也因此越來越多。',skill:'活動再多也要留白，才能讓熱情維持久一點。',hashtags:['#社團咖','#每天都有局','#活動不停','#行程滿滿'],weights:{social:1.7,action:1.5,time:0.5},preferred:[10]},
{key:'love',name:'I 人求生派',desc:'剛開始比較慢熟，不太會主動開口，但熟了之後就是真朋友。你喜歡先觀察環境，再慢慢找到最自在的相處方式。',skill:'不用急著融入每一個圈子，找到舒服的節奏，朋友自然會慢慢出現。',hashtags:['#開口需要勇氣','#努力認識人','#先觀察一下','#慢熟型'],weights:{social:1.2,action:0.6,survival:1.2},preferred:[11]},
{key:'growth',name:'默默成長派',desc:'你不急著和別人比較，而是默默累積自己的經驗值。課業、社團、打工、生活，每一天都比昨天更進步一點。',skill:'別急著證明自己，慢慢走，你會發現自己早就在成長。',hashtags:['#每天進步一點','#慢慢變厲害','#今天也有進步','#找到自己的步調'],weights:{action:1.5,time:1.0,survival:1.0,study:0.8},preferred:[12]}
];

const loadingMascots=[
  './loading-course.webp',
  './loading-campus.webp',
  './loading-friends.webp',
  './loading-dorm.webp',
  './loading-food.webp',
  './loading-report.webp',
  './loading-sleep.webp',
  './loading-saving.webp',
  './loading-parttime.webp',
  './loading-club.webp',
  './loading-love.webp',
  './loading-growth.webp'
];

let loadingMascotTimer = null;
let calculationTimer = null;
let selected = [];
let current = null;
let currentStats = null;
let lastResults = [];
let toastTimer = null;

const screenIds = ['welcome', 'selection', 'loading', 'result'];

const byId = id => document.getElementById(id);
const query = selector => document.querySelector(selector);

function setText(id, value) {
  const element = byId(id);
  if (element) element.textContent = String(value ?? '');
}

function getResultTheme(key) {
  return resultThemes[key] || ['✨', '#4f8edc', '#f2f8ff', '#b9d4f3'];
}

function trackEvent(name, params = {}) {
  if (typeof window.trackTunEvent === 'function') {
    window.trackTunEvent(name, params);
  }
}

function show(screenId) {
  screenIds.forEach(id => {
    byId(id)?.classList.toggle('hidden', id !== screenId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startLoadingMascots() {
  const mascot = byId('loadingMascot');
  if (!mascot) return;

  let index = 0;
  mascot.src = loadingMascots[index];
  stopLoadingMascots();

  loadingMascotTimer = window.setInterval(() => {
    index = (index + 1) % loadingMascots.length;

    if (typeof mascot.animate === 'function') {
      mascot.animate(
        [
          { opacity: 0.25, transform: 'scale(.9)' },
          { opacity: 1, transform: 'scale(1)' }
        ],
        { duration: 520, easing: 'cubic-bezier(.2,.8,.25,1)' }
      );
    }

    mascot.src = loadingMascots[index];
  }, 1250);
}

function stopLoadingMascots() {
  if (loadingMascotTimer) {
    window.clearInterval(loadingMascotTimer);
    loadingMascotTimer = null;
  }
}

function startQuiz() {
  selected = [];
  current = null;
  currentStats = null;
  render();
  update();
  show('selection');
  trackEvent('quiz_start');
}

function render() {
  const grid = byId('grid');
  if (!grid) return;

  grid.innerHTML = '';

  traits.forEach(trait => {
    const button = document.createElement('button');
    const isSelected = selected.includes(trait.id);

    button.type = 'button';
    button.className = `trait${isSelected ? ' selected' : ''}`;
    button.setAttribute('aria-pressed', String(isSelected));
    button.setAttribute('aria-label', trait.text);
    button.innerHTML = `
      <img
        class="card-img"
        src="${trait.img}"
        alt="${trait.text}"
        decoding="async"
        loading="lazy"
      >
    `;
    button.addEventListener('click', () => toggle(trait.id));
    grid.appendChild(button);
  });
}

function toggle(id) {
  const index = selected.indexOf(id);

  if (index >= 0) {
    selected.splice(index, 1);
  } else if (selected.length < 4) {
    selected.push(id);
  } else {
    toast('最多選 4 個，選擇困難也是大學必修 😌');
    return;
  }

  render();
  update();
}

function update() {
  const count = selected.length;
  const counter = byId('counterNum');
  const bar = byId('bar');
  const percentage = byId('progressPct');
  const submit = byId('submit');

  if (counter) counter.textContent = String(count);
  if (bar) bar.style.width = `${count / 4 * 100}%`;
  if (percentage) percentage.textContent = `${Math.round(count / 4 * 100)}%`;

  if (submit) {
    submit.disabled = count !== 4;
    submit.textContent = count === 4
      ? '選好啦！看我的人格分析 ✨'
      : `先選 ${4 - count} 個選項才能前往下一步喔`;
  }
}

function submitSelection() {
  if (selected.length !== 4) return;

  show('loading');
  startLoadingMascots();
  trackEvent('quiz_submit', { selected_traits: selected.join(',') });

  if (calculationTimer) window.clearTimeout(calculationTimer);
  calculationTimer = window.setTimeout(calculate, 5000);
}

function getCalculatedResult() {
  const raw = Object.fromEntries(dims.map(dimension => [dimension, 0]));

  selected.forEach(id => {
    const trait = traits.find(item => item.id === id);
    if (!trait) return;

    Object.entries(trait.scores).forEach(([key, value]) => {
      raw[key] += value;
    });
  });

  const selectedSet = new Set(selected);

  if (selectedSet.has(2) && selectedSet.has(5)) {
    raw.study += 2;
    raw.action += 2;
  }
  if (selectedSet.has(3) && selectedSet.has(8)) raw.social += 3;
  if (selectedSet.has(4) && selectedSet.has(1)) raw.survival += 2;
  if (selectedSet.has(6) && selectedSet.has(10)) {
    raw.time += 3;
    raw.action += 2;
  }
  if (selectedSet.has(11) && selectedSet.has(3)) {
    raw.social += 2;
    raw.time += 1;
  }
  if (selectedSet.has(12) && selectedSet.has(10)) {
    raw.time += 2;
    raw.action += 2;
  }

  const maximum = Math.max(...Object.values(raw), 1);
  const normalized = {};

  dims.forEach(dimension => {
    normalized[dimension] = Math.max(
      12,
      Math.min(99, Math.round((raw[dimension] / maximum) * 80 + 15))
    );
  });

  const ranked = results.map(result => {
    let total = 0;
    let weight = 0;

    Object.entries(result.weights).forEach(([key, value]) => {
      total += (raw[key] || 0) * value;
      weight += Math.abs(value);
    });

    total += result.preferred.filter(id => selectedSet.has(id)).length * 8;

    if (lastResults[0] === result.key) total -= 4.8;
    if (lastResults[1] === result.key) total -= 2.3;

    return { result, total: total / Math.max(weight, 1) };
  }).sort((a, b) => b.total - a.total);

  const top = ranked.slice(0, 4);
  const seed = selected
    .slice()
    .sort((a, b) => a - b)
    .reduce((hash, value) => ((hash * 41) + value * 17) % 1009, 13);

  const pool = top.filter((item, index) =>
    index === 0 || top[0].total - item.total < 1.25
  );

  return {
    result: pool[seed % pool.length].result,
    stats: normalized
  };
}

function calculate() {
  stopLoadingMascots();

  const calculated = getCalculatedResult();
  current = calculated.result;
  currentStats = calculated.stats;
  lastResults = [current.key, ...lastResults].slice(0, 3);

  renderResult(current, currentStats, true);
}

function stripEndingPunctuation(text) {
  return String(text || '').replace(/[。．.!！?？]+$/u, '').trim();
}

function applyResultTheme(result) {
  const theme = getResultTheme(result.key);
  const resultElement = byId('result');
  resultElement?.style.setProperty('--result-accent', theme[1]);
  resultElement?.style.setProperty('--result-soft', theme[2]);
  resultElement?.style.setProperty('--result-line', theme[3]);
  return theme;
}

function renderTags(tags) {
  const container = byId('tags');
  if (!container) return;

  container.replaceChildren(...tags.map(tag => {
    const element = document.createElement('span');
    element.textContent = tag;
    return element;
  }));
}

function renderStats(stats) {
  const container = byId('stats');
  if (!container) return;

  container.replaceChildren(...dims.map(dimension => {
    const value = stats[dimension] ?? 50;
    const row = document.createElement('div');
    row.className = 'stat';
    row.innerHTML = `
      <span class="stat-label stat-${dimension}">${labels[dimension]}</span>
      <span class="stat-track">
        <span class="stat-fill stat-fill-${dimension}" style="width:${value}%"></span>
      </span>
      <span class="stat-value stat-${dimension}">${value}%</span>
    `;
    return row;
  }));
}

function renderResult(result, stats, updateUrl = false) {
  applyResultTheme(result);
  setText('title', result.name);
  setText('desc', stripEndingPunctuation(result.desc));
  setText('skill', stripEndingPunctuation(result.skill));

  const image = query('#result .result-hero img');
  if (image) {
    image.src = resultImages[result.key] || IMG;
    image.alt = result.name;
  }

  renderTags(result.hashtags);
  renderStats(stats);

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('result', result.key);
    url.searchParams.delete('debug');
    window.history.replaceState({}, '', url);
  }

  show('result');
  trackEvent('quiz_complete', {
    personality_key: result.key,
    personality_name: result.name
  });
}

function getShareUrl() {
  const url = new URL(window.SITE_CONFIG?.siteUrl || window.location.href);
  if (current) url.searchParams.set('result', current.key);
  return url.toString();
}

async function shareResult() {
  if (!current) return;

  const url = getShareUrl();
  const text = `我抽到的大一命定人格是「${current.name}」！\n\n${current.hashtags.join(' ')}\n\n你也來測測看：`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: 'TUN 大學網｜大一命定人格',
        text,
        url
      });
    } else {
      await copyText(`${text}\n${url}`);
      toast('分享文字與網址已複製 📲');
    }

    trackEvent('result_share', {
      personality_key: current.key,
      share_method: navigator.share ? 'web_share' : 'clipboard'
    });
  } catch (error) {
    if (error?.name !== 'AbortError') {
      await copyText(`${text}\n${url}`).catch(() => {});
      toast('已複製分享內容，可以貼到社群發布');
    }
  }
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}

function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

let generatedResultObjectURL = '';
let generatedResultFilename = '';
let generatedResultBlob = null;

function showGeneratedResultImage(blob, filename) {
  const page = byId('result-image-page');
  const image = byId('generated-result-image');
  if (!page || !image) throw new Error('找不到結果圖片預覽區');

  if (generatedResultObjectURL) URL.revokeObjectURL(generatedResultObjectURL);
  generatedResultBlob = blob;
  generatedResultObjectURL = URL.createObjectURL(blob);
  generatedResultFilename = filename;
  image.src = generatedResultObjectURL;
  page.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  page.scrollTop = 0;
}

function closeGeneratedResultImage() {
  byId('result-image-page')?.classList.add('hidden');
  document.body.style.overflow = '';
}

async function saveGeneratedResultImage() {
  if (!generatedResultBlob || !generatedResultObjectURL) {
    toast('請先產生分析卡片');
    return;
  }

  const filename = generatedResultFilename || 'TUN-大一命定人格.png';
  const file = new File([generatedResultBlob], filename, { type: 'image/png' });

  // 手機優先開啟系統分享面板，iPhone 可從面板選擇「儲存影像」。
  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: filename });
      return;
    } catch (error) {
      if (error?.name === 'AbortError') return;
    }
  }

  // 桌機與支援 download 的瀏覽器直接下載。
  const link = document.createElement('a');
  link.href = generatedResultObjectURL;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  link.remove();

  toast('若手機未自動下載，請直接長按上方圖片儲存');
}

function measureCanvasLines(context, text, maxWidth) {
  const characters = Array.from(text || '');
  const lines = [];
  let line = '';
  for (const character of characters) {
    const test = line + character;
    if (line && context.measureText(test).width > maxWidth) {
      lines.push(line);
      line = character;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function buildResultCanvas() {
  if (!current || !currentStats) throw new Error('找不到人格結果');

  await document.fonts?.ready;

  const theme = getResultTheme(current.key);
  const accent = theme[1];
  const pageBg = theme[2];
  const border = theme[3];
  const chineseFont = '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif';

  // 本函式只負責「下載人格結果卡」，不會改動畫面上的分析結果頁。
  const canvasWidth = 1080;
  const panelX = 82;
  const panelWidth = 916;
  const contentX = 112;
  const contentWidth = 856;
  const panelGap = 14;
  const panelRadius = 24;
  const panelPaddingX = 30;

  const measureCanvas = document.createElement('canvas');
  const measureCtx = measureCanvas.getContext('2d');
  if (!measureCtx) throw new Error('此瀏覽器不支援圖片產生功能');

  const descText = stripEndingPunctuation(current.desc);
  const skillText = stripEndingPunctuation(current.skill);
  const textWidth = contentWidth - panelPaddingX * 2;
  const measureLines = (text) => {
    measureCtx.font = `400 28px ${chineseFont}`;
    return measureCanvasLines(measureCtx, text, textWidth);
  };

  const descLines = measureLines(descText);
  const skillLines = measureLines(skillText);
  // 文字卡不設固定高度：標題、內文與上下 Padding 均採固定節奏，卡片高度只由實際行數決定。
  const textTitleHeight = 50;
  const textLineHeight = 38;
  const textBottomPadding = 18;
  const getTextPanelHeight = (lines) => textTitleHeight + Math.max(1, lines.length) * textLineHeight + textBottomPadding;
  const descHeight = getTextPanelHeight(descLines);
  const skillHeight = getTextPanelHeight(skillLines);

  // 代表標籤固定 2 × 2，避免不同字數造成排列鬆散。
  const tagColumns = 2;
  const tagGapX = 14;
  const tagGapY = 12;
  const tagWidth = (contentWidth - tagGapX) / tagColumns;
  const tagHeight = 50;
  const tagsHeight = 184;
  const statsHeight = 242;
  const panelsStartY = 596;
  const contentBottom = panelsStartY
    + tagsHeight + panelGap
    + descHeight + panelGap
    + skillHeight + panelGap
    + statsHeight;
  const canvasHeight = Math.ceil(contentBottom + 38);

  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('此瀏覽器不支援圖片產生功能');

  ctx.fillStyle = pageBg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const outerY = 18;
  const outerHeight = canvasHeight - 36;
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = border;
  ctx.lineWidth = 5;
  roundRect(ctx, 48, outerY, 984, outerHeight, 38);
  ctx.fill();
  ctx.stroke();

  ctx.setLineDash([12, 10]);
  ctx.lineWidth = 2;
  roundRect(ctx, 68, outerY + 20, 944, outerHeight - 40, 29);
  ctx.stroke();
  ctx.setLineDash([]);

  // 品牌 Logo。
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  const logoX = 92;
  const logoY = 96;
  ctx.font = `italic 900 34px ${chineseFont}`;
  ctx.fillStyle = '#11a7bf';
  ctx.fillText('TUN', logoX, logoY);
  const tunWidth = ctx.measureText('TUN').width;
  ctx.fillStyle = '#173b67';
  ctx.fillText('大學網', logoX + tunWidth + 7, logoY);

  const pillX = 790;
  const pillY = 57;
  const pillW = 184;
  const pillH = 52;
  ctx.fillStyle = pageBg;
  ctx.strokeStyle = border;
  ctx.lineWidth = 2;
  roundRect(ctx, pillX, pillY, pillW, pillH, 26);
  ctx.fill();
  ctx.stroke();
  ctx.textAlign = 'center';
  ctx.font = `900 20px ${chineseFont}`;
  ctx.fillStyle = accent;
  ctx.fillText(`${theme[0]} 大一命定人格`, pillX + pillW / 2, pillY + 34);

  // 放大人格標題，並縮短標題與角色插圖的距離。
  ctx.textAlign = 'center';
  ctx.font = `900 78px ${chineseFont}`;
  ctx.fillStyle = accent;
  ctx.fillText(current.name, 540, 192);

  try {
    const image = await loadImage(resultImages[current.key] || IMG);
    const box = { x: 88, y: 186, width: 904, height: 398 };
    const ratio = Math.min(box.width / image.width, box.height / image.height);
    const width = image.width * ratio;
    const height = image.height * ratio;
    ctx.drawImage(
      image,
      box.x + (box.width - width) / 2,
      box.y + (box.height - height) / 2,
      width,
      height
    );
  } catch (error) {
    trackEvent('result_image_load_error', { message: String(error?.message || 'unknown') });
  }

  let y = panelsStartY;

  const drawCardBase = (height) => {
    ctx.fillStyle = 'rgba(255,255,255,.98)';
    ctx.strokeStyle = border;
    ctx.lineWidth = 2.5;
    roundRect(ctx, panelX, y, panelWidth, height, panelRadius);
    ctx.fill();
    ctx.stroke();
  };

  const drawSectionTitle = (title) => {
    ctx.textAlign = 'left';
    ctx.fillStyle = accent;
    ctx.font = `900 32px ${chineseFont}`;
    ctx.fillText(title, contentX, y + 40);
  };

  const drawTextPanel = (title, lines, height) => {
    drawCardBase(height);
    drawSectionTitle(title);
    ctx.fillStyle = '#183b64';
    ctx.font = `400 28px ${chineseFont}`;
    lines.forEach((line, index) => {
      ctx.fillText(line, contentX, y + 78 + index * textLineHeight);
    });
    y += height + panelGap;
  };

  // 代表標籤：固定 2 × 2、統一高度、圓角、框線與留白。
  drawCardBase(tagsHeight);
  drawSectionTitle('代表標籤');
  const tagStartY = y + 61;
  current.hashtags.slice(0, 4).forEach((tag, index) => {
    const column = index % tagColumns;
    const row = Math.floor(index / tagColumns);
    const tagX = contentX + column * (tagWidth + tagGapX);
    const tagY = tagStartY + row * (tagHeight + tagGapY);

    ctx.fillStyle = pageBg;
    ctx.strokeStyle = border;
    ctx.lineWidth = 2;
    roundRect(ctx, tagX, tagY, tagWidth, tagHeight, 15);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = accent;
    ctx.textAlign = 'center';
    ctx.font = `800 23px ${chineseFont}`;
    ctx.fillText(tag, tagX + tagWidth / 2, tagY + 33);
  });
  y += tagsHeight + panelGap;

  // 文字卡依各自內容行數自動調整高度，並維持一致字級、行高與 Padding。
  drawTextPanel('人格說明', descLines, descHeight);
  drawTextPanel('開學小提醒', skillLines, skillHeight);

  // 能力值：固定三欄對齊，並統一使用該人格主題色。
  drawCardBase(statsHeight);
  drawSectionTitle('能力值分析');

  const labelX = contentX;
  const barX = contentX + 170;
  const barWidth = 565;
  const percentX = contentX + 835;
  dims.forEach((dimension, index) => {
    const lineY = y + 76 + index * 31;
    const value = currentStats[dimension] ?? 50;

    ctx.textBaseline = 'middle';
    ctx.fillStyle = accent;
    ctx.font = `800 23px ${chineseFont}`;
    ctx.textAlign = 'left';
    ctx.fillText(labels[dimension], labelX, lineY);

    ctx.fillStyle = border;
    roundRect(ctx, barX, lineY - 10, barWidth, 20, 10);
    ctx.fill();

    ctx.fillStyle = accent;
    roundRect(ctx, barX, lineY - 10, barWidth * value / 100, 20, 10);
    ctx.fill();

    ctx.textAlign = 'right';
    ctx.fillText(`${value}%`, percentX, lineY);
  });
  ctx.textBaseline = 'alphabetic';

  return canvas;
}

function roundRect(context, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.arcTo(x + width, y, x + width, y + height, safeRadius);
  context.arcTo(x + width, y + height, x, y + height, safeRadius);
  context.arcTo(x, y + height, x, y, safeRadius);
  context.arcTo(x, y, x + width, y, safeRadius);
  context.closePath();
}

async function downloadResultCard() {
  const button = byId('download-result');
  if (!current || !currentStats) {
    toast('找不到人格結果，請重新測驗');
    return;
  }

  const originalText = button?.textContent || '下載人格結果卡';
  if (button) {
    button.disabled = true;
    button.textContent = '圖片生成中…';
  }

  try {
    await document.fonts?.ready;
    const canvas = await buildResultCanvas();
    const blob = await new Promise((resolve, reject) => {
      canvas.toBlob(value => value ? resolve(value) : reject(new Error('圖片轉換失敗')), 'image/png', 1);
    });

    const filename = `TUN-大一命定人格-${current.name}.png`;
    showGeneratedResultImage(blob, filename);

    // 桌機瀏覽器直接下載；手機保留站內預覽，方便長按儲存或使用系統分享。
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    if (!isMobile) {
      const link = document.createElement('a');
      link.href = generatedResultObjectURL;
      link.download = filename;
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast('人格結果卡已下載');
    } else {
      toast('結果卡已產生，可長按圖片儲存');
    }

    trackEvent('result_download', {
      personality_key: current.key,
      personality_name: current.name,
      layout: 'v6.2.3_auto_height_text_cards'
    });
  } catch (error) {
    trackEvent('result_download_error', { message: String(error?.message || 'unknown') });
    toast(`結果卡產生失敗：${error?.message || '請重新整理後再試'}`);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = originalText;
    }
  }
}

function resetQuiz() {
  if (calculationTimer) {
    window.clearTimeout(calculationTimer);
    calculationTimer = null;
  }

  stopLoadingMascots();
  selected = [];
  current = null;
  currentStats = null;

  const url = new URL(window.location.href);
  url.searchParams.delete('result');
  window.history.replaceState({}, '', url);

  render();
  update();
  show('selection');
  trackEvent('quiz_restart');
}

function showResultFromUrl(key) {
  const result = results.find(item => item.key === key);
  if (!result) return false;

  current = result;
  currentStats = Object.fromEntries(
    dims.map((dimension, index) => [dimension, 58 + ((index * 9 + key.length * 3) % 34)])
  );

  renderResult(current, currentStats, false);
  trackEvent('shared_result_view', {
    personality_key: result.key,
    personality_name: result.name
  });

  return true;
}

function setupDebugMode() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('debug') !== 'true') return;

  const panel = byId('debugPanel');
  if (!panel) return;

  panel.classList.remove('hidden');
  panel.innerHTML = `
    <strong>人格測試模式</strong>
    <select id="debugSelect" aria-label="選擇人格">
      ${results.map(result => `<option value="${result.key}">${result.name}</option>`).join('')}
    </select>
    <button type="button" id="debugShow">顯示人格</button>
    <button type="button" id="debugClose">關閉</button>
  `;

  byId('debugShow')?.addEventListener('click', () => {
    const key = byId('debugSelect')?.value;
    if (key) showResultFromUrl(key);
  });

  byId('debugClose')?.addEventListener('click', () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('debug');
    window.location.href = url.toString();
  });
}

function toast(message) {
  const element = byId('toast');
  if (!element) return;

  element.textContent = message;
  element.classList.add('show');

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    element.classList.remove('show');
  }, 2300);
}

function bindEvents() {
  byId('start-quiz')?.addEventListener('click', startQuiz);
  byId('submit')?.addEventListener('click', submitSelection);
  byId('share-result')?.addEventListener('click', shareResult);
  byId('download-result')?.addEventListener('click', downloadResultCard);
  byId('retry-result')?.addEventListener('click', resetQuiz);
  byId('close-result-image')?.addEventListener('click', closeGeneratedResultImage);
  byId('save-result-image')?.addEventListener('click', saveGeneratedResultImage);
  byId('retry-from-image')?.addEventListener('click', () => {
    closeGeneratedResultImage();
    resetQuiz();
  });
}

function initializeApp() {
  bindEvents();
  render();
  update();
  setupDebugMode();

  const params = new URLSearchParams(window.location.search);
  const resultKey = params.get('result');

  if (!resultKey || !showResultFromUrl(resultKey)) {
    show('welcome');
  }

  window.addEventListener('error', event => {
    trackEvent('client_error', {
      message: String(event.message || 'unknown'),
      source: String(event.filename || '')
    });
  });
}

document.addEventListener('DOMContentLoaded', initializeApp, { once: true });
