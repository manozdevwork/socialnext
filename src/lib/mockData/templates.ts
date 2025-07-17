
import { Template, TemplateCategory } from '@/types/template';

export const mockTemplates: Template[] = [
  {
    id: '1',
    title: 'Social Media Post',
    description: 'Engaging social media content template',
    category: 'social',
    preview: '/templates/social-preview.jpg',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Blog Article',
    description: 'Professional blog post template',
    category: 'content',
    preview: '/templates/blog-preview.jpg',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    title: 'Newsletter',
    description: 'Email newsletter template',
    category: 'email',
    preview: '/templates/newsletter-preview.jpg',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-25'),
  },
];

export const mockTemplateCategories: TemplateCategory[] = [
  {
    id: 'social',
    name: 'Social Media',
    description: 'Templates for social media platforms',
    templates: mockTemplates.filter(t => t.category === 'social'),
  },
  {
    id: 'content',
    name: 'Content Marketing',
    description: 'Templates for content creation',
    templates: mockTemplates.filter(t => t.category === 'content'),
  },
  {
    id: 'email',
    name: 'Email Marketing',
    description: 'Templates for email campaigns',
    templates: mockTemplates.filter(t => t.category === 'email'),
  },
];
