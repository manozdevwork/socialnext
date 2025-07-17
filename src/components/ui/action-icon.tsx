
import * as React from "react";
import { cn } from "@/lib/utils";
import { ActionIconProps } from "@/types/component-types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/**
 * ActionIcon component for circular action buttons with tooltips
 */
const ActionIcon = React.forwardRef<HTMLButtonElement, ActionIconProps>(
  ({
    icon,
    label,
    color = "default",
    onClick,
    tooltipText,
    tooltipPosition = "top",
    ...props
  }, ref) => {
    const IconComponent = icon as React.ElementType;

    // Color variants
    const colorVariants = {
      default: "bg-white text-neutral-600 hover:bg-neutral-100",
      primary: "bg-primary text-white hover:bg-primary-dark",
      secondary: "bg-secondary text-primary hover:bg-primary-100",
      success: "bg-feedback-success-DEFAULT text-white hover:bg-feedback-success-dark",
      warning: "bg-feedback-warning-DEFAULT text-white hover:bg-feedback-warning-dark",
      error: "bg-feedback-error-DEFAULT text-white hover:bg-feedback-error-dark",
      info: "bg-feedback-info-DEFAULT text-white hover:bg-feedback-info-dark",
    };

    const button = (
      <button
        ref={ref}
        type="button"
        className={cn(
          "rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          colorVariants[color]
        )}
        onClick={onClick}
        aria-label={label}
        {...props}
      >
        {typeof icon === 'function' 
          ? <IconComponent className="h-4 w-4" /> 
          : icon
        }
      </button>
    );

    // If tooltip text is provided, wrap button in tooltip
    if (tooltipText) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {button}
            </TooltipTrigger>
            <TooltipContent side={tooltipPosition} className="text-xs">
              {tooltipText}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return button;
  }
);

ActionIcon.displayName = "ActionIcon";

export { ActionIcon };
