import { createFileRoute } from "@tanstack/react-router";
import farfallaLogo from "@/assets/logos/farfalla.png";
import kingnatureLogo from "@/assets/logos/kingnature.png";
import sundayLogo from "@/assets/logos/sunday.png";
import zimmerliLogo from "@/assets/logos/zimmerli.jpg";
import mrsfluryLogo from "@/assets/logos/mrsflury.png";
import omnibioticLogo from "@/assets/logos/omnibiotic.png";

export const Route = createFileRoute("/rabattcodes")({
  head: () => ({
    meta: [
      { title: "Rabattcodes — Praxis RBT Dübendorf" },
      { name: "description", content: "Rabattcodes und Bestellinformationen für Produkte bei Praxis RBT." },
      { property: "og:title", content: "Rabattcodes — Praxis RBT" },
      { property: "og:description", content: "Aktuelle Rabattcodes und Produktbestellungen." },
    ],
  }),
  component: RabattcodesPage,
});

function RabattcodesPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl mb-6">
            Rabattcodes
          </h1>

          <div className="text-muted-foreground leading-relaxed mb-12">
            <p>
              Bestellungen der folgenden Produkte, werden ab einem Mindestbestellwert von <strong className="text-foreground">Fr. 70.00</strong>, portofrei an eine Adresse in der Schweiz geliefert.
            </p>
            <p className="mt-2">
              Die Zustellung erfolgt in der Regel, innerhalb von 4-6 Arbeitstagen.
            </p>
            <p className="mt-2">
              Für Bestellungen unter diesem Betrag, fallen Versandkosten von <strong className="text-foreground">Fr. 8.50</strong> an.
            </p>
          </div>

          {/* Farfalla */}
          <div className="mb-12">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3 text-center">
              Pflegeprodukte, Ätherische Öle und mehr...
            </h2>
            <div className="flex justify-center mb-4">
              <img src={farfallaLogo} alt="Farfalla" className="h-16 object-contain mix-blend-multiply dark:mix-blend-screen dark:invert" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.farfalla.ch/de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://www.farfalla.ch/de/
              </a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
          </div>

          {/* Kingnature */}
          <div className="mb-12">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3 text-center">
              Vitalstoffe und mehr...
            </h2>
            <div className="flex justify-center mb-4">
              <img src={kingnatureLogo} alt="Kingnature" className="h-20 object-contain" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.kingnature.ch/?a=1646" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://www.kingnature.ch/
              </a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center mt-2">
              Möchtest du direkt bestellen, erhälst du mit dem Code <strong className="text-foreground">RBT10</strong>, 10% auf deine ERSTE Bestellung.
            </p>
          </div>

          {/* Sunday Natural */}
          <div className="mb-12">
            <div className="flex justify-center mb-4">
              <img src={sundayLogo} alt="Sunday Natural" className="h-20 object-contain" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.sunday.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://www.sunday.de/
              </a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center mt-2">
              Möchtest du direkt bestellen, gebe ich dir auf Anfrage einen Rabatt Code für deine ERSTE Bestellung.
            </p>
          </div>

          {/* Zimmerli Adaptogene */}
          <div className="mb-12">
            <div className="flex justify-center mb-4">
              <img src={zimmerliLogo} alt="Zimmerli Adaptogene" className="h-16 object-contain mix-blend-multiply dark:mix-blend-screen dark:invert" />
            </div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3 text-center">
              Adaptogene Teemischungen, Pulver und Kapseln
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.zimmerli-adaptogene.ch/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://www.zimmerli-adaptogene.ch/
              </a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center mt-2">
              Möchtest du direkt bestellen, erhälst du mit dem Code <strong className="text-foreground">RBT25</strong> 25% auf deine Bestellung.
            </p>
          </div>

          {/* Mrs. Flury */}
          <div className="mb-12">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3 text-center">
              Proteinpulver und mehr....
            </h2>
            <div className="flex justify-center mb-4">
              <img src={mrsfluryLogo} alt="Mrs. Flury" className="h-14 object-contain" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.mrsfluryshop.ch/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://www.mrsfluryshop.ch/
              </a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center mt-2">
              Möchtest du direkt bestellen, erhälst du mit dem Code <strong className="text-foreground">RBT10</strong> 10% auf deine Bestellung.
            </p>
          </div>

          {/* Omni-Biotic / Verfora */}
          <div className="mb-12">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3 text-center">
              Darmbakterien und mehr...
            </h2>
            <div className="flex justify-center mb-4">
              <img src={omnibioticLogo} alt="Omni-Biotic" className="h-24 object-contain mix-blend-multiply dark:mix-blend-screen dark:invert" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Schaue auf{" "}
              <a href="https://www.verfora.ch/de/markenfamilien/omnibiotic/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                omnibiotic
              </a>{" / "}
              <a href="https://www.verfora.ch/de/markenfamilien/omni-logic/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                omni-logic
              </a>{" / "}
              <a href="https://www.verfora.ch/de/markenfamilien/caricol/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                caricol
              </a>{" "}
              was du möchtest und sende mir die Liste per WhatsApp oder Mail.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
