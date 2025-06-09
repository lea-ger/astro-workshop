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

Falls du nicht weiterkommst, kannst du dir die Musterlösung im `feat/solve` Branch anschauen.

## ▶️ Aufgabe 0: Aufsetzen & Projektstruktur
**Ziel:** Projekt aufsetzen und erste Komponentenstruktur verstehen

### Schritte:
* Installiere die dependencies mit `npm install`.
* Starte den lokalen Server mit `npm run dev` und öffne den "Work-Shop" unter `localhost:4321/workshop`.

## 🌟 Aufgabe 1: Projektstruktur & Astro Image kennen lernen

**Ziel:** Einstieg ins Projekt, Code-Aufbau verstehen und Bildoptimierung mit [https://docs.astro.build/de/guides/images/](Astro Assets) nutzen

### Vorgaben:

* Eine vorgefertigte Landing-Page mit `<Hero />`, `<PromoBanner />`, `<ProductList />` existiert bereits.
* Im `<Hero />` ist aktuell ein unoptimiertes `<img>`-Tag hinterlegt.

### Schritte:

1. Öffne `src/components/Hero.astro` und verschaffe dir einen Überblick über den Code.
2. Ersetze das `<img src="/assets/hero.jpg" ...>` durch das `<Image />`-Component von Astro.
3. Verschiebe das Bild in den `src/assets/`-Ordner, falls es dort noch nicht ist.
4. Stelle sicher, dass das Bild optimiert wird.

---

## 📋 Aufgabe 2: Produkt-Collection erstellen & ProductList anpassen

**Ziel:** Erstelle eine [https://docs.astro.build/de/guides/content-collections/](Astro-Collection) für die Produktdaten und nutze `getCollection` in `<ProductList />`.

### Schritte:

1. Definiere in `src/content.config.ts` die Collection `products` mit den Daten aus `src/data/products.json`. Du kannst auch mit Zod ein passendes Schema erstellen.
2. Öffne `src/components/ProductList.astro` und ersetze das leere Array mit der Collection (`getCollection`).
3. Stelle sicher, dass Vorschaubild, Titel und Preis angezeigt werden.

---

## 📦 Aufgabe 3: Dynamische Produktseiten & Static Paths

**Ziel:** Nutze die Collection, um [https://docs.astro.build/de/core-concepts/routing/](Static Paths zu erstellen) und Produktseiten mit `getEntryBySlug` zu befüllen.

### Schritte:

1. Implementiere unter `src/pages/products/[id].astro` die `getStaticPaths()` Methode mit `getCollection`, um die Seiten generieren zu lassen.
2. Rufe eines der Produkte auf, um die dynamische Seite zu testen.

---

## 🗂 Aufgabe 4: Tabs als Client-Island

**Ziel:** Erstelle eine interaktive Tab-Komponente, um verschiedene Produktinformationen zu präsentieren. Nutze eine
Client-Island für die Tab-Logik.

### Schritte:

* Erstelle eine Komponente  in `src/components/ProductTabs.*` (Astro, React, Vue etc.).
* Die Tabs nehmen Produktinformationen als Props entgegen.
* Drei Tabs: **Produktinformationen**, **Versandinformationen**, **Bewertungen**.
* Ob es schön aussieht, ist egal – Fokus liegt auf der Funktionalität.
* Teste aus, was die verschiedenen Client Directives (z.B. `client:visible`, `client:load`) bewirken.

---

## ⚡️ Aufgabe 5: Server Island – Verfügbarkeitsanzeige mit Live-Daten

**Ziel:** Lerne, wie du eine [https://docs.astro.build/de/guides/server-islands/](Server-Komponente (Server Island)) in Astro verwendest, um dynamische Daten direkt auf dem Server zu rendern.

### Schritte:

* Erstelle eine neue Komponente, z.B. `AvailabilityMessage.astro` in `src/components/`.
*  Hole dir die Verfügbarkeitsdaten über einen Fetch-Request von dieser URL: `http://www.randomnumberapi.com/api/v1.0/random`.
*  Binde die Komponente auf der Produktseite (`[id].astro`) mit der `server:defer` directive ein.
*  Die Ausgabe soll z.B. so aussehen:  
   `Nur noch <span class="font-semibold">{data}</span> verfügbar!`
*  Prüfe deinen Netzwerk-Tab im Browser, um zu sehen, wie die Daten geladen werden. Der Inhalt sollte vom dev-Server als HTML ausgeliefert werden.

---