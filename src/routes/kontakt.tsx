import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Praxis RBT Dübendorf" },
      { name: "description", content: "Kontaktieren Sie die Praxis RBT in Dübendorf. Termin vereinbaren für Naturheilkunde TEN." },
      { property: "og:title", content: "Kontakt — Praxis RBT" },
      { property: "og:description", content: "Vereinbaren Sie einen Termin in unserer Praxis in Dübendorf." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">Kontakt</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Ich freue mich auf Ihre Nachricht. Vereinbaren Sie ein kostenloses Erstgespräch.
          </p>
          <div className="mt-4 h-0.5 w-16 bg-primary" />

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">Praxis</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Praxis für manuelle Therapien<br />
                  & Naturheilkunde TEN<br />
                  Romina Bertoletti Thoma
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">Adresse</h2>
                <p className="mt-2 text-muted-foreground">
                  Dübendorf, Schweiz
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">Öffnungszeiten</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Montag – Freitag: nach Vereinbarung<br />
                  Samstag: nach Vereinbarung
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="ihre@email.ch"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="079 123 45 67"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Nachricht</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Ihre Nachricht..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
