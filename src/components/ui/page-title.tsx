
import React from 'react';
import { cn } from '@/lib/utils';
import { Title, Subtitle } from '@/components/ui/typography';
import { Button } from '@/components/ui/enhanced-button';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  button?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  className?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  button,
  className,
}) => {
  return (
    <div className={cn(
      'w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left',
      className
    )}>
      <div className="flex-1 text-left">
        <Title size="sm" className="text-neutral-800 mb-1">
          {title}
        </Title>
        {subtitle && (
          <Subtitle className="text-neutral-600 max-w-2xl">
            {subtitle}
          </Subtitle>
        )}
      </div>

      {button && (
        <div className="flex-shrink-0">
          <Button
            variant="primary"
            size="md"
            onClick={button.onClick}
            prefixIcon={button.icon}
            className="rounded-full"
          >
            {button.label}
          </Button>
        </div>
      )}
    </div>
  );
};
