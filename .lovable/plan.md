## Ziel

Die Seite auf **Cloudflare Pages** hosten (kostenlos) und mit deiner Domain `naturheilkundepraxis-rbt.ch` (registriert bei Swizzonic) verbinden. So zahlst du nur die Domain — kein Lovable Pro, kein Cloudflare-Plan nötig.

## Wichtig vorab

Dieses Projekt ist **TanStack Start** und für **Cloudflare Workers** konfiguriert (siehe `wrangler.jsonc`). Cloudflare Pages unterstützt das über die neue **Workers-Integration** (Pages + Functions). Reines statisches Hosting reicht hier nicht, weil Server-Funktionen / SSR mitlaufen müssen.

Es gibt zwei realistische Wege:

### Weg A (empfohlen): Cloudflare Workers via `wrangler deploy`
Passt 1:1 zur vorhandenen Konfiguration. Kostenlos im Free-Tier (100k Requests/Tag).

### Weg B: Cloudflare Pages mit Git-Integration
Bequemer (Auto-Deploy bei Push), aber für TanStack Start auf Cloudflare ist Weg A der offizielle/stabilere Pfad.

Ich beschreibe **Weg A**.

---

## Prozess

### 1. Code zu GitHub pushen
- In Lovable oben: **GitHub → Connect project → Create repository**
- Dein Code landet automatisch in einem neuen GitHub-Repo

### 2. Cloudflare-Konto vorbereiten
- Kostenloses Konto auf [cloudflare.com](https://cloudflare.com) anlegen
- Im Dashboard deine Account-ID notieren (rechte Seite)

### 3. Lokal deployen (einmalig zum Einrichten)
Auf deinem Rechner (Terminal):
```
git clone <dein-repo-url>
cd <projekt>
npm install
npx wrangler login          # öffnet Browser, Cloudflare-Login
npm run build
npx wrangler deploy
```
Danach läuft die Seite auf `tanstack-start-app.<dein-subdomain>.workers.dev`.

### 4. Alte Deploy-Konfiguration aufräumen
- `.github/workflows/deploy.yml` (GitHub Pages) entfernen — wird nicht mehr gebraucht und würde sonst parallel deployen
- Optional: in `wrangler.jsonc` `name` auf etwas Sprechendes wie `"naturheilkundepraxis-rbt"` ändern

### 5. Auto-Deploy via GitHub Actions
Neuen Workflow `.github/workflows/cloudflare-deploy.yml` anlegen, der bei jedem Push auf `main` automatisch `wrangler deploy` ausführt. Du brauchst dazu zwei GitHub-Secrets:
- `CLOUDFLARE_API_TOKEN` (in Cloudflare → My Profile → API Tokens → "Edit Cloudflare Workers" Template)
- `CLOUDFLARE_ACCOUNT_ID`

Damit deployt jede Änderung in Lovable (→ Push zu GitHub) automatisch auf Cloudflare.

### 6. Custom Domain `naturheilkundepraxis-rbt.ch` verbinden

**Variante 6a (einfacher): Domain-Nameserver auf Cloudflare umstellen**
- In Cloudflare → **Add a site** → `naturheilkundepraxis-rbt.ch`
- Cloudflare gibt dir 2 Nameserver (z. B. `xxx.ns.cloudflare.com`)
- Bei **Swizzonic** im Domain-Panel die Nameserver ersetzen
- Nach DNS-Propagation (bis 24h): in Cloudflare → Workers & Pages → dein Worker → **Settings → Domains & Routes → Add Custom Domain** → `naturheilkundepraxis-rbt.ch` und `www.naturheilkundepraxis-rbt.ch`
- SSL wird automatisch eingerichtet

**Variante 6b: Nameserver bei Swizzonic lassen**
- Bei Swizzonic einen CNAME-Eintrag setzen, der auf deine Worker-URL zeigt
- Funktioniert, ist aber für Root-Domain (`naturheilkundepraxis-rbt.ch` ohne `www`) komplizierter — Variante 6a ist sauberer

---

## Kosten

- Swizzonic Domain: bezahlst du dort (ca. CHF 15–20/Jahr)
- Cloudflare Workers Free Plan: **0 CHF** (100.000 Requests/Tag, reicht locker für eine Praxis-Website)
- Lovable: Free-Plan reicht — Custom Domain läuft über Cloudflare, nicht über Lovable

---

## Was ich für dich machen kann (nach Plan-Approval)

1. `.github/workflows/deploy.yml` entfernen
2. `.github/workflows/cloudflare-deploy.yml` mit Auto-Deploy anlegen
3. `wrangler.jsonc` umbenennen
4. Eine kurze Schritt-für-Schritt-Anleitung schreiben, was du **bei Cloudflare** und **bei Swizzonic** klicken/eintragen musst (mit den genauen Werten)

Den Cloudflare-Login, das erste `wrangler deploy` und die DNS-Änderungen bei Swizzonic musst du selbst machen — da habe ich keinen Zugriff drauf.

Soll ich loslegen?
