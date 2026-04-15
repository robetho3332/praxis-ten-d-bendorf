import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg font-semibold mb-3">Praxis RBT</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Praxis für manuelle Therapien<br />
              & Naturheilkunde TEN<br />
              Romina Bertoletti Thoma
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/ablauf" className="hover:text-primary-foreground transition-colors">Ablauf</Link></li>
              <li><Link to="/diagnostik" className="hover:text-primary-foreground transition-colors">Diagnostik</Link></li>
              <li><Link to="/methoden" className="hover:text-primary-foreground transition-colors">Methoden</Link></li>
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">Shop</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-3">Kontakt</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Dübendorf, Schweiz<br />
              <Link to="/kontakt" className="underline hover:text-primary-foreground transition-colors">
                Kontaktformular
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Romina Bertoletti Thoma. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
