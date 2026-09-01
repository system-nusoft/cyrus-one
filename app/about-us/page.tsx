import type { Metadata } from "next";
import AboutUsHero from "@/components/sections/AboutUsHero";
import AboutUsStory from "@/components/sections/AboutUsStory";
import AboutUsWhyChoose from "@/components/sections/AboutUsWhyChoose";
import AboutUsGallery from "@/components/sections/AboutUsGallery";
import AboutUsLocation from "@/components/sections/AboutUsLocation";
import AboutUsMarquee from "@/components/sections/AboutUsMarquee";
import AboutUsReviews from "@/components/sections/AboutUsReviews";
import RibbonSection from "@/components/sections/RibbonSection";
import Footer from "@/components/layout/Footer";

const title = "About Cyrus One | 5-Star Hotel Near Islamabad Airport";
const description =
  "Discover Cyrus One, a modern 5-star hotel near Islamabad International Airport, offering spacious accommodation, thoughtful amenities and personal hospitality";

export const metadata: Metadata = {
  // `absolute` skips the "%s | Cyrus One Hotel Islamabad" template from the root layout.
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://cyrusonehotel.com/about-us",
  },
  openGraph: {
    title,
    description,
    url: "https://cyrusonehotel.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <main>
        <AboutUsHero />
        <RibbonSection />
        <AboutUsStory />
        <AboutUsWhyChoose />
        <AboutUsGallery />
        <AboutUsLocation />
        <AboutUsMarquee />
        <AboutUsReviews />
      </main>

      <Footer />
      <RibbonSection />
    </>
  );
}
