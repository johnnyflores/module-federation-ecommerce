import React from "react";
import { cn } from "../../utils";
import "./Header.scss";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Header({ children, className, ...props }: HeaderProps) {
  return (
    <header className={cn("ui-header", className)} {...props}>
      <div className="ui-header__content">{children}</div>
    </header>
  );
}
