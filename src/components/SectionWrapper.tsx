import * as React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, title, children, className = "", ...props }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 border-t border-zinc-100 dark:border-zinc-800/50 ${className}`} {...props}>
      <div className="container mx-auto px-6 max-w-6xl">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight mb-12 sm:mb-16">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
