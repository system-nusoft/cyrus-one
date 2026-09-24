export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date string, "yyyy-MM-dd" */
  date: string;
  categories: string[];
  readTime: string;
  image: { src: string; alt: string };
  /** Byline shown on the post's own detail page. Defaults to "Cyrus One Team" for all posts. */
  author?: string;
}

/** Two-letter initials shown in the byline avatar on a post's detail page. */
export const DEFAULT_BLOG_AUTHOR = "Cyrus One Team";

/** Filter pills shown on the blog listing grid, "All" plus every category used across posts. */
export const BLOG_FILTER_CATEGORIES = [
  "All",
  "Islamabad Guides",
  "Travel Tips",
  "Airport & Travel",
  "Dining",
  "Local Life",
];

// Dummy content for now — copy and images are placeholders until real posts are written.
// The featured post (index 0) is shown in LatestBlogSection; the rest populate the filterable grid.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "business-travel-in-islamabad-where-should-you-stay",
    title: "Business Travel In Islamabad: Where Should You Stay?",
    excerpt:
      "Planning your stay in Islamabad? Stay close to the airport while keeping the city within easy reach.",
    date: "2026-09-18",
    categories: [
      "Islamabad Guides",
      "Travel Tips",
      "Airport & Travel",
      "Hotels Near Islamabad Airport",
    ],
    // "7 Min Read" matches the detail page's own byline; was "6 Min Read" (unused elsewhere — this post
    // is excluded from OtherBlogsSection, and LatestBlogSection doesn't render readTime).
    readTime: "7 Min Read",
    image: {
      alt: "Business traveler with a suitcase walking toward Islamabad International Airport at sunrise as a plane departs overhead",
      src: "/blog-1-hero.webp",
    },
  },
  {
    slug: "a-first-timers-guide-to-faisal-mosque",
    title: "A First-Timer's Guide To Faisal Mosque",
    excerpt:
      "Everything to know before visiting Islamabad's most iconic landmark, from timings to what to wear.",
    date: "2026-08-04",
    categories: ["Islamabad Guides", "Travel Tips"],
    readTime: "5 Min Read",
    image: {
      src: "/other-blogs.png",
      alt: "Placeholder blog image — tree-lined road in Islamabad with the Margalla Hills in the background.",
    },
  },
  {
    slug: "how-much-time-do-you-really-need-in-islamabad",
    title: "How Much Time Do You Really Need In Islamabad?",
    excerpt:
      "A realistic look at how many days to set aside depending on whether you're passing through or staying a while.",
    date: "2026-07-28",
    categories: ["Travel Tips"],
    readTime: "5 Min Read",
    image: {
      src: "/other-blogs.png",
      alt: "Placeholder blog image — tree-lined road in Islamabad with the Margalla Hills in the background.",
    },
  },
  {
    slug: "where-to-eat-near-the-airport-enclave",
    title: "Where To Eat Near The Airport Enclave",
    excerpt:
      "A shortlist of restaurants and cafes worth the short drive from Cyrus One, whatever you're in the mood for.",
    date: "2026-07-21",
    categories: ["Dining", "Airport & Travel"],
    readTime: "5 Min Read",
    image: {
      src: "/other-blogs.png",
      alt: "Placeholder blog image — tree-lined road in Islamabad with the Margalla Hills in the background.",
    },
  },
  {
    slug: "margalla-hills-a-locals-weekend-guide",
    title: "Margalla Hills: A Local's Weekend Guide",
    excerpt:
      "The best trails, viewpoints and times of day to catch the Margalla Hills at their most scenic.",
    date: "2026-07-14",
    categories: ["Local Life", "Islamabad Guides"],
    readTime: "5 Min Read",
    image: {
      src: "/other-blogs.png",
      alt: "Placeholder blog image — tree-lined road in Islamabad with the Margalla Hills in the background.",
    },
  },
];
