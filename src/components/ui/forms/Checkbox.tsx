
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  error?: string;
  helpText?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, label, error, helpText, id, ...props }, ref) => {
  const checkboxId = id || React.useId();
  const errorId = error ? `${checkboxId}-error` : undefined;
  const helpId = helpText ? `${checkboxId}-help` : undefined;

  const checkbox = (
    <CheckboxPrimitive.Root
      ref={ref}
      id={checkboxId}
      className={cn(checkboxVariants({ size }), className)}
      aria-describedby={cn(errorId, helpId)}
      aria-invalid={!!error}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
        <Check className="h-3 w-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (label || error || helpText) {
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          {checkbox}
          {label && (
            <label
              htmlFor={checkboxId}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          )}
        </div>
        {error && (
          <p id={errorId} className="text-xs text-destructive">
            {error}
          </p>
        )}
        {helpText && !error && (
          <p id={helpId} className="text-xs text-muted-foreground">
            {helpText}
          </p>
        )}
      </div>
    );
  }

  return checkbox;
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
