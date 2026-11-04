import { DashboardView } from "@/components/dashboard-view";
import { competencies } from "@/lib/curriculum";

export const metadata = {
  title: "Progress dashboard · Emerging Technologies LMS",
};

export default function DashboardPage() {
  const data = competencies.map((competency) => ({
    code: competency.code,
    slug: competency.slug,
    title: competency.title,
    credits: competency.credits,
    lessons: competency.lessons.map((lesson) => ({
      slug: lesson.slug,
      title: lesson.title,
      kind: lesson.kind,
      minutes: lesson.minutes,
    })),
  }));

  return <DashboardView competencies={data} />;
}
