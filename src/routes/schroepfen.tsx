import { createFileRoute, Link } from "@tanstack/react-router";

const CANONICAL = "https://naturheilkundepraxis-rbt.lovable.app/schroepfen";

const faqs = [
  {
    q: "Tut Schröpfen weh?",
    a: "Nein. Du spürst ein Saugen und ein leichtes Ziehen an der Haut. Viele empfinden die Behandlung als angenehm und entspannend. Die rötlich-bläulichen Male, die nach der Sitzung sichtbar sind, sind harmlos und verschwinden in der Regel innert weniger Tage.",
  },
  {
    q: "Wann hilft Schröpfen?",
    a: "Schröpfen wird klassisch eingesetzt bei Nacken- und Rückenverspannungen, chronischen Schmerzen, Spannungskopfschmerzen und Migräne, Verdauungs­beschwerden, Erkältungs­neigung und zur Unterstützung der inneren Organe über die Reflexzonen.",
  },
  {
    q: "Welche Arten von Schröpfen gibt es?",
    a: "Beim trockenen Schröpfen werden die Gläser auf die Haut gesetzt und erzeugen Unterdruck. Bei der Schröpfkopf­massage werden die Gläser auf der eingeölten Haut bewegt und lösen Verklebungen im Bindegewebe. Welche Form bei dir passt, entscheide ich nach Anamnese.",
  },
  {
    q: "Wird Schröpfen von der Krankenkasse übernommen?",
    a: "Ja. Als EMR-anerkannte Therapeutin (ZSR M100663) wird Schröpfen über die Schweizer Zusatzversicherungen im Rahmen der Komplementärmedizin rückerstattet. Der genaue Anteil hängt von deiner Police ab.",
  },
  {
    q: "Wie oft sollte ich zum Schröpfen kommen?",
    a: "Bei akuten Verspannungen reichen oft 2–3 Sitzungen. Bei chronischen Beschwerden empfehle ich eine Serie von 4–6 Behandlungen im Abstand von 1–2 Wochen, kombiniert mit weiteren Therapien aus der Naturheilkunde TEN.",
  },
];

export const Route = createFileRoute("/schroepfen")({
  head: () => ({
    meta: [
      { title: "Schröpfen Dübendorf — Krankenkassen-anerkannt | Praxis RBT" },
      { name: "description", content: "Schröpfen in Dübendorf bei Romina Bertoletti Thoma. Traditionelle Therapie bei Verspannungen, Schmerzen und chronischen Beschwerden. EMR-anerkannt (ZSR M100663)." },
      { property: "og:title", content: "Schröpfen in Dübendorf — Praxis RBT" },
      { property: "og:description", content: "Traditionelles Schröpfen bei Verspannungen, Rücken- und Nackenschmerzen. Krankenkassen-anerkannt." },
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
          name: "Schröpfen",
          alternateName: ["Trockenes Schröpfen", "Schröpfkopfmassage"],
          description: "Traditionelle Schröpf-Therapie bei Verspannungen, Schmerzen und chronischen Beschwerden — krankenkassen-anerkannt, in Dübendorf.",
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
  component: SchroepfenPage,
});

function SchroepfenPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Schröpfen in Dübendorf
          </h1>
          <div className="mt-4 h-0.5 w-16 bg-primary" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Eine der ältesten Therapie­methoden der Welt — bei Nacken- und Rücken­verspannungen, chronischen Schmerzen und zur Unterstützung der inneren Organe. In der Praxis RBT in Dübendorf, krankenkassen­anerkannt unter ZSR-Nummer M100663.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">EMR-anerkannt</h2>
              <p className="mt-2 text-sm text-muted-foreground">Abrechnung über die Zusatz­versicherung. ZSR M100663.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">Traditionell &amp; bewährt</h2>
              <p className="mt-2 text-sm text-muted-foreground">Seit Jahrhunderten bei Verspannungen und Schmerzen eingesetzt — bis heute hochwirksam.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">Sanft &amp; ganzheitlich</h2>
              <p className="mt-2 text-sm text-muted-foreground">Wirkt lokal und über die Reflex­zonen auf den ganzen Organismus.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-4xl space-y-12">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Was ist Schröpfen?
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Beim Schröpfen werden Glas-Saugglocken auf die Haut gesetzt. Durch den Unterdruck wird die Durch­blutung an der Stelle stark angeregt, der Stoff­wechsel aktiviert und das Gewebe gelockert. Über die Reflexzonen des Rückens nehme ich gezielt Einfluss auf innere Organe und unterstütze sie in ihrer Funktion.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Bei der <strong className="text-foreground">Schröpfkopf­massage</strong> werden die Gläser auf der eingeölten Haut bewegt — eine besonders effektive Methode, um Verklebungen im Bindegewebe zu lösen und Faszien zu mobilisieren.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Wann hilft Schröpfen?
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>• Nacken-, Schulter- und Rücken­verspannungen</li>
              <li>• Chronische Schmerzen im Bewegungs­apparat</li>
              <li>• Spannungs­kopfschmerzen und Migräne</li>
              <li>• Verdauungs­beschwerden und Magen-Darm-Probleme</li>
              <li>• Erkältungs­neigung und Bronchial­beschwerden</li>
              <li>• Menstruations­beschwerden</li>
              <li>• Allgemeine Erschöpfung und Stressfolgen</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Ablauf einer Behandlung
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Nach einer kurzen Anamnese entscheide ich, ob trockenes Schröpfen oder eine Schröpfkopf­massage bei dir am wirkungsvollsten ist. Die Gläser werden gezielt auf die relevanten Reflex- oder Beschwerde­zonen gesetzt und bleiben dort 5–15 Minuten. Danach gönnen wir dem Körper eine kurze Nachruhe. Die Sitzung dauert in der Regel 60 Minuten (CHF 147.00).
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Die typischen rund­lichen Male verschwinden je nach Hauttyp innert weniger Tage — sie sind ein Zeichen, dass die Therapie ihre Wirkung entfaltet.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Krankenkassen &amp; Einzugsgebiet
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Schröpfen wird als anerkannte Methode der Komplementär­medizin von den meisten Schweizer Zusatz­versicherungen rückerstattet (EMR ZSR <strong className="text-foreground">M100663</strong>). Die Praxis in <strong className="text-foreground">Dübendorf</strong> ist gut erreichbar aus Volketswil, Uster, Schwerzenbach, Wallisellen und der Stadt <strong className="text-foreground">Zürich</strong>.
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
              Mehr zur medizinischen Massage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
