import Image from "next/image";

interface IconProps {
  className?: string;
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <Image src="/linkedin.svg" alt="" width={16} height={16} className={className} aria-hidden="true" />
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <Image src="/instagram.svg" alt="" width={16} height={16} className={className} aria-hidden="true" />
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <Image src="/facebook.svg" alt="" width={16} height={16} className={className} aria-hidden="true" />
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <Image src="/whatsapp.svg" alt="" width={16} height={16} className={className} aria-hidden="true" />
  );
}
