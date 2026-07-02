'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                Hello! I am a passionate and detail-oriented <span className="text-primary font-semibold">Java Full Stack Developer</span> dedicated to crafting robust, scalable, and user-centric web applications. My journey in technology has equipped me with a strong foundation across both frontend and backend development.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                On the backend, I specialize in building efficient RESTful APIs and microservices using <span className="text-primary font-semibold">Java, Spring Boot, and MySQL</span>. On the frontend, I bring interfaces to life using modern technologies like <span className="text-primary font-semibold">React, JavaScript, HTML, and CSS</span>.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                I thrive in collaborative environments and love tackling complex challenges head-on. As a quick learner with a Master's degree in Computer Applications, I am constantly exploring new tools and methodologies to elevate the quality of my code and deliver impactful solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center w-full"
          >
            <GlassCard className="w-full max-w-sm aspect-square relative overflow-hidden group !p-0">
              <Image 
                src="/profile.png" 
                alt="Thenmozhi Profile Picture"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
