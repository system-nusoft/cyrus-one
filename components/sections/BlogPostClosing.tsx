import Image from "next/image";
import type { ReactNode } from "react";

interface BlogPostClosingProps {
  title: string;
  children: ReactNode;
  image?: { src: string; alt: string };
  /** Bottom padding class — override for the post's last section to add extra breathing room before the footer. */
  bottomPaddingClassName?: string;
}

export default function BlogPostClosing({
  title,
  children,
  image,
  bottomPaddingClassName = "pb-8 md:pb-12",
}: BlogPostClosingProps) {
  return (
    <section className={`${bottomPaddingClassName} px-6 md:px-10 lg:px-16`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">{title}</h2>

        <div className="mt-6 flex flex-col gap-6 text-lg text-neutral-600 leading-relaxed">
          {children}
        </div>
      </div>

      {image && (
        <div className="max-w-3xl mx-auto mt-8 md:mt-10 relative aspect-[3/2] overflow-hidden">
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
