# Agent instructions

Personal blog of Anh Thang Bui, built with Nuxt 4, Nuxt UI 4 and Nuxt Content 3, deployed as a Cloudflare Worker with D1. Content (posts, projects, uses, profiles) lives in `content/` and its collections are defined in `content.config.ts`.

## Commands

- `bun run dev` — start the dev server
- `bun run lint` — ESLint + Prettier
- `bun run build` — production build

## Icons

Icons come from local Iconify collections only: `@iconify-json/solar` and `@iconify-json/simple-icons`. Don't use another collection (hugeicons, lucide, game-icons…) without installing it, since uninstalled sets are fetched from the Iconify API at runtime. Write icon names as `prefix:name`, e.g. `solar:home-2-line-duotone`.

Pick the source and style by where the icon appears:

| Use                    | Source and style       | Where                                                                                                                                               |
| ---------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| UI and actions         | `solar:*-line-duotone` | Nuxt UI icon overrides in `app/app.config.ts`, navbar, command palette, inputs, button leading/trailing icons, `links` buttons in post front matter |
| Content illustrations  | `solar:*-bold-duotone` | `content/projects`, `content/uses`, `content/profiles`, accordion items on `/now`                                                                   |
| Brand or product logos | `simple-icons:*`       | Social links, apps, services, languages (GitHub, npm, VS Code, Node.js…)                                                                            |

How to decide:

- A real product or brand with a logo in simple-icons gets the logo. If simple-icons has no logo for it, use the closest Solar icon by meaning in the style for its place (e.g. Dia browser → `solar:global-bold-duotone`).
- Don't mix in plain `-linear`, `-bold`, `-outline` or `-broken` Solar variants.
- Choose by meaning, not by look: one concept should keep the same icon across the site (e.g. `pallete-2` for color themes, `keyboard` for keyboards).
- Navbar links are the one place that switches style: the active route's icon uses `bold-duotone`, the rest `line-duotone` (see `navIcon` in `app/components/layout/Navbar.vue`). Command palette entries for the same pages always stay `line-duotone`.
- When Nuxt UI adds a new key to `ui.icons`, override it in `app/app.config.ts` so no Lucide default slips through.
- Before using a name, check that it exists:

  ```bash
  node -e 'const s=require("@iconify-json/solar/icons.json");console.log(!!(s.icons[process.argv[1]]||s.aliases?.[process.argv[1]]))' home-2-line-duotone
  ```

## Uses page

`content/uses/*.json` files are shown in filename order, one accordion group each. Keep groups small and balanced, about 4–9 items each: Dev Tools, Apps & Services, Desk Setup (including office gear, marked "Work laptop." etc.), Everyday & Play, Keyboards, Graveyard. Put a new item into the closest existing group; split a group only when it grows past ~9 items. Items render in two columns, so keep each description to one short sentence. Retired tools go to `9.graveyard.json` with a note on why.
