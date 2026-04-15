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
          <div className="mt-4 h-0.5 w-16 bg-primary" />

          <div className="mt-12 space-y-6">
            {/* Contact Info */}
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Praxis für manuelle Therapien & Naturheilkunde<br />
                Romina Bertoletti Thoma<br />
                Eidg. dipl. Naturheilpraktikerin TEN<br />
                Alte Gfennstrasse 86<br />
                8600 Dübendorf<br />
                <a href="tel:+41794531716" className="text-primary hover:underline">079 453 17 16</a>
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground leading-relaxed">
                Ab Bahnhof Dübendorf mit dem Bus Nr. 752 Richtung Kunsteisbahn<br />
                Haltestelle Sonnenberg (3 Min. Fahrt)
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Oder mit dem Auto, Parkplatz direkt vor dem Haus
              </p>
            </div>

            <div className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.5!2d8.6236!3d47.3969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa7e2f3a3e8ed%3A0x0!2sAlte+Gfennstrasse+86%2C+8600+D%C3%BCbendorf!5e0!3m2!1sde!2sch!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Praxis RBT auf Google Maps"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form className="mt-12 max-w-lg space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem('name') as HTMLInputElement).value;
            const email = (form.elements.namedItem('email') as HTMLInputElement).value;
            const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
            const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
            const subject = `Kontaktanfrage von ${name}`;
            const body = `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\n\nNachricht:\n${message}`;
            window.location.href = `mailto:r.bertolettithoma@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          }}>
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
      </section>
    </div>
  );
}
