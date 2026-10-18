// Fe Diaria — lógica de la app. El contenido vive en data/*.js; la conexión familiar en config.js.

const UI = {
  es: {
    title: "Fe Diaria",
    tabs: { hoy: "Hoy", ruta: "Mi ruta", familia: "Familia", servicio: "Servicio", biblia: "La Biblia" },
    module: "Módulo", lesson: "Lección", of: "de",
    read: "Lee hoy", fact: "Dato curioso", myAnswer: "Mi respuesta",
    answerPh: "Escribe aquí lo que Dios te habla… (se guarda solo en este dispositivo)",
    answerPhCloud: "Escribe aquí lo que Dios te habla… (solo tú puedes verlo)",
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
    footer: "Un poco cada día. Dios es fiel.",
    // Familia
    whoReads: "¿Quién lee hoy?",
    loading: "Cargando…",
    hello: n => `Hola, ${n} 👋`,
    enterPin: "Escribe tu PIN.",
    createPin: n => `${n}, crea tu PIN`,
    createPinHelp: "Elige de 4 a 6 números. Lo usarás para entrar desde cualquier dispositivo.",
    pinConfirm: "Repite el PIN",
    enter: "Entrar",
    notMe: "No soy yo",
    switchUser: "Cambiar de persona",
    leaveFamily: "Usar sin cuenta en este dispositivo",
    leaveConfirm: "¿Salir de la familia en este dispositivo? Tu avance queda guardado en la nube.",
    joinFamily: "¿Tienes un código de familia?",
    joinPrompt: "Escribe el código de familia:",
    errors: {
      wrong_pin: "PIN incorrecto.", locked: "Demasiados intentos. Espera 10 minutos.",
      invalid_pin_format: "El PIN debe tener de 4 a 6 números.", mismatch: "Los PIN no coinciden.",
      invalid_member: "No encontramos a esa persona.", invalid_family: "Ese código de familia no existe.",
      network: "Sin conexión. Intenta de nuevo."
    },
    offline: "Sin conexión: se guardará cuando vuelva internet.",
    sessionEnded: "Tu sesión terminó. Vuelve a entrar.",
    importAsk: (n, who) => `Este dispositivo tiene ${n} lección(es) leídas sin cuenta. ¿Pasarlas al avance de ${who}?`,
    boardIntro: "Así va cada uno. ¡Anímense entre ustedes!",
    you: "(tú)",
    goingOn: "Va en",
    finished: "¡Terminó la ruta! 🎉",
    lastRead: "Última lectura",
    today: "hoy", yesterday: "ayer", notStarted: "aún no empieza",
    invite: "Invitar a la familia",
    inviteHelp: "Comparte este enlace solo con tu familia: con él entran y eligen su nombre.",
    inviteBtn: "Enviar enlace por WhatsApp",
    inviteText: url => `Únete a Fe Diaria con la familia: ${url}`
  },
  en: {
    title: "Faith Daily",
    tabs: { hoy: "Today", ruta: "My path", familia: "Family", servicio: "Service", biblia: "The Bible" },
    module: "Module", lesson: "Lesson", of: "of",
    read: "Read today", fact: "Fun fact", myAnswer: "My answer",
    answerPh: "Write what God is saying to you… (saved only on this device)",
    answerPhCloud: "Write what God is saying to you… (only you can see it)",
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
    footer: "A little every day. God is faithful.",
    whoReads: "Who's reading today?",
    loading: "Loading…",
    hello: n => `Hi, ${n} 👋`,
    enterPin: "Enter your PIN.",
    createPin: n => `${n}, create your PIN`,
    createPinHelp: "Choose 4 to 6 digits. You'll use it to sign in from any device.",
    pinConfirm: "Repeat the PIN",
    enter: "Enter",
    notMe: "That's not me",
    switchUser: "Switch person",
    leaveFamily: "Use without an account on this device",
    leaveConfirm: "Leave the family on this device? Your progress stays saved in the cloud.",
    joinFamily: "Have a family code?",
    joinPrompt: "Enter the family code:",
    errors: {
      wrong_pin: "Wrong PIN.", locked: "Too many attempts. Wait 10 minutes.",
      invalid_pin_format: "The PIN must be 4 to 6 digits.", mismatch: "The PINs don't match.",
      invalid_member: "We couldn't find that person.", invalid_family: "That family code doesn't exist.",
      network: "No connection. Try again."
    },
    offline: "Offline: it will be saved when you're back online.",
    sessionEnded: "Your session ended. Please sign in again.",
    importAsk: (n, who) => `This device has ${n} lesson(s) read without an account. Move them to ${who}'s progress?`,
    boardIntro: "Here's how everyone is doing. Cheer each other on!",
    you: "(you)",
    goingOn: "On",
    finished: "Finished the path! 🎉",
    lastRead: "Last read",
    today: "today", yesterday: "yesterday", notStarted: "not started yet",
    invite: "Invite the family",
    inviteHelp: "Share this link only with your family: they open it and pick their name.",
    inviteBtn: "Send link on WhatsApp",
    inviteText: url => `Join Faith Daily with the family: ${url}`
  }
};

