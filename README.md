All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
|:--------------------------|:-------------------------------------------------|
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

# Astro Workshop – Aufgabenstruktur

## Aufgabe 0: Aufsetzen & Projektstruktur
**Ziel:** Projekt aufsetzen und erste Komponentenstruktur verstehen
### Vorgaben:
* Installiere die dependencies mit `npm install`.
* Starte den lokalen Server mit `npm run dev` und öffne den "Work-Shop" unter `localhost:4321/workshop`.

## 🌟 Aufgabe 1: Projektstruktur & Astro Image kennen lernen

**Ziel:** Einstieg ins Projekt, Code-Aufbau verstehen und Bildoptimierung mit Astro Assets nutzen

### Vorgaben:

* Eine vorgefertigte Landing-Page mit `<Hero />`, `<PromoBanner />`, `<ProductList />` existiert bereits.
* Im `<Hero />` ist aktuell ein unoptimiertes `<img>`-Tag hinterlegt.

### Schritte:

1. Öffne `src/components/Hero.astro` und verschaffe dir einen Überblick über den Code.
2. Ersetze das `<img src="/assets/hero.jpg" ...>` durch das `<Image />`-Component von Astro.
3. Stelle sicher, dass das Bild optimiert wird. Du kannst die `srcset`-Attribute nutzen, um verschiedene Bildgrößen zu definieren.

---

## 📋 Aufgabe 2: Produkt-Collection erstellen & ProductList anpassen

**Ziel:** Erstelle eine Astro-Collection für die Produktdaten und nutze `getCollection` in `<ProductList />`.

### Vorgaben:

* Datei `src/data/products.json` mit 30 Produkten liegt vor.
* In `src/content/config.ts` ist bereits ein leerer Collection-Eintrag für `products` vorgesehen.

### Schritte:

1. Definiere in `src/content/config.ts` die Collection `products`. Du kannst auch mit Zod ein passendes Schema erstellen
2. Öffne `src/components/ProductList.astro` und ersetze das leere Array mit der Collection (`getCollection`).
3. Stelle sicher, dass Vorschaubild, Titel und Preis angezeigt werden.

---

## 📦 Aufgabe 3: Dynamische Produktseiten & Static Paths

**Ziel:** Nutze die Collection, um Static Paths zu erstellen und Produktseiten mit `getEntryBySlug` zu befüllen.

### Vorgaben:
* Eine Datei unter `src/pages/products/[slug].astro` existiert bereits.

### Schritte:

1. Implementiere `getStaticPaths()` mit `getCollection`, um die Seiten generieren zu lassen.
2. Rufe eines der Produkte auf, um die dynamische Seite zu testen.

---

## 🗂 Aufgabe 4: Tabs als Client-Island

**Ziel:** Erstelle eine interaktive Tab-Komponente, um verschiedene Produktinformationen zu präsentieren. Nutze ein
Client-Island für die Tab-Logik.

### Schritte:

* Erstelle eine Komponente  in `src/components/ProductTabs.*` (Astro, React, Vue etc.).
* Die Tabs nehmen Produktinformationen als Props entgegen.
* Drei Tabs: **Produktinformationen**, **Versandinformationen**, **Bewertungen**.
* Ob es schön aussieht, ist egal – Fokus liegt auf der Funktionalität.
* Teste aus, was die verschiedenen Client Directives (z.B. `client:visible`, `client:load`) bewirken.

---

