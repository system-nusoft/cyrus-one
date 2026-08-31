import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutUsGallery() {
  return (
    <section
      className="px-6 md:px-10 lg:px-16 py-12 md:py-20"
      aria-label="Cyrus One gallery"
    >
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-bold text-3xl md:text-5xl text-neutral-900 leading-tight">
          See Cyrus One for Yourself.
        </h2>
        <p className="text-md md:text-lg text-neutral-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          Take a look around our rooms, suites, shared spaces and the details
          that make Cyrus One what it is.
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        {/* Left — two stacked images */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[3/2] overflow-hidden bg-neutral-100">
            <Image
              src="/about-us-gallery-1.png"
              alt="Cyrus One suite interior showing the kitchenette, a lounge chair, and a view through to the bedroom."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden bg-neutral-100">
            <Image
              src="/about-us-gallery-2.png"
              alt="Cyrus One shared lounge with green accent armchairs, a wooden console table, and a staircase beyond."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right — one tall image */}
        <div className="relative aspect-[3/4] lg:aspect-auto overflow-hidden bg-neutral-100">
          <Image
            src="/about-us-gallery-3.png"
            alt="A guest seated at a table checking her phone in Cyrus One's plant-filled courtyard lounge with turquoise chairs."
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10 md:mt-12">
        <Link
          href="/#rooms"
          className="flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-neutral-900 text-white font-semibold text-md hover:bg-neutral-700 transition-colors"
          aria-label="View the Cyrus One gallery"
        >
          <span>View Gallery</span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 shrink-0">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </Link>
      </div>
    </section>
  );
}
