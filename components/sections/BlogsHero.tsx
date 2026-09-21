import Image from "next/image";
import Header from "@/components/layout/Header";

export default function BlogsHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col"
      aria-label="Cyrus One blog — explore beyond your stay"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/blogs-hero-bg.png"
          alt="Cyrus One hotel lobby with a rust-colored sofa and reception desk displaying the Cyrus One website, near Islamabad Airport."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/30 to-transparent" />
      </div>

      {/* Header overlaid */}
      <Header />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-36 pb-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-7xl font-normal text-white leading-tight">
            Explore Beyond Your Stay
          </h1>
          <p className="text-md md:text-lg text-white/80 mt-6 max-w-lg leading-tight">
            Your guide to discovering Islamabad, with useful travel tips,
            local recommendations and ideas. Plan better, explore more and
            make every part of your stay count.
          </p>
        </div>
      </div>
    </section>
  );
}
