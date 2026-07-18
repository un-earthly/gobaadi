import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  headingId?: string;
  description?: string;
  align?: "left" | "center";
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  badge,
  title,
  headingId,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
  ...props
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:gap-5",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary bg-brand-accent px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-brand-primary md:px-5 md:py-2">
          {badge}
        </span>
      )}
      <h2
        id={headingId}
        className={cn(
          "text-3xl font-semibold tracking-tight text-text-primary md:text-5xl lg:text-[56px] lg:leading-[1.15]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg lg:text-xl",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
