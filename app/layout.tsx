import type { Metadata } from "next";
import { Playfair_Display, Raleway, Roboto } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cyrusonehotel.com"),
  title: {
    default: "Cyrus One Hotel Islamabad",
    template: "%s | Cyrus One Hotel Islamabad",
  },
  description:
    "Cyrus One by Trivelles — a premium 55-room hotel in Islamabad, perfectly positioned on Srinagar Highway. Minutes from the airport with seamless check-ins, high-speed Wi-Fi, and 7 room categories.",
  keywords: [
    "hotel islamabad",
    "hotel near islamabad airport",
    "cyrus one hotel",
    "trivelles",
    "srinagar highway hotel",
    "islamabad airport hotel",
    "business hotel islamabad",
    "transit hotel islamabad",
  ],
  authors: [{ name: "Cyrus One by Trivelles" }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://cyrusonehotel.com",
    siteName: "Cyrus One Hotel Islamabad",
    title: "Cyrus One Hotel Islamabad",
    description:
      "Premium 55-room hotel in Islamabad — minutes from the airport. Business travellers, transit passengers, and families welcome.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyrus One Hotel Islamabad exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyrus One Hotel Islamabad",
    description:
      "Premium 55-room hotel in Islamabad — minutes from the airport.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://cyrusonehotel.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable} ${roboto.variable} scroll-smooth`}>
      <body className="font-raleway antialiased">{children}</body>
    </html>
  );
}
