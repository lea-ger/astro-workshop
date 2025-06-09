---
layout: ../../layouts/SlideLayout.astro
title: Markdown-Seiten
author: Leander Gerwing
next: /how-to-astro/routing
prev: /how-to-astro
slideId: 9
---

# Dateistruktur eines Astro-Projekts

```text data-step="1"
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── how-to-astro/
│            └── dateistruktur.md
└── package.json
```

### Wichtige Verzeichnisse

- **public/** - Dateien werden unverändert kopiert
- **src/pages/** - Definiert Routen und Seiten
- **src/components/** - Wiederverwendbare UI-Teile
- **src/layouts/** - Seitenstrukturen
- **src/content/** - Für Content Collections

Ähnlich wie bei anderen modernen Frameworks (Next.js, SvelteKit) folgt Astro Konventionen statt Konfiguration.
