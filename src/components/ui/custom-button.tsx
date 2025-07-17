
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";
import { ButtonProps } from "@/types/component-types";
import { Loader2 } from "lucide-react";

/**
 * Button component with extended functionality like loading states and icons
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = "primary", 
    size = "md", 
    iconLeft, 
    iconRight, 
    isLoading = false, 
    loadingText, 
    isDisabled = false, 
    fullWidth = false,
    className, 
    children, 
    ...props 
  }, ref) => {
    // Map our variants to shadcn variants
    const shadcnVariant = {
      primary: "default",
      secondary: "secondary",
      outline: "outline",
      ghost: "ghost",
      link: "link",
      destructive: "destructive"
    }[variant];

    // Map our sizes to shadcn sizes
    const shadcnSize = {
      xs: "sm",
      sm: "sm",
      md: "default",
      lg: "lg",
      xl: "lg",
    }[size];

    // Custom size styles
    const sizeStyles = {
      xs: "text-xs px-2 py-1 h-7",
      sm: "text-sm px-3 py-1.5 h-8",
      md: "text-sm px-4 py-2 h-10",
      lg: "text-base px-6 py-2.5 h-11",
      xl: "text-lg px-8 py-3 h-12",
    }[size];

    return (
      <ShadcnButton
        ref={ref}
        variant={shadcnVariant as any}
        size={shadcnSize as any}
        disabled={isLoading || isDisabled}
        className={cn(
          "rounded-button relative", // 32px border radius per design
          sizeStyles,
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {!isLoading && iconLeft && (
          <span className="mr-2">{iconLeft}</span>
        )}
        {isLoading && loadingText ? loadingText : children}
        {!isLoading && iconRight && (
          <span className="ml-2">{iconRight}</span>
        )}
      </ShadcnButton>
    );
  }
);

Button.displayName = "Button";

export { Button };
