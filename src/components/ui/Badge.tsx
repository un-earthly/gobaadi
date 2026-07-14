import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "outline" | "subtle";
}

export function Badge({ className, variant = "primary", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-widest md:px-5 md:py-2 md:text-base",
        {
          "bg-brand-accent text-brand-primary border border-brand-primary": variant === "primary",
          "bg-transparent text-brand-primary border border-brand-primary": variant === "outline",
          "bg-brand-primary/10 text-brand-primary": variant === "subtle",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
