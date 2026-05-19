"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";

const platforms = [
  {
    name: "Booking.com",
    icon: "/booking.svg",
    rating: "5.0",
    reviews: 3,
    href: "https://www.booking.com/hotel/pk/cyrus-one-by-trivelles.html",
  },
  {
    name: "Agoda",
    icon: "/agoda.svg",
    rating: "4.0",
    reviews: 3,
    href: "https://www.agoda.com/cyrus-one-by-trivelles/hotel/islamabad-pk.html",
  },
  {
    name: "Trip.com",
    icon: "/trip.svg",
    rating: "5.0",
    reviews: 3,
    href: "https://www.trip.com/hotels/detail/?cityEnName=Islamabad&cityId=531&hotelId=134035371",
  },
  {
    name: "Expedia",
    icon: "/expedia.svg",
    rating: "-",
    reviews: "No",
    href: "https://www.expedia.com/Cyrus-One-By-Trivelles.h128379625.Hotel-Information",
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
  return (
    <section
      className="pb-12 md:py-20 px-6 md:px-10 lg:px-16"
      aria-label="Guest reviews"
    >
      {/* Section header */}
      <div className="text-center mb-4 md:mb-10 hidden">
        <h2 className="font-bold text-3xl md:text-5xl text-neutral-900">
          Guest Reviews
        </h2>
        <p className="text-neutral-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          Hear from our guests — business travellers, families, and transit
          passengers who chose Cyrus One for their Islamabad stay.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-4 md:gap-6 items-stretch">
        {/* Left — Google rating card */}
        <div className="relative rounded-3xl overflow-hidden min-h-[250px]">
          <Image
            src="/reviews-bg.png"
            alt="Cyrus One Hotel exterior — Islamabad"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div>
              <p className="font-bold text-white text-2xl">Google Reviews</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-roboto font-bold text-white text-5xl">
                  4.7
                </span>
                <StarRating count={5} />
              </div>
            </div>

            <Link
              href="https://www.google.com/search?q=Cyrus+One+By+Trivelles%2C+Sector+A+Main+Boulevard%2C+Airport+Enclave+Islamabad%2C+44000#lrd=0x38df99b28f3e888d:0x59e247730416d56,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-white font-semibold text-md text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Leave a review on Google"
            >
              <span>Leave a Review</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right — Platform ratings card */}
        <div className="bg-neutral-900 rounded-3xl p-8 flex items-center">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 w-full">
            {platforms.filter((p) => p.rating !== "-").map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-3">
                {/* Icon circle */}
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shrink-0 p-3">
                  <Image
                    src={p.icon}
                    alt={p.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-white font-bold text-3xl">
                  <span className="font-roboto">{p.rating}</span>
                  {p.rating !== "-" && <StarRating count={1} />}
                </div>

                {/* Review count pill */}
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-roboto text-sm text-white border border-white rounded-full px-3 py-1 whitespace-nowrap hover:bg-white/10 transition-colors"
                  aria-label={`${p.name} — ${p.reviews} reviews`}
                >
                  {p.reviews} reviews
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
