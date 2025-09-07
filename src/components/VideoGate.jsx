import React, { useState, useEffect } from "react";

export default function VideoGate() {
  const [navn, setNavn] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [gateTriggered, setGateTriggered] = useState(false);

  useEffect(() => {
    const gateStatus = localStorage.getItem("videoGate");
    if (gateStatus) {
      const parsed = JSON.parse(gateStatus);
      const now = new Date().getTime();
      if (now - parsed.timestamp < 24 * 60 * 60 * 1000) setFormSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append("Navn", navn);
    formData.append("Email", email);
    formData.append("Telefon", telefon);
    formData.append("Dato", new Date().toLocaleString("da-DK"));
    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/23383335/u3qb9o1/",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData.toString(),
        }
      );
      if (!response.ok) throw new Error("Netværksfejl");
      localStorage.setItem(
        "videoGate",
        JSON.stringify({ status: true, timestamp: new Date().getTime() })
      );
      setFormSubmitted(true);
    } catch (err) {
      console.error("Fejl ved afsendelse til Zapier:", err);
    }
  };

  const handlePlayClick = () => {
    if (!formSubmitted) setGateTriggered(true);
  };

  return (
    <div className="w-full flex flex-col items-center mt-4 mb-4 px-4">
      {formSubmitted ? (
        <div className="w-full max-w-4xl aspect-video mb-6 card-neon border-sweep">
          <iframe
            src="https://player.vimeo.com/video/1098616437?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            title="Opdag hemmeligheden bag succesfuld sportsbetting!"
            className="w-full h-full rounded-lg"
          />
        </div>
      ) : (
        <div
          onClick={handlePlayClick}
          className="w-full max-w-4xl aspect-video mb-6 surface glow-soft flex items-center justify-center cursor-pointer relative overflow-hidden border-sweep"
        >
          <iframe
            src="https://player.vimeo.com/video/1098616437?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full opacity-25 pointer-events-none"
            title="Skjult video"
          />
          <div className="absolute inset-0 bg-black/45 flex items-center justify-center z-10">
            {gateTriggered ? (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md card-neon border-sweep"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-lg font-semibold mb-3">
                  Udfyld for at få adgang til videoen:
                </h2>
                <input
                  type="text"
                  placeholder="Navn"
                  value={navn}
                  onChange={(e) => setNavn(e.target.value)}
                  required
                  className="w-full px-4 py-2 input-neon mb-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 input-neon mb-3"
                />
                <input
                  type="tel"
                  placeholder="Telefonnummer"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  required
                  className="w-full px-4 py-2 input-neon mb-4"
                />
                <button
                  type="submit"
                  className="w-full btn-neon py-2 font-semibold"
                  data-halo
                >
                  Få adgang til videoen
                </button>
              </form>
            ) : (
              <button
                className="btn-neon px-6 py-3 text-base sm:text-lg rounded-full"
                data-halo
              >
                Tryk for at se videoen
              </button>
            )}
          </div>
        </div>
      )}

      <a
        href="https://calendly.com/vpsystem1/30min?month=2025-06"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 mb-7 btn-neon px-6 py-3 inline-block font-semibold"
        data-halo
      >
        Book din samtale
      </a>
    </div>
  );
}
