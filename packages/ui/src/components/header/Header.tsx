import React from "react";
import "./Header.scss";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export function Header({ children, className = "", ...props }: HeaderProps) {
  return (
    <header className={`ui-header ${className}`} {...props}>
      <div className="ui-header__content">{children}</div>
    </header>
  );
}
