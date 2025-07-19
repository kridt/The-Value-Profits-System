// src/pages/Home.jsx
import React, { useState } from "react";
import CookieConsent from "../components/CookieConsent";
import VideoGate from "../components/VideoGate";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQAccordion";
import ParticlesBackground from "../ParticlesBackground";
import ImageRow from "../components/ImageRow";

export default function Home() {
  const [forceConsent, setForceConsent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white relative overflow-hidden">
      <CookieConsent forceOpen={forceConsent} />
      <ParticlesBackground />

      <div className="z-10 w-full max-w-[95%] lg:max-w-[95%] mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
          Tjen <span className="text-gradient">+200.000 kr. skattefrit</span>
          <br />
          12 måneder ved at udnytte fejl i markedet
        </h1>

        <p className="text-lg text-gray-300">
          Uden <span className="text-gradient">content </span>
          eller <span className="text-gradient">salg</span>
          <br />
          Her er en seriøs metode, der lærer dig at udnytte{" "}
          <span className="text-gradient">fejl i sportsmarkedet </span>
          med fuld kontrol og dokumenteret profit.
        </p>

        <p className="text-md text-gray-500">
          Hvordan mit team og jeg hjælper personer som dig med at tjene mellem
          <span className="text-gradient"> 10.000 og 100.000 kr.</span> om
          måneden på <span className="text-gradient">sportsbetting</span>.
        </p>

        <div className="w-full aspect-video">
          <VideoGate />
        </div>

        <Testimonials />
        <FAQ />

        <iframe
          id="testimonialto-carousel-value-profits-system---gratis-tag-all-dark"
          src="https://embed-v2.testimonial.to/carousel/all/value-profits-system---gratis?theme=dark&autoplay=on&showmore=off&one-row=on&same-height=off&tag=all&arrowColor=9BA9B4&column-scale=0&cc=off"
          frameBorder="0"
          scrolling="no"
          width="100%"
          height={"600px"}
        ></iframe>

        <ImageRow />
      </div>

      <footer
        style={{
          textAlign: "center",
          marginTop: "4rem",
          paddingBottom: "2rem",
          zIndex: 9999,
        }}
      >
        <button
          onClick={() => setForceConsent(true)}
          style={{
            background: "none",
            border: "none",
            textDecoration: "underline",
            color: "#888",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Ændr dine cookie-præferencer
        </button>
      </footer>
    </div>
  );
}
