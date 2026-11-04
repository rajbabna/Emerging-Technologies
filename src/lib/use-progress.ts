"use client";

import { useSyncExternalStore } from "react";
import { PROGRESS_EVENT, PROGRESS_KEY } from "./progress";

const EMPTY: string[] = [];
let cachedRaw: string | null | undefined;
let cachedValue: string[] = EMPTY;

function getSnapshot(): string[] {
  if (typeof window === "undefined") return EMPTY;
  const raw = window.localStorage.getItem(PROGRESS_KEY);
  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  try {
    const parsed = raw ? JSON.parse(raw) : [];
    cachedValue = Array.isArray(parsed)
      ? parsed.filter((value) => typeof value === "string")
      : EMPTY;
  } catch {
    cachedValue = EMPTY;
  }
  return cachedValue;
}

function getServerSnapshot(): string[] {
  return EMPTY;
}

function subscribe(callback: () => void) {
  window.addEventListener(PROGRESS_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(PROGRESS_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useCompleted() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
