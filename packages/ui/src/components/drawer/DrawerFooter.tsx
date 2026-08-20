import type { ReactNode } from "react";

export type DrawerFooterProps = {
  children: ReactNode;
};

export function DrawerFooter({ children }: DrawerFooterProps) {
  return <div className="drawer__footer">{children}</div>;
}
