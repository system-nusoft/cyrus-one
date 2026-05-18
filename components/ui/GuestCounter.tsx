"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown, Users, Plus, Minus } from "lucide-react";

export interface GuestCounts {
  rooms: number;
  adults: number;
  children: number;
}

interface GuestCounterProps {
  value: GuestCounts;
  onChange: (counts: GuestCounts) => void;
}

function Counter({
  label,
  value,
  onIncrement,
  onDecrement,
  min,
}: {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min: number;
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrement}
          disabled={value <= min}
          className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="w-3 h-3" />
        </button>
        <span className="font-roboto w-6 text-center font-semibold text-neutral-900 text-sm">
          {value}
        </span>
        <button
          type="button"
          onClick={onIncrement}
          className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-400 transition-colors"
          aria-label={`Increase ${label}`}
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

export default function GuestCounter({ value, onChange }: GuestCounterProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalGuests = value.adults + value.children;
  const roomLabel = `${value.rooms} ${value.rooms === 1 ? "Room" : "Rooms"}`;
  const guestLabel = `${totalGuests} ${totalGuests === 1 ? "Guest" : "Guests"}`;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full px-4 py-1 rounded-full border border-black bg-white text-md text-neutral-700 hover:border-neutral-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        aria-label={`${roomLabel}, ${guestLabel}`}
      >
        <span className="flex items-center gap-2">
          <Users className="w-4 h-4 text-neutral-400" />
          <span className="font-roboto font-medium text-neutral-900">
            {roomLabel} · {guestLabel}
          </span>
        </span>
        <span className="flex flex-col">
          <ChevronUp className="w-4 h-4 text-black" />
          <ChevronDown className="w-4 h-4 text-black" />
        </span>
      </button>

      {open && (
        <div className="absolute top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-neutral-100 p-4 w-64">
          <Counter
            label="Adults"
            value={value.adults}
            min={1}
            onDecrement={() => onChange({ ...value, adults: Math.max(1, value.adults - 1) })}
            onIncrement={() => onChange({ ...value, adults: value.adults + 1 })}
          />
          <div className="border-t border-neutral-100" />
          <Counter
            label="Children"
            value={value.children}
            min={0}
            onDecrement={() => onChange({ ...value, children: Math.max(0, value.children - 1) })}
            onIncrement={() => onChange({ ...value, children: value.children + 1 })}
          />
          <div className="border-t border-neutral-100" />
          <Counter
            label="Rooms"
            value={value.rooms}
            min={1}
            onDecrement={() => onChange({ ...value, rooms: Math.max(1, value.rooms - 1) })}
            onIncrement={() => onChange({ ...value, rooms: value.rooms + 1 })}
          />
        </div>
      )}
    </div>
  );
}
