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
import BlogPostTable from "@/components/sections/BlogPostTable";
import { BLOG_POSTS } from "@/content/blogs";

const post = BLOG_POSTS[0];
const pageUrl = `https://cyrusonehotel.com/blogs/${post.slug}`;

export const metadata: Metadata = {
  title: { absolute: `${post.title} | Cyrus One` },
  description: post.excerpt,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: post.title,
    description: post.excerpt,
    url: pageUrl,
  },
};

export default function BusinessTravelBlogPostPage() {
  return (
    <>
      <Header dark />

      <main className="bg-white">
        <BlogPostHeader post={post} category="Travel Tips" />
        <BlogPostIntro />

        <BlogPostSection
          number="01"
          title="Start With Location"
          image={{
            src: "/blog-1-image-2.png",
            // Assistant-written, not client-supplied — needs confirmation, same caveat as other blog images.
            alt: "A view of Islamabad's road network connecting the airport, city sectors and business districts.",
          }}
        >
          <p>
            When you’re travelling for work, location isn’t just about being
            close to your meeting. You might need to move between the
            airport, Islamabad, Rawalpindi and different business districts
            throughout your stay. A well-connected location can make your
            schedule much easier to manage.
          </p>
          <p>Before booking, look at:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Distance from the airport</li>
            <li>Access to major roads and motorways</li>
            <li>Travel time to your meetings</li>
            <li>Access to restaurants and other essentials</li>
            <li>Ease of getting around during busy hours</li>
          </ul>
          <p>
            It’s also worth checking actual driving times rather than relying
            only on distance. Islamabad is spread across different sectors,
            and your travel time can vary depending on where your meetings
            are scheduled.
          </p>
        </BlogPostSection>

        <BlogPostSection
          number="02"
          title="Think About Your Daily Schedule"
          image={{
            src: "/blog-1-image-3.png",
            // Assistant-written, not client-supplied — needs confirmation, same caveat as other blog images.
            alt: "A business traveller checking their schedule between meetings in Islamabad.",
          }}
        >
          <p>
            A business trip rarely goes exactly according to plan. You might
            have a meeting at 9 AM, another across the city in the afternoon
            and a dinner with clients in the evening. If a large part of your
            day disappears on the road, that time is gone for good.
          </p>
          <p>
            When choosing accommodation, consider your itinerary as a whole.
            Ask yourself where you’ll be spending most of your time, how easy
            it will be to get there, and what your journey will look like
            before and after your meetings.
          </p>
          <p>
            A few minutes spent planning your location can save considerably
            more time during the trip.
          </p>
        </BlogPostSection>

        <BlogPostSection
          number="03"
          title="Reliable Wi-Fi Is A Must"
          image={{
            src: "/blog-1-image-4.png",
            // Assistant-written, not client-supplied — needs confirmation, same caveat as other blog images.
            alt: "A wireless router with its signal lights on, representing reliable in-room Wi-Fi for business travellers.",
          }}
        >
          <p>
            For business travellers, Wi-Fi isn’t really an extra anymore. You
            may need to join a video call, respond to emails, review
            documents or send a presentation after a full day of meetings.
          </p>
          <p>
            Before booking, check that reliable Wi-Fi is available throughout
            the property and, ideally, in your room. A comfortable place to
            work also helps — even if you’re only using it for an hour
            between meetings, having a proper surface and somewhere quiet to
            sit can make working from your room much easier.
          </p>
        </BlogPostSection>

        <BlogPostSection
          number="04"
          title="Don't Underestimate Room Size"
          image={{
            src: "/blog-1-image-5.png",
            // Assistant-written, not client-supplied — needs confirmation, same caveat as other blog images.
            alt: "A spacious hotel room with comfortable seating, giving a business traveller room to work and unwind.",
          }}
        >
          <p>
            After several meetings and a busy day, having somewhere
            comfortable to return to matters. A larger room gives you more
            flexibility to work, relax, organise your belongings and simply
            have some breathing room — more valuable still when your trip
            lasts several days.
          </p>
          <BlogPostTable
            headers={["What To Look For", "Why It Helps"]}
            rows={[
              ["Spacious room", "More comfortable for longer stays"],
              ["Work-friendly space", "Easier to handle emails and calls"],
              ["Comfortable seating", "Useful when you don’t want to work from bed"],
              ["Balcony", "A chance to step outside and unwind"],
              ["Kitchenette", "Convenient for longer stays"],
              ["Good storage", "Keeps your space organised"],
            ]}
          />
          <p>
            At Cyrus One, rooms range from 25 m² to 92 m², with selected
            rooms and suites offering kitchenettes and balconies — giving
            business travellers the option to choose accommodation based on
            how long they’re staying and how much space they need.
          </p>
        </BlogPostSection>

        <BlogPostSection
          number="05"
          title="Consider What You Need For A Longer Stay"
          imageAspectClassName="aspect-[16/9]"
          image={{
            src: "/blog-1-image-6.png",
            // Assistant-written, not client-supplied — needs confirmation, same caveat as other blog images.
            alt: "Islamabad's skyline with the Margalla Hills and Faisal Mosque in the distance, seen from a busy road.",
          }}
        >
          <p>
            Not every business trip lasts one night. You might be in
            Islamabad for a week, returning regularly for a project or
            combining work with time to explore the city.
          </p>
          <p>
            For longer stays, the things that seem like small conveniences at
            first can become much more useful. A kitchenette, additional
            living space, a balcony or simply having enough room to settle in
            can make several days away from home feel much easier.
          </p>
          <BlogPostTable
            headers={["Trip Length", "What To Prioritise"]}
            rows={[
              ["For a one-night trip", "Prioritise location, transport, Wi-Fi and a comfortable night’s sleep."],
              ["For a multi-day trip", "Look for more space, useful in-room facilities and somewhere you can comfortably spend time between meetings."],
            ]}
          />
        </BlogPostSection>

        <BlogPostSection
          number="06"
          title="Make Your Airport Journey Simple"
          image={{
            src: "/blog-1-image-7.png",
            // Assistant-written, not client-supplied — needs confirmation, same caveat as other blog images.
            alt: "A car waiting outside a hotel entrance, ready to take a guest to Islamabad International Airport.",
          }}
        >
          <p>
            Business trips often begin or end at an inconvenient hour —
            arriving late at night, an early morning flight, or heading
            straight to a meeting after landing. Easy airport transfers can
            remove one more thing from your to-do list.
          </p>
          <p>
            Before booking, check how far the accommodation is from the
            airport, whether airport pick-up is available, whether transfers
            need to be arranged in advance, and what transport options exist
            for early departures.
          </p>
          <p>
            Cyrus One offers complimentary airport pick-up for guests, which
            can be particularly convenient when your schedule doesn’t leave
            much room for arranging transport after landing.
          </p>
        </BlogPostSection>

        <BlogPostSection
          number="07"
          title="Breakfast Can Make Your Morning Easier"
          imageAspectClassName="aspect-[16/9]"
          image={{
            src: "/blog-1-image-8.png",
            // Assistant-written, not client-supplied — needs confirmation, same caveat as other blog images.
            alt: "A breakfast spread laid out for guests, giving business travellers an easy start before a busy day of meetings.",
          }}
        >
          <p>
            When you’re travelling for work, mornings can be rushed. Having
            breakfast at your accommodation means one less stop to plan
            before heading to a meeting.
          </p>
          <p>
            It’s also worth checking breakfast timings if you have an early
            appointment or flight — knowing what is available and when can
            help you plan your morning more realistically.
          </p>
          <p>
            Cyrus One includes complimentary breakfast for guests, giving
            business travellers an easy option before starting the day.
          </p>
        </BlogPostSection>

        <BlogPostSection number="08" title="Look Beyond The Workday">
          <p>
            Business travel isn’t always meetings from morning to evening. If
            you have a free afternoon or a few hours between commitments,
            Islamabad gives you plenty of ways to step away from work.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Faisal Mosque</li>
            <li>Pakistan Monument</li>
            <li>Lok Virsa Museum</li>
            <li>Daman-e-Koh</li>
            <li>Saidpur Village</li>
            <li>Centaurus Mall</li>
          </ul>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/blog-1-image-9.png"
              // Assistant-written, not client-supplied — needs confirmation, same caveat as other blog images.
              alt="A white marble pavilion in an Islamabad park, surrounded by gardens and city skyline in the background."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <p>
            You don’t necessarily need an entire day to experience the city —
            a little planning can turn a free couple of hours into a
            much-needed break. Staying several days? Consider adding Taxila
            for a change of pace and a look at the region’s archaeological
            heritage.
          </p>
        </BlogPostSection>

        <BlogPostSection number="09" title="Check The Practical Essentials">
          <p>
            When you’re travelling for business, convenience matters. Before
            confirming your booking, look beyond the room itself and check
            what is included.
          </p>
          <BlogPostTable
            headers={["Essential", "What To Consider"]}
            columnWidths={["30%", "70%"]}
            rows={[
              ["Wi-Fi", "Is it available in your room?"],
              ["Breakfast", "Is it included and what are the timings?"],
              ["Airport transfer", "Is pick-up available when you arrive?"],
              ["Parking", "Useful if you’re driving"],
              ["Reception", "Can you get assistance outside standard hours?"],
              ["Room size", "Will you be comfortable for the duration of your stay?"],
              ["Transport", "Can the hotel help arrange local travel?"],
              ["Location", "Does it work with your meetings and itinerary?"],
            ]}
          />
          <p>
            These details might not seem important when you’re booking, but
            they’re often the things you notice most once you’re actually
            there.
          </p>
        </BlogPostSection>

        <BlogPostSection number="10" title="Choose Based On The Trip You're Taking">
          <p>
            There isn’t one perfect type of accommodation for every business
            traveller. Your priorities should depend on your schedule.
          </p>
          <BlogPostTable
            headers={["Trip Type", "What To Prioritise"]}
            rows={[
              ["One-Night Business Trip", "Focus on convenience — easy airport access, transport, Wi-Fi, breakfast and a comfortable room."],
              ["Several Meetings Across Islamabad", "Prioritise connectivity and location so you’re not spending unnecessary time travelling between appointments."],
              ["Week-Long Business Trip", "Look for additional space and facilities that make the accommodation comfortable beyond just sleeping."],
              ["Business + Leisure", "Choose somewhere that makes it easy to manage work commitments while still giving you access to Islamabad’s restaurants, attractions and experiences."],
            ]}
          />
        </BlogPostSection>

        <BlogPostClosing
          title="Why Choose Cyrus One For Your Trip?"
          image={{
            src: "/blog-1-image-10.png",
            // Assistant-written, not client-supplied — needs confirmation, same caveat as other blog images.
            alt: "Cyrus One's apartment-style accommodation, offering a comfortable base for business travellers in Islamabad.",
          }}
        >
          <p>
            For business travellers looking for a comfortable base in
            Islamabad, Cyrus One combines spacious apartment-style
            accommodation with practical amenities.
          </p>
          <p>
            Located in Airport Enclave, the hotel offers easy access towards
            Islamabad, Rawalpindi and Taxila. Selected rooms feature
            kitchenettes and private balconies, giving guests added
            flexibility during their stay.
          </p>
          <p>
            Guests also have access to complimentary breakfast, Wi-Fi,
            parking and airport pick-up. Whether you’re in Islamabad for a
            quick meeting or a longer project, the aim is simple: give you a
            comfortable space to work, rest and make the most of your time in
            the city.
          </p>
        </BlogPostClosing>

        <BlogPostClosing title="Final Thoughts" bottomPaddingClassName="pb-20 md:pb-32">
          <p>
            A good business stay isn’t necessarily about finding the most
            luxurious room or the lowest rate. It’s about finding somewhere
            that fits the way you actually travel.
          </p>
          <p>
            A convenient location, reliable Wi-Fi, comfortable space, easy
            transport and a few thoughtful amenities can make a busy trip
            feel considerably more manageable. And when your meetings are
            done, having a comfortable place to return to makes all the
            difference.
          </p>
          <p className="text-2xl md:text-3xl font-bold italic text-neutral-900">
            Working in Islamabad? Stay somewhere that works around you.
          </p>
          <div className="pt-4">
            <Link
              href="/rooms"
              className="flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-neutral-900 text-white font-semibold text-md hover:bg-neutral-700 transition-colors w-fit"
              aria-label="Explore rooms and suites"
            >
              <span>Explore Rooms &amp; Suites</span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </BlogPostClosing>
      </main>

      <Footer />
      <RibbonSection />
    </>
  );
}
