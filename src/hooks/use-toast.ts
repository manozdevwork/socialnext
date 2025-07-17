
// Re-export the hooks and functions from ui/use-toast.ts
import { Toast, ToastProps } from "@/components/ui/toast"
import {
  useToast as useToastOriginal,
  toast,
  dismiss,
  type ToastActionElement,
} from "@/components/ui/use-toast"

// Export the hooks and types
export { toast, dismiss, type Toast, type ToastProps, type ToastActionElement }

// Re-export the hook to avoid name conflicts
export const useToast = useToastOriginal
