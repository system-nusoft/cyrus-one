import type { Metadata } from "next";
import RoomsPageClient from "./RoomsPageClient";

const title = "Rooms & Suites Near Islamabad Airport | Cyrus One by Trivelles";
const description =
  "Explore spacious hotel rooms and suites in Islamabad with modern amenities, private kitchenettes, balconies and comfortable options for extended stays.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://cyrusonehotel.com/rooms",
  },
  openGraph: {
    title,
    description,
    url: "https://cyrusonehotel.com/rooms",
  },
};

export default function RoomsPage() {
  return <RoomsPageClient />;
}
