// src/components/BetList.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
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

/** Konfiguration */
const SHEET_ID = "1hKzN810Lt4tl73O9FQ46Zj9689Bj8W2qeQ2aUUINH84";
const availableMonths = [
  { label: "Juni", sheet: "Juni" },
  { label: "Juli", sheet: "Juli" },
  { label: "August", sheet: "August" },
  { label: "September", sheet: "September" },
  { label: "Oktober", sheet: "Oktober" },
  { label: "November", sheet: "November" },
  { label: "December", sheet: "December" },
  { label: "Januar", sheet: "Januar" },
  { label: "Februar", sheet: "Februar" },
];

/** Hjælpere */
const canon = (s) =>
  String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
const getField = (row, labels) => {
  const wanted = labels.map(canon);
  for (const k of Object.keys(row))
    if (wanted.includes(canon(k))) return row[k];
  for (const k of Object.keys(row))
    if (wanted.some((w) => canon(k).includes(w) || w.includes(canon(k))))
      return row[k];
  return undefined;
};
const parseNumber = (v) => {
  if (v == null) return 0;
  const s = String(v).trim().replace(/\./g, "").replace(",", ".");
  const n = Number(s);
  return Number.isFinite(n) ? n : 0;
};
const parseDateDA = (s) => {
  if (!s) return 0;
  const m = String(s)
    .trim()
    .match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
  if (!m) return 0;
  const [_, d, mo, y] = m;
  const t = new Date(+y, +mo - 1, +d).getTime();
  return Number.isFinite(t) ? t : 0;
};
const normStatus = (v) => {
  const s = String(v || "").toLowerCase();
  if (s.startsWith("vun")) return "Vundet";
  if (s.startsWith("tab")) return "Tabt";
  if (s.startsWith("pus") || s === "push") return "Push";
  if (s.startsWith("vaer") || s.startsWith("vær")) return "Værdi";
  return "Ukendt";
};
const kr = (n) =>
  new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    minimumFractionDigits: 0,
  }).format(Math.round(n));

