import { createFileRoute, Link } from "@tanstack/react-router";

const CANONICAL = "https://naturheilkundepraxis-rbt.lovable.app/gesichtspflege";

const faqs = [
  {
    q: "Wie lange dauert eine Gesichtsbehandlung?",
    a: "Die Behandlung dauert 75 bis 90 Minuten und kostet CHF 140.–. Genug Zeit für Hautanalyse, Reinigung, Peeling mit Dampf, manuelle Ausreinigung, Gesichts-, Hals- und Dekolleté-Massage, Wirkstoff-Maske und Pflegeabschluss – ohne Hektik.",
  },
  {
    q: "Welche Produkte verwendest du?",
    a: "Ich arbeite mit Farfalla Naturkosmetik. Farfalla ist ein Schweizer Unternehmen aus Uster und stellt Pflege mit natürlichen Inhaltsstoffen und ätherischen Ölen her – ohne synthetische Duftstoffe.",
  },
  {
    q: "Ist Naturkosmetik für empfindliche Haut geeignet?",
    a: "Ja. Ich stimme Reinigung, Peeling, Maske und Pflege auf deinen Hauttyp ab und arbeite bei empfindlicher oder zu Rötungen neigender Haut mit milderen Wirkstoffen, sanfterem Dampf und ohne intensive Ausreinigung.",
  },
  {
    q: "Was passiert bei der ersten Behandlung?",
    a: "Wir beginnen mit einer kurzen Hautanalyse und einem Gespräch zu Pflegegewohnheiten, Ernährung und Belastungen. Danach folgt die Behandlung, abgestimmt auf das, was deine Haut aktuell braucht.",
  },
  {
    q: "Kann ich die Farfalla Produkte bei dir kaufen?",
    a: "Ja, ich empfehle dir passende Farfalla-Produkte für die Pflege zu Hause und du kannst sie über die Praxis bestellen.",
  },
  {
    q: "Wie oft sollte ich eine Gesichtspflege machen?",
    a: "Für ein sichtbares, stabiles Hautbild sind 4 bis 6 Wochen Abstand ein guter Rhythmus. Bei akuten Themen wie unreiner oder sehr trockener Haut sind zu Beginn engere Intervalle sinnvoll.",
  },
  {
    q: "Woher kommen deine Kundinnen und Kunden?",
    a: "Die Praxis liegt in Dübendorf an der Alten Gfennstrasse 86 und ist gut erreichbar aus Dübendorf, Volketswil, Uster, Schwerzenbach, Wallisellen, Wangen-Brüttisellen und der Stadt Zürich.",
  },
];

