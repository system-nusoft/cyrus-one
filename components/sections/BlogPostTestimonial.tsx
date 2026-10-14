import { Quote, Star } from "lucide-react";

interface BlogPostTestimonialProps {
  quote: string;
  name: string;
  /** Short descriptor shown after the name, e.g. "Guest". */
  role?: string;
  /** Number of filled stars, out of 5. */
  rating?: number;
}

/**
 * Pull-quote card for guest reviews inside a blog post: gold outline with a notch in the top-left
 * border where the quote mark sits, serif quote text and a name/role byline.
 */
export default function BlogPostTestimonial({
  quote,
  name,
  role = "Guest",
  rating = 5,
}: BlogPostTestimonialProps) {
  return (
    <figure className="relative mt-6 md:ml-8 pt-8 pb-8 px-6 md:px-10 border border-[#d9c08a] rounded-tl-none rounded-tr-3xl rounded-b-3xl">
      <span className="absolute -top-7 left-4 bg-white px-3 text-[#b08b4d]" aria-hidden="true">
        <Quote className="w-10 h-10" strokeWidth={1.5} />
      </span>

      <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "fill-[#b08b4d] text-[#b08b4d]" : "text-neutral-300"}`}
            aria-hidden="true"
          />
        ))}
      </div>

      <blockquote className="mt-5 font-playfair text-xl md:text-2xl text-neutral-900 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="mt-6 text-sm text-neutral-500">
        <span className="font-bold text-neutral-900">{name}</span> · {role}
      </figcaption>
    </figure>
  );
}
