import React from "react";
import CircleButton from "./CircleButton";

/**
 * Rounded pill with an Open Sans italic label. When `icon` is passed
 * it renders as the reference's "pill + separate circular button"
 * pair (both point at the same target).
 */
const PillButton = ({
  href,
  onClick,
  label,
  icon,
  variant = "solid",
  className = "",
  ...rest
}) => {
  const look =
    variant === "solid"
      ? "bg-paper text-paper-ink hover:opacity-90"
      : "border border-line text-text hover:border-text";
  const pillCls = `inline-flex items-center justify-center rounded-full px-6 py-3 font-sans italic text-sm transition-colors duration-200 ${look} ${className}`;
  const external = href && /^https?:/.test(href);
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  const pill = href ? (
    <a href={href} className={pillCls} {...linkProps} {...rest}>
      {label}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={pillCls} {...rest}>
      {label}
    </button>
  );

  if (!icon) return pill;

  return (
    <span className="inline-flex items-center gap-2">
      {pill}
      <CircleButton
        href={href}
        onClick={onClick}
        label={label}
        variant={variant}
        aria-hidden={href ? undefined : true}
        tabIndex={href ? -1 : undefined}
      >
        {icon}
      </CircleButton>
    </span>
  );
};

export default PillButton;
