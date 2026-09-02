const works = [
  { title: 'SmartHue Connection UI', category: 'product-ui', label: 'Product UI', year: '2025', art: 'phone', description: 'Smart-light connection and control interface.' },
  { title: 'V9Snap Editing Journey', category: 'product-ui', label: 'Product UI', year: '2025', art: 'editor', description: 'Android photo-editing and save experience.' },
  { title: 'Multi-app Design System', category: 'product-ui', label: 'Design systems', year: '2025', art: 'system', description: 'Reusable patterns and visual foundations across mobile products.' },
  { title: 'Web3 Visual Experience', category: 'web', label: 'Web & SaaS', year: '2024', art: 'web3', description: 'Graphic-led responsive experience for a complex Web3 concept.' },
  { title: 'App Store Storytelling', category: 'growth', label: 'Growth visual', year: '2025', art: 'store', description: 'Screenshot systems designed to make product value immediately legible.' },
  { title: 'App Icon Exploration', category: 'motion', label: 'Icon design', year: '2025', art: 'icon', description: 'Product icon studies balancing clarity, character, and platform fit.' },
  { title: 'Product Motion Study', category: 'motion', label: 'Motion', year: '2025', art: 'motion', description: 'After Effects-led motion direction for product moments.' },
  { title: 'Teaching on Zalo', category: 'web', label: 'UX & Visual case', year: '2024', art: 'zalo', description: 'A visual case study exploring teaching experiences on Zalo.' },
  { title: 'Katalon Academy', category: 'web', label: 'UX & Web', year: '2024', art: 'katalon', description: 'Experience and interface exploration for Katalon Academy.' },
  { title: 'Acadebra BeautyTech', category: 'web', label: 'Responsive web', year: '2024', art: 'beauty', description: 'A visually expressive landing experience for a BeautyTech product.' },
  { title: 'Construction Company', category: 'web', label: 'Responsive web', year: '2024', art: 'construction', description: 'A clear, structured landing page for a construction business.' },
  { title: 'AstroTech Platform', category: 'web', label: 'Responsive web', year: '2024', art: 'astro', description: 'Landing experience for a freelancer-focused platform.' },
  { title: 'In-app Event Series', category: 'growth', label: 'Growth visual', year: '2025', art: 'store', description: 'Campaign-ready visual assets aligned with the product language.' },
  { title: 'Control Surface Components', category: 'product-ui', label: 'Product UI', year: '2025', art: 'system', description: 'Reusable mobile controls, variants, and state patterns.' },
  { title: 'Store Icon Direction', category: 'motion', label: 'Icon design', year: '2025', art: 'icon', description: 'Color, depth, and silhouette explorations for mobile products.' },
  { title: 'Connected-light Moments', category: 'motion', label: 'Motion', year: '2025', art: 'motion', description: 'Motion studies for responsive smart-light feedback.' }
];

const feed = document.querySelector('.archive-feed');
const sentinel = document.querySelector('.load-sentinel');
const endState = document.querySelector('.archive-end');
const filters = document.querySelectorAll('.archive-filters button');
const statusCount = document.querySelector('.archive-status b');
const lightbox = document.querySelector('.lightbox');
const lightboxArt = document.querySelector('.lightbox-art');
const lightboxCategory = document.querySelector('.lightbox-meta span');
const lightboxTitle = document.querySelector('.lightbox-meta h2');
const lightboxDescription = document.querySelector('.lightbox-meta p');
const lightboxYear = document.querySelector('.lightbox-meta > b');
let activeFilter = 'all';
let visibleWorks = works;
let rendered = 0;
const batchSize = 4;

