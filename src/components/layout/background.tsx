'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

export function Background() {
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  
  const springX = useSpring(mouseX, { damping: 50, stiffness: 200, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200, mass: 0.5 });
  
  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      yDest: -100 - Math.random() * 200,
      xDest: (Math.random() - 0.5) * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-background transition-colors duration-500" />
      
      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Aurora / Glow Layers */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 0.8, 0.5], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[100px] rounded-full"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.7, 0.4], x: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3], y: [0, -50, 0], x: [0, 30, 0] }}
        transition={{ duration: 25, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-secondary/15 blur-[120px] rounded-full"
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />

      {/* Floating Particles Layer */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-white/40 rounded-full"
              style={{
                width: p.width + "px",
                height: p.height + "px",
                left: p.left + "%",
                top: p.top + "%",
              }}
              animate={{
                y: [0, p.yDest],
                x: [0, p.xDest],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: p.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Interactive Spotlight Layer */}
      {mounted && (
        <motion.div
          className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen -z-10"
          style={{
            x: springX,
            y: springY
          }}
        />
      )}

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay" />
    </div>
  );
}
