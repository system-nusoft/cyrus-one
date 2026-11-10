"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface BlogPostFaqAccordionProps {
  title?: string;
  faqs: { question: string; answer: string }[];
}

/** Renders `**bold**` segments within an answer as <strong>. */
function renderAnswer(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold text-neutral-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/**
 * Accordion FAQ for blog posts: same column/heading as the other blog sections (no banner, no side heading),
 * with the accordion behaviour of the site-wide FAQSection (one open at a time, first open by default).
 */
export default function BlogPostFaqAccordion({
  title = "Frequently Asked Questions",
  faqs,
}: BlogPostFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="pb-8 md:pb-12 px-6 md:px-10 lg:px-16"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">{title}</h2>

        <div className="mt-8 border-t border-neutral-200">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={faq.question} className="border-b border-neutral-200 py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-raleway font-bold text-lg md:text-xl text-neutral-900">
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
                  <p className="text-lg text-neutral-600 leading-relaxed overflow-hidden pt-3">
                    {renderAnswer(faq.answer)}
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
