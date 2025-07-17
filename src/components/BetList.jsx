import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BetList() {
  const [bets, setBets] = useState([]);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_SHEET_URL)
      .then((res) => {
        const rows = res.data;

        // Find statistik-rækken
        const statRow = rows.find(
          (row) =>
            row["Start Balance"]?.includes("kr") &&
            row["Profit"]?.includes("kr") &&
            row["ROI %"]?.includes("%")
        );

        // Træk statistikdata ud
        const statObj = {
          startBalance: res.data[0]["Start Balance"],
          expected: statRow["Forventet profit"],
          profit: statRow["Profit"],
          roi: statRow["ROI %"],
          count: statRow["Antal bets"],
        };

        // Filtrér og sorter bet-rækker
        const filtered = rows.filter((row) =>
          row["Start Balance"]?.match(/^\d{2}\/\d{2}\/\d{4}$/)
        );

        const sorted = filtered.sort((a, b) => {
          const parseDate = (d) => {
            const [day, month, year] = d.split("/");
            return new Date(`${year}-${month}-${day}`);
          };
          return parseDate(b["Start Balance"]) - parseDate(a["Start Balance"]);
        });

        setStats(statObj);
        setBets(sorted);
      })
      .catch((err) => console.error("Fejl ved hentning af data:", err));
  }, []);

  const getStatusColor = (status) => {
    if (status === "Vundet") return "bg-green-600/20 border-green-600";
    if (status === "Tabt") return "bg-red-600/20 border-red-600";
    if (status === "Push") return "bg-yellow-600/20 border-yellow-600";
    return "bg-zinc-700/50 border-zinc-500";
  };

  return (
    <div className="p-6 min-h-screen bg-zinc-900 text-white">
      <h2 className="text-4xl font-extrabold mb-8 text-center tracking-tight">
        Juni måneds bets
      </h2>

      {/* Statistik */}
      {stats && (
        <div className="bg-zinc-800 p-6 rounded-lg mb-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-sm font-medium shadow-md">
          <div>
            <div className="text-zinc-400 text-xs uppercase mb-1">
              Start Balance
            </div>
            <div className="text-lg font-bold text-white">
              {stats.startBalance}
            </div>
          </div>
          <div>
            <div className="text-zinc-400 text-xs uppercase mb-1">
              Forventet profit
            </div>
            <div className="text-lg font-bold text-emerald-300">
              {stats.expected}
            </div>
          </div>
          <div>
            <div className="text-zinc-400 text-xs uppercase mb-1">Profit</div>
            <div className="text-lg font-bold text-green-400">
              {stats.profit}
            </div>
          </div>
          <div>
            <div className="text-zinc-400 text-xs uppercase mb-1">ROI %</div>
            <div className="text-lg font-bold text-yellow-400">{stats.roi}</div>
          </div>
          <div>
            <div className="text-zinc-400 text-xs uppercase mb-1">
              Antal bets
            </div>
            <div className="text-lg font-bold">{stats.count}</div>
          </div>
        </div>
      )}

      {/* Væddemål opdelt efter dato */}
      {Object.entries(
        bets.reduce((acc, bet) => {
          const date = bet["Start Balance"];
          if (!acc[date]) acc[date] = [];
          acc[date].push(bet);
          return acc;
        }, {})
      ).map(([date, dailyBets], idx) => (
        <div key={idx} className="mb-8">
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-zinc-700" />
            <span className="px-4 text-sm text-zinc-400 font-semibold whitespace-nowrap">
              {date}
            </span>
            <hr className="flex-grow border-zinc-700" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dailyBets.map((bet, index) => (
              <div
                key={index}
                className={`border p-4 rounded-xl transition-transform hover:scale-[1.02] shadow-md ${getStatusColor(
                  bet["Forventet profit"]
                )}`}
              >
                <div>
                  <span className="text-zinc-400">Unit:</span> {bet[""]}
                </div>
                <div>
                  <span className="text-zinc-400">Odds:</span>{" "}
                  {bet["Stake Size"]}
                </div>
                <div>
                  <span className="text-zinc-400">Udbetaling:</span>{" "}
                  {bet["Total "]}
                </div>
                <div>
                  <span className="text-zinc-400">Status:</span>{" "}
                  {bet["Forventet profit"]}
                </div>
                <div>
                  <span className="text-zinc-400">Profit:</span> {bet["Profit"]}
                </div>
                <div>
                  <span className="text-zinc-400">Real profit:</span>{" "}
                  {bet["ROI %"]}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