export const Route = createFileRoute("/gesichtspflege")({
  head: () => ({
    meta: [
      { title: "Gesichtspflege Dübendorf — Farfalla Naturkosmetik | Praxis RBT" },
      {
        name: "description",
        content:
          "Gesichtsbehandlung in Dübendorf mit Farfalla Naturkosmetik aus Uster: Peeling mit Dampf, manuelle Ausreinigung, Massage und Maske. 75–90 Minuten für CHF 140.–. Praxis RBT, Romina Bertoletti Thoma.",
      },
      { property: "og:title", content: "Gesichtspflege in Dübendorf — Naturkosmetik mit Farfalla" },
      {
        property: "og:description",
        content:
          "Ganzheitliche Gesichtsbehandlung mit Farfalla Naturkosmetik: Reinigung, Peeling mit Dampf, manuelle Ausreinigung, Massage, Maske. 75–90 Minuten, CHF 140.–.",
      },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Gesichtspflege mit Farfalla Naturkosmetik",
          alternateName: ["Gesichtsbehandlung", "Naturkosmetik Gesichtspflege", "Kosmetische Gesichtsbehandlung"],
          description:
            "Ganzheitliche Gesichtsbehandlung in Dübendorf mit Farfalla Naturkosmetik aus Uster: Hautanalyse, sanfte Reinigung, Peeling mit Dampf, manuelle Ausreinigung, Gesichts-, Hals- und Dekolleté-Massage, Wirkstoff-Maske und abschliessende Pflege. Dauer 75–90 Minuten.",
          url: CANONICAL,
          serviceType: "Gesichtsbehandlung",
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
          offers: {
            "@type": "Offer",
            price: "140.00",
            priceCurrency: "CHF",
            url: CANONICAL,
            availability: "https://schema.org/InStock",
            itemOffered: {
              "@type": "Service",
              name: "Gesichtsbehandlung mit Farfalla Naturkosmetik (75–90 Minuten)",
            },
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
  component: GesichtspflegePage,
});

function GesichtspflegePage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Gesichtspflege in Dübendorf — Naturkosmetik mit Farfalla
          </h1>
          <div className="mt-4 h-0.5 w-16 bg-primary" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Eine ruhige, ganzheitliche Gesichtsbehandlung mit Farfalla Naturkosmetik aus Uster — individuell auf deinen Hauttyp abgestimmt. In der Praxis RBT an der Alten Gfennstrasse 86 in Dübendorf, bei Romina Bertoletti Thoma, eidg. dipl. Naturheilpraktikerin TEN.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">75–90 Minuten</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Genug Zeit für Hautanalyse, Reinigung, Peeling mit Dampf, Ausreinigung, Massage, Maske und Pflege.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">CHF 140.–</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Transparenter Preis für die komplette Behandlung, inklusive Beratung für die Pflege zu Hause.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">Farfalla aus Uster</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Schweizer Naturkosmetik mit ätherischen Ölen und natürlichen Wirkstoffen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-4xl space-y-12">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Was die Behandlung umfasst
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Deine Haut zeigt, was im Körper passiert: Stress, Schlafmangel, Verdauung, Hormone und Ernährung hinterlassen Spuren. Darum beginne ich nicht mit dem Produkt, sondern mit einem Blick auf dich — und wähle danach aus, was deine Haut aktuell wirklich braucht.
            </p>
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>• Hautanalyse und kurzes Gespräch zu Pflege, Ernährung und Belastungen</li>
              <li>• Sanfte, typgerechte Reinigung</li>
              <li>• Peeling mit Dampf, abgestimmt auf die Empfindlichkeit deiner Haut</li>
              <li>• Manuelle Ausreinigung bei Bedarf</li>
              <li>• Gesichts-, Hals- und Dekolleté-Massage zur Anregung von Durchblutung und Lymphfluss</li>
              <li>• Wirkstoff-Maske mit Ruhephase</li>
              <li>• Abschliessende Pflege mit Serum und Creme</li>
              <li>• Empfehlungen für die Pflege zu Hause</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Ablauf einer Sitzung
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Du kommst zur Ruhe, ich schaue mir deine Haut an und wir besprechen kurz, was dich beschäftigt. Danach folgt die Behandlung — in einem Tempo, das Erholung zulässt. Die Gesichtsmassage ist für viele der Kern der Behandlung: sie löst Spannungen in Kiefer, Stirn und Nacken, die man oft erst bemerkt, wenn sie nachlassen. Am Ende bekommst du eine konkrete, schlanke Pflegeempfehlung — keine langen Produktlisten.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Für welche Haut geeignet
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>• Trockene, spannende Haut</li>
              <li>• Empfindliche Haut und Haut mit Rötungsneigung</li>
              <li>• Unreine Haut und Mischhaut</li>
              <li>• Fahle, müde Haut nach Stressphasen oder im Winter</li>
              <li>• Reife Haut, die Feuchtigkeit und Elastizität braucht</li>
              <li>• Hautveränderungen in hormonellen Umstellungsphasen</li>
            </ul>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Bei ausgeprägten Hauterkrankungen schauen wir gemeinsam, ob die Gesichtspflege sinnvoll ist oder ob wir zuerst innerlich ansetzen — etwa über Darmsanierung, Ernährung oder die Hormonlage.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Warum Farfalla Naturkosmetik
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Farfalla</strong> ist ein Schweizer Unternehmen mit Sitz in <strong className="text-foreground">Uster</strong> und damit direkt aus der Region. Die Pflege basiert auf natürlichen Inhaltsstoffen und ätherischen Ölen statt auf synthetischen Duftstoffen — das passt zu meiner Arbeitsweise nach den Prinzipien der Traditionellen Europäischen Naturheilkunde (TEN). Mehr über die Produkte findest du auf{" "}
              <a
                href="https://www.farfalla.ch/de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                farfalla.ch
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Einzugsgebiet
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-primary" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Die Praxis liegt in <strong className="text-foreground">Dübendorf</strong> an der Alten Gfennstrasse 86, gut erreichbar mit der Glattalbahn und dem Auto. Kundinnen und Kunden kommen regelmässig aus Dübendorf, <strong className="text-foreground">Volketswil</strong>, <strong className="text-foreground">Uster</strong>, <strong className="text-foreground">Schwerzenbach</strong>, Wallisellen, Wangen-Brüttisellen sowie aus der Stadt <strong className="text-foreground">Zürich</strong>.
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

          <div className="mt-12 rounded-lg border border-border bg-card p-8">
            <h2 className="font-heading text-xl font-semibold text-foreground">Termin vereinbaren</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Melde dich telefonisch oder per E-Mail — ich finde gerne einen Termin, der zu dir passt.
            </p>
            <p className="mt-4 text-muted-foreground">
              <a href="tel:+41794531716" className="text-primary hover:underline">
                079 453 17 16
              </a>
              <br />
              <a href="mailto:r.bertolettithoma@icloud.com" className="text-primary hover:underline">
                r.bertolettithoma@icloud.com
              </a>
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/"
              hash="kontakt"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Kontaktformular
            </Link>
            <Link
              to="/massage"
              className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              Mehr zu medizinischer Massage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
