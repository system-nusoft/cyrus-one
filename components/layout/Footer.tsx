"use client";

// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";
// import ContactModal from "./ContactModal";
import { trackConversion } from "@/lib/analytics";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/cyrus-one-by-trivelles/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://www.instagram.com/cyrusonebytrivelles?igsh=MTlmMW15NXp5NHNneA==",
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://www.facebook.com/profile.php?id=61579446300255",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  { href: "https://wa.me/923224770222", label: "WhatsApp", Icon: WhatsAppIcon },
];

const quickLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/explore-islamabad", label: "Explore Islamabad" },
  { href: "/blogs", label: "Blogs" },
];

export default function Footer() {
  // const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-neutral-950 text-white font-raleway [&_h2]:font-raleway [&_h3]:font-raleway" aria-label="Site footer">
        <div className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
          {/* Top: logo + tagline | quick links | get in touch */}
          <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr] md:gap-10">
            <div>
              <Link href="/" aria-label="Cyrus One Hotel — go to homepage">
                <Image
                  src="/logo-white.png"
                  alt="Cyrus One by Trivelles logo"
                  width={180}
                  height={60}
                  className="w-40 md:w-44 h-auto"
                />
              </Link>
              <p className="mt-6 max-w-md text-base md:text-sm lg:text-base text-neutral-300 leading-relaxed">
                Hotel suites just 10 minutes from Islamabad Airport, with a free
                airport shuttle. Family suites with kitchenettes, fast Wi-Fi and
                24/7 guest service.
              </p>
            </div>

            <nav aria-label="Quick links">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                Quick Links
              </h2>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-1 md:gap-y-4">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-neutral-200 hover:text-white hover:underline underline-offset-4 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                Get In Touch
              </h2>
              <h3 className="mt-5 text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
                Address
              </h3>
              <address className="not-italic mt-2 text-neutral-200 leading-relaxed">
                Main Boulevard, near Mumtaz City
                <br />
                Airport Enclave Block A<br />
                Islamabad, 44000, Pakistan
              </address>
              <h3 className="mt-6 text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
                Contact
              </h3>
              <p className="mt-2 flex flex-col gap-4 md:gap-1 text-neutral-200">
                <a href="tel:+923224770222" className="hover:text-white">
                  +92 322 4770222
                </a>
                <a
                  href="mailto:contact@cyrusonehotel.com"
                  className="hover:text-white"
                >
                  contact@cyrusonehotel.com
                </a>
              </p>
            </div>
          </div>

          {/* App Store + socials */}
          <div className="mt-14 md:mt-20 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <a
              href="https://apps.apple.com/us/app/cyrus-one/id6773423509"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
              className="w-fit"
            >
              <Image
                src="/app-store.svg"
                alt="Download on the App Store"
                width={130}
                height={40}
                className="h-12 w-auto bg-white rounded-lg"
              />
            </a>

            <nav aria-label="Footer social media links">
              <ul className="flex items-center gap-3">
                {socialLinks.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      onClick={
                        label === "WhatsApp"
                          ? () => trackConversion("whatsapp_click")
                          : undefined
                      }
                    >
                      <Icon className="w-10 h-10 md:w-12 md:h-12" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-10 md:mt-12 pt-8">
            <p className="text-sm md:text-base text-neutral-500 text-center">
              © {new Date().getFullYear()} Cyrus One by Trivelles. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />} */}
    </>
  );
}
