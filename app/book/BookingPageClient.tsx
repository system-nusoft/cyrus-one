"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { format, parse } from "date-fns";
import Header from "@/components/layout/Header";
import RibbonSection from "@/components/sections/RibbonSection";
import Footer from "@/components/layout/Footer";
import BookingSuccessModal from "@/components/booking/BookingSuccessModal";

const COUNTRIES = [
  "Pakistan", "United Arab Emirates", "Saudi Arabia", "India", "United Kingdom",
  "United States", "Canada", "Australia", "Germany", "France", "China", "Turkey",
  "Qatar", "Kuwait", "Bahrain", "Oman", "Bangladesh", "Afghanistan", "Iran",
  "Egypt", "Malaysia", "Singapore", "South Africa", "Kenya", "Nigeria",
];

const COUNTRY_CODES = [
  { code: "+92", flag: "🇵🇰" },
  { code: "+1",  flag: "🇺🇸" },
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
  return new Intl.NumberFormat("en-PK", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

function toDisplayDate(yyyymmdd: string) {
  try {
    return format(parse(yyyymmdd, "yyyy-MM-dd", new Date()), "EEE, MMM dd, yyyy");
  } catch { return yyyymmdd; }
}

function toApiDate(yyyymmdd: string) {
  try {
    return format(parse(yyyymmdd, "yyyy-MM-dd", new Date()), "MM-dd-yyyy");
  } catch { return yyyymmdd; }
}

const inputBase = "w-full px-5 py-3.5 rounded-full border text-sm text-black placeholder:text-black focus:outline-none bg-white transition-colors";

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
    if (errors[field]) setErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
  }

  function update<K extends keyof typeof form>(field: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    clearError(field as string);
  }

  function validate(): Record<string, string> {
    const e: Record<string, string> = {};
    if (!form.firstName.trim())  e.firstName = "First name is required";
    if (!form.lastName.trim())   e.lastName  = "Last name is required";
    if (!form.email.trim())      e.email     = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.phone.trim())      e.phone     = "Phone number is required";
    if (form.adults === "")      e.adults    = "Please select number of adults";
    if (form.children === "")    e.children  = "Please select number of children";
    if (form.rooms === "")       e.rooms     = "Please select number of rooms";
    if (!form.country)           e.country   = "Please select a country";
    if (!form.city.trim())       e.city      = "City is required";
    if (!form.address.trim())    e.address   = "Address is required";
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
          totalAmount: total,
          noOfRooms: roomCount,
          planId,
          categoryId,
        }),
      });
      if (!res.ok) {
        const body = await res.json() as { error?: string };
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
            <section className="rounded-3xl p-8" style={{ backgroundColor: "#f5f5f5" }}>
              <h2 className="font-bold text-2xl text-neutral-900 text-center uppercase mb-8">Guest Information</h2>

              <div className="flex flex-col gap-4">

                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input className={fc("firstName")} placeholder="First Name" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} />
                    {errors.firstName && <p className="text-xs text-red-500 mt-1 pl-4">{errors.firstName}</p>}
                  </div>
                  <div>
                    <input className={fc("lastName")} placeholder="Last Name" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} />
                    {errors.lastName && <p className="text-xs text-red-500 mt-1 pl-4">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input className={fc("email")} type="email" placeholder="Email Address" value={form.email} onChange={(e) => update("email", e.target.value)} />
                    {errors.email && <p className="text-xs text-red-500 mt-1 pl-4">{errors.email}</p>}
                  </div>
                  <div>
                    <div className={`flex items-center rounded-full border bg-white overflow-hidden ${errors.phone ? "border-red-500" : "border-black"}`}>
                      <select
                        value={form.countryCode}
                        onChange={(e) => update("countryCode", e.target.value)}
                        className="pl-4 pr-1 py-3.5 text-sm text-black bg-transparent border-none focus:outline-none shrink-0"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                        ))}
                      </select>
                      <span className="w-px h-5 bg-neutral-200 shrink-0" />
                      <input
                        className="flex-1 px-4 py-3.5 text-sm text-black placeholder:text-black bg-transparent border-none focus:outline-none"
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-1 pl-4">{errors.phone}</p>}
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
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="relative">
                      <select className={`${fc("adults")} cursor-pointer appearance-none pr-10`} value={form.adults} onChange={(e) => update("adults", e.target.value === "" ? "" : Number(e.target.value))}>
                        <option value="">Total Adults</option>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                    </div>
                    {errors.adults && <p className="text-xs text-red-500 mt-1 pl-4">{errors.adults}</p>}
                  </div>
                  <div>
                    <div className="relative">
                      <select className={`${fc("children")} cursor-pointer appearance-none pr-10`} value={form.children} onChange={(e) => update("children", e.target.value === "" ? "" : Number(e.target.value))}>
                        <option value="">Total Children</option>
                        {Array.from({ length: 11 }, (_, i) => i).map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                    </div>
                    {errors.children && <p className="text-xs text-red-500 mt-1 pl-4">{errors.children}</p>}
                  </div>
                  <div>
                    <div className="relative">
                      <select className={`${fc("rooms")} cursor-pointer appearance-none pr-10`} value={form.rooms} onChange={(e) => update("rooms", e.target.value === "" ? "" : Number(e.target.value))}>
                        <option value="">No. of Rooms</option>
                        {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                    </div>
                    {errors.rooms && <p className="text-xs text-red-500 mt-1 pl-4">{errors.rooms}</p>}
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
                        {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                    </div>
                    {errors.country && <p className="text-xs text-red-500 mt-1 pl-4">{errors.country}</p>}
                  </div>
                  <div>
                    <input className={fc("city")} placeholder="Guest City" value={form.city} onChange={(e) => update("city", e.target.value)} />
                    {errors.city && <p className="text-xs text-red-500 mt-1 pl-4">{errors.city}</p>}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <input className={fc("address")} placeholder="Address" value={form.address} onChange={(e) => update("address", e.target.value)} />
                  {errors.address && <p className="text-xs text-red-500 mt-1 pl-4">{errors.address}</p>}
                </div>
              </div>
            </section>

            {/* Prepare Your Stay */}
            <section className="rounded-3xl p-8" style={{ backgroundColor: "#f5f5f5" }}>
              <h2 className="font-bold text-2xl text-neutral-900 text-center uppercase mb-6">Prepare Your Stay</h2>
              <textarea
                className="w-full px-5 py-4 rounded-2xl border border-black text-sm text-black placeholder:text-black focus:outline-none bg-white resize-none"
                rows={5}
                placeholder="A special request to make to the hotel?"
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
              />
            </section>

            {/* Policies */}
            <section className="rounded-3xl p-8" style={{ backgroundColor: "#f5f5f5" }}>
              <h2 className="font-bold text-2xl text-neutral-900 text-center uppercase mb-6">Policies</h2>
              <div className="text-sm text-neutral-600 space-y-4">
                <div>
                  <p className="font-semibold text-neutral-800 mb-1">Check-in / Check-out</p>
                  <p>Check-in from 2:00 PM · Check-out before 12:00 PM (noon)</p>
                  <p className="text-neutral-400 text-xs mt-0.5">Early check-in and late check-out subject to availability.</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800 mb-1">Cancellation</p>
                  <p>Free cancellation up to 24 hours before check-in. Cancellations made within 24 hours are non-refundable.</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800 mb-1">General</p>
                  <p>Pets are not allowed · No smoking on premises · Government-issued ID required at check-in</p>
                </div>
              </div>
            </section>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-6">

            {/* Reservation Summary */}
            <section className="rounded-3xl p-6" style={{ backgroundColor: "#f5f5f5" }}>
              <h2 className="font-bold text-2xl text-neutral-900 text-center uppercase mb-6">Your Reservation</h2>

              <p className="text-sm font-semibold text-neutral-700 mb-1">
                {toDisplayDate(checkIn)} – {toDisplayDate(checkOut)}
              </p>
              <p className="text-xs text-neutral-500 mb-5">
                {Number(form.adults) || 1} adult{(Number(form.adults) || 1) !== 1 ? "s" : ""}
                {Number(form.children) > 0 ? ` · ${form.children} child${Number(form.children) !== 1 ? "ren" : ""}` : ""}
                {" "}· {nights} night{nights !== 1 ? "s" : ""}
                {" "}· {roomCount} room{roomCount !== 1 ? "s" : ""}
              </p>

              <div className="border-t border-neutral-100 pt-4 space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">{roomName}</span>
                  <span className="font-semibold text-neutral-800">PKR {formatPKR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Taxes &amp; Fees</span>
                  <span className="font-semibold text-neutral-800">PKR {formatPKR(taxes)}</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-neutral-100">
                  <span className="font-bold text-[#8B1A1A]">Total reservation</span>
                  <span className="font-bold text-[#8B1A1A]">PKR {formatPKR(total)}</span>
                </div>
              </div>

              {apiError && <p className="text-sm text-red-500 text-center mb-3">{apiError}</p>}

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
            <section className="rounded-3xl p-6" style={{ backgroundColor: "#f5f5f5" }}>
              <h2 className="font-bold text-2xl text-neutral-900 text-center uppercase mb-6">Payment Method</h2>

              <div className="flex flex-col gap-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="1.5"/><path d="M2 10h20" strokeWidth="1.5"/></svg>
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
                    placeholder="ZIP/Postal"
                    value={form.zip}
                    onChange={(e) => update("zip", e.target.value)}
                  />
                </div>

                <div className="text-center">
                  <p className="text-xs text-neutral-500 mb-3">Pay with Credit/Debit Card</p>
                  <div className="flex items-center justify-center gap-3">
                    <svg width="38" height="24" viewBox="0 0 38 24" fill="none"><rect width="38" height="24" rx="4" fill="#F2F2F2"/><circle cx="15" cy="12" r="7" fill="#EB001B"/><circle cx="23" cy="12" r="7" fill="#F79E1B"/><path d="M19 6.8A7 7 0 0 1 22.2 12 7 7 0 0 1 19 17.2 7 7 0 0 1 15.8 12 7 7 0 0 1 19 6.8Z" fill="#FF5F00"/></svg>
                    <svg width="50" height="24" viewBox="0 0 50 24" fill="none"><rect width="50" height="24" rx="4" fill="#F2F2F2"/><text x="8" y="17" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#1A1F71">VISA</text></svg>
                    <svg width="38" height="24" viewBox="0 0 38 24" fill="none"><rect width="38" height="24" rx="4" fill="#F2F2F2"/><rect x="4" y="4" width="10" height="16" rx="2" fill="#E21836"/><rect x="14" y="4" width="10" height="16" rx="2" fill="#00447C"/><rect x="24" y="4" width="10" height="16" rx="2" fill="#007B40"/></svg>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <RibbonSection />

      {success && <BookingSuccessModal roomName={roomName} />}
    </>
  );
}
