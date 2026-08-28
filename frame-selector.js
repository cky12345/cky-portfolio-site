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
const metaExternalVideo = document.querySelector('#meta-external-video');
const externalVideoStatus = document.querySelector('#external-video-status');
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
function getMeta(clip) { const custom = contentConfig[clip.id] || {}; return { group:custom.group || clip.group, project:custom.project || clip.project, title:custom.title || clip.title, kicker:custom.kicker || clip.kicker || DEFAULT_KICKER_BY_ID[clip.id] || '', description:custom.description || '', externalVideo:Object.prototype.hasOwnProperty.call(custom,'externalVideo') ? custom.externalVideo : (clip.externalVideo || ''), order:Number(custom.order) || clips.indexOf(clip) + 1 }; }
function getGroupNames() {
  const effective = [...new Set(clips.map(clip => getMeta(clip).group))];
  return [...groupConfig.order, ...effective.filter(group => !groupConfig.order.includes(group))].filter((group, index, all) => group && all.indexOf(group) === index);
}
function getSortedClips() { const groups = getGroupNames(); return [...clips].sort((a,b) => groups.indexOf(getMeta(a).group) - groups.indexOf(getMeta(b).group) || getMeta(a).order - getMeta(b).order); }
function announceSync(type='content') { syncChannel?.postMessage({type, at:Date.now()}); }
function persistContent() { try { localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(contentConfig)); announceSync('content'); } catch {} }
function persistGroupConfig() { try { localStorage.setItem(GROUP_STORAGE_KEY, JSON.stringify(groupConfig)); announceSync('groups'); } catch {} }
function persistResumeConfig() {
  try {
    localStorage.setItem(RESUME_STORAGE_KEY, JSON.stringify(resumeConfig));
    announceSync('resume');
    return true;
  } catch {
    resumeStatus.textContent = '保存失败：PDF 文件可能过大，请使用小于 3 MB 的文件';
    return false;
  }
}
function persistAvatarConfig() {
  try {
    localStorage.setItem(AVATAR_STORAGE_KEY, JSON.stringify(avatarConfig));
    announceSync('avatar');
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
    announceSync('projects');
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
    announceSync('frames');
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
  metaExternalVideo.value = meta.externalVideo;
  externalVideoStatus.textContent = meta.externalVideo ? '当前作品会优先使用外部视频。' : '当前作品使用本地视频。';
  updateGroupManager(meta.group);
  sourceVideo.autoplay = false;
  if (clip.video) sourceVideo.src = clip.video;
  else sourceVideo.removeAttribute('src');
  sourceVideo.load();
  timeline.value = 0;
  timeline.disabled = true;
  videoTimeline.value = 0;
  videoTimeline.disabled = true;
  markButton.disabled = true;
  videoPlay.textContent = '▶';
  clearButton.disabled = false;
  playerShell.classList.remove('is-portrait');
  playerShell.style.aspectRatio = '';
  emptyPlayer.textContent = clip.video ? '视频载入中…' : '该作品仅使用外部视频；展示帧请使用上传的封面';
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
  isScrubbing = false;
  pendingSeekTime = null;
  timeline.value = sourceVideo.currentTime;
  videoTimeline.value = sourceVideo.currentTime;
  currentTimeEl.textContent = formatTime(sourceVideo.currentTime);
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
function finishScrub() {
  if (!isScrubbing) return;
  const target = pendingSeekTime;
  if (target === null) { isScrubbing = false; return; }
  seekVideo(target);
}
function beginScrub() { isScrubbing = true; pauseAfterSeek(); }
function updateScrub(input) {
  isScrubbing = true;
  pauseAfterSeek();
  const nextTime = Math.max(0, Math.min(Number(input.max) || 0, Number(input.value) || 0));
  pendingSeekTime = nextTime;
  timeline.value = nextTime;
  videoTimeline.value = nextTime;
  currentTimeEl.textContent = formatTime(nextTime);
}
[timeline, videoTimeline].forEach(input => {
  input.addEventListener('pointerdown', beginScrub);
  input.addEventListener('pointerup', finishScrub);
  input.addEventListener('pointercancel', finishScrub);
  input.addEventListener('input', () => updateScrub(input));
  input.addEventListener('change', finishScrub);
});
window.addEventListener('pointerup', finishScrub);
window.addEventListener('blur', finishScrub);
sourceVideo.addEventListener('error', () => { if (currentClip) { saveStatus.textContent = '这个视频载入失败，请检查文件路径'; markButton.disabled = true; timeline.disabled = true; videoTimeline.disabled = true; } });
markButton.addEventListener('click', () => {
  saveStatus.textContent = '正在捕获当前帧…';
  if (!currentClip || sourceVideo.readyState < 2) { saveStatus.textContent = `无法捕获：${currentClip ? `readyState ${sourceVideo.readyState}` : '尚未选择片段'}`; return; }
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
    frames.push({ time:Number(sourceVideo.currentTime.toFixed(2)), dataUrl:captureCanvas.toDataURL('image/jpeg', .82), label:`FRAME ${String(frames.length + 1).padStart(2,'0')}` });
    selections[currentClip.id] = { frames, updatedAt:new Date().toISOString() };
    renderLibrary(); renderSelectedFrames(); persist();
  } catch (error) { saveStatus.textContent = `捕获失败：${error.message}`; }
});
clearButton.addEventListener('click', () => { if (!currentClip) return; delete selections[currentClip.id]; persist(); renderLibrary(); renderSelectedFrames(); });
document.querySelector('#export-config').addEventListener('click', () => {
  const payload = { version:5, exportedAt:new Date().toISOString(), frames:selections, content:contentConfig, groups:groupConfig, customProjects, hiddenIds, resume:resumeConfig, avatar:avatarConfig };
  const blob = new Blob([JSON.stringify(payload,null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a'); link.href = url; link.download = 'cky-portfolio-config.json'; link.click(); URL.revokeObjectURL(url);
});
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
  });
  persistContent();
  renameProjectName.value = '';
  renderLibrary();
  selectClip(currentClip);
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
  if (!group || !projectName || !title || (!videoPath && !externalVideo) || !imagePath) {
    addStatus.textContent = '请填写分组、项目名称、片段名称、封面路径，以及本地视频或外部链接中的至少一项';
    return;
  }
  const id = `custom-${Date.now().toString(36)}`;
  const project = {
    id, group, category:'custom', kicker, title:projectName, subtitle:title,
    image:imagePath, video:videoPath, externalVideo, frames:[imagePath], desc:addDescription.value.trim(),
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
