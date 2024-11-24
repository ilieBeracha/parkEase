import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I book a parking space?",
    answer:
      "Simply enter your desired location and time in the search bar, select your preferred spot, and complete the booking process with your payment details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and mobile payment solutions like Apple Pay and Google Pay for your convenience.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking up to 24 hours before the scheduled time for a full refund. Cancellations within 24 hours may be subject to a fee.",
  },
  {
    question: "Is my parking spot guaranteed?",
    answer:
      "Yes, once your booking is confirmed, your parking spot is guaranteed for the duration of your reservation.",
  },
  {
    question: "What happens if I stay longer than booked?",
    answer:
      "You can request to extend your parking duration through our app, but it requires approval from the owner. Additional time will be charged at the standard rate if approved.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our parking services. Can't
          find what you're looking for? Contact our support team.
        </p>

        <div className="space-y-4 ">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 mt-2 text-gray-600 animate-[fadeIn_0.2s_ease-in-out]">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
