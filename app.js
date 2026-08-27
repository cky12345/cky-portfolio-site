const projects = [
  { id:'anne', category:'editorial', kicker:'FASHION EDITORIAL / 01', title:'《穿普拉达的女王2》', subtitle:'Anne / 封面合成', image:'assets/hero/《穿普拉达的女王2》Anne封面合成.png', video:'./assets/videos/《穿普拉达的女王2》Anne封面合成.mp4', frames:['assets/hero/《穿普拉达的女王2》Anne封面合成.png','assets/hero/《穿普拉达的女王2》Meryl封面合成.png','assets/thumbs/frame_05.png'], desc:'人物、服装、封面版式和镜头节奏的合成实验。用一秒钟建立时尚语气，让人物进入可以被传播的编辑语境。', tags:['Cover compositing','Motion packaging','Editorial eye'], role:'视觉合成 / 动态包装', format:'竖版 4K · 18.8s', year:'2025' },
  { id:'meryl', category:'editorial', kicker:'FASHION EDITORIAL / 02', title:'《穿普拉达的女王2》', subtitle:'Meryl / 封面合成', image:'assets/hero/《穿普拉达的女王2》Meryl封面合成.png', video:'./assets/videos/《穿普拉达的女王2》Meryl封面合成.mp4', frames:['assets/hero/《穿普拉达的女王2》Meryl封面合成.png','assets/thumbs/frame_06.png','assets/thumbs/frame_07.png'], desc:'围绕人物姿态、版式重心和色彩关系完成封面合成与动效包装，保持杂志感，同时照顾社交平台的观看速度。', tags:['Fashion','Compositing','Typography'], role:'视觉合成 / 动效执行', format:'竖版 4K · 15.6s', year:'2025' },
  { id:'swisse', category:'brand', kicker:'BRAND MOTION / 03', title:'Vogue × Swisse', subtitle:'Plus / MG 动画演绎', image:'assets/hero/VogueXSwisseMG动画演绎.png', video:'./assets/videos/VogueXSwisseMG动画演绎.mp4', frames:['assets/hero/VogueXSwisseMG动画演绎.png','assets/thumbs/frame_20.png','assets/thumbs/frame_21.png'], desc:'以深色背景、金色边缘光和瓶身轮廓建立克制的品牌氛围，让产品信息自然进入观看路径。', tags:['Product motion','Brand tone','Visual QA'], role:'MG 动画 / 产品视觉', format:'竖版 1080p · 22.4s', year:'2024' },
  { id:'1664-live', category:'brand', kicker:'WORLD BUILDING / 04', title:'GQ × 1664', subtitle:'实景合成动画', image:'assets/hero/智族GQX1664实景合成动画.png', video:'./assets/videos/智族GQX1664实景合成动画.mp4', frames:['assets/hero/智族GQX1664实景合成动画.png','assets/thumbs/frame_10.png','assets/thumbs/frame_11.png'], desc:'把产品置入真实空间，通过尺度关系、光线方向和场景氛围，让品牌权益成为地点感的一部分。', tags:['Live compositing','Scale','Light direction'], role:'实景合成 / 后期执行', format:'竖版 1500×2000 · 21.6s', year:'2023' },
  { id:'1664-mg', category:'brand', kicker:'WORLD BUILDING / 05', title:'GQ × 1664', subtitle:'MG 动画', image:'assets/hero/智族GQX1664MG动画.png', video:'./assets/videos/智族GQX1664MG动画.mp4', frames:['assets/hero/智族GQX1664MG动画.png','assets/thumbs/frame_12.png','assets/thumbs/frame_13.png'], desc:'用图形、色彩和节奏压缩信息，把商业权益转译成更接近编辑内容的动态图形语言。', tags:['MG design','Brand system','Timing'], role:'MG 动画 / 视觉设计', format:'竖版 1440×1920 · 25.3s', year:'2023' },
  { id:'ski', kind:'series', category:'system', kicker:'CONTENT SYSTEM / 06', title:'GQ Sports', subtitle:'沉浸式滑雪问答系列', image:'assets/hero/智族GQSportsMG动画单板双板.png', desc:'围绕滑雪场景、穿搭与生活方式建立一套可延展的竖版内容系统。每个片段拥有独立的关键帧与播放入口，同时共享同一套视觉规则。', tags:['Series design','Vertical video','Lifestyle'], role:'系列视觉 / MG 动画', format:'8 个竖版片段', year:'2023', clips:[
    { id:'ski-single-double', title:'单板 / 双板', video:'./assets/videos/智族GQSportsMG动画单板双板.mp4', image:'assets/hero/智族GQSportsMG动画单板双板.png', frames:['assets/hero/智族GQSportsMG动画单板双板.png','assets/thumbs/frame_14.png','assets/thumbs/frame_18.png'], format:'1680×2240 · 32.4s' },
    { id:'ski-advanced', title:'高级雪道', video:'./assets/videos/智族GQSportsMG动画高级雪道.mp4', image:'assets/thumbs/frame_15.png', frames:['assets/thumbs/frame_15.png','assets/thumbs/frame_16.png','assets/thumbs/frame_17.png'], format:'1680×2240 · 46.2s' },
    { id:'ski-buddy', title:'滑雪搭子', video:'./assets/videos/智族GQSportsMG动画滑雪搭子.mp4', image:'assets/thumbs/frame_19.png', frames:['assets/thumbs/frame_19.png','assets/thumbs/frame_20.png','assets/thumbs/frame_21.png'], format:'1680×2240 · 33.9s' },
    { id:'ski-end', title:'滑雪尽头', video:'./assets/videos/智族GQSportsMG动画滑雪尽头.mp4', image:'assets/thumbs/frame_22.png', frames:['assets/thumbs/frame_22.png','assets/thumbs/frame_23.png','assets/thumbs/frame_24.png'], format:'1680×2240 · 28.6s' },
    { id:'ski-hotel', title:'滑雪酒店', video:'./assets/videos/智族GQSportsMG动画滑雪酒店.mp4', image:'assets/thumbs/frame_25.png', frames:['assets/thumbs/frame_25.png','assets/thumbs/frame_26.png','assets/thumbs/frame_27.png'], format:'1680×2240 · 27.4s' },
    { id:'ski-suitable', title:'适合雪场', video:'./assets/videos/智族GQSportsMG动画适合雪场.mp4', image:'assets/thumbs/frame_28.png', frames:['assets/thumbs/frame_28.png','assets/thumbs/frame_29.png','assets/thumbs/frame_24.png'], format:'1680×2240 · 42.6s' },
    { id:'ski-outfit', title:'雪场穿搭', video:'./assets/videos/智族GQSportsMG动画雪场穿搭.mp4', image:'assets/thumbs/frame_10.png', frames:['assets/thumbs/frame_10.png','assets/thumbs/frame_11.png','assets/thumbs/frame_12.png'], format:'1680×2240 · 47.2s' },
    { id:'ski-cable', title:'雪场缆车', video:'./assets/videos/智族GQSportsMG动画雪场缆车.mp4', image:'assets/thumbs/frame_13.png', frames:['assets/thumbs/frame_13.png','assets/thumbs/frame_14.png','assets/thumbs/frame_15.png'], format:'1680×2240 · 49.2s' }
  ] },
  { id:'douyin', kind:'series', category:'system', kicker:'PLATFORM / 07', title:'抖音跨年生活', subtitle:'花字包装 / 多地区版本', image:'assets/hero/抖音跨年生活花字包装广东篇.png', desc:'同一传播主题下适配广东、川渝、东北等地区语境，处理字体动线、信息密度和平台观看速度。', tags:['Dynamic typography','Localization','Campaign'], role:'花字设计 / 动态包装', format:'3 个地区版本', year:'2022', clips:[
    { id:'douyin-guangdong', title:'广东篇', video:'./assets/videos/抖音跨年生活花字包装广东篇.mp4', image:'assets/hero/抖音跨年生活花字包装广东篇.png', frames:['assets/hero/抖音跨年生活花字包装广东篇.png','assets/thumbs/frame_22.png','assets/thumbs/frame_23.png'], format:'横版 4K · 44.0s' },
    { id:'douyin-chuan-yu', title:'川渝篇', video:'./assets/videos/抖音跨年生活花字包装川渝篇.mp4', image:'assets/thumbs/frame_22.png', frames:['assets/thumbs/frame_22.png','assets/thumbs/frame_23.png','assets/thumbs/frame_24.png'], format:'横版 4K' },
    { id:'douyin-dongbei', title:'东北篇', video:'./assets/videos/抖音跨年生活花字包装东北篇.mp4', image:'assets/thumbs/frame_23.png', frames:['assets/thumbs/frame_23.png','assets/thumbs/frame_24.png','assets/thumbs/frame_25.png'], format:'横版 4K' }
  ] },
  { id:'volvo', category:'system', kicker:'PLATFORM / 08', title:'Volvo × GolfBox', subtitle:'MG 动画演绎', image:'assets/hero/沃尔沃XGolfBoxMG动画演绎.png', video:'./assets/videos/沃尔沃XGolfBoxMG动画演绎.mp4', frames:['assets/hero/沃尔沃XGolfBoxMG动画演绎.png','assets/thumbs/frame_24.png','assets/thumbs/frame_25.png'], desc:'在汽车、运动和生活方式之间寻找视觉连接，用清晰的节奏完成从产品信息到生活场景的过渡。', tags:['Motion graphics','Brand story','Pacing'], role:'MG 动画 / 后期合成', format:'混合比例 · 24.5s', year:'2023' },
  { id:'gq-vw', kind:'series', category:'system', kicker:'DYNAMIC POSTER / 09', title:'GQ × 大众动态海报', subtitle:'城市站点系列', image:'assets/hero/GQX大众动态海报成都站.png', desc:'围绕不同城市站点建立统一的动态海报系统，在同一视觉骨架下调整信息、节奏与城市内容。', tags:['Dynamic poster','Series system','Localization'], role:'动态海报 / 系列视觉', format:'4 个城市版本', year:'2023', clips:[
    { id:'gq-vw-shanghai', title:'上海站', video:'./assets/videos/GQX大众动态海报上海站.mp4', image:'assets/hero/GQX大众动态海报成都站.png', frames:['assets/hero/GQX大众动态海报成都站.png','assets/thumbs/frame_08.png','assets/thumbs/frame_09.png'] },
    { id:'gq-vw-shenzhen', title:'深圳站', video:'./assets/videos/GQX大众动态海报深圳站.mp4', image:'assets/thumbs/frame_08.png', frames:['assets/thumbs/frame_08.png','assets/thumbs/frame_09.png','assets/thumbs/frame_10.png'] },
    { id:'gq-vw-shenzhen-2', title:'深圳二站', video:'./assets/videos/GQX大众动态海报深圳二站.mp4', image:'assets/thumbs/frame_09.png', frames:['assets/thumbs/frame_09.png','assets/thumbs/frame_10.png','assets/thumbs/frame_11.png'] },
    { id:'gq-vw-chengdu', title:'成都站', video:'./assets/videos/GQX大众动态海报成都站.mp4', image:'assets/hero/GQX大众动态海报成都站.png', frames:['assets/hero/GQX大众动态海报成都站.png','assets/thumbs/frame_10.png','assets/thumbs/frame_11.png'] }
  ] },
  { id:'calerie', category:'composite', kicker:'AI + 3D / 10', title:'科兰黎 VB 修复精华', subtitle:'AI 三维合成', image:'assets/hero/科兰黎VB修复精华ai三维合成.png', video:'./assets/videos/科兰黎VB修复精华ai三维合成.mp4', frames:['assets/hero/科兰黎VB修复精华ai三维合成.png','assets/thumbs/frame_26.png','assets/thumbs/frame_27.png'], desc:'把产品放进一个可信但不平庸的场景，关注边缘、材质、光线方向和品牌信息的可读性。', tags:['AI compositing','3D product','Material'], role:'AI 视觉 / 三维合成', format:'竖版 1080×1920 · 16.8s', year:'2024' },
  { id:'onepiece', category:'composite', kicker:'AI + 3D / 11', title:'溪木源 × One Piece', subtitle:'AI 三维合成', image:'assets/thumbs/frame_28.png', video:'./assets/videos/溪木源XOnePiece ai三维合成.mp4', frames:['assets/thumbs/frame_28.png','assets/thumbs/frame_29.png','assets/thumbs/frame_27.png'], desc:'以联名 IP 与产品为核心完成 AI 场景、材质和动态关系的合成表达。', tags:['AI compositing','IP campaign','Product'], role:'AI 视觉 / 三维合成', format:'竖版', year:'2024' },
  { id:'xiaoyuan', kind:'series', category:'composite', kicker:'CHARACTER COMPOSITE / 12', title:'小猿 IP 形象', subtitle:'角色合成镜头', image:'assets/thumbs/frame_26.png', desc:'围绕 IP 形象完成两组场景合成镜头，统一角色尺度、光线和空间关系。', tags:['Character composite','IP visual','Compositing'], role:'IP 形象 / 场景合成', format:'2 个合成镜头', year:'2024', clips:[
    { id:'xiaoyuan-1', title:'合成镜头 1', video:'./assets/videos/小猿IP形象合成镜头1.mp4', image:'assets/thumbs/frame_26.png', frames:['assets/thumbs/frame_26.png','assets/thumbs/frame_27.png','assets/thumbs/frame_28.png'] },
    { id:'xiaoyuan-2', title:'合成镜头 2', video:'./assets/videos/小猿IP形象合成镜头2.mp4', image:'assets/thumbs/frame_27.png', frames:['assets/thumbs/frame_27.png','assets/thumbs/frame_28.png','assets/thumbs/frame_29.png'] }
  ] },
  { id:'micro', kind:'series', category:'composite', kicker:'AI + 3D / 13', title:'Microingredients', subtitle:'多站点三维动画', image:'assets/hero/Microingredients三维动画埃及站.png', desc:'同一产品叙事适配埃及、巴西、云南等不同站点，建立统一的三维视觉资产与输出规则。', tags:['3D animation','Localization','Asset system'], role:'三维动画 / 多版本输出', format:'3 个站点版本', year:'2024', clips:[
    { id:'micro', title:'埃及站 / 三维动画', video:'./assets/videos/Microingredients三维动画埃及站.mp4', image:'assets/hero/Microingredients三维动画埃及站.png', frames:['assets/hero/Microingredients三维动画埃及站.png','assets/thumbs/frame_28.png','assets/thumbs/frame_29.png'] },
    { id:'micro-brazil', title:'巴西站 / 三维动画', video:'./assets/videos/Microingredients三维动画巴西站.mp4', image:'assets/thumbs/frame_28.png', frames:['assets/thumbs/frame_28.png','assets/thumbs/frame_29.png','assets/thumbs/frame_27.png'] },
    { id:'micro-yunnan', title:'云南站 / 三维动画', video:'./assets/videos/Microingredients三维动画云南站.mp4', image:'assets/thumbs/frame_29.png', frames:['assets/thumbs/frame_29.png','assets/thumbs/frame_28.png','assets/thumbs/frame_27.png'] }
  ] },
  { id:'uniqlo', category:'editorial', kicker:'EDITORIAL MOTION / 11', title:'优衣库 × 上海博物馆', subtitle:'动态海报', image:'assets/hero/优衣库X上海博物馆动态海报.png', video:'./assets/videos/优衣库X上海博物馆动态海报.mp4', frames:['assets/hero/优衣库X上海博物馆动态海报.png','assets/thumbs/frame_02.png','assets/thumbs/frame_03.png'], desc:'在文化语境、服装信息和动态海报的观看动线之间建立秩序，让静态版式获得时间维度。', tags:['Dynamic poster','Cultural content','Layout'], role:'动态海报 / 视觉包装', format:'竖版 2480×3508 · 21.2s', year:'2023' },
  { id:'end', category:'editorial', kicker:'PERSONAL FILM / 12', title:'《末端派送》', subtitle:'毕业设计', image:'assets/thumbs/frame_00.png', video:'', frames:['assets/thumbs/frame_00.png','assets/thumbs/frame_01.png','assets/thumbs/frame_04.png'], desc:'个人影像项目。以横向电影画幅探索人物、空间与移动的关系，作为商业视觉之外的叙事练习。', tags:['Personal film','Direction','Editing'], role:'导演 / 剪辑 / 视觉设计', format:'横版 2560×1080 · 6′40″', year:'2023' }
];

