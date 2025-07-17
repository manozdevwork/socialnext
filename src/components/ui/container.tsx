
import React from 'react';
import { cn } from '@/lib/utils';
import { ContainerProps } from '@/types/component-types';

/**
 * Container component for consistent layout containers
 */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({
  children,
  maxWidth = 'lg',
  padding = 'md',
  className,
  ...props
}, ref) => {
  // Map maxWidth to Tailwind classes
  const maxWidthClassMap = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full',
  };

  // Map padding to Tailwind classes
  const paddingClassMap = {
    none: 'p-0',
    xs: 'p-2',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'mx-auto w-full',
        maxWidthClassMap[maxWidth],
        paddingClassMap[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export { Container };
