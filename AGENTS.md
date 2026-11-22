# AGENTS.md — RushClippy marketing site

Guide for any AI agent (Codex, Antigravity/Gemini, Claude Code). The full rules for this repo live in **`CLAUDE.md`**:
read it first and follow it exactly (plan first and wait for the owner's "ok", one phase = one branch = one PR,
never push to `main`, brand tokens only, honesty rules, three locales, talk to the owner in Brazilian Portuguese).

Decisions log: `docs/DECISIONS.md`. Roadmap: `docs/ROADMAP.md`.

The apps (RushClippy Studio and RushClippy Clipper), the clip engine and the cloud/panel live in the other repository,
`C:\Users\Admin\Desktop\cortes` (`Zymble/clips`). Its `AGENTS.md` explains how everything fits together, including
the update channels this site reads to show each app's version and download link.

Things that bit previous agents here:
- No em dashes in copy or titles (titles use "Page | RushClippy").
- Cookie consent: GA4 loads only after opt-in (src/components/layout/Consent.astro); anything new that sets
  cookies or calls a third party must go through it and be listed in the Cookie policy (src/content/legal.ts),
  and its origin added to the CSP in vercel.json.
- Legal texts state facts about the apps (videos stay on the PC, signed updates, 15-day LGPD replies). Keep them true.
- On this Windows PC Playwright does not run (Node 26) and scripts/serve-static.mjs redirects to "//"; rely on CI,
  or serve .vercel/output/static with `python -m http.server`. The first Lighthouse URL (/) sometimes dips under 0.95;
  rerun the job before chasing it.
