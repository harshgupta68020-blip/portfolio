// Portfolio Design System Tokens — Production v2

export const colors = {
  background: '#09090B',
  secondarySurface: '#111111',
  elevatedSurface: '#18181B',
  card: 'rgba(255, 255, 255, 0.03)',
  border: 'rgba(255, 255, 255, 0.08)',
  accent: '#3B82F6',
  accentGlow: 'rgba(59, 130, 246, 0.15)',
  accentFlow: 'rgba(59, 130, 246, 0.4)',
  white: '#FFFFFF',
};

export const opacity = {
  primary: 1.0,   // 100% - titles, key headers, active state
  secondary: 0.8, // 80%  - body text (never below 80%)
  muted: 0.6,     // 60%  - tech chips, secondary labels
  caption: 0.4,   // 40%  - inactive states, minor labels <=14px
};

export const typography = {
  heroHeading: 'clamp(4.5rem, 9vw, 9.5rem)',
  sectionHeading: 'clamp(2rem, 4vw, 4rem)',
  cardTitle: '1.5rem',
  body: '1rem',
  caption: '0.875rem',
};

export const spacing = {
  sectionPaddingDesktop: '160px',
  sectionPaddingMobile: '96px',
  heroToAbout: '220px',
  sectionGap: '180px',
  cardGap: '32px',
  cardPadding: '32px',
  containerMax: '1400px',
  readableMax: '700px',
};

export const radii = {
  pill: '999px',
  card: '24px',
  small: '16px',
};

export const motion = {
  ease: [0.22, 1, 0.36, 1],
  durationShort: 0.3,
  durationMedium: 0.5,
  durationLong: 0.8,
  driftDuration: 24,
};

