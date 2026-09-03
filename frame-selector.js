const STORAGE_KEY = 'cky-portfolio-frame-selections-v1';
const FRAME_BASELINE_VERSION_KEY = 'cky-portfolio-frame-baseline-version-v1';
const CONTENT_STORAGE_KEY = 'cky-portfolio-content-config-v1';
const GROUP_STORAGE_KEY = 'cky-portfolio-group-config-v1';
const CUSTOM_PROJECTS_STORAGE_KEY = 'cky-portfolio-custom-projects-v1';
const HIDDEN_PROJECTS_STORAGE_KEY = 'cky-portfolio-hidden-projects-v1';
const RESUME_STORAGE_KEY = 'cky-portfolio-resume-config-v1';
const AVATAR_STORAGE_KEY = 'cky-portfolio-avatar-config-v1';
const DEFAULT_RESUME_CONFIG = { name:'陈坤勇_VOGUE定向简历.pdf', href:'陈坤勇_VOGUE定向简历.pdf' };
const DEFAULT_AVATAR_CONFIG = { tilt:12, displacementScale:.45, background:'transparent' };
const GROUP_PALETTE = ['#d1473f','#b8792b','#707d3d','#348071','#3f6fa2','#765b9c','#a64c78','#4c777c','#8b6544','#58616f'];
// Defaults mirror the public site's bilingual labels, so the English editor
// fields are pre-filled even for legacy entries without `content[id].en`.
const ENGLISH_GROUP_LABELS = {
  '三维实景合成':'Live-action compositing', 'AI辅助合成':'AI-assisted compositing',
  '动态影像设计':'Motion design', '三维动画':'3D animation', '花字特效包装':'Kinetic typography',
  '时尚 / 编辑':'Fashion / Editorial', '品牌 / 3D':'Brand / 3D', 'AI / 合成':'AI / Compositing',
  '内容系统 / GQ Sports':'Content system / GQ Sports', '内容系统 / 抖音跨年':'Content system / Douyin New Year',
  '内容系统 / 抖音跨年生活':'Content system / Douyin New Year', '内容系统 / GQ × 大众':'Content system / GQ × Volkswagen',
  'AI-GenerateContext':'AI-generated context', 'AI内容生成':'AI-generated context'
};
const ENGLISH_VALUE_LABELS = {
  '《穿普拉达的女王2》':'The Devil Wears Prada 2', '优衣库 × 上海博物馆':'UNIQLO × Shanghai Museum',
  '科兰黎 VB 修复精华':'Kelanli VB Repair Serum', '科兰黎VB修复精华':'Kelanli VB Repair Serum',
  '小猿 IP 形象':'Xiaoyuan IP character', '抖音跨年生活':'Douyin New Year Life', '抖音生活跨年季':'Douyin New Year Life',
  'GQ × 大众动态海报':'GQ × Volkswagen Dynamic Posters', '个人影像':'Personal film', '毕业设计':'Graduation film',
  '广东篇':'Guangdong edition', '川渝篇':'Sichuan–Chongqing edition', '东北篇':'Northeast edition',
  '上海站':'Shanghai', '深圳站':'Shenzhen', '深圳二站':'Shenzhen II', '成都站':'Chengdu',
  '单板 / 双板':'Snowboard / ski', '单板双板':'Snowboard / ski', '高级雪道':'Advanced slopes', '滑雪搭子':'Ski buddies',
  '滑雪尽头':'The end of the ski run', '滑雪酒店':'Ski hotel', '适合雪场':'Made for the slopes', '雪场穿搭':'Slope styling', '雪场缆车':'Ski lift',
  '动态海报':'Motion poster', '实景合成动画':'Live-action composite', 'MG 动画':'MG animation', 'MG 动画演绎':'MG animation',
  'AI 三维合成':'AI 3D composite', '合成镜头 1':'Composite shot 1', '合成镜头 2':'Composite shot 2',
  '埃及站 / 三维动画':'Egypt / 3D animation', '巴西站 / 三维动画':'Brazil / 3D animation', '云南站 / 三维动画':'Yunnan / 3D animation',
  'GQ × 回力新品发布会':'GQ × Warrior New Product Launch', '测试':'Test project',
  '《最后一件》':'The Last Item', '《最后一件》原创概念时装短片':'The Last Item — Original Fashion Short'
};
const ENGLISH_CLIP_LABELS = {
  anne:{project:'The Devil Wears Prada 2', title:'Anne / Cover Composite'}, meryl:{project:'The Devil Wears Prada 2', title:'Meryl / Cover Composite'},
  uniqlo:{project:'UNIQLO × Shanghai Museum', title:'Motion Poster'}, end:{project:'Personal film', title:'The Last Mile — Graduation Film'},
  swisse:{title:'Plus / MG Animation'}, '1664-live':{title:'Live-action Composite'}, '1664-mg':{title:'MG Animation'}, volvo:{title:'MG Animation'},
  calerie:{project:'Kelanli VB Repair Serum', title:'AI 3D Composite'}, onepiece:{title:'AI 3D Composite'},
  'xiaoyuan-1':{project:'Xiaoyuan IP character', title:'Composite Shot 1'}, 'xiaoyuan-2':{project:'Xiaoyuan IP character', title:'Composite Shot 2'},
  micro:{title:'Egypt / 3D Animation'}, 'micro-brazil':{title:'Brazil / 3D Animation'}, 'micro-yunnan':{title:'Yunnan / 3D Animation'},
  'ski-single-double':{title:'Snowboard / Ski'}, 'ski-advanced':{title:'Advanced Slopes'}, 'ski-buddy':{title:'Ski Buddies'}, 'ski-end':{title:'The End of the Ski Run'},
  'ski-hotel':{title:'Ski Hotel'}, 'ski-suitable':{title:'Made for the Slopes'}, 'ski-outfit':{title:'Slope Styling'}, 'ski-cable':{title:'Ski Lift'},
  'douyin-guangdong':{project:'Douyin New Year Life', title:'Guangdong Edition'}, 'douyin-chuan-yu':{project:'Douyin New Year Life', title:'Sichuan–Chongqing Edition'}, 'douyin-dongbei':{project:'Douyin New Year Life', title:'Northeast Edition'},
  'gq-vw-shanghai':{project:'GQ × Volkswagen Dynamic Posters', title:'Shanghai'}, 'gq-vw-shenzhen':{project:'GQ × Volkswagen Dynamic Posters', title:'Shenzhen'}, 'gq-vw-shenzhen-2':{project:'GQ × Volkswagen Dynamic Posters', title:'Shenzhen II'}, 'gq-vw-chengdu':{project:'GQ × Volkswagen Dynamic Posters', title:'Chengdu'}
};
const ENGLISH_DESCRIPTION_BY_ID = {
  anne:'A fashion cover composite built around character, wardrobe, layout and shot rhythm.',
  meryl:'Cover compositing and motion packaging that keeps the magazine tone while moving at social speed.',
  uniqlo:'A cultural editorial motion poster that gives a static layout a sense of time.',
  end:'A personal film study of people, space and movement beyond commercial visual work.',
  swisse:'Product motion built from dark fields, gold rim light and a restrained brand atmosphere.', '1664-live':'A product composite that uses scale, light direction and location to carry the brand story.', '1664-mg':'Graphic rhythm and colour compress the brand message into an editorial motion language.', volvo:'A clear visual bridge between automotive, sport and lifestyle content.',
  calerie:'An AI-assisted product scene focused on edges, material, light and readable brand information.',
  onepiece:'An AI scene composite connecting a licensed IP, product material and motion.',
  'xiaoyuan-1':'Two character composites align scale, lighting and spatial relationships around the IP.', 'xiaoyuan-2':'Two character composites align scale, lighting and spatial relationships around the IP.',
  micro:'A shared 3D product system adapted for Egypt, Brazil and Yunnan.', 'micro-brazil':'A shared 3D product system adapted for Egypt, Brazil and Yunnan.', 'micro-yunnan':'A shared 3D product system adapted for Egypt, Brazil and Yunnan.',
  'ski-single-double':'A scalable vertical content system for ski scenes, styling and lifestyle.', 'ski-advanced':'A scalable vertical content system for ski scenes, styling and lifestyle.', 'ski-buddy':'A scalable vertical content system for ski scenes, styling and lifestyle.', 'ski-end':'A scalable vertical content system for ski scenes, styling and lifestyle.', 'ski-hotel':'A scalable vertical content system for ski scenes, styling and lifestyle.', 'ski-suitable':'A scalable vertical content system for ski scenes, styling and lifestyle.', 'ski-outfit':'A scalable vertical content system for ski scenes, styling and lifestyle.', 'ski-cable':'A scalable vertical content system for ski scenes, styling and lifestyle.',
  'douyin-guangdong':'Regional kinetic typography adapted to local language and viewing rhythm.', 'douyin-chuan-yu':'Regional kinetic typography adapted to local language and viewing rhythm.', 'douyin-dongbei':'Regional kinetic typography adapted to local language and viewing rhythm.',
  'gq-vw-shanghai':'A modular city-poster system with local information, pacing and visual rhythm.', 'gq-vw-shenzhen':'A modular city-poster system with local information, pacing and visual rhythm.', 'gq-vw-shenzhen-2':'A modular city-poster system with local information, pacing and visual rhythm.', 'gq-vw-chengdu':'A modular city-poster system with local information, pacing and visual rhythm.'
};
function getEnglishEditorMeta(clip, meta) {
  const stored = contentConfig[clip.id]?.en || {};
  const defaults = ENGLISH_CLIP_LABELS[clip.id] || {};
  const inferredGroup = /generate/i.test(String(meta.group || '')) ? 'AI-generated context' : ENGLISH_GROUP_LABELS[meta.group];
  const choose = (value, source, mapped, fallback) => {
    const explicit = typeof value === 'string' ? value.trim() : '';
    const looksUntranslated = /[\u3400-\u9fff]/.test(explicit) || /AI-GenerateContext/i.test(explicit);
    return explicit && !looksUntranslated && explicit !== String(source || '').trim() ? explicit : (mapped || fallback);
  };
  return {
    group:choose(stored.group, meta.group, inferredGroup, defaults.group || meta.group),
    project:choose(stored.project, meta.project, ENGLISH_VALUE_LABELS[meta.project], defaults.project || meta.project),
    title:choose(stored.title, meta.title, ENGLISH_VALUE_LABELS[meta.title], defaults.title || meta.title),
    kicker:stored.kicker || meta.kicker || '', description:choose(stored.description, meta.description, ENGLISH_DESCRIPTION_BY_ID[clip.id], '')
  };
}
const DEFAULT_KICKER_BY_ID = {
  anne:'FASHION EDITORIAL / 01', meryl:'FASHION EDITORIAL / 02', uniqlo:'EDITORIAL MOTION / 11', end:'PERSONAL FILM / 12',
  swisse:'BRAND MOTION / 03', '1664-live':'WORLD BUILDING / 04', '1664-mg':'WORLD BUILDING / 05', volvo:'PLATFORM / 08',
  calerie:'AI + 3D / 10', onepiece:'AI + 3D / 11', micro:'AI + 3D / 13', 'micro-brazil':'AI + 3D / 13', 'micro-yunnan':'AI + 3D / 13',
  'ski-single-double':'CONTENT SYSTEM / 06', 'ski-advanced':'CONTENT SYSTEM / 06', 'ski-buddy':'CONTENT SYSTEM / 06', 'ski-end':'CONTENT SYSTEM / 06', 'ski-hotel':'CONTENT SYSTEM / 06', 'ski-suitable':'CONTENT SYSTEM / 06', 'ski-outfit':'CONTENT SYSTEM / 06', 'ski-cable':'CONTENT SYSTEM / 06',
  'douyin-guangdong':'PLATFORM / 07', 'douyin-chuan-yu':'PLATFORM / 07', 'douyin-dongbei':'PLATFORM / 07',
  'gq-vw-shanghai':'DYNAMIC POSTER / 09', 'gq-vw-shenzhen':'DYNAMIC POSTER / 09', 'gq-vw-shenzhen-2':'DYNAMIC POSTER / 09', 'gq-vw-chengdu':'DYNAMIC POSTER / 09',
  'xiaoyuan-1':'CHARACTER COMPOSITE / 12', 'xiaoyuan-2':'CHARACTER COMPOSITE / 12'
};
const baseClips = [
  { group:'时尚 / 编辑', project:'《穿普拉达的女王2》', id:'anne', title:'Anne / 封面合成', video:'《穿普拉达的女王2》Anne封面合成.mp4' },
  { group:'时尚 / 编辑', project:'《穿普拉达的女王2》', id:'meryl', title:'Meryl / 封面合成', video:'《穿普拉达的女王2》Meryl封面合成.mp4' },
  { group:'时尚 / 编辑', project:'优衣库 × 上海博物馆', id:'uniqlo', title:'动态海报', video:'优衣库X上海博物馆动态海报.mp4' },
  { group:'时尚 / 编辑', project:'个人影像', id:'end', title:'《末端派送》毕业设计', video:'《末端派送》毕业设计.mp4' },
  { group:'品牌 / 3D', project:'Vogue × Swisse', id:'swisse', title:'Plus / MG 动画', video:'VogueXSwisseMG动画演绎.mp4' },
  { group:'品牌 / 3D', project:'GQ × 1664', id:'1664-live', title:'实景合成动画', video:'智族GQX1664实景合成动画.mp4' },
  { group:'品牌 / 3D', project:'GQ × 1664', id:'1664-mg', title:'MG 动画', video:'智族GQX1664MG动画.mp4' },
  { group:'品牌 / 3D', project:'Volvo × GolfBox', id:'volvo', title:'MG 动画演绎', video:'沃尔沃XGolfBoxMG动画演绎.mp4' },
  { group:'AI / 合成', project:'科兰黎 VB 修复精华', id:'calerie', title:'AI 三维合成', video:'科兰黎VB修复精华ai三维合成.mp4' },
  { group:'AI / 合成', project:'Microingredients', id:'micro', title:'埃及站 / 三维动画', video:'Microingredients三维动画埃及站.mp4' },
  { group:'内容系统 / GQ Sports', project:'GQ Sports', id:'ski-single-double', title:'单板 / 双板', video:'智族GQSportsMG动画单板双板.mp4' },
  { group:'内容系统 / GQ Sports', project:'GQ Sports', id:'ski-advanced', title:'高级雪道', video:'智族GQSportsMG动画高级雪道.mp4' },
  { group:'内容系统 / GQ Sports', project:'GQ Sports', id:'ski-buddy', title:'滑雪搭子', video:'智族GQSportsMG动画滑雪搭子.mp4' },
  { group:'内容系统 / GQ Sports', project:'GQ Sports', id:'ski-end', title:'滑雪尽头', video:'智族GQSportsMG动画滑雪尽头.mp4' },
  { group:'内容系统 / GQ Sports', project:'GQ Sports', id:'ski-hotel', title:'滑雪酒店', video:'智族GQSportsMG动画滑雪酒店.mp4' },
  { group:'内容系统 / GQ Sports', project:'GQ Sports', id:'ski-suitable', title:'适合雪场', video:'智族GQSportsMG动画适合雪场.mp4' },
  { group:'内容系统 / GQ Sports', project:'GQ Sports', id:'ski-outfit', title:'雪场穿搭', video:'智族GQSportsMG动画雪场穿搭.mp4' },
  { group:'内容系统 / GQ Sports', project:'GQ Sports', id:'ski-cable', title:'雪场缆车', video:'智族GQSportsMG动画雪场缆车.mp4' },
  { group:'内容系统 / 抖音跨年', project:'抖音跨年生活', id:'douyin-guangdong', title:'广东篇', video:'抖音跨年生活花字包装广东篇.mp4' },
  { group:'内容系统 / 抖音跨年', project:'抖音跨年生活', id:'douyin-chuan-yu', title:'川渝篇', video:'抖音跨年生活花字包装川渝篇.mp4' },
  { group:'内容系统 / 抖音跨年', project:'抖音跨年生活', id:'douyin-dongbei', title:'东北篇', video:'抖音跨年生活花字包装东北篇.mp4' },
  { group:'内容系统 / GQ × 大众', project:'GQ × 大众动态海报', id:'gq-vw-shanghai', title:'上海站', video:'GQX大众动态海报上海站.mp4' },
  { group:'内容系统 / GQ × 大众', project:'GQ × 大众动态海报', id:'gq-vw-shenzhen', title:'深圳站', video:'GQX大众动态海报深圳站.mp4' },
  { group:'内容系统 / GQ × 大众', project:'GQ × 大众动态海报', id:'gq-vw-shenzhen-2', title:'深圳二站', video:'GQX大众动态海报深圳二站.mp4' },
  { group:'内容系统 / GQ × 大众', project:'GQ × 大众动态海报', id:'gq-vw-chengdu', title:'成都站', video:'GQX大众动态海报成都站.mp4' },
  { group:'AI / 合成', project:'溪木源 × One Piece', id:'onepiece', title:'AI 三维合成', video:'溪木源XOnePiece ai三维合成.mp4' },
  { group:'AI / 合成', project:'小猿 IP 形象', id:'xiaoyuan-1', title:'合成镜头 1', video:'小猿IP形象合成镜头1.mp4' },
  { group:'AI / 合成', project:'小猿 IP 形象', id:'xiaoyuan-2', title:'合成镜头 2', video:'小猿IP形象合成镜头2.mp4' },
  { group:'AI / 合成', project:'Microingredients', id:'micro-brazil', title:'巴西站 / 三维动画', video:'Microingredients三维动画巴西站.mp4' },
  { group:'AI / 合成', project:'Microingredients', id:'micro-yunnan', title:'云南站 / 三维动画', video:'Microingredients三维动画云南站.mp4' }
];

