'use client';

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length) return;

    const observers = [];
    const visibleSections = new Map();

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.intersectionRatio);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      if (visibleSections.size > 0) {
        // Pick the section with largest visible ratio or highest in viewport
        let maxRatio = -1;
        let topSectionId = '';

        visibleSections.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            topSectionId = id;
          }
        });

        if (topSectionId) {
          setActiveSection(topSectionId);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-20% 0px -40% 0px',
      threshold: [0.1, 0.3, 0.5, 0.7, 1.0],
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}

