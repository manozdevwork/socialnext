
import * as React from "react";
import { cn } from "@/lib/utils";
import { TagProps } from "@/types/component-types";
import { X } from "lucide-react";

/**
 * Tag component for labeling and categorization
 */
const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({
    label,
    color = "default",
    isDismissible = false,
    isSelected = false,
    onDismiss,
    onClick,
    ...props
  }, ref) => {
    // Color variants
    const colorVariants = {
      default: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
      primary: "bg-primary-100 text-primary-700 hover:bg-primary-200",
      secondary: "bg-secondary text-primary-700 hover:bg-primary-100",
      success: "bg-feedback-success-light text-feedback-success-dark hover:bg-green-100",
      warning: "bg-feedback-warning-light text-feedback-warning-dark hover:bg-amber-100",
      error: "bg-feedback-error-light text-feedback-error-dark hover:bg-red-100",
      info: "bg-feedback-info-light text-feedback-info-dark hover:bg-blue-100",
    };

    // Selected state
    const selectedStyles = isSelected 
      ? "ring-2 ring-primary ring-offset-1" 
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
          colorVariants[color],
          onClick && "cursor-pointer",
          selectedStyles
        )}
        onClick={onClick}
        {...props}
      >
        <span>{label}</span>
        {isDismissible && (
          <button
            type="button"
            className="ml-1 rounded-full hover:bg-black/10 p-0.5"
            onClick={(e) => {
              e.stopPropagation();
              onDismiss?.();
            }}
            aria-label="Dismiss"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    );
  }
);

Tag.displayName = "Tag";

export { Tag };
