const catalog = [
  { id: 1, name: 'Classic Wayfarer', brand: 'Ray-Ban', price: '$148', style: 'Wayfarer', fit: 94, note: 'Excellent match for oval face shape',
    img: 'images/wayfarer.svg',
    details: [['Style','Wayfarer'],['Frame Width','140 mm'],['Lens Width','50 mm'],['Material','Acetate'],['UV Protection','UV400']],
    svg: `<rect x="8" y="20" width="84" height="44" rx="14" stroke="CLRR" stroke-width="3" fill="rgba(91,138,240,0.06)"/><rect x="128" y="20" width="84" height="44" rx="14" stroke="CLRR" stroke-width="3" fill="rgba(91,138,240,0.06)"/><line x1="92" y1="40" x2="128" y2="40" stroke="CLRR" stroke-width="2.5"/><line x1="0" y1="36" x2="8" y2="36" stroke="CLRR" stroke-width="2"/><line x1="212" y1="36" x2="220" y2="36" stroke="CLRR" stroke-width="2"/>` },
  { id: 2, name: 'Round John', brand: 'Persol', price: '$210', style: 'Round', fit: 81, note: 'Good match, slightly wide bridge',
    img: 'images/round.svg',
    details: [['Style','Round'],['Frame Width','132 mm'],['Lens Width','46 mm'],['Material','Metal'],['UV Protection','UV400']],
    svg: `<circle cx="55" cy="42" r="30" stroke="CLRR" stroke-width="3" fill="rgba(91,138,240,0.06)"/><circle cx="165" cy="42" r="30" stroke="CLRR" stroke-width="3" fill="rgba(91,138,240,0.06)"/><line x1="85" y1="40" x2="135" y2="40" stroke="CLRR" stroke-width="2.5"/><line x1="0" y1="38" x2="25" y2="38" stroke="CLRR" stroke-width="2"/><line x1="195" y1="38" x2="220" y2="38" stroke="CLRR" stroke-width="2"/>` },
  { id: 3, name: 'Aviator Pro', brand: 'Ray-Ban', price: '$165', style: 'Aviator', fit: 88, note: 'Great for high cheekbones',
    img: 'images/aviator.svg',
    details: [['Style','Aviator'],['Frame Width','137 mm'],['Lens Width','55 mm'],['Material','Metal'],['UV Protection','UV400']],
    svg: `<path d="M12 18 Q55 55 98 18" stroke="CLRR" stroke-width="3" fill="rgba(91,138,240,0.06)"/><path d="M122 18 Q165 55 208 18" stroke="CLRR" stroke-width="3" fill="rgba(91,138,240,0.06)"/><line x1="98" y1="28" x2="122" y2="28" stroke="CLRR" stroke-width="2.5"/><line x1="0" y1="22" x2="12" y2="22" stroke="CLRR" stroke-width="2"/><line x1="208" y1="22" x2="220" y2="22" stroke="CLRR" stroke-width="2"/>` },
  { id: 4, name: 'Cat-Eye Luxe', brand: 'Gucci', price: '$320', style: 'Cat-Eye', fit: 76, note: 'Bold choice, dramatic look',
    img: 'images/cateye.svg',
    details: [['Style','Cat-Eye'],['Frame Width','138 mm'],['Lens Width','52 mm'],['Material','Acetate'],['UV Protection','UV400']],
    svg: `<path d="M8 45 Q30 18 92 22 L92 52 Q55 58 8 52 Z" stroke="CLRR" stroke-width="2.5" fill="rgba(91,138,240,0.06)"/><path d="M128 22 Q190 18 212 45 L212 52 Q165 58 128 52 Z" stroke="CLRR" stroke-width="2.5" fill="rgba(91,138,240,0.06)"/><line x1="92" y1="36" x2="128" y2="36" stroke="CLRR" stroke-width="2.5"/><line x1="0" y1="40" x2="8" y2="40" stroke="CLRR" stroke-width="2"/><line x1="212" y1="40" x2="220" y2="40" stroke="CLRR" stroke-width="2"/>` },
  { id: 5, name: 'Square Titan', brand: 'Oakley', price: '$195', style: 'Square', fit: 85, note: 'Structured look, strong jawline match',
    img: 'images/square.svg',
    details: [['Style','Square'],['Frame Width','144 mm'],['Lens Width','54 mm'],['Material','Titanium'],['UV Protection','UV400']],
    svg: `<rect x="8" y="16" width="86" height="46" rx="5" stroke="CLRR" stroke-width="3" fill="rgba(91,138,240,0.06)"/><rect x="126" y="16" width="86" height="46" rx="5" stroke="CLRR" stroke-width="3" fill="rgba(91,138,240,0.06)"/><line x1="94" y1="38" x2="126" y2="38" stroke="CLRR" stroke-width="2.5"/><line x1="0" y1="34" x2="8" y2="34" stroke="CLRR" stroke-width="2"/><line x1="212" y1="34" x2="220" y2="34" stroke="CLRR" stroke-width="2"/>` },
  { id: 6, name: 'Slim Oval', brand: 'Tom Ford', price: '$285', style: 'Round', fit: 90, note: 'Slim profile, elegant everyday wear',
    img: 'images/oval.svg',
    details: [['Style','Oval'],['Frame Width','130 mm'],['Lens Width','44 mm'],['Material','Metal'],['UV Protection','UV400']],
    svg: `<ellipse cx="55" cy="40" rx="42" ry="22" stroke="CLRR" stroke-width="2.5" fill="rgba(91,138,240,0.06)"/><ellipse cx="165" cy="40" rx="42" ry="22" stroke="CLRR" stroke-width="2.5" fill="rgba(91,138,240,0.06)"/><line x1="97" y1="38" x2="123" y2="38" stroke="CLRR" stroke-width="2"/><line x1="0" y1="36" x2="13" y2="36" stroke="CLRR" stroke-width="2"/><line x1="207" y1="36" x2="220" y2="36" stroke="CLRR" stroke-width="2"/>` },
];

