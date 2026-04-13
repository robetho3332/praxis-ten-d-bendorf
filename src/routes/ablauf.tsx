import { createFileRoute } from "@tanstack/react-router";
import ablaufImg from "@/assets/ablauf-bg.jpg";

export const Route = createFileRoute("/ablauf")({
  head: () => ({
    meta: [
      { title: "Ablauf — Praxis RBT Dübendorf" },
      { name: "description", content: "So läuft deine Behandlung ab: Erstgespräch, ganzheitliche Diagnostik, individueller Therapieplan und Begleitung." },
      { property: "og:title", content: "Ablauf — Praxis RBT" },
      { property: "og:description", content: "Dein Weg zur ganzheitlichen Behandlung." },
    ],
  }),
  component: AblaufPage,
});

function AblaufPage() {
  const steps = [
    {
      number: "01",
      title: "Erstgespräch",
      description: "Bei einem ausführlichen Erstgespräch schauen wir uns gemeinsam deine Krankheitsgeschichte an. Dabei geht es nicht nur um die aktuellen Beschwerden, sondern um eine ganzheitliche Erfassung von dir als Person. Wir besprechen deine Therapieziele und was in der aktuellen Situation umsetzbar ist.",
    },
    {
      number: "02",
      title: "Diagnostik",
      description: "Anhand einer Zungen-, Puls- und Irisdiagnose ermittle ich deine Konstitution, welche in den Therapieplan miteinbezogen wird. Bei Bedarf kann eine externe Labordiagnostik durchgeführt werden.",
    },
    {
      number: "03",
      title: "Therapieplan",
      description: "Nachdem ich deinen persönlichen Therapieplan erstellt habe, besprechen wir diesen gemeinsam und vereinbaren dementsprechende Termine.",
    },
    {
      number: "04",
      title: "Behandlung",
      description: "Die Therapie umfasst manuelle Behandlungen, pflanzliche Arzneimittel und ausleitende Verfahren – individuell auf dich abgestimmt. Stundenansatz: Fr. 147.00.",
    },
    {
      number: "05",
      title: "Begleitung",
      description: "Ich begleite dich während des gesamten Heilungsprozesses. Regelmässige Kontrollen stellen sicher, dass die Therapie optimal wirkt.",
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={ablaufImg} alt="" className="h-full w-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Ablauf</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Schritt für Schritt zu deinem Wohlbefinden – so gestaltet sich der Weg in meiner Praxis.
          </p>
          <div className="mt-4 h-0.5 w-16 bg-primary" />
        </div>
      </section>

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

      {/* Hinweis */}
      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Wichtige Hinweise</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Bei Nichterscheinen oder Absage des Termins weniger als 24h vorher wird der Behandlungspreis in Rechnung gestellt.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ich bin beim EMR unter der ZSR Nr. M100663 registriert. Bitte erkundige dich im Voraus bei deinem 
            Krankenversicherer, ob die Behandlung von der Zusatzversicherung übernommen wird.
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
