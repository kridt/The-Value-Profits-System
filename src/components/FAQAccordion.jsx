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
      "Typisk samme dag. Når du får adgang, modtager du onboarding, værktøjer, dine første VP bets og adgang til community.",
  },
  {
    question: "Er det her bare gambling?",
    answer:
      "Nej. Det er systematisk udnyttelse af markedsfejl baseret på statistik, strategi og +EV.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="mt-10 w-full max-w-2xl mx-auto space-y-4 text-left">
      {faqData.map((item, i) => (
        <div key={i} className="surface p-4 hover:glow-soft transition">
          <button
            onClick={() => toggle(i)}
            className="flex justify-between items-center w-full text-left text-lg font-semibold"
          >
            <span>{item.question}</span>
            <span className="text-gradient">{openIndex === i ? "−" : "+"}</span>
          </button>
          {openIndex === i && (
            <div className="mt-2 text-[#9CB6C1]">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
