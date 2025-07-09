// src/pages/Home.jsx
import React from "react";
import VideoGate from "../components/VideoGate";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQAccordion";
import ParticlesBackground from "../ParticlesBackground";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white relative overflow-hidden">
      <ParticlesBackground />
      <div className="z-10 max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
          Tjen <span className="text-gradient">+200.000 kr. skattefrit</span>
          <br />
          på 12 måneder.
        </h1>
        <p className="text-lg text-gray-300">
          For dig, der er træt af <span className="text-gradient">content</span>
          , <span className="text-gradient">salg</span> og{" "}
          <span className="text-gradient">gamblede sidehustles</span> –<br />
          her er en seriøs metode, der lærer dig at udnytte{" "}
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
      </div>
    </div>
  );
}
