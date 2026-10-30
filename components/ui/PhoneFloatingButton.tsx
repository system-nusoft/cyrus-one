"use client";

import { Phone } from "lucide-react";
import { trackConversion } from "@/lib/analytics";

export default function PhoneFloatingButton() {
  return (
    <a
      href="tel:923224770222"
      onClick={() => trackConversion("phone_click")}
      aria-label="Call us"
      className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900 shadow-lg transition-transform hover:scale-110"
    >
      <Phone className="w-7 h-7 text-white" fill="white" aria-hidden="true" />
    </a>
  );
}
