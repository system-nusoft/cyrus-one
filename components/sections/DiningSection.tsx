import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function DiningSection() {
  return (
    <section
      className="pb-12 md:pb-0 md:pt-0 px-6 md:px-10 lg:px-16"
      aria-label="Dining at Cyrus One"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
          <Image
            src="/breakfast.png"
            alt="Cyrus One dining — a thoughtfully composed breakfast spread"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="font-bold text-3xl lg:text-5xl text-neutral-900 leading-tight">
            A Masterclass in Morning Refinement
          </h2>

          <p className="text-md md:text-lg text-neutral-900 leading-relaxed">
            Our breakfast service combines exceptional flavours with an
            atmosphere of quiet sophistication, providing the perfect
            environment to pause, reflect, and prepare for your schedule.
          </p>

          <Link
            href="#rooms"
            className="self-start flex items-center justify-between gap-4 pl-6 pt-1 pr-1 pb-1 rounded-full bg-neutral-900 text-white font-semibold text-md hover:bg-neutral-700 transition-colors"
            aria-label="Learn More"
          >
            <span>Learn More</span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 shrink-0">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