const THEMES = ["auto", "light", "dark"];
const FONT_STEPS = [0.9, 1, 1.1, 1.2, 1.35];
const AVATAR_COLORS = ["#2e4a6b", "#b5523b", "#3f7d58", "#8a5aa8", "#c28a1e", "#2f7f8f"];
const CLOUD_ON = typeof CLOUD !== "undefined" && !!CLOUD.url && !!CLOUD.anonKey;

// ── Storage (por dispositivo) ──
function load(key, fallback) {
  try { const v = localStorage.getItem("fe:" + key); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem("fe:" + key, JSON.stringify(value)); } catch (e) {}
}
function forget(key) {
  try { localStorage.removeItem("fe:" + key); } catch (e) {}
}

const state = {
  lang: load("lang", "es"),
  tab: load("tab", "hoy"),
  font: load("font", 1),
  theme: load("theme", "auto"),
  family: CLOUD_ON ? load("family", null) : null,   // código de familia
  familyName: load("familyName", ""),
  members: load("members", []),                    // [{id, name, label, has_pin, done}]
  session: CLOUD_ON ? load("session", null) : null, // {token, id, name}
  queue: load("queue", []),                        // cambios pendientes de subir
  gate: null,                                      // {step: "who"} | {step: "pin", id}
  gateError: "",
  done: {},     // { lessonId: "YYYY-MM-DD" }
  notes: {},    // { lessonId: "texto" }
  idx: 0
};

let speaking = false;

// El progreso se guarda por persona cuando hay sesión; si no, en el dispositivo.
function pk(key) { return state.session ? `m:${state.session.id}:${key}` : key; }
function loadProgress() {
  state.done = load(pk("done"), {});
  state.notes = load(pk("notes"), {});
  state.idx = firstUnread();
}
function saveProgress() {
  save(pk("done"), state.done);
  save(pk("notes"), state.notes);
}

