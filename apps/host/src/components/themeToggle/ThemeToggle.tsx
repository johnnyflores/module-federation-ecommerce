import { Moon, Sun } from "lucide-react";
import { Button, useTheme, cn } from "@ecommerce/ui";
import "./ThemeToggle.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      className="theme-toggle"
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        <Sun
          className={cn(
            "theme-toggle__sun",
            isLight && "theme-toggle__sun--active",
          )}
          size={24}
        />

        <Moon
          className={cn(
            "theme-toggle__moon",
            !isLight && "theme-toggle__moon--active",
          )}
          size={24}
        />
      </span>
    </Button>
  );
}
