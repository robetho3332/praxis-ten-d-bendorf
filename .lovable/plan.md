## Problem

Auf `naturheilkundepraxis-rbt.lovable.app` erscheint ein 404.

Ursache: Die veröffentlichte (live) Version ist noch der alte Build mit `base: '/praxis-ten-d-bendorf/'`. Der Fix in `vite.config.ts` ist im Code drin, aber **nicht auf der Live-Seite deployt** – dafür muss einmal manuell auf **Publish → Update** geklickt werden. Code-Änderungen aktualisieren nur das Preview, nicht die veröffentlichte Domain.

## Lösung

1. Oben rechts auf **Publish → Update** klicken
2. Warten, bis "Published" grün anzeigt
3. `naturheilkundepraxis-rbt.lovable.app` neu laden (Hard-Reload: Cmd/Ctrl + Shift + R)

## Zusätzlicher Check

Im Repo liegt noch `.github/workflows/deploy.yml`, der bei jedem Push nach `main` einen GitHub-Pages-Build auslöst. Das stört die `lovable.app`-Domain nicht, kann aber später für Verwirrung sorgen, falls du GitHub Pages nicht (mehr) nutzt. Sag Bescheid, wenn ich den Workflow entfernen soll.

## Falls nach dem Update immer noch 404

Dann liegt es nicht am `base`-Pfad, sondern daran, dass die veröffentlichte Version komplett fehlt oder der Build fehlgeschlagen ist. In dem Fall:
- mir kurz Bescheid geben
- ich prüfe die Build-Logs und die Routen-Struktur (`src/routes/index.tsx` existiert und ist korrekt mit `createFileRoute("/")` registriert – das passt)
