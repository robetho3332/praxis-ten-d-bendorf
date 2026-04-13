import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich — Praxis RBT Dübendorf" },
      { name: "description", content: "Erfahre mehr über Romina Bertoletti Thoma und ihre Praxis für Naturheilkunde TEN in Dübendorf." },
      { property: "og:title", content: "Über mich — Praxis RBT" },
      { property: "og:description", content: "Naturheilpraktikerin Romina Bertoletti Thoma in Dübendorf." },
    ],
  }),
  component: UeberMichPage,
});

function UeberMichPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Über mich</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Hier erfährst du mehr über mich und meinen Werdegang.
          </p>
          <div className="mt-4 mx-auto h-0.5 w-16 bg-primary" />
        </div>
      </section>
    </div>
  );
}