const FRAME_STORAGE_KEY = 'cky-portfolio-frame-selections-v1';
const FRAME_BASELINE_VERSION_KEY = 'cky-portfolio-frame-baseline-version-v1';
const CONTENT_STORAGE_KEY = 'cky-portfolio-content-config-v1';
const GROUP_STORAGE_KEY = 'cky-portfolio-group-config-v1';
const CUSTOM_PROJECTS_STORAGE_KEY = 'cky-portfolio-custom-projects-v1';
const HIDDEN_PROJECTS_STORAGE_KEY = 'cky-portfolio-hidden-projects-v1';
const RESUME_STORAGE_KEY = 'cky-portfolio-resume-config-v1';
const DEFAULT_RESUME = { name:'陈坤勇_VOGUE定向简历.pdf', href:'./resume/陈坤勇_VOGUE定向简历.pdf' };
const normalizeResumeHref = value => {
  const href = String(value || '').trim();
  if (!href) return DEFAULT_RESUME.href;
  if (/^(?:https?:|blob:|data:|\/)/i.test(href)) return href;
  const clean = href.replace(/^\.\//, '');
  return /^resume\//i.test(clean) ? './' + clean : './resume/' + clean;
};
const EMBEDDED_CONFIG = window.__CKY_PORTFOLIO_CONFIG__ || {};
const CATEGORY_LABELS = { editorial:'时尚 / 编辑', brand:'品牌 / 3D', system:'内容系统', composite:'AI / 合成' };
const GROUP_PALETTE = ['#d1473f','#b8792b','#707d3d','#348071','#3f6fa2','#765b9c','#a64c78','#4c777c','#8b6544','#58616f'];
const DEFAULT_GROUP_BY_ID = {
  anne:'时尚 / 编辑', meryl:'时尚 / 编辑', uniqlo:'时尚 / 编辑', end:'时尚 / 编辑',
  swisse:'品牌 / 3D', '1664-live':'品牌 / 3D', '1664-mg':'品牌 / 3D', volvo:'品牌 / 3D',
  calerie:'AI / 合成', onepiece:'AI / 合成', 'xiaoyuan-1':'AI / 合成', 'xiaoyuan-2':'AI / 合成', micro:'AI / 合成', 'micro-brazil':'AI / 合成', 'micro-yunnan':'AI / 合成',
  'ski-single-double':'内容系统 / GQ Sports', 'ski-advanced':'内容系统 / GQ Sports', 'ski-buddy':'内容系统 / GQ Sports', 'ski-end':'内容系统 / GQ Sports', 'ski-hotel':'内容系统 / GQ Sports', 'ski-suitable':'内容系统 / GQ Sports', 'ski-outfit':'内容系统 / GQ Sports', 'ski-cable':'内容系统 / GQ Sports',
  'douyin-guangdong':'内容系统 / 抖音跨年', 'douyin-chuan-yu':'内容系统 / 抖音跨年', 'douyin-dongbei':'内容系统 / 抖音跨年',
  'gq-vw-shanghai':'内容系统 / GQ × 大众', 'gq-vw-shenzhen':'内容系统 / GQ × 大众', 'gq-vw-shenzhen-2':'内容系统 / GQ × 大众', 'gq-vw-chengdu':'内容系统 / GQ × 大众'
};
const grid = document.querySelector('#project-grid');
const filtersEl = document.querySelector('.filters');
const groupSubnav = document.querySelector('#group-subnav');
const modal = document.querySelector('#project-modal');
const video = document.querySelector('#modal-video');
const externalVideoFrame = document.querySelector('#modal-external-video');
const placeholder = document.querySelector('#video-placeholder');
const videoWrap = document.querySelector('#video-wrap');
const modalCover = document.querySelector('#modal-cover');
const coverPlay = document.querySelector('#cover-play');
const seriesSwitcher = document.querySelector('#series-switcher');
const syncChannel = 'BroadcastChannel' in window ? new BroadcastChannel('cky-portfolio-sync') : null;
const escapeHtml = (str) => String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const resolveLocalVideo = (value) => {
  if (!value) return '';
  if (/^(?:https?:|blob:|data:|\/|\.\/assets\/videos\/|assets\/videos\/)/i.test(value)) return value;
  return './assets/videos/' + value;
};
let activeProject = null;
let activeClip = null;
let renderedProjects = [];
let activeExternalVideo = null;
let pendingVideoSrc = '';

function readFrameSelections() {
  const baseline = {...(window.__PORTFOLIO_FRAME_SELECTIONS__ || {}), ...(EMBEDDED_CONFIG.frames || {})};
  const baselineVersion = window.__PORTFOLIO_FRAME_SELECTIONS_VERSION__ || '';
  try {
    const stored = JSON.parse(localStorage.getItem(FRAME_STORAGE_KEY) || '{}');
    if (baselineVersion && localStorage.getItem(FRAME_BASELINE_VERSION_KEY) !== baselineVersion) {
      const imported = {...stored, ...baseline};
      localStorage.setItem(FRAME_STORAGE_KEY, JSON.stringify(imported));
      localStorage.setItem(FRAME_BASELINE_VERSION_KEY, baselineVersion);
      return imported;
    }
    return Object.keys(stored).length ? stored : baseline;
  } catch { return baseline; }
}
function readContentConfig() {
  try {
    const raw = localStorage.getItem(CONTENT_STORAGE_KEY);
    return raw !== null ? (JSON.parse(raw) || {}) : (EMBEDDED_CONFIG.content || {});
  } catch { return EMBEDDED_CONFIG.content || {}; }
}
function readGroupConfig() {
  try {
    const raw = localStorage.getItem(GROUP_STORAGE_KEY);
    return raw !== null ? (JSON.parse(raw) || {order:[], colors:{}}) : (EMBEDDED_CONFIG.groups || {order:[], colors:{}});
  } catch { return EMBEDDED_CONFIG.groups || {order:[], colors:{}}; }
}
function readCustomProjects() {
  try {
    const raw = localStorage.getItem(CUSTOM_PROJECTS_STORAGE_KEY);
    const value = raw !== null ? JSON.parse(raw) : (EMBEDDED_CONFIG.customProjects || []);
    return Array.isArray(value) ? value : [];
  } catch { return Array.isArray(EMBEDDED_CONFIG.customProjects) ? EMBEDDED_CONFIG.customProjects : []; }
}
function readHiddenProjectIds() {
  try {
    const raw = localStorage.getItem(HIDDEN_PROJECTS_STORAGE_KEY);
    const value = raw !== null ? JSON.parse(raw) : (EMBEDDED_CONFIG.hiddenIds || []);
    return new Set(Array.isArray(value) ? value : []);
  } catch { return new Set(Array.isArray(EMBEDDED_CONFIG.hiddenIds) ? EMBEDDED_CONFIG.hiddenIds : []); }
}
function readResumeConfig() {
  try {
    const raw = localStorage.getItem(RESUME_STORAGE_KEY);
    const value = raw !== null ? JSON.parse(raw) : EMBEDDED_CONFIG.resume;
    return value?.href ? {...value, href:normalizeResumeHref(value.href)} : DEFAULT_RESUME;
  } catch {
    return EMBEDDED_CONFIG.resume?.href ? {...EMBEDDED_CONFIG.resume, href:normalizeResumeHref(EMBEDDED_CONFIG.resume.href)} : DEFAULT_RESUME;
  }
}
function applyResumeConfig() {
  const resume = readResumeConfig();
  const view = document.querySelector('#resume-view');
  const download = document.querySelector('#resume-download');
  if (view) view.href = resume.href;
  if (download) {
    const downloadHref = window.__CKY_RESUME_DATA_URL__ && resume.href === DEFAULT_RESUME.href ? window.__CKY_RESUME_DATA_URL__ : resume.href;
    download.href = downloadHref;
    download.setAttribute('download', resume.name || DEFAULT_RESUME.name);
    download.onclick = null;
  }
}
function getAllProjects() {
  const hidden = readHiddenProjectIds();
  return [...projects, ...readCustomProjects()].flatMap(project => {
    if (hidden.has(project.id)) return [];
    if (project.kind !== 'series') return [project];
    const clips = (project.clips || []).filter(clip => !hidden.has(clip.id));
    if (!clips.length) return [];
    return [{...project, clips, image:clips[0]?.image || project.image}];
  });
}
function getContentMeta(item, fallbackProject) {
  const custom = readContentConfig()[item.id] || {};
  const description = Object.prototype.hasOwnProperty.call(custom, 'description') ? custom.description : (fallbackProject?.desc || '');
  const externalVideo = Object.prototype.hasOwnProperty.call(custom, 'externalVideo') ? custom.externalVideo : (item.externalVideo || '');
  return { group:custom.group || DEFAULT_GROUP_BY_ID[item.id] || item.group || CATEGORY_LABELS[fallbackProject?.category] || fallbackProject?.category || '', project:custom.project || fallbackProject?.title || '', title:custom.title || item.title || fallbackProject?.subtitle || '', description, externalVideo, order:Number(custom.order) || 9999 };
}
function getProjectMeta(project) {
  const primary = getPrimaryClip(project);
  const custom = readContentConfig()[primary.id] || readContentConfig()[project.id] || {};
  const desc = Object.prototype.hasOwnProperty.call(custom, 'description') ? custom.description : project.desc;
  return { group:getContentMeta(primary, project).group, title:custom.project || project.title, subtitle:custom.title || project.subtitle, desc, order:Number(custom.order) || 9999 };
}
function getProjectKicker(project) {
  const primary = getPrimaryClip(project);
  const content = readContentConfig();
  return content[primary.id]?.kicker || content[project.id]?.kicker || project.kicker || '';
}

function getDisplayProjects() {
  const entries = [];
  const singleBuckets = new Map();
  getAllProjects().forEach((project, index) => {
    if (project.kind === 'series') { entries.push({index, project}); return; }
    const projectTitle = getProjectMeta(project).title;
    if (!singleBuckets.has(projectTitle)) singleBuckets.set(projectTitle, {index, items:[]});
    singleBuckets.get(projectTitle).items.push(project);
  });
  singleBuckets.forEach(({index, items}, title) => {
    if (items.length === 1) { entries.push({index, project:items[0]}); return; }
    const first = items[0];
    entries.push({index, project:{
      ...first,
      id:`merged-${items.map(item => item.id).join('-')}`,
      kind:'series',
      title,
      subtitle:getProjectMeta(first).subtitle,
      image:first.image,
      format:`${items.length} 个片段`,
      clips:items.map(item => ({id:item.id, title:getProjectMeta(item).subtitle, video:item.video, externalVideo:getContentMeta(item,item).externalVideo, image:item.image, frames:item.frames, format:item.format}))
    }});
  });
  return entries.sort((a,b) => a.index - b.index).map(entry => entry.project);
}

function getOrderedGroups(displayProjects) {
  const present = [...new Set(displayProjects.map(project => getProjectMeta(project).group))];
  const configured = readGroupConfig().order || [];
  return [...configured.filter(group => present.includes(group)), ...present.filter(group => !configured.includes(group))];
}

function getGroupColor(group, orderedGroups) {
  const configured = readGroupConfig().colors?.[group];
  return configured || GROUP_PALETTE[Math.max(0, orderedGroups.indexOf(group)) % GROUP_PALETTE.length];
}

function getSelectedClipFrames(clip) {
  const stored = readFrameSelections()[clip.id]?.frames;
  if (Array.isArray(stored) && stored.length) return stored.map((item, i) => ({ src:item.dataUrl || item.src, time:item.time ?? null, label:item.label || `FRAME ${String(i + 1).padStart(2,'0')}` }));
  return [];
}

function getClipFrames(clip) {
  const selected = getSelectedClipFrames(clip);
  if (selected.length) return selected;
  return (clip.frames || [clip.image]).map((src, i) => ({ src, time:null, label:`FRAME ${String(i + 1).padStart(2,'0')}` }));
}

function getProjectPreviewFrames(project) {
  const projectMeta = getProjectMeta(project);
  if (project.kind !== 'series') {
    const clip = getPrimaryClip(project);
    return getClipFrames(clip).map(frame => ({...frame, clipId:clip.id, clipTitle:projectMeta.subtitle}));
  }
  const orderedClips = [...project.clips].sort((a, b) => getContentMeta(a, project).order - getContentMeta(b, project).order);
  const selectedFrames = orderedClips.flatMap(clip => {
    const clipMeta = getContentMeta(clip, project);
    return getSelectedClipFrames(clip).map(frame => ({...frame, clipId:clip.id, clipTitle:clipMeta.title}));
  });
  if (selectedFrames.length) return selectedFrames;
  return orderedClips.map(clip => {
    const clipMeta = getContentMeta(clip, project);
    const frame = getClipFrames(clip)[0];
    return {...frame, clipId:clip.id, clipTitle:clipMeta.title};
  });
}

function getPrimaryClip(project) {
  if (project.kind === 'series') {
    return [...project.clips].sort((a, b) => getContentMeta(a, project).order - getContentMeta(b, project).order)[0] || project.clips[0];
  }
  return { id:project.id, title:project.subtitle, video:project.video, externalVideo:getContentMeta(project,project).externalVideo, image:project.image, frames:project.frames, format:project.format };
}

function renderProjects(filter='all') {
  const displayProjects = getDisplayProjects();
  const orderedGroups = getOrderedGroups(displayProjects);
  const orderedProjects = [...displayProjects].sort((a,b) => {
    const groupDifference = orderedGroups.indexOf(getProjectMeta(a).group) - orderedGroups.indexOf(getProjectMeta(b).group);
    return groupDifference || getProjectMeta(a).order - getProjectMeta(b).order;
  });
  renderedProjects = orderedProjects;
  let previousGroup = '';
  grid.innerHTML = orderedProjects.map((p, i) => {
    const projectMeta = getProjectMeta(p);
    const groupKey = encodeURIComponent(projectMeta.group);
    const hidden = filter !== 'all' && groupKey !== filter ? ' is-hidden' : '';
    const filterFirst = filter !== 'all' && groupKey === filter ? ' is-filter-first' : '';
    const groupColor = getGroupColor(projectMeta.group, orderedGroups);
    const groupCount = orderedProjects.filter(project => getProjectMeta(project).group === projectMeta.group).length;
    const groupIndex = String(orderedGroups.indexOf(projectMeta.group) + 1).padStart(2,'0');
    const groupHeader = projectMeta.group !== previousGroup ? `<div class="group-divider${hidden}${filterFirst}" data-group-key="${groupKey}" style="--group-color:${groupColor}"><span class="group-index">${groupIndex}</span><div><small>CAPABILITY / GROUP ${groupIndex}</small><strong>${escapeHtml(projectMeta.group)}</strong></div><em>${String(groupCount).padStart(2,'0')} PROJECT${groupCount > 1 ? 'S' : ''}</em></div>` : '';
    previousGroup = projectMeta.group;
    const sub = p.kind === 'series' ? `${projectMeta.subtitle} · ${p.clips.length} 个片段` : projectMeta.subtitle;
    const cardImage = getClipFrames(getPrimaryClip(p))[0]?.src || p.image;
    const previewFrames = getProjectPreviewFrames(p);
    const frameLabel = p.kind === 'series' ? `${previewFrames.length} FRAMES / ${p.clips.length} CLIPS` : `${previewFrames.length} SELECTED FRAMES`;
    return `${groupHeader}<article class="project-card${hidden}" data-id="${p.id}" data-category="${groupKey}" style="--group-color:${groupColor}">
      <div class="card-visual"><img src="${cardImage}" alt="${escapeHtml(projectMeta.title)} ${escapeHtml(sub)}" loading="lazy" /><span class="card-index">${String(i+1).padStart(2,'0')}</span><span class="card-play">▶</span></div>
      <div class="card-copy"><div><span class="card-kicker">${escapeHtml(getProjectKicker(p))}</span><h3>${escapeHtml(projectMeta.title)}</h3><p>${escapeHtml(sub)}</p><p class="card-description">${escapeHtml(projectMeta.desc)}</p></div><span class="card-type">${p.kind === 'series' ? 'SERIES' : 'WORK'}</span></div>
      <div class="card-frames"><div class="frames-head"><span class="frames-label">${frameLabel}</span>${previewFrames.length > 5 ? '<span class="frames-explore">MOVE TO EXPLORE ↔</span>' : ''}</div><div class="card-frame-strip">${previewFrames.map((frame, frameIndex) => `<button type="button" class="card-frame-button" data-clip-id="${frame.clipId}" aria-label="打开 ${escapeHtml(frame.clipTitle)} 的选定帧 ${frameIndex + 1}" title="${escapeHtml(frame.clipTitle)}"><img src="${frame.src}" alt="${escapeHtml(p.title)} · ${escapeHtml(frame.clipTitle)} · 选定帧 ${frameIndex + 1}" loading="lazy" /><span>${escapeHtml(frame.clipTitle)}</span></button>`).join('')}</div></div>
    </article>`;
  }).join('');
  grid.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => openProject(card.dataset.id)));
  grid.querySelectorAll('.card-frame-button').forEach(button => button.addEventListener('click', event => {
    event.stopPropagation();
    openProject(button.closest('.project-card').dataset.id, button.dataset.clipId);
  }));
  bindFrameStripMotion();
  bindDescriptionMotion();
  fitProjectTitles();
}