function readCustomProjects() { try { const value = JSON.parse(localStorage.getItem(CUSTOM_PROJECTS_STORAGE_KEY) || '[]'); return Array.isArray(value) ? value : []; } catch { return []; } }
function readHiddenIds() { try { const value = JSON.parse(localStorage.getItem(HIDDEN_PROJECTS_STORAGE_KEY) || '[]'); return Array.isArray(value) ? value : []; } catch { return []; } }
let customProjects = readCustomProjects();
let hiddenIds = readHiddenIds();
let clips = [];
function refreshClips() {
  const hidden = new Set(hiddenIds);
  const customClips = customProjects.map(project => ({ group:project.group, project:project.title, id:project.id, title:project.subtitle, kicker:project.kicker, video:project.video, externalVideo:project.externalVideo, image:project.image, custom:true }));
  clips = [...baseClips, ...customClips].filter(clip => !hidden.has(clip.id));
}
refreshClips();

const library = document.querySelector('#library');
const sourceVideo = document.querySelector('#source-video');
const timeline = document.querySelector('#timeline');
const videoTimeline = document.querySelector('#video-timeline');
const videoPlay = document.querySelector('#video-play');
const currentTimeEl = document.querySelector('#time-current');
const durationEl = document.querySelector('#time-duration');
const markButton = document.querySelector('#mark-frame');
const clearButton = document.querySelector('#clear-frames');
const selectedFramesEl = document.querySelector('#selected-frames');
const emptyPlayer = document.querySelector('#player-empty');
const editorKicker = document.querySelector('#editor-kicker');
const editorTitle = document.querySelector('#editor-title');
const saveStatus = document.querySelector('#save-status');
const captureCanvas = document.querySelector('#capture-canvas');
const metaGroup = document.querySelector('#meta-group');
const metaProject = document.querySelector('#meta-project');
const metaTitle = document.querySelector('#meta-title');
const metaKicker = document.querySelector('#meta-kicker');
const metaOrder = document.querySelector('#meta-order');
const metaDescription = document.querySelector('#meta-description');
const metaEnGroup = document.querySelector('#meta-en-group');
const metaEnProject = document.querySelector('#meta-en-project');
const metaEnTitle = document.querySelector('#meta-en-title');
const metaEnKicker = document.querySelector('#meta-en-kicker');
const metaEnDescription = document.querySelector('#meta-en-description');
const metaExternalVideo = document.querySelector('#meta-external-video');
const externalVideoStatus = document.querySelector('#external-video-status');
const metaVideoPath = document.querySelector('#meta-video-path');
const metaImagePath = document.querySelector('#meta-image-path');
const mediaPathStatus = document.querySelector('#media-path-status');
const renameGroupName = document.querySelector('#rename-group-name');
const renameProjectName = document.querySelector('#rename-project-name');
const groupColor = document.querySelector('#group-color');
const newGroupName = document.querySelector('#new-group-name');
const deleteGroupTarget = document.querySelector('#delete-group-target');
const addGroup = document.querySelector('#add-project-group');
const addProject = document.querySelector('#add-project-name');
const addTitle = document.querySelector('#add-project-title');
const addKicker = document.querySelector('#add-project-kicker');
const addVideo = document.querySelector('#add-project-video');
const addExternalVideo = document.querySelector('#add-project-external-video');
const addImage = document.querySelector('#add-project-image');
const addDescription = document.querySelector('#add-project-description');
const addYear = document.querySelector('#add-project-year');
const addRole = document.querySelector('#add-project-role');
const addFormat = document.querySelector('#add-project-format');
const addTags = document.querySelector('#add-project-tags');
const addStatus = document.querySelector('#project-admin-status');
const groupSuggestions = document.querySelector('#group-suggestions');
const resumeFile = document.querySelector('#resume-file');
const resumeStatus = document.querySelector('#resume-status');
const avatarTilt = document.querySelector('#avatar-tilt');
const avatarTiltValue = document.querySelector('#avatar-tilt-value');
const avatarDisplacement = document.querySelector('#avatar-displacement');
const avatarDisplacementValue = document.querySelector('#avatar-displacement-value');
const avatarBackground = document.querySelector('#avatar-background');
const avatarSettingsStatus = document.querySelector('#avatar-settings-status');
const playerShell = document.querySelector('.player-shell');
const syncChannel = 'BroadcastChannel' in window ? new BroadcastChannel('cky-portfolio-sync') : null;
let currentClip = null;
let selections = readSelections();
let contentConfig = readContentConfig();
let groupConfig = readGroupConfig();
let resumeConfig = readResumeConfig();
let avatarConfig = readAvatarConfig();
let isScrubbing = false;
let pendingSeekTime = null;
let seekFallbackTimer = null;

