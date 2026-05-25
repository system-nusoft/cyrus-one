"use client";

import { useState } from "react";
import Link from "next/link";
import RoomDetailModal from "./RoomDetailModal";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Wifi,
  Wind,
  Tv,
  ShowerHead,
  UtensilsCrossed,
  DoorOpen,
  Landmark,
  Building2,
  Sun,
  BedDouble,
  Users,
  Maximize2,
} from "lucide-react";
import type { OraRoomCategory } from "@/services/ora-pms/types";
import type { RoomContent } from "@/content/rooms";
import type { SearchContext } from "@/components/sections/RoomListingsSection";

const AMENITY_ICONS: Record<string, React.ReactNode> = {
  "Private kitchenette": <UtensilsCrossed className="w-5 h-5" />,
  "Private bathroom": <ShowerHead className="w-5 h-5" />,
  "Balcony": <DoorOpen className="w-5 h-5" />,
  "Landmark view": <Landmark className="w-5 h-5" />,
  "City view": <Building2 className="w-5 h-5" />,
  "Air conditioning": <Wind className="w-5 h-5" />,
  "Patio": <Sun className="w-5 h-5" />,
  "Flat-screen TV": <Tv className="w-5 h-5" />,
  "Free WiFi": <Wifi className="w-5 h-5" />,
};

function formatPKR(amount: number) {
  return new Intl.NumberFormat("en-PK").format(Math.round(amount));
}

interface RoomCardProps {
  content: RoomContent;
  availability: OraRoomCategory;
  searchContext: SearchContext;
}

function buildBookingUrl(content: RoomContent, availability: OraRoomCategory, ctx: SearchContext) {
  const p = new URLSearchParams({
    categoryId: availability.CategoryId,
    planId: availability.LocalPlanId,
    roomName: content.displayName,
    checkIn: ctx.fromDate,
    checkOut: ctx.toDate,
    adults: String(ctx.guests.adults),
    children: String(ctx.guests.children),
    rooms: String(ctx.guests.rooms),
    rate: String(availability.TotalRate),
    tax: String(availability.TaxAmount),
    nights: String(availability.Nights),
  });
  return `/book?${p.toString()}`;
}

export default function RoomCard({ content, availability, searchContext }: RoomCardProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const images = content.images;
  const isUnavailable = availability.AvailableRooms === 0;
  const bookingUrl = buildBookingUrl(content, availability, searchContext);
  const pricePerNight = availability.TotalRate / availability.Nights;

  function prevImage() {
    setImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function nextImage() {
    setImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <>
    <article
      className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden lg:overflow-visible border border-neutral-100 shadow-sm hover:shadow-md transition-shadow lg:border-0 lg:shadow-none lg:hover:shadow-none"
      aria-label={`${content.displayName} room`}
    >
      {/* Image carousel */}
      <div
        className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] bg-neutral-100 lg:rounded-3xl lg:overflow-hidden cursor-pointer group"
        onClick={() => setModalOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`View ${content.displayName} photos and details`}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setModalOpen(true); }}
      >
        {images.map((src, i) => {
          const prev = (imageIndex - 1 + images.length) % images.length;
          const next = (imageIndex + 1) % images.length;
          if (i !== imageIndex && i !== prev && i !== next) return null;
          return (
            <Image
              key={src}
              src={src}
              alt={`${content.displayName} — photo ${i + 1} of ${images.length}`}
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-300 group-hover:scale-[1.02] ${
                i === imageIndex ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          );
        })}


        {images.length > 1 && (
          <>
            {/* Arrows — navigate images on both mobile and desktop, stopPropagation prevents modal opening */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="flex absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-neutral-700 items-center justify-center hover:bg-white transition-colors shadow"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="flex absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-neutral-700 items-center justify-center hover:bg-white transition-colors shadow"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex absolute bottom-4 left-0 right-0 justify-center gap-1.5" role="tablist" aria-label="Image navigation">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === imageIndex}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={(e) => { e.stopPropagation(); setImageIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === imageIndex ? "bg-white scale-125" : "bg-black/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Room details */}
      <div className="p-6 md:px-8 md:py-0 flex flex-col gap-5 bg-white">
        <h3 className="font-bold text-2xl md:text-3xl text-neutral-900 small-caps">
          {content.displayName}
        </h3>

        {/* Overview */}
        <div>
          <p className="font-bold text-lg text-neutral-900 mb-1">Overview</p>
          <p className="text-md text-neutral-900 leading-tight line-clamp-2">
            {content.description}
          </p>
        </div>

        {/* Pill tags */}
        <div className="flex flex-wrap gap-2 font-bold">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-input text-sm text-neutral-700">
            <BedDouble className="w-3.5 h-3.5" />
            {content.bedType}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-input text-sm text-neutral-700">
            <Users className="w-3.5 h-3.5" />
            <span className="font-roboto">{content.maxGuests}</span> Guests
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-input text-sm text-neutral-700">
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="font-roboto">{content.area}</span> m²
          </span>
        </div>

        {/* Amenities grid */}
        <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-4 font-bold">
          {(["Free WiFi", "Air conditioning", "Flat-screen TV", "Private kitchenette"] as const).map((amenity) => (
            <div key={amenity} className="flex flex-col items-center gap-1.5 w-16">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-input text-neutral-700 shrink-0">
                {AMENITY_ICONS[amenity]}
              </span>
              <span className="text-xs text-neutral-600 text-center leading-tight w-full">
                {amenity}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing bar */}
        <div className="mt-auto rounded-3xl border-[1px] border-black bg-white px-3 md:px-5 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg text-neutral-900">
              PKR <span className="font-roboto">{formatPKR(pricePerNight)}</span>
              <span className="font-bold text-sm md:text-lg text-neutral-900"> + Tax</span>
            </p>
            <p className="text-sm md:text-lg font-bold text-neutral-900 mt-0.5">per night</p>
          </div>

          {isUnavailable ? (
            <span className="shrink-0 px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm opacity-40 cursor-not-allowed">
              Unavailable
            </span>
          ) : (
            <Link
              href={bookingUrl}
              className="shrink-0 px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              aria-label={`Book ${content.displayName}`}
            >
              Book Now
            </Link>
          )}
        </div>
      </div>
    </article>

      {modalOpen && (
        <RoomDetailModal
          content={content}
          isUnavailable={isUnavailable}
          bookingUrl={bookingUrl}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