export default function BetList() {
  const [selectedMonth, setSelectedMonth] = useState("September");
  const [bankroll, setBankroll] = useState(10000);
  const [stake, setStake] = useState(400);
  const [bets, setBets] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [debug, setDebug] = useState(false);
  const dref = useRef(debug);
  useEffect(() => {
    dref.current = debug;
  }, [debug]);
  const log = (...a) => dref.current && console.log("[BetList]", ...a);

  useEffect(() => {
    const s = Math.max(1, Math.round((+bankroll || 0) * 0.04));
    setStake(s);
  }, [bankroll]);

  useEffect(() => {
    let dead = false;
    const fetchMonth = async (sheet) => {
      const url = `https://opensheet.elk.sh/${SHEET_ID}/${sheet}`;
      const res = await axios.get(url);
      return res.data || [];
    };
    const run = async () => {
      setLoading(true);
      setErrorMsg("");
      try {
        let rows = [];
        if (selectedMonth === "Alle") {
          const all = await Promise.all(
            availableMonths.map((m) => fetchMonth(m.sheet))
          );
          rows = all.flat();
        } else {
          rows = await fetchMonth(selectedMonth);
        }
        const normalized = rows
          .map((r, idx) => {
            const dato = getField(r, ["dato", "date"]);
            const odds = getField(r, ["odds"]);
            const unitRaw = getField(r, ["unit ", "unit"]);
            const status = getField(r, ["status"]);
            return {
              i: idx,
              dato: dato || "",
              datoTS: parseDateDA(dato),
              odds: parseNumber(odds),
              unit: parseNumber(unitRaw),
              status: normStatus(status),
            };
          })
          .filter((o) => o.datoTS > 0)
          .sort((a, b) => a.datoTS - b.datoTS);

        if (dead) return;
        setBets(normalized);
        log("Rækker normaliseret:", normalized.length);
      } catch (e) {
        console.error(e);
        if (!dead) setErrorMsg("Kunne ikke hente data.");
      } finally {
        if (!dead) setLoading(false);
      }
    };
    run();
    return () => {
      dead = true;
    };
  }, [selectedMonth]);

  const simSaldo = useMemo(() => {
    let saldo = +bankroll || 0;
    bets.forEach((b) => {
      const indsats = stake * b.unit;
      if (b.status === "Vundet") saldo += b.odds * indsats - indsats;
      else if (b.status === "Tabt") saldo -= indsats;
    });
    return Math.round(saldo);
  }, [bets, stake, bankroll]);

  const roiPct = useMemo(() => {
    if (!bankroll) return 0;
    return ((simSaldo - bankroll) / bankroll) * 100;
  }, [simSaldo, bankroll]);

  const history = useMemo(() => {
    let saldo = +bankroll || 0;
    return bets.map((b, i) => {
      const indsats = stake * b.unit;
      if (b.status === "Vundet") saldo += b.odds * indsats - indsats;
      else if (b.status === "Tabt") saldo -= indsats;
      return { index: i + 1, saldo: Math.round(saldo) };
    });
  }, [bets, stake, bankroll]);

  /* Skeleton components */
  const SkeletonCard = () => (
    <div className="card-accent p-5 animate-pulse">
      <div className="h-4 bg-[var(--line)] rounded w-1/3 mb-3"></div>
      <div className="h-3 bg-[var(--line)] rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-[var(--line)] rounded w-1/4"></div>
    </div>
  );

  const SkeletonGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );

  /** UI */
  return (
    <div className="space-y-6">
      {/* Filter/inputs */}
      <div className="card-accent p-6">
        <div className="flex flex-wrap items-center gap-3">
          {availableMonths.map((m) => (
            <button
              key={m.sheet}
              onClick={() => {
                setSelectedMonth(m.sheet);
                setVisibleCount(12);
              }}
              className={`chip ${
                selectedMonth === m.sheet ? "chip--active" : ""
              }`}
            >
              {m.label}
            </button>
          ))}
          <button
            onClick={() => {
              setSelectedMonth("Alle");
              setVisibleCount(12);
            }}
            className={`chip ${selectedMonth === "Alle" ? "chip--active" : ""}`}
          >
            Alle måneder
          </button>

          <div className="ml-auto flex items-center gap-3">
            <label className="text-sm text-[var(--ink-2)]">Bankroll</label>
            <input
              type="number"
              value={bankroll}
              onChange={(e) => setBankroll(Number(e.target.value) || 0)}
              className="input-accent w-32 text-right"
            />
            <span className="text-sm text-accent font-semibold">
              1 unit = {stake} kr
            </span>
          </div>
        </div>
      </div>

      {loading ? (
        <>
          {/* KPI skeleton */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card-accent p-6 animate-pulse">
              <div className="h-4 bg-[var(--line)] rounded w-1/3 mb-3"></div>
              <div className="h-3 bg-[var(--line)] rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-[var(--line)] rounded w-1/4"></div>
            </div>
            <div className="card-accent p-6 animate-pulse">
              <div className="h-full bg-[var(--line)] rounded"></div>
            </div>
          </div>

          {/* Bet cards skeleton */}
          <SkeletonGrid />
        </>
      ) : (
        <>
          {/* KPI + graf */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card-accent p-6">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[15px]">
                <div className="text-[var(--ink-2)]">Total væddemål</div>
                <div className="font-semibold text-accent">{bets.length}</div>

                <div className="text-[var(--ink-2)]">Vundet</div>
                <div className="font-semibold text-accent">
                  {bets.filter((b) => b.status === "Vundet").length}
                </div>

                <div className="text-[var(--ink-2)]">Tabt</div>
                <div className="font-semibold">
                  {bets.filter((b) => b.status === "Tabt").length}
                </div>

                <div className="text-[var(--ink-2)]">Winrate</div>
                <div className="font-semibold text-accent">
                  {Math.round(
                    (bets.filter((b) => b.status === "Vundet").length /
                      (bets.length || 1)) *
                      100
                  ) || 0}
                  %
                </div>

                <div className="text-[var(--ink-2)]">Vækst i %</div>
                <div className="font-semibold text-accent">
                  {roiPct.toFixed(1)}%
                </div>

                <div className="text-[var(--ink-2)]">Gns. odds</div>
                <div className="font-semibold text-accent">
                  {(
                    bets.reduce((a, b) => a + (b.odds || 0), 0) /
                    (bets.length || 1)
                  ).toFixed(2)}
                </div>

                <div className="text-[var(--ink-2)]">Gns. sats/spil</div>
                <div className="font-semibold text-accent">
                  {kr(
                    bets.reduce((a, b) => a + (b.unit || 0) * stake, 0) /
                      (bets.length || 1)
                  )}
                </div>

                <div className="text-[var(--ink-2)]">Aktiv måned</div>
                <div className="font-semibold">{selectedMonth}</div>
              </div>

              <p className="mt-5 text-base font-extrabold">
                Din saldo ville være:{" "}
                <span className="glow-accent">{kr(simSaldo)}</span>
              </p>
            </div>

            <div className="card-accent p-6">
              <div className="h-[380px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={history}>
                    <CartesianGrid stroke="rgba(71,250,190,.18)" />
                    <XAxis
                      dataKey="index"
                      stroke="#8b929a"
                      tick={{ fill: "#8b929a", fontSize: 12 }}
                    />
                    <YAxis
                      stroke="#8b929a"
                      tick={{ fill: "#8b929a", fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#0f1113",
                        border: "1px solid rgba(71,250,190,.35)",
                        borderRadius: "8px",
                        color: "#e9eef2",
                      }}
                      labelStyle={{ color: "#ffffff", fontWeight: 800 }}
                      formatter={(v, name) =>
                        name === "saldo" ? [`${v} kr`, "Saldo"] : [v, name]
                      }
                      labelFormatter={(l) => `Væddemål #${l}`}
                    />
                    <ReferenceLine
                      y={+bankroll || 0}
                      stroke="rgba(71,250,190,.6)"
                      strokeDasharray="6 6"
                    />
                    <Line
                      type="monotone"
                      dataKey="saldo"
                      stroke="#47FABE"
                      strokeWidth={2.5}
                      dot={false}
                      isAnimationActive
                      animationDuration={500}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Kort */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {bets.slice(0, visibleCount).map((b, i) => {
              const indsats = stake * b.unit;
              const res = b.status === "Vundet";
              const push = b.status === "Push";
              const profit = res
                ? Math.round(b.odds * indsats)
                : push
                ? Math.round(indsats)
                : -Math.round(indsats);
              return (
                <div key={i} className="card-accent p-5">
                  <div className="flex items-baseline justify-between">
                    <p className="text-xs text-[var(--muted)]">
                      {b.dato || "—"}
                    </p>
                    <p className="text-xs font-semibold">
                      {res ? (
                        <span className="text-accent">Vundet</span>
                      ) : push ? (
                        <span className="text-accent/80">Push</span>
                      ) : (
                        <span className="text-rose-300">{b.status}</span>
                      )}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-[var(--ink-2)]">
                    Odds: {b.odds?.toString().replace(".", ",")}
                  </p>
                  <p className="text-sm text-[var(--muted)]">
                    Unit: {b.unit} • Indsats: {kr(indsats)}
                  </p>
                  <p
                    className={`mt-1 text-base font-semibold ${
                      profit > 0 ? "text-accent" : ""
                    }`}
                  >
                    {profit > 0 ? "+" : ""}
                    {profit} kr
                  </p>
                </div>
              );
            })}
          </div>

          {visibleCount < bets.length && (
            <div className="text-center">
              <button
                onClick={() => setVisibleCount((v) => v + 9)}
                className="btn-outline-accent"
              >
                Vis flere væddemål
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
