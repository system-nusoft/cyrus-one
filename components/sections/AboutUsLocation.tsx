import { MapPin, ExternalLink } from "lucide-react";

// Keyless coordinate embed (no API key). A coords-only `q` keeps the map clean —
// it drops a single pin without Google's expanded place info card (which carries
// its own "Open in Maps" button and would collide with our overlay). The
// "Cyrus One Hotel & Apartments" label still appears as a normal Google POI.
const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=33.59374754180226,72.85159887500258&z=15&output=embed";

// Deep link to the same listing (CID from the embed's place reference).
const MAPS_URL = "https://www.google.com/maps?cid=404801110839225686";

const points = [
  "5 km from Islamabad International Airport",
  "Easy access to the M1/M2 Motorway",
  "Convenient connection to Islamabad and surrounding areas",
];

export default function AboutUsLocation() {
  return (
    <section
      className="px-6 md:px-10 lg:px-16 py-12 md:py-20"
      aria-label="Cyrus One location"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left — map */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
          <iframe
            src={MAP_EMBED_SRC}
            title="Map showing Cyrus One's location in Airport Enclave, Islamabad, 5 km from Islamabad International Airport."
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          {/* Open in Maps */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-md transition-colors hover:bg-neutral-50"
          >
            Open in Maps
            <ExternalLink className="h-4 w-4" />
          </a>

          {/* Distance pill */}
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-md">
            <MapPin className="h-4 w-4 text-neutral-500" />
            5km from Islamabad Airport
          </div>
        </div>

        {/* Right — text */}
        <div className="flex flex-col gap-5 md:gap-6">
          <h2 className="font-bold text-3xl md:text-5xl text-neutral-900 leading-tight">
            Well Connected, Close to What Matters
          </h2>

          <p className="text-md md:text-lg text-neutral-600 leading-relaxed">
            Located in Airport Enclave, Cyrus One puts you close to Islamabad
            International Airport while keeping the city within easy reach.
          </p>

          <p className="text-md md:text-lg text-neutral-600 leading-relaxed">
            Whether you are catching an early flight, arriving late, attending a
            business meeting, or exploring Islamabad, the location makes getting
            around simple and convenient.
          </p>

          <ul className="mt-2 flex flex-col gap-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-md md:text-lg text-neutral-900"
              >
                <span className="mt-1 text-neutral-400" aria-hidden="true">
                  &mdash;
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
