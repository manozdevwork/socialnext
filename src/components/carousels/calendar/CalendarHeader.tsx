
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarHeaderProps {
  dateTitle: string;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
  view: 'month' | 'week' | 'day';
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({ 
  dateTitle, 
  onPrevious, 
  onNext, 
  onToday, 
  view 
}) => {
  return (
    <div className="py-4 px-6 flex items-center justify-between border-b border-gray-200">
      <h2 className="text-2xl font-bold">{dateTitle}</h2>
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={onPrevious}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          onClick={onToday}
          className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
        >
          Today
        </button>
        <button 
          onClick={onNext}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
