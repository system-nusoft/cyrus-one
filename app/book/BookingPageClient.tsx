"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ChevronDown,
  LogIn,
  LogOut,
  Info,
  Users,
  User,
  CreditCard,
  CigaretteOff,
  PartyPopper,
  PawPrint,
  BedSingle,
} from "lucide-react";
import Image from "next/image";
import { format, parse } from "date-fns";
import Header from "@/components/layout/Header";
import RibbonSection from "@/components/sections/RibbonSection";
import Footer from "@/components/layout/Footer";
import BookingSuccessModal from "@/components/booking/BookingSuccessModal";

const COUNTRIES = [
  "Pakistan",
  "United Arab Emirates",
  "Saudi Arabia",
  "India",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "China",
  "Turkey",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Bangladesh",
  "Afghanistan",
  "Iran",
  "Egypt",
  "Malaysia",
  "Singapore",
  "South Africa",
  "Kenya",
  "Nigeria",
];

const COUNTRY_CODES = [
  { code: "+92", flag: "🇵🇰" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+971", flag: "🇦🇪" },
  { code: "+966", flag: "🇸🇦" },
  { code: "+91", flag: "🇮🇳" },
  { code: "+61", flag: "🇦🇺" },
  { code: "+49", flag: "🇩🇪" },
  { code: "+33", flag: "🇫🇷" },
  { code: "+974", flag: "🇶🇦" },
  { code: "+965", flag: "🇰🇼" },
  { code: "+880", flag: "🇧🇩" },
];

function formatPKR(n: number) {
  return new Intl.NumberFormat("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

function toDisplayDate(yyyymmdd: string) {
  try {
    return format(
      parse(yyyymmdd, "yyyy-MM-dd", new Date()),
      "EEE, MMM dd, yyyy",
    );
  } catch {
    return yyyymmdd;
  }
}

function toApiDate(yyyymmdd: string) {
  try {
    return format(parse(yyyymmdd, "yyyy-MM-dd", new Date()), "MM-dd-yyyy");
  } catch {
    return yyyymmdd;
  }
}

const inputBase =
  "w-full px-5 py-3.5 rounded-full border text-sm text-black placeholder:text-black focus:outline-none bg-white transition-colors";

export default function BookingPageClient() {
  const params = useSearchParams();

  const categoryId = params.get("categoryId") ?? "";
  const planId = params.get("planId") ?? "";
  const roomName = params.get("roomName") ?? "Room";
  const checkIn = params.get("checkIn") ?? "";
  const checkOut = params.get("checkOut") ?? "";
  const nights = Number(params.get("nights") ?? 1);
  const ratePerStay = Number(params.get("rate") ?? 0);
  const taxPerStay = Number(params.get("tax") ?? 0);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+92",
    phone: "",
    adults: "" as string | number,
    children: "" as string | number,
    rooms: "" as string | number,
    country: "",
    city: "",
    address: "",
    notes: "",
    cardNumber: "",
    expiry: "",
    zip: "",
    airportPickup: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const roomCount = Number(form.rooms) || 1;
  const subtotal = ratePerStay * roomCount;
  const taxes = taxPerStay * roomCount;
  const total = subtotal + taxes;

  const fc = (field: string) =>
    `${inputBase} ${errors[field] ? "border-red-500" : "border-black"}`;

  function clearError(field: string) {
    if (errors[field])
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
  }

  function update<K extends keyof typeof form>(
    field: K,
    value: (typeof form)[K],
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    clearError(field as string);
  }

  function validate(): Record<string, string> {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.email.trim()) e.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    return e;
  }

  async function handleBookNow() {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setLoading(true);
    setApiError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phoneNumber: `${form.countryCode} ${form.phone}`,
          checkIn: toApiDate(checkIn),
          checkOut: toApiDate(checkOut),
          adults: Number(form.adults) || 1,
          children: Number(form.children) || 0,
          country: form.country,
          city: form.city,
          address: form.address,
          notes: form.notes,
          airportPickup: form.airportPickup,
          totalAmount: total,
          noOfRooms: roomCount,
          planId,
          categoryId,
        }),
      });
      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? "Booking failed");
      }
      setSuccess(true);
    } catch (err) {
      setApiError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header dark />
      <RibbonSection />

      <main className="min-h-screen bg-white py-12 px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-6">
            {/* Guest Information */}
            <section
              className="rounded-3xl p-8"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <h2 className="font-bold text-2xl text-neutral-900 text-center uppercase mb-8">
                Guest Information
              </h2>

              <div className="flex flex-col gap-4">
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      className={fc("firstName")}
                      placeholder="First Name *"
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-500 mt-1 pl-4">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      className={fc("lastName")}
                      placeholder="Last Name *"
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-500 mt-1 pl-4">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      className={fc("email")}
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 pl-4">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <div
                      className={`flex items-center rounded-full border bg-white overflow-hidden ${errors.phone ? "border-red-500" : "border-black"}`}
                    >
                      <select
                        value={form.countryCode}
                        onChange={(e) => update("countryCode", e.target.value)}
                        className="pl-4 pr-1 py-3.5 text-sm text-black bg-transparent border-none focus:outline-none shrink-0"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <span className="w-px h-5 bg-neutral-200 shrink-0" />
                      <input
                        className="flex-1 px-4 py-3.5 text-sm text-black placeholder:text-black bg-transparent border-none focus:outline-none"
                        type="tel"
                        placeholder="Phone Number *"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 pl-4">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Dates — locked; changing dates requires a new search */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="w-full px-5 py-3.5 rounded-full border border-black text-sm text-neutral-700 cursor-not-allowed select-none"
                    style={{ backgroundColor: "#e0e0e0" }}
                    title="To change dates, return to the homepage and search again"
                  >
                    {toDisplayDate(checkIn)}
                  </div>
                  <div
                    className="w-full px-5 py-3.5 rounded-full border border-black text-sm text-neutral-700 cursor-not-allowed select-none"
                    style={{ backgroundColor: "#e0e0e0" }}
                    title="To change dates, return to the homepage and search again"
                  >
                    {toDisplayDate(checkOut)}
                  </div>
                </div>

                {/* Adults, Children, Rooms */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="relative">
                      <select
                        className={`${fc("adults")} cursor-pointer appearance-none pr-10`}
                        value={form.adults}
                        onChange={(e) =>
                          update(
                            "adults",
                            e.target.value === "" ? "" : Number(e.target.value),
                          )
                        }
                      >
                        <option value="">Total Adults</option>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(
                          (n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ),
                        )}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                    </div>
                    {errors.adults && (
                      <p className="text-xs text-red-500 mt-1 pl-4">
                        {errors.adults}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="relative">
                      <select
                        className={`${fc("children")} cursor-pointer appearance-none pr-10`}
                        value={form.children}
                        onChange={(e) =>
                          update(
                            "children",
                            e.target.value === "" ? "" : Number(e.target.value),
                          )
                        }
                      >
                        <option value="">Total Children</option>
                        {Array.from({ length: 11 }, (_, i) => i).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                    </div>
                    {errors.children && (
                      <p className="text-xs text-red-500 mt-1 pl-4">
                        {errors.children}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="relative">
                      <select
                        className={`${fc("rooms")} cursor-pointer appearance-none pr-10`}
                        value={form.rooms}
                        onChange={(e) =>
                          update(
                            "rooms",
                            e.target.value === "" ? "" : Number(e.target.value),
                          )
                        }
                      >
                        <option value="">No. of Rooms</option>
                        {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                    </div>
                    {errors.rooms && (
                      <p className="text-xs text-red-500 mt-1 pl-4">
                        {errors.rooms}
                      </p>
                    )}
                  </div>
                </div>

                {/* Country + City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="relative">
                      <select
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                        className={`${fc("country")} cursor-pointer appearance-none pr-10`}
                      >
                        <option value="">Guest Country</option>
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                    </div>
                    {errors.country && (
                      <p className="text-xs text-red-500 mt-1 pl-4">
                        {errors.country}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      className={fc("city")}
                      placeholder="Guest City"
                      value={form.city}
                      onChange={(e) => update("city", e.target.value)}
                    />
                    {errors.city && (
                      <p className="text-xs text-red-500 mt-1 pl-4">
                        {errors.city}
                      </p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <input
                    className={fc("address")}
                    placeholder="Address"
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                  />
                  {errors.address && (
                    <p className="text-xs text-red-500 mt-1 pl-4">
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* Airport Pickup */}
                <label className="flex items-center gap-3 cursor-pointer select-none pl-1">
                  <input
                    type="checkbox"
                    checked={form.airportPickup}
                    onChange={(e) => update("airportPickup", e.target.checked)}
                    className="w-5 h-5 rounded border-black accent-neutral-900 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-neutral-900">
                    Do you require airport pickup?
                  </span>
                </label>
              </div>
            </section>

            {/* Prepare Your Stay */}
            <section
              className="rounded-3xl p-8"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <h2 className="font-bold text-2xl text-neutral-900 text-center uppercase mb-6">
                Prepare Your Stay
              </h2>
              <textarea
                className="w-full px-5 py-4 rounded-2xl border border-black text-sm text-black placeholder:text-black focus:outline-none bg-white resize-none"
                rows={5}
                placeholder="A special request to make to the hotel?"
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
              />
            </section>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-6">
            {/* Reservation Summary */}
            <section
              className="rounded-3xl p-6"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <h2 className="font-bold text-2xl text-neutral-900 text-center uppercase mb-6">
                Your Reservation
              </h2>

              <p className="text-sm font-semibold text-neutral-700 mb-1">
                {toDisplayDate(checkIn)} – {toDisplayDate(checkOut)}
              </p>
              <p className="text-xs text-neutral-500 mb-5">
                {Number(form.adults) || 1} adult
                {(Number(form.adults) || 1) !== 1 ? "s" : ""}
                {Number(form.children) > 0
                  ? ` · ${form.children} child${Number(form.children) !== 1 ? "ren" : ""}`
                  : ""}{" "}
                · {nights} night{nights !== 1 ? "s" : ""} · {roomCount} room
                {roomCount !== 1 ? "s" : ""}
              </p>

              <div className="border-t border-neutral-100 pt-4 space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">{roomName}</span>
                  <span className="font-semibold text-neutral-800">
                    PKR{" "}
                    <span className="font-roboto">{formatPKR(subtotal)}</span>
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Taxes &amp; Fees</span>
                  <span className="font-semibold text-neutral-800">
                    PKR <span className="font-roboto">{formatPKR(taxes)}</span>
                  </span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-neutral-100">
                  <span className="font-bold text-[#8B1A1A]">Total Amount</span>
                  <span className="font-bold text-[#8B1A1A]">
                    PKR <span className="font-roboto">{formatPKR(total)}</span>
                  </span>
                </div>
              </div>

              {apiError && (
                <p className="text-sm text-red-500 text-center mb-3">
                  {apiError}
                </p>
              )}

              <button
                type="button"
                onClick={handleBookNow}
                disabled={loading}
                className="w-full py-4 rounded-full bg-neutral-900 text-white font-semibold text-md hover:bg-neutral-700 transition-colors disabled:opacity-50"
              >
                {loading ? "Processing…" : "Book Now"}
              </button>
            </section>

            {/* Payment Method (UI only) */}
            <section
              className="hidden rounded-3xl p-6"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <h2 className="font-bold text-2xl text-neutral-900 text-center uppercase mb-6">
                Payment Details
              </h2>

              <div className="flex flex-col gap-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        rx="2"
                        strokeWidth="1.5"
                      />
                      <path d="M2 10h20" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <input
                    className={`${inputBase} border-black pl-11`}
                    placeholder="Card Number"
                    value={form.cardNumber}
                    onChange={(e) => update("cardNumber", e.target.value)}
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className={`${inputBase} border-black`}
                    placeholder="MM/YY"
                    value={form.expiry}
                    onChange={(e) => update("expiry", e.target.value)}
                    maxLength={5}
                  />
                  <input
                    className={`${inputBase} border-black`}
                    placeholder="CVC"
                    value={form.zip}
                    onChange={(e) => update("zip", e.target.value)}
                  />
                </div>

                <div className="text-center">
                  <p className="text-sm text-neutral-900 mb-3">
                    Pay with Credit/Debit Card
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src="/Mastercard.svg"
                      alt="Mastercard"
                      width={48}
                      height={30}
                    />
                    <Image src="/Visa.svg" alt="Visa" width={48} height={30} />
                    <Image
                      src="/UnionPay.svg"
                      alt="UnionPay"
                      width={48}
                      height={30}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ── POLICIES (3rd grid child → col 1 row 2 on desktop, last on mobile) ── */}
          <section
            className="rounded-3xl p-8"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <h2 className="font-bold text-2xl text-neutral-900 text-center uppercase mb-2">
              Policies
            </h2>

            {/* Check-in */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 py-5 border-b border-neutral-200">
              <div className="flex items-start gap-2">
                <LogIn className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-neutral-900">
                  Check-in
                </span>
              </div>
              <div className="text-sm text-neutral-900 space-y-1">
                <p>3pm-4pm</p>
                <p>
                  Guests are required to show a valid identification card upon
                  check-in
                </p>
                <p>
                  You&apos;ll need to let the property know in advance what time
                  you&apos;ll arrive.
                </p>
              </div>
            </div>

            {/* Check-out */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 py-5 border-b border-neutral-200">
              <div className="flex items-start gap-2">
                <LogOut className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-neutral-900">
                  Check-out
                </span>
              </div>
              <p className="text-sm text-neutral-900">11am-12pm</p>
            </div>

            {/* Cancellation / prepayment */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 py-5 border-b border-neutral-200">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-neutral-900">
                  Cancellation/ prepayment
                </span>
              </div>
              <p className="text-sm text-neutral-900">
                Cancellation and prepayment policies vary according to
                accommodation type. Please enter the dates of your stay and
                check the conditions of your required option.
              </p>
            </div>

            {/* Children and beds */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 py-5 border-b border-neutral-200">
              <div className="flex items-start gap-2">
                <Users className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-neutral-900">
                  Children and beds
                </span>
              </div>
              <div className="text-sm text-neutral-900 space-y-3">
                <p className="font-bold">Child policies</p>
                <p>Children of any age are welcome.</p>
                <p>
                  Children 13 years and above will be charged as adults at this
                  property.
                </p>
                <p>
                  To see correct prices and occupancy information, please add
                  the number of children in your group and their ages to your
                  search.
                </p>

                <p className="font-bold pt-1">
                  Cot and extra mattress policies
                </p>
                <div className="border border-neutral-300 rounded-lg overflow-hidden text-sm">
                  <div className="px-4 py-2 bg-neutral-100 font-medium">
                    0 – 12 years
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between gap-4 border-t border-neutral-200">
                    <span className="flex items-center gap-2">
                      <BedSingle className="w-4 h-4 shrink-0" />
                      Extra mattress upon request (1 per room)
                    </span>
                  </div>
                </div>

                <p>
                  Prices for extra mattresses are not included in the total
                  price, and will have to be paid for separately during your
                  stay.
                </p>
                <p>
                  The number of extra mattresses allowed is dependent on the
                  option you choose. Please check your selected option for more
                  information.
                </p>
                <p>There are no cots available at this property.</p>
                <p>All extra mattresses are subject to availability.</p>
              </div>
            </div>

            {/* No age restriction */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 py-5 border-b border-neutral-200">
              <div className="flex items-start gap-2">
                <User className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-neutral-900">
                  No age restriction
                </span>
              </div>
              <p className="text-sm text-neutral-900">
                There is no age requirement for check-in
              </p>
            </div>

            {/* Groups */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 py-5 border-b border-neutral-200">
              <div className="flex items-start gap-2">
                <Users className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-neutral-900">
                  Groups
                </span>
              </div>
              <p className="text-sm text-neutral-900">
                When booking more than 3 rooms, different policies and
                additional supplements may apply.
              </p>
            </div>

            {/* Accepted payment methods */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 py-5 border-b border-neutral-200">
              <div className="flex items-start gap-2">
                <CreditCard className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-neutral-900">
                  Accepted payment methods
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <Image
                  src="/Visa.svg"
                  alt="Visa"
                  width={48}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/UnionPay.svg"
                  alt="UnionPay"
                  width={48}
                  height={30}
                  className="object-contain"
                />
                <span className="px-3 py-2 bg-green-800 text-white text-xs font-semibold rounded">
                  Cash
                </span>
              </div>
            </div>

            {/* Smoking */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 py-5 border-b border-neutral-200">
              <div className="flex items-start gap-2">
                <CigaretteOff className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-neutral-900">
                  Smoking
                </span>
              </div>
              <p className="text-sm text-neutral-900">
                Smoking is not allowed.
              </p>
            </div>

            {/* Parties */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 py-5 border-b border-neutral-200">
              <div className="flex items-start gap-2">
                <PartyPopper className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-neutral-900">
                  Parties
                </span>
              </div>
              <p className="text-sm text-neutral-900">
                Parties/events are not allowed
              </p>
            </div>

            {/* Pets */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 py-5">
              <div className="flex items-start gap-2">
                <PawPrint className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="font-bold text-sm text-neutral-900">Pets</span>
              </div>
              <p className="text-sm text-neutral-900">Pets are not allowed.</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <RibbonSection />

      {success && (
        <BookingSuccessModal
          roomName={roomName}
          checkIn={toDisplayDate(checkIn)}
          checkOut={toDisplayDate(checkOut)}
          nights={nights}
          adults={Number(form.adults) || 1}
          childGuests={Number(form.children) || 0}
          rooms={roomCount}
          total={total}
        />
      )}
    </>
  );
}
