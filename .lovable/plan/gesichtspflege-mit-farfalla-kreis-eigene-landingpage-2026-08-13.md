# Gesichtspflege mit Farfalla — Kreis + eigene Landingpage

## Kurze Antwort auf deine Frage

Eine **eigene Landingpage** ist deutlich effektiver als nur ein Kreis. Google kann nur Seiten ranken, keine Textschnipsel innerhalb einer Seite. Deine Startseite konkurriert bereits um „Naturheilpraxis Dübendorf" — ein zusätzlicher Absatz zu Gesichtspflege verwässert sie eher, statt neu zu ranken.

Semrush-Prüfung für den Schweizer Markt:
- „Gesichtsbehandlung Dübendorf": 20 Suchen/Monat, Schwierigkeit 0/100 (sehr leicht)

Wenig Volumen, aber praktisch keine Konkurrenz und lokale Kaufabsicht — genau die Art Suchbegriff, die eine eigene Seite gewinnt. Dieses Muster hat bei `/massage`, `/schroepfen`, `/ernaehrungsberatung` und `/hormonberatung` schon funktioniert.

## Was gebaut wird

### 1. Neuer Kreis im Angebot (Startseite)
- Titel „Gesichtspflege", Kurztext im Kreis, ausführlicher Text im Aufklapp-Bereich
- Verlinkt auf die neue Seite `/gesichtspflege` (versteckter SEO-Link, wie bei den anderen Kreisen)
- Hintergrundbild: vorhandenes Asset `cat-face.jpg` aus dem Projekt

### 2. Neue Landingpage `/gesichtspflege`
Aufgebaut wie deine bestehenden Behandlungsseiten:
- H1 „Gesichtspflege in Dübendorf — Naturkosmetik mit Farfalla"
- Abschnitte: Was die Behandlung umfasst, Ablauf, für welche Haut geeignet, warum Farfalla Bio-Naturkosmetik, Ablauf der Terminbuchung
- FAQ-Bereich (z. B. „Wie lange dauert eine Gesichtsbehandlung?", „Ist Naturkosmetik für empfindliche Haut geeignet?", „Kann ich die Produkte bei dir kaufen?")
- Kontakt-/Terminabschnitt mit Telefon und E-Mail
- Titel, Meta-Beschreibung, og-Tags, Canonical

### 3. Auffindbarkeit
- Link im Footer unter „Behandlungen in Dübendorf"
- Eintrag in `sitemap.xml`
- Eintrag in `llms.txt`
- Neuer Eintrag „Gesichtspflege" im LocalBusiness-Schema der Startseite mit URL

## Deine Angaben, die auf der Seite stehen

- Dauer: 75–90 Minuten
- Preis: CHF 140.–
- Produkte: Farfalla Naturkosmetik aus Uster, Schweiz
- Keine Erwähnung der Krankenkassen-Abrechnung (Privatleistung, wird nicht thematisiert)

Dauer und Preis kommen zusätzlich in das `Offer`-Schema der Seite, damit Google sie direkt versteht. Weitere Angaben erfinde ich nicht.

## Technische Details

- Neue Datei `src/routes/gesichtspflege.tsx` nach dem Muster von `src/routes/massage.tsx` (head() mit Meta/og/canonical, FAQPage-JSON-LD)
- `src/routes/index.tsx`: neuer Eintrag im `services`-Array mit `href: "/gesichtspflege"`, plus `hasOfferCatalog`-Eintrag im JSON-LD
- `src/components/Footer.tsx`, `src/routes/sitemap[.]xml.ts`, `public/llms.txt` ergänzen
- Bild-Import aus `src/assets/cat-face.jpg`

Nach der Umsetzung: **Publish** drücken, danach in der Search Console `/gesichtspflege` unter „URL-Prüfung" → „Indexierung beantragen".
