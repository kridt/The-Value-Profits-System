import React from "react";

export default function Terms() {
  return (
    <div className="container-xl py-16">
      <h1 className="h1">Salgs- og leveringsbetingelser</h1>
      <div className="mt-8 grid gap-6 max-w-3xl text-[15px] leading-7 text-[var(--ink-2)]">
        <section>
          <h2 className="h3 text-white">1. Indledning</h2>
          <p>
            Ved køb/adgang accepterer du disse betingelser. Materiale udgives
            digitalt af Value Profits System (VPS). Ikke finansiel rådgivning.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">2. Definitioner</h2>
          <p>
            “Kunden” er køber/licenstager. “Ydelser” er leverancer fra VPS.
            “Platform” er VPS og relaterede systemer.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">3. Anvendelse</h2>
          <p>
            Adgang er personlig og må ikke deles/videresælges. Misbrug kan
            medføre lukning uden refusion.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">4. Levering</h2>
          <p>
            Digital levering efter køb/tilmelding. Nedetid kan forekomme.
            Tidsfrister kun hvis skriftligt aftalt.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">5. Betaling</h2>
          <ul className="list-disc pl-5">
            <li>
              Forfalder ved bestilling. Manglende betaling kan spærre adgang.
            </li>
            <li>
              Abonnement fornyes efter periode medmindre opsagt rettidigt.
            </li>
            <li>
              Ratebetaling: alle rater skal betales; misligholdelse kan
              inddrives og adgang lukkes.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="h3 text-white">6. Brug af ydelser</h2>
          <ul className="list-disc pl-5">
            <li>
              Kun til eget brug. Videredistribution og salg af
              signaler/strategier er ikke tilladt.
            </li>
            <li>Brug sker på eget ansvar; VPS er ikke ansvarlig for tab.</li>
          </ul>
        </section>
        <section>
          <h2 className="h3 text-white">7. Reklamation</h2>
          <p>
            Fejl skal meddeles uden ugrundet ophold. Refusion for digitalt
            indhold kun hvis påkrævet i ufravigelig lov.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">8. Ansvar</h2>
          <p>
            Ansvar er begrænset til direkte tab, maks. 40.000 kr. pr. forhold.
            Indirekte tab erstattes ikke.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">9. Misligholdelse</h2>
          <p>
            Væsentlig misligholdelse giver VPS ret til at ophæve med
            øjeblikkelig virkning.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">10. Force majeure</h2>
          <p>Parter er ikke ansvarlige for forhold uden for deres kontrol.</p>
        </section>
        <section>
          <h2 className="h3 text-white">11. Immaterielle rettigheder</h2>
          <p>
            Alt materiale tilhører VPS. Kopiering eller deling uden skriftlig
            tilladelse er forbudt.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">12. Lovvalg og værneting</h2>
          <p>
            Dansk ret. Tvister ved Københavns Byret som 1. instans, medmindre
            ufravigelig ret bestemmer andet.
          </p>
        </section>
      </div>
    </div>
  );
}
