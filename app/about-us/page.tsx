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

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cyrus One by Trivelles brings together luxury, spacious apartment-style accommodation, thoughtful amenities and a convenient location near Islamabad International Airport.",
  alternates: {
    canonical: "https://cyrusonehotel.com/about-us",
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
