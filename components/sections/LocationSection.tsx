import Image from "next/image";

export default function LocationSection() {
  return (
    <section
      className="pb-12 md:pb-20 px-6 md:px-10 lg:px-16"
      aria-label="Location and nearby landmarks"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
        {/* Left — heading + description */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-900 leading-tight">
            A Strategic Vantage Point
          </h2>
          <p className="text-md md:text-lg text-neutral-900 leading-relaxed max-w-lg">
            Cyrus One places you moments away from key transport hubs, ensuring
            your arrivals and departures are entirely effortless, whilst keeping
            the capital&apos;s premier retail and cultural destinations within easy
            reach.
          </p>
        </div>

        {/* Right — map reference image */}
        <div className="relative w-full rounded-3xl overflow-hidden">
          <Image
            src="/map-reference.png"
            alt="Map showing Cyrus One Hotel location and nearby landmarks"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
