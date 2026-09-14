import type { Metadata } from "next";
import ExploreHero from "@/components/sections/ExploreHero";
import ExploreDistances from "@/components/sections/ExploreDistances";
import { DESTINATIONS } from "@/content/explore-destinations";
import ExploreTimeGuide from "@/components/sections/ExploreTimeGuide";
import ExploreLandmarks, {
  LANDMARKS,
} from "@/components/sections/ExploreLandmarks";
import ExploreDining, { RESTAURANTS } from "@/components/sections/ExploreDining";
import ExploreGettingAround from "@/components/sections/ExploreGettingAround";
import ExploreLocalsNote from "@/components/sections/ExploreLocalsNote";
import ExploreDeskCta from "@/components/sections/ExploreDeskCta";
import RibbonSection from "@/components/sections/RibbonSection";
import Footer from "@/components/layout/Footer";
import { EXPLORE_HERO_IMAGE } from "@/content/explore-hero";
import { EXPLORE_DESK_CTA_IMAGE } from "@/content/explore-desk-cta";

const title = "Explore Islamabad | Places to Visit & Travel Guide | Cyrus One";
const description =
  "Discover Islamabad from Cyrus One with local tips, places to visit, dining recommendations, travel times and practical advice for making the most of your stay.";
const pageUrl = "https://cyrusonehotel.com/explore-islamabad";

export const metadata: Metadata = {
  // `absolute` skips the "%s | Cyrus One Hotel Islamabad" template from the root layout.
  title: { absolute: title },
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  url: pageUrl,
  description,
  isPartOf: {
    "@type": "WebSite",
    name: "Cyrus One by Trivelles",
    url: "https://cyrusonehotel.com",
  },
  // Ties this page to the same Hotel entity defined sitewide on the homepage.
  mainEntity: {
    "@id": "https://cyrusonehotel.com/#hotel",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://cyrusonehotel.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Explore Islamabad",
      item: pageUrl,
    },
  ],
};

const destinationsItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Quick Distances From Cyrus One",
  itemListElement: DESTINATIONS.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "LocalBusiness",
      name: d.name,
      image: `https://cyrusonehotel.com${d.image}`,
      ...(d.mapUrl ? { url: d.mapUrl } : {}),
    },
  })),
};

const pageImages: { src: string; alt: string }[] = [
  EXPLORE_HERO_IMAGE,
  ...DESTINATIONS.map((d) => ({ src: d.image, alt: d.alt })),
  ...LANDMARKS.map((l) => ({ src: l.image, alt: l.alt })),
  ...RESTAURANTS.filter((r) => r.image).map((r) => ({
    src: r.image as string,
    alt: r.alt ?? r.name,
  })),
  EXPLORE_DESK_CTA_IMAGE,
];

const imageObjectsJsonLd = pageImages.map((img) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: `https://cyrusonehotel.com${img.src}`,
  url: `https://cyrusonehotel.com${img.src}`,
  caption: img.alt,
  representativeOfPage: false,
}));

export default function ExploreIslamabadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(destinationsItemListJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectsJsonLd) }}
      />

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
