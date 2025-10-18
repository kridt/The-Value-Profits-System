import React from "react";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQAccordion";
import BetList from "../components/BetList";
import VideoGate from "../components/VideoGate";
import HowItWorks from "../components/HowItWorks";
import SkoolCommunity from "../components/SkoolCommunity";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative">
      {/* Accent glows */}
      <div className="bg-glow top-24 -left-10"></div>
      <div className="bg-glow bottom-24 right-0"></div>

      {/* HERO */}
      <section className="container-xl pt-8 md:pt-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)] text-sm font-bold mb-6">
            <span>✓</span>
            <span>1000+ Medlemmer • Dokumenteret Vækst</span>
          </div>

          <h1 className="h2">
            Lær <span className="glow-accent">Value Betting</span> og tjen penge
            på sportsbetting
          </h1>
          <p className="mt-6 text-sm text-[var(--ink-2)] max-w-2xl mx-auto leading-relaxed">
            En dokumenteret, disciplineret strategi til at identificere +EV
            væddemål og bygge langsigtet profit. Få adgang til komplet kursus,
            værktøjer og community.
          </p>

          {/* VIDEO GATE */}
          <section id="video" className="container-xl pt-16 relative z-10">
            {/* <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="h2 glow-accent">Se systemet i aktion</h2>
              <p className="mt-3 text-[var(--ink-2)]">
                20 minutters video der viser dig præcis hvordan metoden fungerer
              </p>
            </div> */}
            <VideoGate
              videoUrl="https://player.vimeo.com/video/1098616437?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              title="Lås videoen op"
              subtitle="Indtast din email for at se den komplette demo"
            />
          </section>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 scale-75 ">
            <a
              href="https://calendly.com/vpsystem1/30min"
              target="_blank"
              rel="noreferrer"
              className="btn-accent text-lg px-6 py-3"
            >
              Book en afklaringssamtale
            </a>
          </div>
          {/* Social proof badges */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black glow-accent">
                1000+
              </div>
              <div className="text-sm text-[var(--muted)] mt-1">
                Aktive medlemmer
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black glow-accent">
                +EV
              </div>
              <div className="text-sm text-[var(--muted)] mt-1">Fokus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black glow-accent">
                7+
              </div>
              <div className="text-sm text-[var(--muted)] mt-1">
                År erfaring
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--ink-2)]">
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)]">✓</span>
              <span>Dokumenterede resultater</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)]">✓</span>
              <span>Penge-tilbage garanti</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)]">✓</span>
              <span>Gratis community adgang</span>
            </div>
          </div>

          <div className="mt-12 divider" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* SKOOL COMMUNITY */}
      <SkoolCommunity />

      {/* TESTIMONIALS */}
      <section id="testimonials" className="container-xl pt-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="h2 glow-accent">Hvad siger vores medlemmer?</h2>
          <p className="mt-3 text-[var(--ink-2)]">
            Se anmeldelser fra rigtige medlemmer der bruger systemet
          </p>
        </div>
        <div className="card-accent p-3 md:p-4">
          <Testimonials />
        </div>
      </section>

      {/* PERFORMANCE / BETLIST */}
      <section className="container-xl pt-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="h2 glow-accent">Performance & gennemsigtighed</h2>
          <p className="mt-3 text-[var(--ink-2)]">
            Se historik, winrate, gennemsnitsodds og simuleret saldo.
          </p>
        </div>
        <BetList />
      </section>

      {/* FAQ + CTA */}
      <section className="container-xl pt-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="h2 glow-accent">Ofte stillede spørgsmål</h2>
          <p className="mt-3 text-[var(--ink-2)]">
            Find svar på de mest almindelige spørgsmål om systemet
          </p>
        </div>
        <FAQ />

        {/* Final CTA */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="card-accent p-8 md:p-10 text-center">
            <h3 className="h2 mb-4">Klar til at komme i gang?</h3>
            <p className="text-lg text-[var(--ink-2)] mb-6 max-w-xl mx-auto">
              Book en gratis 30 minutters demo, eller tilmeld dig vores gratis
              Skool community for at lære mere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/vpsystem1/30min"
                target="_blank"
                rel="noreferrer"
                className="btn-accent text-lg px-8 py-4"
              >
                Book gratis demo
              </a>
              <a
                href="https://www.skool.com/the-value-profits-system/about"
                target="_blank"
                rel="noreferrer"
                className="btn-outline-accent text-lg px-8 py-4"
              >
                Tilmeld gratis community
              </a>
            </div>
            <p className="text-sm text-[var(--muted)] mt-6">
              Ingen kreditkort påkrævet • 100% risikofrit
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-sm">
          <Link to="/betingelser" className="link-accent">
            Handelsbetingelser
          </Link>
          <Link to="/privatliv" className="link-accent">
            Privatlivspolitik
          </Link>
        </div>
      </section>

      <footer className="container-xl py-14 text-center text-[var(--muted)] relative z-10">
        © {new Date().getFullYear()} Value Profits System
      </footer>
    </main>
  );
}
