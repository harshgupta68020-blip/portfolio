'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';
import { cardHoverProps } from '@/animations/variants';
import { Cpu, Server, Code2, Terminal } from 'lucide-react';

const iconsMap = {
  backend: Server,
  'ai-ml': Cpu,
  'problem-solving': Code2,
  tools: Terminal,
};

export default function Skills() {
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <section id="skills" className="py-32 md:py-40 px-4 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-white font-semibold text-[clamp(2rem,4vw,4rem)] tracking-[-0.02em]">
          Technical Capabilities
        </h2>
        <p className="text-white/60 text-base md:text-lg mt-4 max-w-[600px] mx-auto">
          Core engineering skill set without arbitrary percentage bars — focusing on real usage and depth.
        </p>
      </div>

      {/* 4-Column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category) => {
          const IconComponent = iconsMap[category.id] || Server;
          const isHovered = activeCardId === category.id;

          return (
            <motion.div
              key={category.id}
              {...cardHoverProps}
              onMouseEnter={() => setActiveCardId(category.id)}
              onMouseLeave={() => setActiveCardId(null)}
              onFocus={() => setActiveCardId(category.id)}
              onBlur={() => setActiveCardId(null)}
              tabIndex={0}
              role="region"
              aria-label={`${category.category} Skills`}
              className="relative bg-white/[0.03] border border-white/10 hover:border-[#3B82F6]/40 rounded-[24px] p-6 transition-all duration-300 backdrop-blur-sm min-h-[360px] flex flex-col justify-between overflow-hidden cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            >
              {/* Top Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#3B82F6]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    Category
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white tracking-tight mb-4">
                  {category.category}
                </h3>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-white/80 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reveal Layer on Hover/Focus */}
              <div className="mt-4 pt-4 border-t border-white/10 text-xs">
                <div className="mb-2">
                  <span className="text-[#3B82F6] font-mono font-medium block">
                    Advanced Depth:
                  </span>
                  <p className="text-white/70 leading-relaxed mt-0.5">
                    {category.details.advancedUsage}
                  </p>
                </div>
                {category.details.projects.length > 0 && (
                  <div className="mt-2 text-white/50 font-mono text-[11px]">
                    Used in: {category.details.projects.join(', ')}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
