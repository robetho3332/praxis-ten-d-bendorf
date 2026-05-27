import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — In Arbeit | Praxis RBT" },
      { name: "description", content: "Unser Shop befindet sich aktuell in Arbeit." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ShopInProgress,
});

function ShopInProgress() {
  return (
    <section className="section-padding min-h-[60vh] flex items-center justify-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
          Mein Online-Shop
        </h1>
        <div className="mt-4 h-0.5 w-16 bg-primary mx-auto mb-6" />
        <p className="text-muted-foreground leading-relaxed">
          Mein Online-Shop wird gerade vorbereitet und ist bald für dich verfügbar.
          Vielen Dank für deine Geduld.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}
