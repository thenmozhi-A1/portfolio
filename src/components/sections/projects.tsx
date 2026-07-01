'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { ExternalLink, Code2 } from 'lucide-react';
import { useState } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Android App Malware Detector API',
    description: 'Developed a malware detection API using Androguard for APK feature extraction and CatBoost for malware classification. Implemented static analysis to extract application permissions, API calls, and manifest features. Built RESTful APIs for APK analysis and malware prediction. Improved detection accuracy through feature engineering and machine learning model optimization.',
    tags: ['Python', 'Androguard', 'CatBoost', 'REST API', 'Flask/FastAPI', 'Machine Learning'],
    category: 'Machine Learning',
    github: '#',
    demo: '#',
  },
  {
    title: 'Gym Management System',
    description: 'Developed a full-stack Gym Management System using Spring Boot, React.js, and MySQL. Designed and implemented RESTful APIs for member, trainer, and membership management. Built a responsive and user-friendly interface using React.js. Implemented CRUD operations with efficient database management. Integrated secure authentication and role-based access control. Followed clean architecture, reusable component design, and REST API best practices.',
    tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST API'],
    category: 'Full-Stack',
    github: '#',
    demo: '#',
  }
];

const CATEGORIES = ['All', 'Full-Stack', 'Machine Learning'];

export function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = PROJECTS.filter(
    (project) => filter === 'All' || project.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                  : 'bg-background/50 text-foreground/70 hover:text-foreground border border-glass-border hover:border-primary/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
              >
              <GlassCard href={project.demo !== '#' ? project.demo : project.github} className="h-full flex flex-col group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-foreground/5 rounded-md border border-glass-border">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 relative z-10">
                  <button 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, '_blank'); }} 
                    className="text-foreground/60 hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Code2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.demo, '_blank'); }} 
                    className="text-foreground/60 hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
