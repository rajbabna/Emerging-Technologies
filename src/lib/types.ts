export type CompetencyCode = "C25" | "C26" | "C27";

export type LessonKind = "lesson" | "lab";

export interface Lesson {
  slug: string;
  title: string;
  order: number;
  minutes: number;
  summary: string;
  kind: LessonKind;
  content: string;
}

export interface Competency {
  code: CompetencyCode;
  slug: string;
  title: string;
  shortTitle: string;
  credits: number;
  theoryHours: number;
  practicalHours: number;
  description: string;
  quizTitle: string;
  lessons: Lesson[];
}
