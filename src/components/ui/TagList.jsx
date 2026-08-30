import React from "react";

/**
 * Monospace slash-separated inline list — "React / Next / Node".
 * The reference uses this everywhere tags/keywords appear.
 */
const TagList = ({ items = [], separator = " / ", className = "" }) => {
  if (!items.length) return null;
  return (
    <p className={`font-mono text-xs leading-relaxed text-muted ${className}`}>
      {items.join(separator)}
    </p>
  );
};

export default TagList;
