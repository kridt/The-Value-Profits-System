import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function BetList() {
  const [bets, setBets] = useState([]);
  const [bankroll, setBankroll] = useState(10000);
  const [stake, setStake] = useState(500);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(10);

  const statsList = [
    () => `Total Bets: ${bets.length}`,
    () =>
      `Winrate: ${
        Math.round(
          (bets.filter((b) => b.status === "Vundet").length / bets.length) * 100
        ) || 0
      }%`,
    () => `Vundne: ${bets.filter((b) => b.status === "Vundet").length}`,
    () => `Tabte: ${bets.filter((b) => b.status === "Tabt").length}`,
    () => `Push: ${bets.filter((b) => b.status === "Push").length}`,
    () =>
      `Gns. Odds (inkl. long shots): ${(
        bets.reduce((acc, b) => acc + parseFloat(b.odds.replace(",", ".")), 0) /
        (bets.length || 1)
      ).toFixed(2)}`,
    () =>
      `Gns. sats per spil: ${formatKr(
        bets.reduce(
          (acc, b) => acc + parseFloat(b["unit "].replace(",", ".")) * stake,
          0
        ) / (bets.length || 1)
      )}`,
  ];

  useEffect(() => {
    axios
      .get(
        "https://opensheet.elk.sh/1hKzN810Lt4tl73O9FQ46Zj9689Bj8W2qeQ2aUUINH84/Juli"
      )
      .then((res) => {
        const filtered = res.data
          .filter((row) => parseFloat(row["antal bets"]) > 0)
          .sort((a, b) => {
            const [da, ma, ya] = a.dato.split("/").map(Number);
            const [db, mb, yb] = b.dato.split("/").map(Number);
            return new Date(yb, mb - 1, db) - new Date(ya, ma - 1, da);
          });

        setBets(filtered);
      })
      .catch((err) => console.error("Fejl:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % statsList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bets]);

  useEffect(() => {
    setStake(Math.round(bankroll * 0.05));
  }, [bankroll]);

  function beregnSimuleretSaldo() {
    return bets.reduce((acc, bet) => {
      const odds = parseFloat(bet.odds.replace(",", "."));
      const unit = parseFloat(bet["unit "].replace(",", "."));
      const indsats = stake * unit;

      if (bet.status === "Vundet") {
        return acc + (odds * indsats - indsats);
      } else if (bet.status === "Tabt") {
        return acc - indsats;
      } else {
        return acc;
      }
    }, bankroll);
  }

  function formatKr(amount) {
    return new Intl.NumberFormat("da-DK", {
      style: "currency",
      currency: "DKK",
      minimumFractionDigits: 0,
    }).format(amount);
  }

  return (
    <div className="min-h-screen bg-[#071B26] text-white font-mono p-6">
      {/* Ticker */}
      <div className="mb-10 w-full overflow-hidden h-10 bg-[#0D2C3C] rounded-xl border border-[#1D9FB8]/40 flex items-center justify-center">
        <motion.p
          key={tickerIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-[#59D3E6] font-bold tracking-widest"
        >
          {statsList[tickerIndex]()}
        </motion.p>
      </div>

      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-white/5 backdrop-blur rounded-xl border border-[#1D9FB8]/30"
        >
          <h2 className="text-xl text-[#59D3E6] mb-4">Indstillinger</h2>
          <label className="text-sm">Bankroll</label>
          <input
            type="number"
            value={bankroll}
            onChange={(e) => setBankroll(Number(e.target.value))}
            className="w-full px-4 py-2 mb-4 bg-[#0f2d3e] border border-[#1D9FB8]/50 rounded-md text-[#59D3E6] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#59D3E6]/60"
          />
          <p className="mt-2 text-sm text-gray-400">
            1 unit = {stake} kr (5% af bankroll)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 bg-white/5 backdrop-blur rounded-xl border border-[#59D3E6]/30"
        >
          <h2 className="text-xl text-[#59D3E6] mb-4">Statistik</h2>
          {statsList.map((s, i) => (
            <p key={i} className="text-sm text-gray-200">
              {s()}
            </p>
          ))}
          <p className="text-lg font-bold mt-6">
            Din saldo ville lige nu være:{" "}
            <span className="text-[#59D3E6]">
              {formatKr(beregnSimuleretSaldo())}
            </span>
          </p>
        </motion.div>
      </div>

      {/* Bets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {bets.slice(0, visibleCount).map((bet, i) => {
          const odds = parseFloat(bet.odds.replace(",", "."));
          const unit = parseFloat(bet["unit "].replace(",", "."));
          const result = bet.status === "Vundet";
          const push = bet.status === "Push";
          const profit = result
            ? Math.round(stake * unit * odds)
            : push
            ? Math.round(stake * unit)
            : -Math.round(stake * unit);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="p-5 bg-white/5 backdrop-blur-md rounded-xl border border-[#1D9FB8]/20 shadow-[0_0_20px_#1d9fb81a] hover:scale-[1.01] transition-all"
            >
              <p className="text-sm text-gray-400">{bet.dato}</p>
              <p className="text-lg font-bold text-[#59D3E6]">
                Odds: {bet.odds}
              </p>
              <p className="text-xl font-bold">
                {profit > 0 ? "+" : ""}
                {profit} kr
              </p>
              <p
                className={`text-sm uppercase tracking-widest ${
                  result
                    ? "text-green-400"
                    : push
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {bet.status}
              </p>
            </motion.div>
          );
        })}
      </div>

      {visibleCount < bets.length && (
        <div className="text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="px-6 py-2 rounded-md bg-[#59D3E6] text-black font-bold hover:bg-[#3cb7d6] transition-all"
          >
            Se flere væddemål
          </button>
        </div>
      )}
    </div>
  );
}
