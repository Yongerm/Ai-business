/**
 * WhichGame Theme Constants
 * 디자인 시스템의 색상, 타이포그래피, 스페이싱, 애니메이션 상수
 */

export const THEME_COLORS = {
  // Background
  background: '#0a0a0a',
  cardBackground: '#1E1E1E',
  
  // Text
  text: '#e0e0e0',
  textMuted: '#9ca3af',
  
  // Accent
  primary: '#00CEFF',      // Cyan
  primaryHover: '#0099cc',
  
  // Status
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  statusRed: '#ff4040',
  
  // Special
  gold: '#FFD700',
  discord: '#5865F2',
  discordHover: '#4752C4',
  adBorder: '#FF3B30',
} as const;

export const TYPOGRAPHY = {
  fontFamily: "'Noto Sans KR', sans-serif",
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
} as const;

export const SPACING = {
  cardPadding: '1.25rem',  // 20px
  sectionGap: '1.5rem',    // 24px
  gridGap: '1.5rem',       // 24px
} as const;

export const ANIMATIONS = {
  fast: '0.2s',
  normal: '0.3s',
  slow: '0.5s',
  pulse: '1.5s',
} as const;

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const;
