
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  className?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  isActive = false,
  isCollapsed = false,
  className,
}) => {
  return (
    <Link
      to={href}
      className={cn(
        'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group',
        'hover:bg-primary-400',
        isActive && 'bg-primary-400 text-white',
        isCollapsed && 'justify-center px-2',
        className
      )}
    >
      <Icon className={cn(
        'h-5 w-5 flex-shrink-0',
        isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'
      )} />
      {!isCollapsed && (
        <span className={cn(
          'font-medium text-sm',
          isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'
        )}>
          {label}
        </span>
      )}
    </Link>
  );
};

export default SidebarItem;
