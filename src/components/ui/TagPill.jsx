import React from "react";

/**
 * Outlined monospace tag pill — the reference renders project tech
 * stacks as a wrapping row of these rather than a slash list.
 */
const TagPill = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-muted ${className}`}
  >
    {children}
  </span>
);

export default TagPill;