function readSelections() {
  const baseline = window.__PORTFOLIO_FRAME_SELECTIONS__ || {};
  const baselineVersion = window.__PORTFOLIO_FRAME_SELECTIONS_VERSION__ || '';
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (baselineVersion && localStorage.getItem(FRAME_BASELINE_VERSION_KEY) !== baselineVersion) {
      const imported = {...stored, ...baseline};
      localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
      localStorage.setItem(FRAME_BASELINE_VERSION_KEY, baselineVersion);
      return imported;
    }
    return Object.keys(stored).length ? stored : baseline;
  } catch { return baseline; }
}
function readContentConfig() { try { return JSON.parse(localStorage.getItem(CONTENT_STORAGE_KEY) || '{}'); } catch { return {}; } }
function readGroupConfig() { try { const parsed = JSON.parse(localStorage.getItem(GROUP_STORAGE_KEY) || '{}'); return {order:Array.isArray(parsed.order) ? parsed.order : [], colors:parsed.colors || {}}; } catch { return {order:[], colors:{}}; } }
function readResumeConfig() { try { const parsed = JSON.parse(localStorage.getItem(RESUME_STORAGE_KEY) || 'null'); return parsed?.href ? parsed : DEFAULT_RESUME_CONFIG; } catch { return DEFAULT_RESUME_CONFIG; } }
function readAvatarConfig() {
  try {
    const parsed = JSON.parse(localStorage.getItem(AVATAR_STORAGE_KEY) || '{}');
    return {
      tilt:Math.min(12, Math.max(2, Number(parsed.tilt) || DEFAULT_AVATAR_CONFIG.tilt)),
      displacementScale:Math.min(.5, Math.max(0, Number.isFinite(Number(parsed.displacementScale)) ? Number(parsed.displacementScale) : DEFAULT_AVATAR_CONFIG.displacementScale)),
      background:parsed.background === 'white' ? 'white' : DEFAULT_AVATAR_CONFIG.background
    };
  } catch { return {...DEFAULT_AVATAR_CONFIG}; }
}
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
const DESCRIPTION_BY_ID = {
  anne:'人物、服装、封面版式和镜头节奏的合成实验。用一秒钟建立时尚语气，让人物进入可以被传播的编辑语境。',
  meryl:'围绕人物姿态、版式重心和色彩关系完成封面合成与动效包装，保持杂志感，同时照顾社交平台的观看速度。',
  swisse:'以深色背景、金色边缘光和瓶身轮廓建立克制的品牌氛围，让产品信息自然进入观看路径。',
  '1664-live':'把产品置入真实空间，通过尺度关系、光线方向和场景氛围，让品牌权益成为地点感的一部分。',
  '1664-mg':'用图形、色彩和节奏压缩信息，把商业权益转译成更接近编辑内容的动态图形语言。',
  volvo:'在汽车、运动和生活方式之间寻找视觉连接，用清晰的节奏完成从产品信息到生活场景的过渡。',
  calerie:'把产品放进一个可信但不平庸的场景，关注边缘、材质、光线方向和品牌信息的可读性。',
  onepiece:'以联名 IP 与产品为核心完成 AI 场景、材质和动态关系的合成表达。',
  'xiaoyuan-1':'围绕 IP 形象完成两组场景合成镜头，统一角色尺度、光线和空间关系。', 'xiaoyuan-2':'围绕 IP 形象完成两组场景合成镜头，统一角色尺度、光线和空间关系。',
  micro:'同一产品叙事适配埃及、巴西、云南等不同站点，建立统一的三维视觉资产与输出规则。', 'micro-brazil':'同一产品叙事适配埃及、巴西、云南等不同站点，建立统一的三维视觉资产与输出规则。', 'micro-yunnan':'同一产品叙事适配埃及、巴西、云南等不同站点，建立统一的三维视觉资产与输出规则。',
  'ski-single-double':'围绕滑雪场景、穿搭与生活方式建立一套可延展的竖版内容系统。每个片段拥有独立的关键帧与播放入口，同时共享同一套视觉规则。', 'ski-advanced':'围绕滑雪场景、穿搭与生活方式建立一套可延展的竖版内容系统。每个片段拥有独立的关键帧与播放入口，同时共享同一套视觉规则。', 'ski-buddy':'围绕滑雪场景、穿搭与生活方式建立一套可延展的竖版内容系统。每个片段拥有独立的关键帧与播放入口，同时共享同一套视觉规则。', 'ski-end':'围绕滑雪场景、穿搭与生活方式建立一套可延展的竖版内容系统。每个片段拥有独立的关键帧与播放入口，同时共享同一套视觉规则。', 'ski-hotel':'围绕滑雪场景、穿搭与生活方式建立一套可延展的竖版内容系统。每个片段拥有独立的关键帧与播放入口，同时共享同一套视觉规则。', 'ski-suitable':'围绕滑雪场景、穿搭与生活方式建立一套可延展的竖版内容系统。每个片段拥有独立的关键帧与播放入口，同时共享同一套视觉规则。', 'ski-outfit':'围绕滑雪场景、穿搭与生活方式建立一套可延展的竖版内容系统。每个片段拥有独立的关键帧与播放入口，同时共享同一套视觉规则。', 'ski-cable':'围绕滑雪场景、穿搭与生活方式建立一套可延展的竖版内容系统。每个片段拥有独立的关键帧与播放入口，同时共享同一套视觉规则。',
  'douyin-guangdong':'同一传播主题下适配广东、川渝、东北等地区语境，处理字体动线、信息密度和平台观看速度。', 'douyin-chuan-yu':'同一传播主题下适配广东、川渝、东北等地区语境，处理字体动线、信息密度和平台观看速度。', 'douyin-dongbei':'同一传播主题下适配广东、川渝、东北等地区语境，处理字体动线、信息密度和平台观看速度。',
  'gq-vw-shanghai':'围绕不同城市站点建立统一的动态海报系统，在同一视觉骨架下调整信息、节奏与城市内容。', 'gq-vw-shenzhen':'围绕不同城市站点建立统一的动态海报系统，在同一视觉骨架下调整信息、节奏与城市内容。', 'gq-vw-shenzhen-2':'围绕不同城市站点建立统一的动态海报系统，在同一视觉骨架下调整信息、节奏与城市内容。', 'gq-vw-chengdu':'围绕不同城市站点建立统一的动态海报系统，在同一视觉骨架下调整信息、节奏与城市内容。',
};
function getMeta(clip) { const custom = contentConfig[clip.id] || {}; return { group:custom.group || clip.group, project:custom.project || clip.project, title:custom.title || clip.title, kicker:custom.kicker || clip.kicker || DEFAULT_KICKER_BY_ID[clip.id] || '', description:custom.description || DESCRIPTION_BY_ID[clip.id] || '', externalVideo:Object.prototype.hasOwnProperty.call(custom,'externalVideo') ? custom.externalVideo : (clip.externalVideo || ''), order:Number(custom.order) || clips.indexOf(clip) + 1 }; }
function getClipMedia(clip) {
  const custom = contentConfig[clip.id] || {};
  return {
    video:Object.prototype.hasOwnProperty.call(custom,'video') ? String(custom.video || '') : String(clip.video || ''),
    image:Object.prototype.hasOwnProperty.call(custom,'image') ? String(custom.image || '') : String(clip.image || '')
  };
}
function resolveEditorVideoPath(value) {
  const path = String(value || '').trim();
  if (!path) return '';
  if (/^(?:https?:|blob:|data:|\/|\.\/)/i.test(path)) return path;
  if (/^assets[\\/]/i.test(path)) return './' + path;
  return path;
}
function getGroupNames() {
  const effective = [...new Set(clips.map(clip => getMeta(clip).group))];
  return [...groupConfig.order, ...effective.filter(group => !groupConfig.order.includes(group))].filter((group, index, all) => group && all.indexOf(group) === index);
}
function getSortedClips() { const groups = getGroupNames(); return [...clips].sort((a,b) => groups.indexOf(getMeta(a).group) - groups.indexOf(getMeta(b).group) || getMeta(a).order - getMeta(b).order); }
function announceSync(type='content') { syncChannel?.postMessage({type, at:Date.now()}); }
function buildConfigPayload() { return { version:5, exportedAt:new Date().toISOString(), frames:selections, content:contentConfig, groups:groupConfig, customProjects, hiddenIds, resume:resumeConfig, avatar:avatarConfig }; }
let projectSyncTimer = 0;
async function syncConfigToProjectFiles({silent=false} = {}) {
  try {
    const response = await fetch('http://127.0.0.1:8000/__migrate-config', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(buildConfigPayload())});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    if (!silent) saveStatus.textContent = '已同步到项目文件，可在 Git 中提交';
    return true;
  } catch (error) {
    if (!silent) saveStatus.textContent = '浏览器本地已保存；请先用“启动本地预览.cmd”运行同步服务';
    return false;
  }
}
function queueProjectSync() { clearTimeout(projectSyncTimer); projectSyncTimer = setTimeout(() => syncConfigToProjectFiles({silent:true}), 900); }
function persistContent() { try { localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(contentConfig)); announceSync('content'); queueProjectSync(); } catch {} }
function persistGroupConfig() { try { localStorage.setItem(GROUP_STORAGE_KEY, JSON.stringify(groupConfig)); announceSync('groups'); queueProjectSync(); } catch {} }
function persistResumeConfig() {
  try {
    localStorage.setItem(RESUME_STORAGE_KEY, JSON.stringify(resumeConfig));
    announceSync('resume'); queueProjectSync();
    return true;
  } catch {
    resumeStatus.textContent = '保存失败：PDF 文件可能过大，请使用小于 3 MB 的文件';
    return false;
  }
}
function persistAvatarConfig() {
  try {
    localStorage.setItem(AVATAR_STORAGE_KEY, JSON.stringify(avatarConfig));
    announceSync('avatar'); queueProjectSync();
    return true;
  } catch {
    avatarSettingsStatus.textContent = '参数保存失败，请检查浏览器存储权限';
    return false;
  }
}
function persistProjectLibrary() {
  try {
    localStorage.setItem(CUSTOM_PROJECTS_STORAGE_KEY, JSON.stringify(customProjects));
    localStorage.setItem(HIDDEN_PROJECTS_STORAGE_KEY, JSON.stringify(hiddenIds));
    announceSync('projects'); queueProjectSync();
  } catch {
    if (addStatus) addStatus.textContent = '保存失败：浏览器本地存储空间不足';
  }
}
function updateProjectAdminOptions() {
  if (!groupSuggestions) return;
  groupSuggestions.innerHTML = getGroupNames().map(group => `<option value="${escapeHtml(group)}"></option>`).join('');
}
function populateMetaOptions() {
  const groups = getGroupNames();
  const projects = [...new Set(clips.map(clip => getMeta(clip).project))];
  const makeOptions = (values, selected) => values.map(value => `<option value="${escapeHtml(value)}"${value === selected ? ' selected' : ''}>${escapeHtml(value)}</option>`).join('');
  metaGroup.innerHTML = makeOptions(groups, metaGroup.value);
  metaProject.innerHTML = makeOptions(projects, metaProject.value);
  updateProjectAdminOptions();
}
function updateGroupManager(group) {
  const groups = getGroupNames();
  deleteGroupTarget.innerHTML = groups.filter(name => name !== group).map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
  groupColor.value = groupConfig.colors[group] || GROUP_PALETTE[Math.max(0, groups.indexOf(group)) % GROUP_PALETTE.length];
}
function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selections));
    announceSync('frames'); queueProjectSync();
    saveStatus.textContent = '已自动保存 · ' + new Date().toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'});
  } catch {
    saveStatus.textContent = '本次会话已保存 · 建议导出 JSON 备份';
  }
}
function formatTime(seconds) { if (!Number.isFinite(seconds)) return '00:00'; const mins = Math.floor(seconds / 60).toString().padStart(2,'0'); const secs = Math.floor(seconds % 60).toString().padStart(2,'0'); return `${mins}:${secs}`; }

