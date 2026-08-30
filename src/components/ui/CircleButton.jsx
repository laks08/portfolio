import React from "react";

/**
 * Round icon-only control — carousel arrows, the arrow that pairs
 * with a PillButton, etc. Renders as <a> when `href` is given.
 */
const CircleButton = React.forwardRef(
  (
    { href, onClick, label, children, variant = "outline", size = "md", className = "", ...rest },
    ref
  ) => {
    const dims = size === "sm" ? "h-9 w-9" : size === "lg" ? "h-14 w-14" : "h-11 w-11";
    const look =
      variant === "solid"
        ? "bg-paper text-paper-ink border border-transparent hover:opacity-90"
        : "border border-line text-text hover:border-text";
    const cls = `inline-flex shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${dims} ${look} ${className}`;

    if (href) {
      const external = /^https?:/.test(href);
      return (
        <a
          ref={ref}
          href={href}
          aria-label={label}
          className={cls}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <button ref={ref} type="button" onClick={onClick} aria-label={label} className={cls} {...rest}>
        {children}
      </button>
    );
  }
);

CircleButton.displayName = "CircleButton";
export default CircleButton;
