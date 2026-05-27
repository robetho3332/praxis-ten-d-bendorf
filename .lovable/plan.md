# Plan: Cloudflare-Deploy reparieren

## Ziel
Der GitHub-Workflow soll erfolgreich nach Cloudflare deployen. Laut Screenshot baut das Projekt korrekt, aber der Deploy-Schritt zeigt auf den falschen Ordner.

## Was ich ändern werde
1. **Workflow auf den echten Build-Ordner umstellen**
   - `workingDirectory` wird von `dist/naturheilkundepraxis-rbt` auf den tatsächlich erzeugten Ausgabeordner angepasst.
   - Aus dem Screenshot ist klar: Es existieren nur `dist/client` und `dist/server`.

2. **Deploy-Strategie passend zum Projekt prüfen**
   - Ich passe den Workflow so an, dass Wrangler nicht in ein nicht vorhandenes Verzeichnis läuft.
   - Falls für dieses TanStack/Cloudflare-Setup der Root-Deploy statt Unterordner-Deploy nötig ist, stelle ich den Workflow entsprechend um.

3. **Debug-Hinweis im Workflow sinnvoll belassen**
   - Der Schritt zum Anzeigen des `dist/`-Inhalts bleibt erhalten oder wird leicht verbessert, damit künftige Fehler sofort sichtbar sind.

## Erwartetes Ergebnis
- GitHub Actions läuft ohne den Fehler `Directory ... does not exist` durch.
- Der Deploy-Schritt verwendet den richtigen Build-Pfad.
- Du kannst den Workflow danach einfach erneut über GitHub starten.

## Technische Details
- Aktueller Fehler: `dist/naturheilkundepraxis-rbt` existiert nicht.
- Tatsächliche Build-Ausgabe laut Screenshot:
  - `dist/client`
  - `dist/server`
- Ursache: Der Workflow ist auf einen alten bzw. falschen Ordnernamen konfiguriert.
- Relevante Dateien:
  - `.github/workflows/cloudflare-deploy.yml`
  - `wrangler.jsonc`
  - `vite.config.ts` (nur falls der Deploy-Weg für dieses Setup angepasst werden muss)

## Danach
Nach der Umsetzung reicht ein neuer Run in GitHub Actions. Wenn der nächste Fehler dann aus einem anderen Schritt kommt, kann ich ihn gezielt auf Basis des neuen Logs beheben.