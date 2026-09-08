"use client";

import { useState, useEffect, useCallback } from "react";
import { format, addDays } from "date-fns";
import RoomsHero from "@/components/sections/RoomsHero";
import RibbonSection from "@/components/sections/RibbonSection";
import RoomListingsSection from "@/components/sections/RoomListingsSection";
import RoomsWhyChoose from "@/components/sections/RoomsWhyChoose";
import VideoSection from "@/components/sections/VideoSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";
import type { OraRoomCategory } from "@/services/ora-pms/types";
import type { GuestCounts } from "@/components/ui/GuestCounter";

const roomsFaqs = [
  {
    question: "What room types are available at Cyrus One?",
    answer:
      "Cyrus One offers **Standard Double, Deluxe Double, Deluxe Twin, Executive Suite, and 2 Bed Presidential Suite**, with options for solo travellers, couples, families and groups.",
  },
  {
    question: "Which room is best for an extended stay?",
    answer:
      "For solo travellers or couples, the **Executive Suite** offers added space and comfort. For families or groups, the **2 Bed Presidential Suite** provides 92 m² with two bedrooms, two living rooms, two bathrooms and a private kitchenette, making it ideal for an **extended stay**.",
  },
  {
    question: "Which room is best for families or groups?",
    answer:
      "The **2 Bed Presidential Suite** is ideal for families or groups, offering 92 m² of space with two bedrooms, two living rooms and two bathrooms, along with a private kitchenette.",
  },
  {
    question: "Which room is best for business travellers?",
    answer:
      "The **Executive Suite** is a great choice for business travellers, offering a comfortable seating area, private kitchenette, free Wi-Fi, air conditioning and a balcony with city views.",
  },
  {
    question: "Do the rooms have private kitchenettes?",
    answer:
      "Yes. All listed rooms and suites feature a **private kitchenette with a refrigerator and electric kettle**, giving guests added flexibility during their stay.",
  },
  {
    question: "Do the rooms have balconies and city views?",
    answer:
      "Yes. All listed rooms and suites feature a **balcony with city views**, with landmark views also available.",
  },
  {
    question: "Are the rooms wheelchair accessible and baby-friendly?",
    answer:
      "Yes. Cyrus One offers **wheelchair-accessible accommodation**, with upper floors accessible by elevator. **Baby safety gates** are also available for families travelling with young children.",
  },
  {
    question: "Is free airport pick-up available with the room booking?",
    answer:
      "Yes. **Free airport pick-up** is available for Cyrus One guests. We recommend contacting the team in advance to arrange your transfer and ensure a smooth arrival.",
  },
];

export default function RoomsPageClient() {
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

  function handleSearch(fromDate: string, toDate: string, guests: GuestCounts) {
    setLastSearch({ fromDate, toDate, guests });
    fetchRooms(fromDate, toDate);
  }

  return (
    <>
      <main>
        <RoomsHero onSearch={handleSearch} searching={loading} />
        <RibbonSection />
        <RoomListingsSection
          rooms={rooms}
          loading={loading}
          error={error}
          onRetry={() => fetchRooms(lastSearch.fromDate, lastSearch.toDate)}
          searchContext={lastSearch}
          heading="Find The Right Space For Your Stay"
          subheading="Whether you're travelling for business, staying with family or looking for a comfortable place near Islamabad airport, our rooms are designed around the way you travel."
          subheadingClassName="max-w-2xl mx-auto"
          showViewDetailsButton
        />
        <RoomsWhyChoose />
        <VideoSection
          videoId="s5YC-jfyQbk"
          videoTitle="Cyrus One Hotel — More than a room, a space that works around you"
          thumbnailSrc="/rooms-video-thumbnail.png"
          thumbnailAlt="Cyrus One room interior featuring a kitchenette with refrigerator and kettle, seating area, flat-screen TV and comfortable furnishings."
          heading={
            <>
              More Than a Room. <br /> A Space That Works Around You.
            </>
          }
          body="From the furnishings to the finishing touches, every element of our rooms and suites has been chosen with your comfort in mind."
        />
        <FAQSection faqs={roomsFaqs} />
      </main>

      <Footer />
      <RibbonSection />
    </>
  );
}
