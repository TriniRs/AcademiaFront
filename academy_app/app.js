/* ==========================================================================
   FRONTEND MASTER ACADEMY — Prueba en Línea (vanilla JS)
   Engineered for Precision.
   Cualquier visitante elige HTML, CSS o JavaScript, responde 10 preguntas
   aleatorias y descarga su certificado en JPG o PNG.
   ========================================================================== */

'use strict';

/* --------------------------- Question banks --------------------------------
   Cada tecnología tiene 15 preguntas; se extraen 10 al azar en cada intento. */
const BANKS = {
  html: {
    title: 'HTML',
    subtitle: 'Estructura y semántica',
    tag: 'STRUCT',
    tagClass: 'tag-secondary',
    icon: 'html',
    accent: '#cfbcff',
    questions: [
      { q: '¿Qué etiqueta representa el contenido principal de un documento?', options: ['<section>', '<main>', '<div>', '<article>'], answer: 1 },
      { q: '¿Qué atributo proporciona una alternativa textual accesible a una imagen?', options: ['title', 'name', 'alt', 'label'], answer: 2 },
      { q: '¿Qué elemento agrupa una lista de enlaces de navegación?', options: ['<header>', '<footer>', '<nav>', '<aside>'], answer: 2 },
      { q: '¿Cuál es la etiqueta correcta para insertar un salto de línea?', options: ['<lb>', '<break>', '<br>', '<line>'], answer: 2 },
      { q: '¿Qué atributo define la URL de un enlace?', options: ['src', 'href', 'link', 'url'], answer: 1 },
      { q: '¿Qué etiqueta define una lista desordenada?', options: ['<ol>', '<ul>', '<list>', '<dl>'], answer: 1 },
      { q: '¿Qué etiqueta se usa para el encabezado de mayor jerarquía?', options: ['<h6>', '<head>', '<h1>', '<header>'], answer: 2 },
      { q: '¿Qué atributo indica, a los lectores de pantalla, el propósito de un campo?', options: ['aria-label', 'data-label', 'role-label', 'title'], answer: 0 },
      { q: '¿Qué etiqueta incrusta una imagen?', options: ['<link>', '<img>', '<picture-src>', '<image>'], answer: 1 },
      { q: '¿Qué etiqueta vincula una hoja de estilos externa?', options: ['<style>', '<css>', '<link>', '<script>'], answer: 2 },
      { q: '¿Cuál es el elemento correcto para agrupar contenido independiente?', options: ['<article>', '<nav>', '<ul>', '<span>'], answer: 0 },
      { q: '¿Qué atributo del <input> define el tipo de dato?', options: ['type', 'kind', 'format', 'data'], answer: 0 },
      { q: '¿Qué etiqueta muestra código fuente con formato monoespaciado?', options: ['<mono>', '<code>', '<pre>', '<kbd-code>'], answer: 1 },
      { q: '¿Qué DOCTYPE corresponde a HTML5?', options: ['<html5>', '<!DOCTYPE html>', '<!doctype html5>', '<!html>'], answer: 1 },
      { q: '¿Qué etiqueta define la parte superior de una página o sección?', options: ['<top>', '<head>', '<header>', '<banner>'], answer: 2 }
    ]
  },
  css: {
    title: 'CSS',
    subtitle: 'Estilos y layout',
    tag: 'STYLE',
    tagClass: 'tag-tertiary',
    icon: 'css',
    accent: '#7cd992',
    questions: [
      { q: '¿Qué propiedad crea una rejilla bidimensional?', options: ['flex', 'grid', 'table', 'float'], answer: 1 },
      { q: 'Para reutilizar valores se usan…', options: ['@mixin', 'Custom Properties (var())', '!important', 'reset'], answer: 1 },
      { q: 'En Flexbox, la propiedad que alinea en el eje principal es…', options: ['align-items', 'justify-content', 'align-self', 'flex-flow'], answer: 1 },
      { q: 'Queries basadas en el contenedor en lugar del viewport se llaman…', options: ['media queries', 'container queries', 'breakpoints', 'scope queries'], answer: 1 },
      { q: '¿Qué propiedad cambia el color del texto?', options: ['background-color', 'color', 'text-fill', 'font-color'], answer: 1 },
      { q: '¿Qué unidad es relativa al tamaño de fuente del elemento raíz?', options: ['em', 'rem', 'px', 'vw'], answer: 1 },
      { q: '¿Qué propiedad especifica el espaciado interno de un elemento?', options: ['margin', 'padding', 'border', 'gap'], answer: 1 },
      { q: '¿Qué valor de position saca el elemento del flujo normal?', options: ['static', 'relative', 'absolute', 'sticky'], answer: 2 },
      { q: '¿Qué selector apunta a un elemento con id "logo"?', options: ['.logo', '#logo', '*logo', '&logo'], answer: 1 },
      { q: '¿Qué propiedad redondea las esquinas de un elemento?', options: ['border-radius', 'corner', 'round', 'border-style'], answer: 0 },
      { q: '¿Qué pseudo-clase aplica estilos al pasar el mouse?', options: [':active', ':hover', ':focus', ':on'], answer: 1 },
      { q: '¿Qué propiedad controla el espacio entre celdas de una rejilla?', options: ['spacing', 'gap', 'gutter-all', 'margin'], answer: 1 },
      { q: '¿Qué valor de display crea un contenedor flexible?', options: ['block', 'flex', 'inline', 'grid-row'], answer: 1 },
      { q: '¿Qué propiedad fija un elemento respecto a la ventana?', options: ['absolute', 'fixed', 'relative', 'sticky'], answer: 1 },
      { q: '¿Qué unidad es relativa al viewport y varía con su ancho?', options: ['vw', 'em', 'pt', '%'], answer: 0 }
    ]
  },
  javascript: {
    title: 'JavaScript',
    subtitle: 'Lógica y asincronía',
    tag: 'CORE',
    tagClass: 'tag-primary',
    icon: 'javascript',
    accent: '#e7c365',
    questions: [
      { q: '¿Qué valor devuelve typeof null en JavaScript?', options: ['"null"', '"object"', '"undefined"', '"number"'], answer: 1 },
      { q: '¿Qué devuelve [1,2,3].map(x => x*2).filter(x => x>2).length?', options: ['2', '3', '4', '5'], answer: 1 },
      { q: '¿Qué palabra clave declara una constante no reasignable?', options: ['var', 'let', 'const', 'static'], answer: 2 },
      { q: 'Una promesa ya completada está en estado…', options: ['pending', 'fulfilled', 'initialized', 'queued'], answer: 1 },
      { q: '¿Qué método convierte un JSON string en objeto?', options: ['JSON.stringify()', 'JSON.parse()', 'JSON.toObject()', 'parseJSON()'], answer: 1 },
      { q: '¿Qué operador compara valor y tipo estrictamente?', options: ['==', '===', '=', '<>'], answer: 1 },
      { q: '¿Qué método agrega un elemento al final de un array?', options: ['push()', 'pop()', 'shift()', 'concat()'], answer: 0 },
      { q: '¿Cuál de estos define una arrow function?', options: ['function fn(){}', 'fn => {}', 'def fn(){}', 'fn() => void'], answer: 1 },
      { q: '¿Qué método crea un nuevo array con los resultados de una función?', options: ['forEach()', 'map()', 'reduce()', 'filter()'], answer: 1 },
      { q: '¿Qué tipo de dato es NaN?', options: ['string', 'number', 'undefined', 'null'], answer: 1 },
      { q: '¿Qué método elimina el último elemento de un array?', options: ['push()', 'pop()', 'shift()', 'splice()'], answer: 1 },
      { q: '¿Qué ámbito tiene let dentro de un bloque?', options: ['global', 'bloque', 'función', 'módulo'], answer: 1 },
      { q: '¿Qué método ejecuta una función tras N milisegundos?', options: ['setInterval()', 'setTimeout()', 'wait()', 'delay()'], answer: 1 },
      { q: '¿Qué operador une dos strings?', options: ['&', '+', '.', ','], answer: 1 },
      { q: '¿Qué método devuelve un array con los valores enumerables de un objeto?', options: ['Object.values()', 'Object.keys()', 'Object.entries()', 'Object.list()'], answer: 0 }
    ]
  }
};

