// Fe Diaria — lógica de la app. El contenido vive en data/*.js.

const UI = {
  es: {
    title: "Fe Diaria",
    tabs: { hoy: "Hoy", ruta: "Mi ruta", servicio: "Servicio", biblia: "La Biblia" },
    module: "Módulo", lesson: "Lección", of: "de",
    read: "Lee hoy", fact: "Dato curioso", myAnswer: "Mi respuesta",
    answerPh: "Escribe aquí lo que Dios te habla… (se guarda solo en este dispositivo)",
    saved: "Guardado ✓", reflect: "Reflexión",
    markDone: "✓ Marcar como leída", done: "✓ Leída", listen: "🔊 Escuchar", stop: "⏹ Detener", share: "WhatsApp",
    prev: "◀", next: "▶", mine: "Mi lección",
    streak: n => n === 1 ? "🔥 1 día seguido" : `🔥 ${n} días seguidos`,
    progress: (a, b) => `${a}/${b}`,
    allDone: "🎉 ¡Completaste toda la ruta! Puedes repasar cualquier lección.",
    routeIntro: "Un camino de lo básico a lo profundo. Avanza a tu ritmo: una lección al día.",
    weekService: "Servicio de la semana",
    badge: "Servicio de la semana", key: "Lo más importante", watch: "▶ Ver el servicio completo",
    passage: "Pasaje", prayer: "Oración", archive: "Servicios anteriores",
    church: "Servicios de la iglesia", churchBtn: "Ver todos los servicios", churchNote: "Los servicios grabados de WWJD Church.",
    bibleTitle: "La Biblia en breve", bibleSub: "Lo básico y fundamental", books: "Los 66 libros, en orden",
    fontDown: "Letra más pequeña", fontUp: "Letra más grande",
    theme: { auto: "Tema: automático", light: "Tema: claro", dark: "Tema: oscuro" },
    shareFooter: "Fe Diaria",
    footer: "Un poco cada día. Dios es fiel."
  },
  en: {
    title: "Faith Daily",
    tabs: { hoy: "Today", ruta: "My path", servicio: "Service", biblia: "The Bible" },
    module: "Module", lesson: "Lesson", of: "of",
    read: "Read today", fact: "Fun fact", myAnswer: "My answer",
    answerPh: "Write what God is saying to you… (saved only on this device)",
    saved: "Saved ✓", reflect: "Reflection",
    markDone: "✓ Mark as read", done: "✓ Read", listen: "🔊 Listen", stop: "⏹ Stop", share: "WhatsApp",
    prev: "◀", next: "▶", mine: "My lesson",
    streak: n => n === 1 ? "🔥 1 day in a row" : `🔥 ${n} days in a row`,
    progress: (a, b) => `${a}/${b}`,
    allDone: "🎉 You finished the whole path! Feel free to review any lesson.",
    routeIntro: "A path from the basics to the deep things. Go at your pace: one lesson a day.",
    weekService: "This week's service",
    badge: "This week's service", key: "Key points", watch: "▶ Watch the full service",
    passage: "Passage", prayer: "Prayer", archive: "Past services",
    church: "Church services", churchBtn: "See all services", churchNote: "Recorded services from WWJD Church.",
    bibleTitle: "The Bible at a glance", bibleSub: "The basics", books: "The 66 books, in order",
    fontDown: "Smaller text", fontUp: "Larger text",
    theme: { auto: "Theme: automatic", light: "Theme: light", dark: "Theme: dark" },
    shareFooter: "Faith Daily",
    footer: "A little every day. God is faithful."
  }
};

const THEMES = ["auto", "light", "dark"];
const FONT_STEPS = [0.9, 1, 1.1, 1.2, 1.35];

// ── Storage (por dispositivo) ──
function load(key, fallback) {
  try { const v = localStorage.getItem("fe:" + key); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem("fe:" + key, JSON.stringify(value)); } catch (e) {}
}

const state = {
  lang: load("lang", "es"),
  tab: load("tab", "hoy"),
  done: load("done", {}),     // { lessonId: "YYYY-MM-DD" }
  notes: load("notes", {}),   // { lessonId: "texto" }
  font: load("font", 1),
  theme: load("theme", "auto"),
  idx: 0
};
state.idx = firstUnread();

