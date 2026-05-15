import { Suspense } from "react";
import BookingPageClient from "./BookingPageClient";

export const metadata = { title: "Book Your Stay — Cyrus One by Trivelles" };

export default function BookPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-neutral-50 animate-pulse" />}>
      <BookingPageClient />
    </Suspense>
  );
}
