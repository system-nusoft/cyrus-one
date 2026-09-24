import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { format, parse } from "date-fns";
import { BLOG_POSTS } from "@/content/blogs";

export default function LatestBlogSection() {
  const latest = BLOG_POSTS[0];
  if (!latest) return null;

  return (
    <section
      className="py-12 md:py-20 px-6 md:px-10 lg:px-16"
      aria-label="Latest from Cyrus One"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
        Latest From Cyrus One
      </h2>

      <div className="mt-8 md:mt-10 grid md:grid-cols-2 border border-neutral-300">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src={latest.image.src}
            alt={latest.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="p-8 md:p-10 flex flex-col">
          <div className="flex flex-wrap gap-3">
            {latest.categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 rounded-full border border-neutral-300 text-sm text-neutral-700"
              >
                {category}
              </span>
            ))}
          </div>

          <h3 className="mt-6 text-2xl md:text-3xl font-bold text-neutral-900 leading-snug">
            {latest.title}
          </h3>

          <p className="mt-4 text-md text-neutral-600">{latest.excerpt}</p>

          <div className="mt-8 md:mt-auto pt-8 flex items-center justify-between">
            <span className="text-sm text-neutral-500 font-roboto">
              {format(parse(latest.date, "yyyy-MM-dd", new Date()), "MMMM d, yyyy")}
            </span>
            <Link
              href={`/blogs/${latest.slug}`}
              className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-neutral-900 underline-offset-4 hover:underline"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
