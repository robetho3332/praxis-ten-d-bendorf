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
          <p className="text-muted-foreground leading-relaxed">
            Informationen zur Abrechnung folgen in Kürze.
          </p>
        </div>
      </section>
    </div>
  );
}
