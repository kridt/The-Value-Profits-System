import React, { useState, useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const CONSENT_KEY = "cookie_consent";
const CONSENT_TIME_KEY = "cookie_consent_timestamp";
const VALID_DAYS_ACCEPTED = 180;
const VALID_DAYS_DECLINED = 1;

export default function CookieConsent({ forceOpen = false }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    const timestamp = localStorage.getItem(CONSENT_TIME_KEY);
    const now = new Date().getTime();

    const expired = () => {
      if (!timestamp) return true;
      const daysValid =
        consent === "accepted" ? VALID_DAYS_ACCEPTED : VALID_DAYS_DECLINED;
      return now - parseInt(timestamp, 10) > daysValid * 24 * 60 * 60 * 1000;
    };

    if (!consent || forceOpen || expired()) setVisible(true);
    else if (consent === "accepted") {
      const pixelId = import.meta.env.VITE_META_PIXEL_ID;
      if (pixelId) {
        ReactPixel.init(pixelId);
        ReactPixel.pageView();
      }
    }
  }, [forceOpen]);

  const handleAccept = () => {
    const now = new Date().getTime();
    localStorage.setItem(CONSENT_KEY, "accepted");
    localStorage.setItem(CONSENT_TIME_KEY, now.toString());
    const pixelId = import.meta.env.VITE_META_PIXEL_ID;
    if (pixelId) {
      ReactPixel.init(pixelId);
      ReactPixel.pageView();
    }
    setVisible(false);
  };
  const handleDecline = () => {
    const now = new Date().getTime();
    localStorage.setItem(CONSENT_KEY, "declined");
    localStorage.setItem(CONSENT_TIME_KEY, now.toString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
      <div className="card-neon border-sweep max-w-md w-full p-7">
        <h2 className="text-2xl font-bold mb-3">
          Vi bruger cookies <span className="text-gradient-neo">🍪</span>
        </h2>
        <p className="mb-6 text-sm text-[#9CB6C1]">
          Vi bruger cookies til statistik og markedsføring. Du kan altid ændre
          dine valg senere.
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={handleDecline}
            className="px-4 py-2 surface hover:glow-soft transition rounded-lg"
          >
            Nej tak
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 btn-neon font-semibold"
            data-halo
          >
            Det lyder fint!
          </button>
        </div>
      </div>
    </div>
  );
}
