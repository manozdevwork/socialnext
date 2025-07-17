
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textAreaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "min-h-[60px] px-2 py-1 text-xs",
        md: "min-h-[80px] px-3 py-2 text-sm",
        lg: "min-h-[120px] px-4 py-3 text-base"
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

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textAreaVariants> {
  label?: string;
  error?: string;
  helpText?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, size, variant, label, error, helpText, id, ...props }, ref) => {
    const textareaId = id || React.useId();
    const errorId = error ? `${textareaId}-error` : undefined;
    const helpId = helpText ? `${textareaId}-help` : undefined;

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(textAreaVariants({ size, variant: error ? "error" : variant }), className)}
          ref={ref}
          aria-describedby={cn(errorId, helpId)}
          aria-invalid={!!error}
          {...props}
        />
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

TextArea.displayName = "TextArea";

export { TextArea, textAreaVariants };