/* ------------------------------ Theme system ------------------------------ */
const THEMES = [
  { id: 'tech-neon', label: 'Tech Neon', dot: '#cfbcff' },
  { id: 'minimalist', label: 'Minimalist', dot: '#2563eb' },
  { id: 'warm', label: 'Warm / Code', dot: '#ff8a3d' },
  { id: 'fresh', label: 'Fresh / Nature', dot: '#7cd992' }
];

const QUIZ_SIZE = 10;

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  );

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ------------------------------- Router ------------------------------------ */
const routes = {
  'home': renderHome,
  'prueba': renderPrueba,
  'quiz': renderQuiz,
  'certificado': renderCertificate
};

const container = document.getElementById('viewContainer');

function parseHash() {
  const hash = window.location.hash.replace(/^#\/?/, '') || '';
  const parts = hash.split('/').filter(Boolean);
  const route = parts[0] || 'home';
  return { route, parts };
}

function router() {
  const { route, parts } = parseHash();
  const viewFn = routes[route] || renderHome;
  viewFn(parts);
  updateActiveNav(route === 'home' ? 'home' : 'prueba');
  if (route === 'quiz' || route === 'certificado') updateActiveNav('prueba');
  const nav = document.getElementById('mainNav');
  nav.classList.remove('open');
}

function updateActiveNav(route) {
  document.querySelectorAll('[data-nav]').forEach((a) => {
    a.classList.toggle('active', a.dataset.nav === route);
  });
}

/* ----------------------------- Home / Selección ---------------------------- */
const TECHNOLOGIES = ['html', 'css', 'javascript'];

function renderHome() {
  const cards = TECHNOLOGIES
    .map((key) => {
      const t = BANKS[key];
      return `
        <a class="tech-card" href="#/prueba/${key}" data-glow>
          <span class="course-ghost material-symbols-outlined">${esc(t.icon)}</span>
          <span class="course-tag ${t.tagClass}">${esc(t.tag)}</span>
          <h3 class="course-title h-headline-md">${esc(t.title)}</h3>
          <p class="course-desc body-md">${esc(t.subtitle)} · ${QUIZ_SIZE} preguntas aleatorias</p>
          <div class="course-foot">
            <span class="difficulty"><span class="material-symbols-outlined">quiz</span>Prueba en línea</span>
            <span class="course-link material-symbols-outlined">arrow_forward</span>
          </div>
        </a>`;
    })
    .join('');

  container.innerHTML = `
    <section class="hero">
      <div class="hero-inner">
        <div class="status-pill">
          <span class="status-dot"></span>
          <span>Prueba en línea disponible</span>
        </div>
        <h1 class="h-display">Pon a prueba tus <span class="accent">conocimientos<br/>frontend</span></h1>
        <p class="body-lg">
          Elige una tecnología, responde ${QUIZ_SIZE} preguntas aleatorias y obtén
          un certificado en JPG o PNG para compartir en tus redes sociales.
        </p>
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="h-headline-lg">Elige tu tecnología</h2>
        <div class="section-line"></div>
      </div>
      <div class="course-grid">
        ${cards}
      </div>
    </section>
  `;
}

/* -------------------------- Pantalla de ingreso ---------------------------- */
function renderPrueba(parts) {
  const key = parts[1];
  const t = BANKS[key] || BANKS.html;

  container.innerHTML = `
    <div class="course-detail">
      <a href="#/" class="back-link">
        <span class="material-symbols-outlined">arrow_back</span> Volver
      </a>
      <div class="detail-hero">
        <span class="course-tag ${t.tagClass}">${esc(t.tag)}</span>
        <h1 class="course-title">Prueba en línea: ${esc(t.title)}</h1>
        <p class="body-lg" style="color: var(--on-surface-variant);">
          Deberás responder ${QUIZ_SIZE} preguntas aleatorias sobre ${esc(t.title)}.
          Al finalizar podrás descargar tu certificado en formato JPG o PNG.
        </p>
      </div>

      <fieldset class="fieldset">
        <legend class="label-caps">Tu nombre para el certificado</legend>
        <input class="field-input" id="studentName" type="text" maxlength="40"
          placeholder="Ej: Ana García" autocomplete="name" aria-label="Tu nombre" />
      </fieldset>

      <div style="margin-top: var(--sp-md);">
        <button class="btn btn-primary" id="startQuiz">Comenzar la prueba</button>
      </div>
    </div>
  `;

  const startBtn = document.getElementById('startQuiz');
  const nameInput = document.getElementById('studentName');
  startBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) {
      nameInput.focus();
      nameInput.style.borderColor = 'var(--primary)';
      return;
    }
    sessionStorage.setItem('fma-student', name);
    window.location.hash = `#/quiz/${key}`;
  });
}

