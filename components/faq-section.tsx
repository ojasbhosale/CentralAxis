// components/faq-section.tsx
"use client";

import React from "react";

const faqs = [
  {
    question: "Are these solutions applicable to me if I am operating a co-location?",
    answer:
      "Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.",
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Depending on your requirements, we offer flexible pricing models.",
  },
  {
    question: "Do you provide ongoing support and maintenance for your solutions?",
    answer:
      "Absolutely – we offer comprehensive support and maintenance as well as customization for your needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Set up a demo and we'll guide you through our offerings and start a trial!",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="bg-[#0c0c0c] py-16 px-6 lg:px-12">
      <div className="max-w-[1300px] mx-auto space-y-12 text-center">

        {/* Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-block bg-[#1a1a1a] text-gray-300 text-base opacity-70 px-4 py-1 rounded-full">
            FAQs
          </div>
          <h2 className="text-white text-3xl lg:text-4xl font-bold">
            Frequently asked questions
          </h2>
          <p className="text-gray-400 opacity-70 text-lg">
            Find answers to common questions about our solutions.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2 text-left">
              <h3 className="text-white text-lg font-semibold leading-tight">
                {faq.question}
              </h3>
              <p className="text-gray-400 text-sm opacity-80 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
