import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import diagnostikImg from "@/assets/diagnostik.jpg";
import methodenImg from "@/assets/methoden.jpg";
import shopImg from "@/assets/shop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praxis RBT — Naturheilkunde TEN in Dübendorf" },
      { name: "description", content: "Praxis für manuelle Therapien & Naturheilkunde TEN von Romina Bertoletti Thoma in Dübendorf. Ganzheitliche Behandlungen für Körper und Seele." },
      { property: "og:title", content: "Praxis RBT — Naturheilkunde TEN in Dübendorf" },
      { property: "og:description", content: "Ganzheitliche Naturheilkunde TEN in Dübendorf. Manuelle Therapien, Diagnostik und individuelle Behandlung." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <p className="animate-fade-in-up text-sm font-medium tracking-widest text-primary uppercase">
              Naturheilkunde TEN · Dübendorf
            </p>
            <h1 className="animate-fade-in-up-delay mt-4 font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Ihr Weg zu ganzheitlicher Gesundheit
            </h1>
            <p className="animate-fade-in-up-delay-2 mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Individuelle Behandlungen mit traditioneller europäischer Naturheilkunde. 
              Für Ihr inneres Gleichgewicht und natürliche Selbstheilung.
            </p>
            <div className="animate-fade-in-up-delay-2 mt-8 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Termin vereinbaren
              </Link>
              <Link
                to="/ablauf"
                className="inline-flex items-center rounded-lg border border-border bg-card/80 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-card"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Jeder Mensch trägt die Kraft zur Selbstheilung in sich
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            In meiner Praxis verbinde ich die Weisheit der traditionellen europäischen Naturheilkunde (TEN) 
            mit modernem Wissen. Gemeinsam finden wir heraus, was Ihre Selbstheilungskräfte blockiert – 
            und setzen gezielte Impulse, um Ihr inneres Gleichgewicht wiederherzustellen.
          </p>
          <div className="mt-4 mx-auto h-0.5 w-16 bg-primary" />
        </div>
      </section>

      {/* Services Cards */}
      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-3xl font-semibold text-foreground md:text-4xl mb-12">
            Mein Angebot
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              image={diagnostikImg}
              title="Diagnostik"
              description="Ganzheitliche Befunderhebung nach TEN: Antlitz-, Zungen- und Irisdiagnostik bilden die Basis Ihrer individuellen Therapie."
              link="/diagnostik"
            />
            <ServiceCard
              image={methodenImg}
              title="Methoden"
              description="Von manuellen Therapien über Phytotherapie bis zu ausleitenden Verfahren – sanfte und wirkungsvolle Behandlungsmethoden."
              link="/methoden"
            />
            <ServiceCard
              image={shopImg}
              title="Shop"
              description="Ausgewählte Naturprodukte, Kräutertees und Tinkturen für Ihre Gesundheit – auch für zuhause."
              link="/shop"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Bereit für den ersten Schritt?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie Naturheilkunde TEN Ihnen helfen kann.
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ image, title, description, link }: { image: string; title: string; description: string; link: "/diagnostik" | "/methoden" | "/shop" }) {
  return (
    <Link to={link} className="group block overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={600} />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
        <span className="mt-4 inline-flex text-sm font-medium text-primary group-hover:underline">
          Mehr erfahren →
        </span>
      </div>
    </Link>
  );
}
