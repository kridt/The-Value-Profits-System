import React from "react";

export default function Privacy() {
  return (
    <div className="container-xl py-16">
      <h1 className="h1">Privatlivspolitik</h1>
      <div className="mt-8 grid gap-6 max-w-3xl text-[15px] leading-7 text-[var(--ink-2)]">
        <section>
          <h2 className="h3 text-white">Introduktion</h2>
          <p>
            Når du benytter vores hjemmeside/tjenester, behandler vi
            personoplysninger. Her beskriver vi formål, retsgrundlag og dine
            rettigheder.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">Cookies</h2>
          <p>
            Vi bruger cookies til statistik, funktionalitet og markedsføring. Du
            kan til enhver tid ændre eller tilbagekalde samtykke.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">Hvilke data</h2>
          <p>
            Navn, e-mail, telefon, adresse, IP, enhed og brugsdata. Indsamles
            ved køb, kontaktformularer og brug af platformen.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">Formål</h2>
          <p>
            Levering af ydelser, support, sikkerhed, forbedring af tjenester og
            relevant markedsføring.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">Videregivelse</h2>
          <p>
            Til betroede databehandlere (hosting, analyse, betaling m.v.) efter
            aftale. Overførsel uden for EU/EØS kan ske med gyldigt
            overførselsgrundlag.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">Opbevaring</h2>
          <p>
            Data opbevares så længe nødvendigt for formålet eller lovkrav;
            typisk op til 12 måneder efter seneste aktivitet.
          </p>
        </section>
        <section>
          <h2 className="h3 text-white">Dine rettigheder</h2>
          <ul className="list-disc pl-5">
            <li>
              Indsigt, berigtigelse, sletning, begrænsning, dataportabilitet og
              indsigelse.
            </li>
            <li>Tilbagekald samtykke når som helst.</li>
          </ul>
        </section>
        <section>
          <h2 className="h3 text-white">Kontakt & klage</h2>
          <p>
            Kontakt os ved spørgsmål. Du kan klage til Datatilsynet – kontakt os
            gerne først.
          </p>
        </section>
      </div>
    </div>
  );
}
