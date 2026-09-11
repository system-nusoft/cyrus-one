"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { trackConversion } from "@/lib/analytics";

export default function ExploreDeskCta() {
  return (
    <section
      className="relative overflow-hidden py-48 md:py-64"
      aria-label="Ask our front desk"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/explore-desk-cta.png"
          alt="Cyrus One front desk staff assisting guests beneath the Cyrus One by Trivelles sign at the hotel reception."
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16 text-center">
        <h2 className="font-bold text-4xl md:text-6xl text-white tracking-wide">
          Not Sure Where To Start?
        </h2>
        <p className="mt-4 text-md md:text-lg text-white/80 max-w-xl mx-auto">
          Ask our front desk. We&apos;re happy to build a short Islamabad
          itinerary around your flight schedule.
        </p>

        <a
          href={`https://wa.me/923224770222?text=${encodeURIComponent(
            "Hi! I'm staying at Cyrus One and could use some help planning my time in Islamabad. Could you suggest an itinerary based on my flight schedule?",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion("whatsapp_click")}
          className="mt-10 inline-flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-white text-neutral-900 font-semibold text-md hover:bg-neutral-100 transition-colors w-fit"
          aria-label="Ask our front desk"
        >
          <span>Ask Our Front Desk</span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white shrink-0">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </a>
      </div>
    </section>
  );
}
