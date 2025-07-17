
/**
 * Typography definitions for the application
 * Centralized font settings for consistent text styling across the platform
 * 
 * Design Guidelines:
 * - Inter: Primary font for UI elements, body text, and most content
 * - Georgia: Serif font for elegant headings or special content
 * - Monospace: Code blocks, technical content, and fixed-width text
 */

// 📝 Font Family Definitions
export const fontFamily = {
  sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  serif: ['Georgia', 'Times New Roman', 'serif'],
  mono: ['SFMono-Regular', 'ui-monospace', 'Monaco', 'Cascadia Code', 'monospace'],
} as const;

// 📏 Font Size Scale
// Following a modular scale for harmonious typography
export const fontSize = {
  xs: '0.75rem',      // 12px - Small captions, badges
  sm: '0.875rem',     // 14px - Secondary text, labels
  base: '1rem',       // 16px - Body text (default)
  lg: '1.125rem',     // 18px - Large body text, small headings
  xl: '1.25rem',      // 20px - H5, important text
  '2xl': '1.5rem',    // 24px - H4, section headings
  '3xl': '1.875rem',  // 30px - H3, subsection headings
  '4xl': '2.25rem',   // 36px - H2, page headings
  '5xl': '3rem',      // 48px - H1, hero headings
  '6xl': '3.75rem',   // 60px - Extra large displays
  '7xl': '4.5rem',    // 72px - Hero text
} as const;

// ⚖️ Font Weight Scale
export const fontWeight = {
  thin: '100',        // Ultra light (rarely used)
  extralight: '200',  // Extra light (special cases)
  light: '300',       // Light text, subtle emphasis
  normal: '400',      // Regular body text (default)
  medium: '500',      // Medium emphasis, labels
  semibold: '600',    // Strong emphasis, small headings
  bold: '700',        // Bold headings, important text
  extrabold: '800',   // Extra bold (special emphasis)
  black: '900',       // Ultra bold (hero text, branding)
} as const;

// 📐 Line Height Scale
// Optimized for readability across different font sizes
export const lineHeight = {
  none: '1',          // 100% - Large display text
  tight: '1.25',      // 125% - Headings, compact text
  snug: '1.375',      // 137.5% - Subheadings
  normal: '1.5',      // 150% - Body text (optimal readability)
  relaxed: '1.625',   // 162.5% - Long-form content
  loose: '2',         // 200% - Very spacious text
} as const;

// 🔠 Letter Spacing Scale
export const letterSpacing = {
  tighter: '-0.05em', // Tight spacing for large text
  tight: '-0.025em',  // Slightly tight for headings
  normal: '0',        // Default spacing
  wide: '0.025em',    // Slightly wide for emphasis
  wider: '0.05em',    // Wide spacing for labels
  widest: '0.1em',    // Extra wide for special cases
} as const;

