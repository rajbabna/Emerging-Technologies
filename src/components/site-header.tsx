import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-hairline-soft bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-[11px] font-semibold text-on-primary">
            ET
          </span>
          <span className="text-sm font-semibold text-ink">
            Emerging Technologies
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            href="/#curriculum"
            className="rounded-full px-3 py-2 text-steel transition-colors hover:bg-surface hover:text-ink"
          >
            Curriculum
          </Link>
          <Link
            href="/project"
            className="rounded-full px-3 py-2 text-steel transition-colors hover:bg-surface hover:text-ink"
          >
            Project
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full bg-primary px-4 py-2 text-on-primary transition-colors hover:bg-charcoal"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
