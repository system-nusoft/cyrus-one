"use client";

import { useState } from "react";
import { addDays, format } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import DatePickerInput from "./DatePickerInput";
import GuestCounter, { type GuestCounts } from "./GuestCounter";

interface BookingBarProps {
  onSearch: (fromDate: string, toDate: string, guests: GuestCounts) => void;
  loading?: boolean;
}

export default function BookingBar({
  onSearch,
  loading = false,
}: BookingBarProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [checkIn, setCheckIn] = useState<Date | undefined>(today);
  const [checkOut, setCheckOut] = useState<Date | undefined>(addDays(today, 1));
  const [guests, setGuests] = useState<GuestCounts>({
    rooms: 1,
    adults: 1,
    children: 0,
  });

  function handleSearch() {
    if (!checkIn || !checkOut) return;
    onSearch(
      format(checkIn, "yyyy-MM-dd"),
      format(checkOut, "yyyy-MM-dd"),
      guests,
    );
  }

  function handleCheckInChange(date: Date | undefined) {
    setCheckIn(date);
    if (date && checkOut && checkOut <= date) {
      setCheckOut(addDays(date, 1));
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-4">
        <div>
          <p className="font-bold text-2xl text-neutral-900 font-raleway">
            Ready to check in?
          </p>
          <p className="text-sm text-neutral-900 mt-0.5">
            Discover our diverse range of hotel apartments
          </p>
        </div>
        <div className="hidden md:flex items-center justify-end">
          <p className="text-sm text-neutral-900">
            Free Airport Pickup · Complimentary Breakfast · Direct M1/M2 Access
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <DatePickerInput
          label="Check-in"
          value={checkIn}
          onChange={handleCheckInChange}
          minDate={today}
        />
        <DatePickerInput
          label="Check-out"
          value={checkOut}
          onChange={setCheckOut}
          minDate={checkIn ? addDays(checkIn, 1) : addDays(today, 1)}
        />
        <GuestCounter value={guests} onChange={setGuests} />
        <button
          type="button"
          onClick={handleSearch}
          disabled={!checkIn || !checkOut || loading}
          className="flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-neutral-900 text-white font-semibold text-md hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          aria-label="Search room availability"
        >
          <span>{loading ? "Searching…" : "Check Availability"}</span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 shrink-0">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </button>
      </div>

      <p className="md:hidden text-xs text-neutral-900 mt-3 text-center">
        Free Airport Pickup · Complimentary Breakfast · Direct M1/M2 Access
      </p>
    </div>
  );
}
