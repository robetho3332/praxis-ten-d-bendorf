import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/abrechnung")({
  head: () => ({
    meta: [
      { title: "Abrechnung — Praxis RBT Dübendorf" },
      { name: "description", content: "Informationen zur Abrechnung und Kostenübernahme bei Praxis RBT in Dübendorf." },
      { property: "og:title", content: "Abrechnung — Praxis RBT" },
      { property: "og:description", content: "Abrechnung und Kostenübernahme bei Praxis RBT." },
    ],
  }),
  component: AbrechnungPage,
});

function AbrechnungPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl mb-6">
            Abrechnung
          </h1>

          <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl mt-8">
            Zusatzversicherung
          </h2>
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
    </div>
  );
}
