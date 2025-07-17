
import { CalendarData } from './calendar/types';

// Generate some mock data for the calendar view
const generateMockCalendarData = (): CalendarData => {
  const calendarData: CalendarData = {};

  // Get current year and month
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  
  // Titles for posts with more realistic event names
  const titles = [
    "Design Review Meeting",
    "Marketing Strategy Session",
    "Client Onboarding Call",
    "Content Planning Workshop",
    "Weekly Team Sync",
    "SEO Analytics Review",
    "Social Media Campaign Planning",
    "Product Roadmap Discussion",
    "UI/UX Feedback Session",
    "Customer Journey Mapping",
    "Brand Guidelines Update",
    "Content Creation Workshop"
  ];
  
  // Locations for events
  const locations = [
    "Park Lane Office",
    "Virtual Meeting Room",
    "Conference Room A",
    "Main Office",
    "Design Studio",
    "Client HQ",
    "Marketing Department"
  ];
  
  // Attendees pool
  const attendees = [
    { name: "Alex", avatar: `https://picsum.photos/id/1001/100/100` },
    { name: "Jamie", avatar: `https://picsum.photos/id/1002/100/100` },
    { name: "Taylor", avatar: `https://picsum.photos/id/1003/100/100` },
    { name: "Morgan", avatar: `https://picsum.photos/id/1004/100/100` },
    { name: "Casey", avatar: `https://picsum.photos/id/1005/100/100` },
    { name: "Jordan", avatar: `https://picsum.photos/id/1006/100/100` },
    { name: "Riley", avatar: `https://picsum.photos/id/1007/100/100` },
    { name: "Quinn", avatar: `https://picsum.photos/id/1008/100/100` }
  ];
  
  // Generate descriptions
  const descriptions = [
    "Review latest designs and provide feedback for the next iteration.",
    "Discuss upcoming marketing initiatives and campaign strategies.",
    "Onboard new client to our platform and review project requirements.",
    "Plan content calendar for the next quarter and assign responsibilities.",
    "Sync with the team on project progress and address blockers.",
    "Review SEO performance metrics and adjust strategy accordingly.",
    "Brainstorm ideas for the upcoming social media campaign.",
    "Discuss product roadmap priorities and timeline adjustments."
  ];

  // Generate random posts for the month
  for (let day = 1; day <= 28; day++) {
    if (Math.random() > 0.2) { // 80% chance to have posts on a day
      const date = new Date(currentYear, currentMonth, day);
      const dateKey = date.toISOString().split('T')[0];
      calendarData[dateKey] = {};
      
      // Generate 1-5 posts per day
      const numPosts = Math.floor(Math.random() * 5) + 1;
      
      for (let i = 0; i < numPosts; i++) {
        // Random hour between 6 and 18 (6 AM to 6 PM)
        const hour = Math.floor(Math.random() * 13) + 6;
        const hourKey = `${hour.toString().padStart(2, '0')}:00`;
        
        // Random minutes (0, 15, 30, 45)
        const minuteOptions = [0, 15, 30, 45];
        const minute = minuteOptions[Math.floor(Math.random() * minuteOptions.length)];
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        
        // Calculate end time (30-90 mins later)
        const durationMinutes = [30, 45, 60, 90][Math.floor(Math.random() * 4)];
        const endHour = Math.floor((hour * 60 + minute + durationMinutes) / 60);
        const endMinute = (minute + durationMinutes) % 60;
        const timeEnd = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
        
        // Random attendees (2-5)
        const numAttendees = Math.floor(Math.random() * 4) + 2;
        const eventAttendees = [];
        for (let j = 0; j < numAttendees; j++) {
          const randomAttendee = attendees[Math.floor(Math.random() * attendees.length)];
          if (!eventAttendees.some(a => a.name === randomAttendee.name)) {
            eventAttendees.push(randomAttendee);
          }
        }
        
        if (!calendarData[dateKey][hourKey]) {
          calendarData[dateKey][hourKey] = [];
        }
        
        // Define color options for events
        const colorOptions = [
          'bg-blue-100 border-blue-300',
          'bg-green-100 border-green-300',
          'bg-purple-100 border-purple-300',
          'bg-yellow-100 border-yellow-300',
          'bg-pink-100 border-pink-300'
        ];
        
        calendarData[dateKey][hourKey].push({
          id: day * 100 + i,
          title: titles[Math.floor(Math.random() * titles.length)],
          time: time,
          timeEnd: timeEnd,
          imageUrl: `https://picsum.photos/id/${200 + day + i}/300/200`,
          color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
          description: descriptions[Math.floor(Math.random() * descriptions.length)],
          timeZone: "EST",
          location: locations[Math.floor(Math.random() * locations.length)],
          attendees: eventAttendees
        });
      }
    }
  }
  
  // Ensure today has at least one event
  const todayKey = new Date().toISOString().split('T')[0];
  if (!calendarData[todayKey]) {
    calendarData[todayKey] = {
      "09:00": [{
        id: 99999,
        title: "Today's Important Meeting",
        time: "09:00",
        timeEnd: "10:30",
        imageUrl: "https://picsum.photos/id/202/300/200",
        color: "bg-blue-100 border-blue-300",
        description: "This is an important meeting scheduled for today to discuss critical project matters.",
        timeZone: "EST",
        location: "Main Conference Room",
        attendees: attendees.slice(0, 4)
      }]
    };
  }
  
  return calendarData;
};

export const mockCalendarData = generateMockCalendarData();
