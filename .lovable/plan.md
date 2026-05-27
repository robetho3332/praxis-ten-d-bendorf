# Cloudflare-Redirect einrichten

Keine Code-Änderung nötig — alles passiert in deinem Cloudflare-Dashboard. Dauer: ~10 Min.

## Was du tun musst

### Schritt 1: Bei Cloudflare einloggen
- Gehe auf https://dash.cloudflare.com
- Wähle die Domain **naturheilkundepraxis-rbt.ch**

### Schritt 2: Alte/störende DNS-Einträge prüfen
- Linkes Menü → **DNS** → **Records**
- Lösche alle bestehenden A-, AAAA- und CNAME-Einträge, die auf `@` oder `www` zeigen und mit dem alten Lovable-Versuch zu tun haben (NICHT MX-Einträge für E-Mail anfassen!)
- Falls du unsicher bist: mach einen Screenshot und schick ihn mir, bevor du löschst

### Schritt 3: Dummy-DNS-Eintrag anlegen
Damit Cloudflare überhaupt etwas zum Bearbeiten hat:
- **Add record** klicken
- Type: `A`
- Name: `@`
- IPv4 address: `192.0.2.1` (Dummy-IP, wird nie angesprochen)
- Proxy status: **Proxied** (oranger Wolke ✓)
- Save

Gleiches nochmal für `www`:
- Type: `A`, Name: `www`, IPv4: `192.0.2.1`, **Proxied**

### Schritt 4: Redirect-Regel anlegen
- Linkes Menü → **Rules** → **Redirect Rules** → **Create rule**
- Rule name: `Redirect to Lovable`
- **When incoming requests match:**
  - Field: `Hostname`
  - Operator: `equals`
  - Value: `naturheilkundepraxis-rbt.ch`
  - (Mit "Or" zweite Bedingung): Hostname equals `www.naturheilkundepraxis-rbt.ch`
- **Then:**
  - Type: `Static`
  - URL: `https://naturheilkundepraxis-rbt.lovable.app`
  - Status code: `301`
  - Preserve query string: ✓ aktivieren
- **Deploy** klicken

### Schritt 5: SSL-Modus prüfen
- Linkes Menü → **SSL/TLS** → **Overview**
- Modus auf **Full** stellen (nicht "Flexible", nicht "Full strict")

### Schritt 6: Testen
- Warte 2–3 Minuten
- Im Browser (Inkognito-Fenster!) öffnen:
  - `https://naturheilkundepraxis-rbt.ch` → soll auf `.lovable.app` weiterleiten
  - `https://www.naturheilkundepraxis-rbt.ch` → genauso
- Falls Fehler 1034 weiter erscheint: Cache leeren oder 5 Min warten (DNS-Propagation)

## Wenn etwas nicht klappt
Schick mir einen Screenshot von:
- der DNS-Records-Seite
- der Redirect Rule
- dem Fehler im Browser

Dann debuggen wir gemeinsam.
