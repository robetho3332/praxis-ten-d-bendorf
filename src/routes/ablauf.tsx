import { createFileRoute } from "@tanstack/react-router";
import ablaufImg from "@/assets/ablauf-bg.jpg";

export const Route = createFileRoute("/ablauf")({
  head: () => ({
    meta: [
      { title: "Ablauf — Praxis RBT Dübendorf" },
      { name: "description", content: "So läuft Ihre Behandlung ab: vom Erstgespräch über die Diagnostik bis zur individuellen Therapie." },
      { property: "og:title", content: "Ablauf — Praxis RBT" },
      { property: "og:description", content: "Ihr Weg zur ganzheitlichen Behandlung in unserer Praxis." },
    ],
  }),
  component: AblaufPage,
});

function AblaufPage() {
  const steps = [
    {
      number: "01",
      title: "Erstgespräch",
      description: "In einem ausführlichen Gespräch lernen wir uns kennen. Sie schildern Ihre Beschwerden, Ihre Geschichte und Ihre Ziele. Dieses Gespräch ist kostenlos und unverbindlich.",
    },
    {
      number: "02",
      title: "Ganzheitliche Diagnostik",
      description: "Mit traditionellen Methoden wie Antlitz-, Zungen- und Irisdiagnostik erstelle ich ein umfassendes Bild Ihres Gesundheitszustands nach den Prinzipien der TEN.",
    },
    {
      number: "03",
      title: "Therapieplan",
      description: "Auf Basis der Diagnostik erstelle ich Ihren individuellen Therapieplan. Gemeinsam besprechen wir die geeigneten Methoden und den zeitlichen Rahmen.",
    },
    {
      number: "04",
      title: "Behandlung",
      description: "Die Therapie umfasst manuelle Behandlungen, pflanzliche Arzneimittel und ausleitende Verfahren – abgestimmt auf Ihre Bedürfnisse.",
    },
    {
      number: "05",
      title: "Begleitung",
      description: "Ich begleite Sie während des gesamten Heilungsprozesses. Regelmässige Kontrollen stellen sicher, dass die Therapie optimal wirkt.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={ablaufImg} alt="" className="h-full w-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Ablauf</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Schritt für Schritt zu Ihrem Wohlbefinden – so gestaltet sich der Weg in meiner Praxis.
          </p>
          <div className="mt-4 h-0.5 w-16 bg-primary" />
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-heading font-semibold text-accent-foreground">
                  {step.number}
                </span>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">{step.title}</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
