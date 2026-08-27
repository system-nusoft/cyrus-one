"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const PLACEHOLDER_IMAGE = "/hotel-exterior.png";

const experiences = [
  { title: "Spacious Luxury Rooms", alt: "Spacious luxury room interior at Cyrus One Hotel", image: "/spacious-luxury-rooms.png" },
  { title: "Complimentary Breakfast", alt: "Complimentary breakfast spread at Cyrus One Hotel", image: "/complimentary-breakfast.png" },
  { title: "Airport Pick-up Available", alt: "Cyrus One Hotel exterior — airport pick-up available", image: "/airport-pickup-available.png" },
  { title: "Free High-Speed Wi-Fi", alt: "Guest room with free high-speed WiFi at Cyrus One Hotel", image: "/free-hi-speed-wifi.png" },
  { title: "24/7 Front Desk", alt: "24/7 front desk service at Cyrus One Hotel", image: "/front-desk-24-7.png" },
  { title: "Family-Friendly Accommodation", alt: "Family-friendly hotel apartment at Cyrus One Hotel", image: "/family-friendly-accommodation.png" },
  { title: "Business-Friendly Facilities", alt: "Business-friendly facilities at Cyrus One Hotel", image: "/business-friendly-facilities.png" },
  { title: "Easy M1/M2 Access", alt: "Quick access to the M1/M2 Interchange from Cyrus One Hotel", image: "/m1-m2-access.jpeg" },
];

export default function ExperienceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section
      className="pt-12 md:pt-20"
      aria-label="The Cyrus One Experience"
    >
      <div className="text-center mb-6 md:mb-10 px-6 md:px-10 lg:px-16">
        <h2 className="font-bold text-3xl md:text-5xl text-neutral-900">
          The Cyrus One Experience
        </h2>
        <p className="text-md md:text-lg text-neutral-600 mt-4 max-w-xl mx-auto leading-relaxed">
          From spacious accommodations to attentive service, every element
          has been carefully considered to create a stay that feels
          welcoming, comfortable, and effortlessly convenient.
        </p>
      </div>

      <div className="relative pl-6 md:pl-10 lg:pl-16">
        <button
          type="button"
          onClick={() => scroll(-1)}
          className="hidden md:flex absolute left-24 top-[42%] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm text-white items-center justify-center hover:bg-black/70 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          className="hidden md:flex absolute right-8 top-[42%] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm text-white items-center justify-center hover:bg-black/70 transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pr-6 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {experiences.map((item) => (
            <div
              key={item.title}
              data-card
              className="shrink-0 w-[80%] sm:w-[55%] md:w-[38%] lg:w-[30%] snap-start"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src={item.image ?? PLACEHOLDER_IMAGE}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 30vw"
                />
              </div>
              <h3 className="mt-4 text-center font-bold text-lg md:text-xl text-neutral-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6 md:mt-10 px-6 md:px-10 lg:px-16">
        <Button
          variant="primary"
          className="px-8 py-3.5 rounded-full text-md md:text-lg"
          onClick={() =>
            document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore Our Journey
        </Button>
      </div>
    </section>
  );
}
