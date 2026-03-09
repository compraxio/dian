'use client';

import { Button } from './button';

interface Buttons extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variante: 'primaria' | 'secundaria';
  children: React.ReactNode;
}

export function Buttons({ variante, children, ...props }: Buttons) {
  const className =
    variante === 'primaria'
      ? 'flex min-w-25 cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all'
      : 'flex min-w-25 cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all';
  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
}
