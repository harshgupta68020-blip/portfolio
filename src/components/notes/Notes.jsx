'use client';

import { motion } from 'framer-motion';
import { notesData, notesOpener } from '@/data/notes';
import { noteCardHoverProps } from '@/animations/variants';

const cardHeights = ['min-h-[220px]', 'min-h-[280px]', 'min-h-[250px]', 'min-h-[230px]'];

export default function Notes() {
  return (
    <section id="notes" className="py-32 md:py-40 px-4 max-w-[1400px] mx-auto">
      {/* Statement Opener */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-white font-semibold text-[clamp(1.75rem,3.5vw,3.5rem)] tracking-[-0.02em] max-w-[900px] mx-auto leading-tight">
          "{notesOpener}"
        </h2>
      </div>

      {/* Typography-first Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {notesData.map((note, idx) => (
          <motion.div
            key={idx}
            {...noteCardHoverProps(idx)}
            className={`bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-[24px] p-8 flex flex-col justify-between backdrop-blur-sm transition-all duration-300 shadow-lg ${
              cardHeights[idx % cardHeights.length]
            }`}
          >
            <span className="text-[10px] font-mono text-[#3B82F6] opacity-60 uppercase tracking-widest">
              Note 0{idx + 1}
            </span>

            <blockquote className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug my-4">
              "{note.quote}"
            </blockquote>

            <div className="h-1 w-8 bg-white/10 rounded-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
