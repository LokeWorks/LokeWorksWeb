/* ==========================================================
   LOKEWORKS — renders SITE (from config.js) into the DOM.
   You shouldn't need to edit this file. Edit config.js instead.
   ========================================================== */

const ICONS = {
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.4A19.7 19.7 0 0 0 15.5 3l-.3.6a14 14 0 0 1 4.2 1.6 15.6 15.6 0 0 0-13.8 0 14 14 0 0 1 4.2-1.6L9.5 3a19.7 19.7 0 0 0-4.8 1.4C1.6 8.9.9 13.3 1.3 17.6a19.9 19.9 0 0 0 6 3l1-1.6a12.8 12.8 0 0 1-1.9-.9l.5-.4a14.2 14.2 0 0 0 12.2 0l.5.4c-.6.3-1.2.6-1.9.9l1 1.6a19.8 19.8 0 0 0 6-3c.5-5-.8-9.4-3.4-13.2ZM8.7 15c-1 0-1.8-1-1.8-2.1 0-1.2.8-2.1 1.8-2.1s1.9 1 1.8 2.1c0 1.2-.8 2.1-1.8 2.1Zm6.6 0c-1 0-1.8-1-1.8-2.1 0-1.2.8-2.1 1.8-2.1s1.8 1 1.8 2.1c0 1.2-.8 2.1-1.8 2.1Z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2.3h3.3l-7.2 8.2 8.5 11.2h-6.6l-5.2-6.8-5.9 6.8H1.7l7.7-8.8L1.3 2.3h6.8l4.7 6.2 5.4-6.2Zm-1.2 17.4h1.8L7 4.2H5.1l11.9 15.5Z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 2h-3.3v13.6a2.8 2.8 0 1 1-2-2.7v-3.4a6.2 6.2 0 1 0 5.3 6.1V8.8a8.4 8.4 0 0 0 5 1.6V7a5 5 0 0 1-5-5Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.5.42.6.24 1 .53 1.5 1a4 4 0 0 1 1 1.5c.17.5.36 1.3.42 2.5.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2-.42 2.5a4.3 4.3 0 0 1-2.5 2.5c-.5.17-1.3.36-2.5.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.25-2.5-.42a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.17-.5-.36-1.3-.42-2.5C2.14 15.6 2.13 15.2 2.13 12s0-3.6.07-4.9c.06-1.2.25-2 .42-2.5a4 4 0 0 1 1-1.5 4 4 0 0 1 1.5-1c.5-.17 1.3-.36 2.5-.42C8.4 2.21 8.8 2.2 12 2.2Zm0 3a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6.1-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"/></svg>',
  twitch: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.3 2 2.5 6.6v13.1h4.8V22l3.6-2.3h3l6-5.7V2H4.3Zm14.4 10.7-3 2.8h-3l-2.5 2.4v-2.4H6.3V4h12.4v8.7Z"/><path d="M14.8 6.4h1.9v5h-1.9zM9.7 6.4h1.9v5H9.7z"/></svg>',
  itch: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.5 4.5C4 3 5 2 7.5 2h9c2.5 0 3.5 1 5 2.5 1.2 1.2 1.9 3.4 1.9 4.8 0 1.7-.9 2.7-2.6 2.7-1.9 0-2.7-1-2.7-2.4h-.1c0 1.4-1 2.4-2.6 2.4-1.7 0-2.6-1-2.6-2.4h-.1c0 1.4-.9 2.4-2.6 2.4-1.6 0-2.6-1-2.6-2.4h-.1c0 1.4-.8 2.4-2.7 2.4C1.4 12 .5 11 .5 9.3c0-1.4.7-3.6 2-5v.2ZM3 10.7c.6 0 1.3-.2 1.8-.6.5.4 1.2.6 2 .6s1.5-.2 2-.6c.5.4 1.2.6 2 .6s1.5-.2 2-.6c.5.4 1.2.6 2 .6s1.4-.2 2-.6c.5.4 1.1.6 1.8.6.2 0 .4 0 .6-.05v7.7c0 1-.6 1.5-1.4 1.6-1.9.3-5.3.5-8 .5s-6-.2-7.9-.5c-.8-.1-1.4-.6-1.4-1.6v-7.7c.2 0 .4.05.6.05Zm4.9 1.9c-1 0-2.5.2-3.2.9-.5.5-.7 1.6-.7 2.6 0 1.4.5 2.3 1.8 2.3.9 0 1.4-.4 1.7-1l.2-.4.2.4c.3.6.8 1 1.7 1 1.3 0 1.8-.9 1.8-2.3 0-1-.2-2.1-.7-2.6-.7-.7-2.2-.9-3.2-.9h.4Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5a10.5 10.5 0 0 0-3.3 20.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.6-1.4-3.6-1.4-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.3-.3-4.7-1.2-4.7-5.2 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4-2.4 4.9-4.7 5.2.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5"/></svg>',
};

