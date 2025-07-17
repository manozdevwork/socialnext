
import * as React from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface Tag {
  id: string;
  label: string;
}

export interface TagInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>,
    VariantProps<typeof tagVariants> {
  label?: string;
  error?: string;
  helpText?: string;
  tags: Tag[];
  onTagsChange: (tags: Tag[]) => void;
  maxTags?: number;
  placeholder?: string;
}

const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  ({ 
    className, 
    variant, 
    label, 
    error, 
    helpText, 
    tags, 
    onTagsChange, 
    maxTags,
    placeholder = "Add tags...",
    ...props 
  }, ref) => {
    const [inputValue, setInputValue] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);
    
    React.useImperativeHandle(ref, () => inputRef.current!);

    const addTag = (tagLabel: string) => {
      const trimmedLabel = tagLabel.trim();
      if (trimmedLabel && !tags.some(tag => tag.label === trimmedLabel)) {
        if (!maxTags || tags.length < maxTags) {
          const newTag: Tag = {
            id: Date.now().toString(),
            label: trimmedLabel
          };
          onTagsChange([...tags, newTag]);
          setInputValue("");
        }
      }
    };

    const removeTag = (tagId: string) => {
      onTagsChange(tags.filter(tag => tag.id !== tagId));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        addTag(inputValue);
      } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
        removeTag(tags[tags.length - 1].id);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const inputId = React.useId();
    const errorId = error ? `${inputId}-error` : undefined;
    const helpId = helpText ? `${inputId}-help` : undefined;

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
        <div
          className={cn(
            "flex min-h-[2.5rem] w-full flex-wrap gap-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
            error && "border-destructive focus-within:ring-destructive",
            className
          )}
        >
          {tags.map((tag) => (
            <span key={tag.id} className={cn(tagVariants({ variant }))}>
              {tag.label}
              <button
                type="button"
                onClick={() => removeTag(tag.id)}
                className="ml-1 h-3 w-3 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {tag.label}</span>
              </button>
            </span>
          ))}
          <input
            ref={inputRef}
            id={inputId}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? placeholder : ""}
            disabled={maxTags ? tags.length >= maxTags : false}
            className="flex-1 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 min-w-[120px]"
            aria-describedby={cn(errorId, helpId)}
            aria-invalid={!!error}
            {...props}
          />
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
);

TagInput.displayName = "TagInput";

export { TagInput, tagVariants };
