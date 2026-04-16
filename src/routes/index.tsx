import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import ablaufImg from "@/assets/ablauf-bg.jpg";
import diagnostikImg from "@/assets/diagnostik.jpg";
import portraitImage from "@/assets/romina-portrait.jpg";
import massageBg from "@/assets/massage-bg.jpg";
import ernaehrungBg from "@/assets/ernaehrung-bg.jpg";
import schroepfenBg from "@/assets/schroepfen-bg.jpg";
import pflanzenheilkundeBg from "@/assets/pflanzenheilkunde-bg.jpg";
import fussreflexzonenBg from "@/assets/fussreflexzonen-bg.jpg";
import dorntherapieBg from "@/assets/dorntherapie-bg.jpg";
import blutegeltherapieBg from "@/assets/blutegeltherapie-bg.jpg";
import entgiftungBg from "@/assets/entgiftung-bg.jpg";
import darmsanierungBg from "@/assets/darmsanierung-bg.jpg";
import hormonberatungBg from "@/assets/hormonberatung-bg.jpg";
import vitalstoffberatungBg from "@/assets/vitalstoffberatung-bg.jpg";
import ohrreflextherapieBg from "@/assets/ohrreflextherapie-bg.jpg";
import schmerztherapieBg from "@/assets/schmerztherapie-bg.jpg";
import baunscheidtierenBg from "@/assets/baunscheidtieren-bg.jpg";
import laboranalysenBg from "@/assets/laboranalysen-bg.jpg";
import farfallaLogo from "@/assets/logos/farfalla.png";
import kingnatureLogo from "@/assets/logos/kingnature.png";
import sundayLogo from "@/assets/logos/sunday.png";
import zimmerliLogo from "@/assets/logos/zimmerli.jpg";
import mrsfluryLogo from "@/assets/logos/mrsflury.png";
import omnibioticLogo from "@/assets/logos/omnibiotic.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praxis RBT — Naturheilkunde TEN & Manuelle Therapien in Dübendorf" },
      { name: "description", content: "Praxis für manuelle Therapien & Naturheilkunde TEN von Romina Bertoletti Thoma in Dübendorf. Massage, Schröpfen, Phytotherapie, Ernährungsberatung und mehr." },
      { property: "og:title", content: "Praxis RBT — Naturheilkunde TEN in Dübendorf" },
      { property: "og:description", content: "Ganzheitliche Naturheilkunde TEN & manuelle Therapien in Dübendorf." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Massage",
    desc: "Klassische Massage bei Muskelverspannungen und Belastungen des Alltags.",
    detail: "Die klassische Massage ist die traditionellste und am meisten angewandte Massageform. Sie geht hauptsächlich auf die Belastungen des Alltags ein. Sie wirkt wunderbar bei Muskelverspannungen und deren Auswirkungen auf den gesamten Bewegungsapparat. Durch die in der Regel als entspannend empfundene Massage, ist auch ein positiver Einfluss auf die Psyche zu beobachten.",
    bg: massageBg,
  },
  {
    title: "Ernährungsberatung",
    desc: "Pflanzenbasierte Ernährungsberatung und Optimierung deiner Essgewohnheiten.",
    detail: "Um funktionieren zu können, braucht unser Körper Nährstoffe – Makronährstoffe wie Fette, Eiweisse und Kohlenhydrate sowie Mikronährstoffe wie Vitamine, Mineralstoffe, Spurenelemente und sekundäre Pflanzenstoffe. In meiner Ernährungsberatung schauen wir uns deine Essgewohnheiten an und besprechen anhand deiner Ziele, was und wie du diese optimieren kannst.",
    bg: ernaehrungBg,
  },
  {
    title: "Pflanzenheilkunde",
    desc: "Tinkturen, Tees und pulverisierte Pflanzenteile, individuell abgestimmt.",
    detail: "«Gegen jede Krankheit ist ein Kraut gewachsen» – Seit Jahrhunderten ist die Pflanzenheilkunde Teil der Therapien auf der ganzen Welt. Tinkturen, Tees und pulverisierte Pflanzenteile sind oft Teil meines individuell auf dich abgestimmten Therapiekonzepts.",
    bg: pflanzenheilkundeBg,
  },
  {
    title: "Schröpfen",
    desc: "Einfluss auf innere Organe über Reflexzonen, Linderung bei Schmerzen.",
    detail: "Beim Schröpfen kann ich über die Reflexzonen des Rückens auf innere Organe Einfluss nehmen und diese unterstützen. Ausserdem kann direkt an Ort bei Schmerzen, Entzündungen, minder-und über- Durchblutung, Linderung verschafft werden. Die Schröpfkopfmassage lockert das Gewebe, regt die Durchblutung und den Stoffwechsel an.",
    bg: schroepfenBg,
  },
  {
    title: "Fussreflexzonen",
    desc: "Aktivierung der Selbstheilungskräfte über die Reflexzonen am Fuss.",
    detail: "Über die Reflexzonen am Fuss werden die Organe angeregt oder beruhigt. Die Selbstheilungskräfte werden aktiviert, der Lymphfluss und die Durchblutung angeregt. Bei Schlafstörungen, Kopfschmerzen, Verdauungsproblemen, Menstruationsbeschwerden und mehr.",
    bg: fussreflexzonenBg,
  },
  {
    title: "Dorntherapie",
    desc: "Sanfte Methode zur Entlastung von Nervenbahnen und Energiebahnen.",
    detail: "Mit dieser sanften Methode werden Nervenbahnen entlastet und die Meridiane positiv beeinflusst. Diese Therapieform gilt als Gesundheitsvorsorge und als Anleitung zur Selbsthilfe – die Selbsthilfeübungen sind das Kernstück dieser Methode.",
    bg: dorntherapieBg,
  },
  {
    title: "Entgiftung",
    desc: "Begleitung durch ein Entgiftungsprogramm zur Ausscheidung von Giftstoffen.",
    detail: "Eine Entgiftungskur hilft dem Körper Giftstoffe wie Pestizide, Geschmacksverstärker, Farb- und Konservierungsstoffe, Umweltgifte, Schwermetalle, Medikamente und Genussmittel aus dem Körper auszuscheiden. Gerne begleite ich dich durch diesen Prozess mit meinem Entgiftungsprogramm.",
    bg: entgiftungBg,
  },
  {
    title: "Darmsanierung",
    desc: "Aufbau eines gesunden Darmmikrobioms in mehreren Phasen.",
    detail: "Für mich eine der effektivsten Methoden um gute Voraussetzungen zu schaffen für jegliche Therapien und Ernährungsumstellungen. Die Darmsanierung läuft in mehreren Phasen ab: Entgiftung, Bekämpfung von Pilzen und Parasiten, Unverträglichkeiten ausfindig machen und das Darmmikrobiom stärken.",
    bg: darmsanierungBg,
  },
  {
    title: "Hormonberatung",
    desc: "Ermittlung des Hormonhaushalts anhand Fragebogen und Speicheltest.",
    detail: "Sind ein Ungleichgewicht der Hormone verantwortlich für deine Beschwerden? Anhand eines Fragebogens und bei Bedarf einem Speicheltest, welcher bequem zu Hause durchgeführt werden kann, wird ermittelt wie es um deinen Hormonhaushalt steht.",
    bg: hormonberatungBg,
  },
  {
    title: "Vitalstoffberatung",
    desc: "Gezielte Empfehlung von Vitaminen und Mineralstoffen zur Unterstützung.",
    detail: "Prinzipiell sollte unser Körper in der Lage sein, Nährstoffe aus unserer Nahrung aufzunehmen und zu verwerten. Ich empfehle Vitalstoffe wenn durch die Ernährung nicht alles abgedeckt wird, in speziellen Lebensphasen oder je nach Alter und Jahreszeit zur Unterstützung.",
    bg: vitalstoffberatungBg,
  },
  {
    title: "Ohrreflextherapie",
    desc: "Therapie über Reflexpunkte am Ohr zur Unterstützung der Heilung.",
    detail: "Diverse Reflexpunkte am Ohr sind im Falle einer Störung im korrespondierenden Körpergebiet aktiv und nachweisbar. Mit einem Metallstäbchen werden diese Punkte gesucht und therapiert. Ich wende diese Behandlung oft in Kombination mit anderen Therapien an, da sie wunderbar unterstützend wirkt.",
    bg: ohrreflextherapieBg,
  },
  {
    title: "Manuelle Schmerztherapie",
    desc: "Gezielte manuelle Techniken zur Linderung von Schmerzen im Bewegungsapparat.",
    detail: "Mit dieser Methode werden durch eine manuelle Drucktechnik, Fehlspannungen abgebaut und bestenfalls aufgelöst. Um die Schmerzlinderung zu unterstützen, zeige ich dir gezielte Übungen für zu Hause",
    bg: schmerztherapieBg,
  },
  {
    title: "Baunscheidtieren",
    desc: "Alte Therapiemethode zur Mobilisierung der Selbstheilungskräfte über die Haut.",
    detail: 'Bei dieser alten Therapiemethode wird mit einem Nadelkopf die Haut angeraut und ein reizendes Öl aufgetragen. Es entsteht ein Ausschlag welcher dazu führt die volle Energie in diesen Körperbereich zu bringen und so die Selbstheilungskräfte zu mobilisieren.',
    bg: baunscheidtierenBg,
  },
  {
    title: "Blutegeltherapie",
    desc: "Einsatz bei Venenleiden, Arthrosen und Sehnenscheidenentzündungen.",
    detail: "Die Blutegeltherapie kann bei sehr vielen Krankheitsbildern eingesetzt werden zum Beispiel bei Erkrankungen des Venensystems, Infektionskrankheiten, Hypertonie oder bei einem Gichtanfall. Durch Studien belegte Indikation sind Arthrosen der Knie und der Daumensattelgelenke sowie Sehnenscheidenentzündungen.",
    bg: blutegeltherapieBg,
  },
  {
    title: "Laboranalysen",
    desc: "Auswertung von Laborwerten zur genauen Bestimmung von Mängeln und Unverträglichkeiten.",
    detail: "Viele Erkrankungen lassen sich mithilfe der Labordiagnostik sehr sicher erkennen. Daher ergänze ich deine Anamnese bei Bedarf durch eine Laboruntersuchung. Dazu arbeite ich eng mit dem Labor Ortho-Analytic AG zusammen.",
    bg: laboranalysenBg,
  },
];

