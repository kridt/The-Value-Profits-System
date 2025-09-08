import React, { useEffect, useMemo, useState } from "react";

/**
 * Hard overlay VideoGate (Zapier)
 * - Feltnavne: Navn, Email, Telefon, Dato (da-DK).
 * - POST til Zapier webhook som application/x-www-form-urlencoded.
 * - Låser op + husker via localStorage key "videoGate".
 */
export default function VideoGate({
  videoUrl = "https://player.vimeo.com/video/1098616437?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
  zapierUrl = "https://hooks.zapier.com/hooks/catch/23383335/u3qb9o1/",
  title = "Se hvordan systemet fungerer (5 min.)",
  subtitle = "Udfyld for at låse videoen op. Vi sender kun relevante opdateringer.",
}) {
  const [navn, setNavn] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [accept, setAccept] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const validUrl = useMemo(() => String(videoUrl || "").trim(), [videoUrl]);

  // Læs tidligere gate-status (din struktur)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("videoGate");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.status === true) setUnlocked(true);
      }
    } catch {}
  }, []);

  const validate = () => {
    if (!navn.trim()) return "Skriv dit navn.";
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return "Skriv en gyldig e-mail.";
    if (telefon && !/^[0-9+\s-]{6,20}$/.test(telefon))
      return "Ugyldigt telefonnummer.";
    if (!accept) return "Du skal give samtykke for at fortsætte.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError("");
    setSending(true);

    try {
      const formData = new URLSearchParams();
      formData.append("Navn", navn.trim());
      formData.append("Email", email.trim());
      formData.append("Telefon", (telefon || "").trim());
      formData.append("Dato", new Date().toLocaleString("da-DK"));

      const res = await fetch(zapierUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
        mode: "cors",
      });
      if (!res.ok && res.type !== "opaque") throw new Error("Netværksfejl");

      // samme struktur som du brugte før
      localStorage.setItem(
        "videoGate",
        JSON.stringify({ status: true, timestamp: Date.now() })
      );
      setUnlocked(true);
    } catch (err) {
      console.error("Fejl ved afsendelse til Zapier:", err);
      setError("Kunne ikke gemme din tilmelding. Prøv igen.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="card p-0 overflow-hidden">
      {/* Video container */}
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <iframe
          src={validUrl}
          title="VPS video"
          width="100%"
          height="100%"
          style={{ border: "none", position: "absolute", inset: 0 }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />

        {/* HARD GATE overlay der dækker videoen */}
        {!unlocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0b0c0e]/80 backdrop-blur-sm z-10">
            <form
              onSubmit={handleSubmit}
              className="w-[92%] max-w-md rounded-xl border border-[var(--line)] bg-[var(--panel-2)] p-5 md:p-6"
            >
              <h3 className="h3 text-white">{title}</h3>
              {subtitle && (
                <p className="mt-2 text-[var(--ink-2)] text-sm">{subtitle}</p>
              )}

              <div className="mt-4 flex flex-col gap-3">
                <input
                  type="text"
                  value={navn}
                  onChange={(e) => setNavn(e.target.value)}
                  placeholder="Navn"
                  className="input w-full"
                  autoComplete="name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  className="input w-full"
                  autoComplete="email"
                />
                <input
                  type="tel"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  placeholder="Telefon (valgfri)"
                  className="input w-full"
                  autoComplete="tel"
                />

                <label className="text-sm text-[var(--ink-2)] flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={accept}
                    onChange={(e) => setAccept(e.target.checked)}
                    className="mt-[3px]"
                  />
                  Jeg giver samtykke til at modtage info om VPS og accepterer
                  <a href="/privatliv" className="link ml-1">
                    Privatlivspolitik
                  </a>
                  .
                </label>

                {error && <div className="text-rose-300 text-sm">{error}</div>}

                <button
                  type="submit"
                  className="btn btn-primary mt-1"
                  disabled={sending}
                >
                  {sending ? "Gemmer..." : "Lås video op"}
                </button>

                <p className="text-xs text-[var(--muted)]">
                  Dato gemmes automatisk. Vi deler ikke dine oplysninger.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
