
import React from 'react';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';
import { CalendarData, CalendarEvent } from '../types';

interface WeekViewProps {
  currentDate: Date;
  calendarData: CalendarData;
  onEventClick: (event: CalendarEvent) => void;
}

export const WeekView: React.FC<WeekViewProps> = ({ 
  currentDate, 
  calendarData,
  onEventClick
}) => {
  // Get the start of the week
  const weekStart = startOfWeek(currentDate);
  
  // Generate week days
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  
  // Generate hours (6am to 12am)
  const hours = Array.from({ length: 19 }, (_, i) => i + 6);

  // Format hour for display
  const formatHour = (hour: number) => {
    const ampm = hour >= 12 ? 'pm' : 'am';
    const hour12 = hour % 12 || 12;
    return `${hour12} ${ampm}`;
  };

  // Get events for a specific day and hour
  const getEventsForHourAndDay = (day: Date, hour: number): CalendarEvent[] => {
    const dateKey = format(day, 'yyyy-MM-dd');
    const hourKey = `${hour.toString().padStart(2, '0')}:00`;
    
    if (calendarData[dateKey] && calendarData[dateKey][hourKey]) {
      return calendarData[dateKey][hourKey];
    }
    
    return [];
  };

  // Get color based on title or category (demo function)
  const getEventColor = (title: string) => {
    if (title.toLowerCase().includes('design')) return 'bg-green-100 border-green-300';
    if (title.toLowerCase().includes('meeting') || title.toLowerCase().includes('meet')) return 'bg-purple-100 border-purple-300';
    if (title.toLowerCase().includes('review')) return 'bg-blue-100 border-blue-300';
    if (title.toLowerCase().includes('project')) return 'bg-yellow-100 border-yellow-300';
    return 'bg-pink-100 border-pink-300';
  };

  return (
    <div className="h-full overflow-auto">
      <div className="grid grid-cols-8 border-b">
        {/* Time column header */}
        <div className="p-3 border-r text-center text-sm font-medium text-gray-400">
          Time
        </div>
        
        {/* Day headers */}
        {weekDays.map((day, i) => {
          const isToday = isSameDay(day, new Date());
          return (
            <div 
              key={i} 
              className={`p-3 text-center ${isToday ? 'bg-blue-50' : ''}`}
            >
              <div className="text-sm font-medium">{format(day, 'EEE')}</div>
              <div className={`text-2xl font-bold ${isToday ? 'text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mx-auto bg-blue-100' : ''}`}>
                {format(day, 'd')}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Time slots */}
      <div>
        {hours.map((hour) => (
          <div key={hour} className="grid grid-cols-8 min-h-[100px] border-b">
            {/* Time column */}
            <div className="p-2 border-r text-xs text-gray-500 text-center">
              {formatHour(hour)}
            </div>
            
            {/* Day columns */}
            {weekDays.map((day, dayIndex) => {
              const events = getEventsForHourAndDay(day, hour);
              return (
                <div 
                  key={dayIndex} 
                  className={`p-1 border-r relative ${
                    isSameDay(day, new Date()) ? 'bg-blue-50' : ''
                  }`}
                >
                  {events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      onClick={() => onEventClick(event)}
                      className={`p-2 mb-1 rounded border text-sm cursor-pointer ${
                        event.color || getEventColor(event.title)
                      }`}
                    >
                      <div className="font-medium">{event.title}</div>
                      <div className="text-xs mt-1 flex items-center">
                        <span>{event.time}</span>
                        {event.timeEnd && <span> - {event.timeEnd}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
