
import * as React from "react";
import { Search, X } from "lucide-react";
import { TextField, type TextFieldProps } from "./TextField";
import { cn } from "@/lib/utils";

export interface SearchInputProps extends Omit<TextFieldProps, 'prefixIcon' | 'suffixIcon'> {
  onSearch?: (value: string) => void;
  onClear?: () => void;
  showClearButton?: boolean;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, onClear, showClearButton = true, className, onChange, ...props }, ref) => {
    const [value, setValue] = React.useState(props.value || props.defaultValue || "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onChange?.(e);
      onSearch?.(newValue);
    };

    const handleClear = () => {
      setValue("");
      onClear?.();
      onSearch?.("");
    };

    const suffixIcon = showClearButton && value ? (
      <button
        type="button"
        onClick={handleClear}
        className="hover:text-foreground transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    ) : null;

    return (
      <TextField
        ref={ref}
        prefixIcon={<Search className="h-4 w-4" />}
        suffixIcon={suffixIcon}
        placeholder="Search..."
        className={cn("", className)}
        value={value}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

SearchInput.displayName = "SearchInput";

export { SearchInput };
