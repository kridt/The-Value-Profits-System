import React from "react";

export default function Checkout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-16">
      <div className="max-w-2xl w-full space-y-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          Tak fordi du vil være med 💸
        </h1>
        <p className="text-lg text-gray-300">
          Du er få minutter fra at få adgang til hele Value Profits Systemet.
          Herunder finder du dit personlige betalingslink. Efter betaling får du
          straks adgang.
        </p>

        <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold mb-4">Gå til betaling</h2>
          <a
            href="https://xxeypq-0g.myshopify.com/checkouts/cn/Z2NwLWV1cm9wZS13ZXN0MTowMUpaTkhaNDJNSlFaTjM2MTlNQlhCOFBHWQ?preview_theme_id=184526438730"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105"
          >
            Klik her for at betale og komme i gang 🚀
          </a>
        </div>
      </div>
    </div>
  );
}
