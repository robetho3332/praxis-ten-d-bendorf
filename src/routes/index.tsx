import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praxis RBT — Naturheilkunde TEN & Manuelle Therapien in Dübendorf" },
      { name: "description", content: "Praxis für manuelle Therapien & Naturheilkunde TEN von Romina Bertoletti Thoma in Dübendorf. Massage, Schröpfen, Phytotherapie, Ernährungsberatung und mehr." },
      { property: "og:title", content: "Praxis RBT — Naturheilkunde TEN in Dübendorf" },
      { property: "og:description", content: "Ganzheitliche Naturheilkunde TEN & manuelle Therapien in Dübendorf." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <h1 className="animate-fade-in-up-delay mt-4 font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Manuelle Therapien & Naturheilkunde
            </h1>
            <p className="animate-fade-in-up-delay-2 mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Schmerzen im Bewegungsapparat? Oder möchtest du einfach bei einer Massage entspannen? 
              Melde dich gerne für einen Termin.
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
                So läuft es ab
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro TEN */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Traditionelle Europäische Naturheilkunde
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Bei einem ausführlichen Erstgespräch schauen wir uns gemeinsam deine Krankheitsgeschichte an. 
            Dabei geht es nicht nur um die aktuellen Beschwerden, sondern um eine ganzheitliche Erfassung 
            von dir als Person. Anhand einer Zungen-, Puls- und Irisdiagnose ermittle ich deine Konstitution, 
            welche in den Therapieplan miteinbezogen wird.
          </p>
          <div className="mt-4 mx-auto h-0.5 w-16 bg-primary" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-secondary/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-3xl font-semibold text-foreground md:text-4xl mb-4">
            Mein Angebot
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Stundenansatz für manuelle Therapien & Naturheilkunde: <strong className="text-foreground">Fr. 147.00</strong>
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Massage", desc: "Klassische Massage bei Muskelverspannungen und Belastungen des Alltags." },
              { title: "Ernährungsberatung", desc: "Pflanzenbasierte Ernährungsberatung und Optimierung deiner Essgewohnheiten." },
              { title: "Pflanzenheilkunde", desc: "Tinkturen, Tees und pulverisierte Pflanzenteile, individuell abgestimmt." },
              { title: "Schröpfen", desc: "Einfluss auf innere Organe über Reflexzonen, Linderung bei Schmerzen." },
              { title: "Fussreflexzonen", desc: "Aktivierung der Selbstheilungskräfte über die Reflexzonen am Fuss." },
              { title: "Dorntherapie", desc: "Sanfte Methode zur Entlastung von Nervenbahnen und Energiebahnen." },
            ].map((s) => (
              <Link
                key={s.title}
                to="/methoden"
                className="group bg-card p-6 shadow-sm border border-border transition-all hover:shadow-md rounded-full"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-3 inline-flex text-sm font-medium text-primary group-hover:underline">
                  Mehr erfahren →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMR Info */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
            Zusatzversicherung
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ich bin beim EMR unter der ZSR Nr. M100663 registriert. Bitte erkundige dich im Voraus 
            bei deinem Krankenversicherer, ob die Behandlung von der Zusatzversicherung übernommen wird. 
            Jeder Krankenversicherer vergütet ausschliesslich Behandlungen gemäss seinem Leistungskatalog.
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

      {/* CTA */}
      <section className="section-padding bg-accent/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Bist du interessiert?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Melde dich für ein Erstgespräch oder einen Behandlungstermin.
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
