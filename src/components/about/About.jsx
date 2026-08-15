'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutData } from '@/data/about';
import { aboutPanelVariants } from '@/animations/variants';

export default function About() {
  const [activeId, setActiveId] = useState(aboutData[0].id);

  const activeCategory = aboutData.find((item) => item.id === activeId) || aboutData[0];

  return (
    <section id="about" className="py-32 md:py-40 px-4 max-w-[1400px] mx-auto">
      {/* Statement Opener */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-white font-semibold text-[clamp(2rem,4vw,4rem)] tracking-[-0.02em]">
          How I think.
        </h2>
      </div>

      {/* Split Panel Layout */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start bg-[#111111]/40 border border-white/10 rounded-[24px] p-6 md:p-12 backdrop-blur-sm">
        {/* Left Navigation Rail (30% width on desktop) */}
        <nav
          aria-label="Philosophy Categories"
          className="w-full md:w-1/3 flex md:flex-col gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-none border-b md:border-b-0 border-white/10"
        >
          {aboutData.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative text-left py-3 px-4 rounded-xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap md:whitespace-normal group ${
                  isActive
                    ? 'bg-white/5 text-white font-semibold'
                    : 'text-white/40 hover:text-white/80 hover:bg-white/[0.02]'
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.span
                    layoutId="aboutActiveBar"
                    className="absolute left-0 top-2 bottom-2 w-[3px] bg-[#3B82F6] rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={`text-xs font-mono transition-colors ${
                    isActive ? 'text-[#3B82F6]' : 'text-white/30 group-hover:text-white/60'
                  }`}
                >
                  {item.id}
                </span>
                <span className="text-base md:text-lg tracking-tight">{item.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Content Panel (70% width on desktop) */}
        <div
          aria-live="polite"
          className="w-full md:w-2/3 min-h-[220px] flex flex-col justify-center px-2 md:px-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              variants={aboutPanelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/20">
                  Category {activeCategory.id}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  {activeCategory.title}
                </h3>
              </div>

              <p className="text-white/80 text-lg md:text-xl leading-[1.8] font-normal max-w-[700px]">
                {activeCategory.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
