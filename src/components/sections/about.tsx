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
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              I am a motivated and detail-oriented Java Full Stack Developer with a strong foundation in Java, Spring Boot, HTML, CSS, JavaScript, React, and MySQL. I am a quick learner with strong problem-solving and teamwork abilities.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-foreground">MCA - Master of Computer Application (CGPA - 8.2)</p>
                <p className="text-foreground/60 text-sm">Sri Balaji Chockalingam Engineering College - Arni | 2023 - 2025</p>
              </div>
              <div>
                <p className="font-medium text-foreground">B.Sc - Computer Science (CGPA - 8.1)</p>
                <p className="text-foreground/60 text-sm">Govt Arts College - Tiruvannamalai | 2020 - 2023</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Certifications</h3>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>Java Fullstack Course Certificate</li>
              <li>Symposium - Bluetooth Mobile Chatting</li>
              <li>Industrial Visit at Enila Technology</li>
            </ul>
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
