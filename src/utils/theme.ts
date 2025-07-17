
/**
 * Theme utilities for accessing design tokens programmatically
 */
import { theme } from '@/styles/theme';

/**
 * Get a value from the theme using dot notation
 * Example: getThemeValue('colors.primary.500')
 */
export function getThemeValue(path: string, defaultValue?: any): any {
  return path.split('.').reduce((acc, part) => {
    return acc && acc[part] !== undefined ? acc[part] : defaultValue;
  }, theme as any);
}

/**
 * Get a color from the theme
 * @example getColor('primary')
 * @example getColor('primary.500')
 * @example getColor('feedback.success')
 */
export function getColor(colorPath: string): string {
  return getThemeValue(`colors.${colorPath}`, colorPath);
}

/**
 * Get a spacing value from the theme
 * @example getSpacing(4) => '1rem'
 */
export function getSpacing(value: number | string): string {
  if (typeof value === 'number' || !isNaN(Number(value))) {
    return getThemeValue(`spacing.${value}`, `${value}px`);
  }
  return value as string;
}

/**
 * Get a font size from the theme
 * @example getFontSize('lg') => '1.125rem'
 */
export function getFontSize(size: string): string {
  return getThemeValue(`typography.fontSize.${size}`, size);
}
