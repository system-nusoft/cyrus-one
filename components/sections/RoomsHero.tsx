import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";

export default function RoomsHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col"
      aria-label="Rooms and suites at Cyrus One — space to stay, comfort to settle in"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/rooms-hero-section.png"
          alt="Hero section showing a comfortable hotel bed with white pillows and a colourful accent cushion in a Cyrus One room."
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
            Space To Stay.
            <br />
            Comfort To Settle In.
          </h1>
          <p className="text-md md:text-lg text-white/80 mt-6 max-w-lg leading-tight">
            Discover spacious rooms and suites at Cyrus One, designed for
            business trips, family stays, airport stopovers and longer
            visits. Enjoy modern 5-star comfort, thoughtful amenities and the
            flexibility to make your stay your own.
          </p>

          <Link
            href="#rooms"
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
