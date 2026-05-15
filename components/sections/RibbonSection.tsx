import Image from "next/image";

export default function RibbonSection() {
  return (
    <div className="w-full">
      <Image
        src="/ribbon.png"
        alt=""
        width={1920}
        height={120}
        className="w-full h-auto"
        priority
        aria-hidden="true"
      />
    </div>
  );
}
