'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { heroEyebrows, linksData } from '@/data/links';
import { heroEntry, heroStaggerContainer } from '@/animations/variants';

export default function Hero() {
  const [eyebrowIndex, setEyebrowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEyebrowIndex((prev) => (prev + 1) % heroEyebrows.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const topOffset = 80;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden bg-atmosphere bg-grain"
    >
      {/* Background ambient drift glow */}
      <div className="absolute inset-0 pointer-events-none animate-ambient-drift opacity-60">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={heroStaggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1100px] mx-auto flex flex-col items-center gap-8"
      >
        {/* Eyebrow Rotator */}
        <motion.div variants={heroEntry} className="h-8 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/60 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            <motion.span
              key={eyebrowIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {heroEyebrows[eyebrowIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={heroEntry}
          className="text-white font-semibold tracking-[-0.03em] leading-[0.95] text-[clamp(2.75rem,7vw,7.5rem)] max-w-[1000px]"
        >
          Building intelligent systems that solve real-world problems.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={heroEntry}
          className="text-white/80 text-lg md:text-xl font-medium tracking-tight"
        >
          Backend <span className="text-[#3B82F6] mx-1.5">•</span> AI{' '}
          <span className="text-[#3B82F6] mx-1.5">•</span> System Design
        </motion.p>

        {/* Action CTAs */}
        <motion.div variants={heroEntry} className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 bg-white text-[#09090B] font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/90 shadow-lg shadow-white/5 hover:shadow-white/10"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href={linksData.resume || '#'}
            target={linksData.resume ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-white font-medium text-sm px-7 py-3.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            <FileText className="w-4 h-4 text-white/60" />
            <span>Resume</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Cue Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
