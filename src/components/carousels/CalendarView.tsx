
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, isSameDay, isToday } from 'date-fns';
import { ArrowLeft, ArrowRight, Clock, MoreVertical } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger
} from '@/components/ui/hover-card';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

interface CalendarPost {
  id: number;
  title: string;
  time: string;
  imageUrl: string;
  color?: string;
  description?: string;
  timeZone?: string;
}

interface DayPosts {
  [hour: string]: CalendarPost[];
}

interface CalendarData {
  [date: string]: DayPosts;
}

interface CalendarViewProps {
  currentMonth: Date;
  onMonthChange: (newMonth: Date) => void;
  calendarData: CalendarData;
}

const CalendarView: React.FC<CalendarViewProps> = ({ 
  currentMonth, 
  onMonthChange,
  calendarData
}) => {
  // Get days of the month
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  
  // Format for display
  const formatMonth = format(currentMonth, "MMMM yyyy");
  
  // Hours to display (from 7am to 8pm)
  const hours = Array.from({ length: 14 }, (_, i) => i + 7);
  
  // Generate the days of the month
  const days = [];
  let day = startDate;
  
  // Generate all days in the month
  while (day <= monthEnd) {
    days.push(day);
    day = addDays(day, 1);
  }

  const handlePreviousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    onMonthChange(newMonth);
  };

  const handleNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    onMonthChange(newMonth);
  };

  // Get post count for a specific day
  const getPostCount = (dayKey: string) => {
    if (!calendarData[dayKey]) return 0;
    
    let count = 0;
    Object.keys(calendarData[dayKey]).forEach(hour => {
      count += calendarData[dayKey][hour].length;
    });
    
    return count;
  };

  return (
    <div className="flex flex-col h-full">
      {/* Calendar header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{formatMonth}</h3>
        <div className="flex items-center space-x-2">
          <button onClick={handlePreviousMonth} className="p-1 rounded-full border border-gray-200 hover:bg-gray-50">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button onClick={handleNextMonth} className="p-1 rounded-full border border-gray-200 hover:bg-gray-50">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Days header */}
      <div className="grid grid-cols-7 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName, i) => (
          <div 
            key={i} 
            className={`text-center py-2 rounded-md ${
              i === 6 ? 'bg-[#00c8ff] text-white' : 'bg-gray-100'
            }`}
          >
            {dayName}
          </div>
        ))}
      </div>

      {/* Calendar grid with ScrollArea for horizontal scrolling */}
      <ScrollArea className="flex-grow">
        <div className="grid grid-cols-7 min-w-full">
          {days.map((date, idx) => {
            const day = format(date, "d");
            const dayKey = format(date, "yyyy-MM-dd");
            const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
            const isTodayDate = isToday(date);
            const postCount = getPostCount(dayKey);
            
            return (
              <div 
                key={idx} 
                className={`flex flex-col border ${
                  isCurrentMonth 
                    ? isTodayDate 
                      ? 'bg-blue-50 border-blue-300' 
                      : 'bg-white' 
                    : 'bg-gray-50 opacity-50'
                }`}
              >
                {/* Day number with post count */}
                <div className={`text-center py-1 border-b font-medium ${
                  isTodayDate ? 'text-blue-700' : 'text-gray-700'
                }`}>
                  {day} 
                  {postCount > 0 && (
                    <span className="ml-1 text-xs text-gray-500">({postCount})</span>
                  )}
                </div>
                
                {/* Posts for this day */}
                <ScrollArea className="h-[450px]">
                  <div className="space-y-1 p-1">
                    {calendarData[dayKey] ? (
                      Object.keys(calendarData[dayKey])
                        .sort()
                        .map(hour => (
                          <React.Fragment key={hour}>
                            {calendarData[dayKey][hour].map((post, postIdx) => (
                              <CalendarPostCard 
                                key={`${post.id}-${postIdx}`} 
                                post={post} 
                              />
                            ))}
                          </React.Fragment>
                        ))
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>
                </ScrollArea>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

interface CalendarPostCardProps {
  post: CalendarPost;
}

const CalendarPostCard: React.FC<CalendarPostCardProps> = ({ post }) => {
  // Format time to include AM/PM
  const formatTimeWithAMPM = (timeString: string) => {
    // Simple conversion for demonstration
    const [hours, minutes] = timeString.split(':').map(Number);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };

  // For the color dropdown in hover card
  const colorOptions = [
    { name: 'Purple', value: 'border-purple-200 bg-purple-50' },
    { name: 'Blue', value: 'border-blue-200 bg-blue-50' },
    { name: 'Green', value: 'border-green-200 bg-green-50' },
    { name: 'Red', value: 'border-red-200 bg-red-50' },
    { name: 'Orange', value: 'border-orange-200 bg-orange-50' },
    { name: 'Pink', value: 'border-pink-200 bg-pink-50' },
  ];

  const formattedTime = formatTimeWithAMPM(post.time);
  const timeZone = post.timeZone || 'EST'; // Default timezone if not provided

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div 
          className={`p-1 rounded-md border ${
            post.color ? post.color : 'border-green-200 bg-green-50'
          } mb-2 cursor-pointer`}
        >
          <div className="text-xs font-medium px-2 py-1 rounded bg-opacity-90 inline-block mb-1">
            {formattedTime} {timeZone}
          </div>
          
          <div className="relative mb-1">
            <AspectRatio ratio={1/1} className="bg-white rounded overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover" 
              />
            </AspectRatio>
          </div>
          
          <div className="text-xs font-medium line-clamp-2 p-1">
            {post.title}
          </div>
        </div>
      </HoverCardTrigger>
      
      <HoverCardContent className="w-80 p-0 shadow-lg border border-gray-200">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-sm text-gray-700">{formattedTime} {timeZone}</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <div className="p-1 rounded-md hover:bg-gray-100">
                  <MoreVertical className="h-4 w-4 text-gray-500" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 p-2">
                <div className="mb-2 px-2 py-1 text-xs font-medium text-gray-500">Color</div>
                <div className="grid grid-cols-3 gap-1 mb-2">
                  {colorOptions.map((color) => (
                    <div 
                      key={color.name}
                      className={`w-full h-6 rounded ${color.value} cursor-pointer border-2 hover:border-gray-400`}
                      title={color.name}
                    />
                  ))}
                </div>
                <DropdownMenuItem className="cursor-pointer">
                  Edit Post
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-red-500">
                  Delete Post
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="mb-3">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-32 object-cover rounded-md" 
            />
          </div>
          
          <h3 className="font-medium text-base mb-2">{post.title}</h3>
          
          <p className="text-sm text-gray-600 line-clamp-3">
            {post.description || "No description available for this post. Click to view more details and edit this carousel post."}
          </p>
          
          <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
            <button className="text-xs font-medium text-[#00c8ff] hover:underline">
              Edit Post
            </button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CalendarView;
