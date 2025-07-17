
import React, { useState } from 'react';
import { addMonths, subMonths, format, addDays } from 'date-fns';
import { CalendarHeader } from './CalendarHeader';
import { MonthView } from './views/MonthView';
import { WeekView } from './views/WeekView';
import { DayView } from './views/DayView';
import { EventModal } from './EventModal';
import { CalendarData } from './types';

interface ModernCalendarViewProps {
  currentMonth: Date;
  onMonthChange: (newMonth: Date) => void;
  calendarData: CalendarData;
  view: 'month' | 'week' | 'day';
}

export const ModernCalendarView: React.FC<ModernCalendarViewProps> = ({
  currentMonth,
  onMonthChange,
  calendarData,
  view,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  const handlePrevious = () => {
    if (view === 'month') {
      onMonthChange(subMonths(currentMonth, 1));
    } else if (view === 'week') {
      onMonthChange(addDays(currentMonth, -7));
    } else {
      onMonthChange(addDays(currentMonth, -1));
    }
  };

  const handleNext = () => {
    if (view === 'month') {
      onMonthChange(addMonths(currentMonth, 1));
    } else if (view === 'week') {
      onMonthChange(addDays(currentMonth, 7));
    } else {
      onMonthChange(addDays(currentMonth, 1));
    }
  };

  const handleToday = () => {
    onMonthChange(new Date());
  };

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setIsEventModalOpen(true);
  };

  const closeEventModal = () => {
    setIsEventModalOpen(false);
    setSelectedEvent(null);
  };

  const getDateTitle = () => {
    if (view === 'month') {
      return format(currentMonth, 'MMMM, yyyy');
    } else if (view === 'week') {
      const endOfWeek = addDays(currentMonth, 6);
      return `${format(currentMonth, 'dd')} - ${format(endOfWeek, 'dd MMMM, yyyy')}`;
    } else {
      return format(currentMonth, 'EEEE, dd MMMM');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <CalendarHeader 
        dateTitle={getDateTitle()}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onToday={handleToday}
        view={view}
      />
      
      <div className="flex-grow overflow-auto">
        {view === 'month' && (
          <MonthView 
            currentMonth={currentMonth}
            calendarData={calendarData}
            onDateClick={handleDateClick}
            onEventClick={handleEventClick}
          />
        )}
        
        {view === 'week' && (
          <WeekView 
            currentDate={currentMonth}
            calendarData={calendarData}
            onEventClick={handleEventClick}
          />
        )}
        
        {view === 'day' && (
          <DayView 
            currentDate={currentMonth}
            calendarData={calendarData}
            onEventClick={handleEventClick}
          />
        )}
      </div>
      
      {isEventModalOpen && selectedEvent && (
        <EventModal 
          event={selectedEvent}
          isOpen={isEventModalOpen}
          onClose={closeEventModal}
        />
      )}
    </div>
  );
};
