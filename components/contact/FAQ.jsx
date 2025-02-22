'use client';

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What makes Icon Gym different?", answer: "We offer personalized fitness plans and expert trainers." },
    { question: "How secure is my data with Icon Gym?", answer: "We use top-tier encryption for data protection." },
    { question: "Can I customize my training experience?", answer: "Yes! Our trainers create custom workout routines." },
    { question: "What group classes does Icon Gym offer?", answer: "We offer yoga, HIIT, strength training, and more!" },
  ];

  return (
    <section className="py-12 bg-[#111826]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-white">FAQs</h2>
        <p className="text-gray-300 mt-2">Do you have any questions for us?</p>

        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-500 p-4 rounded-xl shadow-md">
              <button
                className="w-full text-left text-lg font-medium flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <p className="mt-2 text-gray-400">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
