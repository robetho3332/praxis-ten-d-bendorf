## Was ich bereits geprüft habe
- Der **Build selbst funktioniert**: In eurem Workflow laufen `bun install` und `bun run build` erfolgreich durch.
- Der Fehler passiert **erst beim Schritt „Deploy to Cloudflare Workers“**.
- Die gelbe Meldung zu **Node.js 20** ist **nur eine Warnung**, nicht die eigentliche Ursache.
- Der Workflow verwendet diese GitHub-Secrets:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`

## Schritt für Schritt
1. Öffne in GitHub den fehlgeschlagenen Lauf.
2. Klicke auf den Job **deploy**.
3. Klicke auf den Abschnitt **Deploy to Cloudflare Workers**.
4. Klicke links auf das kleine Dreieck bei **„Running Wrangler Commands“** (Zeile 12 im Screenshot).
5. Suche **unterhalb** der allgemeinen Meldung `failed with exit code 1` nach der **ersten konkreten roten Fehlermeldung**.
6. Kopiere genau diese Meldung oder mache davon einen Screenshot.

## Falls dort keine genauere Fehlermeldung sichtbar ist
1. Gehe in GitHub zu **Settings → Secrets and variables → Actions**.
2. Prüfe, ob diese beiden Secrets **exakt so geschrieben** vorhanden sind:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. Wenn eines fehlt oder anders geschrieben ist, korrigieren.
4. Danach zurück zu **Actions**.
5. Den Workflow erneut starten mit **Re-run all jobs**.

## Woran wir die Ursache erkennen
- **Auth-/Permission-Fehler** → Token oder Rechte noch nicht korrekt
- **Account-ID-Fehler** → falsche `CLOUDFLARE_ACCOUNT_ID`
- **Wrangler-/Projektfehler** → Konfigurationsproblem beim Deploy

## Technische Details
- Workflow-Datei: `.github/workflows/cloudflare-deploy.yml`
- Deploy-Befehl: `wrangler deploy`
- Projektname in der Deploy-Konfiguration: `naturheilkundepraxis-rbt`
- Aktuelle Worker-Config verwendet `wrangler.jsonc`

## Ziel
Sobald du mir die **konkrete Fehlermeldung aus „Running Wrangler Commands“** schickst, kann ich dir den **nächsten exakten Schritt** sagen.