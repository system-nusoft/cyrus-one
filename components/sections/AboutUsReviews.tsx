"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Sedda Giuseppe",
    text: "Cyrus One Hotel is in a convenient location, just 10 minutes by car from the airport. The rooms are clean and comfortable, and the staff is very kind and helpful. Highly recommended for travelers who need to spend a night before a flight the following day.",
  },
  {
    name: "Fatima Arshad",
    text: "Stayed here for the night on a whim and we loved our stay. The staff is super courteous and catered to us well even though we checked in after midnight. The breakfast was super yummy too. Will definitely be stopping by whenever we come to Islamabad from now on!",
  },
  {
    name: "Umar Nawab",
    text: "Excellent hotel, great service right from the get go. Room was spacious, lovely beds, shower facilities, breakfast was sufficient to kick start the day. I would definitely recommend for anyone visiting Islamabad.",
  },
  {
    name: "Affan Khalid",
    text: "Rooms were immaculately clean. Cool and calm place with very hospitable staff. Breakfast was super delight.",
  },
];

export default function AboutUsReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section className="py-12 md:py-20" aria-label="Guest reviews">
      <div className="text-center mb-6 md:mb-10 px-6 md:px-10 lg:px-16">
        <h2 className="font-bold text-3xl md:text-5xl text-neutral-900">
          Don&apos;t Just Take Our Word for It.
        </h2>
        <p className="text-md md:text-lg text-neutral-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          Explore what our guests have to say about their rooms, our location,
          service and overall experience at Cyrus One.
        </p>
      </div>

      {/* Leading padding lives on this non-scrolling wrapper — see feedback note
          about scroll-snap containers dropping their own padding-left. */}
      <div className="pl-6 md:pl-10 lg:pl-16">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pr-6 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {reviews.map((review) => (
            <article
              key={review.name}
              data-card
              className="shrink-0 w-[85%] sm:w-[60%] md:w-[42%] lg:w-[27%] snap-start"
            >
              <div className="h-full border border-neutral-200 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center gap-6">
                <div className="flex gap-1" aria-label="Rated 5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-md text-neutral-700 leading-relaxed">
                  {review.text}
                </p>

                <p className="mt-auto pt-4 font-bold text-neutral-900">
                  &mdash; {review.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Arrows — below the cards */}
      <div className="flex justify-center gap-4 mt-8 md:mt-10">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous reviews"
          className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next reviews"
          className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
