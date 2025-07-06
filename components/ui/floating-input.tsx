// components/ui/floating-input.tsx
"use client";

import * as React from "react";

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  focusRingColorClass?: string; // <--- ADD THIS NEW PROP
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, type, label, focusRingColorClass, ...props }, ref) => { // Include new prop in destructuring
    const [isFocused, setIsFocused] = React.useState(false);
    const hasValue = !!props.value || !!props.defaultValue;

    const shouldFloat = isFocused || hasValue;

    // Determine the focus ring and border color. Default to blue-500 if not provided.
    const focusClasses = focusRingColorClass || "focus:ring-blue-500 focus:border-blue-500"; // <--- DEFAULT HERE

    return (
      <div className="relative w-full">
        {/* The Floating Label */}
        <label
          htmlFor={props.id || props.name}
          className={`
            absolute left-2 transition-all duration-200 ease-in-out pointer-events-none
            ${shouldFloat
              ? "-top-3 text-sm bg-white px-1 -ml-1 text-neutral-600"
              : "top-1/2 -translate-y-1/2 text-base/1 text-gray-400"
            }
          `}
        >
          {label}
        </label>
        {/* The Input Field */}
        <input
          type={type}
          className={`
            flex h-10 w-full rounded-xs border border-gray-300 bg-white px-2 py-2 text-lg
            focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50
            text-gray-900 py-6
            ${focusClasses} /* <--- APPLY DYNAMIC FOCUS CLASSES HERE */
            ${className || ''}
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
FloatingInput.displayName = "FloatingInput";

export { FloatingInput };