import { createContext, useContext } from "react";

export type DrawerContextValue = {
  titleId: string;
};

export const DrawerContext = createContext<DrawerContextValue | null>(null);

export function useDrawerContext() {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("Drawer components must be used inside <Drawer>");
  }

  return context;
}
