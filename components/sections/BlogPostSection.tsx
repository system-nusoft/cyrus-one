import Image from "next/image";
import type { ReactNode } from "react";

interface BlogPostSectionProps {
  title: string;
  children: ReactNode;
  image?: { src: string; alt: string };
  /** Tailwind aspect-ratio class for the image below the content. Defaults to the 3:2 ratio most blog photos use. */
  imageAspectClassName?: string;
  /** Optional content rendered below the image, in the same text column and style as `children`. */
  afterImage?: ReactNode;
  /** Heading tag. Defaults to "h2"; use "h3" for sub-sections nested under another section's h2. */
  headingLevel?: "h2" | "h3";
  /** Heading size classes. Defaults to the large section-title size. */
  titleClassName?: string;
}

export default function BlogPostSection({
  title,
  children,
  image,
  imageAspectClassName = "aspect-[3/2]",
  afterImage,
  headingLevel: Heading = "h2",
  titleClassName = "text-3xl md:text-5xl",
}: BlogPostSectionProps) {
  return (
    <section className="pb-8 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <Heading className={`${titleClassName} font-bold text-neutral-900`}>{title}</Heading>

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

      {afterImage && (
        <div className="max-w-3xl mx-auto mt-8 md:mt-10 flex flex-col gap-6 text-lg text-neutral-600 leading-relaxed">
          {afterImage}
        </div>
      )}
    </section>
  );
}
