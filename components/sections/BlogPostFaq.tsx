interface BlogPostFaqProps {
  title?: string;
  faqs: { question: string; answer: string }[];
}

/** Static (always-expanded) FAQ list for blog posts: serif h2, then divider-separated question/answer pairs. */
export default function BlogPostFaq({
  title = "Frequently Asked Questions",
  faqs,
}: BlogPostFaqProps) {
  return (
    <section className="pb-8 md:pb-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900">{title}</h2>

        <div className="mt-8 border-t border-neutral-200">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-6 md:py-8 border-b border-neutral-200">
              <h3 className="font-raleway font-bold text-lg md:text-xl text-neutral-900">
                {faq.question}
              </h3>
              <p className="mt-3 text-lg text-neutral-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
