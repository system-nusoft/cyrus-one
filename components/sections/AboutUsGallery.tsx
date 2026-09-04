"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import GalleryModal, { type GalleryImage } from "@/components/ui/GalleryModal";

const galleryImages: GalleryImage[] = [
  {
    src: "/about-us-gallery-1.png",
    alt: "Living area with a kitchenette and a doorway into the bedroom at Cyrus One, showing the apartment-style layout of the suite in Islamabad.",
  },
  {
    src: "/about-us-gallery-2.png",
    alt: "Cyrus One lobby seating area with green and cream armchairs, a wooden console table, fresh flowers, and a mirrored wall in Islamabad.",
  },
  {
    src: "/about-us-gallery-3.png",
    alt: "A guest checking her phone at a café table at Cyrus One, surrounded by greenery and artwork in the hotel's shared spaces, Islamabad.",
  },
  // Grid shows images 1–3; these extra shots appear only in the "View Gallery" modal.
  // They reuse photos from elsewhere on the site, so the alt text is shared:
  {
    // same photo as hero-bg-1
    src: "/about-us-gallery-4.webp",
    alt: "Aerial view of Cyrus One Hotel's tiled courtyard lounge with seating and plants, a luxury hotel just 5 km from Islamabad International Airport.",
  },
  {
    // same photo as Executive Suite image 13
    src: "/about-us-gallery-5.webp",
    alt: "Living room with a ceiling fan, sheer curtains, and a wall-mounted TV in the Cyrus One Executive Suite near Islamabad Airport.",
  },
  {
    // same photo as Executive Suite image 1
    src: "/about-us-gallery-6.webp",
    alt: "Bed with a padded headboard and bedside lamps in the Cyrus One Executive Suite, a 46 sqm suite near Islamabad International Airport.",
  },
  {
    // same photo as Executive Suite image 16
    src: "/about-us-gallery-7.webp",
    alt: "Balcony seating with a potted orchid overlooking the neighborhood from the Cyrus One Executive Suite at Cyrus One Hotel, Islamabad.",
  },
];

export default function AboutUsGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="px-6 md:px-10 lg:px-16 py-12 md:py-20"
      aria-label="Cyrus One gallery"
    >
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-bold text-3xl md:text-5xl text-neutral-900 leading-tight">
          See Cyrus One for Yourself.
        </h2>
        <p className="text-md md:text-lg text-neutral-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          Take a look around our rooms, suites, shared spaces and the details
          that make Cyrus One what it is.
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        {/* Left — two stacked images */}
        <div className="flex flex-col gap-4">
          {[0, 1].map((i) => (
            <button
              key={galleryImages[i].src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-[3/2] overflow-hidden bg-neutral-100"
              aria-label={`Open gallery at image ${i + 1}`}
            >
              <Image
                src={galleryImages[i].src}
                alt={galleryImages[i].alt ?? ""}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </button>
          ))}
        </div>

        {/* Right — one tall image */}
        <button
          type="button"
          onClick={() => setOpenIndex(2)}
          className="group relative aspect-[3/4] lg:aspect-auto overflow-hidden bg-neutral-100"
          aria-label="Open gallery at image 3"
        >
          <Image
            src={galleryImages[2].src}
            alt={galleryImages[2].alt ?? ""}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </button>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10 md:mt-12">
        <button
          type="button"
          onClick={() => setOpenIndex(0)}
          className="flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-neutral-900 text-white font-semibold text-md hover:bg-neutral-700 transition-colors"
          aria-label="View the Cyrus One gallery"
        >
          <span>View Gallery</span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 shrink-0">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </button>
      </div>

      {openIndex !== null && (
        <GalleryModal
          images={galleryImages}
          startIndex={openIndex}
          label="Cyrus One gallery"
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
