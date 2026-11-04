"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Circle, RotateCcw } from "lucide-react";
import { lessonKey, writeCompleted } from "@/lib/progress";
import { useCompleted } from "@/lib/use-progress";

export interface DashboardCompetency {
  code: string;
  slug: string;
  title: string;
  credits: number;
  lessons: { slug: string; title: string; kind: string; minutes: number }[];
}

export function DashboardView({
  competencies,
}: {
  competencies: DashboardCompetency[];
}) {
  const completed = useCompleted();

  const totals = useMemo(() => {
    const all = competencies.flatMap((c) =>
      c.lessons.map((l) => lessonKey(c.slug, l.slug)),
    );
    const done = all.filter((key) => completed.includes(key)).length;
    return {
      done,
      total: all.length,
      pct: all.length === 0 ? 0 : Math.round((done / all.length) * 100),
    };
  }, [competencies, completed]);

  return (
    <div className="min-h-screen bg-dash-canvas text-dash-ink">
      <header className="border-b border-dash-hairline">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm text-dash-ink-subtle transition-colors hover:text-dash-ink"
            >
              ← Course home
            </Link>
            <span className="text-dash-hairline-strong">/</span>
            <span className="text-sm font-medium text-dash-ink">Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/instructor"
              className="rounded-md border border-dash-hairline bg-dash-surface-1 px-3 py-1.5 text-sm text-dash-ink transition-colors hover:bg-dash-surface-2"
            >
              Instructor
            </Link>
            <button
              type="button"
              onClick={() => writeCompleted([])}
              className="inline-flex items-center gap-1.5 rounded-md border border-dash-hairline bg-dash-surface-1 px-3 py-1.5 text-sm text-dash-ink-subtle transition-colors hover:text-dash-ink"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-wider text-dash-ink-tertiary">
            Module 9 · 13 credits
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Your competency progress
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-dash-ink-subtle">
            Progress is stored in this browser. C25, C26, and C27 each require
            their lessons, lab evidence, and quiz to be marked complete.
          </p>
        </div>

        <section className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-dash-hairline bg-dash-surface-1 p-5">
            <p className="text-xs text-dash-ink-subtle">Overall</p>
            <p className="mt-2 text-3xl font-semibold">{totals.pct}%</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-dash-surface-3">
              <div
                className="h-full rounded-full bg-dash-accent transition-[width] duration-300"
                style={{ width: `${totals.pct}%` }}
              />
            </div>
            <p className="mt-2 font-mono text-[11px] text-dash-ink-tertiary">
              {totals.done} of {totals.total} items
            </p>
          </div>

          <div className="rounded-xl border border-dash-hairline bg-dash-surface-1 p-5">
            <p className="text-xs text-dash-ink-subtle">Competencies</p>
            <p className="mt-2 text-3xl font-semibold">3</p>
            <p className="mt-4 text-xs text-dash-ink-tertiary">
              C25 · C26 · C27
            </p>
          </div>

          <div className="rounded-xl border border-dash-hairline bg-dash-surface-1 p-5">
            <p className="text-xs text-dash-ink-subtle">Labs</p>
            <p className="mt-2 text-3xl font-semibold">
              {competencies.reduce(
                (n, c) => n + c.lessons.filter((l) => l.kind === "lab").length,
                0,
              )}
            </p>
            <p className="mt-4 text-xs text-dash-ink-tertiary">
              Packet Tracer + Windows evidence
            </p>
          </div>
        </section>

        <div className="grid gap-4 lg:grid-cols-3">
          {competencies.map((competency) => {
            const keys = competency.lessons.map((l) =>
              lessonKey(competency.slug, l.slug),
            );
            const done = keys.filter((k) => completed.includes(k)).length;
            const pct =
              keys.length === 0 ? 0 : Math.round((done / keys.length) * 100);
            return (
              <section
                key={competency.code}
                className="rounded-xl border border-dash-hairline bg-dash-surface-1 p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-dash-surface-2 px-2 py-1 font-mono text-[11px] text-dash-ink-muted">
                    {competency.code}
                  </span>
                  <span className="font-mono text-xs text-dash-ink-tertiary">
                    {pct}%
                  </span>
                </div>
                <h2 className="mt-3 text-sm font-medium text-dash-ink">
                  {competency.title}
                </h2>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-dash-surface-3">
                  <div
                    className="h-full rounded-full bg-dash-accent"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <ul className="mt-4 space-y-2">
                  {competency.lessons.map((lesson) => {
                    const complete = completed.includes(
                      lessonKey(competency.slug, lesson.slug),
                    );
                    return (
                      <li key={lesson.slug}>
                        <Link
                          href={`/${competency.slug}/${lesson.slug}`}
                          className="flex items-start gap-2 rounded-md px-1 py-1 text-[13px] text-dash-ink-subtle transition-colors hover:bg-dash-surface-2 hover:text-dash-ink"
                        >
                          {complete ? (
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-dash-success" />
                          ) : (
                            <Circle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-dash-ink-tertiary" />
                          )}
                          <span className="leading-snug">{lesson.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href={`/${competency.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-xs text-dash-accent transition-colors hover:text-dash-accent-hover"
                >
                  Open unit <ArrowUpRight className="h-3 w-3" />
                </Link>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
