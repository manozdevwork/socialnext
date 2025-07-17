
import * as React from "react";
import { cn } from "@/lib/utils";
import { SearchFieldProps } from "@/types/component-types";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";

/**
 * SearchField component
 */
const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  ({
    onSearch,
    isClearable = true,
    isDebounced = true,
    debounceTime = 300,
    fullWidth = true,
    size = "md",
    className,
    ...props
  }, ref) => {
    const [value, setValue] = React.useState(props.value?.toString() || props.defaultValue?.toString() || "");
    const debouncedValue = useDebounce(value, debounceTime);

    React.useEffect(() => {
      if (isDebounced) {
        onSearch?.(debouncedValue as string);
      }
    }, [debouncedValue, onSearch, isDebounced]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      props.onChange?.(e);
      if (!isDebounced) {
        onSearch?.(e.target.value);
      }
    };

    const handleClear = () => {
      setValue("");
      // Create a synthetic event object
      const syntheticEvent = {
        target: { value: "" }
      } as React.ChangeEvent<HTMLInputElement>;
      props.onChange?.(syntheticEvent);
      onSearch?.("");
    };

    // Size variants
    const sizeClasses = {
      xs: "h-7 text-xs",
      sm: "h-8 text-sm",
      md: "h-10 text-sm",
      lg: "h-11 text-base",
      xl: "h-12 text-lg",
    };

    return (
      <div className={cn(
        "relative flex items-center",
        fullWidth && "w-full",
        className
      )}>
        <Search 
          className={cn(
            "absolute left-3 text-neutral-400",
            size === "xs" || size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"
          )} 
        />
        <Input
          ref={ref}
          type="text"
          value={value}
          onChange={handleChange}
          className={cn(
            "pl-9",
            isClearable && value && "pr-9",
            sizeClasses[size]
          )}
          {...props}
        />
        {isClearable && value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 text-neutral-400 hover:text-neutral-600 transition-colors"
            aria-label="Clear search"
          >
            <X 
              className={cn(
                size === "xs" || size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"
              )} 
            />
          </button>
        )}
      </div>
    );
  }
);

SearchField.displayName = "SearchField";

export { SearchField };
