import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";

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

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white" aria-label="Site footer">
      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
        {/* Top row — logo + CTA (same on all breakpoints) */}
        <div className="grid grid-cols-2 items-start">
          <div>
            <Link href="/" aria-label="Cyrus One Hotel — go to homepage">
              <Image
                src="/logo-white.png"
                alt="Cyrus One by Trivelles logo"
                width={180}
                height={60}
                className="w-36 md:w-44 h-auto"
              />
            </Link>
          </div>

          <div className="flex justify-end">
            <a
              href="#availability"
              className="flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-white text-neutral-900 font-semibold text-md hover:bg-neutral-100 transition-colors"
              aria-label="Book now"
            >
              <span>Book Now</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>

        {/* ── MOBILE bottom section (hidden on md+) ── */}
        <div className="flex flex-col items-center gap-6 mt-16 md:hidden">
          {/* Social icons */}
          <nav aria-label="Footer social media links">
            <ul className="flex items-center gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="w-10 h-10" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone */}
          <p className="font-roboto font-bold text-sm text-white text-center hidden">
            <a
              href="tel:923412205252"
              className="text-[#1db6ea] transition-colors"
            >
              +92 341-2205252
            </a>
            &nbsp;&nbsp;
            <a
              href="tel:923052201888"
              className="text-[#1db6ea] transition-colors"
            >
              +92 305-2201888
            </a>
          </p>

          {/* Address */}
          <address className="not-italic text-sm text-neutral-300 leading-relaxed text-center">
            Main Boulevard, near Mumtaz City
            <br />
            Airport Enclave Block A<br />
            Islamabad, 44000, Pakistan
          </address>

          {/* App store badges */}
          <div className="flex items-center gap-3">
            <a
              href="https://apps.apple.com/us/app/cyrus-one/id6773423509"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <Image
                src="/app-store.svg"
                alt="Download on the App Store"
                width={130}
                height={40}
                className="h-10 w-auto bg-white rounded-lg"
              />
            </a>
            {/* <a href="#" aria-label="Get it on Google Play">
              <Image
                src="/google-play.webp"
                alt="Get it on Google Play"
                width={130}
                height={40}
                className="h-10 w-auto bg-white rounded-lg"
              />
            </a> */}
          </div>
        </div>

        {/* ── DESKTOP bottom section (hidden on mobile) ── */}
        <div className="hidden md:grid grid-cols-2 items-end mt-32">
          {/* App store badges + Address */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apps.apple.com/us/app/cyrus-one/id6773423509"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/app-store.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={36}
                  className="h-12 w-auto bg-white rounded-lg"
                />
              </a>
              {/* <a href="#" aria-label="Get it on Google Play">
                <Image
                  src="/google-play.webp"
                  alt="Get it on Google Play"
                  width={120}
                  height={36}
                  className="h-9 w-auto bg-white rounded-lg"
                />
              </a> */}
            </div>
            <address className="not-italic text-sm text-neutral-300 leading-relaxed">
              Main Boulevard, near Mumtaz City
              <br />
              Airport Enclave Block A<br />
              Islamabad, 44000,
              <br />
              Pakistan
            </address>
          </div>

          {/* Social + phone */}
          <div className="flex flex-col items-end gap-3">
            <nav aria-label="Footer social media links">
              <ul className="flex items-center gap-2">
                {socialLinks.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
                    >
                      <Icon className="w-9 h-9" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="text-right hidden">
              <p className="text-xs font-bold text-white tracking-widest uppercase">
                Book Your Stay
              </p>
              <p className="font-roboto text-xs text-neutral-400 mt-0.5">
                <a
                  href="tel:923412205252"
                  className="text-[#1db6ea] transition-colors"
                >
                  +92 341-2205252
                </a>
                &nbsp;&nbsp;
                <a
                  href="tel:923052201888"
                  className="text-[#1db6ea] transition-colors"
                >
                  +92 305-2201888
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <p className="text-xs text-neutral-500 text-center">
            © {new Date().getFullYear()} Cyrus One by Trivelles. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
