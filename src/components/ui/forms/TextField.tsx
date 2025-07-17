
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textFieldVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 px-2 text-xs",
        md: "h-10 px-3 text-sm", 
        lg: "h-12 px-4 text-base"
      },
      variant: {
        default: "border-input",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-green-500 focus-visible:ring-green-500"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof textFieldVariants> {
  label?: string;
  error?: string;
  helpText?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, size, variant, label, error, helpText, prefixIcon, suffixIcon, id, ...props }, ref) => {
    const inputId = id || React.useId();
    const errorId = error ? `${inputId}-error` : undefined;
    const helpId = helpText ? `${inputId}-help` : undefined;

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
        <div className="relative">
          {prefixIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {prefixIcon}
            </div>
          )}
          <input
            id={inputId}
            className={cn(
              textFieldVariants({ size, variant: error ? "error" : variant }),
              prefixIcon && "pl-9",
              suffixIcon && "pr-9",
              className
            )}
            ref={ref}
            aria-describedby={cn(errorId, helpId)}
            aria-invalid={!!error}
            {...props}
          />
          {suffixIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {suffixIcon}
            </div>
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
);

TextField.displayName = "TextField";

export { TextField, textFieldVariants };