// ── Helpers ──
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function iso(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }
function todayISO() { return iso(new Date()); }
function firstUnreadOf(done) { return LESSONS.findIndex(l => !done[l.id]); }
function firstUnread() { const i = firstUnreadOf(state.done); return i === -1 ? 0 : i; }
function countOf(done) { return LESSONS.filter(l => done[l.id]).length; }
function doneCount() { return countOf(state.done); }
function streakOf(done) {
  const days = new Set(Object.values(done));
  const d = new Date(); d.setHours(12, 0, 0, 0);
  if (!days.has(iso(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (days.has(iso(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function streak() { return streakOf(state.done); }
function moduleOf(l) { return MODULES.findIndex(m => m.id === l.m); }
function verseText(L) { return state.lang === "es" ? L.v.es : L.v.en; }
function verseRef(L) { return state.lang === "es" ? L.v.ref : L.v.ref_en; }
function readUrl(L) {
  const version = state.lang === "es" ? "RVR1960" : "NIV";
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(L.leer.en)}&version=${version}`;
}
function familyMode() { return CLOUD_ON && !!state.family; }
function needsLogin() { return familyMode() && !state.session; }
function memberIndex(id) { return state.members.findIndex(m => m.id === id); }
function avatar(m, size = "") {
  const i = Math.max(0, memberIndex(m.id));
  return `<span class="avatar ${size}" style="--av:${AVATAR_COLORS[i % AVATAR_COLORS.length]}" aria-hidden="true">${esc((m.name || "?").charAt(0).toUpperCase())}</span>`;
}
function memberLabel(m) {
  const l = m.label && m.label[state.lang];
  return l && l !== m.name ? l : "";
}
function relDay(isoDay) {
  const t = UI[state.lang];
  if (!isoDay) return t.notStarted;
  const d = new Date(); d.setHours(12, 0, 0, 0);
  if (isoDay === iso(d)) return t.today;
  d.setDate(d.getDate() - 1);
  if (isoDay === iso(d)) return t.yesterday;
  const [y, mo, da] = isoDay.split("-").map(Number);
  return new Intl.DateTimeFormat(state.lang === "es" ? "es-CO" : "en-US", { day: "numeric", month: "short" }).format(new Date(y, mo - 1, da));
}
let toastTimer;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg; el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 3500);
}

// ── Nube (Supabase, vía funciones fd_*) ──
async function rpc(fn, args) {
  const headers = { "Content-Type": "application/json", apikey: CLOUD.anonKey };
  if (CLOUD.anonKey.startsWith("eyJ")) headers.Authorization = `Bearer ${CLOUD.anonKey}`; // clave anon clásica (JWT)
  const r = await fetch(`${CLOUD.url.replace(/\/$/, "")}/rest/v1/rpc/${fn}`, { method: "POST", headers, body: JSON.stringify(args) });
  const text = await r.text();
  const data = text ? JSON.parse(text) : null;
  if (!r.ok) {
    const err = new Error((data && data.message) || r.statusText);
    err.server = true;
    throw err;
  }
  return data;
}

// Cada cambio se guarda primero en el dispositivo y luego se sube; si no hay internet, queda en cola.
function push(fn, args) {
  if (!state.session) return;
  const token = state.session.token;
  state.queue = state.queue.filter(o => !(o.fn === fn && o.args.p_token === token && o.args.p_lesson === args.p_lesson));
  state.queue.push({ fn, args: { ...args, p_token: token } });
  save("queue", state.queue);
  flush();
}

let flushing = null;
function flush() {
  if (!CLOUD_ON) return Promise.resolve();
  if (!flushing) flushing = doFlush().finally(() => { flushing = null; });
  return flushing;
}
async function doFlush() {
  while (state.queue.length) {
    const op = state.queue[0];
    try {
      await rpc(op.fn, op.args);
    } catch (e) {
      if (!e.server) { toast(UI[state.lang].offline); return; }
      if (/invalid_session/.test(e.message) && state.session && op.args.p_token === state.session.token) {
        state.queue.shift(); save("queue", state.queue);
        sessionExpired();
        return;
      }
      // Cualquier otro rechazo del servidor: se descarta para no bloquear la cola.
    }
    state.queue.shift();
    save("queue", state.queue);
  }
}

async function pullMe() {
  if (!state.session) return;
  await flush();
  if (state.queue.length) return; // sin internet: se queda lo local
  try {
    const me = await rpc("fd_me", { p_token: state.session.token });
    state.done = me.done || {};
    state.notes = me.notes || {};
    saveProgress();
  } catch (e) {
    if (e.server && /invalid_session/.test(e.message)) sessionExpired();
  }
}

async function refreshFamily() {
  if (!familyMode()) return;
  try {
    const f = await rpc("fd_family", { p_code: state.family });
    state.familyName = f.name;
    state.members = f.members || [];
    save("familyName", state.familyName);
    save("members", state.members);
  } catch (e) {
    if (e.server && /invalid_family/.test(e.message)) {
      toast(UI[state.lang].errors.invalid_family);
      leaveFamily();
    }
  }
}

function sessionExpired() {
  state.session = null; save("session", null);
  state.gate = { step: "who" };
  loadProgress();
  toast(UI[state.lang].sessionEnded);
  render();
}

function leaveFamily() {
  if (state.session) rpc("fd_logout", { p_token: state.session.token }).catch(() => {});
  state.family = null; state.session = null; state.members = []; state.familyName = ""; state.gate = null;
  forget("family"); forget("session"); forget("members"); forget("familyName");
  loadProgress();
}

async function login(m, pin) {
  const t = UI[state.lang];
  let res;
  try {
    res = await rpc("fd_login", { p_code: state.family, p_member: m.id, p_pin: pin });
  } catch (e) {
    state.gateError = e.server ? e.message : t.errors.network;
    return render();
  }
  if (!res.ok) { state.gateError = t.errors[res.error] || res.error; return render(); }

  state.session = { token: res.token, id: m.id, name: m.name };
  save("session", state.session);
  state.gate = null; state.gateError = "";
  loadProgress();
  await maybeImport(m);
  await pullMe();
  m.has_pin = true;
  state.idx = firstUnread();
  state.tab = "hoy"; save("tab", "hoy");
  render();
  refreshFamily().then(renderSafe);
}

// Si este dispositivo tenía avance "sin cuenta", ofrecer pasarlo a la persona que entra.
async function maybeImport(m) {
  const localDone = load("done", {}), localNotes = load("notes", {});
  const n = Object.keys(localDone).length;
  if (!n && !Object.keys(localNotes).length) return;
  if (!confirm(UI[state.lang].importAsk(n, m.name))) return;
  try {
    await rpc("fd_import", { p_token: state.session.token, p_done: localDone, p_notes: localNotes });
    forget("done"); forget("notes");
  } catch (e) {}
}

// ── Render ──
function renderSafe() {
  // No re-dibujar mientras alguien escribe su respuesta.
  if (document.activeElement && document.activeElement.id === "note") return;
  render();
}

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

  const who = document.getElementById("who");
  who.hidden = !state.session;
  if (state.session) {
    const me = state.members.find(m => m.id === state.session.id) || { id: state.session.id, name: state.session.name };
    who.innerHTML = `${avatar(me, "sm")}<span>${esc(me.name)}</span>`;
    who.title = t.switchUser;
    who.setAttribute("aria-label", `${me.name} · ${t.switchUser}`);
  }

  const gate = needsLogin();
  document.getElementById("tabs").hidden = gate;
  document.getElementById("gate").hidden = !gate;
  if (gate) {
    for (const tab of Object.keys(t.tabs)) document.getElementById("panel-" + tab).hidden = true;
    renderGate();
    document.getElementById("footer").textContent = t.footer;
    return;
  }

  const showFamily = familyMode() && !!state.session;
  document.getElementById("tab-familia").hidden = !showFamily;
  if (state.tab === "familia" && !showFamily) state.tab = "hoy";

  for (const tab of Object.keys(t.tabs)) {
    const b = document.getElementById("tab-" + tab);
    b.textContent = t.tabs[tab];
    b.setAttribute("aria-selected", String(tab === state.tab));
    document.getElementById("panel-" + tab).hidden = tab !== state.tab;
  }

  renderHoy();
  renderRuta();
  if (showFamily) renderFamilia();
  renderServicio();
  renderBiblia();

  const footer = document.getElementById("footer");
  footer.innerHTML = esc(t.footer) + (CLOUD_ON && !state.family
    ? `<br><button class="link-btn" data-action="join">${t.joinFamily}</button>` : "");
}

function renderGate() {
  const t = UI[state.lang], el = document.getElementById("gate");
  const g = state.gate && state.gate.step === "pin" ? state.gate : { step: "who" };
  const m = g.step === "pin" && state.members.find(x => x.id === g.id);

  if (m) {
    el.innerHTML = `<div class="gate">
      ${avatar(m)}
      <h2>${esc(m.has_pin ? t.hello(m.name) : t.createPin(m.name))}</h2>
      <p class="muted">${m.has_pin ? t.enterPin : t.createPinHelp}</p>
      <form class="pin-form" id="pin-form" data-id="${esc(m.id)}">
        <input id="pin1" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="off" aria-label="PIN" required>
        ${m.has_pin ? "" : `<input id="pin2" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="off" aria-label="${t.pinConfirm}" placeholder="${t.pinConfirm}" required>`}
        <p class="error" id="pin-error">${esc(state.gateError)}</p>
        <button class="btn primary" type="submit">${t.enter}</button>
      </form>
      <button class="link-btn" data-action="back-who">${t.notMe}</button>
    </div>`;
    const input = document.getElementById("pin1");
    if (input) input.focus();
    return;
  }

  el.innerHTML = `<div class="gate">
    ${state.familyName ? `<p class="eyebrow">${esc(state.familyName)}</p>` : ""}
    <h2>${t.whoReads}</h2>
    <div class="people">
      ${state.members.length ? state.members.map(p => {
        const n = countOf(p.done || {}), s = streakOf(p.done || {}), label = memberLabel(p);
        return `<button class="person" data-action="pick" data-id="${esc(p.id)}">${avatar(p)}
          <span>${esc(p.name)}<small>${label ? esc(label) + " · " : ""}${n}/${LESSONS.length}${s ? " · 🔥" + s : ""}</small></span></button>`;
      }).join("") : `<p class="muted">${t.loading}</p>`}
    </div>
    <button class="link-btn" data-action="leave">${t.leaveFamily}</button>
  </div>`;
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
        <div><textarea id="note" placeholder="${esc(state.session ? t.answerPhCloud : t.answerPh)}">${esc(state.notes[L.id] || "")}</textarea><p class="saved" id="saved"></p></div>
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
  let timer, upload;
  note.addEventListener("input", () => {
    const v = note.value;
    if (v.trim()) state.notes[L.id] = v; else delete state.notes[L.id];
    saveProgress();
    clearTimeout(upload);
    upload = setTimeout(() => push("fd_set_note", { p_lesson: L.id, p_body: v }), 800);
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

function renderFamilia() {
  const t = UI[state.lang], lang = state.lang, total = LESSONS.length;
  const url = `${location.origin}${location.pathname}?f=${encodeURIComponent(state.family)}`;
  document.getElementById("panel-familia").innerHTML = `
    <section class="card">
      <h2>${esc(state.familyName || t.tabs.familia)}</h2>
      <p class="muted" style="margin-top:0">${t.boardIntro}</p>
      ${state.members.map(m => {
        const me = state.session && m.id === state.session.id;
        const done = me ? state.done : (m.done || {});
        const n = countOf(done), s = streakOf(done), next = firstUnreadOf(done);
        const last = Object.values(done).sort().pop();
        const label = memberLabel(m);
        return `<div class="board-row ${me ? "me" : ""}">${avatar(m)}
          <div>
            <h3>${esc(m.name)} ${me ? `<small class="muted">${t.you}</small>` : ""}${label ? `<small class="muted">${esc(label)}</small>` : ""}${s ? `<span class="streak">🔥 ${s}</span>` : ""}</h3>
            <p>${next === -1 ? t.finished : `${t.goingOn}: ${esc(LESSONS[next].tema[lang])}`} · ${t.lastRead}: ${relDay(last)}</p>
            <div class="bar" aria-hidden="true"><span style="width:${(n / total) * 100}%"></span></div>
          </div>
          <b>${n}/${total}</b>
        </div>`;
      }).join("")}
    </section>
    <section class="card" style="text-align:center">
      <h2>${t.invite}</h2>
      <p class="muted">${t.inviteHelp}</p>
      <a class="btn wa" href="https://wa.me/?text=${encodeURIComponent(t.inviteText(url))}" target="_blank" rel="noopener">${t.inviteBtn}</a>
    </section>`;
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
    if (state.tab === "familia") refreshFamily().then(renderSafe);
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
      saveProgress();
      push("fd_set_done", { p_lesson: L.id, p_day: state.done[L.id] || null });
      render(); break;
    case "listen": toggleListen(); break;
    case "go": goTo(state.idx + Number(el.dataset.step)); break;
    case "mine": goTo(firstUnread()); break;
    case "open": goTo(Number(el.dataset.idx), "hoy"); break;
    // Familia
    case "pick":
      state.gate = { step: "pin", id: el.dataset.id }; state.gateError = ""; render(); break;
    case "back-who":
      state.gate = { step: "who" }; state.gateError = ""; render(); break;
    case "switch":
      stopSpeaking();
      if (state.session) rpc("fd_logout", { p_token: state.session.token }).catch(() => {});
      state.session = null; save("session", null);
      state.gate = { step: "who" }; state.gateError = "";
      loadProgress(); render(); window.scrollTo({ top: 0 });
      refreshFamily().then(renderSafe);
      break;
    case "leave":
      if (confirm(UI[state.lang].leaveConfirm)) { leaveFamily(); render(); }
      break;
    case "join": {
      const code = (prompt(UI[state.lang].joinPrompt) || "").trim();
      if (code) joinFamily(code);
      break;
    }
  }
});

document.addEventListener("submit", e => {
  if (e.target.id !== "pin-form") return;
  e.preventDefault();
  const t = UI[state.lang];
  const m = state.members.find(x => x.id === e.target.dataset.id);
  const pin1 = document.getElementById("pin1").value.trim();
  const pin2El = document.getElementById("pin2");
  const errEl = document.getElementById("pin-error");
  if (!/^[0-9]{4,6}$/.test(pin1)) { errEl.textContent = t.errors.invalid_pin_format; return; }
  if (pin2El && pin2El.value.trim() !== pin1) { errEl.textContent = t.errors.mismatch; return; }
  e.target.querySelector("button[type=submit]").disabled = true;
  login(m, pin1);
});

async function joinFamily(code) {
  state.family = code; save("family", code);
  state.session = null; save("session", null);
  state.members = []; state.gate = { step: "who" };
  loadProgress(); render();
  await refreshFamily();
  render();
}

window.addEventListener("online", () => flush());

// ── Inicio ──
(function start() {
  // Enlace familiar: ?f=CODIGO
  const params = new URLSearchParams(location.search);
  const f = params.get("f");
  if (f) {
    params.delete("f");
    history.replaceState(null, "", location.pathname + (params.toString() ? "?" + params : "") + location.hash);
    if (CLOUD_ON && f !== state.family) {
      state.family = f; save("family", f);
      state.session = null; save("session", null);
      state.members = []; save("members", []);
    }
  }
  loadProgress();
  render();
  if (familyMode()) {
    refreshFamily().then(renderSafe);
    if (state.session) pullMe().then(() => { state.idx = firstUnread(); renderSafe(); });
  }
})();
