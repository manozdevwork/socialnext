import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, LabelHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

// Common component variants
export type VariantType = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ColorType = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

// Common props for components that can have icons
export interface WithIconProps {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

// Common props for components with loading states
export interface WithLoadingProps {
  isLoading?: boolean;
  loadingText?: string;
}

// Common props for components with disabled states
export interface WithDisabledProps {
  isDisabled?: boolean;
}

// Button component props
export interface ButtonProps extends 
  ButtonHTMLAttributes<HTMLButtonElement>,
  WithIconProps,
  WithLoadingProps,
  WithDisabledProps {
  variant?: VariantType;
  size?: SizeType;
  fullWidth?: boolean;
  children: ReactNode;
}

// Text component props
export interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'bodySmall' | 'caption';
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
  children: ReactNode;
  className?: string;
}

// Card component props
export interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered' | 'flat';
  padding?: SizeType | 'none';
  hasShadow?: boolean;
  hoverEffect?: boolean;
  children: ReactNode;
  className?: string;
}

// Container Title props
export interface ContainerTitleProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode | LucideIcon;
  action?: ReactNode;
  className?: string;
}

// Search Field props - Fixed type conflict with size
export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  onSearch?: (value: string) => void;
  isClearable?: boolean;
  isDebounced?: boolean;
  debounceTime?: number;
  fullWidth?: boolean;
  size?: SizeType;
}

// Tag props
export interface TagProps {
  label: string;
  color?: ColorType;
  isDismissible?: boolean;
  isSelected?: boolean;
  onDismiss?: () => void;
  onClick?: () => void;
}

// Tags List props
export interface TagsListProps {
  tags: Array<{ id: string; label: string; color?: ColorType }>;
  isDismissible?: boolean;
  isSelectable?: boolean;
  onTagDismiss?: (id: string) => void;
  onTagClick?: (id: string) => void;
  selectedTags?: string[];
}

// Action Icon props
export interface ActionIconProps {
  icon: ReactNode | LucideIcon;
  label: string;
  color?: ColorType;
  onClick?: () => void;
  tooltipText?: string;
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
}

// Form field props
export interface FormFieldProps {
  label?: string;
  labelFor?: string;
  error?: string;
  hint?: string;
  isRequired?: boolean;
  className?: string;
  children: ReactNode;
}

// Input props
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: ReactNode;
  prefix?: string;
  suffix?: string;
}

// Textarea props
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

// Dialog/Modal props
export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  footer?: ReactNode;
  variant?: 'default' | 'warning' | 'info' | 'success' | 'error';
}

// Thumbnail viewer props
export interface ThumbnailViewerProps {
  images: Array<{ id: string; url: string; title?: string }>;
  size?: 'small' | 'medium' | 'large';
  onImageClick?: (id: string) => void;
}

// List item wrapper props
export interface ListItemProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode | LucideIcon;
  actions?: ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

// Tooltip props
export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  className?: string;
}

// Layout container props
export interface ContainerProps {
  children: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: SizeType | 'none';
  className?: string;
}

// Section props
export interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  spacing?: SizeType;
  className?: string;
  id?: string; // Added id property
}
