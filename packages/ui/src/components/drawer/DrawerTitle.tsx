import type { ReactNode } from "react";
import { useDrawerContext } from "./DrawerContext";

export type DrawerTitleProps = {
  children: ReactNode;
};

export function DrawerTitle({ children }: DrawerTitleProps) {
  const { titleId } = useDrawerContext();
  return (
    <h2 id={titleId} className="drawer__title">
      {children}
    </h2>
  );
}
