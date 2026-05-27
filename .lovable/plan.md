## Problem

Der Build läuft durch, aber `wrangler deploy` schlägt fehl. Der Grund: das Workflow startet Wrangler im Repo-Root mit der `wrangler.jsonc`, die als `main` einen virtuellen Vite-Eintrag (`@tanstack/react-start/server-entry`) hat. Dieser existiert nur **während** des Builds. Nach `vite build` legt das Cloudflare-Plugin den fertigen Worker samt eigener `wrangler.json` in den `dist/`-Ordner — und genau von dort muss Wrangler deployen.

## Fix

`.github/workflows/cloudflare-deploy.yml` anpassen, sodass `wrangler-action` aus dem Build-Output-Verzeichnis deployt:

```yaml
- name: Deploy to Cloudflare Workers
  uses: cloudflare/wrangler-action@v3
  with:
    apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
    accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
    workingDirectory: dist/naturheilkundepraxis-rbt
    command: deploy
```

Falls der tatsächliche Output-Pfad abweicht (manche Versionen nutzen `dist/server` oder `.output`), fügen wir zuvor einen Debug-Schritt `ls -la dist` hinzu und passen `workingDirectory` entsprechend an. Optional: Node auf 22 anheben (die Warnung „Node.js 20 deprecated").

## Danach

Workflow erneut über **Actions → Run workflow** starten. Bei Erfolg ist die Site unter der Cloudflare-Workers-URL erreichbar.