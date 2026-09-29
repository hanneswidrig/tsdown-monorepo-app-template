# Monorepo Workspace Example (using Vite+)

A pnpm workspace demonstrating how to build multiple packages and apps with [Vite+](https://viteplus.dev), which uses [tsdown](https://tsdown.dev) for library packaging.

## Getting Started

```bash
pnpm install
```

## Commands

```bash
pnpm run build      # Pack all packages with `vp pack`
pnpm run dev        # Pack all packages in watch mode
pnpm run typecheck  # Type-check with tsgo (TypeScript)
pnpm run lint       # Lint with Oxlint
pnpm run lint:fix   # Fix lint issues
pnpm run fmt        # Format with Oxfmt
pnpm run fmt:check  # Check formatting
```

`pnpm exec vp check` runs format, lint, and type checks together.

## Structure

- `apps/` - Application packages
- `libs/` - Shared library packages
