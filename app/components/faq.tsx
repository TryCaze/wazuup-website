"use client";

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isExpanded: boolean;
}

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-one",
      question: "How can I invite the bot?",
      answer: "Use the offical invite link on the landing page or on the navigation bar.",
      isExpanded: true
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-two",
      question: "How do I quote?",
      answer: "Right click the message you wish to quote and under the 'Apps' tab click 'Quote'",
      isExpanded: false
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-three",
      question: "Why does the bot run out of cat images :(",
      answer: "Because I am broke. Also how did the API call reach the monthly limit? Its over a 1000??",
      isExpanded: false
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-four",
      question: "Is this bot secure?",
      answer: "Yes it is.",
      isExpanded: false
    },
    {
      id: "hs-basic-with-title-and-arrow-stretched-heading-five",
      question: "Can I recommend suggestions or anything else?",
      answer: "Yes you can, I am always listening for new additions to the bot like new commands, games or general improvments. Suggestions are welcome in my Discord server.",
      isExpanded: false
    },
  ]);

  const toggleFAQ = (id: string) => {
    setFaqs(faqs.map(faq => {
      if (faq.id === id) {
        return { ...faq, isExpanded: !faq.isExpanded };
      } else {
        return faq;
      }
    }));
  };

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Your questions, answered</h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p>
      </div>

      <div className="max-w-2xl mx-auto bg-black">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className={`rounded-xl p-6 transition-all duration-300 ease-in-out ${
                faq.isExpanded 
                  ? 'bg-white/10 shadow-lg' 
                  : 'bg-neutral-800 hover:bg-neutral-700'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(faq.id)}
                className="flex items-center justify-between w-full text-left group"
              >
                <span className="font-semibold text-lg text-white group-hover:text-indigo-500 transition-colors duration-200">
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${faq.isExpanded ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${faq.isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 dark:text-neutral-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}