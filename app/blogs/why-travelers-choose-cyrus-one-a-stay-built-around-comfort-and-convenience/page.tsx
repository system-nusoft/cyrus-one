import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RibbonSection from "@/components/sections/RibbonSection";
import BlogPostHeader from "@/components/sections/BlogPostHeader";
import BlogPostIntro from "@/components/sections/BlogPostIntro";
import BlogPostClosing from "@/components/sections/BlogPostClosing";
import BlogPostShare from "@/components/sections/BlogPostShare";
import BlogPostFaq from "@/components/sections/BlogPostFaq";
import BlogPostSection from "@/components/sections/BlogPostSection";
import BlogPostTestimonial from "@/components/sections/BlogPostTestimonial";
import { BLOG_POSTS } from "@/content/blogs";

const SLUG =
  "why-travelers-choose-cyrus-one-a-stay-built-around-comfort-and-convenience";
const post = BLOG_POSTS.find((p) => p.slug === SLUG)!;
const pageUrl = `https://cyrusonehotel.com/blogs/${post.slug}`;

// Client-supplied meta title/description (the title already includes the brand, so `absolute` skips the root template).
const metaTitle = "Why Travelers Choose Cyrus One | Hotel Near Islamabad Airport";
const metaDescription =
  "Looking for a hotel near Islamabad Airport? See why guests choose Cyrus One: free airport pickup, free breakfast and comfortable rooms in Airport Enclave.";

export const metadata: Metadata = {
  title: { absolute: metaTitle },
  description: metaDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: pageUrl,
  },
};

