/**
 * Graceful in-page scrolling: a custom ease-in-out animation (slow start,
 * accelerate, decelerate to a stop) instead of the browser's abrupt native
 * `scrollIntoView({ behavior: "smooth" })`.
 */

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Height of the fixed navbar to leave clear above the target.
const NAV_OFFSET = 80;

let rafId = null;
let teardown = null;

const stop = () => {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
  if (teardown) teardown();
  teardown = null;
};

export const smoothScrollTo = (targetY, { duration } = {}) => {
  stop();

  const startY = window.scrollY;
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const endY = Math.max(0, Math.min(targetY, maxY));
  const distance = endY - startY;
  if (Math.abs(distance) < 2) return;

  const reduce = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reduce) {
    window.scrollTo({ top: endY, behavior: "auto" });
    return;
  }

  // Longer trips take longer, within a graceful band.
  const dur =
    duration ?? Math.min(1000, Math.max(550, Math.abs(distance) * 0.4));
  const startT = performance.now();

  // Let the user cancel by scrolling / paging themselves.
  const onInterrupt = (e) => {
    if (e.type === "keydown") {
      const keys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];
      if (!keys.includes(e.key)) return;
    }
    stop();
  };
  window.addEventListener("wheel", onInterrupt, { passive: true });
  window.addEventListener("touchstart", onInterrupt, { passive: true });
  window.addEventListener("keydown", onInterrupt);
  teardown = () => {
    window.removeEventListener("wheel", onInterrupt);
    window.removeEventListener("touchstart", onInterrupt);
    window.removeEventListener("keydown", onInterrupt);
  };

  const step = (now) => {
    const t = Math.min(1, (now - startT) / dur);
    // `behavior: "auto"` forces an instant per-frame jump, overriding any
    // CSS `scroll-behavior: smooth` that would otherwise fight the tween.
    window.scrollTo({ top: startY + distance * easeInOutCubic(t), behavior: "auto" });
    if (t < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      stop();
    }
  };
  rafId = requestAnimationFrame(step);
};

export const scrollToSection = (id, offset = NAV_OFFSET) => {
  const el = document.getElementById(id);
  if (!el) return;
  const targetY = el.getBoundingClientRect().top + window.scrollY - offset;
  smoothScrollTo(targetY);
  if (typeof history !== "undefined" && history.replaceState) {
    history.replaceState(null, "", `#${id}`);
  }
};
