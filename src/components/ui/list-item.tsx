
import * as React from "react";
import { cn } from "@/lib/utils";
import { ListItemProps } from "@/types/component-types";
import { Text } from "./text";

/**
 * ListItem component for consistent list items
 */
const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({
    title,
    subtitle,
    icon,
    actions,
    isSelected = false,
    onClick,
    ...props
  }, ref) => {
    const IconComponent = icon as React.ElementType;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between px-4 py-3 rounded-lg transition-colors",
          isSelected && "bg-primary-100",
          onClick && "cursor-pointer hover:bg-neutral-50",
          onClick && isSelected && "hover:bg-primary-200"
        )}
        onClick={onClick}
        {...props}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {icon && (
            <div className="flex-shrink-0">
              {typeof icon === 'function' 
                ? <IconComponent className="h-5 w-5 text-neutral-400" /> 
                : icon
              }
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <Text variant="body" className="font-medium truncate">
              {title}
            </Text>
            
            {subtitle && (
              <Text variant="bodySmall" className="text-neutral-500 truncate">
                {subtitle}
              </Text>
            )}
          </div>
        </div>
        
        {actions && (
          <div className="flex items-center gap-2 ml-4">
            {actions}
          </div>
        )}
      </div>
    );
  }
);

ListItem.displayName = "ListItem";

export { ListItem };
