
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SidebarCollapsibleItemProps {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  accentColor?: boolean;
}

const SidebarCollapsibleItem: React.FC<SidebarCollapsibleItemProps> = ({ 
  label, 
  href, 
  onClick,
  active = false,
  accentColor = false
}) => {
  return (
    <li className="relative">
      <div className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 h-full">
        <div className="h-full w-[1px] bg-gray-200"></div>
      </div>
      {href ? (
        <Link 
          to={href} 
          onClick={onClick}
          className={cn(
            "flex py-2 pl-8 text-sm font-medium",
            active ? "text-sky-400" : "text-gray-700 hover:text-sky-500",
            accentColor && "text-sky-400"
          )}
        >
          {label}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={cn(
            "flex py-2 pl-8 text-sm font-medium w-full text-left",
            active ? "text-sky-400" : "text-gray-700 hover:text-sky-500",
            accentColor && "text-sky-400"
          )}
        >
          {label}
        </button>
      )}
    </li>
  );
};

interface SidebarCollapsibleProps {
  icon: LucideIcon;
  label: string;
  isCollapsed?: boolean;
  isActive?: boolean;
  defaultOpen?: boolean;
  accentColor?: boolean;
  children: React.ReactNode;
}

const SidebarCollapsible: React.FC<SidebarCollapsibleProps> = ({
  icon: Icon,
  label,
  isCollapsed = false,
  isActive = false,
  defaultOpen = false,
  accentColor = false,
  children
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full">
      <button
        onClick={() => !isCollapsed && setIsOpen(!isOpen)}
        className={cn(
          "flex items-center py-3 px-3 text-sm rounded-lg group w-full",
          isActive || isOpen ? "bg-sky-400 text-white" : "text-gray-700 hover:bg-sky-100",
          accentColor && !isOpen && "bg-sky-400 text-white"
        )}
      >
        <Icon className={cn("h-5 w-5 flex-shrink-0", 
          (isActive || isOpen || accentColor) ? "" : "text-gray-500 group-hover:text-sky-500"
        )} />
        
        {!isCollapsed && (
          <>
            <span className="ml-3 flex-1 text-left whitespace-nowrap">{label}</span>
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </>
        )}
      </button>

      {!isCollapsed && isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="pl-2 overflow-hidden"
        >
          <ul className="space-y-1 pl-2 pt-2">
            {children}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export { SidebarCollapsible, SidebarCollapsibleItem };
