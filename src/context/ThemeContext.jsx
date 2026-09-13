import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

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

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
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

  // Cross-fade every token-driven colour, but only for the duration of the
  // toggle — a temporary `.theme-transition` class on <html> (see index.css).
  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!reduce) {
      root.classList.add("theme-transition");
      if (themeTimer.current) clearTimeout(themeTimer.current);
      themeTimer.current = setTimeout(() => {
        root.classList.remove("theme-transition");
        themeTimer.current = null;
      }, 380);
    }
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
