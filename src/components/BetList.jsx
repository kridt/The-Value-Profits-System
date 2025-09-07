import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const availableMonths = [
  { label: "Juni", sheet: "Juni" },
  { label: "Juli", sheet: "Juli" },
  { label: "August", sheet: "August" },
];

export default function BetList() {
  const [bets, setBets] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("Juni");
  const [bankroll, setBankroll] = useState(10000);
  const [stake, setStake] = useState(500);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (selectedMonth === "Alle") {
          const allResponses = await Promise.all(
            availableMonths.map((m) =>
              axios.get(
                `https://opensheet.elk.sh/1hKzN810Lt4tl73O9FQ46Zj9689Bj8W2qeQ2aUUINH84/${m.sheet}`
              )
            )
          );
          const combined = allResponses
            .flatMap((res) => res.data)
            .filter((row) => parseFloat(row["antal bets"]) > 0)
            .sort((a, b) => {
              const [da, ma, ya] = a.dato.split("/").map(Number);
              const [db, mb, yb] = b.dato.split("/").map(Number);
              return new Date(ya, ma - 1, da) - new Date(yb, mb - 1, db);
            });
          setBets(combined);
        } else {
          const res = await axios.get(
            `https://opensheet.elk.sh/1hKzN810Lt4tl73O9FQ46Zj9689Bj8W2qeQ2aUUINH84/${selectedMonth}`
          );
          const filtered = res.data
            .filter((row) => parseFloat(row["antal bets"]) > 0)
            .sort((a, b) => {
              const [da, ma, ya] = a.dato.split("/").map(Number);
              const [db, mb, yb] = b.dato.split("/").map(Number);
              return new Date(ya, ma - 1, da) - new Date(yb, mb - 1, db);
            });
          setBets(filtered);
        }
      } catch (err) {
        console.error("Fejl ved hentning af data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedMonth]);

  useEffect(() => {
    setStake(Math.round(bankroll * 0.05));
  }, [bankroll]);

  const statsList = [
    () => `Total Bets: ${bets.length}`,
    () =>
      `Winrate: ${
        Math.round(
          (bets.filter((b) => b.status === "Vundet").length /
            (bets.length || 1)) *
            100
        ) || 0
      }%`,
    () => `Vundne: ${bets.filter((b) => b.status === "Vundet").length}`,
    () => `Tabte: ${bets.filter((b) => b.status === "Tabt").length}`,
    () => `Push: ${bets.filter((b) => b.status === "Push").length}`,
    () =>
      `Gns. Odds: ${(
        bets.reduce((acc, b) => acc + parseFloat(b.odds.replace(",", ".")), 0) /
        (bets.length || 1)
      ).toFixed(2)}`,
    () =>
      `Gns. sats/spil: ${formatKr(
        bets.reduce(
          (acc, b) => acc + parseFloat(b["unit "].replace(",", ".")) * stake,
          0
        ) / (bets.length || 1)
      )}`,
    () => `Aktiv måned: ${selectedMonth}`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % statsList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [statsList.length]);

  function beregnSimuleretSaldo() {
    return bets.reduce((acc, bet) => {
      const odds = parseFloat(bet.odds.replace(",", "."));
      const unit = parseFloat(bet["unit "].replace(",", "."));
      const indsats = stake * unit;
      if (bet.status === "Vundet") return acc + (odds * indsats - indsats);
      if (bet.status === "Tabt") return acc - indsats;
      return acc;
    }, bankroll);
  }
  function formatKr(amount) {
    return new Intl.NumberFormat("da-DK", {
      style: "currency",
      currency: "DKK",
      minimumFractionDigits: 0,
    }).format(amount);
  }
  function lavKontoHistorik() {
    const sorted = [...bets].sort((a, b) => {
      const [da, ma, ya] = a.dato.split("/").map(Number);
      const [db, mb, yb] = b.dato.split("/").map(Number);
      return new Date(ya, ma - 1, da) - new Date(yb, mb - 1, db);
    });
    let saldo = bankroll;
    return sorted.map((bet, i) => {
      const odds = parseFloat(bet.odds.replace(",", "."));
      const unit = parseFloat(bet["unit "].replace(",", "."));
      const indsats = stake * unit;
      if (bet.status === "Vundet") saldo += odds * indsats - indsats;
      else if (bet.status === "Tabt") saldo -= indsats;
      return { index: i + 1, saldo: Math.round(saldo) };
    });
  }

  return (
    <div className="min-h-[60vh] font-sans">
      {/* Månedsvælger */}
      <div className="flex flex-wrap gap-3 mb-6">
        {availableMonths.map((m) => (
          <button
            key={m.sheet}
            onClick={() => setSelectedMonth(m.sheet)}
            className={`px-4 py-2 rounded-lg transition ${
              selectedMonth === m.sheet ? "btn-neon" : "surface hover:glow-soft"
            }`}
            data-halo
          >
            {m.label}
          </button>
        ))}
        <button
          onClick={() => setSelectedMonth("Alle")}
          className={`px-4 py-2 rounded-lg transition ${
            selectedMonth === "Alle" ? "btn-neon" : "surface hover:glow-soft"
          }`}
          data-halo
        >
          Alle måneder
        </button>
      </div>

      {loading ? (
        <div className="text-center my-12 animate-pulse text-[#9ff7ff] text-xl">
          Indlæser data...
        </div>
      ) : (
        <>
          {/* Ticker */}
          <div className="mb-10 w-full overflow-hidden h-10 rounded-xl surface glow-soft flex items-center justify-center border-sweep">
            <motion.p
              key={tickerIndex}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="text-sm sm:text-base font-semibold tracking-wide text-[#9ff7ff]"
            >
              {statsList[tickerIndex]()}
            </motion.p>
          </div>

          {/* Controls + KPI */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 card-neon border-sweep">
              <label className="text-xs text-[#9CB6C1]">Bankroll</label>
              <input
                type="number"
                value={bankroll}
                onChange={(e) => setBankroll(Number(e.target.value))}
                className="mt-2 w-full px-4 py-2 input-neon"
              />
              <p className="mt-1 text-xs text-[#8aa3ad]">
                1 unit = {stake} kr (5% af bankroll)
              </p>
            </div>

            <div className="p-6 card-neon border-sweep">
              {statsList.map((s, i) => (
                <p key={i} className="text-sm text-[#E9F1F5]/85">
                  {s()}
                </p>
              ))}
              <p className="text-lg font-bold mt-6">
                Din saldo ville lige nu være:{" "}
                <span className="text-gradient-neo">
                  {formatKr(beregnSimuleretSaldo())}
                </span>
              </p>
            </div>
          </div>

          {/* Graf */}
          <div className="w-full px-2 sm:px-4 lg:px-8 py-6 card-neon border-sweep mb-12">
            <h2 className="text-xl sm:text-2xl text-gradient-neo mb-4 text-center">
              Saldo over tid (væddemål #)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lavKontoHistorik()}>
                <defs>
                  <linearGradient
                    id="saldoGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#00ffa7" stopOpacity={0.32} />
                    <stop
                      offset="100%"
                      stopColor="#070808"
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#16423e" />
                <XAxis
                  dataKey="index"
                  stroke="#4DE5D3"
                  tick={{ fill: "#9CB6C1", fontSize: 10 }}
                  label={{
                    value: "Væddemål #",
                    position: "insideBottom",
                    offset: -5,
                    fill: "#9CB6C1",
                    fontSize: 12,
                  }}
                  tickCount={10}
                />
                <YAxis
                  stroke="#4DE5D3"
                  tick={{ fill: "#9CB6C1", fontSize: 11 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0A0B0C",
                    border: "1px solid rgba(159,247,255,.55)",
                    borderRadius: "10px",
                    color: "#E9F1F5",
                    fontSize: ".85rem",
                  }}
                  labelStyle={{ color: "#9ff7ff", fontWeight: 700 }}
                  formatter={(value, name) =>
                    name === "saldo" ? [`${value} kr`, "Saldo"] : [value, name]
                  }
                  labelFormatter={(label) => `Væddemål #${label}`}
                />
                <ReferenceLine
                  y={bankroll}
                  stroke="#b2ff59"
                  strokeWidth={2}
                  strokeDasharray="6 3"
                  label={{
                    value: "Start-bankroll",
                    position: "top",
                    fill: "#b2ff59",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="saldo"
                  stroke="#00ffa7"
                  strokeWidth={2}
                  fill="url(#saldoGradient)"
                  dot={false}
                  isAnimationActive
                  animationDuration={650}
                />
              </LineChart>
            </ResponsiveContainer>
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
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="p-5 card-neon border-sweep"
                >
                  <p className="text-xs text-[#9CB6C1]">{bet.dato}</p>
                  <p className="text-lg font-semibold text-gradient-neo">
                    Odds: {bet.odds}
                  </p>
                  <p className="text-xl font-bold">
                    {profit > 0 ? "+" : ""}
                    {profit} kr
                  </p>
                  <p
                    className={`text-xs uppercase tracking-widest ${
                      result
                        ? "text-[#5CFF8F]"
                        : push
                        ? "text-[#D2FF6B]"
                        : "text-[#FF6B6B]"
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
                className="px-6 py-2 btn-neon"
                data-halo
              >
                Se flere væddemål
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
