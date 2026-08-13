import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="text-center">
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Praxis für manuelle Therapien & Naturheilkunde<br />
            Romina Bertoletti Thoma<br />
            Eidg. dipl. Naturheilpraktikerin TEN<br />
            Alte Gfennstrasse 86<br />
            8600 Dübendorf<br />
            <a href="tel:+41794531716" className="hover:text-primary-foreground transition-colors">079 453 17 16</a><br />
            <a href="mailto:r.bertolettithoma@icloud.com" className="hover:text-primary-foreground transition-colors">r.bertolettithoma@icloud.com</a>
          </p>
        </div>

        <nav aria-label="Behandlungen" className="mt-10 text-center">
          <h2 className="text-sm font-semibold text-primary-foreground/90">Behandlungen in Dübendorf</h2>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link to="/massage" className="hover:text-primary-foreground transition-colors underline">
                Medizinische Massage Dübendorf
              </Link>
            </li>
            <li>
              <Link to="/schroepfen" className="hover:text-primary-foreground transition-colors underline">
                Schröpfen Dübendorf
              </Link>
            </li>
            <li>
              <Link to="/ernaehrungsberatung" className="hover:text-primary-foreground transition-colors underline">
                Ernährungsberatung Dübendorf
              </Link>
            </li>
            <li>
              <Link to="/gesichtspflege" className="hover:text-primary-foreground transition-colors underline">
                Gesichtspflege Dübendorf
              </Link>
            </li>
            <li>
              <Link to="/hormonberatung" className="hover:text-primary-foreground transition-colors underline">
                Hormonberatung Dübendorf
              </Link>
            </li>
          </ul>
        </nav>


        <div className="mt-10 pt-6 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Romina Bertoletti Thoma. Alle Rechte vorbehalten.</span>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-primary-foreground transition-colors underline">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-primary-foreground transition-colors underline">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
