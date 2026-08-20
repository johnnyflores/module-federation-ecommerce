import type { ReactNode } from "react";

export type DrawerHeaderProps = {
  children: ReactNode;
};

export function DrawerHeader({ children }: DrawerHeaderProps) {
  return <div className="drawer__header">{children}</div>;
}
