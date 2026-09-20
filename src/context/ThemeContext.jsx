import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext();
const STORAGE_KEY = "theme";

const getInitialIsDark = () => {
  if (typeof window === "undefined") return true;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light") return false;
    if (saved === "dark") return true;
  } catch {
    /* localStorage unavailable — fall through */
  }
  if (window.matchMedia?.("(prefers-color-scheme: light)").matches) return false;
  return true; // dark-first default
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialIsDark);
  const themeTimer = useRef(null);

  // Must be a *layout* effect, not a passive one: toggleTheme's View
  // Transition path wraps the state update in flushSync, which only flushes
  // layout effects synchronously. A passive useEffect here would still apply
  // the class after startViewTransition's callback returns and its "after"
  // snapshot is taken — the DOM would then mutate mid-transition, which
  // browsers reject with an InvalidStateError and abort the crossfade.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Persisting to storage has no such timing constraint — keep it as a
  // regular effect.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [isDark]);

  // Follow the OS preference only until the user picks a theme explicitly.
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return undefined;
    const onChange = (e) => {
      try {
        if (!window.localStorage.getItem(STORAGE_KEY)) setIsDark(e.matches);
      } catch {
        setIsDark(e.matches);
      }
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(
    () => () => {
      if (themeTimer.current) clearTimeout(themeTimer.current);
    },
    []
  );

  // Cross-fade the whole page between themes. Where supported, a single
  // View Transition takes one GPU-composited snapshot blend of old vs. new —
  // smooth no matter how many elements change colour, which animating each
  // element's own background/border/text colour (the old approach, still
  // used as the fallback below) cannot guarantee: forcing a `transition` on
  // every matched element makes the browser recalc style and repaint each of
  // them every frame, and on a page this size that reliably drops frames.
  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      setIsDark((v) => !v);
      return;
    }

    if (typeof document.startViewTransition === "function") {
      const transition = document.startViewTransition(() => {
        // flushSync forces the state update (and the class-toggling effect
        // below) to commit synchronously, so the View Transition captures
        // the new theme as its "after" snapshot instead of the old one.
        flushSync(() => setIsDark((v) => !v));
      });
      // The theme is already applied via flushSync above regardless of what
      // happens to the transition itself — a browser can still skip/abort it
      // (an overlapping toggle, reduced compositor support, etc.). That's a
      // silent no-op (page just jumps instead of crossfading), not a failure
      // worth surfacing, so swallow it rather than leave an unhandled
      // rejection in the console.
      transition.ready?.catch(() => {});
      transition.finished?.catch(() => {});
      return;
    }

    // Fallback for browsers without the View Transitions API.
    root.classList.add("theme-transition");
    if (themeTimer.current) clearTimeout(themeTimer.current);
    themeTimer.current = setTimeout(() => {
      root.classList.remove("theme-transition");
      themeTimer.current = null;
    }, 380);
    setIsDark((v) => !v);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
