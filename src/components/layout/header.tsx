'use client';

import { useUiStore } from '@/store/ui-store';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const { activeSection } = useUiStore();
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/70 backdrop-blur-md border-glass-border shadow-sm py-4 mt-1" : "py-6 mt-1"
      )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="font-heading font-bold text-xl tracking-tight">Portfolio.</div>
        
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === link.name.toLowerCase() ? "text-primary" : "text-foreground/80"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

      </div>
      </header>
    </>
  );
}
