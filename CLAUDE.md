# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page landing site for the fictional streetwear brand HORS CHAMP ("Drop 01 · Outside System"). Vanilla JS + Vite (ESM), no framework, no backend. Content is in French. Its own git repo (separate from the parent training folder).

## Commands

- `npm install`
- `npm run dev`: Vite dev server (hot reloads on `content.yaml` edits)
- `npm run build`: outputs `dist/` (Netlify: Node 20, publish `dist`, see `netlify.toml`)
- `npm run preview`: serve the built site

No tests or linter are configured.

## Architecture

- `content.yaml` is the editorial source of truth. `src/main.js` imports it with `?raw`, parses it with `yaml`, and builds the whole page as HTML template strings (one function per section: announce, header, hero, manifesto, lookbook, products, construction, access, footer), injected into `#app` in `index.html`. Text changes belong in `content.yaml`, not in `main.js`. A few strings are still hardcoded in `main.js` (the nav labels, the products section heading and intro, the form error message).
- Some titles are split into two lines by `.replace(" ", "<br />")` or a similar replace on the title text, so rewording a title in the YAML can change where it breaks. Check `main.js` after editing titles (hero, lookbook, construction, access).
- All YAML text goes through the `esc()` helper. Keep using it for any new interpolated value.
- Images: when `image` is empty (`drop.hero_image`, `lookbook.looks[].image`, `products[].image`), `main.js` renders a labelled placeholder (`[ Visuel à venir ]`) drawn by `src/icons.js` (SVG line art, grain, hero scene). Setting the field to a file in `public/` replaces the placeholder.
- The early-access form (`#access-slot`) is purely client-side: email regex validation, then a confirmation state. Nothing is sent anywhere (`backend_required: false`).
- `src/style.css` holds the palette tokens in `:root`. `DESIGN.md` is the visual source of truth (palette, type, image direction, a11y rules). Read it before changing visuals.

## Constraints from README/DESIGN.md

- No backend, payments, accounts, or fake stock, prices, reviews, scarcity or urgency. Prices, materials, stock and dates stay marked "à confirmer".
- Never present generated imagery as real brand photography.
- Touch targets ≥ 44px, text contrast ≥ 4.5:1 (on Chalk backgrounds use `#5C5C58` for grey labels, not Concrete), and honor `prefers-reduced-motion`.
- Netlify builds a preview for each pushed branch and deploys production on each push to `main`.
