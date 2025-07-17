
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays } from 'date-fns';
import { CalendarData } from '../types';

interface MonthViewProps {
  currentMonth: Date;
  calendarData: CalendarData;
  onDateClick: (day: Date) => void;
  onEventClick: (event: any) => void;
}

export const MonthView: React.FC<MonthViewProps> = ({ 
  currentMonth, 
  calendarData, 
  onDateClick,
  onEventClick
}) => {
  const [expandedDate, setExpandedDate] = useState<string | null>(null);

  const toggleExpandedDate = (dateKey: string) => {
    setExpandedDate(prevDate => prevDate === dateKey ? null : dateKey);
  };
  
  const renderHeader = () => {
    const dateFormat = 'EEEE';
    const days = [];

    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      const day = addDays(startDate, i);
      days.push(
        <div key={i} className={`text-center py-3 font-medium text-sm ${i === 6 ? 'text-red-500' : ''}`}>
          {format(day, dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 border-b">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const dateKey = format(day, 'yyyy-MM-dd');
        const hasEvents = calendarData[dateKey] && Object.keys(calendarData[dateKey]).length > 0;
        const isToday = isSameDay(day, new Date());
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isExpanded = expandedDate === dateKey;
        
        // Determine how many events to show initially and total events
        const eventsForDay = hasEvents ? Object.values(calendarData[dateKey]).flat() : [];
        const totalEvents = eventsForDay.length;
        const initialEventsToShow = isExpanded ? totalEvents : Math.min(2, totalEvents);
        
        days.push(
          <div
            key={day.toString()}
            className={`relative min-h-[120px] border-r border-b p-2 ${
              !isCurrentMonth ? 'bg-gray-50' : isToday ? 'bg-blue-50' : ''
            }`}
            onClick={() => onDateClick(day)}
          >
            <div className={`font-semibold text-sm mb-1 ${isToday ? 'text-blue-600' : ''}`}>
              {formattedDate}
            </div>
            
            {hasEvents && (
              <div className={`space-y-1 ${isExpanded ? 'max-h-[200px] overflow-y-auto pr-1' : ''}`}>
                {Object.entries(calendarData[dateKey])
                  .sort()
                  .flatMap(([hour, events]) =>
                    events.map((event, idx) => {
                      const eventIndex = eventsForDay.findIndex(e => e.id === event.id);
                      if (!isExpanded && eventIndex >= initialEventsToShow) return null;
                      
                      return (
                        <div
                          key={`${event.id}-${idx}`}
                          className={`p-1 rounded text-xs cursor-pointer ${event.color || 'bg-blue-100'}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onEventClick(event);
                          }}
                        >
                          <div className="font-medium truncate">{event.title}</div>
                          <div className="text-xs opacity-70">{event.time}</div>
                        </div>
                      );
                    })
                  ).filter(Boolean)}
                
                {!isExpanded && totalEvents > initialEventsToShow && (
                  <div 
                    className="text-xs text-blue-500 font-medium cursor-pointer hover:text-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpandedDate(dateKey);
                    }}
                  >
                    +{totalEvents - initialEventsToShow} more
                  </div>
                )}
                
                {isExpanded && (
                  <div 
                    className="text-xs text-blue-500 font-medium cursor-pointer hover:text-blue-700 text-center mt-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpandedDate(dateKey);
                    }}
                  >
                    Show less
                  </div>
                )}
              </div>
            )}
          </div>
        );
        
        day = addDays(day, 1);
      }
      
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7">
          {days}
        </div>
      );
      
      days = [];
    }
    
    return <div>{rows}</div>;
  };

  return (
    <div className="h-full">
      {renderHeader()}
      {renderCells()}
    </div>
  );
};
