import { createFileRoute } from "@tanstack/react-router";
import diagnostikImg from "@/assets/diagnostik.jpg";

export const Route = createFileRoute("/diagnostik")({
  head: () => ({
    meta: [
      { title: "Diagnostik — Praxis RBT Dübendorf" },
      { name: "description", content: "Naturheilkundliche Diagnostik nach TEN: Antlitzdiagnostik, Zungendiagnostik, Irisdiagnostik und mehr." },
      { property: "og:title", content: "Diagnostik — Praxis RBT" },
      { property: "og:description", content: "Ganzheitliche Diagnostik nach traditioneller europäischer Naturheilkunde." },
    ],
  }),
  component: DiagnostikPage,
});

function DiagnostikPage() {
  const methods = [
    {
      title: "Antlitzdiagnostik",
      description: "Das Gesicht spiegelt den inneren Zustand des Körpers. Durch gezielte Beobachtung von Hautfarbe, Falten und Zonen lassen sich Hinweise auf Organbelastungen und Konstitutionstypen erkennen.",
    },
    {
      title: "Zungendiagnostik",
      description: "Form, Farbe und Belag der Zunge geben Aufschluss über den Zustand der Verdauungsorgane, Stoffwechselprozesse und die allgemeine Vitalität.",
    },
    {
      title: "Irisdiagnostik",
      description: "Die Iris zeigt angeborene Konstitution und erworbene Belastungen. Diese Methode hilft, Schwachstellen im Organismus frühzeitig zu erkennen.",
    },
    {
      title: "Pulsdiagnostik",
      description: "Der Puls verrät viel über den Zustand des Herz-Kreislauf-Systems und die energetische Situation des Körpers nach TEN-Prinzipien.",
    },
    {
      title: "Anamnese",
      description: "Ein ausführliches Gespräch über Ihre Krankengeschichte, Lebensumstände, Ernährung und emotionale Verfassung bildet die Grundlage jeder Behandlung.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Diagnostik</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Die traditionelle europäische Naturheilkunde verfügt über bewährte diagnostische Methoden, 
              die den Menschen in seiner Gesamtheit erfassen – körperlich, seelisch und energetisch.
            </p>
            <div className="mt-4 h-0.5 w-16 bg-primary" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={diagnostikImg} alt="Diagnostik Instrumente" className="w-full h-auto object-cover" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground text-center mb-12">
            Diagnostische Methoden
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {methods.map((method) => (
              <div key={method.title} className="rounded-xl bg-card p-6 shadow-sm border border-border">
                <h3 className="font-heading text-lg font-semibold text-foreground">{method.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
