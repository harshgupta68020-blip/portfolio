'use client';

import { useState, useEffect } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { linksData } from '@/data/links';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'notes', label: 'Notes' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-[1400px] h-14 px-6 rounded-full flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? 'bg-[#111111]/75 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand / Name */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-white font-semibold text-base tracking-tight hover:opacity-80 transition-opacity flex items-center gap-1"
        >
          <span>Harsh</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
        </a>

        {/* Center Nav Items */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative">
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors py-1 ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white/90'
                  }`}
                >
                  {item.label}
                </button>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3B82F6] rounded-full" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href={linksData.resume || '#'}
            target={linksData.resume ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="text-xs font-medium px-4 py-2 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
