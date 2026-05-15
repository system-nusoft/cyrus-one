"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";
import BookingBar from "@/components/ui/BookingBar";
import type { GuestCounts } from "@/components/ui/GuestCounter";

interface HeroSectionProps {
  onSearch: (fromDate: string, toDate: string, guests: GuestCounts) => void;
  searching: boolean;
}

export default function HeroSection({ onSearch, searching }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      aria-label="Hero — hotel introduction"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Cyrus One Hotel interior — modern architecture near Islamabad airport"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Header overlaid */}
      <Header />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-36 pb-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-normal text-white leading-tight">
            Easily Accessible,
            <br />
            Just Minutes From
            <br />
            The Airport
          </h1>
          <p className="text-sm md:text-base text-white/80 mt-6 max-w-md leading-relaxed">
            Stay close to the airport while remaining seamlessly connected to
            the city and motorway network. Perfectly positioned on Srinagar
            Highway for smooth arrivals, faster departures, and stress-free
            travel.
          </p>
        </div>
      </div>

      {/* Booking bar — anchored to bottom, overlaps hero/content boundary */}
      <div
        id="availability"
        className="relative md:w-[85%] mx-auto z-20 px-4 md:px-10 lg:px-16 pb-0 mb-6 md:mb-8"
      >
        <BookingBar onSearch={onSearch} loading={searching} />
      </div>
    </section>
  );
}
