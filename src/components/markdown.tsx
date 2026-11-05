"use client";

import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const components: Components = {
  img({ src, alt, title }) {
    const source = typeof src === "string" ? src : undefined;
    if (!source) return null;
    const resolved =
      source.startsWith("/") && basePath ? `${basePath}${source}` : source;

    return (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolved}
          alt={alt ?? ""}
          loading="lazy"
          decoding="async"
        />
        {(title || alt) && <figcaption>{title ?? alt}</figcaption>}
      </figure>
    );
  },
};

export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose-lesson">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
