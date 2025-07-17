
/**
 * Application constants and configuration values
 */

export const ROUTES = {
  LANDING: '/',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  SIGNUP: '/signup',
  SETTINGS: '/settings',
  ANALYTICS: '/analytics',
  PROFILE: '/profile',
} as const;

export const API_ENDPOINTS = {
  BASE_URL: 'https://api.socialnext.com',
  AUTH: '/auth',
  USERS: '/users',
  POSTS: '/posts',
  ANALYTICS: '/analytics',
} as const;

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
} as const;

export const SOCIAL_PLATFORMS = {
  LINKEDIN: 'linkedin',
  TWITTER: 'twitter',
  INSTAGRAM: 'instagram',
  FACEBOOK: 'facebook',
  TIKTOK: 'tiktok',
} as const;
