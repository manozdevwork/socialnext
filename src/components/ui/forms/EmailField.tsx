
import * as React from "react";
import { Mail } from "lucide-react";
import { TextField, type TextFieldProps } from "./TextField";

export interface EmailFieldProps extends Omit<TextFieldProps, 'type' | 'prefixIcon'> {}

const EmailField = React.forwardRef<HTMLInputElement, EmailFieldProps>(
  ({ ...props }, ref) => {
    return (
      <TextField
        ref={ref}
        type="email"
        prefixIcon={<Mail className="h-4 w-4" />}
        placeholder="Enter your email"
        {...props}
      />
    );
  }
);

EmailField.displayName = "EmailField";

export { EmailField };
