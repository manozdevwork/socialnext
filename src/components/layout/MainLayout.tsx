import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import { useIsMobile } from '@/lib/hooks';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/lib/constants';
import Breadcrumbs, { BreadcrumbItem } from '@/components/navigation/Breadcrumbs';
import SearchBox from '@/components/search/SearchBox';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const currentPath = location.pathname;

  // Generate breadcrumb data based on current path
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const pathSegments = currentPath.split('/').filter(segment => segment);
    const breadcrumbItems: BreadcrumbItem[] = [];
    
    // Always add dashboard as first item for main navigation
    breadcrumbItems.push({
      label: 'Dashboard',
      path: ROUTES.DASHBOARD
    });
    
    // Build path progressively
    let currentPathBuild = '';
    
    for (let i = 0; i < pathSegments.length; i++) {
      const segment = pathSegments[i];
      currentPathBuild += `/${segment}`;
      
      // Skip adding dashboard again if it's the current page
      if (i === 0 && segment === 'dashboard') {
        continue;
      }
      
      // Handle special cases and format labels
      let label = '';
      
      switch (segment) {
        case 'account':
          label = 'Account';
          break;
        case 'personal':
          label = 'Personal Information';
          break;
        case 'preference':
          label = 'Preferences';
          break;
        case 'linkedin':
          label = 'LinkedIn Integration';
          break;
        case 'billing':
          label = 'Billing and Subscription';
          break;
        case 'password':
          label = 'Change Password';
          break;
        case 'logout':
          label = 'Logout';
          break;
        case 'all-carousels':
          label = 'My Carousels';
          break;
        case 'personas-management':
          label = 'Personas Management';
          break;
        case 'analytics-dashboard':
          label = 'Analytics';
          break;
        case 'carousel-editor':
          label = 'Carousel Editor';
          break;
        case 'scratch':
          label = 'Scratch Editor';
          break;
        case 'idea-generator':
          label = 'Idea Generator';
          break;
        case 'preview':
          label = 'Preview';
          break;
        default:
          // Capitalize first letter and replace dashes with spaces
          label = segment.charAt(0).toUpperCase() + 
                 segment.slice(1).replace(/-/g, ' ');
      }
      
      breadcrumbItems.push({
        label,
        path: i === pathSegments.length - 1 ? undefined : currentPathBuild
      });
    }
    
    return breadcrumbItems;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <div className="flex flex-col h-screen bg-[white]">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          className={cn(
            isMobile && !sidebarOpen && "transform -translate-x-full",
          )}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {/* Content area */}
          <main className="flex-1 overflow-hidden relative bg-[white]">
            {/* Mobile sidebar toggle button */}
            {isMobile && (
              <button
                className="fixed top-4 left-4 z-20 p-2 bg-white rounded-md shadow-sm md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5 text-neutral-600" />
              </button>
            )}
            
            {/* Responsive header with breadcrumbs and search */}
            <div className="mt-3 px-3 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
              <Breadcrumbs 
                items={breadcrumbItems}
                className="text-[10px] xs:text-xs sm:text-sm text-primary bg-[#0ba5e9] bg-opacity-[0.1] px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg w-fit max-w-[200px] sm:max-w-none"
              />
              
              <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                <SearchBox />
              </div>
            </div>
            
            {/* Main content with padding and border radius at top-left */}
            <div className="h-full mt-4 dashboard-container relative">
              {window.location.pathname === '/dashboard' && <div className="absolute inset-0 grid-background pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #d3d2db 1px, transparent 1px), linear-gradient(to bottom, #d3d2db 1px, transparent 1px)',
                  backgroundSize: '45px 45px',
                  backgroundPosition: '40px 40px',
                  opacity: 0.26,
                  borderTopLeftRadius: '26px',
                }}>
              </div>}
              <div className="container-with-border h-full overflow-hidden">
                <ScrollArea className="h-full" scrollHideDelay={0} type="always">
                  <div className="px-4 sm:px-6 pt-2 pb-[80px] text-left">
                    {children}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile sidebar backdrop */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default MainLayout;
