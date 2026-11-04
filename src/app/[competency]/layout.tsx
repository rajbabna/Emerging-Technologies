import Link from "next/link";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { competencies } from "@/lib/curriculum";

export default function CompetencyLayout(
  props: LayoutProps<"/[competency]">,
) {
  const sidebar = competencies.map((competency) => ({
    code: competency.code,
    slug: competency.slug,
    shortTitle: competency.shortTitle,
    lessons: competency.lessons.map((lesson) => ({
      slug: lesson.slug,
      title: lesson.title,
      kind: lesson.kind,
    })),
  }));

  return (
    <div className="min-h-screen bg-canvas">
      <header className="sticky top-0 z-20 border-b border-hairline-soft bg-canvas/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[10px] font-semibold text-on-primary">
                ET
              </span>
              <span className="hidden text-sm font-semibold text-ink sm:block">
                Emerging Technologies
              </span>
            </Link>
          </div>
          <nav className="flex items-center gap-1 text-sm">
            <Link
              href="/project"
              className="rounded-full px-3 py-1.5 text-steel hover:bg-surface hover:text-ink"
            >
              Project
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full bg-primary px-4 py-1.5 text-on-primary hover:bg-charcoal"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-8 px-6 py-8">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
            <p className="mb-3 px-3 font-mono text-[11px] uppercase tracking-wider text-stone">
              Curriculum
            </p>
            <LessonSidebar competencies={sidebar} />
          </div>
        </aside>

        <div className="min-w-0 flex-1">{props.children}</div>
      </div>
    </div>
  );
}
