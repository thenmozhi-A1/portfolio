'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-medium tracking-wide uppercase mb-4">Java Full Stack Developer</h2>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            Hi, I&apos;m <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Thenmozhi
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed"
          >
            Motivated and detail-oriented Java Full Stack Developer fresher with a strong foundation in modern web technologies. Passionate about building scalable applications and eager to contribute technical skills while learning from experienced professionals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium transition-transform hover:scale-105"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="/resume.pdf#toolbar=0" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium transition-transform hover:scale-105"
            >
              View Resume <FileText className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-foreground/5 border border-glass-border px-6 py-3 rounded-full font-medium transition-all hover:bg-foreground/10"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
