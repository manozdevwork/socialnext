
import * as React from "react";
import { cn } from "@/lib/utils";
import { InputProps } from "@/types/component-types";
import { Input as BaseInput } from "@/components/ui/input";

/**
 * Enhanced Input component with error states and additional features
 */
const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    error,
    icon,
    prefix,
    suffix,
    className,
    ...props
  }, ref) => {
    const IconComponent = icon as React.ElementType;
    
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
            {typeof icon === 'function' 
              ? <IconComponent className="h-4 w-4" /> 
              : icon
            }
          </div>
        )}
        
        {prefix && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
            {prefix}
          </div>
        )}
        
        <BaseInput
          ref={ref}
          className={cn(
            error && "border-feedback-error-DEFAULT focus-visible:ring-feedback-error-DEFAULT",
            icon && "pl-9",
            prefix && "pl-8",
            suffix && "pr-8",
            className
          )}
          {...props}
        />
        
        {suffix && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
            {suffix}
          </div>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export { CustomInput as Input };