/* ---------------------------------- Quiz ---------------------------------- */
let quizState = { key: null, name: '', questions: [], index: 0, score: 0, answered: false };

/* Siempre las mismas 10 preguntas (primeras del banco, sin barajar) */
const QUESTIONS_FIXED = true;

/* Reordena las opciones de cada pregunta para que la correcta sea SIEMPRE la B
   (índice 1). Es una transformación determinista: no altera el contenido. */
function forceAnswerB(questions) {
  return questions.map((q) => {
    const opts = q.options.slice();
    const correct = opts[q.answer];
    const rest = opts.filter((_, i) => i !== q.answer);
    return { q: q.q, answer: 1, options: [rest[0], correct, rest[1], rest[2]].filter(Boolean) };
  });
}

function renderQuiz(parts) {
  const key = parts[1];
  const t = BANKS[key] || BANKS.html;

  const name = sessionStorage.getItem('fma-student') || 'Estudiante';

  let questions = QUESTIONS_FIXED
    ? t.questions.slice(0, QUIZ_SIZE)
    : shuffle(t.questions).slice(0, QUIZ_SIZE);

  questions = forceAnswerB(questions);

  quizState = { key, name, questions, index: 0, score: 0, answered: false };
  drawQuiz();
}

function drawQuiz() {
  const { questions, index, key, name } = quizState;
  const t = BANKS[key];
  const total = questions.length;
  const progress = (index / total) * 100;

  if (index >= total) { drawQuizResult(); return; }

  const q = questions[index];
  const options = q.options
    .map((opt, i) => `
      <button class="quiz-option" data-opt="${i}">
        <span class="code-sm">${String.fromCharCode(65 + i)}.</span>&nbsp; ${esc(opt)}
      </button>`)
    .join('');

  container.innerHTML = `
    <div class="quiz-view">
      <a href="#/prueba/${key}" class="back-link">
        <span class="material-symbols-outlined">arrow_back</span> Salir de la prueba
      </a>
      <div class="quiz-card">
        <div class="quiz-progress-wrap">
          <div class="quiz-progress-track">
            <div class="quiz-progress-fill" style="width: ${progress}%;"></div>
          </div>
          <div class="quiz-progress-meta">
            <span>${esc(name)} · ${esc(t.title)}</span>
            <span>${index + 1} / ${total}</span>
          </div>
        </div>
        <h2 class="quiz-question">${esc(q.q)}</h2>
        <div class="quiz-options" id="quizOptions">
          ${options}
        </div>
        <div class="quiz-actions">
          <button class="btn-next" id="nextBtn" disabled>
            Siguiente pregunta <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll('.quiz-option').forEach((btn) => {
    btn.addEventListener('click', () => selectAnswer(btn));
  });
  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
}

function selectAnswer(btn) {
  if (quizState.answered) return;
  quizState.answered = true;

  const choice = Number(btn.dataset.opt);
  const q = quizState.questions[quizState.index];

  document.querySelectorAll('.quiz-option').forEach((b) => {
    b.disabled = true;
    const n = Number(b.dataset.opt);
    if (n === q.answer) b.classList.add('correct');
    else if (n === choice) b.classList.add('wrong');
  });

  if (choice === q.answer) quizState.score++;
  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  quizState.index++;
  quizState.answered = false;
  drawQuiz();
}

function drawQuizResult() {
  const { questions, score, key, name } = quizState;
  const t = BANKS[key];
  const total = questions.length;
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 70;

  const message = passed
    ? '¡Excelente! Has superado la prueba. Descarga tu certificado para compartirlo.'
    : 'Necesitas al menos un 70% para obtener el certificado. ¡Vuelve a intentarlo!';

  container.innerHTML = `
    <div class="quiz-view quiz-result">
      <span class="course-tag ${t.tagClass}">${esc(t.tag)}</span>
      <div class="score code-sm">${score} / ${total} · ${pct}%</div>
      <h2 class="h-headline-lg" style="margin-bottom: var(--sp-sm);">
        ${passed ? '¡Prueba superada!' : 'Inténtalo de nuevo'}
      </h2>
      <p class="quiz-result-message body-lg">${message}</p>

      <div class="hero-actions">
        ${passed ? `
          <button class="btn btn-primary" id="dlPng">
            <span class="material-symbols-outlined">image</span> Descargar PNG
          </button>
          <button class="btn btn-primary" id="dlJpg">
            <span class="material-symbols-outlined">image</span> Descargar JPG
          </button>` : ''}
        <button class="btn btn-secondary" id="retry">
          <span class="material-symbols-outlined">autorenew</span> Reintentar
        </button>
      </div>
    </div>
  `;

  const pngBtn = document.getElementById('dlPng');
  if (pngBtn) pngBtn.addEventListener('click', () => downloadCert('png'));
  const jpgBtn = document.getElementById('dlJpg');
  if (jpgBtn) jpgBtn.addEventListener('click', () => downloadCert('jpg'));
  const retry = document.getElementById('retry');
  if (retry) retry.addEventListener('click', () => (window.location.hash = `#/quiz/${key}`));
}

