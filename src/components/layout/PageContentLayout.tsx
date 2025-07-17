
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PageTitle } from '@/components/ui/page-title';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { zIndex } from '@/styles/theme/zIndex';

interface PageContentLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  showBackButton?: boolean;
  backRoute?: string;
  action?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  className?: string;
}

const PageContentLayout: React.FC<PageContentLayoutProps> = ({
  title,
  subtitle,
  children,
  showBackButton = false,
  backRoute,
  action,
  className,
}) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const isPreviewPage = false;

  const handleGoBack = () => {
    if (backRoute) {
      navigate(backRoute);
    } else {
      navigate(-1);
    }
  };

  return (
    <Card className={cn(
      'mt-3 border border-neutral-200 bg-white shadow-sm',
      className
    )}>
      <div className="p-6 text-left">
        <div className="flex flex-row items-center gap-4">
          {showBackButton && (
            <button 
              onClick={handleGoBack}
              className="p-2 hover:bg-neutral-100 transition-colors border rounded-full border-1 border-primary-300"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          <PageTitle
            title={title}
            subtitle={subtitle}
            button={action && !isPreviewPage ? action : undefined}
          />
        </div>
        
        <div className="mt-6 text-left">
          {children}
        </div>
      </div>
      
      {/* Mobile sticky action */}
      {isMobile && isPreviewPage && action && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 flex justify-center z-[2000]">
          <button 
            onClick={action.onClick}
            className="bg-primary hover:bg-primary-600 text-white rounded-lg px-6 py-3 flex items-center justify-center w-full max-w-sm shadow-lg transition-colors"
          >
            {action.icon && <span className="mr-2">{action.icon}</span>}
            {action.label}
          </button>
        </div>
      )}
    </Card>
  );
};

export default PageContentLayout;
