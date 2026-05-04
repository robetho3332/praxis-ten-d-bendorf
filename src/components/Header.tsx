import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { CartDrawer } from "@/components/CartDrawer";

const anchorItems = [
  { href: "#start", label: "Start" },
  { href: "#angebot", label: "Angebot" },
  { href: "#abrechnung", label: "Abrechnung" },
  { href: "#rabattcodes", label: "Rabattcodes" },
  { href: "#ueber-mich", label: "Über\u00A0mich" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate({ to: "/" }).then(() => {
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-18 py-4">
        <div className="flex justify-center -mb-2">
          <Link to="/">
            <img src={logo} alt="Praxis RBT — Romina Bertoletti Thoma" className="h-40 w-auto -mt-6" />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 mx-auto">
            {anchorItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className="text-sm font-medium tracking-wide text-foreground/70 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/shop"
              className="text-sm font-medium tracking-wide text-foreground/70 transition-colors hover:text-primary"
              activeProps={{ className: "!text-primary" }}
            >
              Shop
            </Link>
          </nav>

          <div className="hidden md:block absolute right-18">
            <CartDrawer />
          </div>

          <div className="md:hidden ml-auto flex items-center gap-2">
            <CartDrawer />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-foreground"
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
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {anchorItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="block text-sm font-medium text-foreground/70 hover:text-primary py-1"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/shop"
            className="block text-sm font-medium text-foreground/70 hover:text-primary py-1"
            activeProps={{ className: "!text-primary" }}
            onClick={() => setMobileOpen(false)}
          >
            Shop
          </Link>
        </nav>
      )}
    </header>
  );
}
