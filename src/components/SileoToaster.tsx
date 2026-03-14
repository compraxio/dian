'use client';

import { useTheme } from 'next-themes';
import { Toaster } from 'sileo';

export function SileoToaster() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toasterOptions = isDark
    ? {
        fill: '#171717',
        styles: {
          title: 'text-white!',
          description: 'text-white/75!',
          badge: 'bg-white/10!',
          button: 'bg-white/10!',
        },
      }
    : {};

  return <Toaster position="top-center" options={toasterOptions} />;
}
