import { createFileRoute } from "@tanstack/react-router";
import portraitImage from "@/assets/romina-portrait.jpg";

export const Route = createFileRoute("/ueber-mich")({
  head: () => ({
    meta: [
      { title: "Über mich — Praxis RBT Dübendorf" },
      { name: "description", content: "Erfahre mehr über Romina Bertoletti Thoma und ihre Praxis für Naturheilkunde TEN in Dübendorf." },
      { property: "og:title", content: "Über mich — Praxis RBT" },
      { property: "og:description", content: "Naturheilpraktikerin Romina Bertoletti Thoma in Dübendorf." },
    ],
  }),
  component: UeberMichPage,
});

function UeberMichPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Qualifikationen */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-muted-foreground text-lg leading-loose">
                Eidg. dipl. Naturheilpraktikerin TEN
                <br />
                Berufsmasseurin
                <br />
                Hormoncoach
                <br />
                Fachberaterin Darmgesundheit
                <br />
                Hautpflegespezialistin
              </p>
            </div>

            {/* Foto */}
            <div className="flex-shrink-0">
              <img
                src={portraitImage}
                alt="Romina Bertoletti Thoma"
                className="w-64 h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          {/* Google Rezensionen */}
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/search?q=romina+bertoletti+thoma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Bewertungen auf Google ansehen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
