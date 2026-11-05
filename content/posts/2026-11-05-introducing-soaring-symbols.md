---
title: 'Introducing Soaring Symbols'
description: 'Airline logos and icons, redrawn as clean SVG with their official colors, codes and alliances. Browse them on the website, install them from npm, link them from jsDelivr or search them in Raycast.'
published: 2026-11-05
tags: ['soaring-symbols', 'svg', 'open-source', 'aviation']
links:
  - to: https://soaringsymbols.org
    label: soaringsymbols.org
    icon: hugeicons:airplane-01
    target: _blank
    color: info
  - to: https://github.com/soaring-symbols/soaring-symbols
    label: GitHub
    icon: hugeicons:github
    target: _blank
  - to: https://www.npmjs.com/package/soaring-symbols
    label: npm
    icon: simple-icons:npm
    target: _blank
---

<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols/dist/assets/vietnam-airlines/icon.svg" alt="Vietnam Airlines" width="40" height="40" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols/dist/assets/singapore-airlines/icon.svg" alt="Singapore Airlines" width="40" height="40" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols/dist/assets/emirates/icon.svg" alt="Emirates" width="40" height="40" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols/dist/assets/qatar-airways/icon.svg" alt="Qatar Airways" width="40" height="40" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols/dist/assets/lufthansa/icon.svg" alt="Lufthansa" width="40" height="40" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols/dist/assets/japan-airlines/icon.svg" alt="Japan Airlines" width="40" height="40" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols/dist/assets/turkish-airlines/icon.svg" alt="Turkish Airlines" width="40" height="40" style="margin:0">
  <img src="https://cdn.jsdelivr.net/npm/soaring-symbols/dist/assets/klm/icon.svg" alt="KLM" width="40" height="40" style="margin:0">
</div>

If you have ever built anything around flights, a tracker, a booking flow or just a list of trips, you have probably gone looking for airline logos. What you find is a mess: blurry PNGs, marks the airline retired years ago, files that are all different sizes, and colors that are close to the brand but not quite.

I kept running into this, so I started redrawing them myself. That side project is now [Soaring Symbols](https://soaringsymbols.org): **122 airlines from 63 countries**, drawn as clean SVG.

## What's in it

Every airline gets the same treatment:

- **Logo and icon**, and a tail design for some. Logos sit on a 64×64 canvas and icons on 24×24, so a row of them lines up wherever you use it.
- **Official colors.** Each SVG uses the airline's brand colors as plain hex values, and the entry records its primary color.
- **Monochrome versions** that use `currentColor`, so they take the color of the text around them. For single-color marks they are generated from the color file; multi-color marks get a hand-drawn one where it makes sense.
- **Metadata**: IATA and ICAO codes, country, alliance, website, and links to brand guidelines when the airline publishes them.

All of it lives in one repository, and every SVG goes through the same lint rules: a fixed `viewBox`, a `<title>`, no `transform`, no scripts, hex colors only.

## Where to use it

### The website

[soaringsymbols.org](https://soaringsymbols.org) is the easiest way in. You can search by name or code, and every airline has its own page, like [Vietnam Airlines](https://soaringsymbols.org/airlines/vietnam-airlines), with all of its files side by side, color next to monochrome, ready to download or link.

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

Then look airlines up by IATA code, ICAO code or name:

```js
import { getAirline, getAssetPath } from 'soaring-symbols'

getAirline('VN')
// { name: 'Vietnam Airlines', iata: 'VN', icao: 'HVN', alliance: 'SkyTeam', ... }

getAssetPath('VN', 'logo')
// 'soaring-symbols/assets/vietnam-airlines/logo.svg'

getAssetPath('VN', 'logo', { mono: true })
// 'soaring-symbols/assets/vietnam-airlines/logo-mono.svg'
```

The library only reads a JSON catalog, so it works in the browser as well as in Node.

### jsDelivr

If you only need an image, there is nothing to install. Every file in the package is on jsDelivr, using the airline's name in lowercase with hyphens:

```text
https://cdn.jsdelivr.net/npm/soaring-symbols/dist/assets/vietnam-airlines/logo.svg
```

The icons at the top of this post are loaded exactly that way.

### Raycast

I spend most of my day in Raycast, so there is an [extension](https://www.raycast.com/anhthang/soaring-symbols) too: search an airline from the launcher, see its codes and country, and copy or download its SVGs without opening a browser.

The extension also works in launchers that support Raycast extensions, such as [Vicinae](https://www.vicinae.com), [SuperCmd](https://supercmd.sh) and [Tinycast](https://tinycast.dev).

## Contributing

The collection grows one airline at a time, and contributions are very welcome. The [contribution guidelines](https://github.com/soaring-symbols/soaring-symbols/blob/main/CONTRIBUTING.md) cover the canvas sizes, colors and file names. Before opening a pull request, you can drop your SVG into the [validator](https://soaringsymbols.org/validate) on the website. It runs the same checks as the repository and shows your file next to the original artwork, so you can compare them.

## What's next

A few things on the roadmap:

- An **Iconify icon set**, so the icons work with Iconify, Nuxt Icon, UnoCSS, Tailwind and Astro
- A **Figma plugin** to search airlines by name or IATA code and drop their marks into designs
- A **Swift Package** with an asset catalog and a SwiftUI view
- A small **JSON API** on the website, such as `/api/airlines/VN`

One note: the logos remain the trademarks of their airlines. Soaring Symbols redraws them for reference and informational use, and the code is MIT licensed.

If you build something with it, or your favorite airline is missing, let me know on [GitHub](https://github.com/soaring-symbols/soaring-symbols). Happy flying ✈️
