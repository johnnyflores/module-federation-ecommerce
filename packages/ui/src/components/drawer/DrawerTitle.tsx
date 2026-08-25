import type { ReactNode } from "react";
import { useDrawerContext } from "./DrawerContext";

export type DrawerTitleProps = {
  children: ReactNode;
  className?: string;
};

export function DrawerTitle({ children, className = "" }: DrawerTitleProps) {
  const { titleId } = useDrawerContext();
  return (
    <h2 id={titleId} className={`drawer__title ${className}`}>
      {children}
    </h2>
  );
}
