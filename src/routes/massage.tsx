import { createFileRoute, Link } from "@tanstack/react-router";

const CANONICAL = "https://naturheilkundepraxis-rbt.lovable.app/massage";

const faqs = [
  {
    q: "Werden medizinische Massagen von der Krankenkasse übernommen?",
    a: "Ja. Als EMR-anerkannte Therapeutin (ZSR M100663) wird die medizinische Massage von den meisten Schweizer Zusatzversicherungen übernommen. Bitte prüfe deine individuelle Police, welcher Anteil rückerstattet wird.",
  },
  {
    q: "Was ist der Unterschied zwischen klassischer und medizinischer Massage?",
    a: "Die klassische Massage löst Verspannungen und entspannt. Die medizinische Massage geht therapeutisch tiefer: sie behandelt gezielt Triggerpunkte, Bewegungseinschränkungen, Beschwerden des Bewegungsapparats und chronische Schmerzen — und wird über die Krankenkasse abgerechnet.",
  },
  {
    q: "Wie lange dauert eine Massage-Sitzung?",
    a: "Eine Behandlung dauert in der Regel 60 Minuten. Erstgespräch und kurze Anamnese sind inklusive. Stundenansatz: CHF 147.00.",
  },
  {
    q: "Wie viele Termine brauche ich?",
    a: "Das hängt vom Beschwerdebild ab. Bei akuten Verspannungen reichen oft 2–3 Sitzungen. Chronische Beschwerden brauchen typischerweise eine Serie von 4–8 Behandlungen, kombiniert mit Übungen für zu Hause.",
  },
  {
    q: "Aus welchem Gebiet kommen deine Patientinnen und Patienten?",
    a: "Die Praxis liegt in Dübendorf an der Alten Gfennstrasse 86 und ist gut erreichbar aus Dübendorf, Volketswil, Uster, Schwerzenbach, Wallisellen, Wangen-Brüttisellen und der Stadt Zürich.",
  },
];

export const Route = createFileRoute("/massage")({
  head: () => ({
    meta: [
      { title: "Medizinische Massage Dübendorf — Krankenkassen-anerkannt | RBT" },
      { name: "description", content: "Medizinische Massage in Dübendorf bei Romina Bertoletti Thoma. EMR-anerkannt (ZSR M100663), von Krankenkassen rückerstattet. Für Dübendorf, Volketswil, Uster, Zürich." },
      { property: "og:title", content: "Medizinische Massage in Dübendorf — Praxis RBT" },
      { property: "og:description", content: "Krankenkassen-anerkannte medizinische Massage bei Verspannungen, Schmerzen und Bewegungseinschränkungen. EMR ZSR M100663." },
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
          name: "Medizinische Massage",
          alternateName: ["Klassische Massage", "Triggerpunkt-Therapie", "Manuelle Therapie"],
          description: "Krankenkassen-anerkannte medizinische Massage in Dübendorf bei Verspannungen, Schmerzen und Beschwerden des Bewegungsapparats.",
          url: CANONICAL,
          areaServed: [
            { "@type": "City", name: "Dübendorf" },
            { "@type": "City", name: "Volketswil" },
            { "@type": "City", name: "Uster" },
            { "@type": "City", name: "Schwerzenbach" },
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
  component: MassagePage,
});

function MassagePage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Medizinische Massage in Dübendorf
          </h1>
          <div className="mt-4 h-0.5 w-16 bg-primary" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Krankenkassen-anerkannte Massage bei Verspannungen, Schmerzen und Bewegungs­einschränkungen — durchgeführt von Romina Bertoletti Thoma, eidg. dipl. Naturheilpraktikerin TEN, in der Praxis RBT an der Alten Gfennstrasse 86 in Dübendorf.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">EMR-anerkannt</h2>
              <p className="mt-2 text-sm text-muted-foreground">ZSR-Nummer M100663. Abrechnung über die meisten Schweizer Zusatzversicherungen.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">Individueller Therapieplan</h2>
              <p className="mt-2 text-sm text-muted-foreground">Behandlung nach Anamnese und ganzheitlicher Diagnostik — keine Behandlung von der Stange.</p>
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
              Was ist medizinische Massage?
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Im Unterschied zur reinen Wellness-Massage zielt die medizinische Massage gezielt auf Beschwerden im Bewegungsapparat: Muskelverspannungen, Triggerpunkte, Fehl­spannungen und chronische Schmerzen werden therapeutisch behandelt. Die Massage wirkt direkt auf Muskulatur, Bindegewebe und Faszien — und über die Reflex­zonen auch auf die inneren Organe.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In meiner Praxis kombiniere ich verschiedene Techniken: klassische Massage, Triggerpunkt-Behandlung, Bindegewebs­massage und manuelle Schmerz­therapie. Welche Methode bei dir zum Einsatz kommt, entscheide ich nach einer kurzen Anamnese — gemeinsam mit dir.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Wann hilft eine Massage?
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>• Nacken-, Schulter- und Rücken­verspannungen</li>
              <li>• Spannungs­kopfschmerzen und Migräne</li>
              <li>• Beschwerden durch einseitige Belastung (Büroarbeit, Bildschirm)</li>
              <li>• Chronische Schmerzen im Bewegungs­apparat</li>
              <li>• Rekonvaleszenz nach Unfällen oder Operationen</li>
              <li>• Stress und stressbedingte körperliche Beschwerden</li>
              <li>• Schlafstörungen und allgemeine Erschöpfung</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Krankenkassen-Abrechnung
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Die Praxis RBT ist EMR-anerkannt (ZSR-Nummer <strong className="text-foreground">M100663</strong>). Damit wird die medizinische Massage von den meisten Schweizer Zusatzversicherungen im Rahmen der Komplementärmedizin rückerstattet. Du erhältst eine Rechnung, die du bei deiner Krankenkasse einreichen kannst. Den genauen Rückerstattungs­anteil findest du in deiner Police oder erfragst ihn bei deiner Versicherung.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Einzugsgebiet
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Die Praxis liegt in <strong className="text-foreground">Dübendorf</strong> an der Alten Gfennstrasse 86, mit guter Anbindung an die Glattalbahn und dem Auto. Patientinnen und Patienten kommen regelmässig aus Dübendorf, <strong className="text-foreground">Volketswil</strong>, <strong className="text-foreground">Uster</strong>, <strong className="text-foreground">Schwerzenbach</strong>, Wallisellen, Wangen-Brüttisellen sowie aus der Stadt <strong className="text-foreground">Zürich</strong>.
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
              to="/schroepfen"
              className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              Mehr zu Schröpfen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
