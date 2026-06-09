# Shop live schalten

Du hast 5 Produkte in Shopify (Alpine Rose Creme, Aromamour, Edelsteinöl, Geborgenheit Schaumbad, Vitality Shot). Die Shopify-Anbindung (`src/lib/shopify.ts`, `src/stores/cart.ts`) ist bereits eingerichtet — nur die Seite zeigt sie noch nicht.

## Was ich umsetze

1. **`src/routes/shop.tsx` neu aufbauen**
   - Produkte über `storefrontApiRequest(PRODUCTS_QUERY)` im Loader laden (TanStack Query + `ensureQueryData`)
   - Responsive Produktraster (Karten mit Bild, Titel, Kurzbeschreibung, Preis CHF)
   - Button "In den Warenkorb" → `useCartStore.addItem`
   - Karte als Link zur Detailseite
   - Leerer Zustand: "Noch keine Produkte verfügbar"
   - SEO-Meta aktualisieren (kein `noindex` mehr)

2. **Neue Route `src/routes/product.$handle.tsx`**
   - Lädt Einzelprodukt via `PRODUCT_BY_HANDLE_QUERY`
   - Bildgalerie, Beschreibung (descriptionHtml), Varianten-Auswahl, Mengen-Selector, "In den Warenkorb"
   - SEO-Meta dynamisch aus Produktdaten (Titel, Beschreibung, og:image vom Produktbild)
   - `notFoundComponent` + `errorComponent`

3. **Warenkorb-Drawer prüfen/anbinden**
   - Sicherstellen, dass der bestehende Cart-Drawer im Header sichtbar ist und korrekt zum Shopify-Checkout (`channel=online_store`, neuer Tab) weiterleitet

4. **Design**
   - Bestehende Design-Tokens (Praxis-Blau, Karten-Stil) verwenden — passt visuell zum Rest der Seite

## Technisch

- Keine Mock-Daten, alles live über Shopify Storefront API
- Sprache: Deutsch, Preise in CHF wie von Shopify geliefert
- Checkout: ausschließlich über `createShopifyCart` → `checkoutUrl` (keine manuellen URLs)

Soll ich loslegen?
