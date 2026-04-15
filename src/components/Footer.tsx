import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            
            <p className="text-sm text-primary-foreground/80 leading-relaxed text-center">
              Praxis für manuelle Therapien & Naturheilkunde<br />
              Romina Bertoletti Thoma<br />
              Eidg. dipl. Naturheilpraktikerin TEN<br />
              Alte Gfennstrasse 86<br />
              8600 Dübendorf<br />
              <a href="tel:+41794531716" className="hover:text-primary-foreground transition-colors">079 453 17 16</a>
            </p>
          </div>

          <div></div>

          <div></div>
        </div>

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
