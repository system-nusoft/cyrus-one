import type { Metadata } from "next";
import BlogsHero from "@/components/sections/BlogsHero";
import LatestBlogSection from "@/components/sections/LatestBlogSection";
// import OtherBlogsSection from "@/components/sections/OtherBlogsSection"; // hidden until real posts are ready
import RibbonSection from "@/components/sections/RibbonSection";
import Footer from "@/components/layout/Footer";

const title = "Blogs | Travel Tips & Islamabad Guides | Cyrus One";
const description =
  "Read travel tips, Islamabad guides and hotel stories from Cyrus One by Trivelles — your resource for planning a better stay near Islamabad Airport.";
const pageUrl = "https://cyrusonehotel.com/blogs";

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

export default function BlogsPage() {
  return (
    <>
      <main>
        <BlogsHero />
        <RibbonSection />
        <LatestBlogSection />
        {/* <OtherBlogsSection /> */}
      </main>

      <Footer />
      <RibbonSection />
    </>
  );
}
