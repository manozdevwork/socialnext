
import React from 'react';
import { format, isSameDay } from 'date-fns';
import { CalendarData, CalendarEvent } from '../types';
import { Clock } from 'lucide-react';

interface DayViewProps {
  currentDate: Date;
  calendarData: CalendarData;
  onEventClick: (event: CalendarEvent) => void;
}

export const DayView: React.FC<DayViewProps> = ({ 
  currentDate, 
  calendarData, 
  onEventClick 
}) => {
  const isToday = isSameDay(currentDate, new Date());
  const dateKey = format(currentDate, 'yyyy-MM-dd');
  const hours = Array.from({ length: 19 }, (_, i) => i + 6); // 6am to 12am
  
  // Format hour for display
  const formatHour = (hour: number) => {
    const ampm = hour >= 12 ? 'pm' : 'am';
    const hour12 = hour % 12 || 12;
    return `${hour12} ${ampm}`;
  };
  
  // Get events for a specific hour
  const getEventsForHour = (hour: number): CalendarEvent[] => {
    const hourKey = `${hour.toString().padStart(2, '0')}:00`;
    
    if (calendarData[dateKey] && calendarData[dateKey][hourKey]) {
      return calendarData[dateKey][hourKey];
    }
    
    return [];
  };

  // Get event style based on category or content
  const getEventStyle = (event: CalendarEvent) => {
    if (event.color) return event.color;
    
    if (event.title.toLowerCase().includes('design')) 
      return 'bg-green-100 border-green-300';
    if (event.title.toLowerCase().includes('meeting') || event.title.toLowerCase().includes('meet')) 
      return 'bg-purple-100 border-purple-300';
    if (event.title.toLowerCase().includes('review')) 
      return 'bg-blue-100 border-blue-300';
    if (event.title.toLowerCase().includes('development')) 
      return 'bg-yellow-100 border-yellow-300';
    
    return 'bg-pink-100 border-pink-300';
  };

  return (
    <div className="h-full overflow-auto">
      <div className="p-4 border-b">
        <h3 className="text-xl font-bold mb-1">
          {format(currentDate, 'EEEE, MMMM d, yyyy')}
          {isToday && <span className="text-blue-600 ml-2">(Today)</span>}
        </h3>
      </div>
      
      <div className="px-6">
        {hours.map((hour) => {
          const events = getEventsForHour(hour);
          return (
            <div key={hour} className="flex border-b py-4">
              <div className="w-20 flex-shrink-0">
                <div className="text-sm font-medium text-gray-600">{formatHour(hour)}</div>
              </div>
              
              <div className="flex-grow pl-4">
                {events.length === 0 ? (
                  <div className="h-6"></div>
                ) : (
                  <div className="space-y-2">
                    {events.map((event, idx) => (
                      <div
                        key={`${event.id}-${idx}`}
                        className={`p-3 rounded-lg shadow-sm border ${getEventStyle(event)} cursor-pointer`}
                        onClick={() => onEventClick(event)}
                      >
                        <h4 className="font-medium mb-1">{event.title}</h4>
                        <div className="flex items-center text-xs text-gray-600">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{event.time}</span>
                          {event.timeEnd && <span> - {event.timeEnd}</span>}
                          {event.timeZone && <span className="ml-1">{event.timeZone}</span>}
                        </div>
                        
                        {event.imageUrl && (
                          <div className="mt-2 h-12 rounded overflow-hidden">
                            <img 
                              src={event.imageUrl} 
                              alt={event.title} 
                              className="h-full w-auto object-cover" 
                            />
                          </div>
                        )}
                        
                        {event.attendees && event.attendees.length > 0 && (
                          <div className="flex mt-2 overflow-hidden">
                            {event.attendees.slice(0, 3).map((attendee, i) => (
                              <div 
                                key={i} 
                                className="w-6 h-6 rounded-full overflow-hidden border-2 border-white -ml-1 first:ml-0"
                              >
                                <img 
                                  src={attendee.avatar} 
                                  alt={attendee.name} 
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                            ))}
                            {event.attendees.length > 3 && (
                              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs -ml-1">
                                +{event.attendees.length - 3}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
