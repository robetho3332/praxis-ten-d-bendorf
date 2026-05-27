import { createFileRoute, Link } from "@tanstack/react-router";

const CANONICAL = "https://naturheilkundepraxis-rbt.lovable.app/ernaehrungsberatung";

const faqs = [
  {
    q: "Wird die Ernährungsberatung von der Krankenkasse übernommen?",
    a: "Ja. Als EMR-anerkannte Naturheilpraktikerin (ZSR M100663) wird die Ernährungsberatung von den meisten Schweizer Zusatzversicherungen im Rahmen der Komplementärmedizin rückerstattet. Den genauen Anteil findest du in deiner Police oder bei deiner Krankenkasse.",
  },
  {
    q: "Bietest du auch vegane und pflanzenbasierte Ernährungsberatung an?",
    a: "Ja, das ist ein Schwerpunkt meiner Arbeit. Wir schauen gemeinsam, wie eine pflanzenbasierte oder vegane Ernährung alle wichtigen Makro- und Mikronährstoffe abdeckt — von Eiweiss und Eisen über Vitamin B12 bis Omega-3.",
  },
  {
    q: "Wie läuft eine Ernährungsberatung ab?",
    a: "Im Erstgespräch erfasse ich deine Essgewohnheiten, deinen Lebensstil und deine Ziele. Daraus entwickeln wir gemeinsam einen alltagstauglichen Plan — keine Verbote, keine starre Diät, sondern Schritt für Schritt nachhaltige Veränderungen.",
  },
  {
    q: "Wie lange dauert eine Sitzung und was kostet sie?",
    a: "Eine Beratung dauert in der Regel 60 Minuten. Stundenansatz: CHF 147.00 nach EMR-Tarif. Die Abrechnung erfolgt direkt mit dir, du reichst die Rechnung anschliessend bei deiner Zusatzversicherung ein.",
  },
  {
    q: "Aus welchem Gebiet kommen deine Klientinnen und Klienten?",
    a: "Die Praxis liegt in Dübendorf an der Alten Gfennstrasse 86 und ist gut erreichbar aus Dübendorf, Volketswil, Uster, Schwerzenbach, Wangen-Brüttisellen, Wallisellen und der Stadt Zürich.",
  },
];

export const Route = createFileRoute("/ernaehrungsberatung")({
  head: () => ({
    meta: [
      { title: "Ernährungsberatung Dübendorf — Krankenkassen-anerkannt | RBT" },
      { name: "description", content: "Ernährungsberatung in Dübendorf bei Romina Bertoletti Thoma. Pflanzenbasiert & vegan, EMR-anerkannt (ZSR M100663), von Krankenkassen rückerstattet. Für Dübendorf, Volketswil, Uster, Zürich." },
      { property: "og:title", content: "Ernährungsberatung in Dübendorf — Praxis RBT" },
      { property: "og:description", content: "Krankenkassen-anerkannte Ernährungsberatung — pflanzenbasiert, vegan, alltagstauglich. EMR ZSR M100663." },
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
          name: "Ernährungsberatung",
          alternateName: ["Vegane Ernährungsberatung", "Pflanzenbasierte Ernährungsberatung"],
          description: "Krankenkassen-anerkannte Ernährungsberatung in Dübendorf — pflanzenbasiert, vegan und alltagstauglich.",
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
  component: ErnaehrungsberatungPage,
});

function ErnaehrungsberatungPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Ernährungsberatung in Dübendorf
          </h1>
          <div className="mt-4 h-0.5 w-16 bg-primary" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Pflanzenbasierte, vegane und alltagstaugliche Ernährungsberatung — krankenkassen-anerkannt und individuell auf dich abgestimmt. Durchgeführt von Romina Bertoletti Thoma, eidg. dipl. Naturheilpraktikerin TEN, in der Praxis RBT an der Alten Gfennstrasse 86 in Dübendorf.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">EMR-anerkannt</h2>
              <p className="mt-2 text-sm text-muted-foreground">ZSR-Nummer M100663. Abrechnung über die meisten Schweizer Zusatzversicherungen.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">Pflanzenbasiert & vegan</h2>
              <p className="mt-2 text-sm text-muted-foreground">Schwerpunkt auf pflanzlicher Ernährung — vollständig, nährstoffreich und genussvoll.</p>
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
              Was bringt eine Ernährungsberatung?
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Um zu funktionieren, braucht unser Körper Nährstoffe — Makronährstoffe wie Fette, Eiweisse und Kohlenhydrate sowie Mikronährstoffe wie Vitamine, Mineralstoffe, Spurenelemente und sekundäre Pflanzenstoffe. In meiner Ernährungsberatung schauen wir uns deine aktuellen Essgewohnheiten an und besprechen anhand deiner Ziele, was und wie du sie optimieren kannst.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Kein starres Schema, keine Verbote — sondern ein alltagstauglicher Plan, den du langfristig umsetzen kannst. Ob Gewichtsregulierung, Energie­gewinnung, Verdauungs­beschwerden, Umstellung auf eine pflanzen­basierte Ernährung oder Begleitung bei chronischen Beschwerden: Wir arbeiten Schritt für Schritt.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Wann hilft eine Ernährungsberatung?
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>• Umstellung auf vegane oder pflanzenbasierte Ernährung</li>
              <li>• Gewichtsregulierung — zunehmen, abnehmen oder halten</li>
              <li>• Verdauungs­beschwerden, Blähungen, Reizdarm</li>
              <li>• Nahrungs­mittel­unverträglichkeiten und Allergien</li>
              <li>• Energie- und Konzentrations­tiefs</li>
              <li>• Sportliche Leistungs­optimierung</li>
              <li>• Begleitung bei chronischen Erkrankungen (Diabetes, Bluthochdruck, etc.)</li>
              <li>• Ernährung in besonderen Lebens­phasen (Schwangerschaft, Wechseljahre)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Pflanzenbasiert & vegan — was bedeutet das?
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Eine gut geplante pflanzen­basierte Ernährung deckt alle wichtigen Nährstoffe ab — von hochwertigem Eiweiss aus Hülsenfrüchten und Vollkorn über pflanzliches Eisen, Kalzium und Omega-3 bis hin zu Vitamin B12, dem einzigen kritischen Nährstoff, der gezielt supplementiert werden sollte. Ich zeige dir, worauf es ankommt, welche Lebensmittel kombiniert besonders gut wirken und wie du den Übergang Schritt für Schritt schaffst — ohne Verzicht auf Genuss.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Krankenkassen-Abrechnung
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Die Praxis RBT ist EMR-anerkannt (ZSR-Nummer <strong className="text-foreground">M100663</strong>). Damit wird die Ernährungsberatung von den meisten Schweizer Zusatzversicherungen im Rahmen der Komplementär­medizin rückerstattet. Du erhältst eine Rechnung, die du bei deiner Krankenkasse einreichst. Den genauen Rückerstattungs­anteil findest du in deiner Police.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Einzugsgebiet
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Die Praxis liegt in <strong className="text-foreground">Dübendorf</strong> an der Alten Gfennstrasse 86, mit guter Anbindung an die Glattalbahn und dem Auto. Klientinnen und Klienten kommen regelmässig aus Dübendorf, <strong className="text-foreground">Volketswil</strong>, <strong className="text-foreground">Uster</strong>, <strong className="text-foreground">Schwerzenbach</strong>, <strong className="text-foreground">Wangen-Brüttisellen</strong>, Wallisellen sowie aus der Stadt <strong className="text-foreground">Zürich</strong>.
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
              to="/massage"
              className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              Mehr zu Massage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
