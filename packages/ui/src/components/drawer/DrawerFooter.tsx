import type { ReactNode } from "react";
import { cn } from "../../utils";

export type DrawerFooterProps = {
  children: ReactNode;
  className?: string;
};

export function DrawerFooter({ children, className }: DrawerFooterProps) {
  return <div className={cn("drawer__footer", className)}>{children}</div>;
}
