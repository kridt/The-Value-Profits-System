import React, { useState } from "react";
import CookieConsent from "../components/CookieConsent";
import VideoGate from "../components/VideoGate";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQAccordion";
import ImageRow from "../components/ImageRow";

export default function Home() {
  const [forceConsent, setForceConsent] = useState(false);

  return (
    <div className="relative">
      <CookieConsent forceOpen={forceConsent} />

      <main className="mx-auto w-full max-w-[1100px] px-5 pt-16 pb-24">
        <header className="text-center space-y-5 fade-in">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight glow-text">
            Tjen <span className="text-gradient">+200.000 kr. skattefrit</span>
            <br />
            på 12 måneder ved at udnytte fejl i markedet
          </h1>

          <p className="text-lg text-[#9CB6C1]">
            Uden <span className="text-gradient">content</span> eller{" "}
            <span className="text-gradient">salg</span>. En seriøs metode til at
            udnytte <span className="text-gradient">fejl i sportsmarkedet</span>
            .
          </p>

          <p className="text-sm text-[#8aa3ad]">
            Hvordan mit team og jeg hjælper personer som dig med at tjene mellem{" "}
            <span className="text-gradient">10.000 og 100.000 kr.</span> om
            måneden.
          </p>
        </header>

        <section className="mt-8 fade-in">
          <VideoGate />
        </section>

        <section className="mt-12 fade-in">
          <Testimonials />
        </section>

        <section className="mt-2 fade-in">
          <ImageRow />
        </section>

        <section className="mt-6 fade-in">
          <FAQ />
        </section>

        <footer className="mt-10 text-center fade-in">
          <button
            onClick={() => setForceConsent(true)}
            className="underline underline-offset-4 text-[#9CB6C1] hover:text-white transition"
          >
            Ændr dine cookie-præferencer
          </button>
        </footer>
      </main>
    </div>
  );
}
