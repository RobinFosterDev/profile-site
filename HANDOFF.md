# Handoff — Profile site for Google OAuth (paused Oct 14, 2026)

## What this is
Static site (Astro 5 + Tailwind v4, zero client JS, ~12 KB CSS) to be published on GitHub
Pages as the homepage + privacy policy for Robin's Google OAuth consent screen.
GitHub account: `robinfoster1996`.

## Current state — design approved
Project: `work/profile-site/` (`src/pages/index.astro`, `src/pages/privacy.astro`,
`src/layouts/base.astro`, `src/styles/global.css`).

Design language (locked):
- Serif display headings (system Georgia stack, no web fonts), sans body
- Dusty arcane purple accent: `oklch(0.52 0.13 292)`
- Rune sigil monogram: **ᚱᚠ** (Elder Futhark Raido/Feh = R/F) in a purple ring beside the name
- Trailing `✦` after each heading (chosen for alignment consistency), `☾` at the right end of footer nav
- No "Hosted on GitHub Pages" footer line

Content (locked):
- About me: "I build tools as personal projects to understand how AI is changing development and computer use."
- Interests: "Harness engineering, local AI, and business automation."
- Links: GitHub (`github.com/robinfoster1996`) + `robinfoster1996@gmail.com`

Local review: `python3 -m http.server 8090 --directory dist` (background processes die with
the session — restart it next session), viewed at `http://100.91.42.68:8090/`.

## Pending before publishing
1. **Privacy page** is still generic boilerplate — needs the app-specific data-usage wording
   for whichever Google OAuth app this covers.
2. **Repo name decision**: user-site repo (`robinfoster1996.github.io`) vs a named project repo.
3. **GitHub auth**: Robin runs `~/.local/bin/gh auth login` himself (prefers not to route
   credentials through the agent). Then agent: create repo, push `dist/` (or source + Pages
   build), enable Pages.

## Environment pitfall
esbuild's Go service intermittently dies with `fatal error: newosproc` (errno 11) under
Hermes' cgroup scope (`pids.max = 256`) — retry the build, it passes. Skill
`hermes-cgroup-build-pitfall` staged pending approval.

## Robin's design preference (general)
Things must line up properly and look consistent — that's why heading stars trail rather
than lead.
