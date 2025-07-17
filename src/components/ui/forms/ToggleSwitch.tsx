
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        md: "h-6 w-11",
        lg: "h-7 w-12"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "h-3 w-3 data-[state=checked]:translate-x-3",
        md: "h-5 w-5 data-[state=checked]:translate-x-5", 
        lg: "h-6 w-6 data-[state=checked]:translate-x-5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

export interface ToggleSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {
  label?: string;
  error?: string;
  helpText?: string;
}

const ToggleSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  ToggleSwitchProps
>(({ className, size, label, error, helpText, id, ...props }, ref) => {
  const switchId = id || React.useId();
  const errorId = error ? `${switchId}-error` : undefined;
  const helpId = helpText ? `${switchId}-help` : undefined;

  const switchElement = (
    <SwitchPrimitives.Root
      className={cn(switchVariants({ size }), className)}
      id={switchId}
      ref={ref}
      aria-describedby={cn(errorId, helpId)}
      aria-invalid={!!error}
      {...props}
    >
      <SwitchPrimitives.Thumb className={cn(switchThumbVariants({ size }))} />
    </SwitchPrimitives.Root>
  );

  if (label || error || helpText) {
    return (
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          {switchElement}
          {label && (
            <label
              htmlFor={switchId}
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

  return switchElement;
});

ToggleSwitch.displayName = SwitchPrimitives.Root.displayName;

export { ToggleSwitch, switchVariants };
