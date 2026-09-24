"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, BLOG_FILTER_CATEGORIES } from "@/content/blogs";

// Featured post (index 0) already appears in LatestBlogSection — don't repeat it here.
const OTHER_POSTS = BLOG_POSTS.slice(1);

export default function OtherBlogsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts =
    activeFilter === "All"
      ? OTHER_POSTS
      : OTHER_POSTS.filter((post) => post.categories.includes(activeFilter));

  return (
    <section
      className="py-12 md:py-20 px-6 md:px-10 lg:px-16"
      aria-label="More from the Cyrus One blog"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mr-2">
          Filters
        </span>
        {BLOG_FILTER_CATEGORIES.map((category) => {
          const isActive = category === activeFilter;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              aria-pressed={isActive}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${
                isActive
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-900 border-neutral-300 hover:border-neutral-900"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-x-10 gap-y-12">
        {filteredPosts.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block">
            <div className="relative aspect-[2/1] overflow-hidden bg-neutral-200">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-1.5 rounded-full bg-white border border-neutral-300 text-sm text-neutral-900"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="mt-5 text-2xl md:text-[1.75rem] font-bold text-neutral-900 leading-snug">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              {post.readTime} · Placeholder
            </p>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="mt-12 text-neutral-500">
          No posts in this category yet — check back soon.
        </p>
      )}
    </section>
  );
}
