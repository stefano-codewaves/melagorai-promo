import Image from "next/image";
import Link from "next/link";

import logo from "@/public/melagorai-logo.svg";
import backgroundImage from "@/public/melagorai-bg-2.jpeg";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-dvh relative">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover fixed"
        style={{ filter: "brightness(0.5)" }}
        priority
        quality={85}
      />

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="backdrop-blur-sm bg-white/95 rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20">
            <div className="flex justify-center mb-6">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Melagorai logo"
                  width={140}
                  height={56}
                  priority
                />
              </Link>
            </div>

            <h1 className="text-2xl font-semibold text-secondary mb-6 text-center">
              Privacy Policy
            </h1>

            <div className="space-y-4 text-secondary text-sm leading-relaxed">
              <p>
                MASO PATERNO S.r.l. (di seguito &quot;la Società&quot; o &quot;il
                Titolare&quot;), con sede legale a Trento (TN) in Via Innsbruck,
                43 (di seguito, &quot;Titolare&quot;), proprietario del sito
                internet https://melagorai.it/ (di seguito, il &quot;Sito&quot;),
                in qualità di titolare del trattamento dei dati personali degli
                utenti che navigano e che sono iscritti al Sito (di seguito, gli
                &quot;Utenti&quot;) fornisce qui di seguito l&apos;informativa
                privacy ai sensi dell&apos;art. 13 del D.Lgs. 196/2003 (di
                seguito, il &quot;Codice Privacy&quot;) e ai sensi dell&apos;art.
                13 del Regolamento UE 2016/679 del 27 aprile 2016 (di seguito,
                &quot;Regolamento&quot;, il Regolamento e il Codice Privacy sono
                insieme definiti &quot;Normativa Applicabile&quot;).
              </p>

              <p>
                Questo Sito e i servizi eventualmente offerti tramite il Sito
                sono riservati a soggetti che hanno compiuto il diciottesimo
                anno di età. Il Titolare non raccoglie quindi dati personali
                relativi ai soggetti minori di anni 18. Su richiesta degli
                Utenti, il Titolare cancellerà tempestivamente tutti i dati
                personali involontariamente raccolti e relativi a soggetti
                minori di anni 18.
              </p>

              <p>
                Il Titolare tiene nella massima considerazione il diritto alla
                privacy ed alla protezione dei dati personali dei propri Utenti.
                Per ogni informazione in relazione alla presente informativa
                privacy, gli Utenti possono contattare il Titolare in qualsiasi
                momento, utilizzando le seguenti modalità:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Inviando una raccomandata a/r alla sede legale del Titolare
                </li>
                <li>
                  Inviando un messaggio di posta elettronica all&apos;indirizzo{" "}
                  <a href="mailto:info@melagorai.it" className="text-primary hover:underline">info@melagorai.it</a>
                </li>
              </ul>

              <h2 className="text-lg font-semibold mt-6 mb-3">1. Finalità del trattamento</h2>

              <p>
                I dati personali degli Utenti saranno trattati lecitamente dal
                Titolare ai sensi dell&apos;art. 6 del Regolamento per le
                seguenti finalità di trattamento:
              </p>

              <p>
                <strong>a) navigazione del sito</strong>, in relazione alla
                possibilità di rilevare dati dell&apos;Utente necessari a
                livello tecnico, quali ad es. l&apos;indirizzo IP, durante la
                navigazione del sito.
              </p>

              <p>
                <strong>
                  b) obblighi contrattuali e fornitura del servizio
                </strong>{" "}
                in caso di acquisti on line, per dare esecuzione alle Condizioni
                generali di Vendita, che sono accettate dall&apos;Utente in fase
                di registrazione sul Sito e adempiere a specifiche richieste
                dell&apos;Utente. I dati dell&apos;utente raccolti dal Titolare
                ai fini dell&apos;eventuale registrazione sul Sito includono:
                Obbligatori: Email, Password, Nome, Cognome, Indirizzo di
                spedizione, Cap, Città, Provincia, Paese, Facoltativi: tutte le
                informazioni personali dell&apos;Utente eventualmente e
                volontariamente pubblicate. Salvo che l&apos;Utente dia al
                Titolare uno specifico e facoltativo consenso al trattamento dei
                propri dati per le ulteriori finalità previste ai successivi
                paragrafi, i dati personali dell&apos;Utente saranno utilizzati
                dal Titolare al fine esclusivo di accertare l&apos;identità
                dell&apos;Utente (anche tramite validazione dell&apos;indirizzo
                di posta elettronica), evitando così possibili truffe o abusi, e
                contattare l&apos;Utente per sole ragioni di servizio (es.
                inviare notifiche relative ai servizi offerti sul Sito). Fermo
                restando quanto previsto altrove in questa informativa privacy,
                in nessun caso il Titolare renderà accessibili agli altri Utenti
                e/o a terzi i dati personali degli Utenti.
              </p>

              <p>
                <strong>c) finalità amministrativo-contabili</strong>, ovvero
                per svolgere attività di natura organizzativa, amministrativa,
                finanziaria e contabile, quali attività organizzative interne ed
                attività funzionali all&apos;adempimento di obblighi
                contrattuali e precontrattuali;
              </p>

              <p>
                <strong>d) obblighi di legge</strong>, ovvero per adempiere ad
                obblighi previsti dalla legge, da un&apos;autorità, da un
                regolamento o dalla normativa europea.
              </p>

              <p>
                <strong>e) Consenso facoltativo marketing</strong>, per poter
                accedere a sconti riservati, offerte promozionali e di marketing
                diretto.
              </p>

              <p>
                Il conferimento dei dati personali per le finalità di
                trattamento sopra indicate è facoltativo ma necessario, poiché
                il mancato conferimento degli stessi comporterà
                l&apos;impossibilità per l&apos;Utente di navigare sul sito,
                iscriversi al Sito e usufruire dei servizi offerti dal Titolare
                sul Sito.
              </p>

              <p>
                <strong>f)</strong> Per dare seguito alla richiesta
                dell&apos;utente di avviso quando un prodotto torna ad essere
                disponibile, la raccolta dei dati personali è necessaria; il
                rifiuto di fornire tali dati personali comporterà
                l&apos;impossibilità di contattarla per avvisarla relativamente
                alla disponibilità dei prodotti. Il relativo trattamento non
                richiede il consenso dell&apos;interessato.
              </p>

              <h2 className="text-lg font-semibold mt-6 mb-3">
                2. Ulteriori finalità di trattamento: marketing e newsletter
              </h2>

              <p>
                Con il consenso libero e facoltativo dell&apos;Utente, alcuni
                dati personali dell&apos;Utente (ovvero il nome il cognome,
                l&apos;indirizzo email, l&apos;indirizzo completo di spedizione
                ecc..) potranno essere trattati dal Titolare anche per finalità
                di marketing e newsletter (invio di materiale pubblicitario,
                vendita diretta, comunicazione commerciale, invio di newsletter
                contenente informazioni in relazione a notizie rilevanti per il
                settore relativo alle attività del Sito), ovvero affinché il
                Titolare possa contattare l&apos;Utente tramite posta, posta
                elettronica, telefono (fisso e/o mobile, con sistemi
                automatizzati di chiamata o di comunicazione di chiamata con e/o
                senza l&apos;intervento di un operatore) e/o SMS offerti dallo
                stesso Titolare e/o da imprese terze, per proporre
                all&apos;Utente l&apos;acquisto di prodotti e/o servizi,
                presentare offerte, promozioni ed opportunità commerciali e per
                comunicare le novità provenienti dalle aziende del Gruppo
                Paterno. In caso di mancato consenso, la possibilità di
                iscriversi al Sito non sarà in alcun modo pregiudicata. In caso
                di consenso, l&apos;Utente potrà in qualsiasi momento revocare
                lo stesso, facendone richiesta al Titolare con le modalità
                indicate al successivo paragrafo 7. L&apos;iscrizione avverrà
                mediante &quot;double-opt-in&quot; con verifica
                dell&apos;indirizzo email dichiarato dall&apos;interessato.
              </p>

              <p>
                L&apos;Utente potrà inoltre opporsi facilmente ad ulteriori
                invii di comunicazioni promozionali e di newsletter via email
                anche cliccando sull&apos;apposito link per la revoca del
                consenso, che è presente in ciascuna email promozionale e di
                newsletter. Effettuata la revoca del consenso, il Titolare
                invierà all&apos;Utente un messaggio di posta elettronica per
                confermare l&apos;avvenuta revoca del consenso. Qualora
                l&apos;Utente intenda revocare il proprio consenso all&apos;invio
                di comunicazioni promozionali via telefono, continuando tuttavia
                a ricevere comunicazioni promozionali via email, o viceversa, si
                prega di inviare una richiesta al Titolare con le modalità
                indicate al successivo paragrafo 7.
              </p>

              <p>
                Il Titolare informa che, a seguito dell&apos;esercizio del
                diritto di opposizione all&apos;invio di comunicazioni
                promozionali e di newsletter via email, è possibile che, per
                ragioni tecniche ed operative (es. formazione delle liste di
                contatto già completata poco prima della ricezione da parte del
                Titolare della richiesta di opposizione) l&apos;Utente continui
                a ricevere alcuni ulteriori messaggi promozionali e di
                newsletter. Qualora l&apos;Utente dovesse continuare a ricevere
                messaggi promozionali e di newsletter dopo che siano trascorse
                24 ore dall&apos;esercizio del diritto di opposizione, si prega
                di segnalare il problema al Titolare, utilizzando i contatti
                indicati al successivo paragrafo 7.
              </p>

              <h2 className="text-lg font-semibold mt-6 mb-3">
                3. Modalità di trattamento e tempi di conservazione dei dati
              </h2>

              <p>
                Il Titolare tratterà i dati personali degli Utenti mediante
                strumenti manuali ed informatici, con logiche strettamente
                correlate alle finalità stesse e, comunque, in modo da garantire
                la sicurezza e la riservatezza dei dati stessi.
              </p>

              <p>
                I dati personali degli Utenti del Sito saranno conservati per i
                tempi strettamente necessari ad espletare le finalità primarie
                illustrate al precedente paragrafo 1, o comunque secondo quanto
                necessario per la tutela in sede civilistica degli interessi sia
                degli Utenti che del Titolare.
              </p>

              <p>
                Nei casi di cui al precedente paragrafo 3 i dati personali degli
                Utenti saranno conservati per i tempi strettamente necessari ad
                espletare le finalità illustrate negli stessi e, in ogni caso
                nei limiti di cui alla Normativa Applicabile.
              </p>

              <h2 className="text-lg font-semibold mt-6 mb-3">4. Base giuridica del trattamento</h2>

              <p>
                Con riferimento alle finalità di cui ai punti (1/a), la base
                giuridica del trattamento è infatti l&apos;esecuzione dei
                servizi forniti attraverso il Sito e da Lei richiesti (ai sensi
                dell&apos;articolo 6, comma 1, lett. b del Regolamento Privacy
                2016/679); con riferimento alle finalità facoltative di cui ai
                punti (1/e) del precedente paragrafo, la base giuridica del
                trattamento è il Suo eventuale consenso espresso liberamente (ai
                sensi dell&apos;articolo 6, comma 1, lett. a del Regolamento
                Privacy 2016/679); con riferimento alle finalità di cui ai punti
                (1/c e 1/d) del precedente paragrafo, la base giuridica del
                trattamento è di adempiere un obbligo legale al quale è soggetto
                il titolare del trattamento (ai sensi dell&apos;articolo 6,
                comma 1, lett. c del Regolamento Privacy 2016/679); con
                riferimento alle finalità di cui ai punti (1/b) del precedente
                paragrafo, la base giuridica del trattamento è l&apos;esecuzione
                di un contratto di cui l&apos;interessato è parte o
                all&apos;esecuzione di misure precontrattuali adottate su
                richiesta dello stesso (ai sensi dell&apos;articolo 6, comma 1,
                lett. b del Regolamento Privacy 2016/679).
              </p>

              <h2 className="text-lg font-semibold mt-6 mb-3">5. Ambito di comunicazione e diffusione dei dati</h2>

              <p>
                Potranno venire a conoscenza dei dati personali degli Utenti i
                dipendenti e/o collaboratori del Titolare incaricati di gestire
                il Sito. Tali soggetti, che sono formalmente nominati dal
                Titolare quali &quot;incaricati del trattamento&quot;,
                tratteranno i dati dell&apos;Utente esclusivamente per le
                finalità indicate nella presente informativa e nel rispetto
                delle previsioni della Normativa Applicabile.
              </p>

              <p>
                Potranno inoltre venire a conoscenza dei dati personali degli
                Utenti i soggetti terzi che potranno trattare dati personali per
                conto del Titolare in qualità di &quot;Responsabili Esterni del
                Trattamento&quot;, quali, a titolo esemplificativo, fornitori di
                servizi informatici e logistici funzionali all&apos;operatività
                del Sito, fornitori di servizi in outsourcing o cloud computing,
                professionisti e consulenti.
              </p>

              <p>
                Gli Utenti hanno il diritto di ottenere una lista degli
                eventuali responsabili del trattamento nominati dal Titolare,
                facendone richiesta al Titolare con le modalità indicate al
                successivo paragrafo 8.
              </p>

              <h2 className="text-lg font-semibold mt-6 mb-3">6. Diritti degli Interessati</h2>

              <p>
                Gli Utenti potranno esercitare i diritti garantiti loro dalla
                Normativa Applicabile, contattando il Titolare con le seguenti
                modalità:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Inviando una raccomandata a/r alla sede legale del Titolare
                </li>
                <li>
                  Inviando un messaggio di posta elettronica all&apos;indirizzo{" "}
                  <a href="mailto:info@melagorai.it" className="text-primary hover:underline">info@melagorai.it</a>
                </li>
              </ul>

              <p>
                Ai sensi della Normativa Applicabile, il Titolare informa che
                gli Utenti hanno il diritto di ottenere l&apos;indicazione (i)
                dell&apos;origine dei dati personali; (ii) delle finalità e
                modalità del trattamento; (iii) della logica applicata in caso
                di trattamento effettuato con l&apos;ausilio di strumenti
                elettronici; (iv) degli estremi identificativi del titolare e
                dei responsabili; (v) dei soggetti o delle categorie di soggetti
                ai quali i dati personali possono essere comunicati o che
                possono venirne a conoscenza in qualità di responsabili o
                incaricati.
              </p>

              <p>Inoltre, gli Utenti hanno il diritto di ottenere:</p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  a) l&apos;accesso, l&apos;aggiornamento, la rettificazione
                  ovvero, quando vi hanno interesse, l&apos;integrazione dei
                  dati;
                </li>
                <li>
                  b) la cancellazione, la trasformazione in forma anonima o il
                  blocco dei dati trattati in violazione di legge, compresi
                  quelli di cui non è necessaria la conservazione in relazione
                  agli scopi per i quali i dati sono stati raccolti o
                  successivamente trattati;
                </li>
                <li>
                  c) l&apos;attestazione che le operazioni di cui alle lettere
                  a) e b) sono state portate a conoscenza, anche per quanto
                  riguarda il loro contenuto, di coloro ai quali i dati sono
                  stati comunicati o diffusi, eccettuato il caso in cui tale
                  adempimento si rivela impossibile o comporta un impiego di
                  mezzi manifestamente sproporzionato rispetto al diritto
                  tutelato.
                </li>
              </ul>

              <p>Inoltre, gli Utenti hanno:</p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  a) il diritto di revocare il consenso in qualsiasi momento,
                  qualora il trattamento si basi sul loro consenso;
                </li>
                <li>
                  b) il diritto alla portabilità dei dati (diritto di ricevere
                  tutti i dati personali che li riguardano in un formato
                  strutturato, di uso comune e leggibile da dispositivo
                  automatico), il diritto alla limitazione del trattamento dei
                  dati personali e il diritto alla cancellazione (&quot;diritto
                  all&apos;oblio&quot;);
                </li>
                <li>
                  c) il diritto di opporsi:
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      i. in tutto o in parte, per motivi legittimi al
                      trattamento dei dati personali che li riguardano, ancorché
                      pertinenti allo scopo della raccolta;
                    </li>
                    <li>
                      ii. in tutto o in parte, al trattamento di dati personali
                      che li riguardano a fini di invio di materiale
                      pubblicitario o di vendita diretta o per il compimento di
                      ricerche di mercato o di comunicazione commerciale;
                    </li>
                    <li>
                      iii. qualora i dati personali siano trattati per finalità
                      di marketing diretto, in qualsiasi momento, al trattamento
                      dei loro dati effettuato per tale finalità, compresa la
                      profilazione nella misura in cui sia connessa a tale
                      marketing diretto.
                    </li>
                  </ul>
                </li>
                <li>
                  d) qualora ritenessero che il trattamento che li riguarda
                  violi il Regolamento, il diritto di proporre reclamo a
                  un&apos;Autorità di controllo (nello Stato membro in cui
                  risiedono abitualmente, in quello in cui lavorano oppure in
                  quello in cui si è verificata la presunta violazione). Il
                  Responsabile della Protezione dei Dati (RPD) è raggiungibile
                  al seguente indirizzo: Via Innsbruck, 43 - 38121 - Trento (TN)
                  (sede operativa), ed alla mail{" "}
                  <a href="mailto:dpo@gruppopaterno.it" className="text-primary hover:underline">dpo@gruppopaterno.it</a>.
                </li>
              </ul>

              <p>
                L&apos;Autorità Garante per la Protezione dei Dati Personali ha
                le seguenti coordinate:
              </p>

              <p>
                <strong>
                  Garante per la Protezione dei Dati Personali – Roma
                </strong>
                <br />
                Sito web:{" "}
                <a
                  href="https://www.garanteprivacy.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.garanteprivacy.it/
                </a>
                <br />
                Fax: (+39) 06.69677.3785
                <br />
                Centralino telefonico: (+39) 06.69677.1
                <br />
                E-mail:{" "}
                <a href="mailto:garante@gpdp.it" className="text-primary hover:underline">garante@gpdp.it</a>
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-block py-2 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-300"
              >
                Torna alla registrazione
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
