
import { Bookmark, BookmarkCategory } from '@/types/bookmark';

export const mockBookmarks: Bookmark[] = [
  {
    id: '1',
    title: 'React Documentation',
    url: 'https://react.dev',
    description: 'Official React documentation',
    tags: ['react', 'documentation', 'frontend'],
    category: 'development',
    createdAt: new Date('2024-01-01'),
    isStarred: true,
  },
  {
    id: '2',
    title: 'Tailwind CSS',
    url: 'https://tailwindcss.com',
    description: 'Utility-first CSS framework',
    tags: ['css', 'tailwind', 'styling'],
    category: 'development',
    createdAt: new Date('2024-01-05'),
    isStarred: false,
  },
  {
    id: '3',
    title: 'Design Inspiration',
    url: 'https://dribbble.com',
    description: 'Creative design inspiration platform',
    tags: ['design', 'inspiration', 'ui'],
    category: 'design',
    createdAt: new Date('2024-01-10'),
    isStarred: true,
  },
];

export const mockBookmarkCategories: BookmarkCategory[] = [
  {
    id: 'development',
    name: 'Development',
    bookmarks: mockBookmarks.filter(b => b.category === 'development'),
  },
  {
    id: 'design',
    name: 'Design',
    bookmarks: mockBookmarks.filter(b => b.category === 'design'),
  },
];
