import Image from "next/image";

const travellers = [
  {
    icon: "/modern-travellers-1.svg",
    title: "Business Travellers",
    description:
      "Work without interruption. Enjoy high-speed Wi-Fi, comfortable workspaces, and a convenient location near the airport.",
    tagline: "High-Speed Wi-Fi",
    stat: "98.2%",
    statLabel: "uptime",
    bg: "bg-rose-100/70",
  },
  {
    icon: "/modern-travellers-2.svg",
    title: "Transit & Layovers",
    description:
      "Escape the airport and unwind in comfort with quick airport access, restful spaces, and a seamless stopover experience.",
    tagline: "24/7 Express Check-in",
    stat: "93.1%",
    statLabel: "satisfaction",
    bg: "bg-stone-100/70",
  },
  {
    icon: "/modern-travellers-3.svg",
    title: "Families & Groups",
    description:
      "Enjoy spacious accommodations and a welcoming atmosphere designed for families and groups of all sizes.",
    tagline: "Spacious Family Rooms",
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
          alt="Hotel corridor with colorful doors at Cyrus One, showcasing stays tailored for business travellers, transit guests, and families in Islamabad."
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
            A Stay Tailored to Your Journey
          </h2>
          <p className="text-md md:text-lg text-white/80 mt-4 max-w-lg mx-auto">
            Every journey is different. That&apos;s why our rooms and suites
            are thoughtfully designed to meet the needs of every traveller,
            whether you&apos;re visiting for business, a short layover, or a
            family getaway.
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
