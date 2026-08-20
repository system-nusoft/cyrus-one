declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type ConversionEvent = "whatsapp_click" | "book_now_click" | "booking_complete";

const GADS_LABELS: Record<ConversionEvent, string> = {
  whatsapp_click: "AW-18205737022/0FCdCMSy6eIcEL6AlulD",
  book_now_click: "AW-18205737022/llg6CMey6eIcEL6AlulD",
  booking_complete: "AW-18205737022/By57CMqy6eIcEL6AlulD",
};

export function trackConversion(
  event: ConversionEvent,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: GADS_LABELS[event] });
  window.gtag("event", event, params);
}
