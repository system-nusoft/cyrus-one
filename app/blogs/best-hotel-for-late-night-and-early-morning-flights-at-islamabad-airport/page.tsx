import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RibbonSection from "@/components/sections/RibbonSection";
import BlogPostHeader from "@/components/sections/BlogPostHeader";
import BlogPostIntro from "@/components/sections/BlogPostIntro";
import BlogPostSection from "@/components/sections/BlogPostSection";
import BlogPostClosing from "@/components/sections/BlogPostClosing";
import BlogPostShare from "@/components/sections/BlogPostShare";
import BlogPostFaqAccordion from "@/components/sections/BlogPostFaqAccordion";
import BlogPostTable from "@/components/sections/BlogPostTable";
import { BLOG_POSTS } from "@/content/blogs";

const SLUG =
  "best-hotel-for-late-night-and-early-morning-flights-at-islamabad-airport";
const post = BLOG_POSTS.find((p) => p.slug === SLUG)!;
const pageUrl = `https://cyrusonehotel.com/blogs/${post.slug}`;

// DRAFT meta — not client-supplied yet.
const metaTitle = `${post.title} | Cyrus One`;
const metaDescription = post.excerpt;

export const metadata: Metadata = {
  title: { absolute: metaTitle },
  description: metaDescription,
  alternates: { canonical: pageUrl },
  openGraph: { title: metaTitle, description: metaDescription, url: pageUrl },
};

