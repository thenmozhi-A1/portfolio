import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UiState {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      activeSection: 'home',
      setActiveSection: (section) => set({ activeSection: section }),
    }),
    {
      name: 'ui-storage',
    }
  )
);
