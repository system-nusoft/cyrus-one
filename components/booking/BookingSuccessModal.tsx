"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import CancelModifyModal from "./CancelModifyModal";

interface BookingSuccessModalProps {
  roomName: string;
}

export default function BookingSuccessModal({ roomName }: BookingSuccessModalProps) {
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [cancelType, setCancelType] = useState<"modify" | "cancel">("cancel");

  function openModify() { setCancelType("modify"); setCancelModalOpen(true); }
  function openCancel() { setCancelType("cancel"); setCancelModalOpen(true); }

  const modal = (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl">
        {/* Hero image */}
        <div className="relative h-56 bg-neutral-200 overflow-hidden">
          <img
            src="/hero-bg.png"
            alt="Cyrus One Hotel"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="px-8 py-8 text-center">
          <h2 className="font-bold text-3xl text-neutral-900 small-caps mb-8">
            Booking Successful
          </h2>

          <Link
            href="/"
            className="block w-full py-4 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-700 transition-colors mb-4"
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
          onClose={() => setCancelModalOpen(false)}
        />
      )}
    </div>
  );

  return createPortal(modal, document.body);
}
