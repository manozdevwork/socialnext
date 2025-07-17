
import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { TextField, type TextFieldProps } from "./TextField";

export interface PasswordFieldProps extends Omit<TextFieldProps, 'type' | 'suffixIcon'> {
  showToggle?: boolean;
}

const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ showToggle = true, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePassword = () => setShowPassword(!showPassword);

    const suffixIcon = showToggle ? (
      <button
        type="button"
        onClick={togglePassword}
        className="hover:text-foreground transition-colors"
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    ) : undefined;

    return (
      <TextField
        ref={ref}
        type={showPassword ? "text" : "password"}
        suffixIcon={suffixIcon}
        placeholder="Enter your password"
        {...props}
      />
    );
  }
);

PasswordField.displayName = "PasswordField";

export { PasswordField };
