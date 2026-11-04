"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface SidebarCompetency {
  code: string;
  slug: string;
  shortTitle: string;
  lessons: { slug: string; title: string; kind: string }[];
}

export function LessonSidebar({
  competencies,
}: {
  competencies: SidebarCompetency[];
}) {
  const pathname = usePathname();

  return (
    <nav className="space-y-6">
      {competencies.map((competency) => (
        <div key={competency.code}>
          <Link
            href={`/${competency.slug}`}
            className={cn(
              "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium",
              pathname === `/${competency.slug}`
                ? "bg-surface text-ink"
                : "text-steel hover:bg-surface-soft hover:text-ink",
            )}
          >
            <span>{competency.shortTitle}</span>
            <span className="font-mono text-[11px] text-stone">
              {competency.code}
            </span>
          </Link>
          <ul className="mt-1 space-y-0.5 border-l border-hairline-soft pl-2">
            {competency.lessons.map((lesson, index) => {
              const href = `/${competency.slug}/${lesson.slug}`;
              const active = pathname === href;
              return (
                <li key={lesson.slug}>
                  <Link
                    href={href}
                    className={cn(
                      "flex gap-2 rounded-md px-2 py-1.5 text-[13px] leading-snug",
                      active
                        ? "bg-surface font-medium text-ink"
                        : "text-steel hover:bg-surface-soft hover:text-ink",
                    )}
                  >
                    <span className="mt-0.5 w-4 shrink-0 font-mono text-[11px] text-stone">
                      {lesson.kind === "lab" ? "L" : String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{lesson.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
