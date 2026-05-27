## Problem
Das Warenkorb-Icon oben rechts im Header überlappt mit dem „Shop"-Link im Hauptmenü und verdeckt das Buchstaben „p".

## Lösung
In `src/components/Header.tsx` wird die absolute Positionierung des CartDrawer-Elements angepasst, sodass es weiter rechts sitzt und nicht mehr mit dem „Shop"-Navigationslink kollidiert.

## Technische Details
- Datei: `src/components/Header.tsx`
- Der CartDrawer-Container hat aktuell `absolute right-18`.
- Der Abstand nach rechts wird vergrössert (z.B. auf `right-4` oder geringer), damit das Icon innerhalb des `max-w-6xl`-Containers nicht in den Navigationsbereich ragt.
- Alternativ kann die relative/absolute Positionierung so angepasst werden, dass das Icon sauber innerhalb des Paddings des Containers sitzt.