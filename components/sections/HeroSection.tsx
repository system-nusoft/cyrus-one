"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BookingBar from "@/components/ui/BookingBar";
import type { GuestCounts } from "@/components/ui/GuestCounter";

export const heroSlides = [
  {
    src: "/hero-bg-1.webp",
    alt: "Aerial view of Cyrus One Hotel's tiled courtyard lounge with seating and plants, a luxury hotel just 5 km from Islamabad International Airport.",
    heading: "Luxury Hotel Near Islamabad Airport",
    copy: "Experience premium comfort just 5 km from Islamabad International Airport, offering elegant accommodations for business travellers, families, and convenient airport stays.",
  },
  {
    src: "/hero-bg-2.webp",
    alt: "Cyrus One by Trivelles hotel lobby with fresh flowers and lounge seating, where British hospitality meets Pakistani warmth in Islamabad.",
    heading: "A British Standard of Hospitality",
    copy: "Experience elevated comfort through our partnership with Trivelles Hotels, bringing British-inspired hospitality and exceptional service to every stay.",
  },
  {
    src: "/hero-bg-3.webp",
    alt: "Cyrus One by Trivelles reception desk and staff welcoming guests, a hotel near Islamabad Airport with easy access via the M1/M2 Interchange.",
    heading: "Stay Connected to Every Journey",
    copy: "Perfectly positioned near the M1/M2 Interchange, our hotel offers seamless access to Islamabad, making every business trip, holiday, or stopover effortless.",
  },
];

interface HeroSectionProps {
  onSearch: (fromDate: string, toDate: string, guests: GuestCounts) => void;
  searching: boolean;
}

export default function HeroSection({ onSearch, searching }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      aria-label="Hero — hotel introduction"
    >
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Header overlaid */}
      <Header />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-36 pb-8">
        <div className="max-w-2xl">
          <h1
            key={`heading-${current}`}
            className="text-4xl md:text-7xl font-normal text-white leading-tight animate-[fadeIn_1.5s_ease]"
          >
            {heroSlides[current].heading}
          </h1>
          <p
            key={`copy-${current}`}
            className="text-md md:text-lg text-white/80 mt-6 max-w-lg leading-tight animate-[fadeIn_1.5s_ease]"
          >
            {heroSlides[current].copy}
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
