
import type { Config } from "tailwindcss";
import { colors } from './src/styles/theme/colors';
import { radii } from './src/styles/theme/borders';
import { fontSize, fontFamily, fontWeight, lineHeight, letterSpacing } from './src/styles/theme/typography';
import { spacing } from './src/styles/theme/spacing';
import { shadows } from './src/styles/theme/shadows';
import { zIndex } from './src/styles/theme/zIndex';

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			// 🎨 Colors - Centralized from theme tokens
			colors: {
				primary: colors.primary,
				secondary: colors.background.secondary,
				border: colors.border,
				background: colors.background,
				neutral: colors.neutral,
				outline: colors.outline,
				feedback: colors.feedback,
				foreground: {
					DEFAULT: colors.neutral[700],
				},

				// Legacy shadcn color formats for compatibility
				destructive: {
					DEFAULT: colors.feedback.error.DEFAULT,
					foreground: colors.neutral.white,
				},
				muted: {
					DEFAULT: colors.background.muted,
					foreground: colors.neutral[500],
				},
				accent: {
					DEFAULT: colors.background.secondary,
					foreground: colors.primary.dark,
				},
				popover: {
					DEFAULT: colors.background.DEFAULT,
					foreground: colors.neutral.DEFAULT,
				},
				card: {
					DEFAULT: colors.background.DEFAULT,
					foreground: colors.neutral.DEFAULT,
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
			},

			// 🧩 Border Radius - Centralized from theme tokens
			borderRadius: {
				...radii,
				lg: radii.lg,
				md: radii.md,
				sm: radii.sm,
				button: radii.button,
			},

			// 🔤 Typography - Centralized from theme tokens
			fontFamily: {
				sans: fontFamily.sans,
				serif: fontFamily.serif,
				mono: fontFamily.mono,
			},
			fontSize,
			fontWeight,
			lineHeight,
			letterSpacing,

			// 📏 Spacing - Centralized from theme tokens
			spacing,

			// 🌫️ Shadows - Centralized from theme tokens
			boxShadow: {
				...shadows,
				'sidebar': shadows.DEFAULT,
				'card': shadows.md,
			},

			// 📚 Z-Index - Centralized from theme tokens
			zIndex: {
				...zIndex,
			},

			// 🎬 Animations and Keyframes
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' },
				},
				'slide-in-right': {
					'0%': { 
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'50%': {
						opacity: '0.5'
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1'
					},
				},
				'slide-out-left': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				'slide-fast': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'10%': { transform: 'translateX(-50%)', opacity: '0.5' },
					'20%': { transform: 'translateX(0)', opacity: '1' },
					'80%': { transform: 'translateX(0)', opacity: '1' },
					'90%': { transform: 'translateX(50%)', opacity: '0.5' },
					'100%': { transform: 'translateX(100%)', opacity: '0' },
				},
				'slide-seamless': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-left': 'slide-out-left 0.3s ease-out',
				'slide-fast': 'slide-fast 2s ease-in-out infinite',
				'slide-seamless': 'slide-seamless 3s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
