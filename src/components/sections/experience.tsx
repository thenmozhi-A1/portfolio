'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';

const EXPERIENCES = [
  {
    role: 'Internship',
    company: 'B&Y Technologies',
    period: 'April- june',
    description: [
      'Built full-stack web applications using Java, Spring Boot, React.js, HTML, CSS, JavaScript, and MySQL.',
      'Developed backend modules and integrated them with frontend components.',
      'Created REST APIs and performed API testing using Postman.',
      'Wrote clean, reusable, and maintainable code following coding standards.',
      'Collaborated with mentors and team members to implement new features and resolve bugs.',
      'Learned software development lifecycle (SDLC), version control with Git, and Agile methodologies.'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard>
                <div className="relative pl-6 md:pl-8">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/20 rounded-full" />
                  {/* Timeline dot */}
                  <div className="absolute -left-[7px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/80 mb-4 font-medium">
                    <span className="text-primary">{exp.company}</span>
                    <span className="text-foreground/40">|</span>
                    <span>{exp.period}</span>
                  </div>
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc pl-4 text-foreground/80 leading-relaxed space-y-1">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
