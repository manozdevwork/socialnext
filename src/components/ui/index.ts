
// Main barrel export for all UI components
export * from './enhanced-button';
export * from './enhanced-dialog'; 
export * from './enhanced-breadcrumb';
export * from './typography';
export * from './forms';
export * from './icons';

// Re-export existing components for backward compatibility with different names
export { Button as OriginalButton } from './button';
export { Dialog as OriginalDialog } from './dialog';
export { Breadcrumb as OriginalBreadcrumb } from './breadcrumb';
export * from './input';
export * from './textarea';
export { Checkbox as OriginalCheckbox } from './checkbox';
// Removed conflicting RadioGroup export - use the one from forms
export * from './switch';
// Removed conflicting SelectItem export - use the one from forms
export { Select, SelectContent, SelectTrigger, SelectValue } from './select';