const ablaufSteps = [
  { number: "01", title: "Erstgespräch", description: "Bei einem ausführlichen Erstgespräch schauen wir uns gemeinsam deine Krankheitsgeschichte an. Dabei geht es nicht nur um die aktuellen Beschwerden, sondern um eine ganzheitliche Erfassung von dir als Person. Wir besprechen deine Therapieziele und was in der aktuellen Situation umsetzbar ist." },
  { number: "02", title: "Diagnostik", description: "Anhand einer Zungen-, Puls- und Irisdiagnose ermittle ich deine Konstitution, welche in den Therapieplan miteinbezogen wird. Bei Bedarf kann eine externe Labordiagnostik durchgeführt werden." },
  { number: "03", title: "Therapieplan", description: "Nachdem ich deinen persönlichen Therapieplan erstellt habe, besprechen wir diesen gemeinsam und vereinbaren dementsprechende Termine." },
  { number: "04", title: "Behandlung", description: "Die Therapie umfasst manuelle Behandlungen, pflanzliche Arzneimittel und ausleitende Verfahren – individuell auf dich abgestimmt. Stundenansatz: Fr. 147.00." },
  { number: "05", title: "Begleitung", description: "Ich begleite dich während des gesamten Heilungsprozesses. Regelmässige Kontrollen stellen sicher, dass die Therapie optimal wirkt." },
];

