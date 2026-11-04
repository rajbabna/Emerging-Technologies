# Emerging Technologies LMS — App

Next.js implementation of the competency-based LMS for Module 9 (C25, C26, C27).

## Stack

- Next.js 16 (App Router, Turbopack, typed routes)
- React 19 + TypeScript
- Tailwind CSS 4 with project tokens in `src/app/globals.css`
- `react-markdown` + `remark-gfm` for lesson content
- Progress stored in `localStorage` (no backend required yet)

Supabase is planned for Phase 2 (auth, quizzes, lab evidence, gradebook). The
current build is local-first so it runs with zero configuration.

## Run

```bash
npm install
npm run dev           # http://localhost:3000
npm run build         # normal Next.js build
npm run build:worker  # OpenNext bundle for Cloudflare Workers
npm run preview:worker# preview the Worker locally
npm run deploy:worker # build + deploy to Cloudflare (needs wrangler login)
npm run build:static  # static export to out/
npm run lint
npm start
```

## Deploy

### Cloudflare Workers (OpenNext) — current

This repo is configured for Cloudflare Workers using
`@opennextjs/cloudflare`. `wrangler.jsonc` is committed on purpose so the
auto-migration cannot generate a wrong `WORKER_SELF_REFERENCE` binding.

Files:
- `wrangler.jsonc` — Worker name `emerging-technologies`, `main`
  `.open-next/worker.js`, `nodejs_compat`, assets binding `ASSETS`
- `open-next.config.ts` — Cloudflare adapter config
- `public/_headers` — immutable `_next/static` caching

**Workers Builds settings** (Cloudflare dashboard):

| Setting | Value |
|---|---|
| Build command | `npm run build:worker` |
| Deploy command | `npx wrangler deploy` |
| Environment variable | `NODE_VERSION=22` |

**Do not** leave the build command as `npm run build` or let the dashboard
auto-migrate: the Worker needs `.open-next/worker.js`, which only
`npm run build:worker` produces.

Local checks:

```bash
npm run build:worker     # produces .open-next/worker.js
npm run preview:worker   # runs it in the Workers runtime
npx wrangler login       # one-time
npm run deploy:worker    # deploy from your machine
```

The app does not make subrequests to itself, so `wrangler.jsonc` intentionally
omits `WORKER_SELF_REFERENCE`. If that changes, add:

```jsonc
"services": [
  { "binding": "WORKER_SELF_REFERENCE", "service": "emerging-technologies" }
]
```

### GitHub Pages (free, static, backup)

Yes — students can open the site as a normal web page. Pages serves only static
files, so use the static export path.

1. Push this `web/` folder as its own GitHub repository.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main`. `.github/workflows/deploy.yml` runs `npm run build:static`
   and publishes `out/`.
4. Students open `https://<user>.github.io/<repo>/`.

The workflow sets `NEXT_PUBLIC_BASE_PATH` automatically for project sites
(`/<repo>`), and leaves it empty for `https://<user>.github.io` user sites.
For a manual local check:

```bash
# PowerShell
$env:NEXT_PUBLIC_BASE_PATH="/your-repo"; npm run build:static
# bash
NEXT_PUBLIC_BASE_PATH=/your-repo npm run build:static
```

**Static-mode caveats**

- Progress is stored in each student's browser (`localStorage`). It does not
  sync across devices, and the instructor cannot see it.
- No accounts, quiz marking, submission uploads, or gradebook. Those need a
  backend (Phase 2).

### Cloudflare Pages (static alternative)

Use this only if you prefer a static host over the Worker. It has no server
runtime, but the current app works fully in static mode.

1. Push this `web/` folder to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Import an
   existing Git repository**.
3. Use these build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | **None** (do not use the Next.js preset) |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Environment variable | `NODE_VERSION=22` |

4. Deploy. The site is served at `https://<project>.pages.dev`.

`CF_PAGES=1` is set automatically by Cloudflare, and `next.config.ts` uses it to
switch to static export, so `npm run build` produces `out/` there. Do **not** set
`NEXT_PUBLIC_BASE_PATH` — Cloudflare serves the site at the domain root.

Direct upload alternative (no Git integration):

```bash
npm run build:static
npx wrangler pages deploy out --project-name emerging-tech-lms
```

`public/_headers` adds immutable caching for `_next/static` and basic security
headers. Static mode has no accounts, uploads, or instructor-visible progress —
those need the Worker + Supabase path (Phase 2).

### Vercel / Netlify (recommended with Phase 2)

Connect the repository with the Next.js preset. This keeps server features and
lets you add Supabase auth, quizzes, and lab evidence without changing the
architecture.

## Project proposal content

`content/project-proposal.md` is a vendored copy used when this repo is deployed
standalone. When building inside the full `lms` tree, `scripts/generate-proposal.mjs`
syncs it from `../project/PROJECT-PROPOSAL.md` first. The generated TypeScript
module is consumed by `/project`; no filesystem access happens at runtime.

## Routes

| Route | Surface | Purpose |
|---|---|---|
| `/` | Light | Course landing |
| `/c25`, `/c26`, `/c27` | Light | Competency overview |
| `/[competency]/[lesson]` | Light | Lesson or lab |
| `/dashboard` | Dark | Progress dashboard |
| `/instructor` | Dark | Instructor shell (Phase 2+) |
| `/project` | Light | Assessment proposal (rendered from `../project`) |

## Structure

```
├── content/                    # vendored proposal copy for standalone deploys
├── scripts/                    # proposal generator + static build wrapper
├── .github/workflows/          # GitHub Pages deploy
└── src/
    ├── app/
    │   ├── [competency]/       # unit + lesson routes
    │   ├── dashboard/          # dark progress surface
    │   ├── instructor/         # dark instructor shell
    │   ├── project/            # renders generated proposal content
    │   └── globals.css         # design tokens + prose styles
    ├── components/             # header, sidebar, markdown, progress, dashboard
    └── lib/
        ├── curriculum.ts       # C25/C26/C27 lessons and content
        ├── progress.ts         # localStorage helpers
        └── use-progress.ts     # useSyncExternalStore hook
```

## Content

Lessons live in `src/lib/curriculum.ts` as Markdown strings. Each item has a
slug, summary, duration, and `kind: "lesson" | "lab"`. Edit there to change
content; the syllabus outlines in `../syllabus/` are the source.

## Design

Follows `../design/DESIGN.md`: light Mintlify-style reading surfaces, dark
Linear-style dashboard, mint accent on light and lavender on dark.

## Progress

Completion is stored under the key `etlms.completed.v1` in `localStorage`.
The dashboard reset button clears it. Cross-device sync arrives with Supabase.
