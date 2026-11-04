"use client";

import { lessonKey } from "@/lib/progress";
import { useCompleted } from "@/lib/use-progress";

export function CompetencyProgress({
  competencySlug,
  lessons,
  tone = "light",
}: {
  competencySlug: string;
  lessons: { slug: string }[];
  tone?: "light" | "dark";
}) {
  const completed = useCompleted();
  const done = lessons.filter((lesson) =>
    completed.includes(lessonKey(competencySlug, lesson.slug)),
  ).length;
  const pct =
    lessons.length === 0 ? 0 : Math.round((done / lessons.length) * 100);
  const dark = tone === "dark";

  return (
    <div className="w-full">
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className={dark ? "text-dash-ink-subtle" : "text-steel"}>
          {done} of {lessons.length} complete
        </span>
        <span
          className={dark ? "font-mono text-dash-ink-muted" : "font-mono text-steel"}
        >
          {pct}%
        </span>
      </div>
      <div
        className={
          dark
            ? "h-2 w-full overflow-hidden rounded-full bg-dash-surface-3"
            : "h-2 w-full overflow-hidden rounded-full bg-hairline-soft"
        }
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={
            dark
              ? "h-full rounded-full bg-dash-accent transition-[width] duration-300"
              : "h-full rounded-full bg-brand-green transition-[width] duration-300"
          }
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
