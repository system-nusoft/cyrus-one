"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import BookingBar from "@/components/ui/BookingBar";
import type { GuestCounts } from "@/components/ui/GuestCounter";

const heroImages = [
  {
    src: "/hero-bg-1.webp",
    alt: "Cyrus One Hotel exterior — modern architecture near Islamabad airport",
  },
  { src: "/hero-bg-2.webp", alt: "Cyrus One Hotel — guest experience" },
  { src: "/hero-bg-3.webp", alt: "Cyrus One Hotel interior — Islamabad" },
];

interface HeroSectionProps {
  onSearch: (fromDate: string, toDate: string, guests: GuestCounts) => void;
  searching: boolean;
}

export default function HeroSection({ onSearch, searching }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
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
        {heroImages.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
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
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-7xl font-normal text-white leading-tight">
            Your British Haven,
            <br /> Minutes from the Runway
          </h1>
          <p className="text-md md:text-lg text-white/80 mt-6 max-w-lg leading-tight">
            Just <span className="font-roboto">5.6</span>km from Islamabad
            International Airport, we bring exacting UK hospitality standards to
            expansive, balcony-lined hotel apartments.
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
