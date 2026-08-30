import React from "react";

/**
 * Reference-style section marker, e.g. `... /projects ...`.
 * `slash` toggles the leading "/" seen on some labels in the reference.
 */
const SectionLabel = ({ children, slash = true, align = "left", className = "" }) => {
  const alignment =
    align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";
  return (
    <p
      className={`font-mono text-sm font-bold tracking-label text-text md:text-base ${alignment} ${className}`}
    >
      <span aria-hidden="true">... </span>
      {slash ? "/" : ""}
      {children}
      <span aria-hidden="true"> ...</span>
    </p>
  );
};

export default SectionLabel;
