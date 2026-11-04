import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { SiteHeader } from "@/components/site-header";
import { projectProposalMarkdown } from "@/lib/project-proposal.generated";

export const metadata = {
  title: "Project proposal · Emerging Technologies LMS",
};

export default function ProjectPage() {
  const content = projectProposalMarkdown;

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-steel hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Course home
        </Link>

        <div className="mt-6 rounded-lg border border-brand-warn/30 bg-brand-warn/5 px-4 py-3 text-sm text-slate">
          <strong className="font-semibold text-ink">Draft.</strong> This
          proposal is the editable source of truth and will be finalised later.
          Fields marked TBD are still to be completed.
        </div>

        <div className="mt-8">
          <Markdown content={content} />
        </div>
      </main>
    </>
  );
}
