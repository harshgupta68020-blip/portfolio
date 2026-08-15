'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/icons/SocialIcons';
import { projectsData } from '@/data/projects';
import ProjectDiagram from './ProjectDiagram';
import { cardHoverProps } from '@/animations/variants';

export default function Projects() {
  const featuredProject = projectsData.find((p) => p.featured);
  const secondaryProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 md:py-40 px-4 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-white font-semibold text-[clamp(2rem,4vw,4rem)] tracking-[-0.02em]">
          Featured Engineering Work
        </h2>
        <p className="text-white/60 text-base md:text-lg mt-4 max-w-[600px] mx-auto">
          High-impact systems built with emphasis on architecture, performance, and clean tradeoffs.
        </p>
      </div>

      <div className="flex flex-col gap-12 md:gap-16">
        {/* Featured Project Card (IntelliLight) */}
        {featuredProject && (
          <motion.div
            {...cardHoverProps}
            className="bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-[24px] p-8 md:p-12 transition-all duration-300 backdrop-blur-sm min-h-[600px] flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Header Badge & Name */}
              <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                <span className="text-xs font-mono text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/20">
                  Featured Case Study
                </span>
                <div className="flex items-center gap-3">
                  {featuredProject.links.source && (
                    <a
                      href={featuredProject.links.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                      aria-label="View Source Code"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-3">
                {featuredProject.name}
              </h3>
              <p className="text-white/80 text-lg md:text-xl max-w-[800px] leading-relaxed">
                {featuredProject.summary}
              </p>

              {/* Architecture Diagram */}
              <ProjectDiagram nodes={featuredProject.diagramNodes} type="featured" />

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 my-6">
                {featuredProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Problem, Solution & Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 pt-6 border-t border-white/10">
                <div className="bg-[#111111]/60 p-5 rounded-2xl border border-white/5">
                  <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                    Problem
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {featuredProject.problem}
                  </p>
                </div>
                <div className="bg-[#111111]/60 p-5 rounded-2xl border border-white/5">
                  <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                    Solution
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {featuredProject.solution}
                  </p>
                </div>
                <div className="bg-[#111111]/60 p-5 rounded-2xl border border-white/5">
                  <h4 className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider mb-2">
                    Measured Impact
                  </h4>
                  <p className="text-sm font-medium text-white leading-relaxed">
                    {featuredProject.impact}
                  </p>
                </div>
              </div>

              {/* Engineering Learnings */}
              {featuredProject.learnings && featuredProject.learnings.length > 0 && (
                <div className="mt-6 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                  <h4 className="text-xs font-mono text-white/50 uppercase tracking-wider mb-3">
                    Engineering Insights
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {featuredProject.learnings.map((learning, idx) => (
                      <li key={idx} className="text-xs text-white/70 flex items-start gap-2">
                        <span className="text-[#3B82F6] font-bold">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
              <a
                href={featuredProject.links.source || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#09090B] font-medium text-sm px-6 py-2.5 rounded-full hover:bg-white/90 transition-all"
              >
                <span>Source Code</span>
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}

        {/* Grid for Secondary Projects & Future Exploration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {secondaryProjects.map((project) => (
            <motion.div
              key={project.id}
              {...cardHoverProps}
              className={`bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-[24px] p-8 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between ${
                project.id === 'future' ? 'border-dashed border-white/20 bg-transparent' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {project.id === 'future' ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                      Under Exploration
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      Project
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
                  {project.name}
                </h3>
                <p className="text-white/70 text-sm md:text-base mb-4 leading-relaxed">
                  {project.summary}
                </p>

                {/* Diagram */}
                <ProjectDiagram nodes={project.diagramNodes} />

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 my-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Specifics */}
                {project.problem && (
                  <div className="mt-4 space-y-3 pt-4 border-t border-white/10 text-xs">
                    <div>
                      <span className="text-white/40 font-mono uppercase block mb-1">Problem</span>
                      <p className="text-white/80">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-[#3B82F6] font-mono uppercase block mb-1">Impact</span>
                      <p className="text-white font-medium">{project.impact}</p>
                    </div>
                  </div>
                )}

                {project.direction && (
                  <div className="mt-4 pt-4 border-t border-white/10 text-xs">
                    <span className="text-white/40 font-mono uppercase block mb-1">Direction</span>
                    <p className="text-white/80">{project.direction}</p>
                  </div>
                )}
              </div>

              {project.links?.source && (
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-white transition-colors"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
