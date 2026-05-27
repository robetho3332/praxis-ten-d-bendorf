## Analyse deiner Keyword-Liste

Ich habe die wichtigsten Keywords gegen den Schweizer Suchmarkt (Semrush, Datenbank `ch`) geprüft. Ergebnis: **ca. 80 % deiner Liste sind künstliche Kombinationen, die niemand sucht** (z.B. "Massagepraxis Praxis Dübendorf", "Massage Anerkannt Volketswil"). Auch enthält die Liste Tippfehler ("Anerkant"). Statt alle 80 Keywords stumpf einzubauen, konzentrieren wir uns auf die **echten Volumen-Treffer**.

### Was tatsächlich gesucht wird

| Keyword | Volumen / Monat | Schwierigkeit | Einordnung |
|---|---|---|---|
| massage zürich | 4'400 | 40 (machbar) | Riesig, aber kompetitiv |
| schröpfen | 3'600 | 26 (einfach) | Top-Win |
| massage in der nähe | 3'600 | 23 (einfach) | Lokal-Gold |
| massage uster | 1'300 | 33 (machbar) | Top-Win |
| massage dübendorf | 880 | 29 (einfach) | **Dein Heimspiel** |
| medizinische massage zürich | 720 | 21 (einfach) | Premium-Intent |
| massage volketswil | 390 | 8 (sehr einfach) | Top-Win |
| massagepraxis dübendorf | 20 | 0 | Niedrig, aber Heimspiel |
| schröpfen zürich | 20 | 0 | Niedrig |
| massage schwerzenbach | 20 | 0 | Niedrig |
| schröpfen dübendorf / -praxis | 0 | – | Niemand sucht so |

### Strategie: 3 dedizierte Landingpages statt 80 Keyword-Variationen

Google bestraft "Keyword-Stuffing". Besser: **wenige starke Seiten**, die jeweils ein Themen-Cluster abdecken.

---

## Der Plan

### 1. Neue Route: `/massage` — Hauptseite Medizinische Massage
**Ziel-Keywords:** medizinische massage zürich, massage dübendorf, massage in der nähe, massage zürich

Inhalt:
- H1: "Medizinische Massage in Dübendorf — Krankenkassen-anerkannt (EMR/ZSR)"
- Sektion: Was ist medizinische Massage (vs. Wellness)
- Sektion: Behandlungsformen (Klassisch, Triggerpunkt, Lymphdrainage, etc. — passt du an)
- Sektion: Krankenkassen-Abrechnung (EMR M100663 = starkes Trust-Signal)
- Sektion: Einzugsgebiet — explizit Dübendorf, Volketswil, Uster, Schwerzenbach, Zürich
- CTA-Sektion: Termin buchen
- FAQ (3-5 Fragen) → bringt FAQPage-Schema + Featured Snippets
- Meta: Title ≤60 Z., Description ≤160 Z. mit Hauptkeyword + Ort
- JSON-LD: `MedicalTherapy` + `FAQPage`

### 2. Neue Route: `/schroepfen` — Schröpfen
**Ziel-Keyword:** schröpfen (3'600/mo, easy), schröpfen zürich

Inhalt:
- H1: "Schröpfen in Dübendorf — Traditionelle Therapie bei Verspannungen"
- Was ist Schröpfen (trocken / blutig / Schröpfmassage)
- Wann hilft es (Nacken, Rücken, Migräne …)
- Ablauf einer Behandlung
- Kosten / Krankenkassen
- FAQ
- JSON-LD: `MedicalTherapy` + `FAQPage`

### 3. Bestehende Home `/` schärfen
- H1 und ersten Absatz auf "Naturheilpraxis Dübendorf" trimmen
- Drei Service-Karten neu: Medizinische Massage / Schröpfen / (3. bestehende Behandlung) — jede verlinkt auf die Unterseite
- "Einzugsgebiet"-Block mit den Ortsnamen (Dübendorf, Volketswil, Uster, Schwerzenbach, Zürich) — das wird von Google für "massage in der nähe" mitgewertet

### 4. Navigation, Sitemap, interne Links
- Header-Navigation um "Massage" und "Schröpfen" ergänzen
- `sitemap.xml` um die zwei neuen Routen erweitern
- Footer-Links auf die neuen Seiten

### 5. NICHT bauen
Keine Unterseiten wie `/massage-volketswil`, `/massagepraxis-praxis-uster` etc. Solche "Doorway Pages" werden von Google abgestraft. **Eine starke `/massage`-Seite mit Ortsnamen im Content rankt für alle Ortsvarianten gleichzeitig** — das zeigt der Local-SEO-Index seit Jahren.

---

## Technische Details

- TanStack Start Route-Files: `src/routes/massage.tsx`, `src/routes/schroepfen.tsx`
- Jede Route: eigenes `head()` mit `title`, `description`, `og:title`, `og:description`, `og:url`, Canonical
- JSON-LD via `scripts`-Array in `head()`
- Sitemap-Update in `src/routes/sitemap[.]xml.ts`
- Bestehende Design-Tokens aus `src/styles.css` verwenden, keine neuen Farben

---

## Was du noch entscheiden kannst (optional, sonst entscheide ich pragmatisch)

1. **Welche Massage-Formen** bietest du an? (Klassisch, Triggerpunkt, Lymphdrainage, Bindegewebsmassage, Sportmassage …) — sonst nehme ich die gängigsten an und du korrigierst.
2. **Schröpfen-Varianten**: trocken / blutig / Schröpfmassage — welche bietest du an?
3. **Preise** auf der Seite zeigen? (z.B. "60 Min. CHF 130, Krankenkassen-rückerstattet") — oder nur "Über Krankenkasse abgerechnet"?

Wenn du nichts dazu sagst, baue ich mit gängigen Annahmen und du passt Texte nachher an.

Drück **"Implement plan"**, dann lege ich los.