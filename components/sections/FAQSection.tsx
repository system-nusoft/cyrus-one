"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const faqs = [
  {
    question: "How far is Cyrus One from Islamabad International Airport?",
    answer:
      "Cyrus One is conveniently located just 5 km from Islamabad International Airport, making it an ideal choice for business travellers, transit guests, and visitors looking for a comfortable stay near the airport.",
  },
  {
    question: "Do you provide airport pick-up?",
    answer:
      "Yes, free airport pick-up services are available for our guests. We recommend contacting our team in advance to arrange your transfer and ensure a smooth arrival experience.",
  },
  {
    question: "Is breakfast included?",
    answer:
      "Yes, complimentary breakfast is included with every stay at Cyrus One. Enjoy a freshly prepared breakfast served in a warm and welcoming dining setting, giving you the perfect start to your day.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, complimentary on-site parking is available for guests staying at Cyrus One, offering added convenience throughout your visit.",
  },
  {
    question: "What room types are available?",
    answer:
      "Cyrus One offers a selection of thoughtfully designed rooms and suites to suit every type of traveller. Choose from our Standard Double, Deluxe Double, Deluxe Twin, Executive Suite, or our spacious 2-Bed Presidential Suite. Each room features modern amenities, complimentary Wi-Fi, air conditioning, and comfortable interiors, making it ideal for business trips, family stays, and short stopovers near Islamabad International Airport.",
  },
  {
    question: "Is the hotel suitable for business travellers?",
    answer:
      "Absolutely. With its convenient location near Islamabad International Airport, high-speed Wi-Fi, comfortable accommodations, and easy access to the M1/M2 Interchange, Cyrus One is well suited for business travellers visiting Islamabad.",
  },
  {
    question: "Can I check in late at night?",
    answer:
      "Yes. Our 24/7 Front Desk ensures you can check in at any time of the day or night, making late arrivals and early departures convenient for our guests.",
  },
  {
    question: "Is the hotel close to the M1/M2 Interchange?",
    answer:
      "Yes, Cyrus One is ideally located near the M1/M2 Interchange, providing quick and convenient access to Islamabad, Rawalpindi, and major motorway routes across Pakistan.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section aria-label="Frequently asked questions">
      <div className="bg-neutral-900 py-10 md:py-16 text-center">
        <h2 className="font-bold text-4xl md:text-6xl text-white tracking-wide">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16">
        <h3 className="font-bold text-4xl md:text-5xl text-neutral-900 leading-tight">
          Plan Your Stay With Confidence
        </h3>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={index} className="border-b border-neutral-200 py-5">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-lg md:text-xl text-neutral-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="text-md text-neutral-600 leading-relaxed overflow-hidden pt-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
