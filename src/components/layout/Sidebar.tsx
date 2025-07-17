
import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Home, Users, FileImage, BarChart2, Settings, ChevronLeft, ChevronRight, X, PlusSquare, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserProfileDisplay } from '@/components/common/Logo';

import SidebarItem from './SidebarItem';
import { SidebarCollapsible, SidebarCollapsibleItem } from './SidebarCollapsible';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { ROUTES } from '@/constants/routes';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeSidebar = () => {
    setIsCollapsed(true);
  };

  return (
    <>
      {/* Mobile overlay */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/20 z-20 md:hidden" 
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "flex flex-col h-screen bg-white transition-all duration-300 z-30",
          isCollapsed ? "w-16" : "w-64",
          "fixed md:relative",
          className
        )}
      >
        {/* Toggle button with hover effect */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1 shadow-md z-10 md:flex hidden hover:bg-gray-100 hover:shadow-lg transition-all"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4 text-gray-600" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          )}
        </button>

        {/* Close button - mobile only */}
        {!isCollapsed && (
          <button
            onClick={closeSidebar}
            className="absolute top-4 right-4 md:hidden"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        )}

        {/* Sidebar header with user profile display */}
        <div className="p-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {!isCollapsed ? (
              <UserProfileDisplay />
            ) : (
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://via.placeholder.com/40x40/f0f0f0/808080?text=JS" alt="User" />
                <AvatarFallback>
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQF4_kz2qtXq7w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1697794439943?e=1752710400&v=beta&t=FTOcIe6GHwXX2M2-pnbQIH_RvAWSARoSqZEGrAx8wlE" 
                    alt="LinkedIn" 
                    className="w-full h-full object-cover rounded-full" 
                  />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
          
          {/* Create Carousel Button below the header */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  className={cn(
                    "border border-sky-200 hover:bg-sky-50 mt-8",
                    "bg-white text-sky-500",
                    isCollapsed ? "p-2 justify-center" : "rounded-full px-3 py-2 justify-start gap-x-2"
                  )}
                >
                  <Link to="/carousel-editor" className="flex items-center">
                    <PlusSquare className="h-5 w-5" />
                    {!isCollapsed && <>Create a Carousel</>}
                  </Link>
                </Button>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent side="right">Create a Carousel</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Sidebar navigation */}
        <div className="flex flex-col flex-1 p-3 space-y-3 overflow-y-auto">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <SidebarItem
                    icon={Home}
                    label="Dashboard"
                    href={ROUTES.DASHBOARD}
                    isActive={currentPath === ROUTES.DASHBOARD}
                    isCollapsed={isCollapsed}
                  />
                </div>
              </TooltipTrigger>
              {isCollapsed && <TooltipContent side="right">Dashboard</TooltipContent>}
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <SidebarItem
                    icon={Users}
                    label="Personas Management"
                    href={ROUTES.PERSONA_MANAGEMENT}
                    isActive={currentPath.startsWith('/personas-management')}
                    isCollapsed={isCollapsed}
                  />
                </div>
              </TooltipTrigger>
              {isCollapsed && <TooltipContent side="right">Personas Management</TooltipContent>}
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <SidebarItem
                    icon={FileImage}
                    label="My Carousels"
                    href={ROUTES.ALL_CAROUSELS}
                    isActive={currentPath.startsWith('/all-carousels') || currentPath === '/carousel-creator'}
                    isCollapsed={isCollapsed}
                  />
                </div>
              </TooltipTrigger>
              {isCollapsed && <TooltipContent side="right">My Carousels</TooltipContent>}
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <SidebarItem
                    icon={BarChart2}
                    label="Analytics"
                    href={ROUTES.ANALYTICS_DASHBOARD}
                    isActive={currentPath.startsWith('/analytics-dashboard')}
                    isCollapsed={isCollapsed}
                  />
                </div>
              </TooltipTrigger>
              {isCollapsed && <TooltipContent side="right">Analytics</TooltipContent>}
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <SidebarItem
                    icon={Settings}
                    label="Account Settings"
                    href={ROUTES.ACCOUNT}
                    isActive={currentPath.startsWith('/account')}
                    isCollapsed={isCollapsed}
                  />
                </div>
              </TooltipTrigger>
              {isCollapsed && <TooltipContent side="right">Account Settings</TooltipContent>}
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Subscription info - Hidden when collapsed */}
        {!isCollapsed && (
          <div className="p-4 m-3 mt-0 bg-slate-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Premium Plan</h3>
              <span className="text-gray-500">$9.99/mo</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-sky-400 h-2 rounded-full w-1/5"></div>
            </div>
            <p className="text-sm text-gray-600">2000/10,000 words</p>
            <Button 
              variant="link" 
              className="mt-2 p-0 h-auto text-sky-400 hover:text-sky-500"
              asChild
            >
              <Link to={ROUTES.ACCOUNT_BILLING}>Change Plan &gt;</Link>
            </Button>
          </div>
        )}
        
        {/* Footer links - Always visible regardless of collapse state */}
        <div className={cn(
          "border-t border-gray-200 px-4 py-1",
          isCollapsed ? "flex flex-col items-center" : ""
        )}>
          <div className="flex flex-row justify-between">
            {!isCollapsed && <Link 
              to={ROUTES.ACCOUNT}
              className="flex items-center text-gray-600 hover:text-sky-500 text-[8px]"
            >
              {/* <Settings className="h-3 w-3 mr-1.5" />
              {!isCollapsed && "Account Settings"} */}
              © 2025 Social Next. 
              All rights reserved.
            </Link>}
            <Link 
              to={ROUTES.ACCOUNT_LOGOUT}
              className="flex items-center text-gray-600 hover:text-red-500 text-[8px]"
            >
              <LogOut className="h-3 w-3 mr-1.5" />
              {!isCollapsed && "Logout"}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
