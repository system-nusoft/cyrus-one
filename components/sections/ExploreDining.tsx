import Image from "next/image";

interface Restaurant {
  name: string;
  drive: string;
  body: string;
  /** Image not supplied yet — placeholder shown until set. */
  image?: string;
  alt?: string;
}

const RESTAURANTS: Restaurant[] = [
  {
    name: "The Monal",
    drive: "40–50 MIN",
    body: "Head to the rooftop at Mall of IMARAT for The Monal's signature food, relaxed atmosphere and sweeping views of the city.",
    image: "/explore-dining-monal.jpg",
    alt: "The Monal restaurant in Islamabad with rooftop seating and a sweeping view of the city.",
  },
  {
    name: "The Dome – Daman-e-Koh",
    drive: "45–55 MIN",
    body: "Set in the Margalla Hills, The Dome combines Pakistani, continental and Chinese cuisine with sweeping views over Islamabad.",
    image: "/explore-dining-dome.jpg",
    alt: "The Dome restaurant at Daman-e-Koh overlooking the Margalla Hills and Islamabad.",
  },
  {
    name: "Tuscany Courtyard",
    drive: "40–45 MIN",
    body: "A popular F-6/F-7 dining spot with an Italian-inspired menu and a quieter courtyard setting.",
    image: "/explore-dining-tuscany.jpg",
    alt: "Tuscany Courtyard restaurant in Islamabad with its Italian-inspired courtyard seating.",
  },
  {
    name: "1969 Restaurant",
    drive: "35–45 MIN",
    body: "Surrounded by the greenery of Shakarparian, a great stop when exploring the Pakistan Monument and nearby cultural attractions.",
    image: "/explore-dining-1969.jpg",
    alt: "1969 Restaurant in Islamabad surrounded by the greenery of Shakarparian.",
  },
];

export default function ExploreDining() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="px-6 md:px-10 lg:px-16">
        <h2 className="text-center font-bold text-4xl md:text-6xl text-neutral-900 leading-tight">
          Where To Eat In Islamabad
        </h2>
        <p className="mt-4 text-center text-md md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          From a relaxed meal after a day of sightseeing to dinner with
          colleagues or family, Islamabad has plenty of options worth the drive.
        </p>

        <div className="mt-12 md:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESTAURANTS.map((r) => (
            <div key={r.name} className="bg-[#D9D9D9]">
              <div className="relative aspect-square bg-[#E9E9E9]">
                {r.image && (
                  <Image
                    src={r.image}
                    alt={r.alt ?? r.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                )}
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-bold text-lg text-neutral-900">{r.name}</h3>
                <p className="mt-1 text-sm text-neutral-500 tracking-wide font-roboto">
                  {r.drive}
                </p>
                <p className="mt-4 text-md text-neutral-600 leading-relaxed">
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