let titleFitRequest = 0;
function fitProjectTitles() {
  cancelAnimationFrame(titleFitRequest);
  titleFitRequest = requestAnimationFrame(() => {
    grid.querySelectorAll('.card-copy h3').forEach(title => {
      title.style.fontSize = '';
      const available = title.clientWidth;
      const maximum = parseFloat(getComputedStyle(title).fontSize);
      if (!available || title.scrollWidth <= available + 1) return;
      let low = 16;
      let high = maximum;
      for (let step = 0; step < 10; step += 1) {
        const size = (low + high) / 2;
        title.style.fontSize = `${size}px`;
        if (title.scrollWidth <= available + 1) low = size;
        else high = size;
      }
      title.style.fontSize = `${Math.floor(low * 10) / 10}px`;
    });
  });
}

function bindFrameStripMotion() {
  grid.querySelectorAll('.card-frame-strip').forEach(strip => {
    let target = 0;
    let animationFrame = 0;
    const animate = () => {
      const distance = target - strip.scrollLeft;
      strip.scrollLeft += distance * .14;
      if (Math.abs(distance) > .5) animationFrame = requestAnimationFrame(animate);
      else animationFrame = 0;
    };
    strip.addEventListener('pointermove', event => {
      const maxScroll = strip.scrollWidth - strip.clientWidth;
      if (maxScroll <= 1) return;
      const rect = strip.getBoundingClientRect();
      const position = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      target = maxScroll * position;
      if (!animationFrame) animationFrame = requestAnimationFrame(animate);
    });
  });
}

