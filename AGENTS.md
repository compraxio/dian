# AGENTS.md - Proyecto DIAN Development Guide

## Project Overview

This is a Next.js 16 application with React 19, TypeScript, Tailwind CSS v4, and Prisma. It simulates DIAN tax forms for educational purposes.

## Build Commands

```bash
# Development
npm run dev              # Start dev server on http://localhost:3000
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint
```

### Running Tests

**No test framework is currently configured.** To add tests:

```bash
# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

# Run tests
npx vitest               # Run all tests in watch mode
npx vitest run           # Run tests once
npx vitest run src/lib/utils.test.ts  # Run single file
```

### Database Commands

```bash
npx prisma migrate dev   # Run migrations
npx prisma generate      # Generate Prisma client
npx prisma studio        # Open Prisma database GUI
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
- Use `tw-animate-css` for animations

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
- **Files**: PascalCase for components, kebab-case for config/util files
- **Variables**: camelCase (`userName`, `isLoading`)
- **Constants**: SCREAMING_SNAKE_CASE for config values
- **React Components**: Function components, named exports preferred

### Forms & Validation

Use `react-hook-form` with `zod` and `@hookform/resolvers` for form validation:

```tsx
const schema = z.object({ email: z.string().email(), password: z.string().min(8) })
type FormData = z.infer<typeof schema>
const form = useForm<FormData>({ resolver: zodResolver(schema) })
```

### Database (Prisma)

- Schema in `prisma/schema.prisma`
- Use Prisma client from `@/lib/prisma`
- Use try/catch for all database operations

### Error Handling

The project has a custom error handling system:

#### Custom Error Classes (`src/lib/errors.ts`)

```tsx
import { AppError, ValidationError, UnauthorizedError, NotFoundError, ConflictError, DatabaseError } from '@/lib/errors'

// Usage
throw new ValidationError('Datos inválidos', { field: 'email' })
throw new ConflictError('El recurso ya existe')
throw new DatabaseError('Error de conexión')
throw new UnauthorizedError()
```

#### Logger (`src/lib/logger.ts`)

```tsx
import { logger } from '@/lib/logger'

logger.info('Usuario creado', { userId: 123 })
logger.warn('Intento sospechoso', { email: 'test@test.com' })
logger.error('Error crítico', error as Error, { context: 'login' })
```

#### Error Boundary (`src/components/ErrorBoundary.tsx`)

```tsx
import { ErrorBoundary } from '@/components/ErrorBoundary'

<ErrorBoundary>
  <TuComponente />
</ErrorBoundary>
```

#### Server Actions Pattern

```tsx
try {
  // lógica
  logger.info('Operación exitosa', { data })
  return { ok: true, message: 'Éxito' }
} catch (error) {
  logger.error('Error en operación', error as Error, { contexto })

  if (error instanceof ValidationError || error instanceof ConflictError) {
    throw error // Errores conocidos, re-lanzar
  }

  throw new DatabaseError('Error inesperado') // Errores genéricos
}
```

### API Routes

- Place in `src/app/api/`
- Use NextResponse for responses
- Validate input with Zod
- Authenticate requests (they're public by default)

### Performance Guidelines

Follow the Vercel React Best Practices:

- Use `Promise.all()` for parallel data fetching
- Minimize serializable props at RSC boundaries
- Lazy load heavy components with `next/dynamic`
- **Always authenticate Server Actions** (they're public endpoints)

## Project Structure

```
src/
├── app/           # Next.js App Router pages
│   ├── api/      # API routes
│   ├── auth/     # Authentication pages
│   └── actions/ # Server Actions
├── components/    # React components (ui/ for shadcn-style)
│   └── ErrorBoundary.tsx
└── lib/          # Utilities
    ├── prisma.ts # Database client
    ├── utils.ts  # cn() utility
    ├── errors.ts # Custom error classes
    └── logger.ts # Logging system
prisma/
└── schema.prisma  # Database schema
```

## Key Dependencies

- **next**: 16.1.6
- **react**: 19.2.3
- **typescript**: 5.x
- **tailwindcss**: 4
- **prisma**: 7.4.2
- **zod**: 4.3.6
- **next-auth**: 4.24.13
- **react-hook-form**: 7.71.2

## Linting

ESLint is configured with Next.js core web vitals and TypeScript rules (`eslint.config.mjs`). Run `npm run lint` before committing.
