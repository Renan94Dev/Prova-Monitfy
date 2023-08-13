import React, { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...rest }, ref) => {
    const errorStyle = twMerge(className, "border-2 border-red-400");

    return (
      <input
        className={error ? errorStyle : className}
        id={rest.name}
        ref={ref}
        {...rest}
      />
    );
  }
);

InputField.displayName = "InputField";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  error: boolean;
}
