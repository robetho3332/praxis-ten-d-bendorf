import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Praxis RBT Dübendorf" },
      { name: "description", content: "Datenschutzerklärung der Praxis RBT – Romina Bertoletti Thoma, Naturheilkunde TEN in Dübendorf." },
      { property: "og:title", content: "Datenschutz — Praxis RBT Dübendorf" },
      { property: "og:description", content: "Datenschutzerklärung der Praxis RBT – Romina Bertoletti Thoma, Naturheilkunde TEN in Dübendorf." },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Datenschutzbestimmungen</h1>
          <div className="mt-4 h-0.5 w-16 bg-primary" />

          <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln die personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (E-Mail-Adressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Diese Daten werden von uns zu keinen anderen, als den jeweils kenntlich gemachten Zwecken verwendet und nicht an Dritte weitergereicht.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-foreground">1. Erhebung personenbezogener Daten</h2>
              <p className="mt-2">
                Im Folgenden informieren wir über die Erhebung personenbezogener Daten bei Nutzung dieser Website. Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, also z. B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.
              </p>
              <p className="mt-2">
                Bei der reinen informatorischen Nutzung der Website, also wenn Sie sich nicht zur Nutzung der Website anmelden, registrieren oder uns sonst Informationen übermitteln, erheben wir keine personenbezogenen Daten, mit Ausnahme der Daten, die Ihr Browser übermittelt, um Ihnen den Besuch der Website zu ermöglichen. Diese sind:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>jeweils übertragene Datenmenge</li>
                <li>Website, von der die Anforderung kommt</li>
                <li>Browser</li>
                <li>Betriebssystem und dessen Oberfläche</li>
                <li>Sprache und Version der Browsersoftware</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">2. Logfiles und Cookies</h2>
              <p className="mt-2">
                Cookies sind Informationen, die von unserem Webserver oder Webservern Dritter an die Web-Browser der Nutzer übertragen und dort für einen späteren Abruf gespeichert werden. Bei Cookies kann es sich um kleine Dateien oder sonstige Arten der Informationsspeicherung handeln.
              </p>
              <p className="mt-2">
                Wir verwenden «Session-Cookies», die nur für die Zeitdauer des aktuellen Besuchs auf unserer Onlinepräsenz abgelegt werden. In einem Session-Cookie wird eine zufällig erzeugte eindeutige Identifikationsnummer abgelegt, eine sogenannte Session-ID. Session-Cookies werden gelöscht, wenn Sie die Nutzung unseres Onlineangebotes beendet haben und sich z.B. ausloggen oder den Browser schliessen.
              </p>
              <p className="mt-2">
                Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses Onlineangebotes führen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">3. Google Analytics</h2>
              <p className="mt-2">
                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. Google Analytics verwendet sog. «Cookies». Die durch das Cookie erzeugte Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Durch die IP-Anonymisierung auf dieser Webseite wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.
              </p>
              <p className="mt-2">
                Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Informationen des Drittanbieters: Google Dublin, Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Ireland.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">4. Kontaktaufnahme</h2>
              <p className="mt-2">
                Bei einer Kontaktaufnahme über das Kontaktformular wird ihre E-Mail-Adresse, der Name und die Nachricht von uns gespeichert, sodass wir mit ihnen in Kontakt treten können.
              </p>
              <p className="mt-2">
                Soweit sie durch bewusstes und eindeutiges, aktives Anklicken der Option im Rahmen des Kontaktformulars unsere Datenschutzerklärung akzeptieren, willigen sie ein, dass wir die freiwillig im Kontaktformular angegebenen personenbezogenen Daten zu Zwecken der Werbung für eigene Angebote erheben, verarbeiten und nutzen dürfen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">6. Google Marketing Services</h2>
              <p className="mt-2">
                Wir nutzen auf Grundlage unserer berechtigten Interessen die Marketing- und Remarketing-Dienste der Google Inc. Die Google-Marketing-Services erlauben uns Werbeanzeigen für und auf unserer Website gezielter anzuzeigen, um Nutzern nur Anzeigen zu präsentieren, die potentiell deren Interessen entsprechen.
              </p>
              <p className="mt-2">
                Weitere Informationen zur Datennutzung zu Marketingzwecken durch Google erfahren Sie auf der Übersichtsseite:{" "}
                <a href="http://www.google.com/policies/technologies/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.google.com/policies/technologies/ads</a>. Die Datenschutzerklärung von Google ist unter{" "}
                <a href="http://www.google.com/policies/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.google.com/policies/privacy</a> abrufbar.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">7. Nutzerprofil / Webtracking</h2>
              <p className="mt-2">
                Soweit Sie durch bewusstes und eindeutiges, aktives Anklicken unsere Datenschutzerklärung akzeptieren, willigen Sie ein, dass wir Ihre auf unserer Website erhobenen personenbezogenen Daten zur Erstellung eines Nutzungsprofils von Ihnen zu Zwecken der eigenen Werbung erheben, verwenden und nutzen dürfen.
              </p>
              <p className="mt-2">
                Sie haben das Recht jederzeit kostenlose Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten, einschliesslich Herkunft und Empfänger Ihrer Daten sowie den Zweck der Datenverarbeitung. Weiterhin haben Sie das Recht der weiteren Nutzung Ihrer Daten für Werbezwecke zu widersprechen und diese sperren, berichtigen oder löschen zu lassen.
              </p>
              <p className="mt-2">
                Sie können Ihre erteilten Einwilligungen zur Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten jederzeit für die Zukunft widerrufen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">8. Änderung der Datenschutzerklärung</h2>
              <p className="mt-2">
                Anbieter und verantwortliche Stelle ist Praxis für manuelle Therapien & Naturheilkunde Romina Bertoletti Thoma. Weitere Informationen finden Sie in unserem Impressum. Stand: Oktober 2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