function bindDescriptionMotion() {
  grid.querySelectorAll('.card-description').forEach(description => {
    let target = description.scrollTop;
    let animationFrame = 0;
    const animate = () => {
      const distance = target - description.scrollTop;
      description.scrollTop += distance * .16;
      if (Math.abs(distance) > .35) animationFrame = requestAnimationFrame(animate);
      else animationFrame = 0;
    };
    description.addEventListener('pointermove', event => {
      const maxScroll = description.scrollHeight - description.clientHeight;
      if (maxScroll <= 1) return;
      const rect = description.getBoundingClientRect();
      const position = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      target = maxScroll * position;
      if (!animationFrame) animationFrame = requestAnimationFrame(animate);
    });
  });
}

function bindScrollAwareCardHover() {
  if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  let pointer = null;
  let activeCard = null;
  let frameRequest = 0;
  const update = () => {
    frameRequest = 0;
    const nextCard = pointer ? document.elementFromPoint(pointer.x, pointer.y)?.closest('.project-card') : null;
    if (nextCard === activeCard) return;
    activeCard?.classList.remove('is-pointer-over');
    activeCard = nextCard;
    activeCard?.classList.add('is-pointer-over');
  };
  const schedule = () => { if (!frameRequest) frameRequest = requestAnimationFrame(update); };
  window.addEventListener('pointermove', event => { pointer = {x:event.clientX, y:event.clientY}; schedule(); }, {passive:true});
  window.addEventListener('pointerout', event => { if (!event.relatedTarget) { pointer = null; schedule(); } }, {passive:true});
  window.addEventListener('scroll', schedule, {passive:true});
}

