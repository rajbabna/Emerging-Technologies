import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight, Clock, FlaskConical } from "lucide-react";
import { CompleteLesson } from "@/components/complete-lesson";
import { Markdown } from "@/components/markdown";
import {
  competencies,
  findLesson,
} from "@/lib/curriculum";
import { formatMinutes } from "@/lib/utils";

export function generateStaticParams() {
  return competencies.flatMap((competency) =>
    competency.lessons.map((lesson) => ({
      competency: competency.slug,
      lesson: lesson.slug,
    })),
  );
}

export default async function LessonPage(
  props: PageProps<"/[competency]/[lesson]">,
) {
  const { competency: competencySlug, lesson: lessonSlug } = await props.params;
  const found = findLesson(competencySlug, lessonSlug);
  if (!found) notFound();

  const { competency, lesson } = found;
  const index = competency.lessons.findIndex((item) => item.slug === lesson.slug);
  const previous = index > 0 ? competency.lessons[index - 1] : undefined;
  const next =
    index < competency.lessons.length - 1
      ? competency.lessons[index + 1]
      : undefined;

  return (
    <article className="min-w-0">
      <nav className="flex items-center gap-1.5 text-xs text-stone">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href={`/${competency.slug}`} className="hover:text-ink">
          {competency.code}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="truncate text-steel">{lesson.title}</span>
      </nav>

      <header className="mt-4 border-b border-hairline-soft pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-sm bg-surface px-2 py-1 font-mono text-[11px] text-steel">
            {competency.code}
          </span>
          {lesson.kind === "lab" && (
            <span className="inline-flex items-center gap-1 rounded-sm bg-brand-green-soft/40 px-1.5 py-1 font-mono text-[10px] uppercase tracking-wide text-brand-annotate">
              <FlaskConical className="h-3 w-3" /> Lab
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-xs text-stone">
            <Clock className="h-3 w-3" /> {formatMinutes(lesson.minutes)}
          </span>
        </div>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.6px] text-ink">
          {lesson.title}
        </h1>
        <p className="mt-2 max-w-2xl text-base text-steel">{lesson.summary}</p>
      </header>

      <div className="mt-8 max-w-3xl">
        <Markdown content={lesson.content} />
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-hairline-soft pt-6">
        <CompleteLesson
          competencySlug={competency.slug}
          lessonSlug={lesson.slug}
        />
        <Link
          href={`/${competency.slug}`}
          className="text-sm text-steel hover:text-ink"
        >
          All {competency.code} lessons
        </Link>
      </div>

      <nav className="mt-8 grid gap-3 sm:grid-cols-2">
        {previous ? (
          <Link
            href={`/${competency.slug}/${previous.slug}`}
            className="group rounded-lg border border-hairline p-4 transition-colors hover:border-brand-green"
          >
            <span className="flex items-center gap-1 text-xs text-stone">
              <ChevronLeft className="h-3 w-3" /> Previous
            </span>
            <span className="mt-1 block text-sm font-medium text-ink">
              {previous.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/${competency.slug}/${next.slug}`}
            className="group rounded-lg border border-hairline p-4 text-right transition-colors hover:border-brand-green"
          >
            <span className="flex items-center justify-end gap-1 text-xs text-stone">
              Next <ChevronRight className="h-3 w-3" />
            </span>
            <span className="mt-1 block text-sm font-medium text-ink">
              {next.title}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
