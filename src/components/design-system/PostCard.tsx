
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  slides: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, description, date, slides }) => {
  return (
    <div className="border-b border-gray-100 py-6 last:border-0">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span>Date: {date}</span>
          <span>Number of Slides: {slides}</span>
        </div>
        <div className="flex items-center text-sky-400 hover:text-sky-500">
          <span className="font-medium">View Details</span>
          <ChevronRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