function renderFilters() {
  if (!filtersEl) return;
  const displayProjects = getDisplayProjects();
  const orderedGroups = getOrderedGroups(displayProjects);
  const orderedProjects = [...displayProjects].sort((a,b) => orderedGroups.indexOf(getProjectMeta(a).group) - orderedGroups.indexOf(getProjectMeta(b).group) || getProjectMeta(a).order - getProjectMeta(b).order);
  const groups = orderedProjects.reduce((map, project) => {
    const group = getProjectMeta(project).group;
    map.set(group, (map.get(group) || 0) + 1);
    return map;
  }, new Map());
  filtersEl.innerHTML = [`<button class="filter is-selected" data-filter="all" role="tab" aria-selected="true">全部 <span>${displayProjects.length}</span></button>`, ...Array.from(groups, ([group, count]) => `<button class="filter" style="--group-color:${getGroupColor(group, orderedGroups)}" data-filter="${encodeURIComponent(group)}" role="tab" aria-selected="false">${escapeHtml(group)} <span>${count}</span></button>`)].join('');
  if (groupSubnav) groupSubnav.innerHTML = Array.from(groups, ([group, count]) => `<button type="button" style="--group-color:${getGroupColor(group, orderedGroups)}" data-group-filter="${encodeURIComponent(group)}"><b>${escapeHtml(group)}</b><span>${String(count).padStart(2,'0')}</span></button>`).join('');
}

