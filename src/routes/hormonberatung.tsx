import { createFileRoute, Link } from "@tanstack/react-router";

const CANONICAL = "https://naturheilkundepraxis-rbt.lovable.app/hormonberatung";

const faqs = [
  {
    q: "Wird die Hormonberatung von der Krankenkasse übernommen?",
    a: "Ja. Als EMR-anerkannte Naturheilpraktikerin (ZSR M100663) wird die Hormonberatung von den meisten Schweizer Zusatzversicherungen im Rahmen der Komplementärmedizin rückerstattet. Den genauen Anteil findest du in deiner Police oder bei deiner Krankenkasse.",
  },
  {
    q: "Wie wird der Hormonstatus ermittelt?",
    a: "Zunächst führe ich ein ausführliches Gespräch mit dir und einem spezifischen Fragebogen durch. Bei Bedarf kann ein Speicheltest veranlasst werden, der bequem zu Hause durchgeführt wird. So erhalten wir ein genaues Bild deines Hormonhaushalts.",
  },
  {
    q: "Bei welchen Beschwerden hilft eine Hormonberatung?",
    a: "Eine Hormonberatung ist sinnvoll bei Zyklusunregelmässigkeiten, PMS, Wechseljahresbeschwerden, Hautproblemen, Schlafstörungen, Gewichtsschwankungen, Haarausfall, Libidoverlust, chronischer Müdigkeit und Stimmungsschwankungen.",
  },
  {
    q: "Wie lange dauert eine Sitzung und was kostet sie?",
    a: "Eine Beratung dauert in der Regel 60 Minuten. Stundenansatz: CHF 147.00 nach EMR-Tarif. Die Abrechnung erfolgt direkt mit dir, du reichst die Rechnung anschliessend bei deiner Zusatzversicherung ein.",
  },
  {
    q: "Was ist ein Hormontest und wie funktioniert er?",
    a: "Der Hormontest erfolgt in der Regel als Speicheltest, den du bequem zu Hause durchführst. Er misst freie, biologisch aktive Hormone wie Cortisol, Östrogen, Progesteron, Testosteron und DHEA über den Tagesverlauf. Die Proben werden ins Labor geschickt und liefern ein präzises Bild deines Hormonhaushalts.",
  },
  {
    q: "Was macht ein Hormoncoach oder Hormonspezialist?",
    a: "Als Hormoncoach und Hormonspezialistin begleite ich dich ganzheitlich: Wir analysieren deinen Hormonstatus, identifizieren Ungleichgewichte und erarbeiten gemeinsam einen Plan aus Ernährung, Pflanzenheilkunde, Lifestyle-Anpassungen und Vitalstoffen — abgestimmt auf dein Leben.",
  },
  {
    q: "Aus welchem Gebiet kommen deine Klientinnen und Klienten?",
    a: "Die Praxis liegt in Dübendorf an der Alten Gfennstrasse 86 und ist gut erreichbar aus Dübendorf, Volketswil, Uster, Schwerzenbach, Wangen-Brüttisellen, Wallisellen und der Stadt Zürich.",
  },
];




