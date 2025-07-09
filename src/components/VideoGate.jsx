// src/components/VideoGate.jsx
import React, { useState, useEffect } from "react";

const VideoGate = () => {
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
      if (now - parsed.timestamp < 24 * 60 * 60 * 1000) {
        setFormSubmitted(true);
      }
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
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      if (!response.ok) throw new Error("Netværksfejl");

      localStorage.setItem(
        "videoGate",
        JSON.stringify({ status: true, timestamp: new Date().getTime() })
      );

      setFormSubmitted(true);
    } catch (error) {
      console.error("Fejl ved afsendelse til Zapier:", error);
    }
  };

  const handlePlayClick = () => {
    if (!formSubmitted) {
      setGateTriggered(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-10 px-4">
      {formSubmitted ? (
        <>
          <div className="w-full max-w-4xl aspect-video mb-6">
            <iframe
              src="https://player.vimeo.com/video/1098616437?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              title="Opdag hemmeligheden bag succesfuld sportsbetting!"
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
          <a
            href="https://calendly.com/vpsystem1/30min?month=2025-06"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition duration-200"
          >
            Book din samtale
          </a>
        </>
      ) : (
        <>
          <div
            onClick={handlePlayClick}
            className="w-full max-w-4xl aspect-video mb-6 bg-gray-800 rounded-lg shadow-md flex items-center justify-center cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
              <button className="text-white text-xl bg-green-600 px-6 py-3 rounded-full hover:bg-green-700 transition">
                Tryk for at se videoen
              </button>
            </div>
            <iframe
              src="https://player.vimeo.com/video/1098616437?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full opacity-30 pointer-events-none"
              title="Skjult video"
            ></iframe>
          </div>
          {gateTriggered && (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md text-black"
            >
              <h2 className="text-xl font-semibold mb-2">
                Udfyld for at få adgang til videoen:
              </h2>
              <input
                type="text"
                placeholder="Navn"
                value={navn}
                onChange={(e) => setNavn(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="tel"
                placeholder="Telefonnummer"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-200"
              >
                Få adgang til videoen
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default VideoGate;