function renderLibrary() {
  const groups = getSortedClips().reduce((acc, clip) => { const meta = getMeta(clip); (acc[meta.group] ||= []).push({clip, meta}); return acc; }, {});
  library.innerHTML = Object.entries(groups).map(([group, items]) => `<div class="library-group"><div class="library-group-title"><span>${group}</span><span>${items.length}</span></div>${items.map(({clip,meta}) => `<button class="library-item" data-clip-id="${clip.id}"><span>${meta.project}<br /><b>${meta.title}</b></span><small>${selections[clip.id]?.frames?.length || 0} 帧</small></button>`).join('')}</div>`).join('');
  library.querySelectorAll('.library-item').forEach(button => { button.classList.toggle('is-active', currentClip?.id === button.dataset.clipId); button.addEventListener('click', () => selectClip(clips.find(clip => clip.id === button.dataset.clipId))); });
}

function renderSelectedFrames() {
  const frames = currentClip ? (selections[currentClip.id]?.frames || []) : [];
  if (!frames.length) { selectedFramesEl.innerHTML = '<div class="selected-empty">还没有选择帧</div>'; return; }
  selectedFramesEl.innerHTML = frames.map((frame, index) => `<div class="selected-card" data-index="${index}"><img src="${frame.dataUrl}" alt="选定展示帧 ${index + 1}" /><span class="selected-index">${String(index + 1).padStart(2,'0')}</span><button class="remove-frame" data-remove="${index}" aria-label="删除第 ${index + 1} 帧">×</button><span class="selected-time">${frame.label || `FRAME ${String(index + 1).padStart(2,'0')}`} · ${formatTime(frame.time)}</span></div>`).join('');
  selectedFramesEl.querySelectorAll('.selected-card').forEach(card => card.addEventListener('click', event => { if (event.target.closest('.remove-frame')) return; seekVideo(frames[Number(card.dataset.index)].time); }));
  selectedFramesEl.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); frames.splice(Number(button.dataset.remove), 1); persist(); renderLibrary(); renderSelectedFrames(); }));
}