function renderSeriesSwitcher(project, activeClipId) {
  if (project.kind !== 'series') { seriesSwitcher.classList.remove('is-visible'); seriesSwitcher.innerHTML = ''; return; }
  seriesSwitcher.classList.add('is-visible');
  const orderedClips = [...project.clips].sort((a, b) => getContentMeta(a, project).order - getContentMeta(b, project).order);
  seriesSwitcher.innerHTML = orderedClips.map((clip, i) => {
    const meta = getContentMeta(clip, project);
    return `<button class="series-chip${clip.id === activeClipId ? ' is-active' : ''}" data-clip-id="${clip.id}">${String(i + 1).padStart(2,'0')}<span>${escapeHtml(meta.title)}</span></button>`;
  }).join('');
  seriesSwitcher.querySelectorAll('.series-chip').forEach(btn => btn.addEventListener('click', () => {
    seriesSwitcher.querySelectorAll('.series-chip').forEach(chip => chip.classList.remove('is-active'));
    btn.classList.add('is-active');
    loadClip(project, orderedClips.find(clip => clip.id === btn.dataset.clipId));
  }));
}

function resolveExternalVideo(value) {
  const raw = String(value || '').trim();
  if (!raw) return null;
  try {
    const url = new URL(raw, window.location.href);
    const host = url.hostname.toLowerCase();
    if (host === 'player.bilibili.com') return {type:'embed', src:url.href};
    if (host.endsWith('bilibili.com')) {
      const bvid = url.pathname.match(/\/video\/(BV[\w]+)/i)?.[1];
      const aid = url.pathname.match(/\/video\/av(\d+)/i)?.[1];
      const page = Math.max(1, Number(url.searchParams.get('p')) || 1);
      if (bvid || aid) {
        const params = new URLSearchParams({page:String(page), high_quality:'1', danmaku:'0'});
        if (bvid) params.set('bvid', bvid);
        else params.set('aid', aid);
        return {type:'embed', src:`https://player.bilibili.com/player.html?${params}`};
      }
    }
    if (/\.(mp4|webm|ogg|m3u8)$/i.test(url.pathname)) return {type:'video', src:url.href};
    return {type:'page', src:url.href};
  } catch { return null; }
}

