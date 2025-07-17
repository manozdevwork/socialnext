
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export interface BookmarkItem {
  id: number;
  title: string;
  description: string;
  date: string;
  slides: number;
}

interface BookmarkModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (bookmark: BookmarkItem) => void;
}

const mockBookmarks: BookmarkItem[] = [
  {
    id: 1,
    title: "AI Marketing Trends to Watch: Transforming Strategies for 2025",
    description: "AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.",
    date: "15/2/2023",
    slides: 9,
  },
  {
    id: 2,
    title: "AI Marketing Trends to Watch: Transforming Strategies for 2025",
    description: "AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.",
    date: "15/2/2023",
    slides: 9,
  },
  {
    id: 3,
    title: "AI Marketing Trends to Watch: Transforming Strategies for 2025",
    description: "AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.",
    date: "15/2/2023",
    slides: 9,
  },
  {
    id: 4,
    title: "AI Marketing Trends to Watch: Transforming Strategies for 2025",
    description: "AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.",
    date: "15/2/2023",
    slides: 9,
  },
];

export const BookmarkModal: React.FC<BookmarkModalProps> = ({ 
  open, 
  onClose, 
  onSelect 
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] overflow-hidden" >
        <div className="flex justify-between items-center pb-3 border-b mx-6">
          <h2 className="text-xl font-semibold">Import From Bookmark</h2>
            <Button 
              className="bg-sky-400 hover:bg-sky-500 text-white rounded-full"
            >
              Import
            </Button>
        </div>
        
        <div className="max-h-[500px] overflow-y-auto p-4">
          {mockBookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="p-4 mb-4 rounded-lg border border-1.5 border-gray-100 bg-gray-50 hover:border-sky-200 hover:shadow-sm transition-all cursor-pointer"
              onClick={() => onSelect(bookmark)}
            >
              <h3 className="text-lg font-medium mb-2">{bookmark.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{bookmark.description}</p>
              <div className="flex justify-end text-sm text-gray-500">
                <span className="mr-4">Date: {bookmark.date}</span>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
