import React from "react";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQAccordion";
import BetList from "../components/BetList";
import VideoGate from "../components/VideoGate";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="container-xl pt-16 md:pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="h1">
            Byg resultater hurtigere med et{" "}
            <span className="underline decoration-white decoration-4 underline-offset-8">
              enkelt, dokumenteret
            </span>{" "}
            system
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-2)]">
            Disciplineret metode der udnytter markedsfejl (+EV) — uden content,
            uden salg. Gennemsigtighed og dokumenteret performance.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="https://calendly.com/vpsystem1/30min"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Ansøg & book samtale
            </a>
            <a href="#video" className="btn btn-outline">
              Se video
            </a>
          </div>
          <div className="mt-8 badge-row">
            <span>Dokumenterede resultater</span>
            <span>•</span>
            <span>Penge-tilbage garanti</span>
            <span>•</span>
            <span>Fokus på +EV</span>
          </div>
          <div className="mt-10 divider" />
        </div>
      </section>

      {/* VIDEO GATE */}
      <section id="video" className="container-xl pt-12">
        <VideoGate
          videoUrl="https://player.vimeo.com/video/1098616437?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
          zapierUrl="https://hooks.zapier.com/hooks/catch/23383335/u3qb9o1/"
          title="Se hvordan systemet fungerer"
          subtitle="Udfyld dine informationer."
        />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="container-xl pt-12">
        <Testimonials />
      </section>

      {/* PERFORMANCE / BETLIST */}
      <section className="container-xl pt-16">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="h2">Performance & gennemsigtighed</h2>
          <p className="mt-3 text-[var(--ink-2)]">
            Se historik, winrate, gennemsnitsodds og simuleret saldo. Justér
            bankroll og se effekten med det samme.
          </p>
        </div>
        <BetList />
      </section>

      {/* FAQ + CTA */}
      <section className="container-xl pt-16">
        <FAQ />
        <div className="mt-10 text-center">
          <p className="text-[var(--ink-2)]">
            Stadig spørgsmål? Det tager 30 sekunder at ansøge — så tager vi en
            snak.
          </p>
          <a
            href="https://calendly.com/vpsystem1/30min"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-4"
          >
            Ansøg nu
          </a>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm">
            <Link to="/betingelser" className="link">
              Handelsbetingelser
            </Link>
            <Link to="/privatliv" className="link">
              Privatlivspolitik
            </Link>
          </div>
        </div>
      </section>

      <footer className="container-xl py-14 text-center text-[var(--muted)]">
        © {new Date().getFullYear()} Value Profits System
      </footer>
    </main>
  );
}
