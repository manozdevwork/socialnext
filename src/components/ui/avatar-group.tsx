
import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AvatarWithData {
  src?: string
  fallback: string
  alt?: string
}

interface AvatarGroupProps {
  avatars: AvatarWithData[]
  max?: number
  size?: "sm" | "md" | "lg"
  className?: string
  showCount?: boolean
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ avatars, max = 4, size = "md", className, showCount = true }, ref) => {
    const sizeClasses = {
      sm: "h-6 w-6",
      md: "h-8 w-8",
      lg: "h-10 w-10",
    }
    
    const displayAvatars = avatars.slice(0, max)
    const remaining = avatars.length - max
    
    return (
      <div 
        ref={ref}
        className={cn("flex -space-x-2", className)}
      >
        {displayAvatars.map((avatar, i) => (
          <Avatar 
            key={i}
            className={cn(
              sizeClasses[size],
              "ring-2 ring-white dark:ring-gray-800",
              "transition-transform hover:z-10 hover:scale-110"
            )}
          >
            <AvatarImage src={avatar.src} alt={avatar.alt || avatar.fallback} />
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          </Avatar>
        ))}
        
        {remaining > 0 && showCount && (
          <div 
            className={cn(
              sizeClasses[size],
              "flex items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-800"
            )}
          >
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">+{remaining}</span>
          </div>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = "AvatarGroup"

export { AvatarGroup }
export type { AvatarWithData }
