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

        </div>
      </section>
    </div>
  );
}
