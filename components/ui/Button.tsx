"use client";

import { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  withArrow?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", withArrow = false, children, className = "", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:ring-neutral-900",
      outline:
        "bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-50 focus-visible:ring-neutral-900",
      ghost:
        "bg-transparent text-white hover:bg-white/10 focus-visible:ring-white",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
        {withArrow && (
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20">
            <ArrowUpRight className="w-6 h-6" />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
