import Link from "next/link";

export const metadata = {
  title: "Instructor · Emerging Technologies LMS",
};

export default function InstructorPage() {
  return (
    <div className="min-h-screen bg-dash-canvas text-dash-ink">
      <header className="border-b border-dash-hairline">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-sm text-dash-ink-subtle hover:text-dash-ink"
            >
              ← Dashboard
            </Link>
            <span className="text-dash-hairline-strong">/</span>
            <span className="text-sm font-medium">Instructor</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-dash-ink-tertiary">
          Cohort tools
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Instructor dashboard
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-dash-ink-subtle">
          Marking, cohort progress, and grade export arrive in Phase 2 and
          Phase 3. This shell is ready for them.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Marking queue", "0 submissions", "Phase 3"],
            ["Gradebook", "No results yet", "Phase 2"],
            ["Cohort analytics", "No data yet", "Phase 4"],
          ].map(([title, detail, phase]) => (
            <section
              key={title}
              className="rounded-xl border border-dash-hairline bg-dash-surface-1 p-5"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium">{title}</h2>
                <span className="rounded-full bg-dash-surface-2 px-2 py-0.5 font-mono text-[10px] text-dash-ink-tertiary">
                  {phase}
                </span>
              </div>
              <p className="mt-3 text-xs text-dash-ink-subtle">{detail}</p>
            </section>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-dash-hairline bg-dash-surface-1 p-5">
          <h2 className="text-sm font-medium">Content status</h2>
          <p className="mt-1 text-xs text-dash-ink-subtle">
            Lessons are authored in the repo and shipped with the app. The
            authoring UI is a Phase 4 item.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex rounded-md bg-dash-accent px-3 py-1.5 text-sm font-medium text-white hover:bg-dash-accent-hover"
          >
            Review course content
          </Link>
        </div>
      </main>
    </div>
  );
}
