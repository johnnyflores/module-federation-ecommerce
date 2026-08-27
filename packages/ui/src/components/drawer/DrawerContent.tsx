import type { ReactNode } from "react";
import { cn } from "../../utils";

export type DrawerContentProps = {
  children: ReactNode;
  className?: string;
};

export function DrawerContent({ children, className }: DrawerContentProps) {
  return <div className={cn("ui-drawer__content", className)}>{children}</div>;
}
