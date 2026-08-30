import React from "react";
import SectionLabel from "./SectionLabel";
import BackgroundRings from "./BackgroundRings";

/**
 * Shared section shell: narrow centered column, generous vertical
 * whitespace, optional `... /label ...` marker and ring decoration.
 */
const Section = ({
  id,
  label,
  labelAlign = "left",
  labelSlash = true,
  rings = true,
  ringPosition = "right",
  className = "",
  children,
}) => (
  <section
    id={id}
    className={`relative scroll-mt-20 overflow-hidden py-14 md:py-20 ${className}`}
  >
    {rings && <BackgroundRings position={ringPosition} />}
    <div className="relative z-10 mx-auto w-full max-w-content px-5 sm:px-8">
      {label && (
        <SectionLabel align={labelAlign} slash={labelSlash} className="mb-6 md:mb-8">
          {label}
        </SectionLabel>
      )}
      {children}
    </div>
  </section>
);

export default Section;
