import React from "react";

/**
 * Faint concentric-circle line decoration, matching the reference's
 * background motif. Purely decorative.
 */
const BackgroundRings = ({ className = "", position = "right" }) => {
  const anchor =
    position === "left"
      ? "-left-1/3 top-1/2 -translate-y-1/2"
      : position === "center"
      ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      : "-right-1/4 top-0";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${anchor} -z-0 ${className}`}
    >
      <svg
        width="900"
        height="900"
        viewBox="0 0 900 900"
        fill="none"
        className="max-w-[120vw] opacity-40"
      >
        {[220, 330, 440].map((r) => (
          <circle
            key={r}
            cx="450"
            cy="450"
            r={r}
            stroke="rgb(var(--color-border))"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
};

export default BackgroundRings;
