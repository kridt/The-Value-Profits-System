import React, { useState, useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const CONSENT_KEY = "cookie_consent";
const CONSENT_TIME_KEY = "cookie_consent_timestamp";
const VALID_DAYS_ACCEPTED = 180;
const VALID_DAYS_DECLINED = 1;

const CookieConsent = ({ forceOpen = false }) => {
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

    if (!consent || forceOpen || expired()) {
      setVisible(true);
    } else if (consent === "accepted") {
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
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center text-black animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Vi bruger cookies 🍪</h2>
        <p className="mb-6 text-sm text-gray-700">
          Vi bruger cookies til statistik og markedsføring. Du bestemmer – og du
          kan altid ændre dine valg senere.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleAccept}
            className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md"
          >
            Det lyder fint!
          </button>
          <button
            onClick={handleDecline}
            className="text-sm text-gray-500 hover:underline"
          >
            Nej tak
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
