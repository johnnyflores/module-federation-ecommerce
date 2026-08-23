import { useTheme } from "@ecommerce/ui";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggle.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      className="theme-toggle"
    >
      {theme === "light" ? (
        <Moon aria-hidden="true" size={24} />
      ) : (
        <Sun aria-hidden="true" size={24} />
      )}
    </button>
  );
}
