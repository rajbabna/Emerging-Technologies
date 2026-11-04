"use client";

import { Check } from "lucide-react";
import { lessonKey, toggleCompleted } from "@/lib/progress";
import { useCompleted } from "@/lib/use-progress";
import { cn } from "@/lib/utils";

export function CompleteLesson({
  competencySlug,
  lessonSlug,
}: {
  competencySlug: string;
  lessonSlug: string;
}) {
  const key = lessonKey(competencySlug, lessonSlug);
  const completed = useCompleted();
  const done = completed.includes(key);

  return (
    <button
      type="button"
      onClick={() => toggleCompleted(key)}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
        done
          ? "bg-brand-green text-primary"
          : "bg-primary text-on-primary hover:bg-charcoal",
      )}
      aria-pressed={done}
    >
      <Check className="h-4 w-4" strokeWidth={2.5} />
      {done ? "Completed" : "Mark as complete"}
    </button>
  );
}
