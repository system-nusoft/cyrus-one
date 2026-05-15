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
  { href: "https://www.linkedin.com/company/cyrus-one-by-trivelles/", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://www.instagram.com/cyrusonebytrivelles?igsh=MTlmMW15NXp5NHNneA==", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.facebook.com/profile.php?id=61579446300255", label: "Facebook", Icon: FacebookIcon },
  { href: "https://wa.me/923222638162", label: "WhatsApp", Icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white" aria-label="Site footer">
      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-2 items-start">
          {/* Logo */}
          <div>
            <Link href="/" aria-label="Cyrus One Hotel — go to homepage">
              <Image
                src="/logo-white.png"
                alt="Cyrus One by Trivolles logo"
                width={180}
                height={60}
                className="w-36 md:w-44 h-auto"
              />
            </Link>
          </div>

          {/* CTA button */}
          <div className="flex justify-end">
            <a
              href="#availability"
              className="flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-white text-neutral-900 font-semibold text-md hover:bg-neutral-100 transition-colors"
              aria-label="Check room availability"
            >
              <span>Check Availability</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 items-end mt-24 md:mt-32">
          {/* Address */}
          <address className="not-italic text-sm text-neutral-300 leading-relaxed">
            Main Boulevard, near Mumtaz City<br />
            Airport Enclave Block A<br />
            Islamabad, 44000,<br />
            Pakistan
          </address>

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
            <div className="text-right">
              <p className="text-xs font-bold text-white tracking-widest uppercase">
                Book Your Stay
              </p>
              <p className="text-xs text-neutral-400 mt-0.5">
                +92 341-2205252&nbsp;&nbsp;+92 305-2201888
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <p className="text-xs text-neutral-500 text-center">
            © {new Date().getFullYear()} Cyrus One by Trivolles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
