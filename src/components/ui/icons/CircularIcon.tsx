
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const circularIconVariants = cva(
  "inline-flex items-center justify-center rounded-full",
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
        default: "bg-primary/10 text-primary",
        muted: "bg-muted text-muted-foreground",
        accent: "bg-accent text-accent-foreground"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "default"
    }
  }
);

export interface CircularIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof circularIconVariants> {
  children: React.ReactNode;
}

const CircularIcon = React.forwardRef<HTMLDivElement, CircularIconProps>(
  ({ className, size, variant, children, ...props }, ref) => {
    return (
      <div
        className={cn(circularIconVariants({ size, variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CircularIcon.displayName = "CircularIcon";

export { CircularIcon, circularIconVariants };
