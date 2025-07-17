
import React from 'react';
import AnalyticsDashboard from '@/components/design-system/AnalyticsDashboard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CardContent } from '@/components/ui/card';
import PageContentLayout from '@/components/layout/PageContentLayout';

const AnalyticsDashboardPage = () => {
  return (
    <div className="h-full flex flex-col">
      <PageContentLayout
        title="Analytics Dashboard"
        subtitle="Overview of your marketing analytics and insights at a glance"
      >
        <CardContent className="p-0 pt-5">
          <ScrollArea className="flex-1 -mx-4 sm:mx-0 px-4 sm:px-0">
            <AnalyticsDashboard />
          </ScrollArea>
        </CardContent>
      </PageContentLayout>
    </div>
  );
};

export default AnalyticsDashboardPage;
