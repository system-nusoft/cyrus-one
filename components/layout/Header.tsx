import Image from "next/image";
import Link from "next/link";
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
  { href: "https://wa.me/923224770222", label: "WhatsApp", Icon: WhatsAppIcon },
];

interface HeaderProps {
  dark?: boolean;
}

export default function Header({ dark = false }: HeaderProps) {
  return (
    <header className={`${dark ? "relative bg-black" : "absolute top-0 left-0 right-0"} z-30 px-6 md:px-10 lg:px-16 py-6`}>
      <div className="grid grid-cols-2 items-start">
        {/* Logo */}
        <div>
          <Link href="/" aria-label="Cyrus One Hotel — go to homepage">
            <Image
              src="/logo-white.png"
              alt="Cyrus One by Trivelles logo"
              width={180}
              height={60}
              priority
              className="w-36 md:w-44 h-auto"
            />
          </Link>
        </div>

        {/* Social + CTA */}
        <div className="flex flex-col items-end gap-2">
          <nav aria-label="Social media links">
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
            <p className="text-xs text-white/90 mt-0.5 font-bold">
              <span className="block md:inline">+92 341-2205252</span>
              <span className="hidden md:inline">&nbsp;&nbsp;</span>
              <span className="block md:inline">+92 305-2201888</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
