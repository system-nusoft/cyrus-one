import type { Metadata } from "next";
import ExploreHero from "@/components/sections/ExploreHero";
import ExploreDistances from "@/components/sections/ExploreDistances";
import ExploreTimeGuide from "@/components/sections/ExploreTimeGuide";
import ExploreLandmarks from "@/components/sections/ExploreLandmarks";
import ExploreDining from "@/components/sections/ExploreDining";
import ExploreGettingAround from "@/components/sections/ExploreGettingAround";
import ExploreLocalsNote from "@/components/sections/ExploreLocalsNote";
import ExploreDeskCta from "@/components/sections/ExploreDeskCta";
import RibbonSection from "@/components/sections/RibbonSection";
import Footer from "@/components/layout/Footer";

const title = "Explore Islamabad | Places to Visit & Travel Guide | Cyrus One";
const description =
  "Discover Islamabad from Cyrus One with local tips, places to visit, dining recommendations, travel times and practical advice for making the most of your stay.";

export const metadata: Metadata = {
  // `absolute` skips the "%s | Cyrus One Hotel Islamabad" template from the root layout.
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://cyrusonehotel.com/explore-islamabad",
  },
  openGraph: {
    title,
    description,
    url: "https://cyrusonehotel.com/explore-islamabad",
  },
};

export default function ExploreIslamabadPage() {
  return (
    <>
      <main>
        <ExploreHero />
        <RibbonSection />
        <ExploreDistances />
        <div className="h-1 bg-neutral-950" aria-hidden="true" />
        <ExploreTimeGuide />
        <ExploreLandmarks />
        <ExploreDining />
        <ExploreGettingAround />
        <ExploreLocalsNote />
        <ExploreDeskCta />
      </main>

      <Footer />
      <RibbonSection />
    </>
  );
}
