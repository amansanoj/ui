# @amansanoj/ui (Monorepo)

A production-grade, pre-styled UI component library workspace built for React 19 and compiled against `@amansanoj/brand` OKLCH design tokens.

---

## Workspace Structure

```
ui/
├── packages/
│   └── ui/                   # Core published package: @amansanoj/ui
│       ├── src/
│       │   ├── components/   # Core 8 component suites
│       │   ├── lib/          # Utilities (cn helper)
│       │   └── styles/       # Compiled stylesheet (styles.css)
│       └── tsup.config.ts    # Dual ESM + CJS build matrix with RSC "use client" preservation
├── apps/
│   └── playground/           # Vite + React 19 interactive preview showcase
├── .changeset/               # Changesets versioning configuration
└── .github/
    └── workflows/
        └── release.yml       # Automated GitHub Actions release to npm with provenance
```

---

## Quick Start (Monorepo Development)

```bash
# Install all dependencies across workspaces
bun install

# Start the interactive Vite playground app
bun run dev

# Build @amansanoj/ui package (ESM, CJS, .d.ts, styles.css)
bun run build

# Typecheck all packages
bun run typecheck

# Create a new version changeset
bun run changeset
```

---

## Architectural Principles

1. **React 19 Native:** Native `ref` as standard prop; zero `React.forwardRef` overhead.
2. **Headless Layer:** Powered by MUI's `@base-ui/react` primitives bundled internally.
3. **Strict RSC Boundaries:** Pure Server Components for presentational components (`Card`, `Badge`, `Separator`, `Container`); `"use client"` injected strictly on interactive client components (`Dialog`, `DropdownMenu`).
4. **Design Tokens:** Strict alignment with `@amansanoj/brand` CSS variables (`var(--primary)`, `var(--card)`, `var(--radius)`, `var(--font-display)`, `var(--font-body)`).
5. **Release Automation:** Automated releases to npm with provenance via Changesets and GitHub Actions.