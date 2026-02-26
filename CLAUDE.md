# TechSerm Website - Project Guidelines

## Tech Stack

- **Framework:** Nuxt 3 (v3.10.1) with Vue 3
- **Styling:** Tailwind CSS (v3.4.1) with arbitrary values
- **UI Library:** @nuxt/ui (v2.22.0)
- **Icons:** FontAwesome (v6.5.1) + @nuxt/icon + custom SVG components in `components/icons/`
- **Font:** Nunito (sans-serif)
- **Deployment:** Vercel (SSR with Nitro preset)
- **API:** `http://admin.techserm.io`

## Theme Colors (MUST FOLLOW)

All UI work **must** use these theme colors. Do not introduce new brand colors.

| Role | Hex | Usage |
|------|-----|-------|
| **Primary** | `#07A0E1` | Accent links, badges, highlights, icon tints, focus rings, active states |
| **Secondary** | `#04405D` | Headings, navbar, footer, dark backgrounds, gradients, primary text |

### Derived Usage

- **CTA / Buttons:** Use primary `#07A0E1` for filled buttons; secondary `#04405D` for dark buttons
- **Hover states:** Darken primary slightly (e.g., `hover:bg-[#068cc4]`) or lighten secondary
- **Tinted backgrounds:** Use primary with opacity (e.g., `bg-[#07A0E1]/10 text-[#07A0E1]`)
- **Gradients:** Combine secondary shades (e.g., `from-[#04405D] to-[#032d40]`)
- **Focus rings:** `focus:ring-[#07A0E1]`
- **Text colors:** Headings use `#04405D`, body uses Tailwind defaults (gray-600/700)

### CSS Utility Classes (assets/css/style.css)

Use these custom classes where applicable:

- `.techserm-text-blue` — primary accent text
- `.techserm-text-black` — secondary dark text
- `.techserm-bg-blue` — primary accent background
- `.techserm-bg-black` — secondary dark background

### Rules

- Never hardcode colors outside the defined theme palette
- Use Tailwind arbitrary values (`text-[#07A0E1]`, `bg-[#04405D]`) for one-off usage
- Prefer the custom `.techserm-*` classes when they apply
- White (`#ffffff`) is the standard page background
- Gray tones from Tailwind (gray-50 through gray-900) are allowed for neutral UI elements

## Project Structure

```
assets/css/style.css    — Global styles, Tailwind directives, custom components
components/             — Vue SFCs (PascalCase filenames)
  icons/                — SVG icon components
  home/                 — Homepage section components
  project/              — Project detail components
  projects/             — Projects grid components
data/                   — Static JSON (services.json, technologies.json)
layouts/default.vue     — Default layout (Navbar + Footer wrapper)
pages/                  — File-based routing
  services/             — Individual service detail pages
  projects/             — Individual project detail pages
server/                 — Nitro server routes
public/                 — Static assets served at root
```

## Coding Conventions

### Vue Components

- Always use `<script setup>` composition API syntax
- Define props with `defineProps()` — use TypeScript interfaces when types are complex
- PascalCase for component filenames and usage (`HeaderSection.vue`, `<HeaderSection />`)
- Keep templates readable — extract repeated markup into child components

### Tailwind CSS

- Use utility-first approach directly in templates
- Use arbitrary values for theme colors: `text-[#07A0E1]`, `bg-[#04405D]`
- Custom container class uses `w-11/12` with responsive max-widths — use `.container` from style.css
- Responsive breakpoints: sm(576) / md(768) / lg(992) / xl(1200) / 2xl(1400)

### Naming

- Components: PascalCase (`ServiceItem.vue`)
- Data files: kebab-case (`services.json`)
- CSS custom classes: `techserm-` prefix (`techserm-bg-blue`)
- Pages: kebab-case (`cookie-policy.vue`)

### Data Fetching

- Use `useFetch()` composable for API calls
- Provide sensible fallback defaults in case the API is unreachable
- API data is fetched in `app.vue` and passed down via props

## Design Patterns

- **Hero sections:** Gradient overlays on background images using secondary color
- **Section layout:** Badge/label → heading → description → content grid
- **Cards:** White background, rounded corners, shadow, hover lift effect
- **Buttons:** `.main-btn` class or Tailwind button styles using theme colors
- **Spacing:** Use Tailwind spacing scale consistently (py-16/20 for sections, gap-6/8 for grids)

## Do NOT

- Add new CSS frameworks or UI libraries without discussion
- Use inline `style` attributes — use Tailwind classes instead
- Create SCSS/LESS files — all styles go through Tailwind or `assets/css/style.css`
- Skip mobile responsiveness — all layouts must work from 320px up
- Use colors outside the defined theme palette for brand elements
- Disable SSR unless there is a specific technical reason
