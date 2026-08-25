import type { ReactNode } from "react";

export type DrawerHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function DrawerHeader({ children, className = "" }: DrawerHeaderProps) {
  return <div className={`drawer__header ${className}`}>{children}</div>;
}
