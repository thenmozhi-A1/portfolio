'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const GitHubCalendar: any = dynamic(() => import('react-github-calendar') as any, { ssr: false });

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