function iconFor(name) {
  return ICONS[name] || ICONS.link;
}

// Real brand colors — icons render in their own platform's color,
// not the site's accent, so they still look right no matter what
// the accent gets changed to.
const BRAND_COLORS = {
  youtube: "#FF0033",
  discord: "#5865F2",
  twitter: "#1D9BF0",
  tiktok: "#FE2C55",
  instagram: "#E1306C",
  twitch: "#9146FF",
  itch: "#FA5C5C",
  github: "#8A8F98",
  link: "var(--accent)",
};

function brandColor(name) {
  return BRAND_COLORS[name] || "var(--accent)";
}

const SUN_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"/></svg>';
const MOON_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 14.7A8.5 8.5 0 1 1 9.3 3.6a7 7 0 0 0 11.1 11.1Z"/></svg>';

/* ---------- Theme ---------- */

function initTheme() {
  const saved = localStorage.getItem("lokeworks-theme");
  document.documentElement.setAttribute("data-theme", saved === "light" ? "light" : "dark");
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("lokeworks-theme", next);
  const btn = document.getElementById("theme-toggle-btn");
  if (btn) btn.innerHTML = next === "dark" ? MOON_ICON : SUN_ICON;
}

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/* ---------- Nav + footer, shared across pages ---------- */

function renderChrome(activePage) {
  initTheme();
  document.documentElement.setAttribute("data-page", activePage);

  if (SITE.faviconImage) {
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.href = SITE.faviconImage;
  }

  const nav = document.getElementById("site-nav");
  if (nav) {
    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    nav.innerHTML = `
      <div class="wrap">
        <div class="nav-left">
          <a class="brand" href="index.html">${SITE.brandName}</a>
          <ul class="nav-links">
            <li><a href="index.html" ${activePage === "home" ? 'aria-current="page"' : ""}>Home</a></li>
            <li><a href="projects.html" ${activePage === "projects" ? 'aria-current="page"' : ""}>Projects</a></li>
            <li><a href="videos.html" ${activePage === "videos" ? 'aria-current="page"' : ""}>Videos</a></li>
            <li><a href="socials.html" ${activePage === "socials" ? 'aria-current="page"' : ""}>Socials</a></li>
          </ul>
        </div>
        <button class="theme-toggle" id="theme-toggle-btn" type="button" aria-label="Toggle dark or light mode">
          ${isDark ? MOON_ICON : SUN_ICON}
        </button>
      </div>`;
    document.getElementById("theme-toggle-btn").addEventListener("click", toggleTheme);
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    const links = SITE.socials.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}" style="--icon-color:${brandColor(s.icon)}">${iconFor(s.icon)}</a></li>`).join("");
    footer.innerHTML = `
      <div class="wrap footer-row">
        <span class="footer-note">${SITE.brandName}.</span>
        <ul class="footer-socials">${links}</ul>
      </div>`;
  }
}

/* ---------- Home page ---------- */

