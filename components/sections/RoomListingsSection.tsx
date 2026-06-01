"use client";

import { useRef, useState } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import RoomCard from "@/components/rooms/RoomCard";
import RoomCardSkeleton from "@/components/rooms/RoomCardSkeleton";
import { roomContent } from "@/content/rooms";
import type { OraRoomCategory } from "@/services/ora-pms/types";
import type { GuestCounts } from "@/components/ui/GuestCounter";

const INITIAL_VISIBLE = 4;

export interface SearchContext {
  fromDate: string;
  toDate: string;
  guests: GuestCounts;
}

interface RoomListingsSectionProps {
  rooms: OraRoomCategory[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  searchContext: SearchContext;
}

export default function RoomListingsSection({
  rooms,
  loading,
  error,
  onRetry,
  searchContext,
}: RoomListingsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const viewMoreRef = useRef<HTMLDivElement>(null);

  const totalGuests = searchContext.guests.adults + searchContext.guests.children;
  const numberOfRooms = searchContext.guests.rooms;
  const guestsPerRoom = Math.ceil(totalGuests / numberOfRooms);

  const HIDDEN_CATEGORIES = new Set(["2 Bed Presendential Suites", "3 Bed Executive", "2 Bed Suite"]);

  const sortedRooms = [...rooms]
    .filter((room) => {
      if (HIDDEN_CATEGORIES.has(room.Category)) return false;
      const content = roomContent[room.Category];
      if (!content) return true;
      const extraMattress = content.slug !== "standard-double" ? 1 : 0;
      const effectiveCapacity = content.maxGuests + extraMattress;
      return guestsPerRoom <= effectiveCapacity;
    })
    .sort((a, b) => b.TotalRate / b.Nights - a.TotalRate / a.Nights);

  const visibleRooms = showAll
    ? sortedRooms
    : sortedRooms.slice(0, INITIAL_VISIBLE);
  const hasMore = sortedRooms.length > INITIAL_VISIBLE;

  return (
    <section
      id="rooms"
      className="pt-12 md:pt-20 pb-12 md:pb-20 px-6 md:px-10 lg:px-16"
      aria-label="Room listings"
    >
      {/* Section header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-bold text-3xl md:text-5xl text-neutral-900">
          Our Signature Hotel Apartment Collections
        </h2>
        <p className="text-neutral-900 mt-3 text-md md:text-lg">
          Thoughtfully designed layouts, premium amenities, and the space you
          need to unwind in style.
        </p>
      </div>

      {/* Loading state */}
      {loading && (
        <div
          className="flex flex-col gap-8 md:gap-12"
          aria-live="polite"
          aria-busy="true"
        >
          {[...Array(3)].map((_, i) => (
            <RoomCardSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div
          className="flex flex-col items-center gap-4 py-16 text-center"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-10 h-10 text-red-400" />
          <p className="font-semibold text-neutral-700 text-lg">
            Unable to load room availability
          </p>
          <p className="text-sm text-neutral-500 max-w-sm">{error}</p>
          <button
            type="button"
            onClick={onRetry}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      )}

      {/* No rooms match occupancy */}
      {!loading && !error && sortedRooms.length === 0 && rooms.length > 0 && (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <p className="font-semibold text-neutral-700 text-lg">
            No rooms available for your selection
          </p>
          <p className="text-sm text-neutral-500 max-w-sm">
            Try reducing the number of guests or increasing the number of rooms.
          </p>
        </div>
      )}

      {/* Room cards */}
      {!loading && !error && sortedRooms.length > 0 && (
        <>
          <div className="flex flex-col gap-8 md:gap-12">
            {visibleRooms.map((room) => {
              const content = roomContent[room.Category];

              if (!content) {
                console.warn(
                  `No content found for room category: "${room.Category}"`,
                );
                return (
                  <div
                    key={room.CategoryId}
                    className="rounded-3xl border border-dashed border-neutral-200 p-8 text-center"
                  >
                    <p className="text-sm text-neutral-400">
                      Room information not available for{" "}
                      <strong>{room.Category}</strong>
                    </p>
                  </div>
                );
              }

              return (
                <RoomCard
                  key={room.CategoryId}
                  content={content}
                  availability={room}
                  searchContext={searchContext}
                />
              );
            })}
          </div>

          {/* View More / View Less */}
          {hasMore && (
            <div ref={viewMoreRef} className="relative mt-10">
              {/* Gradient fade — hidden when expanded */}
              {!showAll && (
                <div className="absolute -top-80 left-0 right-0 h-80 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              )}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    const collapsing = showAll;
                    setShowAll((prev) => !prev);
                    if (collapsing) {
                      requestAnimationFrame(() => {
                        viewMoreRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "end",
                        });
                      });
                    }
                  }}
                  className="px-8 py-3 rounded-full border border-neutral-900 font-normal text-md text-neutral-900 hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  aria-expanded={showAll}
                >
                  {showAll ? "View Less" : "View More"}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
