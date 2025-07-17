import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { Title } from '@/components/ui/typography';

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  subValue?: string;
  showChart?: boolean;
  chartColor?: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ 
  title, 
  value, 
  subValue,
  showChart = false,
  chartColor = "bg-primary" 
}) => {
  return (
    <Card className="p-4 sm:p-6 h-full bg-white">
      <div className="flex flex-col h-full">
        <Text variant="caption" className="text-neutral-500 mb-1 sm:mb-2">{title}</Text>
        <div className="flex items-baseline gap-1">
          <Title size="md" className="text-2xl sm:text-3xl">{value}</Title>
          {subValue && <Text variant="caption" className="text-neutral-500">{subValue}</Text>}
        </div>
        
        {showChart && (
          <div className="mt-auto pt-2 sm:pt-4">
            <svg className="w-full h-8 sm:h-10" viewBox="0 0 100 20">
              <path
                d="M0,10 Q10,5 20,10 T40,10 T60,5 T80,15 T100,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
              />
            </svg>
          </div>
        )}
      </div>
    </Card>
  );
};

export default AnalyticsCard;
