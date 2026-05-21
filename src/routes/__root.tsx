import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useCartSync } from "@/hooks/useCartSync";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-heading font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Seite nicht gefunden
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gewünschte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Praxis RBT — Naturheilkunde TEN Dübendorf" },
      { name: "description", content: "Praxis für manuelle Therapien & Naturheilkunde TEN von Romina Bertoletti Thoma in Dübendorf." },
      { name: "author", content: "Romina Bertoletti Thoma" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "Praxis RBT — Naturheilkunde TEN Dübendorf" },
      { name: "twitter:title", content: "Praxis RBT — Naturheilkunde TEN Dübendorf" },
      { property: "og:description", content: "Praxis für manuelle Therapien & Naturheilkunde TEN von Romina Bertoletti Thoma in Dübendorf." },
      { name: "twitter:description", content: "Praxis für manuelle Therapien & Naturheilkunde TEN von Romina Bertoletti Thoma in Dübendorf." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8bd0b6f9-bd95-4e7b-9a53-5296c55a477f/id-preview-7c8198d4--7d4bb433-8a08-4f7b-b5b2-e465e718b57d.lovable.app-1779220280078.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8bd0b6f9-bd95-4e7b-9a53-5296c55a477f/id-preview-7c8198d4--7d4bb433-8a08-4f7b-b5b2-e465e718b57d.lovable.app-1779220280078.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <CartSyncBridge />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </QueryClientProvider>
  );
}

function CartSyncBridge() {
  useCartSync();
  return null;
}
