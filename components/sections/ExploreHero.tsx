"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import { trackConversion } from "@/lib/analytics";

export default function ExploreHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col"
      aria-label="Explore Islamabad from Cyrus One — your gateway to the capital"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/explore-hero-bg.png"
          alt="Faisal Mosque in Islamabad at dusk, its four minarets and tent-shaped prayer hall set against a dramatic purple sky below the Margalla Hills."
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
            Your Gateway To Islamabad
          </h1>
          <p className="text-md md:text-lg text-white/80 mt-6 max-w-lg leading-tight">
            Staying near Islamabad International Airport puts you just minutes
            from your flight, while giving you easy access to the capital&apos;s
            best sights.
          </p>

          <a
            href={`https://wa.me/923224770222?text=${encodeURIComponent(
              "Hi! I’m planning a trip to Islamabad and looking for a comfortable place to stay while I explore the city. Could you share your available rooms and rates at Cyrus One?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion("whatsapp_click")}
            className="mt-8 self-start flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-neutral-900 text-white font-semibold text-md hover:bg-neutral-700 transition-colors w-fit"
            aria-label="Plan your Islamabad stay"
          >
            <span>Plan Your Islamabad Stay</span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 shrink-0">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
