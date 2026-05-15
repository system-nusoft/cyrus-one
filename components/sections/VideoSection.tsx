"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

// Replace with the real YouTube video ID when available
const YOUTUBE_VIDEO_ID = "wyL1GRRlg3I";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="py-12 md:py-16 px-6 md:px-10 lg:px-16"
      aria-label="Hotel video"
    >
      <div className="relative rounded-3xl overflow-hidden aspect-video w-full">
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title="Cyrus One Hotel — From the moment you arrive, the pace begins to ease"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* Thumbnail */}
            <Image
              src="/video-thumbnail.png"
              alt="Cyrus One Hotel room — warm interiors near Islamabad airport"
              fill
              className="object-cover"
              sizes="100vw"
            />

            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

            {/* Text overlay */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 max-w-xs md:max-w-xl">
              <h2 className="font-bold text-xl md:text-4xl lg:text-6xl text-white leading-tight">
                From the moment you arrive, the pace begins to ease
              </h2>
              <p className="text-sm md:text-md text-white/80 mt-3 leading-relaxed">
                A seamless shift from travel to comfort<br />
                only minutes away from the airport
              </p>
            </div>

            {/* Play button */}
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play hotel video"
            >
              <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 text-white group-hover:bg-white/50 transition-all duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 md:w-7 md:h-7 fill-white ml-1" />
              </span>
            </button>
          </>
        )}
      </div>
    </section>
  );
}
