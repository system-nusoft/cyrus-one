import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RibbonSection from "@/components/sections/RibbonSection";
import BlogPostHeader from "@/components/sections/BlogPostHeader";
import BlogPostIntro from "@/components/sections/BlogPostIntro";
import Image from "next/image";
import BlogPostTable from "@/components/sections/BlogPostTable";
import BlogPostFaqAccordion from "@/components/sections/BlogPostFaqAccordion";
import BlogPostClosing from "@/components/sections/BlogPostClosing";
import BlogPostShare from "@/components/sections/BlogPostShare";
import BlogPostSection from "@/components/sections/BlogPostSection";
import { BLOG_POSTS } from "@/content/blogs";

const SLUG = "best-hotel-near-islamabad-airport";
const post = BLOG_POSTS.find((p) => p.slug === SLUG)!;
const pageUrl = `https://cyrusonehotel.com/blogs/${post.slug}`;

// Client-supplied meta (2026-11-24). Title is used as-is, without the site suffix.
const metaTitle = "How to Choose the Best Luxury Hotel Near Islamabad Airport";
const metaDescription =
  "Choosing a hotel near Islamabad Airport? Check drive time, transfers, rooms, breakfast and reviews. Cyrus One by Trivelles: suites 5 km away, free pickup.";
// 1200x630 crop of the hero bedroom photo (blog-4-image-1.png).
const ogImage = {
  url: "https://cyrusonehotel.com/blog-4-og.jpg",
  width: 1200,
  height: 630,
  alt: post.image.alt,
};

export const metadata: Metadata = {
  title: { absolute: metaTitle },
  description: metaDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    title: metaTitle,
    description: metaDescription,
    url: pageUrl,
    images: [ogImage],
  },
};

// Single source of truth for the visible accordion and the FAQPage JSON-LD.
const faqs = [
  {
    question: "What is the best hotel near Islamabad International Airport?",
    answer:
      "The best choice depends on your plans, but look for a short drive time, free airport transfers, comfortable rooms and strong recent reviews. Cyrus One by Trivelles in Airport Enclave is about 5 km from the airport, offers free airport pickup, and has rooms and suites suited to business travellers, families and short stopovers.",
  },
  {
    question: "How far is Cyrus One by Trivelles from Islamabad Airport?",
    answer:
      "Cyrus One by Trivelles is approximately 5 km from Islamabad International Airport, around a 10-minute drive depending on traffic.",
  },
  {
    question: "Does Cyrus One by Trivelles offer free airport pickup?",
    answer:
      "Yes. Cyrus One by Trivelles offers free airport pickup for guests. Share your flight number when you book and the team will arrange it.",
  },
  {
    question: "Is Cyrus One by Trivelles suitable for families?",
    answer:
      "Yes. The hotel offers family suites with kitchenettes, a daily buffet breakfast with halal and vegetarian options, and child-safety features such as window guards.",
  },
  {
    question:
      "Is it better to stay near Islamabad Airport or in the city centre?",
    answer:
      "It depends on your travel plans. Staying near the airport is ideal for late arrivals, early departures, short stopovers and trips heading north. If you’re spending most of your time in central Islamabad, a hotel closer to the city’s main commercial and residential areas may be more practical.",
  },
];

const BASE = "https://cyrusonehotel.com";

// Client-supplied schema (2026-11-24). Adjustments: URLs use this site's real /blogs/ path (the brief said /blog/),
// placeholders filled (hero image, logo, dates), and the brief's standalone Hotel node is omitted — the homepage
// already defines `#hotel`, and the brief's phone/email/address differ from it. `about` references that entity.
const blogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      headline: post.title,
      description: metaDescription,
      image: [ogImage.url],
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: "Cyrus One by Trivelles",
        url: BASE,
      },
      publisher: {
        "@type": "Organization",
        name: "Cyrus One by Trivelles",
        logo: { "@type": "ImageObject", url: `${BASE}/logo-white.png` },
      },
      mainEntityOfPage: pageUrl,
      about: { "@id": `${BASE}/#hotel` },
      keywords:
        "best hotel near Islamabad airport, luxury hotel near Islamabad airport, free airport pickup Islamabad, family suites Islamabad",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blogs",
          item: `${BASE}/blogs`,
        },
        { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
      ],
    },
  ],
};

export default function LuxuryHotelNearAirportPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Header dark />

      <main className="bg-white">
        <BlogPostHeader post={post} category="Travel Tips" />
        <BlogPostIntro
          lead="Arriving in a new city after a long flight can be exhausting. The last thing most travellers want is a lengthy journey to their hotel, particularly after a late-night arrival or before an early-morning departure."
          paragraphs={[
            "For visitors flying into Islamabad, choosing accommodation near Islamabad International Airport can make the beginning and end of a trip considerably easier. But a convenient location is only part of the decision. A comfortable room, thoughtful facilities, good food and attentive service all contribute to a pleasant stay.",
            "So, what should you look for when choosing a luxury hotel near Islamabad Airport? And how do you find a hotel that offers more than just a convenient location? Here’s what to consider before booking.",
          ]}
        />
        <BlogPostSection title="What Makes A Hotel Stay Feel Luxurious?">
          <p>
            Luxury doesn’t always have to mean grand lobbies or an extensive
            list of facilities. For travellers arriving after a long journey,
            it’s about the details that make a stay comfortable and
            uncomplicated.
          </p>
          <p>Here are a few things worth prioritising:</p>
          <div className="flex flex-col gap-1">
            <p>
              <strong className="font-bold text-neutral-900">
                Convenience:
              </strong>{" "}
              A location that makes airport arrivals and departures easier.
            </p>
            <p>
              <strong className="font-bold text-neutral-900">Comfort:</strong>{" "}
              Well-maintained rooms, comfortable bedding and space to unwind.
            </p>
            <p>
              <strong className="font-bold text-neutral-900">Privacy:</strong> A
              peaceful environment where you can rest after travelling.
            </p>
            <p>
              <strong className="font-bold text-neutral-900">Dining:</strong>{" "}
              Convenient meal options and breakfast arrangements that suit your
              schedule.
            </p>
            <p>
              <strong className="font-bold text-neutral-900">
                Attentive service:
              </strong>{" "}
              Helpful staff, smooth check-in and clear communication throughout
              your stay.
            </p>
          </div>
          <p>
            For families, business visitors and international travellers, these
            practical comforts can be just as important as the hotel’s overall
            appearance.
          </p>
        </BlogPostSection>
        <BlogPostSection title="5 Things To Look For When Booking A Hotel Near Islamabad Airport" />
        <BlogPostSection
          title="1. Check the Actual Distance from the Airport"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
        >
          <p>
            Not every hotel advertised as being near Islamabad Airport is
            equally convenient. Check the property’s exact location and
            estimated driving time rather than relying solely on the
            description. Airport Enclave is one of the closest hotel areas to
            the Islamabad International Airport terminal, typically around a
            10-minute drive away. Staying here keeps travel time to a minimum
            around your flight schedule.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="2. Understand the Airport Transfer Arrangements"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
        >
          <p>
            If you’re arriving late at night or travelling internationally,
            knowing how you’ll get from the airport to your hotel can make a
            real difference. Before booking, check whether airport transfers are
            available, whether they’re free, and how far in advance they need to
            be arranged. A good hotel will ask for your flight number so the
            driver can plan around delays.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="3. Choose a Room That Suits Your Stay"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
          image={{
            src: "/blog-4-image-2.png",
            alt: "Hotel suite near Islamabad Airport with kitchenette, mini fridge, wall-mounted TV and window seat",
          }}
        >
          <p>
            Your accommodation needs may vary depending on how long you’re
            staying and who you’re travelling with. A comfortable standard room
            may be suitable for a short visit, while families or guests planning
            an extended stay may prefer a larger suite. When comparing room
            options, look at the available space, bedding arrangements, storage,
            workspace and other amenities. If you need a kitchenette, confirm
            that it’s included in your selected room category.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="4. Consider Dining and Breakfast Options"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
          image={{
            src: "/blog-4-image-3.png",
            alt: "Lobby lounge at Cyrus One by Trivelles with a red sofa, yellow armchairs and framed art",
          }}
        >
          <p>
            After a long flight, having convenient dining options can make
            settling in easier. Check whether the hotel offers breakfast, its
            serving hours and the types of food available. International
            visitors may also want to check for familiar meal options, including
            halal and vegetarian choices. If you’re arriving late, confirm
            whether food is available at that time rather than assuming it will
            be.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="5. Read Recent Guest Reviews"
          headingLevel="h3"
          titleClassName="text-2xl md:text-3xl"
        >
          <p>
            Photographs and descriptions provide a first impression, but guest
            experiences offer a better understanding of what staying at a
            property is actually like. Look for recent reviews that mention room
            cleanliness, staff responsiveness, dining, check-in and overall
            comfort. Reviews from guests with similar travel plans can be
            especially helpful.
          </p>
        </BlogPostSection>
        <BlogPostSection title="Cyrus One By Trivelles: Hotel Suites 5 Km From Islamabad Airport, With Free Pickup">
          <p>
            For travellers who want airport convenience alongside a comfortable
            hotel experience, Cyrus One by Trivelles is located on Main
            Boulevard in Airport Enclave, Islamabad, approximately 5 km from
            Islamabad International Airport. That’s around a 10-minute drive.
          </p>
        </BlogPostSection>
        {/* 2x2 collage of blog-4-image-4..7 (693x996 portrait), rounded corners per the mockup. */}
        <section className="pb-8 md:pb-12 px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto grid grid-cols-2 gap-3 md:gap-5">
            {[
              {
                src: "/blog-4-image-4.png",
                alt: "Close-up of a made bed with a blue and orange geometric cushion and throw in a Cyrus One suite",
              },
              {
                src: "/blog-4-image-5.png",
                alt: "Guest having breakfast of French toast, fruit, orange juice and coffee at Cyrus One by Trivelles",
              },
              {
                src: "/blog-4-image-6.png",
                alt: "Open-air corridors with colourful yellow, orange and blue room doors at Cyrus One by Trivelles",
              },
              {
                src: "/blog-4-image-7.png",
                alt: "Quiet covered walkway lined with green planters at Cyrus One by Trivelles, Airport Enclave",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[693/996] overflow-hidden rounded-3xl"
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
        <section className="pb-8 md:pb-12 px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto flex flex-col gap-6 text-lg text-neutral-600 leading-relaxed">
            <p>Here’s what guests can expect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong className="font-bold text-neutral-900">
                  Free airport pickup:
                </strong>{" "}
                Share your flight number when you book and the team will arrange
                your pickup.
              </li>
              <li>
                <strong className="font-bold text-neutral-900">
                  Rooms and suites for every kind of stay:
                </strong>{" "}
                From comfortable rooms for a short visit to family suites with
                kitchenettes for longer stays.
              </li>
              <li>
                <strong className="font-bold text-neutral-900">
                  Space to work:
                </strong>{" "}
                Laptop-friendly workspaces and free Wi-Fi for business
                travellers.
              </li>
              <li>
                <strong className="font-bold text-neutral-900">
                  Daily buffet breakfast:
                </strong>{" "}
                With a range of options, including halal and vegetarian choices.
              </li>
              <li>
                <strong className="font-bold text-neutral-900">
                  Family-friendly touches:
                </strong>{" "}
                Family suites and child-safety features such as window guards.
              </li>
              <li>
                <strong className="font-bold text-neutral-900">
                  Free on-site parking
                </strong>{" "}
                for guests travelling by car.
              </li>
            </ul>
            <p className="italic">
              It’s a calm, comfortable base for business trips, family visits
              and short stopovers, close enough to the airport to make arrivals
              and departures easy.
            </p>
          </div>
        </section>
        <BlogPostSection title="Who Should Consider Staying Near Islamabad International Airport?">
          <p>
            An airport-side hotel can be a practical choice for several types of
            travellers.
          </p>
          {/* Mockup shows no header row; header labels are assistant-written to fit the shared table style — confirm. */}
          <BlogPostTable
            headers={["Traveller Type", "Why It Suits Them"]}
            columnWidths={["35%", "65%"]}
            rows={[
              [
                "International travellers",
                "Guests arriving in Pakistan after a long-haul flight may prefer a hotel that makes their arrival and check-in easier.",
              ],
              [
                "Overseas Pakistanis visiting family",
                "A comfortable place to rest after an international journey can make the first few days of a visit more relaxed, particularly when travelling with family.",
              ],
              [
                "Business travellers",
                "Those with meetings, work commitments or short visits will appreciate a hotel that cuts unnecessary travel around their flight schedule.",
              ],
              [
                "Families with children",
                "Larger suites and a free pickup straight from arrivals make travelling with young children more manageable.",
              ],
              [
                "Travellers on short stopovers",
                "If you’re spending only a night or two in Islamabad before another flight or an onward journey north, staying close to the airport is the convenient choice.",
              ],
            ]}
          />
          <p>
            However, if most of your plans involve central Islamabad, including
            Blue Area, F-6 or F-7, a hotel closer to those destinations may be
            more practical. Your itinerary should ultimately guide your choice.
          </p>
        </BlogPostSection>
        <BlogPostSection title="Before You Book: A Quick Checklist">
          <p>Before confirming your reservation, take a moment to check:</p>
          {/* Mockup shows a dark header band; default table style kept for consistency with blogs 1 and 3. */}
          <BlogPostTable
            headers={["Check", "What to Confirm"]}
            columnWidths={["25%", "75%"]}
            rows={[
              [
                "Location",
                "The hotel’s address and estimated drive time from the airport.",
              ],
              [
                "Transfers",
                "Whether airport pickup is included and how to arrange it.",
              ],
              [
                "Room type",
                "Room size, bed arrangements, occupancy limits and included amenities.",
              ],
              [
                "Dining",
                "Breakfast availability, serving hours and meal options.",
              ],
              [
                "Guest reviews",
                "Recent feedback from travellers with similar requirements.",
              ],
              [
                "Booking policies",
                "Check-in and check-out times, cancellation terms and additional charges.",
              ],
              [
                "Communication",
                "Save the hotel’s contact details so you can reach the team if your travel plans change.",
              ],
            ]}
          />
          <p>
            A little preparation before your flight can help make your arrival
            much smoother.
          </p>
        </BlogPostSection>
        <BlogPostFaqAccordion faqs={faqs} />
        <BlogPostClosing
          title="Make Your Stay In Islamabad A Comfortable One"
          bottomPaddingClassName="pb-20 md:pb-32"
        >
          <p>
            Choosing the right hotel near Islamabad International Airport
            involves more than finding a property close to the terminal. It’s
            about the comfort of the rooms, the facilities available, dining and
            the overall guest experience.
          </p>
          <p>
            If you’re planning a visit to the capital,{" "}
            <strong className="font-bold text-neutral-900">
              Cyrus One by Trivelles
            </strong>{" "}
            offers hotel suites just minutes from the airport, with free pickup
            included.
          </p>
          <p className="font-bold italic text-neutral-900">
            Planning your stay in Islamabad?{" "}
            <Link
              href="/rooms"
              className="underline underline-offset-4 hover:text-neutral-600 transition-colors"
            >
              Explore rooms and suites
            </Link>{" "}
            at Cyrus One by Trivelles and book directly for your free airport
            pickup.
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
