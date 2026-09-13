import React from "react";

/**
 * Outlined pill used for social links: brand icon + Open Sans italic label.
 */
const Chip = ({ href, icon: Icon, label, onClick, className = "" }) => {
  const cls = `inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-sans text-sm text-muted transition-colors duration-200 hover:border-text hover:text-text ${className}`;
  const external = href && /^https?:/.test(href);
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {Icon ? <Icon size={16} aria-hidden="true" /> : null}
        <span className="italic">{label}</span>
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {Icon ? <Icon size={16} aria-hidden="true" /> : null}
      <span className="italic">{label}</span>
    </button>
  );
};

export default Chip;
