
import * as React from "react";
import { cn } from "@/lib/utils";
import { TagsListProps } from "@/types/component-types";
import { Tag } from "./tag";

/**
 * TagsList component for displaying multiple tags
 */
const TagsList = React.forwardRef<HTMLDivElement, TagsListProps>(
  ({
    tags,
    isDismissible = false,
    isSelectable = false,
    onTagDismiss,
    onTagClick,
    selectedTags = [],
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-wrap gap-2"
        {...props}
      >
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            label={tag.label}
            color={tag.color}
            isDismissible={isDismissible}
            isSelected={selectedTags.includes(tag.id)}
            onDismiss={isDismissible ? () => onTagDismiss?.(tag.id) : undefined}
            onClick={isSelectable ? () => onTagClick?.(tag.id) : undefined}
          />
        ))}
      </div>
    );
  }
);

TagsList.displayName = "TagsList";

export { TagsList };
