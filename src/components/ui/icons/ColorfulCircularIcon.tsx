
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const colorfulCircularIconVariants = cva(
  "inline-flex items-center justify-center rounded-full text-white",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8", 
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16"
      },
      variant: {
        primary: "bg-primary",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        error: "bg-red-500",
        info: "bg-blue-500",
        purple: "bg-purple-500",
        pink: "bg-pink-500",
        indigo: "bg-indigo-500",
        teal: "bg-teal-500"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "primary"
    }
  }
);

export interface ColorfulCircularIconProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof colorfulCircularIconVariants> {
  children: React.ReactNode;
}

const ColorfulCircularIcon = React.forwardRef<HTMLDivElement, ColorfulCircularIconProps>(
  ({ className, size, variant, children, ...props }, ref) => {
    return (
      <div
        className={cn(colorfulCircularIconVariants({ size, variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ColorfulCircularIcon.displayName = "ColorfulCircularIcon";

export { ColorfulCircularIcon, colorfulCircularIconVariants };
