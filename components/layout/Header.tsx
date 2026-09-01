"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { trackConversion } from "@/lib/analytics";

const navLinks = [
  { href: "/about-us", label: "About Us" },
  // Coming soon: Rooms & Suites, Gallery, Contact
];

interface HeaderProps {
  /** `true` renders the bar in document flow; default overlays it on the hero. */
  dark?: boolean;
}

function BookNowButton({
  onClick,
  className = "",
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href="/#availability"
      onClick={() => {
        trackConversion("book_now_click");
        onClick?.();
      }}
      aria-label="Book your stay"
      className={`flex items-center justify-between gap-3 pl-5 pt-1 pr-1 pb-1 rounded-full bg-white text-neutral-900 font-semibold text-sm md:text-base hover:bg-neutral-100 transition-colors ${className}`}
    >
      <span>Book Now</span>
      <span className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-neutral-900 text-white shrink-0">
        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
      </span>
    </Link>
  );
}

export default function Header({ dark = false }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`${
        dark ? "relative" : "absolute top-0 left-0 right-0"
      } z-30 bg-black`}
    >
      <div className="px-6 md:px-10 lg:px-16 py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-4">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Cyrus One Hotel — go to homepage"
            className="justify-self-start"
          >
            <Image
              src="/logo-white.png"
              alt="Cyrus One by Trivelles logo"
              width={180}
              height={60}
              priority
              className="w-32 md:w-40 h-auto"
            />
          </Link>

          {/* Nav — centered (desktop) */}
          <nav aria-label="Primary" className="hidden md:flex justify-self-center">
            <ul className="flex items-center gap-8 lg:gap-10">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm md:text-base font-semibold tracking-wide text-white underline-offset-8 decoration-2 hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Book Now CTA (desktop) */}
          <BookNowButton className="hidden md:flex justify-self-end" />

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden justify-self-end p-1 text-white"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Mobile"
          className="md:hidden border-t border-white/10 px-6 py-6"
        >
          <ul className="flex flex-col gap-5">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-semibold tracking-wide text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <BookNowButton
                onClick={() => setOpen(false)}
                className="w-full"
              />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
