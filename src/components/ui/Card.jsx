import React from "react";

/**
 * Flat bordered surface — 1px line, card radius, no shadow / no blur.
 */
const Card = React.forwardRef(
  ({ as: Tag = "div", className = "", children, ...rest }, ref) => (
    <Tag
      ref={ref}
      className={`rounded-card border border-line bg-surface p-6 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
);

Card.displayName = "Card";
export default Card;
