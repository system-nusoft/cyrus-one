"use client";

import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ChevronUp, ChevronDown, CalendarDays } from "lucide-react";

interface DatePickerInputProps {
  label: string;
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  minDate?: Date;
  disabled?: boolean;
}

export default function DatePickerInput({
  label,
  value,
  onChange,
  minDate,
  disabled = false,
}: DatePickerInputProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full px-4 py-1 rounded-full border border-black bg-white text-md text-neutral-700 hover:border-neutral-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={`${label}: ${value ? format(value, "MMM d, yyyy") : "Select date"}`}
      >
        <span className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-neutral-400" />
          {value ? (
            <span className="font-roboto font-medium text-neutral-900">{format(value, "MMM d, yyyy")}</span>
          ) : (
            <span className="text-neutral-400">{label}</span>
          )}
        </span>
        <span className="flex flex-col">
          <ChevronUp className="w-4 h-4 text-black" />
          <ChevronDown className="w-4 h-4 text-black" />
        </span>
      </button>

      {open && (
        <div className="absolute top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-neutral-100 p-2">
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
            disabled={minDate ? { before: minDate } : undefined}
            defaultMonth={value ?? minDate ?? new Date()}
            className="text-sm font-roboto"
          />
        </div>
      )}
    </div>
  );
}
