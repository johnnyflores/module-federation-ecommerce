import { Moon, Sun } from "lucide-react";
import { Button, useTheme } from "@ecommerce/ui";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <Moon aria-hidden="true" size={24} />
      ) : (
        <Sun aria-hidden="true" size={24} />
      )}
    </Button>
  );
}
