import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  Briefcase,
  Fence,
  Coffee,
  MapPin,
  Star,
  type LucideIcon,
} from "lucide-react";

interface Reason {
  Icon: LucideIcon;
  title: string;
  body: string;
  label: string;
  bg: string;
}

const reasons: Reason[] = [
  {
    Icon: BedDouble,
    title: "Spacious Hotel Apartments",
    body: "Room to relax, work and settle in comfortably.",
    label: "Apartment-Style Layouts",
    bg: "bg-white",
  },
  {
    Icon: Briefcase,
    title: "Designed for Different Stays",
    body: "From business trips and family visits to overnight stops and extended stays.",
    label: "Flexible for Any Trip",
    bg: "bg-[#ffe089]",
  },
  {
    Icon: Fence,
    title: "Private Balconies",
    body: "Step outside, enjoy the view and have a little more room to breathe.",
    label: "Step Outside & Breathe",
    bg: "bg-[#bfdfe1]",
  },
  {
    Icon: Coffee,
    title: "Kitchenettes",
    body: "Added flexibility with a refrigerator and electric kettle.",
    label: "Fridge + Electric Kettle",
    bg: "bg-[#bfdfe1]",
  },
  {
    Icon: MapPin,
    title: "A Convenient Location",
    body: "Close to Islamabad International Airport and well connected to the city.",
    label: "5km from the Airport",
    bg: "bg-white",
  },
  {
    Icon: Star,
    title: "Modern 5-Star Comfort",
    body: "Thoughtful interiors, practical amenities and attentive hospitality.",
    label: "5-Star Interiors",
    bg: "bg-[#ffe089]",
  },
];

export default function AboutUsWhyChoose() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-20"
      aria-label="Why choose Cyrus One"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us-why-choose-us.png"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold text-4xl md:text-6xl text-white tracking-wide">
            Why Choose Cyrus One
          </h2>
          <p className="text-md md:text-lg text-white/80 mt-4 max-w-2xl mx-auto">
            More Space. More Flexibility. A Stay That Feels Like Yours.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map(({ Icon, title, body, label, bg }) => (
            <article
              key={title}
              className={`${bg} rounded-3xl p-7 md:p-8 flex flex-col gap-5 h-full`}
            >
              <Icon
                className="w-8 h-8 text-neutral-900 shrink-0"
                strokeWidth={1.5}
              />

              <div className="flex flex-col gap-2">
                <h3 className="font-raleway font-bold text-xl md:text-2xl text-neutral-900">
                  {title}
                </h3>
                <p className="text-md text-neutral-600 leading-relaxed">
                  {body}
                </p>
              </div>

              <p className="mt-auto pt-2 font-bold text-md text-neutral-900">
                {label}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/#availability"
            className="inline-flex items-center justify-center font-semibold transition-colors bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-3.5 rounded-full text-md"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </section>
  );
}
