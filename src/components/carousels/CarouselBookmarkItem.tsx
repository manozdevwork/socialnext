
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Carousel {
  id: number;
  title: string;
  description: string;
  date: string;
  slides: number;
  imageUrl: string;
}

interface CarouselBookmarkItemProps {
  carousel: Carousel;
}

const CarouselBookmarkItem: React.FC<CarouselBookmarkItemProps> = ({ carousel }) => {
  return (
    <div className="rounded-lg bg-white border border-gray-200 hover:border-[#00c8ff] hover:shadow-md transition-shadow mb-4">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {carousel.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {carousel.description}
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <span>Date: {carousel.date}</span>
            <span>Number of Slides: {carousel.slides}</span>
          </div>
          <div className="flex items-center text-[#22BCDD] hover:text-sky-500 transition-colors cursor-pointer">
            <span className="text-sm font-medium hover:text-[#00c8ff] underline underline-offset-4">View Details</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBookmarkItem;
