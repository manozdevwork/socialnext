
import React from 'react';
import { X, Clock, MapPin, Users } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CalendarEvent } from './types';

interface EventModalProps {
  event: CalendarEvent;
  isOpen: boolean;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Format time to include AM/PM
  const formatTimeWithAMPM = (timeString: string) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };

  const formattedTime = formatTimeWithAMPM(event.time);
  const formattedEndTime = event.timeEnd ? formatTimeWithAMPM(event.timeEnd) : undefined;
  const timeDisplay = formattedEndTime 
    ? `${formattedTime} - ${formattedEndTime}` 
    : formattedTime;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold">Event Details</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            {event.imageUrl && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={event.imageUrl} 
                    alt={event.title}
                    className="w-full h-full object-cover" 
                  />
                </AspectRatio>
              </div>
            )}
            
            <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
            
            <div className="flex items-center text-gray-600 mb-2">
              <Clock className="h-4 w-4 mr-2" />
              <span>{timeDisplay} {event.timeZone}</span>
            </div>
            
            {event.location && (
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{event.location}</span>
              </div>
            )}
            
            {event.attendees && event.attendees.length > 0 && (
              <div className="flex items-start text-gray-600 mb-4">
                <Users className="h-4 w-4 mr-2 mt-1" />
                <div className="flex flex-wrap -mx-1">
                  {event.attendees.map((attendee, index) => (
                    <div key={index} className="px-1 mb-1">
                      <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                        <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
                          <img src={attendee.avatar} alt={attendee.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs">{attendee.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {event.description && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Description</h4>
              <p className="text-sm text-gray-700">{event.description}</p>
            </div>
          )}
          
          <div className="flex justify-end space-x-2 mt-6">
            <button 
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
            >
              Close
            </button>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Edit Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
