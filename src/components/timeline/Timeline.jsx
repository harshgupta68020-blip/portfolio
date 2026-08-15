'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { journeyData } from '@/data/journey';

export default function Timeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="py-32 md:py-40 px-4 max-w-[1000px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-white font-semibold text-[clamp(2rem,4vw,4rem)] tracking-[-0.02em]">
          Engineering Journey
        </h2>
        <p className="text-white/60 text-base md:text-lg mt-4 max-w-[600px] mx-auto">
          Progression from algorithmic fundamentals to autonomous AI systems engineering.
        </p>
      </div>

      {/* Timeline Container */}
      <div ref={containerRef} className="relative pl-6 md:pl-12 border-l border-white/10 my-12">
        {/* Animated Progress Line */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#3B82F6] shadow-[0_0_12px_rgba(59,130,246,0.6)]"
        />

        {/* Nodes List */}
        <div className="flex flex-col gap-12 md:gap-16">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[#18181B] border-2 border-white/20 group-hover:border-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Node Card Content */}
              <div className="bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-[20px] p-6 md:p-8 backdrop-blur-sm transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl md:text-2xl font-mono font-bold text-white tracking-tight">
                    {item.year}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-white/80 tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
