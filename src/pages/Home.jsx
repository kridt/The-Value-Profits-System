import React from "react";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQAccordion";
import BetList from "../components/BetList";
import VideoGate from "../components/VideoGate";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative">
      {/* Accent glow baggrunde */}
      <div className="bg-glow top-20 left-10"></div>
      <div className="bg-glow bottom-10 right-20"></div>

      {/* HERO */}
      <section className="container-xl pt-16 md:pt-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="h1">
            Byg resultater hurtigere med et{" "}
            <span className="glow-accent">enkelt, dokumenteret</span> system
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-2)]">
            Disciplineret metode der udnytter markedsfejl (+EV) — uden content,
            uden salg.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="https://calendly.com/vpsystem1/30min"
              target="_blank"
              rel="noreferrer"
              className="btn-accent"
            >
              Ansøg & book samtale
            </a>
            <a href="#video" className="btn btn-outline link-accent">
              Se video
            </a>
          </div>
          <div className="mt-8 badge-row text-accent">
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
      <section id="video" className="container-xl pt-12 relative z-10">
        <VideoGate
          videoUrl="https://player.vimeo.com/video/1098616437?title=0&byline=0&portrait=0&badge=0&autopause=0"
          title="Se hvordan systemet fungerer (5 min.)"
          subtitle="Udfyld for at låse videoen op."
        />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="container-xl pt-12 relative z-10">
        <Testimonials />
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

      {/* FAQ */}
      <section className="container-xl pt-16 relative z-10">
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
            className="btn-accent mt-4"
          >
            Ansøg nu
          </a>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm">
            <Link to="/betingelser" className="link-accent">
              Handelsbetingelser
            </Link>
            <Link to="/privatliv" className="link-accent">
              Privatlivspolitik
            </Link>
          </div>
        </div>
      </section>

      <footer className="container-xl py-14 text-center text-[var(--muted)] relative z-10">
        © {new Date().getFullYear()} Value Profits System
      </footer>
    </main>
  );
}
