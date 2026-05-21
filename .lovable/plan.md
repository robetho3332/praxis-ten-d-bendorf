## Problem

Auf `naturheilkundepraxis-rbt.lovable.app` erscheint nur Text – keine Styles, keine Bilder.

Ursache: In `vite.config.ts` ist `base: '/praxis-ten-d-bendorf/'` gesetzt. Das ist ein GitHub-Pages-spezifischer Pfad. Der Browser sucht dadurch alle CSS-/JS-Dateien unter `naturheilkundepraxis-rbt.lovable.app/praxis-ten-d-bendorf/...` – dort liegen sie aber nicht, weil Lovable direkt unter der Domain-Root ausliefert.

Genau dasselbe Problem würdest du übrigens auch auf Cloudflare Pages haben.

## Lösung

Den `base`-Eintrag aus `vite.config.ts` entfernen, sodass die Datei wieder die Standard-Root `/` verwendet.

**Vorher:**
```ts
export default defineConfig({
  vite: {
    base: '/praxis-ten-d-bendorf/',
  }
});
```

**Nachher:**
```ts
export default defineConfig({});
```

## Auswirkung

- ✅ `naturheilkundepraxis-rbt.lovable.app` lädt Styles, Bilder und JS korrekt
- ✅ Funktioniert genauso später auf Cloudflare Pages oder einer eigenen Domain
- ⚠️ Falls du das Projekt **trotzdem** noch zusätzlich auf GitHub Pages unter `username.github.io/praxis-ten-d-bendorf/` deployen willst, müsste der `base`-Pfad dort über eine separate Build-Variable gesetzt werden. Sag Bescheid, falls das nötig ist – dann baue ich das sauber ein.

## Nach dem Fix

1. Lovable baut das Projekt neu
2. Du klickst oben rechts auf **Publish → Update**, damit die Live-Seite aktualisiert wird
3. `naturheilkundepraxis-rbt.lovable.app` neu laden (ggf. Hard-Reload: Cmd/Ctrl + Shift + R)