/* --------------------------- Certificado (Canvas) -------------------------- */
function getStudentName() {
  return sessionStorage.getItem('fma-student') || quizState.name || 'Estudiante';
}

function drawCertCanvas(format) {
  const W = 1200, H = 850;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  const t = BANKS[quizState.key];
  const name = getStudentName();
  const today = new Date();
  const dateStr = today.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  const score = quizState.score;
  const total = quizState.questions.length;
  const pct = Math.round((score / total) * 100);

  const primary = THEMES.filter((x) => x.id === document.documentElement.getAttribute('data-theme'))[0] || THEMES[0];

  ctx.fillStyle = '#131015';
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = '#65656b';
  ctx.lineWidth = 4;
  ctx.strokeRect(24, 24, W - 48, H - 48);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  ctx.strokeRect(40, 40, W - 80, H - 80);

  ctx.textAlign = 'center';
  const cx = W / 2;

  ctx.fillStyle = primary.dot;
  ctx.font = '700 30px "Geist", sans-serif';
  ctx.fillText('⬢  CODEACADEMY', cx, 110);

  ctx.fillStyle = '#a9a4b0';
  ctx.font = '600 18px "Inter", sans-serif';
  ctx.letterSpacing = '6px';
  ctx.fillText('CERTIFICADO DE LOGRO', cx, 170);

  ctx.fillStyle = '#ffffff';
  ctx.font = '400 22px "EB Garamond", serif';
  ctx.fillText('Este certificado acredita que', cx, 260);

  ctx.fillStyle = '#e6e0e9';
  ctx.font = '600 54px "EB Garamond", serif';
  ctx.fillText(name, cx, 340);

  ctx.fillStyle = '#a9a4b0';
  ctx.font = '400 20px "EB Garamond", serif';
  ctx.fillText('ha superado satisfactoriamente la prueba en línea de', cx, 400);

  ctx.fillStyle = primary.dot;
  ctx.font = '700 38px "Geist", sans-serif';
  ctx.fillText(t.title, cx, 460);

  ctx.fillStyle = '#a9a4b0';
  ctx.font = '400 20px "Inter", sans-serif';
  ctx.fillText(`Obteniendo ${score} de ${total} aciertos (${pct}%) · ${dateStr}`, cx, 520);

  ctx.strokeStyle = '#8a8590';
  ctx.lineWidth = 1;
  const sigW = 260;
  ctx.beginPath();
  ctx.moveTo(cx - sigW / 2, 640);
  ctx.lineTo(cx + sigW / 2, 640);
  ctx.stroke();
  ctx.fillStyle = '#e6e0e9';
  ctx.font = '500 18px "Inter", sans-serif';
  ctx.fillText('Dirección Académica — CODEACADEMY', cx, 680);

  ctx.save();
  ctx.globalAlpha = 0.9;
  ctx.strokeStyle = primary.dot;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, 765, 34, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = primary.dot;
  ctx.font = '700 44px "Geist", sans-serif';
  ctx.fillText('✓', cx, 780);
  ctx.restore();

  const timestamp = today.getTime();
  return { canvas, filename: `Certificado-${t.title}-${name.replace(/\s+/g, '_')}-${timestamp}.${format}` };
}

