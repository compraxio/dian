# AGENTS.md - Proyecto DIAN Development Guide

## Project Overview

This is a Next.js 16 application with React 19, TypeScript, Tailwind CSS v4, and Prisma. It simulates DIAN tax forms for educational purposes.

## Build Commands

```bash
# Development
npm run dev              # Start dev server on http://localhost:3000
npm run build            # Production build
npm run start            # Start production server
npm run lint            # Run ESLint
```

### Running a Single Test

**No test framework is currently configured.** To add tests:

```bash
# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

# Run tests
npx vitest               # Run all tests
npx vitest run          # Run tests once
npx vitest run src/lib/utils.test.ts  # Run single file
```

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** in `tsconfig.json`
- Use explicit types for function parameters and return types
- Use `zod` for runtime validation (already installed)
- Use path alias `@/*` for imports (maps to `./src/*`)

### React/Next.js

- Use **App Router** (`src/app/`)
- Server Components by default; add `'use client'` only when needed
- Use React 19 features including `use` hook for promises
- React Compiler is enabled in `next.config.ts`

### Components

- Follow existing patterns in `src/components/ui/` for shadcn-style components
- Use `cva` (class-variance-authority) for component variants
- Use Radix UI primitives (`radix-ui`) for accessible components
- Use `cn()` utility from `@/lib/utils` for className merging

```tsx
import { cn } from '@/lib/utils'

// Good
<div className={cn('base-class', condition && 'conditional-class')} />
```

### Styling (Tailwind CSS v4)

- Use Tailwind CSS classes directly
- Follow existing color scheme (primary, dark mode support)
- Use dark mode with `dark:` prefix

### Imports

```tsx
// Order: 1. External libs 2. Internal imports 3. Components
import { useState } from 'react'
import Link from 'next/link'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Avatares } from '@/components/Avatares'
```

### Naming Conventions

- **Components**: PascalCase (`Button.tsx`, `UserProfile.tsx`)
- **Files**: kebab-case (`auth-config.ts`, `api-route.ts`)
- **Variables**: camelCase (`userName`, `isLoading`)
- **Constants**: SCREAMING_SNAKE_CASE for config values
- **React Components**: Function components, named exports preferred

### Database (Prisma)

- Schema in `prisma/schema.prisma`
- Use Prisma client from `@/lib/prisma`
- Run migrations: `npx prisma migrate dev`
- Generate client: `npx prisma generate`

### Error Handling

- Use `try/catch` with async operations
- Use Zod for input validation
- Return appropriate HTTP status codes in API routes

### Performance Guidelines

Follow the Vercel React Best Practices (see `.agents/skills/vercel-react-best-practices/AGENTS.md`):

- Use `Promise.all()` for parallel data fetching
- Minimize serializable props at RSC boundaries
- Lazy load heavy components with `next/dynamic`
- Authenticate Server Actions (they're public endpoints)

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── auth/           # Authentication pages
│   ├── layout.tsx      # Root layout
│   └── page.tsx       # Home page
├── components/         # React components
│   └── ui/            # Reusable UI components
├── lib/               # Utilities
│   ├── prisma.ts      # Database client
│   └── utils.ts       # cn() utility
└── fonts/             # Font configurations
```

## Key Dependencies

- **next**: 16.1.6
- **react**: 19.2.3
- **typescript**: 5.x
- **tailwindcss**: 4
- **prisma**: 7.4.2
- **zod**: 4.3.6
- **next-auth**: 4.24.13

## Linting

ESLint is configured with Next.js core web vitals and TypeScript rules (`eslint.config.mjs`). Run `npm run lint` before committing.
