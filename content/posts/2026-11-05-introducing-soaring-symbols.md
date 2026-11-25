---
title: 'Introducing Soaring Symbols'
description: 'Airline logos and icons, redrawn as clean SVG with their official colors, codes and alliances. Browse them on the website, install them from npm, link them from a CDN, fetch them from the API, search them in Raycast or drop them into draw.io.'
published: 2026-11-05
updated: 2026-11-25
tags: ['soaring-symbols', 'svg', 'open-source', 'aviation']
links:
  - to: https://soaringsymbols.org
    label: Soaring Symbols
    avatar:
      src: https://soaringsymbols.org/brand/icon.svg
      alt: Soaring Symbols
      ui:
        root: rounded-none bg-transparent
        image: object-contain
    target: _blank
    color: info
  - to: https://github.com/soaring-symbols/soaring-symbols
    label: GitHub
    icon: simple-icons:github
    target: _blank
  - to: https://www.npmjs.com/package/soaring-symbols
    label: npm
    icon: simple-icons:npm
    target: _blank
---

<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/vietnam-airlines/icon.svg" alt="Vietnam Airlines" width="40" height="40" class="dark:hidden" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/vietnam-airlines/icon-dark.svg" alt="Vietnam Airlines" width="40" height="40" class="hidden dark:block" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/singapore-airlines/icon.svg" alt="Singapore Airlines" width="40" height="40" class="dark:hidden" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/singapore-airlines/icon-dark.svg" alt="Singapore Airlines" width="40" height="40" class="hidden dark:block" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/emirates/icon.svg" alt="Emirates" width="40" height="40" class="dark:hidden" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/emirates/icon-dark.svg" alt="Emirates" width="40" height="40" class="hidden dark:block" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/qatar-airways/icon.svg" alt="Qatar Airways" width="40" height="40" class="dark:hidden" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/qatar-airways/icon-dark.svg" alt="Qatar Airways" width="40" height="40" class="hidden dark:block" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/lufthansa/icon.svg" alt="Lufthansa" width="40" height="40" class="dark:hidden" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/lufthansa/icon-dark.svg" alt="Lufthansa" width="40" height="40" class="hidden dark:block" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/japan-airlines/icon.svg" alt="Japan Airlines" width="40" height="40" class="dark:hidden" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/japan-airlines/icon-dark.svg" alt="Japan Airlines" width="40" height="40" class="hidden dark:block" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/turkish-airlines/icon.svg" alt="Turkish Airlines" width="40" height="40" class="dark:hidden" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/turkish-airlines/icon-dark.svg" alt="Turkish Airlines" width="40" height="40" class="hidden dark:block" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/klm/icon.svg" alt="KLM" width="40" height="40" class="dark:hidden" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols@0.6/dist/airlines/klm/icon-dark.svg" alt="KLM" width="40" height="40" class="hidden dark:block" style="margin:0">
</div>

If you have ever built anything around flights, a tracker, a booking flow or just a list of trips, you have probably gone looking for airline logos. What you find is a mess: blurry PNGs, marks the airline retired years ago, files that are all different sizes, and colors that are close to the brand but not quite.

I kept running into this, so I started redrawing them myself. That side project is now [Soaring Symbols](https://soaringsymbols.org): **more than 175 airlines from 84 countries**, drawn as clean SVG.

## What's in it

Every airline gets the same treatment:

- **Logo and icon**, plus a tail design for some, and a stacked logo where the airline has its own vertical lockup. Logos sit on a 64×64 canvas and icons on 24×24, so a row of them lines up wherever you use it.
- **Official colors.** Each SVG uses the airline's brand colors as plain hex values, and the entry records its primary color.
- **Monochrome versions** that use `currentColor`, so they take the color of the text around them. For single-color marks they are generated from the color file; multi-color marks get a hand-drawn one where it makes sense.
- **Versions for dark backgrounds**, so navy and black lettering stays readable in dark mode. The icons at the top of this post switch to them when your theme is dark.
- **Metadata**: IATA and ICAO codes, callsign, country, hubs, alliance, founding year, shorter names (SWISS, THAI), whether it flies only cargo, and links to brand guidelines when the airline publishes them.

Airlines also have a history. Earlier logos are kept by the year each came in, an old name or code still finds the airline after a rename, and a merged airline points to its successor. The oneworld, SkyTeam and Star Alliance marks are in there too, and hub coordinates come in `airports.json`, for maps.

All of it lives in one repository, and every SVG goes through the same lint rules: a fixed `viewBox`, a `<title>`, no `transform`, no scripts, hex colors only, and marks centered on the canvas.

## Where to use it

### The website

[soaringsymbols.org](https://soaringsymbols.org) is the easiest way in. You can search by name, code or callsign, filter passenger and cargo airlines, and every airline has its own page, like [Vietnam Airlines](https://soaringsymbols.org/airlines/vietnam-airlines), with all of its files side by side, color next to monochrome and dark, ready to download or link. The [alliances](https://soaringsymbols.org/alliances) have pages of their own, with their marks and members, past ones included.

The site also has a small API, no key needed:

```text
https://soaringsymbols.org/api/airlines/VN
https://soaringsymbols.org/api/airlines/VN/icon.png
```

The first returns the airline's data and links to its marks. The second returns a mark as SVG, or as PNG for apps that can't render SVG, and monochrome marks come in any color you ask for. The [ecosystem page](https://soaringsymbols.org/ecosystem) lists every parameter.

### npm

For apps, install the package:

::code-group

```bash [npm]
npm install soaring-symbols
```

```bash [yarn]
yarn add soaring-symbols
```

```bash [pnpm]
pnpm add soaring-symbols
```

```bash [bun]
bun add soaring-symbols
```

::

Then look airlines up by IATA code, ICAO code, slug or name:

```js
import { getAirline, getAssetPath } from 'soaring-symbols'

getAirline('VN')
// { name: 'Vietnam Airlines', iata: 'VN', icao: 'HVN', alliance: 'SkyTeam', hubs: ['HAN', 'SGN'], ... }

getAssetPath('VN', 'logo')
// 'soaring-symbols/airlines/vietnam-airlines/logo.svg'

getAssetPath('VN', 'logo', { mono: true })
// 'soaring-symbols/airlines/vietnam-airlines/logo-mono.svg'

getAssetPath('VN', 'logo', { dark: true })
// 'soaring-symbols/airlines/vietnam-airlines/logo-dark.svg'
```

Alliances work the same way with `getAlliance` and `getAllianceAssetPath`. The library only reads a JSON catalog, so it works in the browser as well as in Node. The [API reference](https://github.com/soaring-symbols/soaring-symbols/blob/main/API.md) covers every function.

People have started using it, too:

::npm-downloads{name="soaring-symbols"}
::

### CDN

If you only need an image, there is nothing to install. Every file in the package is on jsDelivr and unpkg, using the airline's name in lowercase with hyphens:

```text
https://cdn.jsdelivr.net/npm/soaring-symbols/dist/airlines/vietnam-airlines/logo.svg
https://unpkg.com/soaring-symbols/dist/airlines/vietnam-airlines/logo.svg
```

Add a release line, like `soaring-symbols@0.6`, to get fixes without breaking changes, or an exact release to freeze the files. The icons at the top of this post are loaded exactly that way.

### Raycast

I spend most of my day in Raycast, so there is an [extension](https://www.raycast.com/anhthang/soaring-symbols) too: search an airline from the launcher, see its codes, hubs and history, and copy or download its SVGs, earlier logos included, without opening a browser. A second command browses the alliances and their members.

The extension also works in launchers that support Raycast extensions, such as [Vicinae](https://www.vicinae.com), [SuperCmd](https://supercmd.sh) and [Tinycast](https://tinycast.dev).

### draw.io

For architecture diagrams and flight maps, the [draw.io libraries](https://github.com/soaring-symbols/drawio) bring every airline's icon, logo and tail, plus the alliance marks, into [draw.io](https://www.drawio.com). Once a library is open, the shape search finds an airline by name, IATA or ICAO code. The monochrome libraries can be recolored from the Style panel.

[Open them in app.diagrams.net](https://app.diagrams.net/?clibs=Uhttps://cdn.jsdelivr.net/npm/@soaring-symbols/drawio@0.6/dist/icons.xml;Uhttps://cdn.jsdelivr.net/npm/@soaring-symbols/drawio@0.6/dist/logos.xml;Uhttps://cdn.jsdelivr.net/npm/@soaring-symbols/drawio@0.6/dist/tails.xml;Uhttps://cdn.jsdelivr.net/npm/@soaring-symbols/drawio@0.6/dist/alliances.xml) in one click, or add a single one with **File > Open Library from > URL**:

```text
https://cdn.jsdelivr.net/npm/@soaring-symbols/drawio@0.6/dist/icons.xml
```

Every mark is embedded in the library, so a diagram keeps it as it was, even offline.

## Contributing

The collection grows one airline at a time, and contributions are very welcome. The [contribution guidelines](https://github.com/soaring-symbols/soaring-symbols/blob/main/CONTRIBUTING.md) cover the canvas sizes, colors and file names. Before opening a pull request, you can drop your SVG into the [validator](https://soaringsymbols.org/validate) on the website. It runs the same checks as the repository and shows your file next to the original artwork, so you can compare them.

## What's next

A few things on the roadmap:

- A **Figma plugin** to search airlines by name or code and drop their marks onto the canvas as vector layers. It is built and [in review on the Figma Community](https://www.figma.com/community/plugin/1701522206126108009).
- **Automatic releases**, so a newly merged airline reaches npm, the CDNs, the website and the apps without me cutting a release by hand
- **Tails on one shared fin shape**, so they line up in a grid instead of each following the fin of the aircraft it was drawn from

Two ideas from the first version are off the list. Iconify [declined the collection](https://github.com/iconify/icon-sets/issues/223), since airline logos are too niche for its users, and Swift or Android packages would bundle marks that go stale until the app ships an update. Native apps can load the marks by URL from the CDN or the image API instead.

One note: the logos remain the trademarks of their airlines. Soaring Symbols redraws them for reference and informational use, and only the code and the catalog data are MIT licensed. The [disclaimer](https://github.com/soaring-symbols/soaring-symbols/blob/main/DISCLAIMER.md) explains what that means for using them.

If you build something with it, or your favorite airline is missing, let me know on [GitHub](https://github.com/soaring-symbols/soaring-symbols). Happy flying ✈️