function selectClip(clip) {
  if (!clip) return;
  currentClip = clip;
  const meta = getMeta(clip);
  populateMetaOptions();
  library.querySelectorAll('.library-item').forEach(item => item.classList.toggle('is-active', item.dataset.clipId === clip.id));
  editorKicker.textContent = `${meta.group} / ${meta.project}`;
  editorTitle.textContent = meta.title;
  saveStatus.textContent = `${selections[clip.id]?.frames?.length || 0} 帧已保存`;
  if (![...metaGroup.options].some(option => option.value === meta.group)) metaGroup.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(meta.group)}">${escapeHtml(meta.group)}</option>`);
  if (![...metaProject.options].some(option => option.value === meta.project)) metaProject.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(meta.project)}">${escapeHtml(meta.project)}</option>`);
  metaGroup.value = meta.group; metaProject.value = meta.project; metaTitle.value = meta.title; metaKicker.value = meta.kicker; metaOrder.value = meta.order; metaDescription.value = meta.description;
  const english = getEnglishEditorMeta(clip, meta);
  if (metaEnGroup) metaEnGroup.value = english.group || '';
  if (metaEnProject) metaEnProject.value = english.project || '';
  if (metaEnTitle) metaEnTitle.value = english.title || '';
  if (metaEnKicker) metaEnKicker.value = english.kicker || '';
  if (metaEnDescription) metaEnDescription.value = english.description || '';
  metaExternalVideo.value = meta.externalVideo;
  externalVideoStatus.textContent = meta.externalVideo ? '当前作品会优先使用外部视频。' : '当前作品使用本地视频。';
  const media = getClipMedia(clip);
  if (metaVideoPath) metaVideoPath.value = media.video;
  if (metaImagePath) metaImagePath.value = media.image;
  if (mediaPathStatus) mediaPathStatus.textContent = '路径已载入，可直接修改。';
  updateGroupManager(meta.group);
  sourceVideo.autoplay = false;
  sourceVideo.removeAttribute('crossorigin');
  sourceVideo.preload = 'auto';
  sourceVideo.dataset.mediaPath = media.video;
  sourceVideo.dataset.fallbackTried = '0';
  if (media.video) sourceVideo.src = resolveEditorVideoPath(media.video);
  else sourceVideo.removeAttribute('src');
  sourceVideo.load();
  if (sourceVideo.readyState >= 2) enableVideoControls();
  timeline.value = 0;
  timeline.disabled = true;
  videoTimeline.value = 0;
  videoTimeline.disabled = true;
  markButton.disabled = true;
  videoPlay.textContent = '▶';
  clearButton.disabled = false;
  playerShell.classList.remove('is-portrait');
  playerShell.style.aspectRatio = '';
  emptyPlayer.textContent = media.video ? '视频载入中…' : '该作品暂无本地视频；可填写路径或使用外部视频';
  emptyPlayer.parentElement.classList.remove('has-video');
  renderSelectedFrames();
}

