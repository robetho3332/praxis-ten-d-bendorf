import { createFileRoute } from "@tanstack/react-router";
import diagnostikImg from "@/assets/diagnostik.jpg";

export const Route = createFileRoute("/diagnostik")({
  head: () => ({
    meta: [
      { title: "Diagnostik — Praxis RBT Dübendorf" },
      { name: "description", content: "Naturheilkundliche Diagnostik nach TEN: Zungendiagnostik, Pulsdiagnostik, Irisdiagnostik und Labordiagnostik." },
      { property: "og:title", content: "Diagnostik — Praxis RBT" },
      { property: "og:description", content: "Ganzheitliche Diagnostik nach traditioneller europäischer Naturheilkunde." },
    ],
  }),
  component: DiagnostikPage,
});

function DiagnostikPage() {
  const methods = [
    {
      title: "Zungendiagnostik",
      description: "Form, Farbe und Belag der Zunge geben Aufschluss über den Zustand der Verdauungsorgane, Stoffwechselprozesse und die allgemeine Vitalität.",
    },
    {
      title: "Pulsdiagnostik",
      description: "Der Puls verrät viel über den Zustand des Herz-Kreislauf-Systems und die energetische Situation des Körpers nach TEN-Prinzipien.",
    },
    {
      title: "Irisdiagnostik",
      description: "Die Iris zeigt die angeborene Konstitution und erworbene Belastungen. Diese Methode hilft, Schwachstellen im Organismus frühzeitig zu erkennen.",
    },
    {
      title: "Antlitzdiagnostik",
      description: "Das Gesicht spiegelt den inneren Zustand des Körpers. Durch gezielte Beobachtung lassen sich Hinweise auf Organbelastungen und Konstitutionstypen erkennen.",
    },
    {
      title: "Labordiagnostik",
      description: "Bei Bedarf kann eine externe Labordiagnostik durchgeführt werden, um ein noch umfassenderes Bild deines Gesundheitszustands zu erhalten.",
    },
  ];

  return (
    <div>
      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Diagnostik</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Anhand einer Zungen-, Puls- und Irisdiagnose ermittle ich deine Konstitution, 
              welche in den Therapieplan miteinbezogen wird. Bei Bedarf kann eine externe 
              Labordiagnostik durchgeführt werden.
            </p>
            <div className="mt-4 h-0.5 w-16 bg-primary" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={diagnostikImg} alt="Diagnostik" className="w-full h-auto object-cover" loading="lazy" width={800} height={600} />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground text-center mb-12">
            Diagnostische Methoden
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {methods.map((m) => (
              <div key={m.title} className="rounded-xl bg-card p-6 shadow-sm border border-border">
                <h3 className="font-heading text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
