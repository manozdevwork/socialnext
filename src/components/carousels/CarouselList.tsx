
import React from 'react';
import CarouselCard from './CarouselCard';
import CarouselListItem from './CarouselListItem';
import CarouselBookmarkItem from './CarouselBookmarkItem';

interface Carousel {
  id: number;
  title: string;
  description: string;
  date: string;
  slides: number;
  imageUrl: string;
}

interface CarouselListProps {
  carousels: Carousel[];
  layout: 'grid' | 'list' | 'bookmarks';
}

const CarouselList: React.FC<CarouselListProps> = ({ carousels, layout }) => {
  if (layout === 'grid') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {carousels.map((carousel) => (
          <CarouselCard key={carousel.id} carousel={carousel} />
        ))}
      </div>
    );
  }

  if (layout === 'bookmarks') {
    return (
      <div className="space-y-5">
        {carousels.map((carousel) => (
          <CarouselBookmarkItem key={carousel.id} carousel={carousel} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {carousels.map((carousel) => (
        <CarouselListItem key={carousel.id} carousel={carousel} />
      ))}
    </div>
  );
};

export default CarouselList;
