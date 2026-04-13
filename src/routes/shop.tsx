import { createFileRoute } from "@tanstack/react-router";
import shopImg from "@/assets/shop.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Praxis RBT Dübendorf" },
      { name: "description", content: "Naturprodukte, Kräutertees, Tinkturen und ätherische Öle aus der Praxis RBT." },
      { property: "og:title", content: "Shop — Praxis RBT" },
      { property: "og:description", content: "Ausgewählte Naturprodukte für Ihre Gesundheit." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const categories = [
    {
      title: "Kräutertees",
      description: "Hauseigene Teemischungen nach TEN-Rezepturen, individuell zusammengestellt für verschiedene Beschwerden und zur Vorbeugung.",
      price: "ab CHF 12.–",
    },
    {
      title: "Tinkturen",
      description: "Hochwertige Pflanzentinkturen aus sorgfältig ausgewählten Heilpflanzen. Konzentrierte Pflanzenkraft in Tropfenform.",
      price: "ab CHF 18.–",
    },
    {
      title: "Ätherische Öle",
      description: "Reine ätherische Öle für Aromatherapie, Massagen und Inhalationen. 100% naturrein und therapeutische Qualität.",
      price: "ab CHF 15.–",
    },
    {
      title: "Nahrungsergänzung",
      description: "Vitamine, Mineralstoffe und Spurenelemente in hochwertiger, bioverfügbarer Form zur Unterstützung Ihrer Gesundheit.",
      price: "ab CHF 25.–",
    },
    {
      title: "Körperpflege",
      description: "Naturkosmetik und Pflegeprodukte mit Heilpflanzen – sanft zur Haut und frei von synthetischen Zusatzstoffen.",
      price: "ab CHF 14.–",
    },
    {
      title: "Wickel-Sets",
      description: "Fertig zusammengestellte Sets für Wickel und Auflagen zum Selbstanwenden zuhause. Mit Anleitung.",
      price: "ab CHF 22.–",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Shop</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Ausgewählte Naturprodukte für Ihre Gesundheit. 
              Alle Produkte sind in der Praxis erhältlich oder können bestellt werden.
            </p>
            <div className="mt-4 h-0.5 w-16 bg-primary" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={shopImg} alt="Naturprodukte Shop" className="w-full h-auto object-cover" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground text-center mb-12">
            Unsere Produkte
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div key={cat.title} className="rounded-xl bg-card p-6 shadow-sm border border-border flex flex-col">
                <h3 className="font-heading text-lg font-semibold text-foreground">{cat.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{cat.description}</p>
                <p className="mt-4 text-sm font-medium text-primary">{cat.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Für Bestellungen und Beratung kontaktieren Sie mich gerne direkt.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
