import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, FlaskConical, GraduationCap } from "lucide-react";
import { CompetencyProgress } from "@/components/competency-progress";
import {
  competencies,
  competencyBySlug,
} from "@/lib/curriculum";
import { formatMinutes } from "@/lib/utils";

export function generateStaticParams() {
  return competencies.map((competency) => ({ competency: competency.slug }));
}

export default async function CompetencyPage(
  props: PageProps<"/[competency]">,
) {
  const { competency: slug } = await props.params;
  const competency = competencyBySlug(slug);
  if (!competency) notFound();

  return (
    <article>
      <nav className="flex items-center gap-1.5 text-xs text-stone">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-steel">{competency.code}</span>
      </nav>

      <header className="mt-4 border-b border-hairline-soft pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-sm bg-surface px-2 py-1 font-mono text-[11px] text-steel">
            {competency.code}
          </span>
          <span className="text-xs text-stone">
            {competency.credits} credits · {competency.theoryHours}h theory ·{" "}
            {competency.practicalHours}h practical
          </span>
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.8px] text-ink">
          {competency.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">
          {competency.description}
        </p>
        <div className="mt-6 max-w-md">
          <CompetencyProgress
            competencySlug={competency.slug}
            lessons={competency.lessons}
          />
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-stone">
          Lessons and labs
        </h2>
        <ul className="mt-4 divide-y divide-hairline-soft border-y border-hairline-soft">
          {competency.lessons.map((lesson, index) => (
            <li key={lesson.slug}>
              <Link
                href={`/${competency.slug}/${lesson.slug}`}
                className="group flex items-start gap-4 py-4 transition-colors hover:bg-surface-soft"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-hairline bg-canvas font-mono text-[11px] text-steel">
                  {lesson.kind === "lab" ? (
                    <FlaskConical className="h-3.5 w-3.5" />
                  ) : (
                    String(index + 1).padStart(2, "0")
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-ink">
                      {lesson.title}
                    </span>
                    {lesson.kind === "lab" && (
                      <span className="rounded-sm bg-brand-green-soft/40 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-brand-annotate">
                        Lab
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block text-sm text-steel">
                    {lesson.summary}
                  </span>
                </span>
                <span className="mt-0.5 hidden shrink-0 font-mono text-[11px] text-stone sm:block">
                  {formatMinutes(lesson.minutes)}
                </span>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-stone transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-lg border border-hairline bg-surface-soft p-5">
        <div className="flex items-start gap-3">
          <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-steel" />
          <div>
            <h2 className="text-sm font-semibold text-ink">
              {competency.quizTitle}
            </h2>
            <p className="mt-1 text-sm text-steel">
              Auto-marked competency quiz. Available in Phase 2 — track it on
              the dashboard.
            </p>
            <span className="mt-3 inline-block rounded-full border border-hairline bg-canvas px-3 py-1 font-mono text-[11px] text-stone">
              Phase 2
            </span>
          </div>
        </div>
      </section>
    </article>
  );
}
