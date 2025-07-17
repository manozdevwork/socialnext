
/**
 * Application routes configuration
 * Centralized route definitions for consistent navigation
 */

export const ROUTES = {
  // Public routes
  LANDING: '/',
  INDEX: '/',
  WAITLIST: '/waitlist',
  LOGIN: '/login',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  CHANGE_PASSWORD: '/change-password',
  
  // Main app routes
  DASHBOARD: '/dashboard',
  
  // Carousel routes
  CAROUSEL_EDITOR: '/carousel-editor',
  CAROUSEL_EDITOR_SCRATCH: '/carousel-editor/scratch',
  CAROUSEL_EDITOR_IDEA_GENERATOR: '/carousel-editor/idea-generator',
  CAROUSEL_EDITOR_PREVIEW: '/carousel-editor/preview',
  ALL_CAROUSELS: '/all-carousels',
  
  // Analytics routes
  ANALYTICS: '/analytics',
  ANALYTICS_DASHBOARD: '/analytics-dashboard',
  
  // Account routes
  ACCOUNT: '/account',
  ACCOUNT_SETTINGS: '/account',
  ACCOUNT_PERSONAL: '/account/personal',
  ACCOUNT_BILLING: '/account/billing',
  ACCOUNT_PREFERENCE: '/account/preference',
  ACCOUNT_LINKEDIN: '/account/linkedin',
  ACCOUNT_PASSWORD: '/account/password',
  ACCOUNT_LOGOUT: '/account/logout',
  
  // Management routes
  PERSONAS_MANAGEMENT: '/personas-management',
  PERSONA_MANAGEMENT: '/personas-management', // Alias for compatibility
  
  // Pricing
  PRICING_PLAN: '/pricing-plan',
  
  // Settings
  SETTINGS: '/settings',
  PROFILE: '/profile',
  
  // Contact
  CONTACT_US: '/contact-us',
} as const;

// Type for route values
export type RouteValue = typeof ROUTES[keyof typeof ROUTES];

// Helper function to check if a route is active
export const isActiveRoute = (currentPath: string, routePath: string): boolean => {
  return currentPath === routePath;
};

// Helper function to get parent route
export const getParentRoute = (routePath: string): string => {
  const segments = routePath.split('/').filter(Boolean);
  if (segments.length <= 1) return '/';
  return '/' + segments.slice(0, -1).join('/');
};
