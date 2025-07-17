
export interface CalendarEvent {
  id: number;
  title: string;
  time: string;
  timeEnd?: string;
  imageUrl: string;
  color?: string;
  description?: string;
  timeZone?: string;
  attendees?: Array<{
    name: string;
    avatar: string;
  }>;
  location?: string;
}

export interface DayEvents {
  [hour: string]: CalendarEvent[];
}

export interface CalendarData {
  [date: string]: DayEvents;
}
