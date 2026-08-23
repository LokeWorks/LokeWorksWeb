# LokeWorks site

Plain HTML/CSS/JS. No build step, no framework — open `index.html` in a
browser and it works. Host it anywhere static (GitHub Pages, Netlify,
Vercel, itch.io's HTML upload, etc.) by uploading this whole folder.

## Day-to-day editing

Open **`config.js`**. That's it for 95% of updates:

- **New devlog entry** → add an object to the top of `updates`.
- **New video** → add an object to `videos` with the YouTube ID
  (the bit after `v=` or `youtu.be/`).
- **New/changed social link** → edit the `socials` array. Icons
  automatically use each platform's real brand color.
- **New project** → add an object to `projects`. `accent` is
  that one entry's own tag color — doesn't have to match the rest
  of the site, pick whatever fits the project.
- **Mascot image** → it's baked directly into `config.js` as a data
  URI (that long string after `mascotImage:`), so there's no
  `/assets` folder — the site is fully self-contained in these
  files. To swap it later, convert your new image to a base64 PNG
  string (any "image to base64" tool online) and paste it in as the
  new `mascotImage` value.

Save `config.js`, refresh the page — no other files need to change.

## Files

- `index.html` — homepage (hero + devlog)
- `projects.html` — projects, alternating layout, pulls from `config.js`. Includes the "Small Ideas" expandable button on top
- `videos.html` — video grid, pulls from `config.js`
- `socials.html` — social links, pulls from `config.js`
- `style.css` — all styling / design tokens (colors, fonts, spacing)
- `render.js` — turns `config.js` data into the page — you shouldn't
  need to touch this
- `config.js` — **your editing surface** (mascot image lives here too)

## Notes

- Videos and socials currently show an empty state since there's no
  content in `config.js` yet — fill in a few entries and they'll
  appear automatically.
- Fonts (Space Grotesk / Inter / JetBrains Mono) load from Google
  Fonts via CDN, so an internet connection is needed for them to
  render — everything still works without it, just falls back to
  system fonts.
- Project screenshots on the Projects page work the same way as the
  mascot — no `/assets` folder, so use a base64 data URI for
  `image` in each `projects` entry, or link to an image already
  hosted somewhere online. Leaving `image` blank shows a plain
  placeholder box instead.
