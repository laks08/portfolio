import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Latin-only subsets — the full imports pull Cyrillic/Greek/Hebrew/Vietnamese/
// math/symbol subsets this site never uses.
import "@fontsource/fira-code/latin-400.css";
import "@fontsource/fira-code/latin-500.css";
import "@fontsource/fira-code/latin-700.css";
import "@fontsource/open-sans/latin-400.css";
import "@fontsource/open-sans/latin-400-italic.css";
import "@fontsource/open-sans/latin-600.css";
import "./index.css";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
