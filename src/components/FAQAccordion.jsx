// src/components/FAQ.jsx
import React, { useState } from "react";

const faqData = [
  {
    question: "Hvordan fungerer jeres garanti?",
    answer:
      "Vi tilbyder en resultatgaranti. Hvis du følger hele systemet og ikke tjener penge, får du alle pengene tilbage – så har vi arbejdet gratis.",
  },
  {
    question: "Skal jeg have erfaring for at kunne være med?",
    answer:
      "Overhovedet ikke. Systemet er bygget til både begyndere og øvede. Du bliver guidet trin for trin, med personlig hjælp hele vejen.",
  },
  {
    question: "Hvor hurtigt kan jeg komme i gang?",
    answer:
      "Typisk samme dag. Når du får adgang, modtager du onboarding, værktøjer, dine første VP bets og adgang til community. Du er i gang hurtigere end du tror.",
  },
  {
    question: "Hvorfor deler I ikke bare gratis VP bets ud?",
    answer:
      "Fordi systemet kun virker, hvis du forstår og bruger det korrekt. Gratis bets tiltrækker de forkerte – og fjerner værdien for dem, der gør det seriøst.",
  },
  {
    question: "Er det her bare gambling?",
    answer:
      "Nej. Det er ikke gambling – det er systematisk udnyttelse af markedsfejl baseret på statistik, strategi og +EV. Vi spiller ikke for sjov.",
  },
  {
    question: "Kan jeg betale i rater?",
    answer: "Ja! Du kan dele betalingen op, så det passer til din økonomi.",
  },
  {
    question: "Hvad hvis jeg ikke har så mange penge at starte med?",
    answer:
      "Det er helt fint. Du kan starte med en lille bankroll og bygge den op over tid. Det vigtigste er, at du følger systemet disciplineret.",
  },
  {
    question: "Hvorfor er det skattefrit?",
    answer:
      "Fordi gevinster hos danske, licenserede bookmakere er skattefrie. Du spiller med egne penge og hæver direkte til din konto – uden skat eller moms.",
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
