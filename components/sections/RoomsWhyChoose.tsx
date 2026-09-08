import Image from "next/image";
import {
  Wifi,
  Wind,
  DoorOpen,
  UtensilsCrossed,
  Tv,
  Headset,
  type LucideIcon,
} from "lucide-react";

interface Highlight {
  Icon: LucideIcon;
  title: string;
  body: string;
  bg: string;
}

const highlights: Highlight[] = [
  {
    Icon: Wifi,
    title: "Free Wi-Fi",
    body: "Stay Connected Throughout Your Stay",
    bg: "bg-white",
  },
  {
    Icon: Wind,
    title: "Air Conditioning",
    body: "Comfortable Spaces In Every Season",
    bg: "bg-[#ffe089]",
  },
  {
    Icon: DoorOpen,
    title: "Private Balconies",
    body: "Step Outside And Enjoy The View.",
    bg: "bg-[#bfdfe1]",
  },
  {
    Icon: UtensilsCrossed,
    title: "Kitchenette",
    body: "Added Flexibility For Longer Stays.",
    bg: "bg-[#bfdfe1]",
  },
  {
    Icon: Tv,
    title: "Flat-Screen TV",
    body: "Unwind After A Busy Day.",
    bg: "bg-white",
  },
  {
    Icon: Headset,
    title: "24/7 Support",
    body: "Help Whenever You Need It.",
    bg: "bg-[#ffe089]",
  },
];

export default function RoomsWhyChoose() {
  return (
    <section aria-label="Room amenities">
      {/* Heading */}
      <div className="text-center py-12 md:py-16 px-6 md:px-10 lg:px-16">
        <h2 className="font-bold text-3xl md:text-5xl text-neutral-900">
          Everything You Need, Right Here
        </h2>
      </div>

      {/* Background image + cards */}
      <div className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rooms-why-choose-us.png"
            alt="Cozy living room corner at Cyrus One with a floor lamp, curtained window and framed wall art, the background photo behind the room amenities section."
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {highlights.map(({ Icon, title, body, bg }) => (
              <article
                key={title}
                className={`${bg} rounded-3xl p-7 md:p-8 flex flex-col items-center text-center gap-4`}
              >
                <Icon
                  className="w-8 h-8 text-neutral-900 shrink-0"
                  strokeWidth={1.5}
                />
                <h3 className="font-raleway font-bold text-xl md:text-2xl text-neutral-900">
                  {title}
                </h3>
                <p className="text-md text-neutral-600 leading-relaxed">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
