import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { CompetencyProgress } from "@/components/competency-progress";
import {
  competencies,
  totalLessonCount,
  totalMinutes,
} from "@/lib/curriculum";
import { formatMinutes } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-hairline-soft bg-surface-soft">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
              Module 9 · Certificate IV in Information Technology · 13 credits
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-1.5px] text-ink">
              Emerging Technologies,
              <br />
              learned by doing.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel">
              Read the theory, build it in Packet Tracer, and prove each
              competency. Three units, one clear path from architecture to IoT
              and AI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/c25"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-brand-green-deep"
              >
                Start with C25 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
              >
                Open dashboard
              </Link>
            </div>

            <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["13", "credits"],
                ["3", "competencies"],
                [String(totalLessonCount), "guided lessons"],
                [
                  formatMinutes(totalMinutes),
                  "estimated study",
                ],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-semibold text-ink">{value}</dt>
                  <dd className="text-xs uppercase tracking-wide text-stone">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="curriculum" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                Curriculum
              </h2>
              <p className="mt-1 text-sm text-steel">
                Follow the units in order, or jump to the competency you need.
              </p>
            </div>
            <Link
              href="/dashboard"
              className="hidden text-sm text-brand-tag hover:underline sm:block"
            >
              View progress
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {competencies.map((competency) => (
              <article
                key={competency.code}
                className="flex flex-col rounded-lg border border-hairline bg-canvas p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-sm bg-surface px-2 py-1 font-mono text-[11px] text-steel">
                    {competency.code}
                  </span>
                  <span className="text-xs text-stone">
                    {competency.credits} credits
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">
                  {competency.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">
                  {competency.description}
                </p>
                <p className="mt-4 font-mono text-[11px] text-stone">
                  {competency.theoryHours}h theory · {competency.practicalHours}h
                  practical · {competency.lessons.length} items
                </p>
                <div className="mt-4">
                  <CompetencyProgress
                    competencySlug={competency.slug}
                    lessons={competency.lessons}
                  />
                </div>
                <Link
                  href={`/${competency.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand-tag"
                >
                  Open unit <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-hairline-soft bg-surface-soft">
          <div className="mx-auto grid max-w-6xl gap-4 px-6 py-12 md:grid-cols-2">
            <Link
              href="/project"
              className="rounded-lg border border-hairline bg-canvas p-6 transition-colors hover:border-brand-green"
            >
              <p className="font-mono text-[11px] uppercase tracking-wide text-stone">
                Assessment
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink">
                Smart Home / Office IoT project
              </h3>
              <p className="mt-1 text-sm text-steel">
                The live, editable project proposal — draft status and
                finalisation checklist included.
              </p>
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg border border-hairline bg-canvas p-6 transition-colors hover:border-brand-green"
            >
              <p className="font-mono text-[11px] uppercase tracking-wide text-stone">
                Progress
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink">
                Competency dashboard
              </h3>
              <p className="mt-1 text-sm text-steel">
                See what is complete, what is left, and where your labs stand.
              </p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline bg-canvas">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>Emerging Technologies LMS · Module 9</p>
          <p>Design system: Mintlify + Linear (MIT)</p>
        </div>
      </footer>
    </>
  );
}
