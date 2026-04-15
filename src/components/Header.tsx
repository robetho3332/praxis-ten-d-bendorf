import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Start" },
  { to: "/methoden", label: "Angebot" },
  
  { to: "/abrechnung", label: "Abrechnung" },
  { to: "/rabattcodes", label: "Rabattcodes" },
  { to: "/ueber-mich", label: "Über\u00A0mich" },
  { to: "/kontakt", label: "Kontakt" },
  { to: "/shop", label: "Shop" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-18 py-4">
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img src={logo} alt="Praxis RBT — Romina Bertoletti Thoma" className="h-40 w-auto -mt-4" />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium tracking-wide text-foreground/70 transition-colors hover:text-primary"
                activeProps={{ className: "!text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground ml-auto"
            aria-label="Menü öffnen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block text-sm font-medium text-foreground/70 hover:text-primary py-1"
              activeProps={{ className: "!text-primary" }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
