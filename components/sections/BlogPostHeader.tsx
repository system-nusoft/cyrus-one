"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { format, parse } from "date-fns";
import { ArrowLeft, Share2 } from "lucide-react";
import type { BlogPost } from "@/content/blogs";
import { DEFAULT_BLOG_AUTHOR } from "@/content/blogs";

interface BlogPostHeaderProps {
  post: BlogPost;
  /** Which category pill to show — the detail page shows only one, unlike the listing grid's full set. */
  category: string;
}

export default function BlogPostHeader({ post, category }: BlogPostHeaderProps) {
  const [copied, setCopied] = useState(false);
  const pageUrl = `https://cyrusonehotel.com/blogs/${post.slug}`;
  const author = post.author ?? DEFAULT_BLOG_AUTHOR;
  const initials = author
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  async function handleShare() {
    if (typeof navigator === "undefined") return;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, url: pageUrl });
      } catch {
        // User dismissed the native share sheet — nothing to do.
      }
      return;
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <section
      className="pt-12 md:pt-16 pb-8 md:pb-12 px-6 md:px-10 lg:px-16"
      aria-label={post.title}
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <span className="px-4 py-2 rounded-full bg-[#efe7d3] text-neutral-900 text-xs font-bold tracking-widest uppercase">
            {category}
          </span>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-neutral-900 leading-tight">
          {post.title}
        </h1>

        <div className="mt-8 border-t border-neutral-200 pt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 text-white font-bold text-sm shrink-0">
              {initials}
            </span>
            <div>
              <p className="font-bold text-neutral-900 text-sm md:text-base">{author}</p>
              <p className="text-sm text-neutral-500">
                {format(parse(post.date, "yyyy-MM-dd", new Date()), "MMMM d, yyyy")} ·{" "}
                {post.readTime}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share this post"
              className="relative flex items-center justify-center w-11 h-11 rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              {copied && (
                <span className="absolute -bottom-8 right-0 whitespace-nowrap text-xs bg-neutral-900 text-white px-2 py-1 rounded">
                  Link copied
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-10 md:mt-12 relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>
    </section>
  );
}
