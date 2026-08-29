"use client";

import Button from "@/components/ui/Button";

export default function BookingBandSection() {
  return (
    <section
      className="px-6 md:px-10 lg:px-16 py-12 md:py-20"
      aria-label="Book your stay"
    >
      <div className="bg-sky-400 rounded-[2.5rem] px-6 md:px-12 py-14 md:py-20 flex flex-col items-center text-center gap-5 md:gap-6">
        <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl">
          Ready for Your Next Stay?
        </h2>
        <p className="text-white/90 text-md md:text-lg max-w-xl leading-relaxed">
          From business trips to family getaways and overnight airport stays,
          experience thoughtful hospitality just minutes from Islamabad
          International Airport.
        </p>
        <Button
          variant="white"
          className="mt-2 px-8 py-3.5 rounded-full text-md"
          onClick={() =>
            document.getElementById("availability")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Book your stay
        </Button>
      </div>
    </section>
  );
}