// 🎨 Predefined Text Styles
// Common typography patterns used throughout the application
export const textStyles = {
  // Heading Styles
  h1: {
    fontSize: fontSize['5xl'],      // 48px
    fontWeight: fontWeight.bold,    // 700
    lineHeight: lineHeight.tight,   // 1.25
    letterSpacing: letterSpacing.tight, // -0.025em
    fontFamily: fontFamily.sans[0], // Inter
  },
  h2: {
    fontSize: fontSize['4xl'],      // 36px
    fontWeight: fontWeight.bold,    // 700
    lineHeight: lineHeight.tight,   // 1.25
    letterSpacing: letterSpacing.tight, // -0.025em
    fontFamily: fontFamily.sans[0], // Inter
  },
  h3: {
    fontSize: fontSize['3xl'],      // 30px
    fontWeight: fontWeight.semibold, // 600
    lineHeight: lineHeight.tight,   // 1.25
    letterSpacing: letterSpacing.normal, // 0
    fontFamily: fontFamily.sans[0], // Inter
  },
  h4: {
    fontSize: fontSize.xl,          // 20px
    fontWeight: fontWeight.semibold, // 600
    lineHeight: lineHeight.tight,   // 1.25
    letterSpacing: letterSpacing.normal, // 0
    fontFamily: fontFamily.sans[0], // Inter
  },
  h5: {
    fontSize: fontSize.lg,          // 18px
    fontWeight: fontWeight.semibold, // 600
    lineHeight: lineHeight.tight,   // 1.25
    letterSpacing: letterSpacing.normal, // 0
    fontFamily: fontFamily.sans[0], // Inter
  },
  h6: {
    fontSize: fontSize.base,        // 16px
    fontWeight: fontWeight.semibold, // 600
    lineHeight: lineHeight.tight,   // 1.25
    letterSpacing: letterSpacing.normal, // 0
    fontFamily: fontFamily.sans[0], // Inter
  },
  
  // Body Text Styles
  body: {
    fontSize: fontSize.base,        // 16px
    fontWeight: fontWeight.normal,  // 400
    lineHeight: lineHeight.normal,  // 1.5
    letterSpacing: letterSpacing.normal, // 0
    fontFamily: fontFamily.sans[0], // Inter
  },
  bodyLarge: {
    fontSize: fontSize.lg,          // 18px
    fontWeight: fontWeight.normal,  // 400
    lineHeight: lineHeight.relaxed, // 1.625
    letterSpacing: letterSpacing.normal, // 0
    fontFamily: fontFamily.sans[0], // Inter
  },
  bodySmall: {
    fontSize: fontSize.sm,          // 14px
    fontWeight: fontWeight.normal,  // 400
    lineHeight: lineHeight.normal,  // 1.5
    letterSpacing: letterSpacing.normal, // 0
    fontFamily: fontFamily.sans[0], // Inter
  },
  
  // Special Text Styles
  caption: {
    fontSize: fontSize.xs,          // 12px
    fontWeight: fontWeight.normal,  // 400
    lineHeight: lineHeight.normal,  // 1.5
    letterSpacing: letterSpacing.wide, // 0.025em
    fontFamily: fontFamily.sans[0], // Inter
  },
  label: {
    fontSize: fontSize.sm,          // 14px
    fontWeight: fontWeight.medium,  // 500
    lineHeight: lineHeight.normal,  // 1.5
    letterSpacing: letterSpacing.wide, // 0.025em
    fontFamily: fontFamily.sans[0], // Inter
  },
  code: {
    fontSize: fontSize.sm,          // 14px
    fontWeight: fontWeight.normal,  // 400
    lineHeight: lineHeight.normal,  // 1.5
    letterSpacing: letterSpacing.normal, // 0
    fontFamily: fontFamily.mono[0], // SFMono-Regular
  },
  
  // Display Text (for hero sections, landing pages)
  display: {
    fontSize: fontSize['6xl'],      // 60px
    fontWeight: fontWeight.bold,    // 700
    lineHeight: lineHeight.none,    // 1
    letterSpacing: letterSpacing.tighter, // -0.05em
    fontFamily: fontFamily.sans[0], // Inter
  },
} as const;

// Type definitions for better TypeScript support
export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type LineHeight = keyof typeof lineHeight;
export type LetterSpacing = keyof typeof letterSpacing;
export type TextStyle = keyof typeof textStyles;

/**
 * Responsive typography helpers
 * For adapting text sizes across different screen sizes
 */
export const responsiveTextStyles = {
  hero: {
    mobile: textStyles.h2,      // 36px on mobile
    tablet: textStyles.h1,      // 48px on tablet
    desktop: textStyles.display, // 60px on desktop
  },
  pageTitle: {
    mobile: textStyles.h3,      // 30px on mobile
    tablet: textStyles.h2,      // 36px on tablet
    desktop: textStyles.h1,     // 48px on desktop
  },
  sectionTitle: {
    mobile: textStyles.h4,      // 20px on mobile
    tablet: textStyles.h3,      // 30px on tablet
    desktop: textStyles.h3,     // 30px on desktop
  },
};

/**
 * Typography utility functions
 */
export const typographyUtils = {
  /**
   * Get a complete text style object
   */
  getTextStyle: (styleName: TextStyle) => textStyles[styleName],
  
  /**
   * Create a custom text style by combining properties
   */
  createTextStyle: (overrides: Partial<typeof textStyles.body>) => ({
    ...textStyles.body,
    ...overrides,
  }),
};
