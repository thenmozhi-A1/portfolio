'use client';

import { ReactNode, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  interactive?: boolean;
}

export function GlassCard({ children, className, href, interactive = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    if (!interactive) return;
    setIsHovered(true);
  };

  const CardContent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: interactive ? rotateX : 0,
        rotateY: interactive ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "glass rounded-2xl p-6 shadow-xl relative transition-colors duration-200 h-full",
        interactive && "cursor-pointer hover:border-primary/50",
        interactive && isHovered && "bg-background/20",
        className
      )}
    >
      <div 
        style={{ 
          transform: interactive && isHovered ? "translateZ(30px)" : "translateZ(0px)", 
          transition: "transform 0.2s",
          transformStyle: "preserve-3d"
        }} 
        className="h-full w-full flex flex-col relative z-10"
      >
        {children}
      </div>
      
      {/* Glowing animated border layer */}
      {interactive && (
        <div 
          className={cn(
            "absolute -inset-0.5 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl blur opacity-0 transition-opacity duration-300 pointer-events-none -z-10",
            isHovered && "opacity-40"
          )}
        />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block outline-none w-full h-full" style={{ perspective: "1000px" }}>
        {CardContent}
      </Link>
    );
  }

  return (
    <div className="w-full h-full" style={{ perspective: "1000px" }}>
      {CardContent}
    </div>
  );
}
