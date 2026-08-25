import { useId, useRef, type ReactNode, useEffect } from "react";
import { DrawerContext } from "./DrawerContext";
import "./Drawer.scss";

export type DrawerProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export function Drawer({
  open,
  onClose,
  children,
  className = "",
}: DrawerProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousActiveElement = document.activeElement as HTMLElement | null;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    panelRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panel = panelRef.current;

      if (!panel) {
        return;
      }

      const focusableElements = panel.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      document.removeEventListener("keydown", handleKeyDown);

      previousActiveElement?.focus();
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <DrawerContext.Provider value={{ titleId }}>
      <div className={`drawer ${className}`}>
        <div
          className="drawer__backdrop"
          onClick={onClose}
          aria-hidden="true"
          role="presentation"
        />
        <aside
          ref={panelRef}
          className="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
        >
          {children}
        </aside>
      </div>
    </DrawerContext.Provider>
  );
}