export const Route = createFileRoute("/hormonberatung")({
  head: () => ({
    meta: [
      { title: "Hormonberatung Dübendorf — Krankenkassen-anerkannt | RBT" },
      { name: "description", content: "Hormonberatung in Dübendorf bei Romina Bertoletti Thoma. Hormontest, Hormoncoach, EMR-anerkannt (ZSR M100663). Für Dübendorf, Volketswil, Uster, Zürich." },
      { property: "og:title", content: "Hormonberatung in Dübendorf — Praxis RBT" },
      { property: "og:description", content: "Krankenkassen-anerkannte Hormonberatung — Hormontest, Hormoncoach, individuell auf dich abgestimmt. EMR ZSR M100663." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalTherapy",
          name: "Hormonberatung",
          alternateName: ["Hormoncoach", "Hormontest", "Hormonspezialist"],
          description: "Krankenkassen-anerkannte Hormonberatung in Dübendorf — Ermittlung des Hormonhaushalts mittels Fragebogen und Speicheltest.",
          url: CANONICAL,
          areaServed: [
            { "@type": "City", name: "Dübendorf" },
            { "@type": "City", name: "Volketswil" },
            { "@type": "City", name: "Uster" },
            { "@type": "City", name: "Schwerzenbach" },
            { "@type": "City", name: "Wangen-Brüttisellen" },
            { "@type": "City", name: "Zürich" },
          ],
          provider: {
            "@type": "MedicalBusiness",
            "@id": "https://naturheilkundepraxis-rbt.lovable.app/#praxis",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HormonberatungPage,
});

function HormonberatungPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Hormonberatung in Dübendorf
          </h1>
          <div className="mt-4 h-0.5 w-16 bg-primary" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Hormonberatung und Hormoncoach bei Romina Bertoletti Thoma, eidg. dipl. Naturheilpraktikerin TEN. Anhand eines Fragebogens und bei Bedarf einem Speicheltest ermitteln wir deinen Hormonstatus und erstellen einen individuellen Therapieplan — in der Praxis RBT an der Alten Gfennstrasse 86 in Dübendorf.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">EMR-anerkannt</h2>
              <p className="mt-2 text-sm text-muted-foreground">ZSR-Nummer M100663. Abrechnung über die meisten Schweizer Zusatzversicherungen.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">Speicheltest & Fragebogen</h2>
              <p className="mt-2 text-sm text-muted-foreground">Ermittlung des Hormonhaushalts bequem zu Hause durch Speicheltest oder mittels detailliertem Anamnese-Fragebogen.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">Stundenansatz CHF 147</h2>
              <p className="mt-2 text-sm text-muted-foreground">Faire, transparente Tarife nach EMR-Vorgabe.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-4xl space-y-12">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Was ist Hormonberatung?
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Hormone steuern nahezu alle Prozesse in unserem Körper — von Stoffwechsel und Schlaf über Stimmung und Energie bis hin zu Zyklus, Libido und Hautbild. Ein Ungleichgewicht im Hormonhaushalt kann sich durch viele verschiedene Beschwerden bemerkbar machen, ohne dass der Zusammenhang sofort erkennbar ist.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In der Hormonberatung schauen wir uns gemeinsam deine Symptome, deinen Lebensstil und deine Krankheitsgeschichte an. Anhand eines spezialisierten Fragebogens und bei Bedarf einem Speicheltest — der bequem zu Hause durchgeführt werden kann — ermitteln wir, wie es um deinen Hormonhaushalt steht. Daraus entwickeln wir einen individuellen, ganzheitlichen Therapieplan.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Wann hilft eine Hormonberatung?
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>• Zyklusunregelmässigkeiten, starke Regelschmerzen oder PMS</li>
              <li>• Wechseljahresbeschwerden (Hitzewallungen, Schlafstörungen, Stimmungsschwankungen)</li>
              <li>• Chronische Müdigkeit und Energielosigkeit trotz ausreichend Schlaf</li>
              <li>• Hautprobleme wie Akne, trockene Haut oder vorzeitige Hautalterung</li>
              <li>• Gewichtsschwankungen oder unerklärliche Gewichtszunahme</li>
              <li>• Haarausfall oder Veränderungen der Haarstruktur</li>
              <li>• Schlafstörungen und Schwierigkeiten, durchzuschlafen</li>
              <li>• Libidoverlust oder Unlust</li>
              <li>• Stimmungsschwankungen, Reizbarkeit oder depressive Verstimmungen</li>
              <li>• Kinderwunsch und Vorbereitung auf eine Schwangerschaft</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Ablauf der Hormonberatung
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">1. Anamnese & Fragebogen:</strong> In einem ausführlichen Gespräch erfasse ich deine Beschwerden, deinen Lebensstil, deine Essgewohnheiten und deine Krankheitsgeschichte. Ein spezifischer Hormon-Fragebogen hilft, die ersten Hinweise auf ein Ungleichgewicht zu sammeln.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">2. Speicheltest (optional):</strong> Bei Bedarf veranlasse ich einen Speicheltest, der bequem zu Hause durchgeführt wird. Dieser liefert ein präzises Bild von Cortisol, Östrogen, Progesteron, Testosteron, DHEA und weiteren Hormonen über den Tagesverlauf.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">3. Therapieplan:</strong> Basierend auf den Ergebnissen erstelle ich einen individuellen Plan — mit Ernährungsempfehlungen, pflanzlichen Arzneimitteln, Lifestyle-Tipps und gezielten Vitalstoffen, um deinen Hormonhaushalt wieder ins Gleichgewicht zu bringen.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Krankenkassen-Abrechnung
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Die Praxis RBT ist EMR-anerkannt (ZSR-Nummer <strong className="text-foreground">M100663</strong>). Damit wird die Hormonberatung von den meisten Schweizer Zusatzversicherungen im Rahmen der Komplementärmedizin rückerstattet. Du erhältst eine Rechnung, die du bei deiner Krankenkasse einreichst. Den genauen Rückerstattungsanteil findest du in deiner Police.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Einzugsgebiet
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Die Praxis liegt in <strong className="text-foreground">Dübendorf</strong> an der Alten Gfennstrasse 86, mit guter Anbindung an die Glattalbahn und dem Auto. Klientinnen und Klienten kommen regelmässig aus Dübendorf, <strong className="text-foreground">Volketswil</strong>, <strong className="text-foreground">Uster</strong>, <strong className="text-foreground">Schwerzenbach</strong>, Wallisellen, Wangen-Brüttisellen sowie aus der Stadt <strong className="text-foreground">Zürich</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
            Häufige Fragen
          </h2>
          <div className="mt-3 h-0.5 w-12 bg-primary" />
          <div className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-border pb-6 last:border-b-0">
                <h3 className="font-heading text-lg font-semibold text-foreground">{f.q}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/"
              hash="kontakt"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Termin vereinbaren
            </Link>
            <Link
              to="/ernaehrungsberatung"
              className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              Mehr zu Ernährungsberatung
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
