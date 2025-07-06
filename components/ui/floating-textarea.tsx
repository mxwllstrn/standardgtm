// components/ui/floating-textarea.tsx
"use client"; // This component uses client-side hooks

import * as React from "react";
// Assuming 'cn' utility is not used for now.

export interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string; // Label is required for this component
  focusRingColorClass?: string; // <--- ADD THIS NEW PROP
}

const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  ({ className, label, placeholder, focusRingColorClass, ...props }, ref) => { // Destructure placeholder
    const [isFocused, setIsFocused] = React.useState(false);
    // Check if the textarea has a value (either controlled or uncontrolled)
    const hasValue = !!props.value || !!props.defaultValue;

    // Determine if the label should be in its floating (small, top) state
    const shouldFloat = isFocused || hasValue;
    const focusClasses = focusRingColorClass || "focus:ring-blue-500 focus:border-blue-500"; // <--- DEFAULT HERE

    return (
      <div className="relative w-full">
        {/* The Floating Label */}
        <label
          htmlFor={props.id || props.name} // Link label to textarea by id or name
          className={`
            absolute left-2 transition-all duration-200 ease-in-out pointer-events-none
            ${shouldFloat
              ? "-top-3 text-sm bg-white px-1 -ml-1 text-neutral-600 z-10" // Floating state (adjusted colors for white background)
              : "top-4 text-base text-gray-400" // Resting state: Adjusted 'top' to match textarea padding
            }
          `}
        >
          {label}
        </label>
        {/* The Textarea Field */}
        <textarea
          className={`
            flex w-full rounded-xs border border-gray-300 bg-white px-2 py-2 text-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            disabled:cursor-not-allowed disabled:opacity-50
            text-gray-900 
            ${focusClasses} /* <--- APPLY DYNAMIC FOCUS CLASSES HERE */
            ${shouldFloat ? 'pt-4' : 'py-2'} /* Adjust padding based on label state, pt-4 for space */
            resize-y /* Allow vertical resizing */
            ${className || ''}
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={ref}
          placeholder={shouldFloat ? '' : placeholder} // Hide placeholder when label floats
          {...props}
        />
      </div>
    );
  }
);
FloatingTextarea.displayName = "FloatingTextarea";

export { FloatingTextarea };