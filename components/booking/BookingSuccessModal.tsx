"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import CancelModifyModal from "./CancelModifyModal";

interface BookingSummary {
  roomName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  adults: number;
  childGuests: number;
  rooms: number;
  total: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BookingSuccessModalProps extends BookingSummary {}

function formatPKR(n: number) {
  return new Intl.NumberFormat("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

export default function BookingSuccessModal(props: BookingSuccessModalProps) {
  const {
    roomName,
    checkIn,
    checkOut,
    nights,
    adults,
    childGuests,
    rooms,
    total,
  } = props;
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [cancelType, setCancelType] = useState<"modify" | "cancel">("cancel");

  function openModify() {
    setCancelType("modify");
    setCancelModalOpen(true);
  }
  function openCancel() {
    setCancelType("cancel");
    setCancelModalOpen(true);
  }

  const modal = (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl">
        {/* Hero image */}
        <div className="relative h-48 bg-neutral-200 overflow-hidden hidden">
          <img
            src="/hero-bg.png"
            alt="Cyrus One Hotel"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="px-8 py-8">
          <h2 className="font-bold text-3xl text-neutral-900 text-center mb-6">
            Booking Confirmed
          </h2>

          {/* Booking summary */}
          <div className="bg-neutral-50 rounded-2xl p-5 mb-6 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-500">Room</span>
              <span className="text-sm font-semibold text-neutral-900 text-right max-w-[55%]">
                {roomName}
              </span>
            </div>
            <div className="border-t border-neutral-200" />
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-500">Check-in</span>
              <span className="font-roboto text-sm font-semibold text-neutral-900">
                {checkIn}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-500">Check-out</span>
              <span className="font-roboto text-sm font-semibold text-neutral-900">
                {checkOut}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-500">Duration</span>
              <span className="font-roboto text-sm font-semibold text-neutral-900">
                {nights} {nights === 1 ? "night" : "nights"}
              </span>
            </div>
            <div className="border-t border-neutral-200" />
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-500">Guests</span>
              <span className="font-roboto text-sm font-semibold text-neutral-900">
                {adults} {adults === 1 ? "Adult" : "Adults"}
                {childGuests > 0
                  ? `, ${childGuests} ${childGuests === 1 ? "Child" : "Children"}`
                  : ""}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-500">Rooms</span>
              <span className="font-roboto text-sm font-semibold text-neutral-900">
                {rooms}
              </span>
            </div>
            <div className="border-t border-neutral-200" />
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-neutral-900">Total</span>
              <span className="font-roboto text-sm font-bold text-neutral-900">
                PKR {formatPKR(total)}
              </span>
            </div>
          </div>

          <Link
            href="/"
            className="block w-full py-4 rounded-full bg-neutral-900 text-white font-semibold text-sm text-center hover:bg-neutral-700 transition-colors mb-4"
          >
            Return to Homepage
          </Link>

          <div className="grid grid-cols-2 divide-x divide-black border border-black rounded-full overflow-hidden">
            <button
              type="button"
              onClick={openModify}
              className="py-4 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              Modify
            </button>
            <button
              type="button"
              onClick={openCancel}
              className="py-4 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {cancelModalOpen && (
        <CancelModifyModal
          type={cancelType}
          roomName={roomName}
          checkIn={checkIn}
          checkOut={checkOut}
          onClose={() => setCancelModalOpen(false)}
        />
      )}
    </div>
  );

  return createPortal(modal, document.body);
}
