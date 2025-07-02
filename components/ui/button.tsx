// components/ui/button.tsx
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // You might need to create this for class merging

// Simple utility for merging tailwind classes (optional, but good practice)
// lib/utils.ts
// export function cn(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  href?: string; // For Next.js Link compatibility
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, asChild = false, href, ...props }, ref) => {
    const Comp = asChild ? "div" : "button"; // Or a specific component if asChild is true

    if (href) {
      return (
        <Link href={href} passHref legacyBehavior>
          <a
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              "bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2", // Default styling
              className
            )}
            ref={ref as any} // Cast ref for anchor element
            {...props}
          >
            {children}
          </a>
        </Link>
      );
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2", // Default styling
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };