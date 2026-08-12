import type { Metadata } from "next";
import { Playfair_Display, Raleway, Roboto } from "next/font/google";
import Script from "next/script";
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
    default: "Cyrus One by Trivelles | Hotels Near Islamabad Airport",
    template: "%s | Cyrus One Hotel Islamabad",
  },
  description:
    "Looking for hotels near Islamabad Airport? Cyrus One by Trivelles offers premium hotel apartments just 5km from Islamabad International Airport and the M2 Motorway. Book your stay today.",
  keywords: [
    "hotels near islamabad airport",
    "hotel near islamabad airport",
    "hotels near islamabad international airport",
    "islamabad airport hotel",
    "hotels in islamabad near airport",
    "hotel islamabad",
    "cyrus one hotel",
    "trivelles",
    "srinagar highway hotel",
    "business hotel islamabad",
    "transit hotel islamabad",
  ],
  authors: [{ name: "Cyrus One by Trivelles" }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://cyrusonehotel.com",
    siteName: "Cyrus One by Trivelles",
    title: "Hotels Near Islamabad Airport | Cyrus One by Trivelles",
    description:
      "Discover elegant spaces and premium hospitality in our luxury hotel apartments, located just 5km from Islamabad International Airport and the M2 Motorway.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyrus One Hotel Islamabad exterior",
      },
    ],
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
    <html
      lang="en"
      className={`${playfair.variable} ${raleway.variable} ${roboto.variable} scroll-smooth`}
    >
      <body className="font-raleway antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18205737022"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18205737022');
          gtag('config', 'G-0ZKNWYNFCJ');
        `}</Script>
      </body>
    </html>
  );
}
