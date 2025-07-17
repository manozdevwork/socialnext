
/**
 * Core color palette for the application
 * This serves as a single source of truth for all colors
 * 
 * Design Guidelines:
 * - Primary: Main brand color (#0EA5E9) - used for CTAs, links, highlights
 * - Secondary: Light variation (#E0F2FE) - used for backgrounds, subtle accents
 * - Neutral: Grayscale palette - used for text, borders, backgrounds
 * - Feedback: Status colors - success, warning, error, info states
 */

export const colors = {
  // 🎨 Primary Brand Colors (Original Sky Blue)
  // Main brand color with variations for different use cases
  primary: {
    DEFAULT: '#0EA5E9',     // Original sky blue brand color
    light: '#38BDF8',       // Hover states, light accents
    dark: '#0284C7',        // Active states, emphasis
    50: '#F0F9FF',          // Very light backgrounds
    100: '#E0F2FE',         // Light backgrounds
    200: '#BAE6FD',         // Subtle accents
    300: '#7DD3FC',         // Medium accents
    400: '#38BDF8',         // Base accents
    500: '#0EA5E9',         // Main color (same as DEFAULT)
    600: '#0284C7',         // Strong accents (same as dark)
    700: '#0369A1',         // Darker shade
    800: '#075985',         // Very dark shade
    900: '#0C4A6E',         // Darkest shade
  },

  // 🖤 Neutral Colors (Grayscale)
  // Used for text, borders, backgrounds, and UI elements
  neutral: {
    DEFAULT: '#374151',     // Main text color
    black: '#000000',       // Pure black (use sparingly)
    white: '#FFFFFF',       // Pure white
    50: '#F9FAFB',         // Lightest gray - subtle backgrounds
    100: '#F3F4F6',        // Very light gray - card backgrounds
    200: '#E5E7EB',        // Light gray - borders, dividers
    300: '#D1D5DB',        // Medium-light gray - disabled states
    400: '#9CA3AF',        // Medium gray - placeholders
    500: '#6B7280',        // Mid gray - secondary text
    600: '#4B5563',        // Dark gray - body text
    700: '#374151',        // Main text color (same as DEFAULT)
    800: '#1F2937',        // Very dark gray - headings
    900: '#111827',        // Almost black - emphasis text
  },

  // ✅ Feedback Colors
  // Used for status indicators, alerts, and user feedback
  feedback: {
    success: {
      DEFAULT: '#10B981',   // Green - success states
      light: '#D1FAE5',    // Light green - success backgrounds
      dark: '#059669',     // Dark green - success emphasis
    },
    warning: {
      DEFAULT: '#F59E0B',   // Yellow - warning states
      light: '#FEF3C7',    // Light yellow - warning backgrounds
      dark: '#D97706',     // Dark yellow - warning emphasis
    },
    error: {
      DEFAULT: '#EF4444',   // Red - error states
      light: '#FEE2E2',    // Light red - error backgrounds
      dark: '#DC2626',     // Dark red - error emphasis
    },
    info: {
      DEFAULT: '#3B82F6',   // Blue - info states
      light: '#DBEAFE',    // Light blue - info backgrounds
      dark: '#2563EB',     // Dark blue - info emphasis
    },
  },

  // 🏠 Background Colors
  // Used for page backgrounds, cards, and content areas
  background: {
    DEFAULT: '#FFFFFF',     // Main page background (white)
    secondary: '#F0F9FF',   // Secondary backgrounds (light sky blue)
    tertiary: '#F9FAFB',   // Tertiary backgrounds (light gray)
    muted: '#F3F4F6',      // Muted backgrounds (very light gray)
    page: '#FEFEFE',       // Special page background (off-white)
  },

  // 🔗 Semantic Colors
  // Used for specific UI elements and interactions
  outline: '#0EA5E9',       // Focus outlines (same as primary)
  border: '#E5E7EB',       // Default border color (light gray)
  shadow: 'rgba(0, 0, 0, 0.1)', // Drop shadow color (semi-transparent black)
  
  // 🌙 Dark Mode Support (for future implementation)
  dark: {
    background: {
      DEFAULT: '#1F2937',   // Dark background
      secondary: '#374151', // Dark secondary
      tertiary: '#4B5563',  // Dark tertiary
    },
    text: {
      primary: '#F9FAFB',   // Light text on dark
      secondary: '#D1D5DB', // Secondary text on dark
    },
  },
} as const;

// Type definitions for better TypeScript support
export type ColorName = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary | keyof typeof colors.neutral;

/**
 * Helper function to get color with opacity
 * Example: getColorWithOpacity(colors.primary.DEFAULT, 0.5)
 */
export function getColorWithOpacity(color: string, opacity: number): string {
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Color accessibility helpers
 */
export const colorAccessibility = {
  // High contrast combinations for accessibility
  highContrast: {
    lightOnDark: { text: colors.neutral.white, background: colors.neutral[900] },
    darkOnLight: { text: colors.neutral[900], background: colors.neutral.white },
  },
  
  // WCAG AA compliant color combinations
  wcagAA: {
    primary: { text: colors.neutral.white, background: colors.primary.DEFAULT },
    secondary: { text: colors.primary.DEFAULT, background: colors.background.secondary },
  },
};