const diagnostikMethods = [
  { title: "Zungendiagnostik", description: "Form, Farbe und Belag der Zunge geben Aufschluss über den Zustand der Verdauungsorgane, Stoffwechselprozesse und die allgemeine Vitalität." },
  { title: "Pulsdiagnostik", description: "Der Puls verrät viel über den Zustand des Herz-Kreislauf-Systems und die energetische Situation des Körpers nach TEN-Prinzipien." },
  { title: "Irisdiagnostik", description: "Die Iris zeigt die angeborene Konstitution und erworbene Belastungen. Diese Methode hilft, Schwachstellen im Organismus frühzeitig zu erkennen." },
  { title: "Antlitzdiagnostik", description: "Das Gesicht spiegelt den inneren Zustand des Körpers. Durch gezielte Beobachtung lassen sich Hinweise auf Organbelastungen und Konstitutionstypen erkennen." },
  { title: "Labordiagnostik", description: "Bei Bedarf kann eine externe Labordiagnostik durchgeführt werden, um ein noch umfassenderes Bild deines Gesundheitszustands zu erhalten." },
];

function HomePage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 -top-40">
          <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/60" />
          <span className="absolute bottom-3 right-6 text-foreground/60 italic z-10 flex items-baseline gap-1.5" style={{ fontFamily: "'Dancing Script', cursive" }}>
            <span className="text-lg md:text-xl">Sonnenberg am</span>
            <span className="text-sm">28.11.2025</span>
          </span>
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-20 md:pb-32">
          <div className="flex justify-center">
            <div className="animate-fade-in-up-delay-2 flex flex-wrap gap-4 justify-center">
              <a
                href="#kontakt"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Termin vereinbaren
              </a>
              <Link
                to="/shop"
                className="inline-flex items-center rounded-lg border border-border bg-card/80 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-card"
              >
                Shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Angebot */}
      <section id="angebot" className="section-padding scroll-mt-48">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-3xl font-semibold text-foreground md:text-4xl mb-12">
            Angebot
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="relative aspect-square w-full"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center overflow-hidden bg-card shadow-sm border border-border rounded-full p-6 transition-opacity duration-300 ${
                    hoveredIndex === i ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  {s.bg && (
                    <>
                      <img src={s.bg} alt="" className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-background/70" />
                    </>
                  )}
                  <h3 className="relative font-heading text-2xl font-semibold text-foreground">{s.title}</h3>
                </div>
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center rounded-xl bg-primary/10 border border-primary/30 p-6 transition-opacity duration-300 ${
                    hoveredIndex === i ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                  <div className="overflow-y-auto max-h-[70%] w-full">
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Abrechnung */}
      <section id="abrechnung" className="section-padding bg-secondary/50 scroll-mt-48">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl mb-6">
            Abrechnung
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Stundenansatz für manuelle Therapien & Naturheilkunde: <strong className="text-foreground">Fr. 147.00</strong>
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Bei nicht erscheinen oder Absage des Termins weniger als 24h vorher, wird der Behandlungspreis in Rechnung gestellt.
          </p>
          <h3 className="font-heading text-2xl font-semibold text-foreground md:text-3xl mt-12">
            Zusatzversicherung
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ich bin beim EMR unter der ZSR Nr. M100663 registriert. Bitte erkundige dich im Voraus 
            bei deinem Krankenversicherer, ob die Behandlung von der Zusatzversicherung übernommen wird. 
            Jeder Krankenversicherer vergütet ausschliesslich Behandlungen gemäss seinem Leistungskatalog.
          </p>
          <a
            href="https://emr.ch/therapeut/romina.bertoletti.thoma"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
          >
            EMR-Profil ansehen →
          </a>
        </div>
      </section>

      {/* Rabattcodes */}
      <section id="rabattcodes" className="section-padding scroll-mt-48">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl mb-6">
            Rabattcodes
          </h2>
          <div className="text-muted-foreground leading-relaxed mb-12">
            <p>
              Bestellungen der folgenden Produkte, werden ab einem Mindestbestellwert von <strong className="text-foreground">Fr. 70.00</strong>, portofrei an eine Adresse in der Schweiz geliefert.
            </p>
            <p className="mt-2">Die Zustellung erfolgt in der Regel, innerhalb von 4-6 Arbeitstagen.</p>
            <p className="mt-2">
              Für Bestellungen unter diesem Betrag, fallen Versandkosten von <strong className="text-foreground">Fr. 8.50</strong> an.
            </p>
          </div>

          {/* Farfalla */}
          <div className="mb-12">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3 text-center">Pflegeprodukte, Ätherische Öle und mehr...</h3>
            <div className="flex justify-center mb-4">
              <img src={farfallaLogo} alt="Farfalla" className="h-12 object-contain mix-blend-multiply dark:mix-blend-screen dark:invert" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.farfalla.ch/de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.farfalla.ch/de/</a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
          </div>

          {/* Kingnature */}
          <div className="mb-12">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3 text-center">Vitalstoffe und mehr...</h3>
            <div className="flex justify-center mb-4">
              <img src={kingnatureLogo} alt="Kingnature" className="h-20 object-contain" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.kingnature.ch/?a=1646" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.kingnature.ch/</a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center mt-2">
              Möchtest du direkt bestellen, erhälst du mit dem Code <strong className="text-foreground">RBT10</strong>, 10% auf deine ERSTE Bestellung.
            </p>
          </div>

          {/* Sunday Natural */}
          <div className="mb-12">
            <div className="flex justify-center mb-4">
              <img src={sundayLogo} alt="Sunday Natural" className="h-20 object-contain" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.sunday.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.sunday.de/</a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center mt-2">
              Möchtest du direkt bestellen, gebe ich dir auf Anfrage einen Rabatt Code für deine ERSTE Bestellung.
            </p>
          </div>

          {/* Zimmerli */}
          <div className="mb-12">
            <div className="flex justify-center mb-4">
              <img src={zimmerliLogo} alt="Zimmerli Adaptogene" className="h-16 object-contain mix-blend-multiply dark:mix-blend-screen dark:invert" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3 text-center">Adaptogene Teemischungen, Pulver und Kapseln</h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.zimmerli-adaptogene.ch/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.zimmerli-adaptogene.ch/</a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center mt-2">
              Möchtest du direkt bestellen, erhälst du mit dem Code <strong className="text-foreground">RBT25</strong> 25% auf deine Bestellung.
            </p>
          </div>

          {/* Mrs. Flury */}
          <div className="mb-12">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3 text-center">Proteinpulver und mehr....</h3>
            <div className="flex justify-center mb-4">
              <img src={mrsfluryLogo} alt="Mrs. Flury" className="h-14 object-contain" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.mrsfluryshop.ch/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.mrsfluryshop.ch/</a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center mt-2">
              Möchtest du direkt bestellen, erhälst du mit dem Code <strong className="text-foreground">RBT10</strong> 10% auf deine Bestellung.
            </p>
          </div>

          {/* Omni-Biotic */}
          <div className="mb-12">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3 text-center">Darmbakterien und mehr...</h3>
            <div className="flex justify-center mb-4">
              <img src={omnibioticLogo} alt="Omni-Biotic" className="h-24 object-contain mix-blend-multiply dark:mix-blend-screen dark:invert" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.verfora.ch/de/markenfamilien/omnibiotic/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">omnibiotic</a>{" / "}
              <a href="https://www.verfora.ch/de/markenfamilien/omni-logic/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">omni-logic</a>{" / "}
              <a href="https://www.verfora.ch/de/markenfamilien/caricol/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">caricol</a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="section-padding bg-secondary/50 scroll-mt-48">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <p className="text-muted-foreground text-lg leading-loose">
                Eidg. dipl. Naturheilpraktikerin TEN
                <br />Berufsmasseurin
                <br />Hormoncoach
                <br />Fachberaterin Darmgesundheit
                <br />Hautpflegespezialistin
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src={portraitImage}
                alt="Romina Bertoletti Thoma"
                className="w-64 h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="section-padding scroll-mt-48">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl font-semibold text-foreground md:text-5xl text-center">Kontakt</h2>
          <div className="mt-4 h-0.5 w-16 bg-primary mx-auto" />

          <div className="mt-12 space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed text-center">
                Praxis für manuelle Therapien & Naturheilkunde<br />
                Romina Bertoletti Thoma<br />
                Eidg. dipl. Naturheilpraktikerin TEN<br />
                Alte Gfennstrasse 86<br />
                8600 Dübendorf<br />
                <a href="tel:+41794531716" className="text-primary hover:underline">079 453 17 16</a><br />
                <a href="mailto:r.bertolettithoma@icloud.com" className="text-primary hover:underline">r.bertolettithoma@icloud.com</a>
              </p>
            </div>

            <div className="space-y-2 text-center">
              <p className="text-muted-foreground leading-relaxed">
                Ab Bahnhof Dübendorf mit dem Bus Nr. 752 Richtung Kunsteisbahn<br />
                Haltestelle Sonnenberg (3 Min. Fahrt)
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Oder mit dem Auto, Parkplatz direkt vor dem Haus
              </p>
            </div>

            <div className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.5!2d8.6236!3d47.3969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa7e2f3a3e8ed%3A0x0!2sAlte+Gfennstrasse+86%2C+8600+D%C3%BCbendorf!5e0!3m2!1sde!2sch!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Praxis RBT auf Google Maps"
              />
            </div>
          </div>

          <form className="mt-12 max-w-lg mx-auto space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem('name') as HTMLInputElement).value;
            const email = (form.elements.namedItem('email') as HTMLInputElement).value;
            const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
            const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
            const subject = `Kontaktanfrage von ${name}`;
            const body = `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\n\nNachricht:\n${message}`;
            window.location.href = `mailto:r.bertolettithoma@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input type="text" id="name" className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Dein Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">E-Mail</label>
              <input type="email" id="email" className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="ihre@email.ch" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Telefon</label>
              <input type="tel" id="phone" className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="079 123 45 67" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Nachricht</label>
              <textarea id="message" rows={4} className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Ihre Nachricht..." />
            </div>
            <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90">
              Nachricht senden
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