function loadClip(project, clip) {
  activeProject = project; activeClip = clip;
  const projectMeta = getProjectMeta(project);
  const clipMeta = getContentMeta(clip, project);
  document.querySelector('#modal-title').textContent = projectMeta.title;
  document.querySelector('#modal-subtitle').textContent = clipMeta.title;
  document.querySelector('#modal-desc').textContent = clipMeta.description || projectMeta.desc;
  document.querySelector('#modal-role').textContent = project.role;
  document.querySelector('#modal-format').textContent = clip.format || project.format;
  const items = getClipFrames(clip);
  const rail = document.querySelector('#frame-rail');
  rail.innerHTML = items.map((item, i) => `<button class="frame-button${i === 0 ? ' is-active' : ''}" data-index="${i}"><img src="${item.src}" alt="${escapeHtml(projectMeta.title)} ${escapeHtml(clipMeta.title)} ${item.label}" /><span>${item.label}</span></button>`).join('');
  modalCover.src = items[0]?.src || clip.image || project.image;
  videoWrap.classList.remove('is-playing','is-external-playing','loaded');
  video.pause();
  video.removeAttribute('src');
  video.load();
  externalVideoFrame.removeAttribute('src');
  activeExternalVideo = resolveExternalVideo(clipMeta.externalVideo || clip.externalVideo);
  pendingVideoSrc = activeExternalVideo?.type === 'video'
    ? activeExternalVideo.src
    : (!activeExternalVideo && clip.video ? resolveLocalVideo(clip.video) : '');
  video.preload = 'none';
  if (activeExternalVideo?.type === 'embed') {
    placeholder.textContent = '点击播放 Bilibili 视频';
  } else if (activeExternalVideo?.type === 'page') {
    placeholder.textContent = '点击前往外部视频页面';
  } else if (pendingVideoSrc) {
    placeholder.textContent = '点击播放视频';
  } else {
    placeholder.textContent = '暂未设置可播放的视频';
  }
  rail.querySelectorAll('.frame-button').forEach(btn => btn.addEventListener('click', () => {
    rail.querySelectorAll('.frame-button').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    modalCover.src = items[Number(btn.dataset.index)].src;
    video.pause();
    if (video.currentSrc) video.currentTime = 0;
    externalVideoFrame.removeAttribute('src');
    videoWrap.classList.remove('is-playing','is-external-playing');
  }));
}

function openProject(id, clipId) {
  const project = renderedProjects.find(item => item.id === id) || getAllProjects().find(item => item.id === id);
  if (!project) return;
  activeProject = project;
  const requestedClip = project.kind === 'series' ? project.clips.find(clip => clip.id === clipId) : null;
  const initialClip = requestedClip || getPrimaryClip(project);
  const projectMeta = getProjectMeta(project);
  document.querySelector('#modal-kicker').textContent = getProjectKicker(project);
  document.querySelector('#modal-desc').textContent = projectMeta.desc;
  document.querySelector('#modal-tags').innerHTML = project.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('');
  document.querySelector('#modal-year').textContent = project.year;
  renderSeriesSwitcher(project, initialClip.id);
  loadClip(project, initialClip);
  modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
}

function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); video.pause(); video.removeAttribute('src'); video.load(); externalVideoFrame.removeAttribute('src'); activeExternalVideo = null; pendingVideoSrc = ''; videoWrap.classList.remove('is-playing','is-external-playing'); }

