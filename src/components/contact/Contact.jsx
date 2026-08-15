'use client';

import { motion } from 'framer-motion';
import { Mail, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';
import { linksData } from '@/data/links';

export default function Contact() {
  const contactLinks = [
    { label: 'GitHub', href: linksData.github, icon: GithubIcon },
    { label: 'LinkedIn', href: linksData.linkedin, icon: LinkedinIcon },
    { label: 'Email', href: linksData.email, icon: Mail },
    { label: 'Resume', href: linksData.resume, icon: FileText },
  ];

  return (
    <footer id="contact" className="py-32 md:py-40 px-4 max-w-[1400px] mx-auto text-center border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-8"
      >
        <h2 className="text-white font-semibold text-[clamp(2.25rem,5vw,5rem)] tracking-[-0.03em] max-w-[900px] leading-tight">
          Let's build something meaningful.
        </h2>

        {/* Minimal Pill Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {contactLinks.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/15 hover:border-white/40 hover:bg-white/10 text-white font-medium text-sm md:text-base px-6 py-3 rounded-full transition-all duration-300 shadow-md focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              >
                <IconComp className="w-4 h-4 text-[#3B82F6]" />
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            );
          })}
        </div>

        {/* Copyright Footer */}
        <div className="mt-16 text-xs font-mono text-white/40">
          © {new Date().getFullYear()} Harsh. All rights reserved. Cinematic Minimalism v2.
        </div>
      </motion.div>
    </footer>
  );
}
