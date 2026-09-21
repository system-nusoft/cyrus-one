import Image from "next/image";
import type { ReactNode } from "react";

interface BlogPostSectionProps {
  number: string;
  title: string;
  children: ReactNode;
  image?: { src: string; alt: string };
  /** Tailwind aspect-ratio class for the image below the content. Defaults to the 3:2 ratio most blog photos use. */
  imageAspectClassName?: string;
}

export default function BlogPostSection({
  number,
  title,
  children,
  image,
  imageAspectClassName = "aspect-[3/2]",
}: BlogPostSectionProps) {
  return (
    <section className="pb-8 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-baseline gap-3">
          <span className="font-roboto font-bold text-lg text-[#b08b4d]">{number}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">{title}</h2>
        </div>

        <div className="mt-6 flex flex-col gap-6 text-lg text-neutral-600 leading-relaxed">
          {children}
        </div>
      </div>

      {image && (
        <div
          className={`max-w-3xl mx-auto mt-8 md:mt-10 relative ${imageAspectClassName} overflow-hidden`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      )}
    </section>
  );
}
