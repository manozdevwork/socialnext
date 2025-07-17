import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';

interface TopicEngagementItemProps {
  title: string;
  image: string;
  percentage: number;
  isPositive?: boolean;
}

const TopicEngagementItem: React.FC<TopicEngagementItemProps> = ({ 
  title, 
  image, 
  percentage,
  isPositive = false
}) => {
  return (
    <div className="flex items-center gap-3 mb-6 last:mb-0">
      <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-grow">
        <Text variant="bodySmall" className="font-medium mb-1">{title}</Text>
        <div className="flex items-center gap-2">
          <div className="flex-grow">
            <Progress 
              value={percentage} 
              className={`h-2 bg-neutral-200 ${isPositive ? '[&>[data-state=complete]]:bg-feedback-success-DEFAULT' : '[&>[data-state=complete]]:bg-feedback-error-DEFAULT'}`}
            />
          </div>
          <Text variant="bodySmall" tone="muted" className="min-w-[100px] text-right">
            {percentage}% Engagement
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TopicEngagementItem;