export default function LateNightEarlyMorningFlightsPostPage() {
  return (
    <>
      <Header dark />

      <main className="bg-white">
        <BlogPostHeader post={post} category="Airport & Travel" />
        <BlogPostIntro
          opening="A flight landing at 2 AM. An airport departure before sunrise. A long journey ahead, with barely enough time to catch your breath."
          lead="Not every trip follows a convenient schedule. And when flights fall outside regular hours, finding the right place to stay becomes just as important as planning the journey itself."
          paragraphs={[
            "For travellers flying through Islamabad International Airport, choosing a hotel nearby can make those unusual travel hours considerably easier. Whether you’re arriving after a long international flight, travelling with family, or preparing for an early-morning departure, the right accommodation gives you somewhere comfortable to recharge without adding unnecessary travel to your schedule. So, what should you look for when booking a hotel near Islamabad Airport? And how can you make those in-between travel hours a little more comfortable?",
          ]}
        />
        <BlogPostSection title="What To Look For In A Hotel Near Islamabad Airport">
          {/* Image sits above the paragraph in this section, so it's inlined as the first child. */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/blog-3-image-2.png"
              // DRAFT alt text — not client-supplied yet.
              alt="Cyrus One suite living area with a cream sofa, armchair, framed artwork and a balcony door with draped curtains"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          <p>
            When your flight is scheduled at an inconvenient hour, a few
            practical considerations can make all the difference.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="1. Convenient Airport Access"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
        >
          <p>
            After a long flight, the last thing you want is an extended commute
            to your hotel. Similarly, when you’re catching an early-morning
            flight, staying within convenient reach of the airport helps
            simplify your departure. Look for a hotel near Islamabad
            International Airport that offers easy access to the terminal and
            consider how much time you’ll need for the transfer.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="2. 24-Hour Reception And Flexible Check-In"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
        >
          <p>
            Flights don’t always arrive on schedule. Delays, late-night
            landings, and unexpected changes can affect your arrival time. A
            hotel with 24-hour reception means you can access assistance
            whenever you arrive. Before booking, confirm late-night check-in
            arrangements and share your expected arrival time with the
            property.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="3. Comfortable Rooms For Quality Rest"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
        >
          <p>
            Even a few hours of uninterrupted sleep can make a difference
            before a long journey. Look for clean, well-maintained rooms,
            comfortable bedding, air conditioning, and a quiet environment.
            Families may also want to consider larger rooms or suites that
            offer additional space.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="4. Reliable Airport Transfers"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
        >
          <p>
            Arranging transportation at 3 AM isn’t always straightforward.
            Hotels offering airport pickup and dropoff can make arrivals and
            departures easier to coordinate. Before confirming your
            reservation, check whether airport transfers are available, whether
            they’re included in your booking, and how far in advance they need
            to be arranged.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="5. Breakfast And Essential Amenities"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
        >
          <p>
            An early departure can leave little time for a proper meal. Having
            breakfast arrangements, Wi-Fi, parking, and other essential
            facilities available adds convenience to a short stay.
          </p>
          <p className="font-bold text-neutral-900">
            The idea is simple: choose a hotel that takes care of the practical
            details so you can focus on your journey.
          </p>
        </BlogPostSection>
        <BlogPostSection title="Why Stay At Cyrus One Hotel & Apartments?">
          <p>
            When your travel schedule revolves around flight timings,
            convenience and comfort should go hand in hand.
          </p>
          <p>
            Located in Airport Enclave,{" "}
            <strong className="font-bold text-neutral-900">
              Cyrus One Hotel &amp; Apartments is just a 5–10-minute drive from
              Islamabad International Airport
            </strong>
            , making it a convenient choice for travellers looking for a hotel
            near Islamabad Airport.
          </p>
          <p>
            Whether you need somewhere to rest after a midnight arrival, a
            comfortable overnight stay before an early flight, or accommodation
            for a longer visit, Cyrus One brings together thoughtful
            hospitality and the essentials of a convenient airport stay.
          </p>
        </BlogPostSection>
        {/* 2x2 collage of blog-3-image-3..6. Source files are 700x984 portrait; corners are rounded per the mockup. */}
        <section className="pb-8 md:pb-12 px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto grid grid-cols-2 gap-3 md:gap-5">
            {[
              {
                src: "/blog-3-image-3.png",
                // DRAFT alt text — not client-supplied yet.
                alt: "White orchid in a round white vase on a wooden side table beside an armchair at Cyrus One",
              },
              {
                src: "/blog-3-image-4.png",
                alt: "Cyrus One bedroom with a cream upholstered headboard, bedside lamps, a geometric-patterned bed runner and wall-mounted air conditioner",
              },
              {
                src: "/blog-3-image-5.png",
                alt: "Cyrus One room with a wall-mounted TV, ceiling fan and a compact kitchenette with a kettle and mini fridge",
              },
              {
                src: "/blog-3-image-6.png",
                alt: "Cyrus One lounge with a curved terracotta sofa, mustard armchairs, framed black-and-white prints and a large red wall panel",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[700/984] overflow-hidden rounded-3xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 384px"
                />
              </div>
            ))}
          </div>
        </section>
        <BlogPostSection
          title="Stay Close To Your Next Journey"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
        >
          <p>
            With its convenient location, Cyrus One helps keep airport commutes
            simple. Complimentary airport pickup and drop-off arrangements are
            available, allowing guests to coordinate their transfers without
            the added hassle of arranging transportation after a long flight.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="Check In Whenever You Arrive"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
        >
          <p>
            Travel plans don’t always go according to schedule. With 24-hour
            reception and express check-in, guests can receive assistance
            beyond conventional arrival hours. Whether you’re checking in late
            at night or preparing for an early departure, the team is available
            to help make your stay smooth.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="Find The Right Room For Your Stay"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
        >
          <p>
            Different journeys call for different accommodation needs. Cyrus
            One offers a selection of thoughtfully designed rooms and suites:
          </p>
          <BlogPostTable
            headers={["Room Type", "Best For"]}
            columnWidths={["35%", "65%"]}
            rows={[
              [
                "Standard Double",
                "A comfortable option for solo travellers and couples.",
              ],
              [
                "Deluxe Double",
                "Additional comfort for a relaxed overnight stay.",
              ],
              [
                "Deluxe Twin",
                "A convenient arrangement for colleagues or travelling companions.",
              ],
              [
                "Executive Suite",
                "More space and comfort for an elevated stay.",
              ],
              // TODO: client screenshot cut this cell off at "A spacious option for guests lo" — confirm full text.
              ["Presidential Suite", "A spacious option for guests"],
            ]}
          />
          <p>
            Whether you’re travelling alone, with family, or on business,
            there’s an accommodation option to suit your stay.
          </p>
        </BlogPostSection>
        <BlogPostSection title="Enjoy The Essentials Without The Extra Planning">
          <p>
            A comfortable airport stay is about more than just having a room
            for the night. At Cyrus One, guests can enjoy:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 text-neutral-900">
            {[
              "Complimentary breakfast",
              "Free Wi-Fi",
              "Complimentary airport pickup and drop-off",
              "24-hour reception",
              "On-site parking",
              "Comfortable rooms and spacious suites",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center justify-center text-center min-h-28 md:min-h-32 px-5 py-4 rounded-3xl bg-[#f8f4f4]"
              >
                <small>{item}</small>
              </li>
            ))}
          </ul>
          <p>
            These amenities make it easier to settle in, recharge, and get
            ready for the next leg of your journey.
          </p>
        </BlogPostSection>
        <BlogPostSection title="Hospitality That Makes You Feel Welcome">
          <blockquote className="font-bold italic text-neutral-900">
            A convenient location may bring you to a hotel, but the experience
            is what makes your stay memorable.
          </blockquote>
          <p>
            At Cyrus One, the focus is on attentive service, clean and
            comfortable accommodation, and making guests feel welcome
            throughout their visit. Whether you’re visiting Islamabad for
            business, travelling internationally, or stopping over between
            flights, you can expect a stay designed around your comfort.
          </p>
        </BlogPostSection>
        <BlogPostFaqAccordion
          faqs={[
            {
              question: "How Far Is Cyrus One From Islamabad International Airport?",
              // TODO: client copy for this answer is a duplicate of the "Check In Whenever You Arrive" paragraph
              // (nothing about distance) — likely a copy-paste error; confirm the intended answer.
              answer:
                "Travel plans don’t always go according to schedule. With 24-hour reception and express check-in, guests can receive assistance beyond conventional arrival hours. Whether you’re checking in late at night or preparing for an early departure, the team is available to help make your stay smooth.",
            },
            {
              question: "Does Cyrus One Offer Complimentary Airport Transfers?",
              answer:
                "Yes. Cyrus One offers complimentary airport pickup and drop-off arrangements for guests. We recommend coordinating your transfer with the hotel in advance.",
            },
            {
              question: "Can I Check In At Cyrus One Late At Night?",
              answer:
                "Yes. Cyrus One has 24-hour reception and express check-in facilities, making it convenient for guests arriving outside regular hours. We recommend sharing your expected arrival time when booking.",
            },
            {
              question:
                "Is Cyrus One Suitable For An Overnight Stay Before An Early-Morning Flight?",
              answer:
                "Absolutely. Its convenient airport access, comfortable rooms, and airport transfer arrangements make Cyrus One a practical choice for travellers looking to rest before an early departure.",
            },
            {
              question: "Does Cyrus One Provide Breakfast?",
              answer:
                "Yes. Complimentary breakfast is included for guests, helping you start your day before continuing your journey.",
            },
            {
              question: "What Types Of Rooms Are Available At Cyrus One?",
              answer:
                "Cyrus One offers Standard Double, Deluxe Double, Deluxe Twin, Executive Suite, and Presidential Suite accommodations, catering to different travel requirements.",
            },
            {
              question:
                "Is Cyrus One Suitable For Families Travelling Through Islamabad Airport?",
              answer:
                "Yes. Cyrus One offers multiple room and suite options, making it suitable for families, couples, solo travellers, and business guests.",
            },
            {
              question: "How Can I Book A Room At Cyrus One?",
              answer:
                "You can explore available rooms and make your reservation directly through the **Cyrus One website**. For assistance with bookings or airport transfers, you can also contact the hotel directly.",
            },
          ]}
        />
        <BlogPostClosing
          title="Make Your Airport Stay More Comfortable"
          bottomPaddingClassName="pb-20 md:pb-32"
        >
          <p>
            Late-night arrivals and early-morning departures are part of
            travelling. Your accommodation shouldn’t add to the stress.
          </p>
          <p>
            A conveniently located hotel, a comfortable room, and reliable
            airport arrangements can turn a rushed overnight stop into a much
            more relaxed experience. At{" "}
            <strong className="font-bold text-neutral-900">
              Cyrus One Hotel
            </strong>
            , we’re here to make that experience easier.
          </p>
          <p className="font-bold italic text-neutral-900">
            Whether you’re arriving after midnight or heading out before
            sunrise, make your next stay in Islamabad a comfortable one.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/#availability"
              className="flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-neutral-900 text-white font-semibold text-md hover:bg-neutral-700 transition-colors w-fit"
              aria-label="Book your stay"
            >
              <span>Book Your Stay</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d9c08a] text-neutral-900 shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
            <Link
              href="/rooms"
              className="flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full border border-neutral-900 text-neutral-900 font-semibold text-md hover:bg-neutral-50 transition-colors w-fit"
              aria-label="Explore rooms and suites"
            >
              <span>Explore Rooms &amp; Suites</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </div>

          <BlogPostShare url={pageUrl} title={post.title} />
        </BlogPostClosing>
      </main>

      <Footer />
      <RibbonSection />
    </>
  );
}
