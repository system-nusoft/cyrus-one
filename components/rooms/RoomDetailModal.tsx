"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
  X,
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
} from "lucide-react";
import type { RoomContent } from "@/content/rooms";

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

interface RoomDetailModalProps {
  content: RoomContent;
  isUnavailable: boolean;
  bookingUrl: string;
  onClose: () => void;
}

export default function RoomDetailModal({ content, isUnavailable, bookingUrl, onClose }: RoomDetailModalProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const images = content.images;

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function prevImage() {
    setImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }
  function nextImage() {
    setImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  const modal = (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 md:p-8"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`${content.displayName} details`}
    >
      <div className="relative bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center text-neutral-700 hover:bg-white transition-colors"
          aria-label="Close room details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image slider */}
        <div className="relative aspect-[16/9] rounded-t-3xl overflow-hidden bg-neutral-950">
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
                className={`object-contain transition-opacity duration-300 ${
                  i === imageIndex ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 768px) 100vw, 672px"
              />
            );
          })}

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-neutral-700 flex items-center justify-center hover:bg-white transition-colors shadow"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-neutral-700 flex items-center justify-center hover:bg-white transition-colors shadow"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5" role="tablist" aria-label="Image navigation">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === imageIndex}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => setImageIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === imageIndex ? "w-5 bg-white" : "w-2 bg-black/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="font-bold text-2xl md:text-3xl text-neutral-900 mb-6">
            {content.displayName}
          </h2>

          <div className="space-y-5">

            {/* About */}
            <div className="grid grid-cols-[160px_1fr] gap-4">
              <span className="font-bold text-sm text-neutral-900 pt-0.5">About This Room</span>
              <p className="text-sm text-neutral-600 leading-relaxed">{content.description}</p>
            </div>

            <div className="border-t border-neutral-100" />

            {/* Room Size */}
            <div className="grid grid-cols-[160px_1fr] gap-4">
              <span className="font-bold text-sm text-neutral-900">Room Size</span>
              <p className="text-sm text-neutral-600">{content.area} m²</p>
            </div>

            <div className="border-t border-neutral-100" />

            {/* Room Amenities — badge amenities as icons */}
            <div className="grid grid-cols-[160px_1fr] gap-4">
              <span className="font-bold text-sm text-neutral-900 pt-1">Room Amenities</span>
              <div className="flex flex-wrap gap-x-5 gap-y-4">
                {content.amenities.map((amenity) => (
                  <div key={amenity} className="flex flex-col items-center gap-1.5 w-16">
                    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-input text-neutral-700 shrink-0">
                      {AMENITY_ICONS[amenity] ?? <Wifi className="w-5 h-5" />}
                    </span>
                    <span className="text-xs text-neutral-600 text-center leading-tight w-full">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed amenity categories — text list */}
            {content.detailedAmenities.map((cat) => (
              <div key={cat.category}>
                <div className="border-t border-neutral-100 mb-5" />
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <span className="font-bold text-sm text-neutral-900 pt-0.5">{cat.category}</span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {cat.items.map((item) => (
                      <span key={item} className="text-sm text-neutral-600">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          {isUnavailable ? (
            <button
              type="button"
              disabled
              className="mt-8 w-full py-3.5 rounded-full bg-neutral-900 text-white font-semibold text-sm opacity-40 cursor-not-allowed"
            >
              Unavailable
            </button>
          ) : (
            <Link
              href={bookingUrl}
              className="mt-8 block w-full py-3.5 rounded-full bg-neutral-900 text-white font-semibold text-sm text-center hover:bg-neutral-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              aria-label={`Book ${content.displayName}`}
            >
              Book Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