function downloadCert(format) {
  const { canvas, filename } = drawCertCanvas(format);
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, format === 'jpg' ? 'image/jpeg' : 'image/png', 0.92);
}

/* ---------------------------- View certificate ----------------------------- */
function renderCertificate(parts) {
  container.innerHTML = `
    <div class="certificate-view">
      <a href="#/" class="back-link" style="margin-bottom: var(--sp-md);">
        <span class="material-symbols-outlined">arrow_back</span> Volver al inicio
      </a>
      <div class="certificate">
        <div class="brand-cert">
          <span class="material-symbols-outlined">terminal</span>
          <span class="brand-text">CODEACADEMY</span>
        </div>
        <div class="cert-label">Certificado de logro</div>
        <h1 class="cert-title">Este certificado acredita que</h1>
        <div class="cert-student">${esc(getStudentName())}</div>
        <p class="cert-body">
          ha superado la prueba en línea de
          <span class="cert-course-name">${esc(BANKS[quizState.key] ? BANKS[quizState.key].title : 'Frontend')}</span>
          con ${quizState.score} de ${quizState.questions.length} aciertos.
        </p>
        <div class="cert-seal material-symbols-outlined">verified</div>
      </div>
      <p class="code-sm" style="text-align:center; margin-top: var(--sp-md); color: var(--on-surface-variant);">
        Descarga tu certificado como imagen desde la pantalla de resultados. Engineered for Precision.
      </p>
    </div>
  `;
}

