import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/rabattcodes")({
  head: () => ({
    meta: [
      { title: "Rabattcodes — Praxis RBT Dübendorf" },
      { name: "description", content: "Aktuelle Rabattcodes und Aktionen der Praxis RBT in Dübendorf." },
      { property: "og:title", content: "Rabattcodes — Praxis RBT" },
      { property: "og:description", content: "Rabattcodes und Aktionen für Naturheilkunde-Behandlungen." },
    ],
  }),
  component: RabattcodesPage,
});

function RabattcodesPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Rabattcodes</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Hier findest du aktuelle Rabattcodes und Aktionen.
          </p>
          <div className="mt-4 mx-auto h-0.5 w-16 bg-primary" />
        </div>
      </section>
    </div>
  );
}
