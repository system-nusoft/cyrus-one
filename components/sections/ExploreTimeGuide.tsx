interface TimeOption {
  label: string;
  body: string;
}

const OPTIONS: TimeOption[] = [
  {
    label: "1–2 Hours",
    body: "If you're between flights, stay close to the airport. Enjoy breakfast at Cyrus One, take a breather, and keep your schedule comfortable rather than trying to fit central Islamabad into a short window.",
  },
  {
    label: "Half A Day",
    body: "You have enough time to see a couple of Islamabad's highlights. Visit Faisal Mosque and Daman-e-Koh, or combine the Pakistan Monument and Lok Virsa Museum for an easy cultural outing.",
  },
  {
    label: "A Full Day",
    body: "A full day gives you room to experience more of the city without rushing. Start with the Margalla Hills or Faisal Mosque, spend some time exploring Islamabad's cultural side, and finish with dinner in the city.",
  },
  {
    label: "Two Or More Days",
    body: "Take your time and go beyond the usual Islamabad itinerary. Add Taxila for a dose of history, explore Saidpur Village for its heritage and traditional charm, and leave an afternoon free to discover the city at your own pace.",
  },
];

export default function ExploreTimeGuide() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="px-6 md:px-10 lg:px-16">
        <h2 className="text-center font-bold text-4xl md:text-6xl text-neutral-900 leading-tight">
          How Much Time Do You Have?
        </h2>

        <div className="mt-12 md:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OPTIONS.map((opt) => (
            <div
              key={opt.label}
              className="rounded-3xl bg-[#D9D9D9] p-7 md:p-8"
            >
              <h3 className="font-bold text-xl text-neutral-900 [font-variant:small-caps]">
                {opt.label}
              </h3>
              <p className="mt-3 text-md text-neutral-600 leading-relaxed">
                {opt.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
