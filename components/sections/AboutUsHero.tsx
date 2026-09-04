import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";

export default function AboutUsHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col"
      aria-label="About Cyrus One — more than a room"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us-hero.png"
          alt="Woman standing on a private balcony at Cyrus One, capturing the hotel's spacious apartment-style accommodation near Islamabad Airport."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/30 to-transparent" />
      </div>

      {/* Header overlaid */}
      <Header />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-36 pb-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-7xl font-normal text-white leading-tight">
            More Than a Room. A Space to Settle In.
          </h1>
          <p className="text-md md:text-lg text-white/80 mt-6 max-w-lg leading-tight">
            Cyrus One brings together luxury, spacious apartment-style
            accommodation, thoughtful amenities and a convenient location near
            Islamabad Airport.
          </p>

          <Link
            href="/#rooms"
            className="mt-8 self-start flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-neutral-900 text-white font-semibold text-md hover:bg-neutral-700 transition-colors w-fit"
            aria-label="Explore rooms and suites"
          >
            <span>Explore Rooms &amp; Suites</span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 shrink-0">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
