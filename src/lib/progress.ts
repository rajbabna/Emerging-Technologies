export const PROGRESS_KEY = "etlms.completed.v1";
export const PROGRESS_EVENT = "etlms-progress";

export function lessonKey(competencySlug: string, lessonSlug: string) {
  return `${competencySlug}/${lessonSlug}`;
}

export function readCompleted(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    return [];
  }
}

export function writeCompleted(ids: string[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event(PROGRESS_EVENT));
}

export function toggleCompleted(key: string) {
  const current = readCompleted();
  const next = current.includes(key)
    ? current.filter((id) => id !== key)
    : [...current, key];
  writeCompleted(next);
  return next.includes(key);
}

export function isCompleted(key: string) {
  return readCompleted().includes(key);
}
