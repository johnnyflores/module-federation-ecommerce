import type { ReactNode } from "react";
import { cn } from "../../utils";

export type DrawerHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function DrawerHeader({ children, className }: DrawerHeaderProps) {
  return <div className={cn("ui-drawer__header", className)}>{children}</div>;
}
