import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import methodenImg from "@/assets/methoden.jpg";
import ernaehrungBg from "@/assets/ernaehrung-bg.jpg";
import massageBg from "@/assets/massage-bg.jpg";
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

export const Route = createFileRoute("/methoden")({
  head: () => ({
    meta: [
      { title: "Angebot — Praxis RBT Dübendorf" },
      { name: "description", content: "Massage, Schröpfen, Blutegeltherapie, Dorntherapie, Pflanzenheilkunde, Ernährungsberatung und weitere Naturheilkunde-Methoden." },
      { property: "og:title", content: "Behandlungsangebot — Praxis RBT" },
      { property: "og:description", content: "Alle Therapiemethoden der Praxis RBT in Dübendorf." },
    ],
  }),
  component: MethodenPage,
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
    detail: "Beim Schröpfen kann ich über die Reflexzonen des Rückens auf innere Organe Einfluss nehmen. Ausserdem kann direkt bei Schmerzen, Entzündungen und Durchblutungsstörungen Linderung verschafft werden. Die Schröpfkopfmassage lockert das Gewebe und regt den Stoffwechsel an.",
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
    detail: "Prinzipiell sollte unser Körper in der Lage sein, Nährstoffe aus unserer Nahrung aufzunehmen und zu verwerten. Ich empfehle Vitalstoffe wenn durch die Ernährung nicht alles abgedeckt wird, in speziellen Lebensphasen oder je nach Alter und Jahreszeit zur Unterstützung. Eine Ausnahme mache ich beim Vitamin D3 welches ich als Dauereinnahme empfehle und Vitamin B12 welches bei vegetarischer und veganer Ernährung immer substituiert werden sollte. Über Produkte und Einnahmeempfehlung, berate ich dich gerne",
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
    detail: "Bei dieser alten Therapiemethode wird die Haut angeraut und ein reizendes Öl aufgetragen. Es entsteht ein Ausschlag, welcher die volle Energie in den Körperbereich bringt und die Selbstheilungskräfte mobilisiert. Sehr wirksam bei Arthrosen, Arthritiden und Lymphstauungen.",
    bg: baunscheidtierenBg,
  },
  {
    title: "Blutegeltherapie",
    desc: "Einsatz bei Venenleiden, Arthrosen und Sehnenscheidenentzündungen.",
    detail: "Die Blutegeltherapie kann bei Erkrankungen des Venensystems, Hypertonie oder Gichtanfällen eingesetzt werden. Durch Studien belegte Indikationen sind Arthrosen der Knie und Daumensattelgelenke sowie Sehnenscheidenentzündungen.",
    bg: blutegeltherapieBg,
  },
  {
    title: "Laboranalysen",
    desc: "Auswertung von Laborwerten zur genauen Bestimmung von Mängeln und Unverträglichkeiten.",
    detail: "Anhand einer alternativen Austestung wird die Tendenz zu Unverträglichkeiten auf Nahrungsmittel und mögliche Mängel von Mineralstoffen und Vitaminen angezeigt. Vergleichbar mit der Bioresonanz.",
    bg: laboranalysenBg,
  },
];

function MethodenPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Service Circles */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-3xl font-semibold text-foreground md:text-4xl mb-12">
            Alle Behandlungen
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="relative aspect-square w-full"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Circle (default) */}
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
                  <h3 className="relative font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>

                {/* Detail text (on hover) */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center rounded-xl bg-primary/10 border border-primary/30 p-6 transition-opacity duration-300 ${
                    hoveredIndex === i ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed overflow-y-auto max-h-[70%]">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
