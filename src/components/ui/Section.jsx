import React from "react";
import SectionLabel from "./SectionLabel";
import BackgroundRings from "./BackgroundRings";

/**
 * Shared section shell: narrow centered column, generous vertical
 * whitespace, optional `... /label ...` marker and ring decoration.
 *
 * Every section needs an accessible name for screen-reader navigation.
 * Pass `headingId` when the section already renders its own visible
 * heading (e.g. a <DisplayHeading id="...">) to label the section with
 * it; pass `heading` (plain text) when it doesn't, and Section renders
 * a visually-hidden <h2> for that purpose instead. `SectionLabel` is
 * decorative ("... /projects ...") and is never a real heading.
 */
const Section = ({
  id,
  label,
  labelAlign = "left",
  labelSlash = true,
  rings = true,
  ringPosition = "right",
  className = "",
  heading,
  headingId,
  children,
}) => {
  const srHeadingId = heading ? `${id}-heading` : undefined;
  const labelledBy = headingId ?? srHeadingId;

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative scroll-mt-20 overflow-hidden py-14 md:py-20 ${className}`}
    >
      {rings && <BackgroundRings position={ringPosition} />}
      <div className="relative z-10 mx-auto w-full max-w-content px-5 sm:px-8">
        {heading && (
          <h2 id={srHeadingId} className="sr-only">
            {heading}
          </h2>
        )}
        {label && (
          <SectionLabel align={labelAlign} slash={labelSlash} className="mb-6 md:mb-8">
            {label}
          </SectionLabel>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
