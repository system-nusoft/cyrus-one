"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface CancelModifyModalProps {
  type: "modify" | "cancel";
  roomName: string;
  checkIn?: string;
  checkOut?: string;
  onClose: () => void;
}

const COUNTRY_CODES = [
  { code: "+92", flag: "🇵🇰", label: "PK" },
  { code: "+1",  flag: "🇺🇸", label: "US" },
  { code: "+44", flag: "🇬🇧", label: "GB" },
  { code: "+971", flag: "🇦🇪", label: "AE" },
  { code: "+966", flag: "🇸🇦", label: "SA" },
  { code: "+91", flag: "🇮🇳", label: "IN" },
];

export default function CancelModifyModal({ type, roomName, checkIn, checkOut, onClose }: CancelModifyModalProps) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", countryCode: "+92", phone: "", reason: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSend() {
    if (!form.firstName || !form.lastName || !form.phone || !form.reason) {
      setError("Please fill in all required fields.");
      return;
    }
    setError(null);

    const requestType = type === "cancel" ? "Cancellation" : "Modification";
    const message = [
      `*Booking ${requestType} Request*`,
      ``,
      `Name: ${form.firstName} ${form.lastName}`,
      form.email ? `Email: ${form.email}` : null,
      `Phone: ${form.countryCode} ${form.phone}`,
      `Room: ${roomName}`,
      checkIn ? `Check-in: ${checkIn}` : null,
      checkOut ? `Check-out: ${checkOut}` : null,
      ``,
      `${type === "cancel" ? "Reason for Cancellation" : "Modification Request"}:`,
      form.reason,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.open(`https://wa.me/923224770222?text=${encodeURIComponent(message)}`, "_blank");
    setSent(true);
  }

  const inputCls = "w-full px-5 py-3.5 rounded-full border border-black text-sm text-black placeholder:text-black focus:outline-none bg-white";

  const modal = (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={(e) => { if (e.currentTarget === e.target) onClose(); }}
    >
      <div className="bg-white rounded-3xl w-full max-w-2xl p-8 md:p-12 shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-neutral-200 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {sent ? (
          <div className="text-center py-8">
            <h2 className="font-bold text-2xl text-neutral-900 mb-3">Request Sent</h2>
            <p className="text-sm text-neutral-500 mb-6">Our team will contact you shortly to process your request.</p>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-bold text-3xl text-neutral-900 text-center small-caps mb-8">
              {type === "cancel" ? "Booking Cancellation" : "Booking Modification"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input className={inputCls} placeholder="First Name" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} />
              <input className={inputCls} placeholder="Last Name" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input className={inputCls} type="email" placeholder="Email Address" value={form.email} onChange={(e) => update("email", e.target.value)} />
              <div className="flex items-center rounded-full border border-black bg-white overflow-hidden">
                <select
                  value={form.countryCode}
                  onChange={(e) => update("countryCode", e.target.value)}
                  className="pl-4 pr-1 py-3.5 text-sm text-black bg-transparent border-none focus:outline-none shrink-0"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                  ))}
                </select>
                <span className="w-px h-5 bg-neutral-300 shrink-0" />
                <input className="flex-1 px-4 py-3.5 text-sm text-black placeholder:text-black bg-transparent border-none focus:outline-none" type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              </div>
            </div>

            <textarea
              className="w-full px-5 py-4 rounded-2xl border border-black text-sm text-black placeholder:text-black focus:outline-none bg-white resize-none mb-4"
              rows={5}
              placeholder={type === "cancel" ? "Reason of Cancellation" : "Reason for Modification / Changes Requested"}
              value={form.reason}
              onChange={(e) => update("reason", e.target.value)}
            />

            {error && <p className="text-sm text-red-500 mb-4 text-center">{error}</p>}

            <button
              type="button"
              onClick={handleSend}
              className="w-full py-4 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-700 transition-colors"
            >
              Send via WhatsApp
            </button>
          </>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
