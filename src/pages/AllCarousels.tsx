
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CarouselList from '@/components/carousels/CarouselList';
import { ModernCalendarView } from '@/components/carousels/calendar/ModernCalendarView';
import { mockCalendarData } from '@/components/carousels/mockCalendarData';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { PageTitle } from '@/components/ui/page-title';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock data for carousel items
const carouselData = [
  {
    id: 1,
    title: "AI Marketing Trends to Watch: Transforming Strategies for 2025",
    description: "AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.",
    date: "15/2/2023",
    slides: 9,
    imageUrl: "https://picsum.photos/id/237/400/400"
  },
  {
    id: 2,
    title: "AI Marketing Trends to Watch: Transforming Strategies for 2025",
    description: "AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.",
    date: "15/2/2023",
    slides: 9,
    imageUrl: "https://picsum.photos/id/238/400/400"
  },
  {
    id: 3,
    title: "AI Marketing Trends to Watch: Transforming Strategies for 2025",
    description: "AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.",
    date: "15/2/2023",
    slides: 9,
    imageUrl: "https://picsum.photos/id/239/400/400"
  },
  {
    id: 4,
    title: "AI Marketing Trends to Watch: Transforming Strategies for 2025",
    description: "AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.",
    date: "15/2/2023",
    slides: 9,
    imageUrl: "https://picsum.photos/id/240/400/400"
  },
  {
    id: 5,
    title: "AI Marketing Trends to Watch: Transforming Strategies for 2025",
    description: "AI in Marketing explores how emerging AI technologies are reshaping marketing with hyper-personalization, predictive analytics, and automation innovations for smarter, more efficient campaigns.",
    date: "15/2/2023",
    slides: 9,
    imageUrl: "https://picsum.photos/id/241/400/400"
  }
];

const AllCarousels = () => {
  const [currentDateRange, setCurrentDateRange] = useState("May 21 - 26, 2025");
  const [activeTab, setActiveTab] = useState("drafts");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentView, setCurrentView] = useState<'month' | 'week' | 'day'>('week');

  const navigate = useNavigate()
  // Update date range when month changes
  const handleMonthChange = (newMonth: Date) => {
    setCurrentMonth(newMonth);
    const monthName = newMonth.toLocaleString('default', { month: 'long' });
    const year = newMonth.getFullYear();
    setCurrentDateRange(`${monthName} ${year}`);
  };

  return (
    <div className="h-full flex flex-col">
      <PageTitle 
        title="My Carousels"
        subtitle="Complete this profile to unlock 1000 words free generation with AI"
        button={{
          label: "Create Carousel",
          onClick: () => navigate(ROUTES.CAROUSEL_EDITOR)
        }}
      />
      
      <ScrollArea className="mt-6 flex-1 -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="space-y-6">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <Tabs defaultValue="drafts" className="w-full" onValueChange={setActiveTab}>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
                    <TabsList className="flex space-x-2 bg-transparent p-0 h-auto">
                      <TabsTrigger 
                        value="scheduled" 
                        className="data-[state=active]:border data-[state=active]:border-[#00c8ff] data-[state=active]:bg-[#00c8ff] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:border data-[state=inactive]:border-gray-200 data-[state=inactive]:text-gray-500 rounded-full px-4 py-2 hover:bg-[#00c8ff] hover:text-white whitespace-nowrap"
                      >
                        Scheduled
                      </TabsTrigger>
                      <TabsTrigger 
                        value="drafts" 
                        className="data-[state=active]:border data-[state=active]:border-[#00c8ff] data-[state=active]:bg-[#00c8ff] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:border data-[state=inactive]:border-gray-200 data-[state=inactive]:text-gray-500 rounded-full px-4 py-2 hover:bg-[#00c8ff] hover:text-white whitespace-nowrap"
                      >
                        Drafts
                      </TabsTrigger>
                      <TabsTrigger 
                        value="bookmarks" 
                        className="data-[state=active]:border data-[state=active]:border-[#00c8ff] data-[state=active]:bg-[#00c8ff] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:border data-[state=inactive]:border-gray-200 data-[state=inactive]:text-gray-500 rounded-full px-4 py-2 hover:bg-[#00c8ff] hover:text-white whitespace-nowrap"
                      >
                        Bookmarks
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-1">
                      {activeTab === "scheduled" && <>
                      <button 
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                          currentView === 'month' 
                            ? 'bg-white shadow-md text-[#00c8ff]' 
                            : 'text-gray-500 hover:bg-gray-100'
                        }`}
                        onClick={() => setCurrentView('month')}
                      >
                        Month
                      </button>
                      <button 
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                          currentView === 'week' 
                            ? 'bg-white shadow-md text-[#00c8ff]' 
                            : 'text-gray-500 hover:bg-gray-100'
                        }`}
                        onClick={() => setCurrentView('week')}
                      >
                        Week
                      </button>
                      <button 
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                          currentView === 'day' 
                            ? 'bg-white shadow-md text-[#00c8ff]' 
                            : 'text-gray-500 hover:bg-gray-100'
                        }`}
                        onClick={() => setCurrentView('day')}
                      >
                        Day
                      </button>
                      </>}
                    </div>

                    {activeTab !== "scheduled" && <div className="flex items-center">
                      <button className="p-2 rounded-full border border-sky-500 hover:bg-sky-50 transition-colors">
                        <ChevronLeft className="h-4 w-4 text-sky-500" />
                      </button>
                      <button className="ml-2 px-4 py-1.5 bg-transparent rounded-md text-sm font-medium">
                        May 21 - 26, 2025
                      </button>
                      <button className="p-2 ml-2 rounded-full border border-sky-500 hover:bg-sky-50 transition-colors">
                        <ChevronRight className="h-4 w-4 text-sky-500" />
                      </button>
                    </div>}
                  </div>
                </div>

                <TabsContent value="drafts" className="mt-6">
                  <CarouselList carousels={carouselData} layout="grid" />
                </TabsContent>

                <TabsContent value="bookmarks" className="mt-6">
                  <CarouselList carousels={carouselData} layout="bookmarks" />
                </TabsContent>

                <TabsContent value="scheduled" className="mt-6 h-[700px]">
                  <ModernCalendarView 
                    currentMonth={currentMonth} 
                    onMonthChange={handleMonthChange}
                    calendarData={mockCalendarData}
                    view={currentView}
                  />
                </TabsContent>

                <TabsContent value="history" className="mt-6">
                  <CarouselList carousels={carouselData} layout="list" />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default AllCarousels;
