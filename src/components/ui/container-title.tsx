
import React from 'react';
import { cn } from '@/lib/utils';
import { ContainerTitleProps } from '@/types/component-types';
import { Text } from './text';

/**
 * Container Title component for consistent section headings
 */
const ContainerTitle = React.forwardRef<HTMLDivElement, ContainerTitleProps>(({
  title,
  subtitle,
  icon: Icon,
  action,
  className,
  ...props
}, ref) => {
  const IconComponent = Icon as React.ElementType;
  
  return (
    <div 
      ref={ref} 
      className={cn(
        'flex flex-col space-y-1 sticky top-0 z-10 bg-white pb-4 text-left', 
        className
      )}
      {...props}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {Icon && (
            typeof Icon === 'function' 
              ? <IconComponent className="h-5 w-5 text-primary" />
              : Icon
          )}
          <Text variant="h3" className="text-neutral-700 text-left">{title}</Text>
        </div>
        {action && (
          <div className="flex items-center">
            {action}
          </div>
        )}
      </div>
      
      {subtitle && (
        <Text variant="bodySmall" className="text-neutral-500 text-left">{subtitle}</Text>
      )}
    </div>
  );
});

ContainerTitle.displayName = 'ContainerTitle';

export { ContainerTitle };
