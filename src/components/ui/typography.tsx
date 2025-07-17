
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Title component variants
const titleVariants = cva("font-bold leading-tight tracking-tight", {
  variants: {
    size: {
      xs: "text-lg sm:text-xl",
      sm: "text-xl sm:text-2xl", 
      md: "text-2xl sm:text-3xl",
      lg: "text-3xl sm:text-4xl lg:text-5xl",
      xl: "text-4xl sm:text-5xl lg:text-6xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

// Subtitle component variants
const subtitleVariants = cva("leading-relaxed", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg sm:text-xl",
    },
    tone: {
      default: "text-neutral-600",
      muted: "text-neutral-500",
      accent: "text-primary-600",
    },
  },
  defaultVariants: {
    size: "md",
    tone: "default",
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface SubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof subtitleVariants> {
  as?: "p" | "span" | "div";
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, size, as = "h2", ...props }, ref) => {
    const Comp = as;
    return (
      <Comp
        className={cn(titleVariants({ size }), "text-neutral-800", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

const Subtitle = React.forwardRef<HTMLParagraphElement, SubtitleProps>(
  ({ className, size, tone, as = "p", ...props }, ref) => {
    const Comp = as;
    return (
      <Comp
        className={cn(subtitleVariants({ size, tone }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Title.displayName = "Title";
Subtitle.displayName = "Subtitle";

export { Title, Subtitle, titleVariants, subtitleVariants };
