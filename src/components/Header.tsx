import { useState, useCallback } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { href: "#start", label: "Start" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#diagnostik", label: "Diagnostik" },
  { href: "#angebot", label: "Angebot" },
  { href: "#shop", label: "Shop" },
  { href: "#rabattcodes", label: "Rabattcodes" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 200;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-18 py-4">
        <div className="flex justify-center mb-8">
          <a href="#start" onClick={(e) => handleClick(e, "#start")}>
            <img src={logo} alt="Praxis RBT — Romina Bertoletti Thoma" className="h-40 w-auto -mt-4" />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 mx-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm font-medium tracking-wide text-foreground/70 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
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
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="block text-sm font-medium text-foreground/70 hover:text-primary py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
