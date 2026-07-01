'use client';

import { ReactNode, useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { queryClient } from '@/lib/react-query';
import { store } from '@/store/api/store';
import { useUiStore } from '@/store/ui-store';
import { ReactLenis } from 'lenis/react';

export function Providers({ children }: { children: ReactNode }) {
  const theme = useUiStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          {children}
        </ReactLenis>
      </QueryClientProvider>
    </ReduxProvider>
  );
}
