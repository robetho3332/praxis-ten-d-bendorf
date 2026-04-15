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

      {/* Manuelle Therapien */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl font-semibold text-foreground md:text-5xl mb-6">
            Manuelle Therapien
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Schmerzen im Bewegungsapparat sind schon fast zu einer Volkskrankheit geworden. Bei einer kurzen Anamnese, erzählst du mir was deine aktuellen Beschwerden sind, wir entscheiden dann gemeinsam welche Therapiemethode die passende ist. Oder möchtest du einfach bei einer Massage oder Reflexzonentherapie entspannen? So oder so, melde dich gerne für einen Termin.
          </p>
        </div>
      </section>

      {/* Naturheilkunde TEN */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl font-semibold text-foreground md:text-5xl mb-6">
            Traditionelle Europäische Naturheilkunde
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Bei einem ausführlichen Erstgespräch, schauen wir uns gemeinsam deine Krankheitsgeschichte an, dabei geht es nicht nur um die aktuellen Beschwerden sondern um eine ganzheitliche Erfassung von dir als Person. Wir besprechen deine Therapieziele und was in der aktuellen Situation umsetzbar ist. Anhand einer Zungen, Puls und Irisdiagnose ermittle ich deine Konstitution, welche in den Therapieplan miteinbezogen wird. Bei Bedarf kann eine externe Labordiagnostik durchgeführt werden. Nach dem ich deinen persönlichen Therapieplan erstellt habe, besprechen wir diesen und vereinbaren dementsprechende Termine.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Bist du interessiert, dann melde dich für ein Erstgespräch.
          </p>
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
