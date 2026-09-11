import Image from "next/image";

interface Landmark {
  name: string;
  tagline: string;
  body: string;
  tip: string;
  image: string;
  alt: string;
}

// Alt text is assistant-written — replace with client-supplied descriptions when available.
const LANDMARKS: Landmark[] = [
  {
    name: "Faisal Mosque",
    tagline: "For architecture, culture & first-time visitors",
    body: "One of Islamabad's most recognisable landmarks, Faisal Mosque sits at the foot of the Margalla Hills and is one of the defining sights of the capital. Its distinctive, dome-less design gives it a character unlike most major mosques.",
    tip: "Combine it with a visit to Daman-e-Koh rather than making two separate trips across the city.",
    image: "/explore-faisal-1.png",
    alt: "Faisal Mosque lit up at dusk with the sprawl of Islamabad and the Margalla Hills behind it.",
  },
  {
    name: "Daman-e-Koh",
    tagline: "For views & the Margalla Hills",
    body: "Head into the Margalla Hills for a different perspective of Islamabad. Daman-e-Koh is one of the city's established viewpoints and a good choice when you want to trade city streets for mountain air.",
    tip: "Give yourself more time than you think you need. The drive up is part of the experience.",
    image: "/explore-daman-koh-1.png",
    alt: "The view over Islamabad from the Daman-e-Koh viewpoint in the Margalla Hills, framed by trees.",
  },
  {
    name: "Pakistan Monument & Lok Virsa",
    tagline: "For history, culture & a deeper look at Pakistan",
    body: "These two attractions work particularly well together. Visit the Pakistan Monument for one of Islamabad's most recognisable landmarks, then head to Lok Virsa to explore Pakistan's folk and traditional heritage.",
    tip: "Make this your cultural half-day rather than rushing through both.",
    image: "/explore-momument-1.png",
    alt: "The petal-shaped Pakistan Monument on Shakarparian Hill in Islamabad.",
  },
  {
    name: "Centaurus Mall",
    tagline: "For shopping, dining & an easy afternoon",
    body: "Not every day needs to be about sightseeing. Centaurus is a convenient option when you want shopping, food or some time indoors.",
    tip: "It's an easy addition to an itinerary when you're already heading towards central Islamabad.",
    image: "/explore-centaurus-1.png",
    alt: "The Centaurus Mall towers rising over central Islamabad at dusk.",
  },
  {
    name: "Taxila",
    tagline: "For history & archaeology",
    body: "Have more time? Go beyond Islamabad. Taxila offers a completely different experience, with ancient archaeological sites and a connection to the Gandhara civilisation. It's better suited to travellers who can dedicate several hours rather than those squeezing in a quick stop.",
    tip: "If history is your thing, don't rush Taxila. Give yourself a few hours to explore its ancient sites and discover more of its Gandhara heritage.",
    image: "/explore-taxila-1.png",
    alt: "Ancient stone ruins at the Taxila archaeological site near Islamabad.",
  },
];

export default function ExploreLandmarks() {
  return (
    <section className="bg-neutral-950 py-12 md:py-20">
      <div className="px-6 md:px-10 lg:px-16">
        <h2 className="text-center font-bold text-4xl md:text-6xl text-white leading-tight">
          Landmarks Worth The Drive
        </h2>

        <div className="mt-12 md:mt-16 space-y-10 md:space-y-14">
          {LANDMARKS.map((l, i) => {
            const imageLeft = i % 2 === 1;
            return (
              <article
                key={l.name}
                className="grid overflow-hidden bg-white md:min-h-[440px] md:grid-cols-3"
              >
                {/* Text — 2/3 */}
                <div
                  className={`md:col-span-2 p-8 md:flex md:flex-col md:justify-center md:p-12 ${
                    imageLeft ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h3 className="font-raleway text-xl md:text-2xl font-bold text-neutral-900">
                    {l.name}
                  </h3>
                  <p className="mt-1 text-md text-neutral-500">{l.tagline}</p>
                  <p className="mt-5 text-md text-neutral-600 leading-relaxed">
                    {l.body}
                  </p>
                  <p className="mt-4 text-md text-neutral-600 leading-relaxed">
                    <strong className="font-bold text-neutral-900">
                      Our tip:
                    </strong>{" "}
                    {l.tip}
                  </p>
                </div>

                {/* Image — 1/3 */}
                <div
                  className={`relative aspect-[4/3] md:aspect-auto md:h-full ${
                    imageLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={l.image}
                    alt={l.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
