import Image from "next/image";

const travellers = [
  {
    icon: "/modern-travellers-1.svg",
    title: "business travelers",
    description:
      "Seamless check-ins, high-speed fiber WiFi, and dedicated workspaces  thoughtfully.",
    tagline: "maximize productivity in motion",
    stat: "98.2%",
    statLabel: "uptime",
    bg: "bg-rose-100/70",
  },
  {
    icon: "/modern-travellers-2.svg",
    title: "transit passengers",
    description:
      "Layovers become resets. Shower, sleep, refresh. In under 8 hours.",
    tagline: "turn layovers into resets",
    stat: "93.1%",
    statLabel: "satisfaction",
    bg: "bg-stone-100/70",
  },
  {
    icon: "/modern-travellers-3.svg",
    title: "families & couples",
    description:
      "Room flexibility from studios to 2-bedroom suites. Space and comfort for every need.",
    tagline: "every family, every need",
    stat: "7",
    statLabel: "room types",
    bg: "bg-sky-100/70",
  },
];

export default function ModernTravellersSection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      aria-label="Designed for modern travellers"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/travellers-bg.png"
          alt="Cyrus One Hotel corridor with colourful doors"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/0" />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-white">
            Designed for Modern Travellers
          </h2>
          <p className="text-sm md:text-lg text-white/80 mt-4 max-w-lg mx-auto">
            Whether you&apos;re in transit, visiting for business, or exploring
            Islamabad, Cyrus One is designed to move with your journey.
          </p>
        </div>

        {/* Cards grid */}
        <div className="md:max-w-4xl md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {travellers.map((item) => (
            <article
              key={item.title}
              className={`${item.bg} backdrop-blur-md rounded-3xl p-7 flex flex-col items-center text-center gap-4`}
              aria-label={item.title}
            >
              <Image src={item.icon} alt={item.title} width={40} height={40} />

              <h3 className="font-raleway font-bold text-xl capitalize" style={{ color: "#545454" }}>
                {item.title}
              </h3>

              <p className="font-raleway text-sm leading-relaxed" style={{ color: "#545454" }}>
                {item.description}
              </p>

              <p className="font-raleway text-sm" style={{ color: "#545454" }}>
                {item.tagline}
              </p>

              <div className="mt-auto pt-4 border-t border-neutral-200/60 w-full">
                <p className="font-raleway font-bold text-3xl" style={{ color: "#545454" }}>
                  {item.stat}
                </p>
                <p className="font-raleway font-raleway text-xl font-bold" style={{ color: "#545454" }}>
                  {item.statLabel}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