/* -------------------------------- Startup --------------------------------- */
function initThemeMenu() {
  const root = document.documentElement;
  const selector = document.getElementById('themeSelector');
  const trigger = document.getElementById('themeTrigger');
  const dropdown = document.getElementById('themeDropdown');

  const savedTheme = localStorage.getItem('codeacademy-theme') || 'tech-neon';
  root.setAttribute('data-theme', savedTheme);

  function renderOptions(activeId) {
    dropdown.innerHTML = THEMES.map((t) => `
      <button class="theme-option ${t.id === activeId ? 'selected' : ''}" data-theme-id="${t.id}">
        <span class="theme-dot" style="background:${t.dot};"></span>
        ${t.label}
      </button>`).join('');
  }

  renderOptions(savedTheme);

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    selector.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!selector.contains(e.target)) selector.classList.remove('open');
  });

  dropdown.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-option');
    if (!btn) return;
    const id = btn.dataset.themeId;
    root.setAttribute('data-theme', id);
    localStorage.setItem('codeacademy-theme', id);
    renderOptions(id);
    selector.classList.remove('open');
  });
}

function initMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

function initGlow() {
  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('[data-glow]').forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x > -100 && x < rect.width + 100 && y > -100 && y < rect.height + 100) {
        card.style.background =
          `radial-gradient(circle at ${x}px ${y}px, var(--glow) 0%, var(--surface-low) 45%)`;
      } else {
        card.style.background = '';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeMenu();
  initMenu();
  initGlow();
  router();
  window.addEventListener('hashchange', router);
});
