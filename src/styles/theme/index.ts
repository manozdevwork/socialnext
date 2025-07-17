
/**
 * Main theme file that exports all design token modules
 * This serves as the single source of truth for all design tokens
 * 
 * Usage:
 * import { theme } from '@/styles/theme';
 * import { colors, typography, spacing } from '@/styles/theme';
 */

import { colors } from './colors';
import * as typography from './typography';
import { spacing, layout } from './spacing';
import { shadows } from './shadows';
import { radii, borderWidths, borderStyles } from './borders';
import { zIndex } from './zIndex';

/**
 * Complete design system theme object
 * All design tokens are centralized here for consistency
 */
export const theme = {
  colors,
  typography,
  spacing,
  layout,
  shadows,
  radii,
  borderWidths,
  borderStyles,
  zIndex,
  
  // Additional design tokens for comprehensive coverage
  opacity: {
    disabled: '0.5',
    hover: '0.8',
    focus: '0.9',
    overlay: '0.75',
  },
  
  // Transition durations for consistent animations
  transitions: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type AppTheme = typeof theme;

// Named exports for direct access to specific token categories
export {
  colors,
  typography,
  spacing,
  layout,
  shadows,
  radii,
  borderWidths,
  borderStyles,
  zIndex,
};

/**
 * Utility function to get nested theme values
 * Example: getThemeValue('colors.primary.DEFAULT')
 */
export function getThemeValue(path: string): any {
  return path.split('.').reduce((obj, key) => obj?.[key], theme);
}

/**
 * Common design patterns using theme tokens
 * These can be imported and used across components
 */
export const designPatterns = {
  // Card styling using theme tokens
  card: {
    background: colors.background.DEFAULT,
    border: `1px solid ${colors.border}`,
    borderRadius: radii.lg,
    boxShadow: shadows.md,
    padding: spacing[6],
  },
  
  // Button patterns
  button: {
    primary: {
      background: colors.primary.DEFAULT,
      color: colors.neutral.white,
      borderRadius: radii.button,
      padding: `${spacing[2]} ${spacing[4]}`,
    },
    secondary: {
      background: colors.background.secondary,
      color: colors.primary.DEFAULT,
      borderRadius: radii.button,
      padding: `${spacing[2]} ${spacing[4]}`,
    },
  },
  
  // Input patterns
  input: {
    default: {
      border: `1px solid ${colors.border}`,
      borderRadius: radii.md,
      padding: `${spacing[2]} ${spacing[3]}`,
      fontSize: typography.fontSize.base,
    },
  },
};
