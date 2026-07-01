'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { Coffee, Server, Leaf, FileCode2, Palette, FileJson, Atom, Database } from 'lucide-react';

const SKILLS = [
  { name: 'Java', icon: Coffee },
  { name: 'Advance Java', icon: Server },
  { name: 'Spring Boot', icon: Leaf },
  { name: 'HTML', icon: FileCode2 },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: FileJson },
  { name: 'React JS', icon: Atom },
  { name: 'MySQL', icon: Database },
];

const duplicatedSkills = [...SKILLS, ...SKILLS, ...SKILLS];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="w-full py-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group/scroll">
          <ul className="flex items-center flex-nowrap w-max flex-shrink-0 sm:[&_li]:mx-4 [&_li]:mx-2 animate-infinite-scroll group-hover/scroll:[animation-play-state:paused]">
            {duplicatedSkills.map((skill, i) => (
              <li key={`row1-${skill.name}-${i}`}>
                <GlassCard className="!p-6 text-center flex flex-col items-center justify-center gap-4 w-32 h-32 md:w-40 md:h-40 group">
                  <div className="transition-transform duration-300 group-hover:[transform:translateZ(40px)] drop-shadow-2xl">
                    <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="transition-transform duration-300 group-hover:[transform:translateZ(20px)]">
                    <span className="font-medium text-foreground text-sm md:text-base">{skill.name}</span>
                  </div>
                </GlassCard>
              </li>
            ))}
          </ul>
          <ul className="flex items-center flex-nowrap w-max flex-shrink-0 sm:[&_li]:mx-4 [&_li]:mx-2 animate-infinite-scroll group-hover/scroll:[animation-play-state:paused]" aria-hidden="true">
            {duplicatedSkills.map((skill, i) => (
              <li key={`row2-${skill.name}-${i}`}>
                <GlassCard className="!p-6 text-center flex flex-col items-center justify-center gap-4 w-32 h-32 md:w-40 md:h-40 group">
                  <div className="transition-transform duration-300 group-hover:[transform:translateZ(40px)] drop-shadow-2xl">
                    <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="transition-transform duration-300 group-hover:[transform:translateZ(20px)]">
                    <span className="font-medium text-foreground text-sm md:text-base">{skill.name}</span>
                  </div>
                </GlassCard>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
