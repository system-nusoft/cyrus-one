import Image from "next/image";

const travellers = [
  {
    icon: "/modern-travellers-1.svg",
    title: "Business Travelers",
    description:
      "Work without interruption. Enjoy fast fiber WiFi, dedicated desks, and 24/7 check-in so you can stay on schedule.",
    tagline: "High-Speed Fiber WiFi",
    stat: "98.2%",
    statLabel: "uptime",
    bg: "bg-rose-100/70",
  },
  {
    icon: "/modern-travellers-2.svg",
    title: "Transit & Layovers",
    description:
      "Escape the airport. Book a flexible short stay to shower, sleep in a real bed, and reset before your next flight.",
    tagline: "24/7 Express Check-in",
    stat: "93.1%",
    statLabel: "satisfaction",
    bg: "bg-stone-100/70",
  },
  {
    icon: "/modern-travellers-3.svg",
    title: "Families & Groups",
    description:
      "Give everyone room to breathe. Kitchenettes and spacious living areas so the whole family can stretch out.",
    tagline: "Standard Double to 2-Bed Suites",
    stat: "7",
    statLabel: "room types",
    bg: "bg-sky-100/70",
  },
];

export default function ModernTravellersSection() {
  return (
    <section
      className="relative py-12 md:py-20 overflow-hidden"
      aria-label="Designed for modern travellers"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/travellers-bg.png"
          alt="Cyrus One Hotel corridor with colourful doors"
          fill
          className="object-cover object-left md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/0" />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold text-3xl md:text-5xl text-white">
            A Stay Tailored to Your Itinerary
          </h2>
          <p className="text-md md:text-lg text-white/80 mt-4 max-w-lg mx-auto">
            Every trip is different. That’s why our hotel apartments are
            equipped to match your exact travel needs in Islamabad.
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

              <h3
                className="font-raleway font-bold text-xl capitalize"
                style={{ color: "#545454" }}
              >
                {item.title}
              </h3>

              <p
                className="font-raleway text-md leading-relaxed"
                style={{ color: "#545454" }}
              >
                {item.description}
              </p>

              <p className="font-raleway text-md font-bold" style={{ color: "#545454" }}>
                {item.tagline}
              </p>

              <div className="mt-auto pt-4 border-t border-neutral-200/60 w-full hidden">
                <p
                  className="font-roboto font-bold text-3xl"
                  style={{ color: "#545454" }}
                >
                  {item.stat}
                </p>
                <p
                  className="font-raleway font-raleway text-xl font-bold"
                  style={{ color: "#545454" }}
                >
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
