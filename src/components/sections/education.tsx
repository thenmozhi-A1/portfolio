'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';

const EDUCATIONS = [
  {
    degree: 'MCA - Master of Computer Application (CGPA - 8.2)',
    institution: 'Sri Balaji Chockalingam Engineering College - Arni',
    period: '2023 - 2025'
  },
  {
    degree: 'B.Sc - Computer Science (CGPA - 8.1)',
    institution: 'Govt Arts College - Tiruvannamalai',
    period: '2020 - 2023'
  }
];

const CERTIFICATIONS = [
  'Java Fullstack Course Certificate',
  'Symposium - Bluetooth Mobile Chatting',
  'Industrial Visit at Enila Technology'
];

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-primary">🎓</span> Education
            </h3>
            {EDUCATIONS.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="p-6 h-full">
                  <div className="relative pl-6">
                    {/* Timeline line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/20 rounded-full" />
                    {/* Timeline dot */}
                    <div className="absolute -left-[7px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                    
                    <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-primary font-medium text-sm mb-1">{edu.institution}</p>
                    <p className="text-foreground/60 text-sm">{edu.period}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-primary">🏆</span> Certifications
            </h3>
            <motion.div variants={itemVariants}>
              <GlassCard className="p-6">
                <ul className="space-y-4">
                  {CERTIFICATIONS.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-foreground/80 leading-relaxed">{cert}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
