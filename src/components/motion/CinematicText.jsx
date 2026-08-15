'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * M1 - Line-Mask Reveal for Headings
 * Wraps lines in overflow-hidden containers and animates inner spans (y: 110% -> 0).
 */
export function LineMaskHeading({
  lines = [],
  className = '',
  as = 'h2',
  delay = 0,
  stagger = 0.1,
  scrollTrigger = false,
}) {
  const containerRef = useRef(null);
  const Component = as;
  const fullText = Array.isArray(lines) ? lines.join(' ') : lines;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      const lineSpans = el.querySelectorAll('.line-mask-inner');
      gsap.set(lineSpans, { y: '0%' });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const lineSpans = el.querySelectorAll('.line-mask-inner');

      const animProps = {
        y: '0%',
        duration: 1.0,
        ease: 'power4.out',
        stagger: stagger,
        delay: delay,
      };

      if (scrollTrigger) {
        gsap.fromTo(
          lineSpans,
          { y: '110%' },
          {
            ...animProps,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      } else {
        gsap.fromTo(lineSpans, { y: '110%' }, animProps);
      }
    }, containerRef);

    return () => ctx.revert();
  }, [delay, stagger, scrollTrigger]);

  const lineArray = Array.isArray(lines) ? lines : [lines];

  return (
    <Component
      ref={containerRef}
      aria-label={fullText}
      className={`relative ${className}`}
    >
      {lineArray.map((line, idx) => (
        <span key={idx} className="block overflow-hidden pb-1 -mb-1">
          <span
            aria-hidden="true"
            className="line-mask-inner block will-change-transform"
            style={{ transform: 'translateY(110%)' }}
          >
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
}

/**
 * M2 - Scroll-Scrubbed Word Reveal for Statement Lines
 * Splits text into word spans: opacity 0.12 -> 1, scrubbed by ScrollTrigger.
 */
export function ScrubbedWordReveal({
  text = '',
  className = '',
  as = 'h2',
  start = 'top 80%',
  end = 'center 40%',
}) {
  const containerRef = useRef(null);
  const Component = as;
  const words = text.split(' ');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      const wordSpans = el.querySelectorAll('.scrub-word');
      gsap.set(wordSpans, { opacity: 1 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const wordSpans = el.querySelectorAll('.scrub-word');

      gsap.fromTo(
        wordSpans,
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: start,
            end: end,
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [start, end]);

  return (
    <Component
      ref={containerRef}
      aria-label={text}
      className={`relative ${className}`}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          aria-hidden="true"
          className="scrub-word inline-block mr-[0.28em] will-change-[opacity] transition-opacity"
          style={{ opacity: 0.12 }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
}
