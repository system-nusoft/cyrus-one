const PHRASE = "More Than a Stay. A Space to Feel at Home.";

function MarqueeGroup() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-8 md:px-12 font-playfair text-lg md:text-2xl text-white">
            {PHRASE}
          </span>
          <span className="text-sm text-[#b18e57] md:text-base" aria-hidden="true">
            &#10022;
          </span>
        </span>
      ))}
    </div>
  );
}

export default function AboutUsMarquee() {
  return (
    <section
      className="overflow-hidden bg-[#1b2a41] py-3 md:py-4"
      aria-label={PHRASE}
    >
      <div className="flex w-max marquee-track">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </section>
  );
}
