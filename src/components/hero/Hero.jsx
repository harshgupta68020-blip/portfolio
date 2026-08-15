'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroEyebrows, linksData } from '@/data/links';
import { heroEntry, heroStaggerContainer } from '@/animations/variants';
import { LineMaskHeading } from '@/components/motion/CinematicText';
import { MagneticElement, ScrambleText } from '@/components/motion/MicroInteractions';

export default function Hero() {
  const [eyebrowIndex, setEyebrowIndex] = useState(0);
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const atmosphereRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setEyebrowIndex((prev) => (prev + 1) % heroEyebrows.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  // M3 Parallax & M4 Pinned Scene Stacking via GSAP ScrollTrigger
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (isMobile || prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // M3: Parallax atmosphere background layer
      if (atmosphereRef.current) {
        gsap.fromTo(
          atmosphereRef.current,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // M4: Pinned Hero Scene Stacking (scale 1 -> 0.94, brightness 1 -> 0.55)
      if (stickyRef.current) {
        gsap.to(stickyRef.current, {
          scale: 0.94,
          opacity: 0.7,
          filter: 'brightness(0.65)',
          ease: 'none',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, wrapperRef);

    return () => ctx.revert();
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
    <div ref={wrapperRef} className="relative w-full md:h-[150vh]">
      <section
        ref={stickyRef}
        id="hero"
        className="md:sticky md:top-0 h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-atmosphere bg-grain z-10 will-change-transform"
      >
        {/* M3: Atmospheric background with parallax layer */}
        <div
          ref={atmosphereRef}
          className="absolute inset-0 pointer-events-none animate-ambient-drift opacity-60 will-change-transform"
        >
          <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-[#3B82F6]/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-white/5 rounded-full blur-[120px]" />
        </div>

        <motion.div
          variants={heroStaggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[1100px] mx-auto flex flex-col items-center gap-8"
        >
          {/* Eyebrow Rotator with M6 Scramble Decode */}
          <motion.div variants={heroEntry} className="h-8 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/60 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="font-mono">
                <ScrambleText text={heroEyebrows[eyebrowIndex]} duration={450} />
              </span>
            </div>
          </motion.div>

          {/* M1: Line-Mask Heading Reveal */}
          <LineMaskHeading
            as="h1"
            lines={[
              'Building intelligent systems',
              'that solve real-world problems.',
            ]}
            delay={0.1}
            stagger={0.12}
            className="text-white font-semibold tracking-[-0.03em] leading-[0.95] text-[clamp(2.75rem,7vw,7.5rem)] max-w-[1050px]"
          />

          {/* Subheading */}
          <motion.p
            variants={heroEntry}
            className="text-white/80 text-lg md:text-xl font-medium tracking-tight"
          >
            Backend <span className="text-[#3B82F6] mx-1.5">•</span> AI{' '}
            <span className="text-[#3B82F6] mx-1.5">•</span> System Design
          </motion.p>

          {/* M6 Magnetic Action CTAs */}
          <motion.div variants={heroEntry} className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <MagneticElement radius={90} strength={0.3}>
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 bg-white text-[#09090B] font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-white/90 shadow-lg shadow-white/5 hover:shadow-white/15"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </MagneticElement>

            <MagneticElement radius={70} strength={0.2}>
              <a
                href={linksData.resume || '#'}
                target={linksData.resume ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-white font-medium text-sm px-7 py-3.5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-white/60" />
                <span>Resume</span>
              </a>
            </MagneticElement>
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
    </div>
  );
}
