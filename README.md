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
npm run build          # normal Next.js build
npm run build:static   # static export to out/
npm run deploy:pages   # build + deploy to Cloudflare Pages (live)
npm run build:worker   # OpenNext bundle (Phase 2, build on Linux)
npm run preview:worker # preview the Worker locally
npm run deploy:worker  # build + deploy the Worker (needs wrangler login)
npm run lint
npm start
```

## Deploy

### Cloudflare Pages — live

**Live URL:** https://emerging-tech-lms.pages.dev

Static export, no server runtime. This is the current production deployment.

Redeploy from your machine:

```bash
npm run deploy:pages
```

That builds the static export and uploads `out/` to the
`emerging-tech-lms` Pages project (`main` branch → production).

Manual steps:

```bash
npm run build:static
npx wrangler pages deploy out --project-name emerging-tech-lms --branch main --commit-dirty=true
```

For Git-integrated Pages builds: preset **None**, build command `npm run build`,
output `out`, `NODE_VERSION=22`. Cloudflare auto-sets `CF_PAGES=1`, which
switches the config to static export.

`public/_headers` provides immutable caching for `_next/static` and security
headers. Static-mode caveats: progress is per-browser only; no accounts,
uploads, or instructor-visible grades until Phase 2.

### Cloudflare Workers (OpenNext) — Phase 2, build on Linux

The Worker config is committed (`wrangler.jsonc`, `open-next.config.ts`), but
OpenNext on Windows produces a bundle that hangs at runtime. Build it on Linux
(WSL or CI) before using this path.

- Build: `npm run build:worker` (must run on Linux)
- Deploy: `npx wrangler deploy`
- Workers Builds: build `npm run build:worker`, deploy `npx wrangler deploy`,
  `NODE_VERSION=22`
- `wrangler.jsonc` intentionally omits `WORKER_SELF_REFERENCE`; if needed later,
  add it with `service: emerging-technologies`.
- The broken `emerging-technologies` Worker has `workers.dev` disabled.

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

### Vercel / Netlify (Phase 2 alternative)

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

## Images and figures

Put assets under `public/images/<unit>/` and reference them from lesson Markdown:

```markdown
![Three-layer IoT architecture](/images/c27/iot-three-layer-model.svg "Figure: Three-layer IoT architecture — device, network, and cloud")
```

- `alt` is the accessible description (always include it).
- `title` becomes the visible caption; if omitted, `alt` is used.
- Images render as a `<figure>` with a hairline border, 12px radius, and lazy loading.
- Root-relative paths are prefixed with `NEXT_PUBLIC_BASE_PATH`, so they work on
  Cloudflare Pages and GitHub Pages.
- Formats: **SVG** for diagrams, **WebP/PNG** for screenshots. Keep files under
  ~500 KB and 800–1200 px wide.
- `public/_headers` caches `/images/*` for 7 days.
- Redact names and emails in lab screenshots before committing.

## Design

Follows `../design/DESIGN.md`: light Mintlify-style reading surfaces, dark
Linear-style dashboard, mint accent on light and lavender on dark.

## Progress

Completion is stored under the key `etlms.completed.v1` in `localStorage`.
The dashboard reset button clears it. Cross-device sync arrives with Supabase.
