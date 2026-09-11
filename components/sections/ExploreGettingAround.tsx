interface Tip {
  title: string;
  body: string;
  bg: string;
}

const TIPS: Tip[] = [
  {
    title: "Airport",
    body: "Cyrus One is just 5–10 minutes from Islamabad International Airport, with complimentary airport pick-up available for guests.",
    bg: "bg-[#bfdfe1]",
  },
  {
    title: "Getting Around",
    body: "Ride-hailing services such as Careem and InDrive are convenient options, while the hotel team can also help arrange transport.",
    bg: "bg-[#ffe089]",
  },
  {
    title: "City Travel",
    body: "Allow extra time for journeys into central Islamabad, especially during busy hours. Traffic can make drive times vary considerably.",
    bg: "bg-[#bfdfe1]",
  },
  {
    title: "Best Time To Explore",
    body: "October to April brings cooler weather and more comfortable conditions for sightseeing and outdoor activities.",
    bg: "bg-[#ffe089]",
  },
  {
    title: "Finding Your Way",
    body: "Islamabad is organised by sectors such as F-6, F-7, F-8 and E-8. Sharing the sector along with the destination name can make directions easier.",
    bg: "bg-[#bfdfe1]",
  },
  {
    title: "Need Help Planning?",
    body: "Our team can help you plan your route, arrange transport and suggest places to visit based on the time you have.",
    bg: "bg-[#ffe089]",
  },
];

export default function ExploreGettingAround() {
  return (
    <section className="bg-white py-12 md:py-20" aria-label="Getting around Islamabad">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="text-center">
          <h2 className="font-bold text-4xl md:text-6xl text-neutral-900 leading-tight">
            Making Your Way Around Islamabad
          </h2>
          <p className="mt-4 text-md md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Getting around Islamabad is fairly straightforward, but a little
            planning can make your day much easier. Here are a few things
            worth knowing before you head out.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {TIPS.map(({ title, body, bg }) => (
            <article key={title} className={`${bg} rounded-3xl p-7 md:p-8`}>
              <h3 className="font-bold text-xl text-neutral-900">{title}</h3>
              <p className="mt-3 text-md text-neutral-600 leading-relaxed">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
