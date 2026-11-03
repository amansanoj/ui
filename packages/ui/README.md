# @amansanoj/ui

Pre-styled, high-performance UI component library engineered for React 19 and compiled against `@amansanoj/brand` design tokens. Powered by MUI's unstyled `@base-ui/react` primitives with strict React Server Component (RSC) boundary discipline and zero copy-paste friction.

---

## Features

- **React 19 Native:** Native `ref` prop forwarding on all components without `React.forwardRef` boilerplate.
- **Zero Copy-Paste:** Pre-styled and distributed as a published npm package with tree-shakeable subpaths.
- **Strict RSC Discipline:** Presentational components (`Badge`, `Card`, `Separator`, `Container`) remain pure Server Components. Only interactive stateful components (`Dialog`, `DropdownMenu`) carry `"use client"`.
- **Headless Accessibility Core:** Unstyled primitives powered by `@base-ui/react`, bundled directly so consumers never deal with transitive peer dependency conflicts.
- **Brand Token Contract:** Styles compile against the OKLCH token scale defined in `@amansanoj/brand` (`var(--primary)`, `var(--card)`, `var(--radius)`, `var(--font-display)`, `var(--font-body)`).
- **Dual Module Targets:** Emits ESM (`.js`), CJS (`.cjs`), `.d.ts`, and `.d.cts` declaration maps.

---

## Installation

```bash
bun add @amansanoj/ui @amansanoj/brand
# or
pnpm add @amansanoj/ui @amansanoj/brand
# or
npm install @amansanoj/ui @amansanoj/brand
```

---

## Setup & Stylesheet Delivery

Import the brand token stylesheet and component stylesheet once at your application root (e.g. Next.js `app/layout.tsx`, Vite `src/main.tsx`, or Astro `BaseLayout.astro`):

```tsx
import '@amansanoj/brand/globals.css';
import '@amansanoj/ui/styles.css';
```

---

## Consumption & Subpath Exports

### 1. Root Export
```tsx
import { Button, Badge, Card, Dialog } from '@amansanoj/ui';
```

### 2. Granular Tree-Shakeable Subpaths
```tsx
import { Button } from '@amansanoj/ui/button';
import { Badge } from '@amansanoj/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@amansanoj/ui/card';
import { Input } from '@amansanoj/ui/input';
import { Textarea } from '@amansanoj/ui/textarea';
import { Dialog, DialogTrigger, DialogContent } from '@amansanoj/ui/dialog';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@amansanoj/ui/dropdown-menu';
import { Separator } from '@amansanoj/ui/separator';
import { Container } from '@amansanoj/ui/container';
import { cn } from '@amansanoj/ui/utils';
```

---

## Component Suite (v0.1 Core 8)

| Component | RSC Category | Underlying Primitive | Composition Support |
| :--- | :--- | :--- | :--- |
| **`Button`** | Universal | HTML `<button>` | `cva` variants, `asChild` (`Slot`), `render` prop, icon slots, `isLoading` |
| **`Badge`** | Server Component | HTML `<div>` | `cva` variants (`default`, `secondary`, `accent`, `destructive`, `outline`, `muted`) |
| **`Card`** | Server Component | HTML `<div>` | Compound components: `Header`, `Title`, `Description`, `Content`, `Footer` |
| **`Input`** | Universal | HTML `<input>` | React 19 native ref, theme ring styling |
| **`Textarea`** | Universal | HTML `<textarea>` | React 19 native ref, theme ring styling |
| **`Dialog`** | Client Component (`"use client"`) | `@base-ui/react/dialog` | Backdrop blur, compound modal anatomy, smooth transitions |
| **`DropdownMenu`** | Client Component (`"use client"`) | `@base-ui/react/menu` | Floating positioner, keyboard navigation, compound menu items |
| **`Separator`** | Server Component | Semantic HTML / ARIA | Accessible horizontal/vertical divider with orientation roles |
| **`Container`** | Server Component | HTML `<div>` / semantic tags | Responsive layout wrapper with max-width breakpoints (`sm` to `full`) |

---

## Development

```bash
# Build the library
bun run build

# Typecheck
bun run typecheck
```

---

## License

MIT © Aman Sanoj
