import type { ReactNode } from "react";
import { useDrawerContext } from "./DrawerContext";
import { cn } from "../../utils";

export type DrawerTitleProps = {
  children: ReactNode;
  className?: string;
};

export function DrawerTitle({ children, className }: DrawerTitleProps) {
  const { titleId } = useDrawerContext();
  return (
    <h2 id={titleId} className={cn("ui-drawer__title", className)}>
      {children}
    </h2>
  );
}
