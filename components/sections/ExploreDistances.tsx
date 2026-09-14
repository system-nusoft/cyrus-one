"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DESTINATIONS, type Destination } from "@/content/explore-destinations";

const DASH =
  "repeating-linear-gradient(to bottom, #c9ad78 0 6px, transparent 6px 15px)";

function DestinationCard({
  d,
  align,
}: {
  d: Destination;
  align: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "md:text-right" : "md:text-left"}>
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-md">
        <Image
          src={d.image}
          alt={d.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </div>
      <h3 className="mt-5 text-2xl md:text-[1.75rem] font-bold text-[#1f2d4d] leading-tight">
        {d.name}
      </h3>
      <p className="mt-2 text-lg font-semibold text-[#b08b4d] font-roboto">
        {d.drive}
      </p>
      {d.mapUrl ? (
        <a
          href={d.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-3 inline-flex items-center gap-2 text-md font-semibold text-neutral-900 underline-offset-4 hover:underline ${
            align === "right" ? "md:flex-row-reverse" : ""
          }`}
        >
          View on Google Maps
          <ArrowRight className="w-4 h-4" />
        </a>
      ) : (
        <span
          className={`mt-3 inline-flex items-center gap-2 text-md font-semibold text-neutral-400 ${
            align === "right" ? "md:flex-row-reverse" : ""
          }`}
        >
          View on Google Maps
          <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </div>
  );
}

export default function ExploreDistances() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(() =>
    DESTINATIONS.map(() => false),
  );

  // Grow the centre line as the viewport middle travels through the section.
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setProgress(1);
      setVisible(DESTINATIONS.map(() => true));
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const pen = window.innerHeight * 0.5;
      const p = (pen - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Reveal each row as it enters view.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(DESTINATIONS.map(() => true));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = Number((entry.target as HTMLElement).dataset.index);
          setVisible((prev) => {
            if (prev[i]) return prev;
            const next = [...prev];
            next[i] = true;
            return next;
          });
        });
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.2 },
    );
    rowRefs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden">
      <div className="px-6 md:px-10 lg:px-16 max-w-6xl mx-auto text-center">
        <h2 className="font-bold text-3xl md:text-5xl text-neutral-900 leading-tight">
          Quick Distances From Cyrus One
        </h2>
        <p className="mt-4 text-md md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Approximate distances and drive times. Traffic can significantly
          affect journey times, so we recommend checking Google Maps before
          setting out.
        </p>
      </div>

      <div
        ref={timelineRef}
        className="relative mt-14 md:mt-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16"
      >
        {/* Dotted centre line — desktop only. Faint track + fill that grows on scroll. */}
        <div
          aria-hidden
          className="hidden md:block absolute top-0 bottom-0 w-[2px] left-1/2 -translate-x-1/2 opacity-40"
          style={{ backgroundImage: DASH }}
        />
        <div
          aria-hidden
          className="hidden md:block absolute top-0 w-[2px] left-1/2 -translate-x-1/2"
          style={{ backgroundImage: DASH, height: `${progress * 100}%` }}
        />

        {DESTINATIONS.map((d, i) => {
          const align: "left" | "right" = i % 2 === 0 ? "left" : "right";
          return (
            <div
              key={d.name}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              data-index={i}
              className="relative py-8 md:py-0 first:pt-0 last:pb-0"
            >
              {/* Node — desktop only, centred on the dotted line */}
              <span className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-5 h-5 rounded-full border border-[#cbb98f] bg-white z-10">
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    visible[i]
                      ? "bg-[#b28a4c] scale-100"
                      : "bg-[#dccdad] scale-75"
                  }`}
                />
              </span>

              {/* Card — one side on desktop, full width on mobile */}
              <div
                className={`md:w-1/2 transition-all duration-700 ease-out ${
                  align === "right" ? "md:ml-auto md:pl-12" : "md:pr-12"
                } ${
                  visible[i]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <DestinationCard d={d} align={align} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
