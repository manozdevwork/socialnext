
import React from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { ArrowRight } from 'lucide-react';

interface Carousel {
  id: number;
  title: string;
  description: string;
  date: string;
  slides: number;
  imageUrl: string;
}

interface CarouselCardProps {
  carousel: Carousel;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ carousel }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="group cursor-pointer rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md">
          <div className="relative aspect-square bg-gray-900 overflow-hidden">
            <img 
              src={carousel.imageUrl} 
              alt={carousel.title} 
              className="w-full h-full object-cover opacity-75 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-3">
            <h3 className="font-medium text-gray-800 text-sm truncate">{carousel.title}</h3>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{carousel.description}</p>
            <div className="mt-2">
              <a href="#" className="text-[#00c8ff] text-xs font-medium flex items-center hover:text-sky-500 transition-colors underline underline-offset-4">
                View Details 
                <ArrowRight className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-0">
        <div className="p-4">
          <h4 className="font-semibold">{carousel.title}</h4>
          <p className="text-sm text-gray-600 mt-1">{carousel.description}</p>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Date: {carousel.date}</span>
            <span>Slides: {carousel.slides}</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CarouselCard;
