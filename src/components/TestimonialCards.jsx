import React from "react";

const testimonialsData = [
  {
    name: "Anne",
    img: 1,
    quote:
      "Vil hellere end gerne hjælpe, med at dele ud af oplevelsen. Indtil videre har jeg,  4000 ca på 365, 5000 på Unibet, 1500 på MrGreen Og ja, de 6000 fra Expekt. Tak for goodie bag, den ser jeg frem til 🥳🥰",
    stars: 5,
    gradient: "from-rose-500/20 to-purple-500/20",
  },
  {
    name: "Patrick",
    img: 2,
    quote:
      "På blot 2 uger!! Jeg startede det her forløb for ca. 1 måned siden hvor jeg købte presale og kunne ikke vente med at komme i gang den 1. Juli! Nu efter 14 dage har jeg laver 175% profit ca. af min portfølje! Og jeg bliver ved med at gøre min konto større og større! Sååå kæmpe anbefaling herfra og et fantastisk team hele vejen igennem! 😅💪",
    stars: 5,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Mathias",
    img: 3,
    quote:
      "5500 kr i profit fra 8000 kr på 2 dage er for crazy 😳 11 ud af 13 vundet sidste 2 dage.",
    stars: 5,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "Frederik",
    img: 4,
    quote:
      "16 dage, 90 spil, 50k bankroll, 46% ROI og 23.000 lapper lige ned i min lomme hehe. 😏 Godt nok over dobbelt min forventet værdi, så det kan gå nedad, men det køre skide godt. Jeg brokker ikke 😆 ",
    stars: 5,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Filip",
    img: 5,
    quote:
      "Har brugt lidt på noget restaurant med kæresten og forsikring osv. Men har ca. tjent lidt over 5–6 tusind på de her 14 dage. Udover de 28 tusind i alt ish. Altså med jeres system har jeg tjent lidt over 40 tusind i alt 🙆‍♀️",
    stars: 5,
    gradient: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    name: "Amalie",
    img: 6,
    quote:
      "Hey, kan du tro. Jeg var egentlig ret skeptisk i starten – jeg har aldrig spillet på sport før og troede det kun var for drenge 😂. Men jeg satte 5000 kr ind da jeg startede, nu er jeg oppe over 6.500 kr i plus bare ved at følge jeres system. Jeg forstår stadig ikke alt i dybden, men det er SÅ nemt at følge – og det føles faktisk trygt fordi der styr på det. Jeg har aldrig tjent penge på den her måde før – det føles næsten som snydt haha. Tak for at vise at det🔥🔥\n\nKnus Amalie",
    stars: 5,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

export default function TestimonialCards() {
  return (
    <section className="py-16 relative" aria-labelledby="testimonials-heading">
      <div className="container-xl">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="h2 glow-accent mb-4">
            DET VIRKER - NO BULLSHIT
          </h2>
          <p className="text-[var(--ink-2)] text-lg">
            Kræver du følger systemet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <article
              key={index}
              className="relative bg-[var(--panel)] p-6 rounded-xl border border-[var(--line)] hover:border-[rgba(71,250,190,0.3)] transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col group"
              style={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {/* Accent top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>

              {/* Stars */}
              <div
                className="flex gap-1 mb-4"
                aria-label={`${testimonial.stars} stars`}
              >
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[var(--accent)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="text-[var(--ink-2)] text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <footer className="mt-6 pt-4 border-t border-[var(--line)]">
                <cite className="not-italic">
                  <div className="flex items-center gap-3">
                    <img
                      src={`/images/members/${testimonial.img}.png`}
                      alt={`${testimonial.name}`}
                      className="w-10 h-10 rounded-full object-cover border border-[var(--accent)]/30"
                    />
                    <div>
                      <div className="font-semibold text-[var(--ink)]">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-[var(--muted)]">
                        Verificeret medlem
                      </div>
                    </div>
                  </div>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
