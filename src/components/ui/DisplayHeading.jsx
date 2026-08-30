import React from "react";

/**
 * Staggered, asymmetrically-indented display heading in Fira Code —
 * the signature move from the reference ("Full-stack" / "  Developer").
 *
 * `lines` is an array of strings OR { text, muted, indent } objects.
 * `indent` is a 0-based step; each step nudges the line further right.
 */
const INDENT = ["ml-0", "ml-[4vw] md:ml-[5ch]", "ml-[8vw] md:ml-[10ch]"];

const DisplayHeading = ({
  lines,
  as: Tag = "h2",
  className = "",
  size = "text-[clamp(2.5rem,8vw,5.5rem)]",
}) => (
  <Tag
    className={`font-mono font-bold leading-[1.05] tracking-tightest ${size} ${className}`}
  >
    {lines.map((line, i) => {
      const obj = typeof line === "string" ? { text: line } : line;
      const step = obj.indent ?? i;
      return (
        <span
          key={i}
          className={`block ${INDENT[Math.min(step, INDENT.length - 1)]} ${
            obj.muted ? "text-muted" : ""
          }`}
        >
          {obj.text}
        </span>
      );
    })}
  </Tag>
);

export default DisplayHeading;
