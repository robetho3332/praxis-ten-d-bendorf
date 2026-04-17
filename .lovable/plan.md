

## Ziel
Die statische `/shop`-Seite durch eine echte Shopify-Produktanzeige ersetzen, die deine hochgeladenen Produkte (inkl. der neuen Bilder) live aus Shopify lädt.

## Was jetzt gemacht wird

**1. Shopify-Zugangsdaten einrichten**
- Store-Domain via `shopify--get_shop_permanent_domain` holen
- Storefront-Token via `shopify--get_storefront_token` holen
- Konstanten in `src/lib/shopify.ts` ablegen (API-Version `2025-07`)

**2. Shop-Seite (`src/routes/shop.tsx`) umbauen**
- Hardcodierte `categories`-Liste entfernen
- Per GraphQL Storefront API echte Produkte laden (Titel, Bild, Preis, Beschreibung, Handle)
- Produktkarten zeigen: Bild, Titel, Preis (CHF), Kurzbeschreibung
- Jede Karte verlinkt zur Detailseite `/product/$handle`
- "In den Warenkorb"-Button pro Karte
- Leerer Zustand: "Keine Produkte gefunden" falls API leer

**3. Produkt-Detailseite `src/routes/product.$handle.tsx`**
- Einzelprodukt via Handle laden
- Bildergalerie, voller Beschreibungstext, Variantenauswahl, Preis
- "In den Warenkorb"-Button

**4. Warenkorb-System**
- Zustand-Store `src/stores/cart.ts` (Items, add/remove/update)
- Cart-Drawer-Komponente (Sheet) mit Zusammenfassung
- Cart-Icon im Header mit Badge (Anzahl Artikel)
- Checkout-Button erstellt Shopify-Cart via Storefront API und öffnet Checkout-URL (mit `channel=online_store`) in neuem Tab

**5. Hero-Bereich der Shop-Seite beibehalten**
- Bestehendes Hero-Bild und Einleitungstext bleiben
- Darunter das neue dynamische Produktraster

## Technische Details
- `@tanstack/react-query` für Produkt-Fetches (Caching, SSR-Loader)
- Loader in Route ruft `queryClient.ensureQueryData` auf
- QueryClientProvider muss in `__root.tsx` eingerichtet werden (falls noch nicht vorhanden — prüfen)
- Zustand für Cart-State (persist in localStorage)
- Cart-Drawer nutzt bestehende `ui/sheet.tsx`

## Nicht Teil dieses Schritts
- Keine Mock-Produkte, keine Fake-Reviews
- Keine Änderungen an anderen Seiten (Impressum, Datenschutz, Index)
- Rabattcodes-Integration (kommt später, falls gewünscht)

