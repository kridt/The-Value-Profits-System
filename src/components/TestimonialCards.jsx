import React from "react";

const testimonialsData = [
  {
    name: "Sofie",
    quote: "Asger, du sagde det ville tage lidt tid – men efter 3 uger er jeg allerede i profit! +3.800 kr og min første dag fuldt kontrol. Tak for den ekstra hjælp du har givet!",
    stars: 5,
    gradient: "from-rose-500/20 to-purple-500/20"
  },
  {
    name: "Casper",
    quote: "Jeg lavede mit første VP bet for 14 dage siden, og nu sidder jeg med 2.100 kr ekstra på kontoen. Det er faktisk ret vildt, hvor simpelt det føles.",
    stars: 5,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Stefan",
    quote: "Bro jeg har ikke engang haft tid til at følge med hver dag, hvilket også beted at jeg gik lidt i minus det første stykke tid. Men jeg er blevet lidt mere konsekvent bare fulgt systemet, og det virker sygt stabilt. Er oppe 20000kr alt i alt nu. Det er første gang jeg føler jeg faktisk har knækket koden til livet 😊",
    stars: 5,
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    name: "Michael",
    quote: "Føler jeg har fundet en cheat code😂 Value Profits Business er 15000 kr i plus på en måned ca., og det eneste jeg har gjort er at følge systemet og holde mig til planen. Jeg har seriøst aldrig tjent penge på betting før – nu føles det som en forretning. Tak legend 🙏",
    stars: 5,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    name: "Elias",
    quote: "Bro jeg er nødt til lige at sige tak – satte 15k ind i sidste uge og er allerede oppe med over 4.500 kr 🔥. Det er fuldstændig vanvittigt hvor smooth det kører når man bare følger systemet og ikke panikker. Tænkte bare jeg ville give lidt credit, for det her er det første jeg har prøvet hvor det faktisk giver mening!",
    stars: 5,
    gradient: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    name: "Amalie",
    quote: "Hey, kan du tro. Jeg var egentlig ret skeptisk i starten – jeg har aldrig spillet på sport før og troede det kun var for drenge 😂. Men jeg satte 5000 kr ind da jeg startede, nu er jeg oppe over 6.500 kr i plus bare ved at følge jeres system. Jeg forstår stadig ikke alt i dybden, men det er SÅ nemt at følge – og det føles faktisk trygt fordi der styr på det. Jeg har aldrig tjent penge på den her måde før – det føles næsten som snydt haha. Tak for at vise at det🔥🔥\n\nKnus Amalie",
    stars: 5,
    gradient: "from-pink-500/20 to-rose-500/20"
  }
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
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              {/* Accent top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl"></div>

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${testimonial.stars} stars`}>
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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
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