function startPlayback() {
  if (activeExternalVideo?.type === 'embed') {
    const separator = activeExternalVideo.src.includes('?') ? '&' : '?';
    externalVideoFrame.src = `${activeExternalVideo.src}${separator}autoplay=1`;
    videoWrap.classList.add('loaded','is-external-playing');
    return;
  }
  if (activeExternalVideo?.type === 'page') {
    window.open(activeExternalVideo.src, '_blank', 'noopener,noreferrer');
    return;
  }
  if (!video.src && pendingVideoSrc) {
    video.src = pendingVideoSrc;
    video.preload = 'metadata';
    video.load();
    placeholder.textContent = '视频载入中…';
  }
  if (!video.currentSrc && !video.src) { placeholder.textContent = '暂未设置可播放的视频'; return; }
  videoWrap.classList.add('is-playing');
  video.play().catch(() => { videoWrap.classList.remove('is-playing'); placeholder.textContent = '视频暂时无法播放，请检查外部链接'; });
}
coverPlay.addEventListener('click', (event) => { event.stopPropagation(); startPlayback(); });
videoWrap.addEventListener('click', (event) => { if (event.target === video) return; if (!videoWrap.classList.contains('is-playing')) startPlayback(); });
video.addEventListener('loadedmetadata', () => videoWrap.classList.add('loaded'));
video.addEventListener('ended', () => videoWrap.classList.remove('is-playing'));
video.addEventListener('error', () => { placeholder.textContent = '视频暂时无法载入，请检查素材路径'; });
document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });
function activateFilter(filter='all', shouldScroll=false) {
  document.querySelectorAll('.filter').forEach(button => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('is-selected', active);
    button.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('[data-group-filter]').forEach(button => button.classList.toggle('is-active', button.dataset.groupFilter === filter));
  renderProjects(filter);
  if (shouldScroll) document.querySelector('#work')?.scrollIntoView({behavior:'smooth', block:'start'});
}
function bindFilterEvents() {
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => activateFilter(button.dataset.filter)));
  document.querySelectorAll('[data-group-filter]').forEach(button => button.addEventListener('click', () => activateFilter(button.dataset.groupFilter, true)));
  const workNav = document.querySelector('[data-work-nav]');
  if (workNav) workNav.onclick = () => activateFilter('all');
}
function refreshContentView() {
  const activeFilter = document.querySelector('.filter.is-selected')?.dataset.filter || 'all';
  renderFilters();
  bindFilterEvents();
  const nextFilter = [...document.querySelectorAll('.filter')].some(button => button.dataset.filter === activeFilter) ? activeFilter : 'all';
  activateFilter(nextFilter);
  applyResumeConfig();
}
window.addEventListener('storage', event => { if ([CONTENT_STORAGE_KEY, FRAME_STORAGE_KEY, GROUP_STORAGE_KEY, CUSTOM_PROJECTS_STORAGE_KEY, HIDDEN_PROJECTS_STORAGE_KEY, RESUME_STORAGE_KEY].includes(event.key)) refreshContentView(); });
syncChannel?.addEventListener('message', refreshContentView);
window.addEventListener('pageshow', refreshContentView);
window.addEventListener('focus', refreshContentView);
document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshContentView(); });
let titleResizeTimer = 0;
window.addEventListener('resize', () => { clearTimeout(titleResizeTimer); titleResizeTimer = setTimeout(fitProjectTitles, 90); }, {passive:true});
document.fonts?.ready.then(fitProjectTitles);
const toggle = document.querySelector('.menu-toggle');
toggle?.addEventListener('click', () => { const open = document.querySelector('.sidebar').classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('.primary-nav a').forEach(link => link.addEventListener('click', () => document.querySelector('.sidebar')?.classList.remove('is-open')));
const contactCardText = '陈坤勇\n邮箱：1091851105@qq.com\n电话：15305920981\n微信：CKY15305920981';
document.querySelectorAll('[data-copy-card]').forEach(button => button.addEventListener('click', async () => {
  const label = button.querySelector('[data-copy-label]');
  let copied = false;
  try {
    await navigator.clipboard.writeText(contactCardText);
    copied = true;
  } catch (_) {
    const helper = document.createElement('textarea');
    helper.value = contactCardText;
    helper.setAttribute('readonly', '');
    helper.style.cssText = 'position:fixed;left:-9999px;top:0';
    document.body.appendChild(helper);
    helper.select();
    copied = document.execCommand('copy');
    helper.remove();
  }
  if (!label) return;
  label.textContent = copied ? '已复制全部信息' : '复制失败，请重试';
  button.classList.toggle('is-copied', copied);
  window.setTimeout(() => {
    label.textContent = '复制名片';
    button.classList.remove('is-copied');
  }, 1800);
}));
const sidebar = document.querySelector('.sidebar');
const collapseButton = document.querySelector('.sidebar-collapse');
const setSidebarCollapsed = collapsed => {
  if (!sidebar || !collapseButton) return;
  sidebar.classList.toggle('is-collapsed', collapsed);
  document.body.classList.toggle('sidebar-collapsed', collapsed);
  collapseButton.setAttribute('aria-expanded', String(!collapsed));
  collapseButton.setAttribute('aria-label', collapsed ? '展开左侧导航' : '收起左侧导航');
};
collapseButton?.addEventListener('click', () => {
  const collapsed = !sidebar.classList.contains('is-collapsed');
  setSidebarCollapsed(collapsed);
  try { localStorage.setItem('cky-sidebar-collapsed', collapsed ? '1' : '0'); } catch (_) {}
});
try { setSidebarCollapsed(localStorage.getItem('cky-sidebar-collapsed') === '1'); } catch (_) {}
const sectionNavLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const sectionNavTargets = sectionNavLinks.map(link => ({link, section:document.querySelector(link.getAttribute('href'))})).filter(item => item.section);
let navFrame = 0;
function updateSectionNavigation() {
  navFrame = 0;
  const marker = window.innerHeight * .36;
  let current = '';
  sectionNavTargets.forEach(({link, section}) => {
    if (section.getBoundingClientRect().top <= marker) current = link.getAttribute('href');
  });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = '#contact';
  sectionNavLinks.forEach(link => {
    const active = link.getAttribute('href') === current;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
function scheduleSectionNavigation() {
  if (!navFrame) navFrame = requestAnimationFrame(updateSectionNavigation);
}
window.addEventListener('scroll', scheduleSectionNavigation, {passive:true});
window.addEventListener('resize', scheduleSectionNavigation, {passive:true});
applyResumeConfig();
updateSectionNavigation();
renderFilters();
bindFilterEvents();
activateFilter();
bindScrollAwareCardHover();


