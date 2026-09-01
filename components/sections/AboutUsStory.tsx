import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutUsStory() {
  return (
    <section
      className="px-6 md:px-10 lg:px-16 py-12 md:py-20"
      aria-label="The Cyrus One story"
    >
      <div className="flex flex-col gap-16 md:gap-28">
        {/* Row 1 — text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="font-bold text-3xl md:text-5xl text-neutral-900 leading-tight">
              Built for the Way People Travel Today
            </h2>

            <p className="text-md md:text-lg text-neutral-900 leading-relaxed">
              When we set out to create Cyrus One, we wanted to create a stay
              that felt different from the usual hotel experience. We thought
              about the small things travellers actually need: space to unwind
              after a long day, a balcony to step out onto, a comfortable place
              to sit, and the flexibility to make the space feel like your own.
            </p>

            <p className="text-md md:text-lg text-neutral-900 leading-relaxed">
              That is why Cyrus One brings together spacious hotel apartments,
              thoughtfully designed rooms and suites with private kitchenettes.
              Every space was planned with a different kind of traveller in
              mind, because a business trip, a family stay and an overnight stop
              are never quite the same. But the space is only half of the
              experience. We wanted our team to be friendly, approachable and
              genuinely happy to help. From the details in the room to the way
              you are welcomed, we believe those small touches are what make a
              stay memorable.
            </p>

            <p className="text-md md:text-lg text-neutral-900 leading-relaxed">
              Today, Cyrus One brings those ideas together: modern 5-star
              accommodation, thoughtful spaces and hospitality that feels
              personal.
            </p>

            <Link
              href="/#experience"
              className="mt-2 w-fit self-start flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-neutral-900 text-white font-semibold text-md hover:bg-neutral-700 transition-colors"
              aria-label="Discover the Cyrus One experience"
            >
              <span>Discover the Cyrus One Experience</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </div>

          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <Image
              src="/about-us-2.jpg"
              alt="Lounge seating area at Cyrus One with a curved rust-colored sofa, mustard armchairs, and framed artwork, part of the hotel's interiors."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Row 2 — image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative w-full aspect-[4/5] overflow-hidden lg:order-1 order-2">
            <Image
              src="/about-us-3.png"
              alt="A Cyrus One staff member attending to a seated guest at a café table, reflecting the hotel's attentive hospitality in Islamabad."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:order-2 order-1">
            <h2 className="font-bold text-3xl md:text-5xl text-neutral-900 leading-tight">
              Thoughtful Hospitality, Inspired by Trivelles
            </h2>

            <p className="text-md md:text-lg text-neutral-900 leading-relaxed">
              Our approach to hospitality is shaped by the little things that
              make a stay feel comfortable and welcoming. Through our connection
              with Trivelles Hotels, we bring a British hospitality perspective
              to Cyrus One, with a focus on attentive service, thoughtful
              details and creating spaces where guests can feel at ease.
            </p>

            <p className="text-md md:text-lg text-neutral-900 leading-relaxed">
              From a warm welcome when you arrive to a freshly prepared
              breakfast in the morning, we pay attention to the details that
              make a difference. Our spacious accommodation, practical amenities
              and friendly team are all part of creating a stay that feels easy
              from beginning to end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
