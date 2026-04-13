import { createFileRoute } from "@tanstack/react-router";
import methodenImg from "@/assets/methoden.jpg";

export const Route = createFileRoute("/methoden")({
  head: () => ({
    meta: [
      { title: "Methoden — Praxis RBT Dübendorf" },
      { name: "description", content: "Therapiemethoden der TEN: Phytotherapie, Schröpfen, manuelle Therapien, Wickel und ausleitende Verfahren." },
      { property: "og:title", content: "Methoden — Praxis RBT" },
      { property: "og:description", content: "Unsere Behandlungsmethoden aus der traditionellen europäischen Naturheilkunde." },
    ],
  }),
  component: MethodenPage,
});

function MethodenPage() {
  const therapies = [
    {
      title: "Manuelle Therapien",
      description: "Gezielte Handgriffe und Techniken lösen Blockaden im Bewegungsapparat, fördern die Durchblutung und unterstützen den Lymphfluss.",
      icon: "🤲",
    },
    {
      title: "Phytotherapie",
      description: "Pflanzenheilkunde ist eine der ältesten Therapieformen. Individuell zusammengestellte Kräutermischungen, Tinkturen und Tees unterstützen die Heilung.",
      icon: "🌿",
    },
    {
      title: "Schröpfen",
      description: "Durch Unterdruck auf der Haut wird die Durchblutung angeregt, Stoffwechselschlacken werden ausgeleitet und Verspannungen gelöst.",
      icon: "⭕",
    },
    {
      title: "Wickel & Auflagen",
      description: "Warme oder kalte Anwendungen mit Heilpflanzen wirken gezielt auf bestimmte Körperregionen und fördern die Regeneration.",
      icon: "🧴",
    },
    {
      title: "Ausleitende Verfahren",
      description: "Entgiftung und Entschlackung des Körpers durch bewährte naturheilkundliche Techniken – für einen freien Stoffwechsel.",
      icon: "💧",
    },
    {
      title: "Ernährungsberatung",
      description: "Individuell abgestimmte Ernährungsempfehlungen nach den Prinzipien der TEN bilden das Fundament für nachhaltige Gesundheit.",
      icon: "🥗",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-md">
            <img src={methodenImg} alt="Therapiemethoden" className="w-full h-auto object-cover" width={800} height={600} />
          </div>
          <div className="order-1 md:order-2">
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Methoden</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Die TEN bietet ein breites Spektrum an sanften und wirkungsvollen Therapiemethoden. 
              Jede Behandlung wird individuell auf Sie abgestimmt.
            </p>
            <div className="mt-4 h-0.5 w-16 bg-primary" />
          </div>
        </div>
      </section>

      {/* Therapies Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {therapies.map((therapy) => (
              <div key={therapy.title} className="rounded-xl bg-card p-6 shadow-sm border border-border transition-all hover:shadow-md">
                <span className="text-3xl">{therapy.icon}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">{therapy.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{therapy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
