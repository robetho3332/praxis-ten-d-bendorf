import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Praxis RBT Dübendorf" },
      { name: "description", content: "Impressum der Praxis RBT – Romina Bertoletti Thoma, Naturheilkunde TEN in Dübendorf." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Impressum</h1>
          <div className="mt-4 h-0.5 w-16 bg-primary" />

          <div className="mt-12 space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <p className="font-semibold text-foreground">Praxis für manuelle Therapien & Naturheilkunde</p>
              <p>Romina Bertoletti Thoma</p>
              <p>Eidg. dipl. Naturheilpraktikerin TEN</p>
            </div>

            <div>
              <p>Alte Gfennstrasse 86</p>
              <p>8600 Dübendorf</p>
              <p>Schweiz</p>
            </div>

            <div>
              <p>Telefon: <a href="tel:+41794531716" className="text-primary hover:underline">079 453 17 16</a></p>
              <p>E-Mail: <a href="mailto:r.bertolettithoma@icloud.com" className="text-primary hover:underline">r.bertolettithoma@icloud.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
