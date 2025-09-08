// src/components/VideoGate.jsx
import React, { useMemo } from "react";

/**
 * Hardcoded "lukket" VideoGate
 * - Viser stadig video-iframe i baggrunden, men et overlay blokerer ALT interaktion.
 * - Viser besked: "Vi holder live workshop d. 8-9-10 september kl 20-21".
 * - Ingen formular / ingen Zapier – ren midlertidig blokering.
 *
 * Props:
 *  - videoUrl (valgfri): embed URL (Vimeo/YouTube). Kan skiftes frit.
 */
export default function VideoGate({
  videoUrl = "https://player.vimeo.com/video/1098616437?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
}) {
  const validUrl = useMemo(() => String(videoUrl || "").trim(), [videoUrl]);

  return (
    <div className="card p-0 overflow-hidden">
      {/* Mobil: 9:16; >=sm: 16:9 */}
      <div className="relative w-full aspect-[9/16] sm:aspect-[16/9]">
        {/* Video i baggrunden (kan ikke interageres med pga. overlay) */}
        <iframe
          src={validUrl}
          title="VPS video"
          width="100%"
          height="100%"
          style={{ border: "none", position: "absolute", inset: 0 }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          tabIndex={-1}
          aria-hidden="true"
        />

        {/* MIDLERITIDIG LUKKET OVERLAY */}
        <div className="absolute inset-0 z-20 bg-[#0b0c0e]/85 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="w-full max-w-xl text-center">
            <h3 className="h2 glow-accent">Vi holder live workshop</h3>
            <p className="mt-2 text-lg text-white font-semibold">
              d. 8-9-10 september kl 20-21
            </p>
            <p className="mt-4 text-[var(--ink-2)]">
              Videoen er midlertidigt utilgængelig. Deltag i workshoppen for at
              få alle detaljer.
            </p>
            {/* (valgfrit) CTA – kommentér ud hvis du ikke vil have knap */}
            {/* <a
              href="https://calendly.com/vpsystem1/30min"
              target="_blank"
              rel="noreferrer"
              className="btn-accent mt-5 inline-flex"
            >
              Book en samtale
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
