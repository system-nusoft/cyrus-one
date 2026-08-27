"use client";

import { useState, useEffect, useCallback } from "react";
import { format, addDays } from "date-fns";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { roomContent } from "@/content/rooms";
import RibbonSection from "@/components/sections/RibbonSection";
import RoomListingsSection from "@/components/sections/RoomListingsSection";
import ModernTravellersSection from "@/components/sections/ModernTravellersSection";
import VideoSection from "@/components/sections/VideoSection";
import GuestReviewsSection from "@/components/sections/GuestReviewsSection";
import LocationSection from "@/components/sections/LocationSection";
import DiningSection from "@/components/sections/DiningSection";
import FAQSection from "@/components/sections/FAQSection";
import BookingBandSection from "@/components/sections/BookingBandSection";
import Footer from "@/components/layout/Footer";
import type { OraRoomCategory } from "@/services/ora-pms/types";
import type { GuestCounts } from "@/components/ui/GuestCounter";

const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Premium Hotel Apartments Near Islamabad International Airport",
  description:
    "Experience the perfect blend of British hospitality standards and bold design at Cyrus One by Trivelles, a premium UK hotel chain. Conveniently located just minutes from Islamabad International Airport and the M2 Motorway, our thoughtfully curated hotel apartments offer spacious, premium comfort for business travelers and families alike. Step inside, unwind, and experience a space that truly welcomes you home.",
  url: "https://cyrusonehotel.com",
  telephone: ["+923224770222"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Boulevard, near Mumtaz City, Airport Enclave Block A",
    addressLocality: "Islamabad",
    postalCode: "44000",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.59375427115376,
    longitude: 72.85417187419414,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "244",
    bestRating: "5",
    worstRating: "1",
  },
  numberOfRooms: "55",
  checkinTime: "14:00",
  checkoutTime: "12:00",
  amenityFeature: [
    "Free WiFi",
    "Free Airport Pickup",
    "Complimentary Breakfast",
    "Air Conditioning",
    "Private Kitchenette in Every Room",
    "24/7 Check-in",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  containsPlace: Object.values(roomContent).map((room) => ({
    "@type": "HotelRoom",
    name: room.displayName,
    description: room.description,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: room.maxGuests,
    },
    bed: {
      "@type": "BedDetails",
      typeOfBed: room.bedType,
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: room.area,
      unitCode: "MTK",
    },
    amenityFeature: room.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
    photo: room.images.map((img) => `https://cyrusonehotel.com${img}`),
  })),
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
        <ExperienceSection />
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
        <LocationSection />
        <FAQSection />
        <BookingBandSection />
      </main>

      <Footer />
      <RibbonSection />
    </>
  );
}
