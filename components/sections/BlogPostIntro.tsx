const paragraphs = [
  "A business trip to Islamabad can mean early meetings, airport transfers, long working days and very little time to figure out the city once you arrive.",
  "That makes choosing where to stay more important than it might seem. The right accommodation can save you time between meetings, give you somewhere comfortable to work and unwind, and make those early departures or late arrivals much easier.",
  "So, where should you stay when you’re travelling to Islamabad for business? Here are the things worth considering before you book.",
];

export default function BlogPostIntro() {
  return (
    <section className="pb-8 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-lg text-neutral-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
