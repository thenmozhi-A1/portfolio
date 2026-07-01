'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const GitHubCalendar: any = dynamic(
  () => import('react-github-calendar').then((mod: any) => {
    // Turbopack / ESM interop can be tricky. We must return a React Component function.
    if (typeof mod === 'function') return mod;
    if (mod.default) return mod.default;
    if (mod.GitHubCalendar) return mod.GitHubCalendar;
    
    // Fallback: if it's somehow none of the above, try to find a function in the exports
    const fn = Object.values(mod).find(v => typeof v === 'function');
    return fn || mod;
  }),
  { ssr: false }
);

export function GithubHeatmap() {
  return (
    <div className="mt-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-6 font-heading">GitHub Contributions</h3>
        <div className="flex justify-center bg-background/50 backdrop-blur-md p-6 rounded-2xl border border-glass-border overflow-x-auto">
          <GitHubCalendar 
            username="thenmozhi-A1" 
            colorScheme="dark"
            theme={{
              light: ['#1e293b', '#3b82f6', '#2563eb', '#1d4ed8', '#1e3a8a'],
              dark: ['#1e293b', '#3b82f6', '#2563eb', '#1d4ed8', '#1e3a8a'],
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
