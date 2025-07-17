
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl sm:text-5xl font-bold leading-tight tracking-tight",
      h2: "text-3xl sm:text-4xl font-bold leading-tight tracking-tight",
      h3: "text-2xl sm:text-3xl font-semibold leading-tight tracking-tight",
      h4: "text-xl sm:text-2xl font-semibold leading-tight",
      h5: "text-lg sm:text-xl font-semibold leading-tight",
      h6: "text-base sm:text-lg font-semibold leading-tight",
      body: "text-base leading-relaxed",
      bodyLarge: "text-lg leading-relaxed",
      bodySmall: "text-sm leading-relaxed",
      caption: "text-xs leading-relaxed",
      label: "text-sm font-medium leading-none",
    },
    tone: {
      default: "text-neutral-700",
      muted: "text-neutral-500",
      accent: "text-primary-600",
      success: "text-feedback-success-DEFAULT",
      warning: "text-feedback-warning-DEFAULT", 
      error: "text-feedback-error-DEFAULT",
      white: "text-white",
    },
  },
  defaultVariants: {
    variant: "body",
    tone: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, tone, as, children, ...props }, ref) => {
    const Component = as || getDefaultElement(variant);
    
    return React.createElement(
      Component,
      {
        className: cn(textVariants({ variant, tone }), className),
        ref,
        ...props,
      },
      children
    );
  }
);

Text.displayName = "Text";

function getDefaultElement(variant: TextProps["variant"]) {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return variant;
    case "caption":
    case "label":
      return "span";
    default:
      return "p";
  }
}

export { Text, textVariants };
