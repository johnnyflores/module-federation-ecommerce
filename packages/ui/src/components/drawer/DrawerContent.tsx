import type { ReactNode } from "react";

export type DrawerContentProps = {
  children: ReactNode;
};

export function DrawerContent({ children }: DrawerContentProps) {
  return <div className="drawer__content">{children}</div>;
}
