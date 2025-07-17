
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconWrapperVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      size: {
        xs: "h-4 w-4",
        sm: "h-5 w-5", 
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10"
      },
      variant: {
        normal: "",
        circular: "rounded-full",
        rounded: "rounded-md"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "normal"
    }
  }
);

export interface IconWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconWrapperVariants> {
  children: React.ReactNode;
}

const IconWrapper = React.forwardRef<HTMLDivElement, IconWrapperProps>(
  ({ className, size, variant, children, ...props }, ref) => {
    return (
      <div
        className={cn(iconWrapperVariants({ size, variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

IconWrapper.displayName = "IconWrapper";

export { IconWrapper, iconWrapperVariants };