function artMarkup(art) {
  const templates = {
    phone: '<div class="visual-inner art-phone"><div class="phone-art"><div class="screen-orb"></div><div class="screen-lines"></div></div></div>',
    editor: '<div class="visual-inner art-editor"><div class="phone-art editor-art"><div class="editor-pic"></div><div class="screen-lines"></div></div></div>',
    system: '<div class="visual-inner art-system"><div class="system-panel"><header><span>Semantic system</span><span>Components</span></header><div class="token-row"><i></i><i></i><i></i><i></i><i></i></div><div class="component-row"><span></span><span></span><span></span></div></div></div>',
    web3: '<div class="visual-inner art-web3"><div class="browser-art"><small>Digital experience</small><strong>BUILD<br>BEYOND</strong><div class="browser-blocks"><i></i><i></i></div></div></div>',
    store: '<div class="visual-inner art-store"><div class="store-spread"><div class="store-shot">SMARTER<br>LIGHTING</div><div class="store-shot">MAKE IT<br>YOURS</div><div class="store-shot">ONE TAP<br>AWAY</div></div></div>',
    icon: '<div class="visual-inner art-icon"><div class="icon-art"></div></div>',
    motion: '<div class="visual-inner art-motion"><div class="motion-orb"></div></div>',
    zalo: '<div class="visual-inner art-zalo"><div class="case-board"><b>Teaching<br>on Zalo</b><p>Making a familiar tool work better for remote learning.</p><div class="case-grid"><i></i><i></i></div></div></div>',
    katalon: '<div class="visual-inner art-katalon"><div class="case-board"><b>Katalon<br>Academy</b><p>Improving clarity across a learning experience.</p><div class="case-grid"><i></i><i></i></div></div></div>',
    beauty: '<div class="visual-inner art-beauty"><div class="browser-art"><small>BeautyTech</small><strong>CARE<br>MEETS AI</strong><div class="browser-blocks"><i></i><i></i></div></div></div>',
    construction: '<div class="visual-inner art-construction"><div class="browser-art"><small>Built environment</small><strong>BUILD<br>WITH TRUST</strong><div class="browser-blocks"><i></i><i></i></div></div></div>',
    astro: '<div class="visual-inner art-astro"><div class="browser-art"><small>Freelancer platform</small><strong>WORK<br>BEYOND</strong><div class="browser-blocks"><i></i><i></i></div></div></div>'
  };
  return templates[art];
}

function openPreview(item) {
  lightboxArt.innerHTML = artMarkup(item.art);
  lightboxCategory.textContent = item.label;
  lightboxTitle.textContent = item.title;
  lightboxDescription.textContent = item.description;
  lightboxYear.textContent = item.year;
  lightbox.showModal();
}

function createCard(item, index) {
  const card = document.createElement('button');
  card.className = 'visual-card';
  card.style.animationDelay = `${Math.min(index, 3) * 70}ms`;
  card.setAttribute('aria-label', `Open ${item.title}`);
  card.innerHTML = `<div class="visual-frame">${artMarkup(item.art)}</div><div class="visual-meta"><div><h2>${item.title}</h2><p>${item.label}</p></div><span>${item.year} · View</span></div>`;
  card.addEventListener('click', () => openPreview(item));
  return card;
}

function loadNextBatch() {
  if (rendered >= visibleWorks.length) {
    sentinel.hidden = true;
    endState.hidden = false;
    statusCount.textContent = `${rendered} / ${visibleWorks.length}`;
    return;
  }
  const batch = visibleWorks.slice(rendered, rendered + batchSize);
  const fragment = document.createDocumentFragment();
  batch.forEach((item, index) => fragment.appendChild(createCard(item, index)));
  feed.appendChild(fragment);
  rendered += batch.length;
  statusCount.textContent = `${rendered} / ${visibleWorks.length}`;
}

function applyFilter(filter) {
  activeFilter = filter;
  visibleWorks = filter === 'all' ? works : works.filter((item) => item.category === filter);
  rendered = 0;
  feed.innerHTML = '';
  sentinel.hidden = false;
  endState.hidden = true;
  filters.forEach((button) => button.classList.toggle('active', button.dataset.filter === filter));
  loadNextBatch();
}

const infiniteObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) loadNextBatch();
}, { rootMargin: '500px 0px' });

filters.forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
document.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
infiniteObserver.observe(sentinel);
applyFilter(activeFilter);
