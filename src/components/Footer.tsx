import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Praxis für manuelle Therapien<br />
              & Naturheilkunde TEN<br />
              Romina Bertoletti Thoma
            </p>
          </div>

          <div></div>

          <div></div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Romina Bertoletti Thoma. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
