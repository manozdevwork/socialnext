
import { User } from '@/types/user';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/avatars/john.jpg',
    role: 'admin',
    preferences: {
      theme: 'light',
      notifications: {
        email: true,
        push: true,
        marketing: false,
      },
      language: 'en',
      timezone: 'UTC',
    },
    subscription: {
      plan: 'pro',
      status: 'active',
      expiresAt: new Date('2024-12-31'),
      features: ['advanced-analytics', 'custom-themes', 'priority-support'],
    },
    createdAt: new Date('2024-01-01'),
    lastLogin: new Date('2024-06-06'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: '/avatars/jane.jpg',
    role: 'user',
    preferences: {
      theme: 'dark',
      notifications: {
        email: true,
        push: false,
        marketing: true,
      },
      language: 'en',
      timezone: 'EST',
    },
    subscription: {
      plan: 'free',
      status: 'active',
      features: ['basic-features'],
    },
    createdAt: new Date('2024-02-01'),
    lastLogin: new Date('2024-06-05'),
  },
];
