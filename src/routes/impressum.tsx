import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Praxis RBT Dübendorf" },
      { name: "description", content: "Impressum der Praxis RBT – Romina Bertoletti Thoma, Naturheilkunde TEN in Dübendorf." },
      { property: "og:title", content: "Impressum — Praxis RBT Dübendorf" },
      { property: "og:description", content: "Impressum der Praxis RBT – Romina Bertoletti Thoma, Naturheilkunde TEN in Dübendorf." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Impressum</h1>
          <div className="mt-4 h-0.5 w-16 bg-primary" />

          <div className="mt-12 space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Kontaktadresse</h2>
              <p className="mt-2">
                Praxis für manuelle Therapien und Naturheilkunde<br />
                Romina Bertoletti Thoma<br />
                Alte Gfennstrasse 86<br />
                CH-8600 Dübendorf<br />
                <a href="mailto:info@naturheilkundepraxis-rbt.ch" className="text-primary hover:underline">info@naturheilkundepraxis-rbt.ch</a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Haftungsausschluss</h2>
              <p className="mt-2">
                Praxis für manuelle Therapien und Naturheilkunde, Romina Bertoletti Thoma, übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Haftung für Links</h2>
              <p className="mt-2">
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Urheber- und Leistungsschutzrechte</h2>
              <p className="mt-2">
                Die auf dieser Website veröffentlichten Inhalte unterliegen dem Schweizerischen Urheberrechtsgesetz. Jede Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
