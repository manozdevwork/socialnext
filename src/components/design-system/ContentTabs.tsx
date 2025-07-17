
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentTabsProps {
  className?: string;
}

const ContentTabs: React.FC<ContentTabsProps> = ({ className }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between px-4 py-2">
        <Tabs defaultValue="scheduled" className="w-full max-w-4xl">
          <div className="flex items-center justify-between w-full">
            <TabsList className="bg-transparent p-0 h-auto space-x-2">
              <TabsTrigger 
                value="scheduled" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-gray-800 data-[state=active]:font-medium data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-500 rounded-full px-4 py-2 hover:bg-gray-100"
              >
                Scheduled Posts
              </TabsTrigger>
              <TabsTrigger 
                value="completed" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-gray-800 data-[state=active]:font-medium data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-500 rounded-full px-4 py-2 hover:bg-gray-100"
              >
                Completed Posts
              </TabsTrigger>
              <TabsTrigger 
                value="published" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-gray-800 data-[state=active]:font-medium data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-500 rounded-full px-4 py-2 hover:bg-gray-100"
              >
                Published Posts
              </TabsTrigger>
              <TabsTrigger 
                value="drafts" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-gray-800 data-[state=active]:font-medium data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-500 rounded-full px-4 py-2 hover:bg-gray-100"
              >
                Drafts
              </TabsTrigger>
              <TabsTrigger 
                value="history" 
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-gray-800 data-[state=active]:font-medium data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-500 rounded-full px-4 py-2 hover:bg-gray-100"
              >
                History
              </TabsTrigger>
              <TabsTrigger 
                value="bookmarks" 
                className="bg-sky-400 text-white rounded-full px-6 py-2 font-medium hover:bg-sky-500 transition-colors"
              >
                Bookmarks
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-3 items-center">
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 p-0 border-gray-200">
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </Button>
              <div className="text-sm font-medium text-gray-700">
                May 21 - 26, 2045
              </div>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 p-0 border-gray-200">
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ContentTabs;