function renderHome() {
  const hero = document.getElementById("hero");
  if (hero) {
    hero.innerHTML = `
      <div class="hero-mascot">
        <img src="${SITE.mascotImage}" alt="${SITE.mascotAlt}"
             onerror="this.parentElement.innerHTML='<span class=&quot;placeholder&quot;>mascot goes here<br>(assets/mascot.png)</span>'">
      </div>
      <div>
        <p class="hero-eyebrow">Enjoy the website</p>
        <h1>${SITE.brandName}</h1>
        <p class="tagline">${SITE.tagline}</p>
      </div>`;
  }

  const about = document.getElementById("about");
  if (about) about.innerHTML = `<span class="about-mark">&mdash;</span><p>${SITE.about}</p>`;

  const list = document.getElementById("devlog-list");
  if (list) {
    if (!SITE.updates.length) {
      list.replaceWith(el(`<div class="empty-state">No updates yet, first one's coming soon.</div>`));
    } else {
      list.innerHTML = SITE.updates
        .slice()
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map(u => `
          <li class="devlog-entry">
            <span class="devlog-date">${fmtDate(u.date)}</span>
            <div class="devlog-body">
              <p class="devlog-title">${u.title}</p>
              <p class="devlog-text">${u.body}</p>
            </div>
          </li>`)
        .join("");
    }
  }
}

/* ---------- Videos page ---------- */

function renderVideos() {
  const grid = document.getElementById("video-grid");
  if (!grid) return;
  if (!SITE.videos.length) {
    grid.replaceWith(el(`<div class="empty-state">Nothing posted yet, check back soon.</div>`));
    return;
  }
  const sorted = SITE.videos.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const card = (v, featured) => `
      <div class="video-card${featured ? " video-card-featured" : ""}">
        <iframe src="https://www.youtube.com/embed/${v.youtubeId}" title="${v.title}" allowfullscreen loading="lazy"></iframe>
        <div class="video-card-body">
          <div class="video-card-date">${fmtDate(v.date)}</div>
          <p class="video-card-title">${v.title}</p>
          <p class="video-card-desc">${v.description || ""}</p>
        </div>
      </div>`;
  grid.innerHTML = card(sorted[0], true) + sorted.slice(1).map(v => card(v, false)).join("");
}

/* ---------- Socials page ---------- */

function renderSocials() {
  const grid = document.getElementById("social-grid");
  if (!grid) return;
  if (!SITE.socials.length) {
    grid.replaceWith(el(`<div class="empty-state">Nothing linked yet, add some in config.js.</div>`));
    return;
  }
  grid.innerHTML = SITE.socials
    .map(s => `
      <a class="social-card" href="${s.url}" target="_blank" rel="noopener" style="--icon-color:${brandColor(s.icon)}">
        <span class="social-icon">${iconFor(s.icon)}</span>
        <span>
          <div class="social-label">${s.label}</div>
          <div class="social-url">${s.url.replace(/^https?:\/\//, "")}</div>
        </span>
      </a>`)
    .join("");
}

/* ---------- Series toggle (slide-down description under a button) ---------- */

function initSeriesToggle(buttonId, panelId) {
  const btn = document.getElementById(buttonId);
  const panel = document.getElementById(panelId);
  if (!btn || !panel) return;
  btn.addEventListener("click", () => {
    const open = panel.getAttribute("data-open") === "true";
    panel.setAttribute("data-open", open ? "false" : "true");
    btn.setAttribute("aria-expanded", open ? "false" : "true");
  });
}

/* ---------- Projects page ---------- */

function renderProjects() {
  const list = document.getElementById("projects-list");
  if (!list) return;
  if (!SITE.projects.length) {
    list.replaceWith(el(`<div class="empty-state">No releases yet,  check the videos page for what's actually out.</div>`));
    return;
  }
  list.innerHTML = SITE.projects
    .map((g, i) => `
      <div class="project-row${i % 2 === 1 ? " reverse" : ""}" style="--project-accent:${g.accent || "var(--accent)"}">
        <div class="project-media">
          <img src="${g.image || ""}" alt="${g.title}"
               onerror="this.parentElement.innerHTML='<span class=&quot;project-media-placeholder&quot;>image goes here</span>'">
        </div>
        <div class="project-info">
          <p class="project-tag">${g.engine || ""}${g.status ? " · " + g.status : ""}</p>
          <h3 class="project-title">${g.title}</h3>
          <p class="project-desc">${g.description || ""}</p>
          ${g.link ? `<a class="project-link" href="${g.link}" target="_blank" rel="noopener">Get it →</a>` : ""}
        </div>
      </div>`)
    .join("");
}