let speaking = false;

// ── Helpers ──
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function iso(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }
function todayISO() { return iso(new Date()); }
function firstUnread() {
  const i = LESSONS.findIndex(l => !state.done[l.id]);
  return i === -1 ? 0 : i;
}
function doneCount() { return LESSONS.filter(l => state.done[l.id]).length; }
function streak() {
  const days = new Set(Object.values(state.done));
  const d = new Date(); d.setHours(12, 0, 0, 0);
  if (!days.has(iso(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (days.has(iso(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function moduleOf(l) { return MODULES.findIndex(m => m.id === l.m); }
function verseText(L) { return state.lang === "es" ? L.v.es : L.v.en; }
function verseRef(L) { return state.lang === "es" ? L.v.ref : L.v.ref_en; }
function readUrl(L) {
  const version = state.lang === "es" ? "RVR1960" : "NIV";
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(L.leer.en)}&version=${version}`;
}

// ── Render ──
function render() {
  const t = UI[state.lang];
  document.documentElement.lang = state.lang;
  document.documentElement.style.setProperty("--scale", state.font);
  if (state.theme === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", state.theme);

  document.title = t.title;
  document.getElementById("title").textContent = t.title;
  document.querySelectorAll('[data-action="lang"]').forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)));
  document.getElementById("font-down").setAttribute("aria-label", t.fontDown);
  document.getElementById("font-down").title = t.fontDown;
  document.getElementById("font-up").setAttribute("aria-label", t.fontUp);
  document.getElementById("font-up").title = t.fontUp;
  const themeBtn = document.getElementById("theme-btn");
  themeBtn.textContent = { auto: "◐", light: "☀", dark: "☾" }[state.theme];
  themeBtn.title = t.theme[state.theme];
  themeBtn.setAttribute("aria-label", t.theme[state.theme]);

  for (const tab of Object.keys(t.tabs)) {
    const b = document.getElementById("tab-" + tab);
    b.textContent = t.tabs[tab];
    b.setAttribute("aria-selected", String(tab === state.tab));
    document.getElementById("panel-" + tab).hidden = tab !== state.tab;
  }

  renderHoy();
  renderRuta();
  renderServicio();
  renderBiblia();
  document.getElementById("footer").textContent = t.footer;
}

function renderHoy() {
  const t = UI[state.lang], lang = state.lang, L = LESSONS[state.idx];
  const mi = moduleOf(L), M = MODULES[mi];
  const isDone = !!state.done[L.id];
  const total = LESSONS.length, n = doneCount(), s = streak();
  const date = new Intl.DateTimeFormat(lang === "es" ? "es-CO" : "en-US", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
  const canSpeak = "speechSynthesis" in window;
  const S = SERVICIOS[0];

  document.getElementById("panel-hoy").innerHTML = `
    <div class="status">
      <span class="date">${esc(date)}</span>
      ${s ? `<span class="streak">${t.streak(s)}</span>` : ""}
      <div class="bar" aria-hidden="true"><span style="width:${(n / total) * 100}%"></span></div>
      <span>${t.progress(n, total)}</span>
    </div>
    ${n === total ? `<p class="card small">${t.allDone}</p>` : ""}
    <article class="card">
      <p class="eyebrow">${M.icon} ${t.module} ${mi + 1} · ${esc(M.t[lang])} · ${t.lesson} ${state.idx + 1} ${t.of} ${total}</p>
      <h2>${esc(L.tema[lang])}</h2>
      <p>${esc(L.idea[lang])}</p>
      <blockquote class="verse">“${esc(verseText(L))}”<cite>— ${esc(verseRef(L))}</cite></blockquote>
      <a class="read-link" href="${readUrl(L)}" target="_blank" rel="noopener">📖 ${t.read}: ${esc(L.leer[lang])} ↗</a>
      <div class="question"><b>${t.reflect}:</b> ${esc(L.pregunta[lang])}</div>
      <details class="more"><summary>💡 ${t.fact}</summary><div class="fact">${esc(L.dato[lang])}</div></details>
      <details class="more" ${state.notes[L.id] ? "open" : ""}><summary>✍️ ${t.myAnswer}</summary>
        <div><textarea id="note" placeholder="${esc(t.answerPh)}">${esc(state.notes[L.id] || "")}</textarea><p class="saved" id="saved"></p></div>
      </details>
      <div class="actions">
        <button class="btn primary ${isDone ? "is-done" : ""}" data-action="done">${isDone ? t.done : t.markDone}</button>
        ${canSpeak ? `<button class="btn" data-action="listen" id="listen">${speaking ? t.stop : t.listen}</button>` : ""}
        <a class="btn wa" href="${waLink()}" target="_blank" rel="noopener">${t.share}</a>
      </div>
    </article>
    <nav class="pager">
      <button class="btn" data-action="go" data-step="-1" aria-label="${t.lesson} −1" ${state.idx === 0 ? "disabled" : ""}>${t.prev}</button>
      <button class="btn" data-action="mine">${t.mine}</button>
      <button class="btn" data-action="go" data-step="1" aria-label="${t.lesson} +1" ${state.idx === total - 1 ? "disabled" : ""}>${t.next}</button>
    </nav>
    ${S ? `<button class="teaser" data-tab="servicio"><span>⛪ ${t.weekService}: <b>${esc(S.titulo[lang])}</b></span><span aria-hidden="true">→</span></button>` : ""}`;

  const note = document.getElementById("note");
  let timer;
  note.addEventListener("input", () => {
    const v = note.value;
    if (v.trim()) state.notes[L.id] = v; else delete state.notes[L.id];
    save("notes", state.notes);
    clearTimeout(timer);
    const el = document.getElementById("saved");
    el.textContent = t.saved;
    timer = setTimeout(() => { el.textContent = ""; }, 1500);
  });
}

function renderRuta() {
  const t = UI[state.lang], lang = state.lang;
  document.getElementById("panel-ruta").innerHTML = `
    <p class="muted">${t.routeIntro}</p>
    ${MODULES.map((M, mi) => {
      const items = LESSONS.map((l, j) => [l, j]).filter(([l]) => l.m === M.id);
      const n = items.filter(([l]) => state.done[l.id]).length;
      return `<section class="card">
        <div class="mod-head"><span class="mod-icon" aria-hidden="true">${M.icon}</span>
          <div><p class="eyebrow">${t.module} ${mi + 1} · ${n}/${items.length}</p>
          <h2>${esc(M.t[lang])}</h2><p class="muted">${esc(M.d[lang])}</p></div></div>
        <div class="bar" aria-hidden="true"><span style="width:${(n / items.length) * 100}%"></span></div>
        <ol class="les">${items.map(([l, j]) => {
          const d = !!state.done[l.id];
          return `<li><button class="les-btn ${d ? "done" : ""} ${j === state.idx ? "current" : ""}" data-action="open" data-idx="${j}">
            <span class="chk">${d ? "✓" : j + 1}</span><span>${esc(l.tema[lang])}</span></button></li>`;
        }).join("")}</ol>
      </section>`;
    }).join("")}`;
}

function serviceBody(S) {
  const t = UI[state.lang], lang = state.lang;
  return `<p class="meta">${esc(S.fecha[lang])} · ${esc(S.serie[lang])} · ${t.passage}: ${esc(S.pasaje[lang])}</p>
    <p>${esc(S.idea[lang])}</p>
    <b>${t.key}:</b><ol>${S.puntos[lang].map(p => `<li>${esc(p)}</li>`).join("")}</ol>
    <blockquote class="verse">${esc(S.versiculo[lang])}</blockquote>
    <div class="question"><b>${t.reflect}:</b> ${esc(S.pregunta[lang])}</div>
    <p class="prayer"><b>${t.prayer}:</b> ${esc(S.oracion[lang])}</p>
    <a class="btn red" href="${esc(S.video)}" target="_blank" rel="noopener">${t.watch}</a>`;
}

function renderServicio() {
  const t = UI[state.lang], lang = state.lang;
  const [S, ...past] = SERVICIOS;
  document.getElementById("panel-servicio").innerHTML = `
    ${S ? `<article class="card service"><span class="badge">${t.badge}</span><h2>${esc(S.titulo[lang])}</h2>${serviceBody(S)}</article>` : ""}
    ${past.length ? `<section class="card archive"><h2>${t.archive}</h2>
      ${past.map(P => `<details><summary>${esc(P.fecha[lang])} · ${esc(P.titulo[lang])}</summary>${serviceBody(P)}</details>`).join("")}</section>` : ""}
    <section class="card" style="text-align:center">
      <h2>${t.church}</h2>
      <a class="btn red" href="${esc(CHURCH_URL)}" target="_blank" rel="noopener">${t.churchBtn}</a>
      <p class="small">${t.churchNote}</p>
    </section>`;
}

function renderBiblia() {
  const t = UI[state.lang], lang = state.lang;
  document.getElementById("panel-biblia").innerHTML = `
    <section class="card">
      <h2>📖 ${t.bibleTitle}</h2><p class="muted" style="margin:0">${t.bibleSub}</p>
      <div class="stats">${BIBLE.stats.map(s => `<div class="stat"><b>${esc(s.n)}</b><span>${esc(s[lang])}</span></div>`).join("")}</div>
      <div class="faq">${BIBLE.faq.map(f => `<details><summary>${esc(f.q[lang])}</summary><p>${esc(f.a[lang])}</p></details>`).join("")}</div>
    </section>
    <section class="card">
      <h2>${t.books}</h2>
      ${BIBLE.groups.map(g => `<div class="grp"><b>${esc(g.t[lang])}</b>${esc(g[lang])}</div>`).join("")}
    </section>`;
}

// ── Acciones ──
function stopSpeaking() {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  speaking = false;
}

function toggleListen() {
  const t = UI[state.lang];
  if (speaking) { stopSpeaking(); render(); return; }
  const L = LESSONS[state.idx], lang = state.lang;
  const text = [L.tema[lang], L.idea[lang], verseText(L), verseRef(L), L.pregunta[lang]].join(". ");
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === "es" ? "es-ES" : "en-US";
  const voice = speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith(lang));
  if (voice) u.voice = voice;
  u.rate = 0.95;
  u.onend = u.onerror = () => {
    speaking = false;
    const b = document.getElementById("listen");
    if (b) b.textContent = t.listen;
  };
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
  speaking = true;
  document.getElementById("listen").textContent = t.stop;
}

// Enlace real (no window.open) para que funcione también dentro del enlace publicado.
function waLink() {
  const L = LESSONS[state.idx], lang = state.lang, t = UI[lang];
  const text = `*${L.tema[lang]}*\n\n“${verseText(L)}”\n— ${verseRef(L)}\n\n${t.reflect}: ${L.pregunta[lang]}\n\n${t.shareFooter}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

function goTo(i, tab) {
  stopSpeaking();
  state.idx = Math.max(0, Math.min(LESSONS.length - 1, i));
  if (tab) { state.tab = tab; save("tab", tab); }
  render();
  window.scrollTo({ top: 0 });
}

document.addEventListener("click", e => {
  const tabBtn = e.target.closest("[data-tab]");
  if (tabBtn) {
    state.tab = tabBtn.dataset.tab; save("tab", state.tab);
    render(); window.scrollTo({ top: 0 });
    return;
  }
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const L = LESSONS[state.idx];
  switch (el.dataset.action) {
    case "lang":
      stopSpeaking(); state.lang = el.dataset.lang; save("lang", state.lang); render(); break;
    case "font": {
      const i = FONT_STEPS.indexOf(state.font);
      const next = FONT_STEPS[Math.max(0, Math.min(FONT_STEPS.length - 1, (i === -1 ? 1 : i) + Number(el.dataset.step)))];
      state.font = next; save("font", next); render(); break;
    }
    case "theme":
      state.theme = THEMES[(THEMES.indexOf(state.theme) + 1) % THEMES.length]; save("theme", state.theme); render(); break;
    case "done":
      if (state.done[L.id]) delete state.done[L.id]; else state.done[L.id] = todayISO();
      save("done", state.done); render(); break;
    case "listen": toggleListen(); break;
    case "go": goTo(state.idx + Number(el.dataset.step)); break;
    case "mine": goTo(firstUnread()); break;
    case "open": goTo(Number(el.dataset.idx), "hoy"); break;
  }
});

render();
