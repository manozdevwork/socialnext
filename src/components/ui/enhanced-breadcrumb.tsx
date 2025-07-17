
import * as React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  maxItems?: number;
  className?: string;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, separator, maxItems = 3, className, ...props }, ref) => {
    const renderSeparator = () => {
      return separator || <ChevronRight className="h-4 w-4" />;
    };

    const renderItems = () => {
      if (items.length <= maxItems) {
        return items;
      }

      const firstItem = items[0];
      const lastItems = items.slice(-maxItems + 1);
      
      return [
        firstItem,
        { label: "...", href: undefined, onClick: undefined },
        ...lastItems
      ];
    };

    const displayItems = renderItems();

    return (
      <nav ref={ref} aria-label="breadcrumb" className={className} {...props}>
        <ol className="flex items-center space-x-1 text-sm text-muted-foreground">
          {displayItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <li className="flex items-center" aria-hidden="true">
                  {renderSeparator()}
                </li>
              )}
              <li className="flex items-center">
                {item.label === "..." ? (
                  <span className="flex h-8 w-8 items-center justify-center">
                    <MoreHorizontal className="h-4 w-4" />
                  </span>
                ) : index === displayItems.length - 1 ? (
                  <span 
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : item.href ? (
                  <a
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ) : item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb };
