import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: "📊",
      title: "Lær value betting strategien",
      description: "Få adgang til vores omfattende kursus der lærer dig at identificere +EV (positive forventningsværdi) væddemål, hvor odds er højere end den faktiske sandsynlighed."
    },
    {
      number: "2",
      icon: "🎯",
      title: "Brug vores værktøjer & community",
      description: "Få adgang til vores Skool community med daglige bet-forslag, analyseværktøjer og støtte fra erfarne medlemmer der allerede tjener penge."
    },
    {
      number: "3",
      icon: "💰",
      title: "Byg din bankroll disciplineret",
      description: "Følg systemet med disciplineret bankroll management og se din saldo vokse over tid. Vi dokumenterer hver eneste bet for fuld gennemsigtighed."
    }
  ];

  return (
    <section className="container-xl pt-16 md:pt-20 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="h2 glow-accent">Sådan fungerer det</h2>
        <p className="mt-3 text-lg text-[var(--ink-2)]">
          En simpel, dokumenteret metode til at tjene penge på sportsbetting
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div key={step.number} className="card-accent p-6 text-center">
            <div className="text-5xl mb-4">{step.icon}</div>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent)] text-[var(--bg)] font-black text-lg mb-3">
              {step.number}
            </div>
            <h3 className="h3 text-xl mb-3">{step.title}</h3>
            <p className="text-[var(--ink-2)] text-[15px] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-[var(--ink-2)] mb-4">
          Klar til at komme i gang?
        </p>
        <a
          href="https://calendly.com/vpsystem1/30min"
          target="_blank"
          rel="noreferrer"
          className="btn-accent"
        >
          Book gratis demo samtale
        </a>
      </div>
    </section>
  );
}