const accentColor = '#5b8af0';
let selectedId = 1;
let selectedColor = accentColor;
let activeFilter = 'All';

// ── Camera state ──────────────────────────────────────────
let stream = null;
let facingMode = 'user';

async function startCamera() {
  try {
    if (stream) stream.getTracks().forEach(t => t.stop());

    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode, width: { ideal: 1280 }, height: { ideal: 720 } }
    });

    const video = document.getElementById('cameraFeed');
    video.srcObject = stream;
    video.classList.add('active');

    // Mirror only front-facing camera
    video.style.transform = facingMode === 'user' ? 'scaleX(-1)' : 'scaleX(1)';

    document.getElementById('facePlaceholder').style.display = 'none';
    document.getElementById('uploadedPhoto').classList.remove('active');
    setStatus('Live');
  } catch (err) {
    alert('Camera access denied. Please allow camera permissions in your browser settings.');
  }
}

async function flipCamera() {
  facingMode = facingMode === 'user' ? 'environment' : 'user';
  if (stream) await startCamera();
}

function capturePhoto() {
  const video = document.getElementById('cameraFeed');
  if (!video.srcObject) return;

  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  if (facingMode === 'user') {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(video, 0, 0);

  const link = document.createElement('a');
  link.download = 'visionfit-tryon.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function uploadPhoto() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;

    if (stream) {
      stream.getTracks().forEach(t => t.stop());
      stream = null;
      document.getElementById('cameraFeed').classList.remove('active');
    }

    const photo = document.getElementById('uploadedPhoto');
    photo.src = URL.createObjectURL(file);
    photo.classList.add('active');
    document.getElementById('facePlaceholder').style.display = 'none';
    setStatus('Photo Loaded');
  };
  input.click();
}

function setStatus(text) {
  document.getElementById('statusBadge').innerHTML = `<span class="dot"></span> ${text}`;
}

// ── Catalog ───────────────────────────────────────────────
function renderGrid() {
  const visible = activeFilter === 'All'
    ? catalog
    : catalog.filter(g => g.style === activeFilter);

  document.getElementById('glassesGrid').innerHTML = visible.map(g => `
    <div class="glass-card ${g.id === selectedId ? 'active' : ''}" onclick="selectGlass(${g.id})">
      <img class="glass-img" src="${g.img}" alt="${g.name}" loading="lazy">
      <div class="glass-name">${g.name}</div>
      <div class="glass-price">${g.price}</div>
    </div>
  `).join('');
}

function selectGlass(id) {
  selectedId = id;
  const g = catalog.find(x => x.id === id);

  document.getElementById('arGlasses').innerHTML = g.svg.replaceAll('CLRR', selectedColor);
  document.getElementById('prodBrand').textContent = g.brand;
  document.getElementById('prodName').textContent = g.name;
  document.getElementById('prodPrice').textContent = g.price;
  document.getElementById('fitVal').textContent = g.fit + '%';
  document.getElementById('fitBar').style.width = g.fit + '%';
  document.getElementById('fitNote').textContent = g.note;
  document.getElementById('detailList').innerHTML = g.details.map(([k, v]) =>
    `<div class="detail-row"><span class="detail-key">${k}</span><span class="detail-val">${v}</span></div>`
  ).join('');

  renderGrid();
}

document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeFilter = tab.textContent;
    renderGrid();
  });
});

document.querySelectorAll('.swatch').forEach(s => {
  s.addEventListener('click', () => {
    document.querySelectorAll('.swatch').forEach(x => x.classList.remove('active'));
    s.classList.add('active');
    selectedColor = s.dataset.color;
    const g = catalog.find(x => x.id === selectedId);
    document.getElementById('arGlasses').innerHTML = g.svg.replaceAll('CLRR', selectedColor);
  });
});

renderGrid();
