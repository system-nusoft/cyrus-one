"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt?: string;
}

interface GalleryModalProps {
  images: GalleryImage[];
  startIndex?: number;
  /** Accessible name for the dialog, e.g. "Cyrus One gallery". */
  label: string;
  onClose: () => void;
}

export default function GalleryModal({
  images,
  startIndex = 0,
  label,
  onClose,
}: GalleryModalProps) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
      if (e.key === "ArrowRight")
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, images.length]);

  function prev() {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  const current = images[index];

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      {/* w-fit makes the wrapper shrink to the displayed image so every
          control hugs the actual photo, at any viewport size. */}
      <div className="relative w-fit max-w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt ?? `${label} — photo ${index + 1} of ${images.length}`}
          draggable={false}
          className="block max-h-[86vh] max-w-[92vw] select-none rounded-xl animate-[fadeIn_200ms_ease]"
        />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow backdrop-blur-sm transition-colors hover:bg-white"
          aria-label={`Close ${label}`}
        >
          <X className="h-5 w-5" />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-700 shadow backdrop-blur-sm transition-colors hover:bg-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-700 shadow backdrop-blur-sm transition-colors hover:bg-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5"
              role="tablist"
              aria-label="Image navigation"
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-5 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
