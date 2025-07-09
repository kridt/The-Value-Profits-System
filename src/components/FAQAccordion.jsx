// src/components/FAQ.jsx
import React, { useState } from "react";

const faqData = [
  {
    question: "Hvordan fungerer jeres garanti?",
    answer:
      "Hvis du følger systemet og ikke tjener penge inden for 90 dage, får du alle pengene tilbage.",
  },
  {
    question: "Hvornår lukker tilmeldingen?",
    answer:
      "Når de 10–15 pladser er taget – eller senest 1. juli. Derefter stiger prisen.",
  },
  {
    question: "Skal jeg have erfaring for at kunne være med?",
    answer: "Nej, det er bygget til begyndere. Du bliver guidet trin for trin.",
  },
  {
    question: "Hvor hurtigt kan jeg komme i gang?",
    answer:
      "Med det samme. Når du bliver godkendt, får du adgang til hele systemet + personlig onboarding.",
  },
  {
    question: "Hvorfor deler I ikke bare gratis VP bets ud?",
    answer:
      "Fordi vi fokuserer 100% på at dem som skal tage vores bets, tjener penge. Gratis bets ødelægger værdien.",
  },
  {
    question: "Er det her bare gambling?",
    answer:
      "Nej, det er matematiske strategier med dokumenteret positiv forventet værdi.",
  },
  {
    question: "Kan jeg betale i rater?",
    answer: "Ja! Du kan dele betalingen op, så det passer til din økonomi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12 w-full max-w-2xl mx-auto space-y-4 text-left">
      {faqData.map((item, i) => (
        <div
          key={i}
          className="bg-[#111] text-white p-4 rounded-xl transition-all duration-300 shadow-lg"
        >
          <button
            onClick={() => toggle(i)}
            className="flex justify-between items-center w-full text-left text-lg font-semibold"
          >
            <span>{item.question}</span>
            <span>{openIndex === i ? "−" : "+"}</span>
          </button>
          {openIndex === i && (
            <div className="mt-2 text-gray-400 animate-fadeIn">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