export default function WhyTravelersChooseCyrusOnePostPage() {
  return (
    <>
      <Header dark />

      <main className="bg-white">
        <BlogPostHeader post={post} category="Guest Stories" />

        <BlogPostIntro
          lead="Choosing where to stay is about more than finding a room for the night. You want a place that feels comfortable when you arrive, fits the way you travel, and gives you confidence that the experience will match what you saw when booking."
          paragraphs={[
            "At Cyrus One, we believe those details matter. From a convenient location near Islamabad International Airport to comfortable spaces, thoughtful amenities and attentive service, every part of the stay contributes to the experience. In this article, we look at what makes a stay with us comfortable and convenient, along with what some of our guests have shared about their experiences.",
          ]}
        />

        <BlogPostSection
          title="A Convenient Location For Your Islamabad Stay"
          image={{
            src: "/blog-2-image-2.jpeg",
            alt: "Cyrus One hotel building exterior in Airport Enclave, Islamabad, close to Islamabad International Airport",
          }}
        >
          <p>
            Location can make a significant difference to your travel
            experience, especially when you are arriving by air, have an early
            flight, or are traveling with family. Located in Airport Enclave,
            we offer convenient access to Islamabad International Airport,
            making it easier to settle in after arriving in the city or head
            to the airport when your trip comes to an end.
          </p>
          <p>
            Complimentary airport pick-up and drop-off is also available for
            guests. For those staying longer, our location provides a
            practical base for exploring Islamabad, with the city’s
            attractions, shopping destinations and business areas within
            reach.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="Spaces Designed To Feel Comfortable"
          // The testimonial card image is ~1.74:1 with its own rounded corners; the default 3:2 would crop the quote.
          imageAspectClassName="aspect-[2200/1264]"
          image={{
            src: "/blog-2-image-3.png",
            alt: "Guest review card: Dr. Mahrukh outside room 203 at Cyrus One, rating her family stay five stars",
          }}
          afterImage={
            <p>
              For us, that feedback is especially meaningful because it speaks
              to the experience beyond the booking photos. We want our spaces
              to feel welcoming and comfortable when you arrive, settle in and
              spend time with the people you are traveling with.
            </p>
          }
        >
          <p>
            Our rooms and suites are designed for different types of
            travelers, from couples and solo guests to families and groups.
            Depending on the room, you can find features such as private
            balconies, seating areas, kitchenettes, air conditioning and
            Wi-Fi. Larger accommodations are available for families and groups
            who need additional space, and business travelers will find a
            practical base between meetings.
          </p>
          <p>
            But comfort is not only about what a room offers. It is also about
            how the space feels when you walk through the door. One of our
            guests,{" "}
            <strong className="font-bold text-neutral-900">Dr. Mahrukh</strong>
            , stayed with her family for a two-day trip and shared her
            experience.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="Complimentary Breakfast To Start Your Day"
          image={{
            src: "/blog-2-image-4.png",
            alt: "Complimentary breakfast buffet at Cyrus One Islamabad with chicken qorma, lahori chana and omelette",
          }}
          afterImage={
            <>
              <p>
                Our guests have enjoyed the spread.{" "}
                <strong className="font-bold text-neutral-900">
                  Hamza Javed
                </strong>
                , who recently stayed with us, wrote:
              </p>
              <BlogPostTestimonial
                quote="Great stay at Cyrus. The rooms were clean, the staff was cooperative, the breakfast had good options and the location is right next to the airport."
                name="Hamza Javed"
              />
            </>
          }
        >
          <p>
            A good morning often begins with a good breakfast, and every stay
            at Cyrus One includes a complimentary buffet breakfast with a mix
            of Pakistani and international dishes. Breakfast is served from
            7:00 am to 10:30 am, so whether you have an early flight, a
            morning meeting or a slow start with family, it’s an easy way to
            begin the day without having to look for a place to eat.
          </p>
        </BlogPostSection>
        <BlogPostSection
          title="What Our Guests Say About Their Stay"
          image={{
            src: "/blog-2-image-5.png",
            alt: "Guest review card: Ms. Chessie Ritchie enjoying breakfast at Cyrus One, a five-star review of the hotel near Islamabad Airport",
          }}
          imageAspectClassName="aspect-[2200/1264]"
          afterImage={
            <>
              <div className="relative aspect-[2200/1264] overflow-hidden">
                <Image
                  src="/blog-2-image-6.png"
                  alt="Guest review card: Ms. Debra and her husband with a Cyrus One team member at reception, five-star review"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
              <p>
                <strong className="font-bold text-neutral-900">
                  Dr. Mahrukh
                </strong>{" "}
                also described &ldquo;a warm, home like atmosphere&rdquo; and
                said her family would &ldquo;definitely come back again.&rdquo;
                These guests had different reasons for traveling, but their
                feedback highlights some of the things that matter most during
                a stay: comfort, convenience, good service and feeling welcome.
              </p>
            </>
          }
        >
          <p>
            The best way to understand a stay is often to hear from the people
            who have experienced it themselves.
          </p>
        </BlogPostSection>
        <BlogPostFaq
          faqs={[
            {
              question:
                "What should I consider when choosing a hotel near Islamabad Airport?",
              answer:
                "Consider the location, airport accessibility, accommodation options, available amenities and the quality of service. If you are arriving late, leaving early or traveling with family, convenient airport access can be particularly helpful.",
            },
            {
              question: "What is the best hotel near Islamabad Airport?",
              answer:
                "The right choice depends on your travel needs and what matters most to you. If you are looking for convenient airport access, comfortable accommodation and attentive hospitality, Cyrus One offers a practical option for your stay in Islamabad.",
            },
            {
              question:
                "How can I get to Cyrus One from Islamabad International Airport?",
              answer:
                "We are located in Airport Enclave, with convenient access to the airport. Complimentary airport pick-up and drop-off is available for guests.",
            },
            {
              question:
                "Is Cyrus One suitable for families and business travelers?",
              answer:
                "Yes. We offer accommodation options for different types of travelers, including families, groups and business guests. Larger rooms and suites provide additional space, and shared areas give families places to relax together.",
            },
          ]}
        />
        <BlogPostClosing
          title="Plan Your Stay at Cyrus One"
          bottomPaddingClassName="pb-20 md:pb-32"
        >
          <p>
            Where you stay can shape how you experience a trip. At Cyrus One,
            we bring together comfortable spaces, convenient access and
            welcoming hospitality to make your time in Islamabad easier from
            arrival to departure.
          </p>
          <p className="font-playfair text-2xl md:text-3xl italic text-neutral-900 leading-snug">
            Planning your next trip to Islamabad? Book your stay at Cyrus One
            and experience it for yourself.
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