function enableVideoControls() {
  if (!currentClip) return;
  timeline.max = Number.isFinite(sourceVideo.duration) && sourceVideo.duration > 0 ? sourceVideo.duration : 1;
  videoTimeline.max = timeline.max;
  timeline.disabled = false;
  videoTimeline.disabled = false;
  markButton.disabled = false;
  emptyPlayer.parentElement.classList.add('has-video');
  playerShell.classList.toggle('is-portrait', sourceVideo.videoHeight > sourceVideo.videoWidth);
  if (sourceVideo.videoWidth > 0 && sourceVideo.videoHeight > 0) {
    playerShell.style.aspectRatio = `${sourceVideo.videoWidth} / ${sourceVideo.videoHeight}`;
  }
  durationEl.textContent = formatTime(sourceVideo.duration);
  currentTimeEl.textContent = formatTime(sourceVideo.currentTime);
}
sourceVideo.addEventListener('loadedmetadata', enableVideoControls);
sourceVideo.addEventListener('loadeddata', enableVideoControls);
sourceVideo.addEventListener('canplay', enableVideoControls);
sourceVideo.addEventListener('durationchange', enableVideoControls);
sourceVideo.addEventListener('timeupdate', () => {
  if (!isScrubbing) {
    timeline.value = sourceVideo.currentTime;
    videoTimeline.value = sourceVideo.currentTime;
  }
  currentTimeEl.textContent = formatTime(sourceVideo.currentTime);
});
sourceVideo.addEventListener('seeking', () => { if (!isScrubbing) { timeline.value = sourceVideo.currentTime; videoTimeline.value = sourceVideo.currentTime; } });
sourceVideo.addEventListener('seeked', () => {
  clearTimeout(seekFallbackTimer);
  pauseAfterSeek();
  if (!isScrubbing) {
    pendingSeekTime = null;
    timeline.value = sourceVideo.currentTime;
    videoTimeline.value = sourceVideo.currentTime;
    currentTimeEl.textContent = formatTime(sourceVideo.currentTime);
  }
});
sourceVideo.addEventListener('play', () => { videoPlay.textContent = 'Ⅱ'; });
sourceVideo.addEventListener('pause', () => { videoPlay.textContent = '▶'; });
sourceVideo.addEventListener('playing', () => { if (isScrubbing || pendingSeekTime !== null) pauseAfterSeek(); });
videoPlay.addEventListener('click', () => { if (sourceVideo.paused) sourceVideo.play().catch(() => {}); else sourceVideo.pause(); });
sourceVideo.addEventListener('click', () => { if (sourceVideo.paused) sourceVideo.play().catch(() => {}); else sourceVideo.pause(); });
function pauseAfterSeek() {
  sourceVideo.pause();
  requestAnimationFrame(() => sourceVideo.pause());
}
function seekVideo(time) {
  if (!Number.isFinite(sourceVideo.duration) || sourceVideo.duration <= 0) return;
  const target = Math.max(0, Math.min(sourceVideo.duration - .01, Number(time) || 0));
  isScrubbing = true;
  pendingSeekTime = target;
  pauseAfterSeek();
  sourceVideo.currentTime = target;
  timeline.value = target;
  videoTimeline.value = target;
  currentTimeEl.textContent = formatTime(target);
  clearTimeout(seekFallbackTimer);
  seekFallbackTimer = setTimeout(() => {
    pauseAfterSeek();
    isScrubbing = false;
    pendingSeekTime = null;
    timeline.value = sourceVideo.currentTime;
    videoTimeline.value = sourceVideo.currentTime;
    currentTimeEl.textContent = formatTime(sourceVideo.currentTime);
  }, 1500);
}
function updateScrub(input) {
  isScrubbing = false;
  pendingSeekTime = null;
  pauseAfterSeek();
  const nextTime = Math.max(0, Math.min(Number(input.max) || 0, Number(input.value) || 0));
  if (Number.isFinite(sourceVideo.duration) && sourceVideo.duration > 0) sourceVideo.currentTime = nextTime;
  timeline.value = nextTime;
  videoTimeline.value = nextTime;
  currentTimeEl.textContent = formatTime(nextTime);
}
[timeline, videoTimeline].forEach(input => {
  input.addEventListener('input', () => updateScrub(input));
  input.addEventListener('change', () => updateScrub(input));
});
sourceVideo.addEventListener('error', () => {
  if (!currentClip) return;
  const rawPath = String(sourceVideo.dataset.mediaPath || '').trim();
  const canTryAssetsFallback = rawPath && sourceVideo.dataset.fallbackTried !== '1' && !/^(?:https?:|blob:|data:|\/|\.\/|assets[\\/])/i.test(rawPath);
  if (canTryAssetsFallback) {
    sourceVideo.dataset.fallbackTried = '1';
    sourceVideo.src = './assets/videos/' + rawPath;
    sourceVideo.load();
    return;
  }
  saveStatus.textContent = '这个视频载入失败，请检查文件路径';
  markButton.disabled = true;
  timeline.disabled = true;
  videoTimeline.disabled = true;
});
markButton.addEventListener('click', () => {
  saveStatus.textContent = '正在捕获当前帧…';
  if (!currentClip) { saveStatus.textContent = '无法捕获：尚未选择片段'; return; }
  if (sourceVideo.readyState < 2 || !sourceVideo.videoWidth || !sourceVideo.videoHeight) {
    saveStatus.textContent = '视频画面尚未准备好，请稍等片刻或拖动时间轴后重试';
    return;
  }
  try {
    const maxWidth = 640;
    const scale = Math.min(1, maxWidth / sourceVideo.videoWidth);
    captureCanvas.width = Math.round(sourceVideo.videoWidth * scale); captureCanvas.height = Math.round(sourceVideo.videoHeight * scale);
    const context = captureCanvas.getContext('2d');
    if (!context) throw new Error('当前浏览器无法创建画布');
    context.drawImage(sourceVideo, 0, 0, captureCanvas.width, captureCanvas.height);
    const frames = selections[currentClip.id]?.frames || [];
    if (frames.length >= 4) { saveStatus.textContent = '最多选择 4 帧；请先删除后再加入'; return; }
    if (frames.some(frame => Math.abs(frame.time - sourceVideo.currentTime) < 0.15)) { saveStatus.textContent = '这个时间点已经选择过了'; return; }
    let dataUrl;
    try {
      dataUrl = captureCanvas.toDataURL('image/jpeg', .82);
    } catch (error) {
      if (error?.name === 'SecurityError' || /tainted|cross-origin|跨域/i.test(String(error?.message || ''))) {
        const localServerHint = location.protocol === 'file:'
          ? '请先通过本地 HTTP 服务器打开 frame-selector.html（不要直接双击文件）'
          : '请改用与本页面同域的本地相对路径（如 assets/videos/xxx.mp4），或为视频服务器开启 CORS';
        saveStatus.textContent = `捕获失败：视频画面受跨域保护。${localServerHint}。`;
        return;
      }
      throw error;
    }
    frames.push({ time:Number(sourceVideo.currentTime.toFixed(2)), dataUrl, label:`FRAME ${String(frames.length + 1).padStart(2,'0')}` });
    selections[currentClip.id] = { frames, updatedAt:new Date().toISOString() };
    renderLibrary(); renderSelectedFrames(); persist();
  } catch (error) { saveStatus.textContent = `捕获失败：${error.message}`; }
});
clearButton.addEventListener('click', () => { if (!currentClip) return; delete selections[currentClip.id]; persist(); renderLibrary(); renderSelectedFrames(); });
document.querySelector('#export-config').addEventListener('click', () => {
  const payload = buildConfigPayload();
  const blob = new Blob([JSON.stringify(payload,null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a'); link.href = url; link.download = 'cky-portfolio-config.json'; link.click(); URL.revokeObjectURL(url);
});
document.querySelector('#sync-project')?.addEventListener('click', () => syncConfigToProjectFiles());
document.querySelector('#import-config').addEventListener('change', event => {
  const file = event.target.files?.[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      if (payload?.version >= 2 && payload.frames) {
        selections = payload.frames || {};
        contentConfig = payload.content || {};
        groupConfig = payload.groups || {order:[],colors:{}};
        customProjects = Array.isArray(payload.customProjects) ? payload.customProjects : [];
        hiddenIds = Array.isArray(payload.hiddenIds) ? payload.hiddenIds : [];
        resumeConfig = payload.resume?.href ? payload.resume : readResumeConfig();
        if (payload.resume?.href) persistResumeConfig();
        avatarConfig = payload.avatar ? {
          tilt:Math.min(12, Math.max(2, Number(payload.avatar.tilt) || DEFAULT_AVATAR_CONFIG.tilt)),
          displacementScale:Math.min(.5, Math.max(0, Number.isFinite(Number(payload.avatar.displacementScale)) ? Number(payload.avatar.displacementScale) : DEFAULT_AVATAR_CONFIG.displacementScale)),
          background:payload.avatar.background === 'white' ? 'white' : DEFAULT_AVATAR_CONFIG.background
        } : readAvatarConfig();
        if (payload.avatar) persistAvatarConfig();
        persistContent(); persistGroupConfig(); persistProjectLibrary();
      } else {
        selections = payload;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selections));
      refreshClips(); renderLibrary(); populateMetaOptions(); renderAvatarSettings();
      if (currentClip && clips.some(clip => clip.id === currentClip.id)) renderSelectedFrames();
      saveStatus.textContent = '配置已导入并同步到作品集';
    } catch { saveStatus.textContent = '配置文件格式不正确'; }
  };
  reader.readAsText(file);
});
document.querySelector('#save-meta').addEventListener('click', () => {
  if (!currentClip) return;
  const previous = getMeta(currentClip);
  const nextGroup = metaGroup.value.trim() || currentClip.group;
  const nextProject = metaProject.value.trim() || currentClip.project;
  const nextKicker = metaKicker.value.trim() || DEFAULT_KICKER_BY_ID[currentClip.id] || currentClip.kicker || '';
  clips.filter(clip => getMeta(clip).project === previous.project).forEach(clip => {
    contentConfig[clip.id] = {...(contentConfig[clip.id] || {}), group:nextGroup, project:nextProject, kicker:nextKicker};
  });
  contentConfig[currentClip.id] = {...(contentConfig[currentClip.id] || {}), group:nextGroup, project:nextProject, title:metaTitle.value.trim() || currentClip.title, kicker:nextKicker, description:metaDescription.value.trim(), order:Math.max(1, Number(metaOrder.value) || clips.indexOf(currentClip) + 1) };
  persistContent(); renderLibrary(); selectClip(currentClip); saveStatus.textContent = '分组与项目信息已保存';
});
document.querySelector('#save-media-path')?.addEventListener('click', () => {
  if (!currentClip) { if (mediaPathStatus) mediaPathStatus.textContent = '请先从左侧选择一个作品。'; return; }
  const previous = getClipMedia(currentClip);
  const video = metaVideoPath?.value.trim() || '';
  const image = metaImagePath?.value.trim() || '';
  contentConfig[currentClip.id] = {...(contentConfig[currentClip.id] || {}), video, image};
  const customProject = customProjects.find(project => project.id === currentClip.id);
  if (customProject) {
    customProject.video = video;
    customProject.image = image;
    const hasSelectedFrames = Array.isArray(selections[currentClip.id]?.frames) && selections[currentClip.id].frames.length > 0;
    const defaultFrames = Array.isArray(customProject.frames) ? customProject.frames : [];
    if (!hasSelectedFrames && (!defaultFrames.length || defaultFrames[0] === previous.image)) customProject.frames = image ? [image] : [];
  }
  persistContent(); persistProjectLibrary(); refreshClips(); renderLibrary(); populateMetaOptions();
  const nextClip = clips.find(clip => clip.id === currentClip.id);
  if (nextClip) selectClip(nextClip);
  if (mediaPathStatus) mediaPathStatus.textContent = image ? '本地视频与封面路径已保存。' : '本地视频路径已保存，封面留空；请稍后从视频中选择展示帧。';
});
document.querySelector('#save-en-meta')?.addEventListener('click', () => {
  if (!currentClip) { saveStatus.textContent = '请先从左侧选择一个片段'; return; }
  const english = {
    group:metaEnGroup?.value.trim() || '', project:metaEnProject?.value.trim() || '', title:metaEnTitle?.value.trim() || '',
    kicker:metaEnKicker?.value.trim() || '', description:metaEnDescription?.value.trim() || ''
  };
  const previous = contentConfig[currentClip.id] || {};
  const previousMeta = getMeta(currentClip);
  clips.filter(clip => getMeta(clip).group === previousMeta.group).forEach(clip => {
    const entry = contentConfig[clip.id] || {};
    contentConfig[clip.id] = {...entry, en:{...(entry.en || {}), group:english.group}};
  });
  clips.filter(clip => getMeta(clip).project === previousMeta.project).forEach(clip => {
    const entry = contentConfig[clip.id] || {};
    contentConfig[clip.id] = {...entry, en:{...(entry.en || {}), project:english.project}};
  });
  contentConfig[currentClip.id] = {...(contentConfig[currentClip.id] || previous), en:english};
  persistContent(); renderLibrary(); selectClip(currentClip); saveStatus.textContent = 'English fields saved';
});
document.querySelector('#clear-en-meta')?.addEventListener('click', () => {
  if (!currentClip) { saveStatus.textContent = '请先从左侧选择一个片段'; return; }
  const previous = {...(contentConfig[currentClip.id] || {})}; delete previous.en;
  contentConfig[currentClip.id] = previous;
  persistContent(); renderLibrary(); selectClip(currentClip); saveStatus.textContent = 'English overrides cleared';
});
function normalizeExternalVideoUrl(value) {
  const raw = value.trim();
  if (!raw) return '';
  try {
    const url = new URL(raw);
    return ['http:','https:'].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}
document.querySelector('#save-external-video').addEventListener('click', () => {
  if (!currentClip) { externalVideoStatus.textContent = '请先从左侧选择一个作品。'; return; }
  const url = normalizeExternalVideoUrl(metaExternalVideo.value);
  if (url === null) { externalVideoStatus.textContent = '链接格式不正确，请粘贴完整的 http:// 或 https:// 地址。'; return; }
  contentConfig[currentClip.id] = {...(contentConfig[currentClip.id] || {}), externalVideo:url};
  const customProject = customProjects.find(project => project.id === currentClip.id);
  if (customProject) customProject.externalVideo = url;
  persistContent(); persistProjectLibrary();
  metaExternalVideo.value = url;
  externalVideoStatus.textContent = url ? '外部视频链接已保存，主页将优先使用它。' : '外部链接已清空，主页改用本地视频。';
});
document.querySelector('#clear-external-video').addEventListener('click', () => {
  if (!currentClip) { externalVideoStatus.textContent = '请先从左侧选择一个作品。'; return; }
  metaExternalVideo.value = '';
  contentConfig[currentClip.id] = {...(contentConfig[currentClip.id] || {}), externalVideo:''};
  const customProject = customProjects.find(project => project.id === currentClip.id);
  if (customProject) customProject.externalVideo = '';
  persistContent(); persistProjectLibrary();
  externalVideoStatus.textContent = '已改回本地视频。';
});
document.querySelector('#rename-group').addEventListener('click', () => {
  if (!currentClip) return;
  const oldGroup = metaGroup.value;
  const nextGroup = renameGroupName.value.trim();
  if (!nextGroup || nextGroup === oldGroup) { saveStatus.textContent = '请输入一个不同的新分组名称'; return; }
  clips.filter(clip => getMeta(clip).group === oldGroup).forEach(clip => {
    contentConfig[clip.id] = {...(contentConfig[clip.id] || {}), group:nextGroup};
  });
  groupConfig.order = getGroupNames().map(group => group === oldGroup ? nextGroup : group).filter((group, index, all) => all.indexOf(group) === index);
  if (groupConfig.colors[oldGroup]) {
    groupConfig.colors[nextGroup] = groupConfig.colors[oldGroup];
    delete groupConfig.colors[oldGroup];
  }
  persistContent();
  persistGroupConfig();
  renameGroupName.value = '';
  renderLibrary();
  selectClip(currentClip);
  saveStatus.textContent = `分组已重命名为“${nextGroup}”`;
});
document.querySelector('#rename-project').addEventListener('click', () => {
  if (!currentClip) return;
  const oldProject = metaProject.value;
  const nextProject = renameProjectName.value.trim();
  if (!nextProject || nextProject === oldProject) { saveStatus.textContent = '请输入一个不同的新项目名称'; return; }
  clips.filter(clip => getMeta(clip).project === oldProject).forEach(clip => {
    contentConfig[clip.id] = {...(contentConfig[clip.id] || {}), project:nextProject};
    const customProject = customProjects.find(project => project.id === clip.id);
    if (customProject) customProject.title = nextProject;
  });
  persistContent();
  persistProjectLibrary();
  renameProjectName.value = '';
  refreshClips();
  renderLibrary();
  const nextClip = clips.find(clip => clip.id === currentClip.id);
  if (nextClip) selectClip(nextClip);
  saveStatus.textContent = `项目已重命名为“${nextProject}”`;
});
function moveGroup(direction) {
  if (!currentClip) return;
  const currentGroup = metaGroup.value;
  const order = getGroupNames();
  const index = order.indexOf(currentGroup);
  const target = index + direction;
  if (index < 0 || target < 0 || target >= order.length) return;
  [order[index], order[target]] = [order[target], order[index]];
  groupConfig.order = order;
  persistGroupConfig();
  populateMetaOptions();
  metaGroup.value = currentGroup;
  updateGroupManager(currentGroup);
  renderLibrary();
  saveStatus.textContent = '分组顺序已更新';
}
document.querySelector('#group-up').addEventListener('click', () => moveGroup(-1));
document.querySelector('#group-down').addEventListener('click', () => moveGroup(1));
document.querySelector('#create-group').addEventListener('click', () => {
  const name = newGroupName.value.trim();
  if (!name) { saveStatus.textContent = '请输入新分组名称'; return; }
  const groups = getGroupNames();
  if (groups.includes(name)) { saveStatus.textContent = '这个分组已经存在'; return; }
  groupConfig.order = [...groups, name];
  groupConfig.colors[name] = GROUP_PALETTE[groups.length % GROUP_PALETTE.length];
  persistGroupConfig();
  newGroupName.value = '';
  populateMetaOptions();
  metaGroup.value = name;
  updateGroupManager(name);
  saveStatus.textContent = `已新建分组“${name}”，保存信息后可把当前项目移入该组`;
});
document.querySelector('#delete-group').addEventListener('click', () => {
  if (!currentClip) return;
  const currentGroup = metaGroup.value;
  const targetGroup = deleteGroupTarget.value;
  if (!targetGroup) { saveStatus.textContent = '至少需要保留一个分组'; return; }
  clips.filter(clip => getMeta(clip).group === currentGroup).forEach(clip => {
    contentConfig[clip.id] = {...(contentConfig[clip.id] || {}), group:targetGroup};
  });
  groupConfig.order = getGroupNames().filter(group => group !== currentGroup);
  delete groupConfig.colors[currentGroup];
  persistContent();
  persistGroupConfig();
  renderLibrary();
  selectClip(currentClip);
  saveStatus.textContent = `已删除“${currentGroup}”，素材已移入“${targetGroup}”`;
});
groupColor.addEventListener('input', () => {
  const currentGroup = metaGroup.value;
  if (!currentGroup) return;
  groupConfig.colors[currentGroup] = groupColor.value;
  if (!groupConfig.order.includes(currentGroup)) groupConfig.order = getGroupNames();
  persistGroupConfig();
});
metaGroup.addEventListener('change', () => updateGroupManager(metaGroup.value));
function moveCurrentClip(direction) {
  if (!currentClip) return;
  const ordered = getSortedClips().filter(clip => getMeta(clip).group === getMeta(currentClip).group); const index = ordered.findIndex(clip => clip.id === currentClip.id); const target = index + direction;
  if (target < 0 || target >= ordered.length) return;
  const currentOrder = getMeta(ordered[index]).order; const targetOrder = getMeta(ordered[target]).order;
  contentConfig[ordered[index].id] = {...(contentConfig[ordered[index].id] || {}), order:targetOrder};
  contentConfig[ordered[target].id] = {...(contentConfig[ordered[target].id] || {}), order:currentOrder};
  persistContent(); renderLibrary(); library.querySelector(`[data-clip-id="${currentClip.id}"]`)?.classList.add('is-active');
  metaOrder.value = targetOrder;
}
document.querySelector('#move-up').addEventListener('click', () => moveCurrentClip(-1));
document.querySelector('#move-down').addEventListener('click', () => moveCurrentClip(1));
function clearCurrentClip() {
  sourceVideo.pause(); sourceVideo.removeAttribute('src'); sourceVideo.load();
  currentClip = null;
  editorKicker.textContent = 'SELECT A CLIP';
  editorTitle.textContent = '从左侧选择片段';
  saveStatus.textContent = '未选择片段';
  emptyPlayer.textContent = '选择一个片段开始选帧';
  emptyPlayer.parentElement.classList.remove('has-video');
  metaExternalVideo.value = '';
  externalVideoStatus.textContent = '未选择作品。';
  if (metaVideoPath) metaVideoPath.value = '';
  if (metaImagePath) metaImagePath.value = '';
  if (mediaPathStatus) mediaPathStatus.textContent = '未选择作品。';
  timeline.disabled = true; videoTimeline.disabled = true; markButton.disabled = true; clearButton.disabled = true;
  renderSelectedFrames();
}
document.querySelector('#add-project').addEventListener('click', () => {
  const group = addGroup.value.trim();
  const projectName = addProject.value.trim();
  const title = addTitle.value.trim();
  const videoPath = addVideo.value.trim();
  const externalVideo = normalizeExternalVideoUrl(addExternalVideo.value);
  const imagePath = addImage.value.trim();
  const kicker = addKicker.value.trim() || 'CUSTOM WORK / NEW';
  if (externalVideo === null) { addStatus.textContent = '外部视频链接格式不正确，请使用完整的 http:// 或 https:// 地址'; return; }
  if (!group || !projectName || !title || (!videoPath && !externalVideo)) {
    addStatus.textContent = '请填写分组、项目名称、片段名称，以及本地视频或外部链接中的至少一项';
    return;
  }
  const id = `custom-${Date.now().toString(36)}`;
  const project = {
    id, group, category:'custom', kicker, title:projectName, subtitle:title,
    image:imagePath, video:videoPath, externalVideo, frames:imagePath ? [imagePath] : [], desc:addDescription.value.trim(),
    tags:addTags.value.split(/[,，]/).map(tag => tag.trim()).filter(Boolean),
    role:addRole.value.trim() || '视觉设计', format:addFormat.value.trim() || '视频', year:addYear.value.trim() || String(new Date().getFullYear())
  };
  customProjects.push(project);
  hiddenIds = hiddenIds.filter(hiddenId => hiddenId !== id);
  contentConfig[id] = { group, project:projectName, title, kicker, description:project.desc, externalVideo, order:clips.length + 1 };
  if (!groupConfig.order.includes(group)) {
    groupConfig.order = [...getGroupNames(), group].filter((name,index,all) => name && all.indexOf(name) === index);
    groupConfig.colors[group] ||= GROUP_PALETTE[groupConfig.order.indexOf(group) % GROUP_PALETTE.length];
  }
  persistContent(); persistGroupConfig(); persistProjectLibrary(); refreshClips(); renderLibrary(); populateMetaOptions();
  const nextClip = clips.find(clip => clip.id === id); if (nextClip) selectClip(nextClip);
  addStatus.textContent = `已添加“${projectName} / ${title}”，主页会立即同步`;
  [addProject,addTitle,addKicker,addVideo,addExternalVideo,addImage,addDescription,addRole,addFormat,addTags].forEach(input => { input.value = ''; });
});
document.querySelector('#delete-current-project').addEventListener('click', () => {
  if (!currentClip) { addStatus.textContent = '请先从左侧选择要删除的作品'; return; }
  const meta = getMeta(currentClip);
  if (!window.confirm(`从主页隐藏“${meta.project} / ${meta.title}”？之后可以点击“恢复已删除作品”找回。`)) return;
  if (!hiddenIds.includes(currentClip.id)) hiddenIds.push(currentClip.id);
  persistProjectLibrary(); refreshClips(); clearCurrentClip(); renderLibrary(); populateMetaOptions();
  addStatus.textContent = `已隐藏“${meta.project} / ${meta.title}”`;
});
document.querySelector('#restore-projects').addEventListener('click', () => {
  if (!hiddenIds.length) { addStatus.textContent = '当前没有已删除的作品'; return; }
  hiddenIds = [];
  persistProjectLibrary(); refreshClips(); renderLibrary(); populateMetaOptions();
  addStatus.textContent = '已恢复全部隐藏作品';
});
function renderAvatarSettings() {
  avatarTilt.value = String(avatarConfig.tilt);
  avatarTiltValue.textContent = `${avatarConfig.tilt}°`;
  avatarDisplacement.value = String(avatarConfig.displacementScale);
  avatarDisplacementValue.textContent = Number(avatarConfig.displacementScale).toFixed(2);
  avatarBackground.value = avatarConfig.background;
}
function saveAvatarSettings() {
  avatarConfig = {
    tilt:Math.min(12, Math.max(2, Number(avatarTilt.value) || DEFAULT_AVATAR_CONFIG.tilt)),
    displacementScale:Math.min(.5, Math.max(0, Number(avatarDisplacement.value) || 0)),
    background:avatarBackground.value === 'transparent' ? 'transparent' : 'white'
  };
  renderAvatarSettings();
  if (persistAvatarConfig()) avatarSettingsStatus.textContent = `已同步 · 最大角度 ${avatarConfig.tilt}° · displacementScale ${avatarConfig.displacementScale.toFixed(2)}`;
}
avatarTilt.addEventListener('input', saveAvatarSettings);
avatarDisplacement.addEventListener('input', saveAvatarSettings);
avatarBackground.addEventListener('change', saveAvatarSettings);
document.querySelector('#reset-avatar-settings').addEventListener('click', () => {
  avatarConfig = {...DEFAULT_AVATAR_CONFIG};
  renderAvatarSettings();
  persistAvatarConfig();
  avatarSettingsStatus.textContent = '已恢复默认参数：9° / 0.27 / 透明底';
});
document.querySelector('#save-resume').addEventListener('click', () => {
  const file = resumeFile.files?.[0];
  if (!file) { resumeStatus.textContent = '请先选择一个 PDF 文件'; return; }
  if (file.type && file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) { resumeStatus.textContent = '请选择 PDF 格式的简历'; return; }
  if (file.size > 3 * 1024 * 1024) { resumeStatus.textContent = 'PDF 超过 3 MB，请压缩后再上传'; return; }
  resumeStatus.textContent = '正在读取简历文件…';
  const reader = new FileReader();
  reader.onload = () => {
    resumeConfig = {name:file.name, href:String(reader.result)};
    if (!persistResumeConfig()) return;
    resumeStatus.textContent = `当前使用：${file.name}`;
    resumeFile.value = '';
  };
  reader.onerror = () => { resumeStatus.textContent = '文件读取失败，请重新选择'; };
  reader.readAsDataURL(file);
});
document.querySelector('#reset-resume').addEventListener('click', () => {
  resumeConfig = DEFAULT_RESUME_CONFIG;
  try { localStorage.removeItem(RESUME_STORAGE_KEY); announceSync('resume'); } catch {}
  resumeFile.value = '';
  resumeStatus.textContent = `当前使用：${DEFAULT_RESUME_CONFIG.name}`;
});
resumeStatus.textContent = `当前使用：${resumeConfig.name || DEFAULT_RESUME_CONFIG.name}`;
renderAvatarSettings();
updateProjectAdminOptions();
renderLibrary();
