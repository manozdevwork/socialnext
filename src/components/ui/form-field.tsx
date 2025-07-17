
import * as React from "react";
import { cn } from "@/lib/utils";
import { FormFieldProps } from "@/types/component-types";
import { Label } from "@/components/ui/label";
import { Text } from "./text";

/**
 * FormField component for consistent form field layouts
 */
const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({
    label,
    labelFor,
    error,
    hint,
    isRequired = false,
    className,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "space-y-2",
          className
        )}
        {...props}
      >
        {label && (
          <Label htmlFor={labelFor} className="flex items-center gap-1">
            {label}
            {isRequired && (
              <span className="text-feedback-error-DEFAULT">*</span>
            )}
          </Label>
        )}
        
        {children}
        
        {hint && !error && (
          <Text variant="caption" className="text-neutral-500">
            {hint}
          </Text>
        )}
        
        {error && (
          <Text variant="caption" className="text-feedback-error-DEFAULT">
            {error}
          </Text>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };
