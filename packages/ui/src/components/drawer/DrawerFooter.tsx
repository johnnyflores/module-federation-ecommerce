import type { ReactNode } from "react";

export type DrawerFooterProps = {
  children: ReactNode;
  className?: string;
};

export function DrawerFooter({ children, className = "" }: DrawerFooterProps) {
  return <div className={`drawer__footer ${className}`}>{children}</div>;
}
