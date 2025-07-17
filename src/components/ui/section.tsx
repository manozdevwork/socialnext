
import React from 'react';
import { cn } from '@/lib/utils';
import { SectionProps } from '@/types/component-types';
import { ContainerTitle } from './container-title';
import { zIndex } from '@/styles/theme/zIndex';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Section component for consistent content sections
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(({
  children,
  title,
  subtitle,
  spacing = 'md',
  className,
  id,
  ...props
}, ref) => {
  // Map spacing to Tailwind classes
  const spacingClassMap = {
    xs: 'space-y-2',
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8',
    xl: 'space-y-10',
  };

  const isMobile = useIsMobile();
  const isPreviewPage = window.location.pathname.includes('/scratch') || 
                       window.location.pathname.includes('/preview');

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'w-full',
        spacingClassMap[spacing],
        className
      )}
      style={{ 
        zIndex: isPreviewPage && isMobile && id && id.includes('footer') ? zIndex.mobileStickyButtons : 'auto'
      }}
      {...props}
    >
      {(title || subtitle) && (
        <ContainerTitle 
          title={title || ''} 
          subtitle={subtitle} 
        />
      )}
      <div className="w-full">
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export { Section };
