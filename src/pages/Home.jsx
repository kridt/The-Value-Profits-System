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
        <header className="text-center space-y-6 fade-in corner-lights">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Tjen{" "}
            <span className="text-gradient-neo">+200.000 kr. skattefrit</span>
            <br /> på 12 måneder ved at udnytte fejl i markedet
          </h1>

          <p className="text-lg text-[#cfeaf1]">
            Uden <span className="text-gradient-neo">content</span> eller{" "}
            <span className="text-gradient-neo">salg</span>. En seriøs metode
            til at udnytte{" "}
            <span className="text-gradient-neo">fejl i sportsmarkedet</span>.
          </p>

          <p className="text-sm text-[#b5d4db]">
            Hvordan mit team og jeg hjælper personer som dig med at tjene mellem{" "}
            <span className="text-gradient-neo">10.000 og 100.000 kr.</span> om
            måneden.
          </p>

          <div className="mt-6 divider-neon" />
        </header>

        <section className="mt-10 fade-in">
          <VideoGate />
        </section>

        <section className="mt-14 fade-in">
          <Testimonials />
        </section>

        <section className="mt-4 fade-in">
          <ImageRow />
        </section>

        <section className="mt-8 fade-in">
          <FAQ />
        </section>

        <footer className="mt-10 text-center fade-in">
          <button onClick={() => setForceConsent(true)} className="link-neon">
            Ændr dine cookie-præferencer
          </button>
        </footer>
      </main>
    </div>
  );
}
