import React from "react";

/**
 * Terms & Conditions component for The Value Profits System (VPS)
 * - Pure presentational component
 * - Tailwind-first styling
 * - Semantic sections with anchors for deep-linking
 */
export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl p-6 leading-relaxed text-slate-900 dark:text-slate-100">
      <header className="mb-8 space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">
          SALGS- OG LEVERINGSBETINGELSER
        </h1>
      </header>

      {/* 1. Indledning */}
      <section id="indledning" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">1. INDLEDNING</h2>
        <p className="mb-4">
          Det er vigtigt for mig, Asger Lindorff Leerskov, manden bag VPS, at
          skabe gennemsigtighed, når du køber mit kursus.
        </p>
        <p className="mb-4">
          Jeg vil derfor på det kraftigste anbefale dig, at du læser
          betingelserne nøje igennem. Hvis du måtte have nogle spørgsmål eller
          der er nogle indholdspunkter, du ikke er enig i, så kontakt mig på
          <a
            className="mx-1 underline"
            href="mailto:asger@valueprofitssystem.dk"
          >
            asger@valueprofitssystem.dk
          </a>
        </p>
        <p className="mb-4">
          Du køber kurset af min virksomhed The Value Profits System, hvor jeg
          blandt andet tilbyder Kurset.
        </p>
        <p className="mb-4">
          Kurset er skabt med udgangspunkt i de erfaringer, mit team og jeg har
          tillært os igennem de sidste år og er inspiration til, hvordan du kan
          komme i gang med at afholde succesfulde online events.
        </p>
        <p className="mb-4">
          Det er alene dig, der har købt adgang til kurset, der må benytte dig
          af dette. Du forpligter dig til, at du ikke på nogen måde må dele
          videoermateriale, skabeloner, hjælperedskaber, eller andet, der er
          kommet dig til hænde grundet din kursusadgang.
        </p>
      </section>

      {/* 2. Definitioner */}
      <section id="definitioner" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">2. DEFINITIONER</h2>
        <p className="mb-4">
          Følgende definitioner anvendes i disse salgs- og leveringsbetingelser:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            ‘’Kunden’’ definerer den person, der indgår køb af Kursusydelsen med
            VPS.
          </li>
          <li>
            "VPS" betyder The Value Profits System, indregistreret i Danmark.
          </li>
          <li>'Parterne'’ betyder The Value Profits System og Kunden.</li>
          <li>
            'Kursusydelsen'’ er et kursus og fælleskab om value betting. The
            Value Profits System tilbyder Kunden. Kurset består af
            videomateriale skabeloner, Live-sessions og et eksklusivt medlemskab
            i et community.
          </li>
          <li>
            ‘’Betingelserne’’ betyder disse salgs- og leveringsbetingelser.
          </li>
        </ul>
      </section>

      {/* 3. Anvendelse */}
      <section id="anvendelse" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">3. ANVENDELSE</h2>
        <p className="mb-4">
          Betingelserne finder anvendelse på alle leverancer af Kursusydelsen,
          som udføres af VPS
        </p>
        <p className="mb-4">
          Ved køb af Kursusydelsen erklærer Kunden sig enig i disse betingelser.
        </p>
        <p className="mb-4">
          VPS er berettiget til at ændre Betingelserne med minimum en måneds
          skriftligt varsel. Herefter vil de korrigerede Betingelser finde
          anvendelse på alle Kursusydelser, der leveres efter fristens udløb.
        </p>
      </section>

      {/* 4. Levering */}
      <section id="levering" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">4. LEVERING</h2>
        <p className="mb-4">
          VPS opfylder levering af den aftalte Kursusydelse til den tid, der
          fremgår ved bestilling af Kursusydelsen, forudsat at betaling er sket
          i henhold til punkt 5.
        </p>
        <p className="mb-4">
          Såfremt VPS ikke kan opfylde til aftalt tid, oplyser VPS overfor
          Kunden, hvad årsagen er til forsinket opfyldelse samt hvornår,
          opfyldelse kan forventes.
        </p>
        <p className="mb-4">
          Kursusydelsen leveres ved adgang til platformen, Skool, hvorfra Kunden
          kan tilgå Kursusydelsen. VPS garanterer alene, at Kursusydelsen er
          tilgængelig via Skool i 12 måneder fra levering af Kursusydelsen.
        </p>
      </section>

      {/* 5. Betaling */}
      <section id="betaling" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">5. BETALING</h2>
        <p className="mb-4">
          Prisen på Kursusydelsen er den af VPS anførte pris ved bestilling
          medmindre VPS skriftligt har meddelt andet.
        </p>
        <p className="mb-4">
          Betaling skal ske forud for levering i henhold til punkt 4.
        </p>
        <p className="mb-4">
          Betaling anses for gennemført, når pengene er tilgængelige på den af
          VPS anførte konto.
        </p>
        <p className="mb-4">
          Kunden er ikke berettiget til at foretage fradrag, modregning eller
          modkrav i betaling, medmindre det forud skriftligt er accepteret af
          VPS.
        </p>
        <p className="mb-4">
          Hvis Kunden vælger at betale i rater, og abonnementet oprettes mellem
          den 1. og 15. i måneden, vil den næste betaling automatisk blive
          rykket til den sidste bankdag i måneden.
        </p>
        <p className="mb-4">Købet er bindende.</p>
        <p className="mb-4">
          Fortrydelsesretten bortfalder, når levering er påbegyndt – fx ved
          adgang til kursusindhold, fællesskabsgrupper eller modtagelse af
          aktive bets – jf. Forbrugeraftaleloven § 18, stk. 2, nr. 13.
        </p>
        <p className="mb-4">
          Ved ratebetaling ydes ingen refusion, da adgang gives med det samme.
        </p>
        <p className="mb-4">
          Ved fuld betaling gælder 14 dages fortrydelsesret, dog kun hvis under
          50 % af indholdet er tilgået og der ikke er taget første bet.
        </p>
      </section>

      {/* 6. Brug af kursusydelserne */}
      <section id="brug" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">
          6. BRUG AF KURSUSYDELSERNE
        </h2>
        <p className="mb-4">
          Kursusydelsen er personlig, og det er alene Kunden, som opnår adgang
          til kurset, der må gennemføre kurset. Kunden forpligter sig samtidig
          til ikke på nogen vis at uddele materiale eller lignende til personer,
          som ikke har købt Kursusydelsen. Ved brud på denne bestemmelse har VPS
          ret til at kræve en konventionalbod på op mod 40.000 kr. pr.
          uberettiget adgang. VPS har samtidig mulighed for at bortvise Kunden.
        </p>
        <p className="mb-4">
          Kunden må ikke overdrage eller ændre Kursusydelsens indhold,
          skabeloner og dokumenter på nogen vis, hverken på internettet eller i
          anden elektronisk form eller i trykte (papir-)udgaver andet end til
          deres egen interne proces eller med en forudgående skriftlig
          tilladelse fra VPS.
        </p>
        <p className="mb-2">
          Kunden opnår alene brugsret til Kursusydelsen i form af:
        </p>
        <ul className="list-inside list-disc space-y-2 mb-4">
          <li>
            Elektronisk lagring af det oprindelige indhold af Kursusydelsen til
            eget private brug.
          </li>
          <li>
            Udskrivning af det oprindelige indhold af Kursusydelsen til eget
            private brug.
          </li>
          <li>Anvende/ændre Kursusydelsens skabeloner til eget privat brug.</li>
        </ul>
        <p className="mb-4">
          Ved brud på bestemmelserne i dette punkt 6 har VPSret til at kræve en
          konventionalbod på 40.000 kr. pr. forhold. VPS har derudover ret til
          at kræve erstatning efter Dansk rets almindelige regler. Betaling af
          konventionalbod bringer ikke misligholdelsen til ophør.
        </p>
        <p className="mb-4">
          Kunden må ikke overdrage eller ændre Kursusydelsens indhold,
          skabeloner og dokumenter på nogen vis, hverken på internettet eller i
          anden elektronisk form eller i trykte (papir-)udgaver andet end til
          deres egen interne proces eller med en forudgående skriftlig
          tilladelse fra VPS.
        </p>
        <p className="mb-4">
          Det understreges, at kopiering, redigering eller videredistribution af
          Kursusydelsen, herunder men ikke begrænset til videoindhold,
          skabeloner og materialer, i enhver form uden forudgående skriftlig
          tilladelse fra VPS, er en grov overtrædelse af immaterielle
          rettigheder. En sådan handling vil medføre krav om erstatning og VPS
          forbeholder sig retten til at tage retslige skridt i henhold til dansk
          lovgivning.
        </p>
      </section>

      {/* 7. Reklamation */}
      <section id="reklamation" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">7. REKLAMATION</h2>
        <p className="mb-4">
          Såfremt Kunden opdager en fejl ved Kursusydelsen, skal Kunden
          skriftligt reklamere uden ugrundet ophold.
        </p>
        <p className="mb-4">
          Såfremt Kunden ikke reklamerer uden ugrundet ophold efter at have
          opdaget en sådan uoverensstemmelse, fortaber Kunden sin ret til at
          gøre misligholdelsesbeføjelser og/eller erstatning gældende.
        </p>
        <p>
          Retten til reklamation bortfalder 90 dage efter modtagelse af
          Kursusydelsen.
        </p>
      </section>

      {/* 8. Erstatning og ansvar */}
      <section id="ansvar" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">8. ERSTATNING OG ANSVAR</h2>
        <p className="mb-4">
          VPS er erstatningsansvarlig efter dansk rets almindelige principper
          herom, dog med de nedenfor anførte præciseringer og begrænsninger.
        </p>
        <p className="mb-4">
          Alle cases og eksempler er til inspiration og kan ikke betragtes som
          garanti for resultater.
        </p>
        <p className="mb-4">
          VPS fraskriver sig ansvar for økonomiske beslutninger, tab eller
          konsekvenser som følge af brug af kurset på anden vis end anvist.
        </p>
        <p className="mb-4">
          Hvis kunden følger systemet 100 % i henhold til anvisningerne,
          dokumenteret gennem korrekt brug af trackingark samt bevægelser på
          relevante konti, og efter minimum 90 dage og 900 gennemførte væddemål
          ikke har opnået profit, tilbagebetales hele kursusbeløbet.
        </p>
        <p className="mb-4">
          Dokumentation skal fremlægges senest 14 dage efter opfyldelse af
          betingelserne og være fuldstændig og gennemsigtig. VPS vurderer
          dokumentationens gyldighed.
        </p>
        <p className="mb-4">
          VPS er ikke ansvarlig for, at Kursusydelsen opfylder lovgivning eller
          standarder eller kan anvendes til konkrete formål.
        </p>
      </section>

      {/* 9. Misligholdelse */}
      <section id="misligholdelse" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">9. MISLIGHOLDELSE</h2>
        <p className="mb-4">
          Kunden kan alene gøre forsinkelse gældende som misligholdelse i
          overensstemmelse med punkt 4.3.
        </p>
        <p className="mb-4">
          Såfremt Kunden opdager en mangel ved de leverede ydelser, har VPS fuld
          afhjælpningsret.
        </p>
        <p>
          Såfremt en mangel ikke kan afhjælpes, kan Kunden, hvis reklamation
          sker i overensstemmelse med punkt 6, kræve forholdsmæssigt afslag.
        </p>
      </section>

      {/* 10. Force majeure */}
      <section id="force-majeure" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">10. FORCE MAJEURE</h2>
        <p className="mb-4">
          VPS kan ikke holdes ansvarlig for manglende opfyldelse som følge af
          omstændigheder, der ikke er underlagt VPS kontrol. Forekomst af
          sådanne hændelser fritager VPS for ansvar for skader, straf eller
          andre kontraktsretlige sanktioner. Sådanne hændelser inkluderer, men
          er ikke begrænset til, strejker, lock-out, boykots, sabotage,
          arbejdskonflikter, driftsafbrydelser, eksplosion, brand,
          naturkatastrofer, offentlige restriktioner fra nationale eller
          udenlandske autoriteter, konfiskation, handelsforbud, valuta
          restriktioner, manglende transport, veterinære sygdomme, hærværk,
          terror, miljøforanstaltninger, pandemier, krig og mangelfulde eller
          forsinkede leverancer fra underleverandører.
        </p>
      </section>

      {/* 11. Immaterielle rettigheder */}
      <section id="ipr" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">
          11. IMMATERIELLE RETTIGHEDER
        </h2>
        <p>
          Ejendomsretten og de immaterielle rettigheder til Kursusydelsen,
          herunder retten til alle igangværende Kursusydelser herunder ideer,
          designs, teknikker mv. tilhører ubetinget VPS
        </p>
      </section>

      {/* 12. Lovvalg og værneting */}
      <section id="lovvalg" className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">12. LOVVALG OG VÆRNETING</h2>
        <p>
          Betingelserne er underlagt dansk ret og fortolkes i overensstemmelse
          hermed. Tvister af enhver art i henhold til nærværende kontrakt skal
          afgøres ved Byretten som første instans.
        </p>
      </section>
    </div>
  );
}
