
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'editor';
  preferences: UserPreferences;
  subscription: UserSubscription;
  createdAt: Date;
  lastLogin: Date;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: {
    email: boolean;
    push: boolean;
    marketing: boolean;
  };
  language: string;
  timezone: string;
}

export interface UserSubscription {
  plan: 'free' | 'pro' | 'enterprise';
  status: 'active' | 'inactive' | 'cancelled';
  expiresAt?: Date;
  features: string[];
}
