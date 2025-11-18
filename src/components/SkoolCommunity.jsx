import React from "react";

export default function SkoolCommunity() {
  const benefits = [
    {
      icon: "💬",
      title: "Aktiv community",
      description: "Få adgang til vores Skool gruppe med 1000+ medlemmer",
    },
    {
      icon: "🎓",
      title: "Gratis indhold",
      description: "Kom i gang med gratis ressourcer og læremateriale",
    },
    {
      icon: "🔥",
      title: "Daglige diskussioner",
      description: "Del analyser, stil spørgsmål og lær af erfarne bettere",
    },
    {
      icon: "📈",
      title: "Se resultater",
      description: "Følg med i medlemmernes succeser og profit",
    },
  ];

  return (
    <section className="container-xl pt-8 md:pt-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="card-accent p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-bold mb-4">
                100% GRATIS
              </div>
              <h2 className="h2 glow-accent mb-4">
                Bliv en del af vores community
              </h2>
              <p className="text-[var(--ink-2)] text-lg mb-6 leading-relaxed">
                Vil du lære mere om value betting før du investerer? Få adgang
                til vores gratis Skool community hvor du kan:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-2xl">{benefit.icon}</span>
                    <div>
                      <h4 className="font-bold text-[var(--ink)] mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-[var(--ink-2)]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.skool.com/the-value-profits-system/about"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-accent inline-flex items-center justify-center gap-2"
                >
                  <span>Tilmeld dig gratis community</span>
                  <span>→</span>
                </a>
                <a
                  href="https://calendly.com/vpsystem1/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-accent inline-flex items-center justify-center"
                >
                  Book 1-til-1 samtale
                </a>
              </div>

              <p className="text-sm text-[var(--muted)] mt-4">
                Ingen kreditkort påkrævet • Tilmeld dig på 30 sekunder
              </p>
            </div>

            {/* Right side - Visual element */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 to-transparent border border-[var(--accent)]/30 p-8 flex flex-col items-center justify-center text-center">
                <div className="text-6xl mb-4">🎯</div>
                <div className="text-4xl md:text-5xl font-black glow-accent mb-2">
                  1000+
                </div>
                <div className="text-[var(--ink-2)] text-lg mb-4">
                  Aktive medlemmer
                </div>
                <div className="w-full h-px bg-[var(--line)] my-4"></div>
                <div className="space-y-3 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--ink-2)] text-sm">
                      Daglige posts
                    </span>
                    <span className="text-[var(--accent)] font-bold">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--ink-2)] text-sm">
                      Avg. responstid
                    </span>
                    <span className="text-[var(--accent)] font-bold">
                      &lt; 2 timer
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--ink-2)] text-sm">
                      Medlemstilfredshed
                    </span>
                    <span className="text-[var(--accent)] font-bold">
                      4.8/5 ⭐
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
