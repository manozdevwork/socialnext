
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollArea } from '@/components/ui/scroll-area';
import DashboardContent from '@/components/design-system/DashboardContent';
import { CardContent } from '@/components/ui/card';

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <div className="h-full flex flex-col">
      <CardContent className="p-0 pt-5">
        <ScrollArea className="flex-1 -mx-4 sm:mx-0 px-4 sm:px-0">
          <div className="text-left">
            <DashboardContent />
          </div>
        </ScrollArea>
      </CardContent>
    </div>
  );
};

export default Dashboard;
