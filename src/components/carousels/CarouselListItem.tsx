
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Carousel {
  id: number;
  title: string;
  description: string;
  date: string;
  slides: number;
  imageUrl: string;
}

interface CarouselListItemProps {
  carousel: Carousel;
}

const CarouselListItem: React.FC<CarouselListItemProps> = ({ carousel }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 lg:w-1/5 p-4">
            <h3 className="text-xl font-semibold text-gray-800">{carousel.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{carousel.description}</p>
          </div>
          <div className="md:flex-1 p-4 md:border-l border-gray-100 flex flex-col justify-between">
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
              <span>Date: {carousel.date}</span>
              <span>Number of Slides: {carousel.slides}</span>
            </div>
            <div className="flex items-center text-sky-400 hover:text-sky-500 mt-4 md:mt-0 cursor-pointer">
              <span className="font-medium text-sm">View Details</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarouselListItem;
