
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const radioVariants = cva(
  "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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

export interface RadioButtonProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioVariants> {
  label?: string;
}

const RadioButton = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioButtonProps
>(({ className, size, label, id, ...props }, ref) => {
  const radioId = id || React.useId();

  const radio = (
    <RadioGroupPrimitive.Item
      ref={ref}
      id={radioId}
      className={cn(radioVariants({ size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );

  if (label) {
    return (
      <div className="flex items-center space-x-2">
        {radio}
        <label
          htmlFor={radioId}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
    );
  }

  return radio;
});

RadioButton.displayName = RadioGroupPrimitive.Item.displayName;

// RadioGroup wrapper component
export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  label?: string;
  error?: string;
  helpText?: string;
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, label, error, helpText, children, ...props }, ref) => {
  const groupId = React.useId();
  const errorId = error ? `${groupId}-error` : undefined;
  const helpId = helpText ? `${groupId}-help` : undefined;

  return (
    <div className="space-y-2">
      {label && (
        <div className="text-sm font-medium leading-none">
          {label}
        </div>
      )}
      <RadioGroupPrimitive.Root
        className={cn("grid gap-2", className)}
        ref={ref}
        aria-describedby={cn(errorId, helpId)}
        aria-invalid={!!error}
        {...props}
      >
        {children}
      </RadioGroupPrimitive.Root>
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
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export { RadioButton, RadioGroup, radioVariants };
