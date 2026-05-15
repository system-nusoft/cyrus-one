"use client";

import { useState, useEffect, useCallback } from "react";
import { format, addDays } from "date-fns";
import HeroSection from "@/components/sections/HeroSection";
import RibbonSection from "@/components/sections/RibbonSection";
import RoomListingsSection from "@/components/sections/RoomListingsSection";
import ModernTravellersSection from "@/components/sections/ModernTravellersSection";
import VideoSection from "@/components/sections/VideoSection";
import GuestReviewsSection from "@/components/sections/GuestReviewsSection";
import DiningSection from "@/components/sections/DiningSection";
import Footer from "@/components/layout/Footer";
import type { OraRoomCategory } from "@/services/ora-pms/types";
import type { GuestCounts } from "@/components/ui/GuestCounter";

const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Cyrus One Hotel",
  description:
    "Cyrus One by Trivelles — a premium 55-room hotel in Islamabad, perfectly positioned on Srinagar Highway, minutes from the airport.",
  url: "https://cyrusonehotel.com",
  telephone: ["+92-341-2205252", "+92-305-2201888"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Boulevard, near Mumtaz City, Airport Enclave Block A",
    addressLocality: "Islamabad",
    postalCode: "44000",
    addressCountry: "PK",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "5",
    bestRating: "5",
    worstRating: "1",
  },
  numberOfRooms: "55",
  checkinTime: "14:00",
  checkoutTime: "12:00",
};

export default function HomePage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [rooms, setRooms] = useState<OraRoomCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastSearch, setLastSearch] = useState({
    fromDate: format(today, "yyyy-MM-dd"),
    toDate: format(addDays(today, 1), "yyyy-MM-dd"),
    guests: { rooms: 1, adults: 1, children: 0 } as GuestCounts,
  });

  const fetchRooms = useCallback(async (fromDate: string, toDate: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/rooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fromDate, toDate }),
      });

      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? "Failed to fetch room availability.");
      }

      const data = (await res.json()) as { Data: OraRoomCategory[] };
      setRooms(data.Data ?? []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-fetch on mount with default dates
  useEffect(() => {
    fetchRooms(lastSearch.fromDate, lastSearch.toDate);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSearch(
    fromDate: string,
    toDate: string,
    guests: GuestCounts,
  ) {
    setLastSearch({ fromDate, toDate, guests });
    fetchRooms(fromDate, toDate);
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
      />

      <main>
        <HeroSection onSearch={handleSearch} searching={loading} />
        <RibbonSection />
        <RoomListingsSection
          rooms={rooms}
          loading={loading}
          error={error}
          onRetry={() => fetchRooms(lastSearch.fromDate, lastSearch.toDate)}
          searchContext={lastSearch}
        />
        <ModernTravellersSection />
        <VideoSection />
        <DiningSection />
        <GuestReviewsSection />
      </main>

      <Footer />
      <RibbonSection />
    </>
  );
}
