"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Abdullah Q.",
    text: "Seamless check-ins, high-speed fiber WiFi, and dedicated workspaces thoughtfully designed for productivity, comfort, and rest. Highly recommend for business travellers.",
    rating: 5,
    image: "/review-person-1.png",
  },
  {
    id: 2,
    name: "Sara M.",
    text: "Perfect location for a transit stay. The room was spotless, the bed was comfortable, and I felt completely rested before my next flight. Will definitely stay again.",
    rating: 5,
    image: "/review-person-2.png",
  },
  {
    id: 3,
    name: "Usman K.",
    text: "Great value for money in Islamabad. The staff were incredibly helpful and the amenities were top notch. The proximity to the airport made everything so convenient.",
    rating: 5,
    image: "/review-person-1.png",
  },
  {
    id: 4,
    name: "Aisha R.",
    text: "We stayed as a family and the spacious suite was perfect for us. The kids loved it and we had everything we needed. A genuinely comfortable and stylish hotel.",
    rating: 5,
    image: "/review-person-2.png",
  },
  {
    id: 5,
    name: "Bilal T.",
    text: "Modern, clean, and ideally placed on Srinagar Highway. Quick check-in, fast Wi-Fi, great coffee. Exactly what you need when you have an early morning flight.",
    rating: 5,
    image: "/review-person-1.png",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${count} out of 5 stars`}
    >
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function GuestReviewsSection() {
  const [current, setCurrent] = useState(0);

  function prev() {
    setCurrent((i) => (i === 0 ? reviews.length - 1 : i - 1));
  }

  function next() {
    setCurrent((i) => (i === reviews.length - 1 ? 0 : i + 1));
  }

  const review = reviews[current];

  return (
    <section
      className="pb-20 md:pb-20 px-6 md:px-10 lg:px-16"
      aria-label="Guest reviews"
    >
      {/* Section header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-bold text-4xl md:text-5xl text-neutral-900">
          Guest Reviews
        </h2>
        <p className="text-neutral-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          Hear from our guests — business travellers, families, and transit
          passengers who chose CyrusOne for their Islamabad stay.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left — Google rating card */}
        <div className="relative rounded-3xl overflow-hidden min-h-[340px] md:min-h-[400px]">
          <Image
            src="/hotel-exterior.png"
            alt="CyrusOne Hotel exterior — Islamabad"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div>
              <p className="font-bold text-white text-lg">Google Reviews</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="font-playfair font-bold text-white text-5xl">
                  4.7
                </span>
                <StarRating count={5} />
              </div>
            </div>

            <Link
              href="#availability"
              className="self-start flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-white font-semibold text-md text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Check room availability"
            >
              <span>Check Availability</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right — Review slider */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Reviewer photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] min-h-[280px]">
              <Image
                src={review.image}
                alt={`Photo of ${review.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>

            {/* Review content + arrows */}
            <div className="flex flex-col gap-4 justify-center md:justify-between">
              <div
                className="flex gap-2 order-last sm:order-first"
                aria-label="Review navigation"
              >
                <button
                  type="button"
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-input flex items-center justify-center text-white hover:bg-neutral-300 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-input flex items-center justify-center text-white hover:bg-neutral-300 transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-xl text-neutral-900">
                  {review.name}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {review.text}
                </p>
                <StarRating count={review.rating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
